import app from "./dist/server/index.mjs";
const req = new Request("http://localhost:8080/");
const res = await app.fetch(req, {}, { waitUntil: () => {}, passThroughOnException: () => {} });
console.log("status:", res.status);
const html = await res.text();
console.log(html.slice(0, 200));
