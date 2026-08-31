import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import { TrustAgentShell } from "../../trustagent/TrustAgentShell";
import { usePageMeta } from "../../hooks/usePageMeta";
import { trackEvent } from "../../lib/analytics";

const sectionClass = "mx-auto max-w-6xl px-6 py-20";
const cardClass =
  "rounded-3xl border border-slate-800 bg-slate-900/55 p-8 shadow-[0_0_0_1px_rgba(34,211,238,0.03)]";

const mechanismSteps = [
  ["01", "Real company evidence", "Bring the people, work, systems, decisions, and perspectives already shaping the business."],
  ["02", "Formation", "StrategicAI forms a bounded picture from what the evidence actually supports."],
  ["03", "Inspect and disagree", "See what is known, disputed, or still unknown instead of forcing a clean story too early."],
  ["04", "Correction", "Owners and people close to the work can say: “No. That’s not how it works.”"],
  ["05", "Operational Reality", "The picture becomes a clearer view of how the organization actually operates."],
  ["06", "Operational Intelligence", "Connected understanding becomes useful for questions, decisions, and prioritization."],
  ["07", "Business Views", "Bounded projections make selected relationships, dependencies, and pressure inspectable."],
  ["08", "Nemo", "Reason from the accepted company context instead of reconstructing the business from zero."],
] as const;

const evidenceStates = [
  ["Known", "What the available evidence supports right now."],
  ["Disputed", "Where perspectives or sources do not yet agree."],
  ["Unknown", "What remains missing, unresolved, or worth investigating."],
] as const;

