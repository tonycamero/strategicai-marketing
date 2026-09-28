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

const appSource = await readFile("src/App.tsx", "utf8");
const shellSource = await readFile("src/components/Shell.tsx", "utf8");
const footerSource = await readFile("src/components/Footer.tsx", "utf8");
const goldenProofSource = await readFile("src/lib/goldenProofThread.ts", "utf8");
const funnelStyles = await readFile("src/pages/public/founding100-funnel.css", "utf8");
const combined = [...sources.values()].join("\n");
assert.match(appSource, /function ScrollToRoute/);
assert.match(appSource, /window\.scrollTo\(\{ top: 0, left: 0, behavior: "auto" \}\)/);
assert.match(appSource, /<ScrollToRoute \/>/);
assert.doesNotMatch(shellSource, /useLocation|window\.scrollTo/);
assert.match(sources.get("AlternateHomePage.tsx"), /<p[^>]*>STRUCTURAL INTELLIGENCE<\/p>/);
assert.match(sources.get("AlternateHomePage.tsx"), /<h1[^>]*>Intelligence is more than cognition<\/h1>/);
assert.match(sources.get("AlternateHomePage.tsx"), /<h2[^>]*>Your business is not a machine\. It is a living system\.<\/h2>/);
assert.match(sources.get("AlternateHomePage.tsx"), /StrategicAI brings the reality of that system into view—across people, work, responsibilities, evidence, constraints, and change—so it can be inspected, challenged, corrected, and reasoned against\./);
assert.match(sources.get("AlternateHomePage.tsx"), /See how StrategicAI turns scattered operating reality into a shared picture\./);
assert.doesNotMatch(sources.get("AlternateHomePage.tsx"), /Start with one real problem\. Follow it through the business\./);
assert.match(sources.get("AlternateHomePage.tsx"), /hero-heart-final\.webp/);
assert.match(sources.get("AlternateHomePage.tsx"), /data-hero-heart-background/);
assert.match(sources.get("AlternateHomePage.tsx"), /md:bg-fixed/);
assert.match(sources.get("AlternateHomePage.tsx"), /opacity-\[0\.24\]/);
assert.doesNotMatch(sources.get("AlternateHomePage.tsx"), /hero-heart-option-|data-hero-heart-selector/);
assert.doesNotMatch(sources.get("AlternateHomePage.tsx"), /brain-bg/);
assert.match(sources.get("AlternateHomePage.tsx"), /Your systems don’t contain everything your business knows/);
assert.match(sources.get("AlternateHomePage.tsx"), /One business\. No shared picture\./);
assert.match(sources.get("AlternateHomePage.tsx"), /management drag/);
assert.match(sources.get("AlternateHomePage.tsx"), /Frontier models provide intelligence\. StrategicAI provides organizational reality\./);
assert.match(sources.get("AlternateHomePage.tsx"), /incomplete, inconsistent, transient, or stale/);
assert.match(sources.get("AlternateHomePage.tsx"), /What changed since last month\?/);
assert.match(sources.get("AlternateHomePage.tsx"), /"04", "Reason with Nemo", "Use frontier intelligence to reason from structured context instead of reconstructing the business each time\."/);
for (const outcome of ["Executive visibility", "Earlier risk detection", "Board preparation", "Leadership alignment", "Trusted answers", "Decision velocity"]) {
  assert.match(sources.get("AlternateHomePage.tsx"), new RegExp(outcome));
}
assert.match(sources.get("HowItWorks.tsx"), /Different answers are not noise/);
assert.match(sources.get("HowItWorks.tsx"), /What nobody knows yet belongs in the picture too/);
assert.match(sources.get("HowItWorks.tsx"), /Illustrative example · not a customer result/);
assert.match(sources.get("HowItWorks.tsx"), /Change and continuity/);
assert.match(sources.get("HowItWorks.tsx"), /This does not mean automatic monitoring or guaranteed risk detection/);
assert.match(sources.get("Product.tsx"), /Operational Reality/);
assert.match(sources.get("Product.tsx"), /Nemo helps you reason\. Leadership decides\./);
assert.match(sources.get("Product.tsx"), /persistent, inspectable, correctable representation/);
assert.match(sources.get("Product.tsx"), /Frontier models provide intelligence\. StrategicAI provides organizational reality\./);
assert.match(sources.get("Product.tsx"), /Nemo is not the durable asset/);
assert.match(sources.get("Product.tsx"), /models reason from the available context; people inspect, dispute, and correct the picture/);
assert.match(sources.get("Product.tsx"), /Built to be challenged, not blindly trusted/);
assert.match(sources.get("Partners.tsx"), /Bring better context into the work before implementation begins/);
assert.match(sources.get("Pricing.tsx"), /Ways to work with StrategicAI/);
assert.match(sources.get("Founding100Content.tsx"), /Bring one recurring problem\. Start there\./);
assert.match(sources.get("Founding100Offer.tsx"), /Bring the messy version/);
assert.match(sources.get("Founding100Offer.tsx"), /f100-offer-value-messy/);
assert.match(sources.get("Founding100Offer.tsx"), /A good place to start/);
assert.match(sources.get("Founding100Offer.tsx"), /What can compound through the experience/);
assert.match(sources.get("Founding100Offer.tsx"), /The picture can become richer and more useful through use and correction/);
assert.match(sources.get("Founding100Offer.tsx"), /not a separate artifact, a guarantee of completeness, or a promise that every change is captured automatically/);
assert.match(sources.get("Founding100Offer.tsx"), /buildFounding100Path\("\/founding100\/apply"/);
assert.match(sources.get("Founding100Offer.tsx"), /Formation, Business Views, available evidence, corrections, Nemo interactions, and changes over time/);
assert.match(sources.get("Founding100.tsx"), /Start with one real problem/);
assert.match(sources.get("Founding100.tsx"), /hero-heart-final\.webp/);
assert.match(sources.get("Founding100.tsx"), /data-hero-heart-background/);
assert.match(sources.get("Founding100.tsx"), /md:bg-fixed/);
assert.match(sources.get("Founding100.tsx"), /opacity-\[0\.24\]/);
assert.match(sources.get("Founding100.tsx"), /noindex, nofollow/);
assert.match(sources.get("Intake.tsx"), /“I don’t know” is useful here/);
assert.match(sources.get("IntakeThanks.tsx"), /Your perspective is one piece of the picture/);

assert.doesNotMatch(combined, /Build My Executive Brief/);
assert.doesNotMatch(combined, /Business Intelligence Portfolio/);
assert.doesNotMatch(combined, /AI Brain|TrustConsole/);
assert.doesNotMatch(combined, /brain-bg/);
assert.doesNotMatch(funnelStyles, /brain-bg|f100-offer-brain/);
for (const file of ["HowItWorks.tsx", "Product.tsx", "Pricing.tsx", "Partners.tsx", "Founding100Offer.tsx"]) {
  assert.match(sources.get(file), /hero-heart-final\.webp/);
}
assert.doesNotMatch(combined, /bring your own model|BYOM/i);
assert.doesNotMatch(combined, /automatically monitors|automatically updates|automatic alerts/i);
assert.doesNotMatch(combined.replace(sources.get("Founding100Offer.tsx"), ""), /\$299|90(?:\s+days?|[-‑]day)/i);
assert.doesNotMatch(combined, /to=["']\/founding100["']/);
assert.match(footerSource, /frontier intelligence can reason against/);

const goldenProofAssets = ["evidence", "picture", "correction", "question"];
assert.doesNotMatch(goldenProofSource, /homepage-proof-.*-placeholder\.svg|PLACEHOLDER IMAGE/);
assert.match(goldenProofSource, /status: "AWAITING_REAL_PROOF"/);
assert.match(goldenProofSource, /Illustrative example · not a customer result/);
assert.deepEqual([...goldenProofSource.matchAll(/durationSeconds: (\d+)/g)].map((match) => Number(match[1])), [4, 5, 7, 5]);
assert.match(goldenProofSource, /navLabel: "Reasoning"/);
assert.doesNotMatch(goldenProofSource, /navLabel: "Ask Nemo"/);
assert.match(sources.get("AlternateHomePage.tsx"), /new IntersectionObserver/);
assert.match(sources.get("AlternateHomePage.tsx"), /trigger: "scroll_into_view"/);
assert.match(sources.get("AlternateHomePage.tsx"), /Replay the 21-second walkthrough/);
assert.match(sources.get("AlternateHomePage.tsx"), /onMouseEnter=\{\(\) => selectProofStep\(index, "hover"\)\}/);
assert.match(sources.get("AlternateHomePage.tsx"), /onFocus=\{\(\) => selectProofStep\(index, "focus"\)\}/);
for (const asset of goldenProofAssets) {
  assert.match(goldenProofSource, new RegExp(`/images/homepage-proof-${asset}\\.webp`));
  const image = await readFile(`public/images/homepage-proof-${asset}.webp`);
  assert.equal(image.toString("ascii", 0, 4), "RIFF");
  assert.equal(image.toString("ascii", 8, 12), "WEBP");
  assert.equal(image.toString("ascii", 12, 16), "VP8 ");
  assert.equal(image.readUInt16LE(26) & 0x3fff, 1600);
  assert.equal(image.readUInt16LE(28) & 0x3fff, 1000);
}

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
  "founding100/apply",
  "founding100/schedule",
  "founding100/enroll",
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
assert.match(getHtml("/"), /frontier intelligence can reason against/);
assert.match(getHtml("/product"), /organizational reality available as shared, correctable context/);
assert.match(getHtml("/founding100/offer"), /founder-assisted Founding 100 cohort fits/);
for (const route of ["/founding100", "/founding100/apply", "/founding100/schedule", "/founding100/enroll", "/intake", "/intake/thanks", "/login"]) {
  assert.match(getHtml(route), /name="robots" content="noindex, nofollow"/);
}

const sitemap = await readFile("public/sitemap.xml", "utf8");
for (const route of indexable) assert.match(sitemap, new RegExp(`<loc>https:\\/\\/strategicai\\.app${route === "/" ? "\\/" : route}</loc>`));
for (const route of ["/founding100", "/founding100/apply", "/founding100/schedule", "/founding100/enroll", "/intake", "/intake/thanks", "/login"]) assert.doesNotMatch(sitemap, new RegExp(`<loc>https:\\/\\/strategicai\\.app${route}</loc>`));

console.log("public v2 copy, route, metadata, and indexing contract tests passed");
