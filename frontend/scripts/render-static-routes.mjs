import { mkdir, readFile, writeFile } from "node:fs/promises";
import { join } from "node:path";

const routes = [
  { path: "how-it-works", title: "How StrategicAI Works | From Evidence to a Shared Operating Picture", description: "See what happens to messy business information: evidence becomes a shared operating picture that people can disagree with, correct, and use before action.", heading: "Everyone has a piece. StrategicAI helps put the picture together.", robots: "index, follow" },
  { path: "product", title: "StrategicAI Product | Operational Reality to Operational Intelligence", description: "Explore the parts of StrategicAI: Operational Reality, the shared operating picture, Operational Intelligence, Business Views, Nemo, and warranted capabilities.", heading: "Make what your company knows visible, durable, and usable.", robots: "index, follow" },
  { path: "pricing", title: "Ways to Work with StrategicAI | Start with the Picture", description: "Founding 100 is the current public place to begin building shared understanding of how your business works before deciding what deserves attention.", heading: "Start with the picture before you choose the fix.", robots: "index, follow" },
  { path: "partners", title: "StrategicAI Partners | Better Context Before Implementation", description: "Bring better context into implementation by helping clients form a shared operating picture people can inspect and correct before consequential change.", heading: "Bring better context into the work before implementation begins.", robots: "index, follow" },
  { path: "founding100/quick", title: "StrategicAI Founding 100 | Why Problems Keep Returning", description: "A five-minute explanation of why operating problems keep returning when business context is scattered across people, systems, and memory.", heading: "If the same problems keep coming back, they may not be separate problems.", robots: "index, follow" },
  { path: "founding100/webinar", title: "StrategicAI Founding 100 | Understanding Before Intervention", description: "A 35-minute walkthrough of why understanding, disagreement, correction, Business Views, and Nemo should precede consequential intervention.", heading: "If everyone has a piece and you’re still the one putting it together, start with understanding.", robots: "index, follow" },
  { path: "founding100/offer", title: "StrategicAI Founding 100 | See What It Includes", description: "Bring the real business, build a shared operating picture with StrategicAI, correct it, and use the approved Founding 100 experience to ask better questions.", heading: "If everyone has a piece and you’re still the one putting it together, start here.", robots: "index, follow" },
  { path: "founding100", title: "StrategicAI Founding 100 | Start with One Real Problem", description: "You’re in. Start with one real problem—the question, handoff, dependency, exception, or recurring issue that keeps pulling you back into the middle.", heading: "You’re in.", robots: "noindex, nofollow" },
  { path: "intake", title: "StrategicAI Intake | Start with the Operating Problem", description: "Start with the operating problem that is actually bothering you. Add the people, workarounds, perspectives, and unknowns around it.", heading: "Start with the operating problem", robots: "noindex, nofollow" },
  { path: "intake/thanks", title: "StrategicAI Intake | Your Perspective Is One Piece", description: "Your perspective is one piece of the picture. Check your email to authenticate and continue the current StrategicAI intake workflow.", heading: "Your perspective is one piece of the picture.", robots: "noindex, nofollow" },
  { path: "login", title: "StrategicAI | Sign-in Is Not Available Here", description: "This StrategicAI route is not available as a public page. Return to the current public story.", heading: "This route is not part of the public picture.", robots: "noindex, nofollow" },
];

const base = await readFile("dist/index.html", "utf8");

function replaceMeta(html, attribute, key, value) {
  const pattern = new RegExp(`(<meta\\s+${attribute}=["']${key}["']\\s+content=["'])[^"']*(["']\\s*/?>)`, "i");
  return html.replace(pattern, `$1${value}$2`);
}

function renderRoute(route) {
  const canonical = `https://strategicai.app/${route.path}`;
  let html = base
    .replace(/<title>.*?<\/title>/i, `<title>${route.title}</title>`)
    .replace(/(<link\s+rel=["']canonical["']\s+href=["'])[^"']*(["']\s*\/?>)/i, `$1${canonical}$2`)
    .replace(/(<h1 style="[^"]*">).*?(<\/h1>)/i, `$1${route.heading}$2`);
  html = replaceMeta(html, "name", "description", route.description);
  html = replaceMeta(html, "property", "og:title", route.title);
  html = replaceMeta(html, "property", "og:description", route.description);
  html = replaceMeta(html, "property", "og:url", canonical);
  html = replaceMeta(html, "name", "twitter:title", route.title);
  html = replaceMeta(html, "name", "twitter:description", route.description);
  html = replaceMeta(html, "name", "robots", route.robots);
  return html;
}

for (const route of routes) {
  const outputDir = join("dist", route.path);
  await mkdir(outputDir, { recursive: true });
  await writeFile(join(outputDir, "index.html"), renderRoute(route));
}
