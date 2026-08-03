import { cpSync, existsSync, mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

const ROUTES = ["/", "/about", "/services", "/process", "/portfolio", "/faq", "/contact"];

const serverPath =
  process.env.SERVER_PATH ??
  (existsSync("dist/server/index.mjs") ? "dist/server/index.mjs" : ".output/server/index.mjs");

const publicDir =
  process.env.PUBLIC_DIR ??
  (existsSync("dist/client") ? "dist/client" : ".output/public");

if (!existsSync(serverPath)) {
  console.error(`Server bundle not found at ${serverPath}`);
  process.exit(1);
}

const { default: app } = await import(serverPath);

const env = {};
const context = { waitUntil: () => {}, passThroughOnException: () => {} };

for (const route of ROUTES) {
  const url = `http://localhost${route}`;
  const req = new Request(url);
  const res = await app.fetch(req, env, context);
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

// CNAME tells GitHub Pages which custom domain to serve.
if (existsSync("CNAME")) {
  cpSync("CNAME", join(publicDir, "CNAME"));
  console.log("Copied CNAME to output");
}
