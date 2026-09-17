import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

const activePages = [
  "AlternateHomePage.tsx",
  "HowItWorks.tsx",
  "Product.tsx",
  "Pricing.tsx",
  "Partners.tsx",
  "Founding100Content.tsx",
  "Founding100Offer.tsx",
  "Founding100.tsx",
  "Intake.tsx",
  "IntakeThanks.tsx",
  "Placeholder.tsx",
  "NotFound.tsx",
];

const sources = new Map();
for (const file of activePages) {
  sources.set(file, await readFile(`src/pages/public/${file}`, "utf8"));
}

const combined = [...sources.values()].join("\n");
assert.match(sources.get("AlternateHomePage.tsx"), /available evidence into a shared operating picture/);
assert.match(sources.get("AlternateHomePage.tsx"), /Your systems don’t contain everything your business knows/);
for (const outcome of ["Executive visibility", "Earlier risk detection", "Board preparation", "Leadership alignment", "Trusted answers", "Decision velocity"]) {
  assert.match(sources.get("AlternateHomePage.tsx"), new RegExp(outcome));
}
assert.match(sources.get("HowItWorks.tsx"), /Different answers are not noise/);
assert.match(sources.get("HowItWorks.tsx"), /What nobody knows yet belongs in the picture too/);
assert.match(sources.get("HowItWorks.tsx"), /Illustrative example · not a customer result/);
assert.match(sources.get("Product.tsx"), /Operational Reality/);
assert.match(sources.get("Product.tsx"), /Nemo helps you reason\. Leadership decides\./);
assert.match(sources.get("Product.tsx"), /Most AI begins with your question\. Nemo begins with the context behind it/);
assert.match(sources.get("Product.tsx"), /Built to be challenged, not blindly trusted/);
assert.match(sources.get("Partners.tsx"), /Bring better context into the work before implementation begins/);
assert.match(sources.get("Pricing.tsx"), /Ways to work with StrategicAI/);
assert.match(sources.get("Founding100Content.tsx"), /Bring one recurring problem\. Start there\./);
assert.match(sources.get("Founding100Offer.tsx"), /Bring the messy version/);
assert.match(sources.get("Founding100Offer.tsx"), /f100-offer-value-messy/);
assert.match(sources.get("Founding100Offer.tsx"), /A good place to start/);
assert.match(sources.get("Founding100.tsx"), /Start with one real problem/);
assert.match(sources.get("Founding100.tsx"), /noindex, nofollow/);
assert.match(sources.get("Intake.tsx"), /“I don’t know” is useful here/);
assert.match(sources.get("IntakeThanks.tsx"), /Your perspective is one piece of the picture/);

assert.doesNotMatch(combined, /Build My Executive Brief/);
assert.doesNotMatch(combined, /Business Intelligence Portfolio/);
assert.doesNotMatch(combined, /AI Brain|TrustConsole/);
assert.doesNotMatch(combined.replace(sources.get("Founding100Offer.tsx"), ""), /\$299|90 days/);
assert.doesNotMatch(combined, /to=["']\/founding100["']/);

const routes = await readFile("src/routes.tsx", "utf8");
assert.match(routes, /path: ["']\/intake["'][\s\S]*LegacyRedirect to=["']\/founding100\/offer["']/);
assert.match(routes, /path: ["']\/intake\/thanks["'][\s\S]*LegacyRedirect to=["']\/founding100\/offer["']/);
assert.match(routes, /path: ["']\/founding100["'][\s\S]*shell: false/);
assert.match(routes, /path: ["']\/engagements["'][\s\S]*LegacyRedirect to=["']\/pricing["']/);

const staticRoutes = [
  "",
  "how-it-works",
  "product",
  "pricing",
  "partners",
  "founding100/quick",
  "founding100/webinar",
  "founding100/offer",
  "founding100",
  "intake",
  "intake/thanks",
  "login",
];
const htmlByRoute = new Map();
for (const route of staticRoutes) {
  const file = route ? `dist/${route}/index.html` : "dist/index.html";
  htmlByRoute.set(route || "/", await readFile(file, "utf8"));
}

const indexable = ["/", "/how-it-works", "/product", "/pricing", "/partners", "/founding100/quick", "/founding100/webinar", "/founding100/offer"];
const getHtml = (route) => htmlByRoute.get(route === "/" ? "/" : route.slice(1));
const titles = indexable.map((route) => getHtml(route).match(/<title>(.*?)<\/title>/)?.[1]);
const descriptions = indexable.map((route) => getHtml(route).match(/<meta\s+name="description"\s+content="([^"]*)"/)?.[1]);
assert.equal(new Set(titles).size, indexable.length);
assert.equal(new Set(descriptions).size, indexable.length);
for (const route of indexable) {
  const html = getHtml(route);
  assert.match(html, /property="og:title"/);
  assert.match(html, /property="og:description"/);
  assert.match(html, /name="twitter:title"/);
  assert.match(html, /name="twitter:description"/);
  assert.match(html, /name="robots" content="index, follow"/);
}
for (const route of ["/founding100", "/intake", "/intake/thanks", "/login"]) {
  assert.match(getHtml(route), /name="robots" content="noindex, nofollow"/);
}

const sitemap = await readFile("public/sitemap.xml", "utf8");
for (const route of indexable) assert.match(sitemap, new RegExp(`<loc>https:\\/\\/strategicai\\.app${route === "/" ? "\\/" : route}</loc>`));
for (const route of ["/founding100", "/intake", "/intake/thanks", "/login"]) assert.doesNotMatch(sitemap, new RegExp(`<loc>https:\\/\\/strategicai\\.app${route}</loc>`));

console.log("public v2 copy, route, metadata, and indexing contract tests passed");
