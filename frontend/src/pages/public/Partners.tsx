import { ArrowRight, CheckCircle2, Mail, Network, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";
import { TrustAgentShell } from "../../trustagent/TrustAgentShell";
import { usePageMeta } from "../../hooks/usePageMeta";
import { trackEvent } from "../../lib/analytics";

const sectionClass = "mx-auto max-w-6xl px-6 py-20";
const cardClass =
  "rounded-3xl border border-slate-800 bg-slate-900/55 p-8 shadow-[0_0_0_1px_rgba(34,211,238,0.03)]";

const partnerClasses = [
  ["Advisors and consultants", "Bring a more inspectable operating picture into consequential client decisions."],
  ["Automation and AI partners", "Scope automation from the relationships and evidence that actually matter."],
  ["Systems specialists", "Understand where systems fit in the organization before proposing another integration."],
  ["Domain specialists", "Add bounded expertise without claiming authority over the whole operating model."],
  ["Ecosystem partners", "Introduce StrategicAI into a defined context with clear commercial and delivery boundaries."],
] as const;

const commitments = [
  "Evidence before recommendations.",
  "Authority before action.",
  "Scope before automation.",
  "Accountable leadership remains accountable.",
  "Receipts before outcome claims.",
] as const;

export default function Partners() {
  usePageMeta({
    title: "StrategicAI Partners | Understand Before You Implement",
    description:
      "StrategicAI helps advisors, automation partners, systems specialists, and ecosystem leaders scope downstream work from a clearer operating picture.",
    path: "/partners",
  });

  function handlePartnerInquiry() {
    trackEvent("partner_inquiry_click", { source: "partners" });
  }

  function handleFounding100Click() {
    trackEvent("founding100_cta_click", { source: "partners", destination: "/founding100/offer" });
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <main>
        <section className="relative overflow-hidden border-b border-slate-800/70">
          <div className="absolute inset-0">
            <img src="/images/brain-bg.jpg" alt="" className="h-full w-full object-cover opacity-[0.08]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.16),transparent_42%),linear-gradient(180deg,rgba(2,6,23,0.4),#020617_82%)]" />
          </div>
          <div className="relative mx-auto max-w-6xl px-6 pb-24 pt-28">
            <div className="max-w-4xl">
              <p className="mb-6 text-sm font-semibold uppercase tracking-[0.28em] text-cyan-300/80">Partners</p>
              <h1 className="text-5xl font-semibold leading-[1.05] text-white md:text-7xl">Understand before you implement.</h1>
              <p className="mt-8 max-w-3xl text-lg leading-8 text-slate-300 md:text-2xl md:leading-10">StrategicAI helps establish an inspectable operating picture before downstream work is scoped. That makes room for the right advisor, automation partner, systems specialist, or domain expert to act with better context.</p>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
                <a href="mailto:tony@strategicai.app?subject=StrategicAI%20partner%20inquiry" onClick={handlePartnerInquiry} className="inline-flex items-center justify-center rounded-full bg-cyan-400 px-7 py-4 text-base font-semibold text-slate-950 transition hover:bg-cyan-300">Start a partner conversation <Mail size={17} className="ml-2" aria-hidden="true" /></a>
                <Link to="/founding100/offer" onClick={handleFounding100Click} className="inline-flex items-center justify-center rounded-full border border-slate-700 px-7 py-4 text-base font-semibold text-white transition hover:border-slate-500 hover:bg-slate-900">See the current entry</Link>
              </div>
            </div>
          </div>
        </section>

        <section className={sectionClass} aria-labelledby="relationship-title">
          <div className="grid items-start gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-cyan-300/75">The relationship</p>
              <h2 id="relationship-title" className="text-3xl font-semibold text-white md:text-5xl">StrategicAI establishes the context. Qualified partners carry the work forward when warranted.</h2>
              <p className="mt-6 text-lg leading-8 text-slate-300">A partner is not asked to pretend the organization is simpler than it is. The operating picture should make the relevant relationship, boundary, or decision clearer before anyone proposes a solution.</p>
            </div>
            <div className="rounded-3xl border border-cyan-400/20 bg-[linear-gradient(145deg,rgba(9,42,49,0.7),rgba(15,23,42,0.9))] p-8">
              <div className="flex flex-wrap items-center gap-3 text-sm text-slate-300">
                {['Operational Reality', 'Operational Intelligence', 'Better-scoped next step', 'Partner delivery'].map((item, index) => <span key={item} className="inline-flex items-center gap-3"><span className="rounded-full border border-slate-700 bg-slate-950/40 px-4 py-2">{item}</span>{index < 3 ? <ArrowRight size={15} className="text-cyan-200" aria-hidden="true" /> : null}</span>)}
              </div>
              <p className="mt-8 text-base leading-7 text-slate-300">Strong downstream automation and implementation partners are not competitors by definition. They become more useful when the work is understood and roles and boundaries are explicit.</p>
            </div>
          </div>
        </section>

        <section className={`${sectionClass} pt-0`} aria-labelledby="partner-types-title">
          <div className="mb-10 max-w-3xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-cyan-300/75">Where partners fit</p>
            <h2 id="partner-types-title" className="text-3xl font-semibold text-white md:text-5xl">Different expertise. One operating boundary.</h2>
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {partnerClasses.map(([title, body]) => (
              <article key={title} className={cardClass}>
                <Network size={21} className="text-cyan-300" aria-hidden="true" />
                <h3 className="mt-6 text-xl font-semibold text-white">{title}</h3>
                <p className="mt-4 text-base leading-7 text-slate-400">{body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className={sectionClass} aria-labelledby="commitments-title">
          <div className="rounded-3xl border border-slate-800 bg-slate-900/55 p-8 md:p-12">
            <div className="grid items-start gap-10 lg:grid-cols-[0.9fr_1.1fr]">
              <div>
                <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-cyan-300/75">Shared commitments</p>
                <h2 id="commitments-title" className="text-3xl font-semibold text-white md:text-5xl">Leverage requires boundaries.</h2>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {commitments.map((item) => <p key={item} className="flex gap-3 text-lg leading-8 text-slate-300"><CheckCircle2 size={19} className="mt-1 shrink-0 text-cyan-300" aria-hidden="true" />{item}</p>)}
              </div>
            </div>
          </div>
        </section>

        <section className={`${sectionClass} pt-0`} aria-labelledby="partner-next-title">
          <div className="rounded-3xl border border-cyan-400/20 bg-[linear-gradient(145deg,rgba(9,42,49,0.7),rgba(15,23,42,0.9))] p-8 text-center md:p-12">
            <ShieldCheck size={28} className="mx-auto text-cyan-300" aria-hidden="true" />
            <h2 id="partner-next-title" className="mt-6 text-3xl font-semibold text-white md:text-5xl">Bring better context to the work you already do.</h2>
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">Partner access remains bounded while the operating model and delivery standards are proven. Start with a conversation about the kind of organizations and downstream work you support.</p>
            <a href="mailto:tony@strategicai.app?subject=StrategicAI%20partner%20inquiry" onClick={handlePartnerInquiry} className="mt-10 inline-flex items-center rounded-full bg-cyan-400 px-6 py-3.5 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300">Contact StrategicAI <Mail size={16} className="ml-2" aria-hidden="true" /></a>
          </div>
        </section>
      </main>
      <TrustAgentShell enabled={true} mode="public" />
    </div>
  );
}