export default function HowItWorks() {
  usePageMeta({
    title: "How StrategicAI Works | From Operational Reality to Intelligence",
    description:
      "See how StrategicAI turns real company evidence and perspectives into Operational Reality, Operational Intelligence, Business Views, and context-aware reasoning with Nemo.",
    path: "/how-it-works",
  });

  function handleProofClick() {
    trackEvent("homepage_proof_open", { source: "how-it-works" });
  }

  function handleFounding100Click() {
    trackEvent("founding100_cta_click", {
      source: "how-it-works",
      destination: "/founding100/offer",
    });
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
              <p className="mb-6 text-sm font-semibold uppercase tracking-[0.28em] text-cyan-300/80">How It Works</p>
              <h1 className="text-5xl font-semibold leading-[1.05] text-white md:text-7xl">Understand the business before deciding what to change.</h1>
              <p className="mt-8 max-w-3xl text-lg leading-8 text-slate-300 md:text-2xl md:leading-10">StrategicAI starts with real company evidence, forms a correctable picture of how the organization operates, and turns that picture into intelligence you can inspect and reason from.</p>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
                <Link to="/#proof-thread" onClick={handleProofClick} className="inline-flex items-center justify-center rounded-full bg-cyan-400 px-7 py-4 text-base font-semibold text-slate-950 transition hover:bg-cyan-300">See the Golden Proof Thread <ArrowRight size={17} className="ml-2" aria-hidden="true" /></Link>
                <Link to="/product" className="inline-flex items-center justify-center rounded-full border border-slate-700 px-7 py-4 text-base font-semibold text-white transition hover:border-slate-500 hover:bg-slate-900">Explore the product</Link>
              </div>
            </div>
          </div>
        </section>

        <section className={sectionClass} aria-labelledby="mechanism-title">
          <div className="mb-10 max-w-3xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-cyan-300/75">The mechanism</p>
            <h2 id="mechanism-title" className="text-3xl font-semibold text-white md:text-5xl">The picture comes before the recommendation.</h2>
            <p className="mt-6 text-lg leading-8 text-slate-400">A useful next step depends on knowing what is actually happening. StrategicAI keeps evidence, perspective, correction, and uncertainty visible as the company picture takes shape.</p>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {mechanismSteps.map(([number, title, body]) => (
              <article key={number} className={`${cardClass} flex gap-5`}>
                <span className="pt-1 text-sm font-semibold tracking-[0.18em] text-cyan-300/70">{number}</span>
                <div>
                  <h3 className="text-xl font-semibold text-white">{title}</h3>
                  <p className="mt-3 text-base leading-7 text-slate-400">{body}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className={`${sectionClass} pt-0`} aria-labelledby="evidence-title">
          <div className="grid items-stretch gap-8 lg:grid-cols-[1.05fr_0.95fr]">
            <div className={cardClass}>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-cyan-300/75">Formation</p>
              <h2 id="evidence-title" className="text-3xl font-semibold text-white md:text-5xl">A credible picture does not require pretending everything is settled.</h2>
              <p className="mt-6 text-lg leading-8 text-slate-300">Formation is the work of turning organizational evidence into a bounded, inspectable picture. It should preserve competing perspectives, make the evidence boundary clear, and leave an explicit unknown as an unknown.</p>
              <p className="mt-6 text-base leading-7 text-slate-400">When an owner corrects the picture, the accepted understanding changes. That correction is not a failure state; it is part of building intelligence the business can actually use.</p>
            </div>
            <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-1">
              {evidenceStates.map(([title, body]) => (
                <div key={title} className="rounded-3xl border border-cyan-400/15 bg-cyan-400/[0.04] p-6">
                  <div className="flex items-center gap-3"><CheckCircle2 size={18} className="text-cyan-300" aria-hidden="true" /><h3 className="text-lg font-semibold text-white">{title}</h3></div>
                  <p className="mt-3 text-sm leading-6 text-slate-400">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className={sectionClass} aria-labelledby="action-title">
          <div className="rounded-3xl border border-amber-200/20 bg-[linear-gradient(145deg,rgba(70,55,30,0.32),rgba(15,23,42,0.82))] p-8 md:p-12">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-amber-200/80">The operating order</p>
            <h2 id="action-title" className="max-w-3xl text-3xl font-semibold text-white md:text-5xl">Evidence before recommendation. Scope before automation.</h2>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">Business Views make the relevant part of the picture visible. Nemo helps an owner ask better questions from that context. A capability, automation, investigation, or decision follows only when the picture supports it and the owner decides.</p>
            <div className="mt-10 flex flex-wrap items-center gap-3 text-sm text-slate-300">
              {['Operational Reality', 'Operational Intelligence', 'Business Views', 'Nemo', 'Warranted action'].map((item, index) => (
                <span key={item} className="inline-flex items-center gap-3"><span className="rounded-full border border-slate-700 bg-slate-950/40 px-4 py-2">{item}</span>{index < 4 ? <ArrowRight size={15} className="text-cyan-200" aria-hidden="true" /> : null}</span>
              ))}
            </div>
          </div>
        </section>

        <section className={`${sectionClass} pt-0`} aria-labelledby="next-title">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-cyan-300/75">What comes next</p>
              <h2 id="next-title" className="text-3xl font-semibold text-white md:text-5xl">Build the intelligence before you decide what to automate.</h2>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">The Founding 100 is the current commercial entry for owners who want to bring real company context, corrections, and hard operating questions into the experience.</p>
            </div>
            <div className={`${cardClass} flex flex-col justify-between`}>
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300/75">Founding 100</p>
                <p className="mt-5 text-lg leading-8 text-slate-300">A serious body of intelligence about your company, useful Business Views, and the Founding 100 experience with Nemo.</p>
              </div>
              <Link to="/founding100/offer" onClick={handleFounding100Click} className="mt-8 inline-flex items-center justify-center rounded-full bg-cyan-400 px-6 py-3.5 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300">Explore Founding 100 <ArrowRight size={16} className="ml-2" aria-hidden="true" /></Link>
            </div>
          </div>
        </section>
      </main>
      <TrustAgentShell enabled={true} mode="public" />
    </div>
  );
}
