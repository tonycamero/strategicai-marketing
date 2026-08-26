import { mkdir, readFile, writeFile } from "node:fs/promises";
import { join } from "node:path";

const routes = [
  { path: "product", title: "StrategicAI Product | A Governed Path From Context to Execution", description: "See how StrategicAI structures operating context, stages consequential decisions, and supports implementation within explicit authority boundaries.", heading: "A governed path from operating context to coordinated change." },
  { path: "pricing", title: "StrategicAI Engagements | Reflection, Diagnosis, Roadmap, and Implementation", description: "Understand the boundary between the free Executive Brief, paid Diagnostic and Roadmap engagements, and scoped implementation support.", heading: "Start with reflection. Add depth only when the evidence earns it." },
  { path: "partners", title: "StrategicAI Partners | Deliver Governed Organizational Change", description: "StrategicAI works with a limited group of operators, advisors, and ecosystem leaders who help organizations move consequential change with clear boundaries and evidence.", heading: "Help leaders change without asking them to gamble the organization." },
  { path: "intake", title: "StrategicAI Intake | Build Your Executive Brief", description: "Provide organization context and leadership input so StrategicAI can build the foundation for your Executive Brief.", heading: "Build Your Executive Brief" },
  { path: "intake/thanks", title: "StrategicAI Intake | Check Your Email", description: "Your workspace has been provisioned. Check your email, authenticate with Magic, and continue in the production platform.", heading: "Check your email to continue" },
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
