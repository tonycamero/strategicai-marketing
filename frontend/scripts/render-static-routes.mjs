import { mkdir, readFile, writeFile } from "node:fs/promises";
import { join } from "node:path";

const routes = [
  { path: "how-it-works", title: "How StrategicAI Works | From Operational Reality to Intelligence", description: "See how StrategicAI turns real company evidence and perspectives into Operational Reality, Operational Intelligence, Business Views, and context-aware reasoning with Nemo.", heading: "Understand the business before deciding what to change." },
  { path: "product", title: "StrategicAI Product | Operational Intelligence Built from Operational Reality", description: "StrategicAI turns real company evidence into Operational Reality, Operational Intelligence, Business Views, and context-aware reasoning with Nemo.", heading: "Operational Intelligence built from Operational Reality." },
  { path: "pricing", title: "Ways to Work with StrategicAI | Founding 100", description: "See the current way to work with StrategicAI: the Founding 100 commercial entry, explicit scope boundaries, and separately scoped downstream work when warranted.", heading: "Start with the current entry. Add depth when the evidence earns it." },
  { path: "partners", title: "StrategicAI Partners | Understand Before You Implement", description: "StrategicAI helps advisors, automation partners, systems specialists, and ecosystem leaders scope downstream work from a clearer operating picture.", heading: "Understand before you implement." },
  { path: "founding100/quick", title: "StrategicAI Founding 100 | The 5-Minute Version", description: "The five-minute StrategicAI belief-shift for business owners. No signup and no email gate.", heading: "You asked for the short version. Here it is." },
  { path: "founding100/webinar", title: "StrategicAI Founding 100 | The Full Walkthrough", description: "The full 35-minute StrategicAI walkthrough for owners who want to understand how their business actually works.", heading: "You already know the moment. This is the full walkthrough." },
  { path: "founding100/offer", title: "StrategicAI Founding 100 | Build Operational Intelligence", description: "Build a serious body of Operational Intelligence about your company, make it visible through Business Views, and work with Nemo from that context for 90 days.", heading: "Build intelligence about your business before you automate it." },
  { path: "founding100", title: "StrategicAI Founding 100 | Welcome", description: "Welcome to StrategicAI Founding 100. Build a serious body of intelligence about your company and learn what happens next.", heading: "You’re in." },
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
