import { cpSync, existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, isAbsolute, join } from "node:path";
import { pathToFileURL } from "node:url";


const ROUTES = ["/", "/about", "/services", "/process", "/portfolio", "/faq", "/contact"];
const RENDER_TIMEOUT_MS = 30_000;

// Never let a stalled render or a swallowed rejection hang the CI step.
process.on("unhandledRejection", (error) => {
  console.error("Prerender failed (unhandled rejection):", error);
  process.exit(1);
});
process.on("uncaughtException", (error) => {
  console.error("Prerender failed (uncaught exception):", error);
  process.exit(1);
});

// dist/nitro.json is the build's own record of where it wrote things — use it as
// the source of truth instead of guessing between dist/client and dist/public.
const OUTPUT_DIR = process.env.OUTPUT_DIR ?? "dist";
const nitroMetaPath = join(OUTPUT_DIR, "nitro.json");
let nitroMeta = {};
if (existsSync(nitroMetaPath)) {
  try {
    nitroMeta = JSON.parse(readFileSync(nitroMetaPath, "utf8"));
  } catch (error) {
    console.error(`Could not parse ${nitroMetaPath}:`, error);
  }
} else {
  console.warn(`${nitroMetaPath} not found; falling back to default output paths.`);
}

const resolveOut = (value, fallback) => {
  if (!value) return fallback;
  return isAbsolute(value) || value.startsWith(`${OUTPUT_DIR}/`)
    ? value
    : join(OUTPUT_DIR, value);
};

const serverPath =
  process.env.SERVER_PATH ?? resolveOut(nitroMeta.serverEntry, join(OUTPUT_DIR, "server/index.mjs"));

const publicDir =
  process.env.PUBLIC_DIR ?? resolveOut(nitroMeta.publicDir, join(OUTPUT_DIR, "client"));

console.log(`Prerender using server entry: ${serverPath}`);
console.log(`Prerender writing static files to: ${publicDir}`);

if (!existsSync(serverPath)) {
  console.error(`Server bundle not found at ${serverPath}`);
  process.exit(1);
}

const mod = await import(pathToFileURL(serverPath).href);
const handler = mod.default?.fetch ?? mod.fetch;
if (typeof handler !== "function") {
  console.error(
    `No fetch handler exported from ${serverPath}. Exported keys: ${Object.keys(mod).join(", ") || "(none)"}` +
      `; default export keys: ${mod.default ? Object.keys(mod.default).join(", ") || "(none)" : "(no default export)"}`,
  );
  process.exit(1);
}
const fetchHandler = (request) => handler(request, env, context);

const env = {};
const context = { waitUntil: () => {}, passThroughOnException: () => {} };

for (const route of ROUTES) {
  const url = `http://localhost${route}`;
  const req = new Request(url);
  let timer;
  const res = await Promise.race([
    fetchHandler(req),
    new Promise((_, reject) => {
      timer = setTimeout(() => {
        reject(new Error(`Timed out rendering ${route} after ${RENDER_TIMEOUT_MS}ms`));
      }, RENDER_TIMEOUT_MS);
      // A pending timer must not keep the event loop alive on success.
      timer.unref?.();
    }),
  ]);
  clearTimeout(timer);
  if (!res.ok) {
    throw new Error(`Failed to render ${route}: ${res.status}`);
  }
  const html = await res.text();
  const outputPath =
    route === "/" ? join(publicDir, "index.html") : join(publicDir, route, "index.html");
  mkdirSync(dirname(outputPath), { recursive: true });
  writeFileSync(outputPath, html);
  console.log(`Prerendered ${route} → ${outputPath}`);
}

// 404.html is required for GitHub Pages so client-side routing (TanStack Router)
// can take over when a user visits a deep link directly.
const indexPath = join(publicDir, "index.html");
const notFoundPath = join(publicDir, "404.html");
cpSync(indexPath, notFoundPath);
console.log(`Copied ${indexPath} → ${notFoundPath}`);

// CNAME tells GitHub Pages which custom domain to serve. Vite normally copies
// public/CNAME into the public output during build; copy it defensively in case
// the output was cleaned before prerendering, then verify the final artifact.
const cnameSourcePath = "public/CNAME";
const cnameOutputPath = join(publicDir, "CNAME");
if (!existsSync(cnameSourcePath)) {
  console.error(`Required domain file not found at ${cnameSourcePath}`);
  process.exit(1);
}
cpSync(cnameSourcePath, cnameOutputPath);
console.log(`Copied ${cnameSourcePath} → ${cnameOutputPath}`);

const cname = readFileSync(cnameOutputPath, "utf8").trim();
if (cname !== "trikalnetra.com") {
  console.error(`Invalid CNAME in ${cnameOutputPath}: expected trikalnetra.com, received ${cname || "(empty)"}`);
  process.exit(1);
}

// The imported production server can retain background handles. GitHub Actions
// only needs the generated static files, so exit once every write has completed.
console.log("Static prerender complete");
process.exit(0);
