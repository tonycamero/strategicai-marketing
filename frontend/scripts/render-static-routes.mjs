import { mkdir, readFile, writeFile } from "node:fs/promises";
import { join } from "node:path";

const routes = [
  { path: "how-it-works", title: "How StrategicAI Works | See How Your Business Actually Works", description: "See how StrategicAI brings people, work, systems, and different perspectives together before you decide what should happen next.", heading: "Ask two people how the work really happens. You may get two different answers." },
  { path: "product", title: "StrategicAI Product | Turn Company Context into Intelligence", description: "StrategicAI turns the pieces already inside your company into a picture you can inspect, correct, and use through Business Views and Nemo.", heading: "Your company already knows more than any one person can see." },
  { path: "pricing", title: "Ways to Work with StrategicAI | See Before You Choose", description: "Start with a clearer picture of how your business actually works, then decide what deserves action. Explore the current Founding 100 entry and its scope.", heading: "Before you choose the fix, see what keeps happening." },
  { path: "partners", title: "StrategicAI Partners | Better Context Before Implementation", description: "Bring better context to client work by understanding how people, work, systems, and exceptions fit together before implementation begins.", heading: "Your client does not need another recommendation yet. They need a clearer picture." },
  { path: "founding100/quick", title: "StrategicAI Founding 100 | See How the Business Actually Works", description: "A five-minute explanation for owners who keep carrying the missing context. No signup and no email gate.", heading: "If the same problems keep coming back, they may not be separate problems." },
  { path: "founding100/webinar", title: "StrategicAI Founding 100 | The Full Business Picture", description: "A 35-minute walkthrough for owners who want to understand how their business actually works before deciding what to change.", heading: "If everyone has a piece and you’re still the one putting it together, this is the full explanation." },
  { path: "founding100/offer", title: "StrategicAI Founding 100 | Build the Picture of Your Business", description: "Join the first 100 businesses building a working picture of how their companies actually work, then use that context with Nemo for the approved 90-day experience.", heading: "If everyone has a piece and you’re still the one putting it together, start here." },
  { path: "founding100", title: "StrategicAI Founding 100 | You’re In", description: "You’re in. Bring the business you actually have, build the picture with StrategicAI, and learn what happens next.", heading: "You’re in." },
];

const base = await readFile("dist/index.html", "utf8");
for (const route of routes) {
  const canonical = `https://strategicai.app/${route.path}`;
  const html = base
    .replace(/<title>.*?<\/title>/, `<title>${route.title}</title>`)
    .replace(/(<meta\s+name="description"\s+content=")[^"]*("\s*\/?>)/, `$1${route.description}$2`)
    .replace(/(<meta\s+property="og:title"\s+content=")[^"]*("\s*\/?>)/, `$1${route.title}$2`)
    .replace(/(<meta\s+property="og:description"\s+content=")[^"]*("\s*\/?>)/, `$1${route.description}$2`)
    .replace(/(<meta\s+property="og:url"\s+content=")[^"]*("\s*\/?>)/, `$1${canonical}$2`)
    .replace(/(<link\s+rel="canonical"\s+href=")[^"]*("\s*\/?>)/, `$1${canonical}$2`)
    .replace(/(<h1 style="[^"]*">).*?(<\/h1>)/, `$1${route.heading}$2`);
  const outputDir = join("dist", route.path);
  await mkdir(outputDir, { recursive: true });
  await writeFile(join(outputDir, "index.html"), html);
}
