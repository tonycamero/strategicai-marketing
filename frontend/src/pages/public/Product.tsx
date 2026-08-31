import { ArrowRight, CheckCircle2, Eye, GitBranch, MessageCircle, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";
import { TrustAgentShell } from "../../trustagent/TrustAgentShell";
import { usePageMeta } from "../../hooks/usePageMeta";
import { trackEvent } from "../../lib/analytics";

const sectionClass = "mx-auto max-w-6xl px-6 py-20";
const cardClass =
  "rounded-3xl border border-slate-800 bg-slate-900/55 p-8 shadow-[0_0_0_1px_rgba(34,211,238,0.03)]";

const realityInputs = [
  ["People", "What each role sees, owns, and depends on."],
  ["Work", "How requests, decisions, and handoffs actually move."],
  ["Systems", "Where information lives, changes, or goes missing."],
  ["Perspectives", "What is known, disputed, assumed, or still unknown."],
] as const;

const businessViews = [
  ["How work moves", "Follow a workflow across people, systems, and decisions."],
  ["Where dependencies sit", "See the relationships that make one person or handoff a point of fragility."],
  ["What remains unknown", "Keep evidence gaps and disagreement visible instead of filling them with certainty."],
  ["What deserves attention", "Use the picture to choose action, ownership, investigation, or no change."],
] as const;

const capabilities = [
  "Automation when the evidence supports it",
  "Coordination and ownership when the relationship is clear",
  "Alerts or investigation when a meaningful condition is visible",
  "No change when the better decision is to keep learning",
] as const;

export default function Product() {
  usePageMeta({
    title: "StrategicAI Product | Operational Intelligence Built from Operational Reality",
    description:
      "StrategicAI turns real company evidence into Operational Reality, Operational Intelligence, Business Views, and context-aware reasoning with Nemo.",
    path: "/product",
  });

  function handleFounding100Click() {
    trackEvent("founding100_cta_click", { source: "product", destination: "/founding100/offer" });
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
              <p className="mb-6 text-sm font-semibold uppercase tracking-[0.28em] text-cyan-300/80">Product</p>
              <h1 className="text-5xl font-semibold leading-[1.05] text-white md:text-7xl">Operational Intelligence built from Operational Reality.</h1>
              <p className="mt-8 max-w-3xl text-lg leading-8 text-slate-300 md:text-2xl md:leading-10">StrategicAI helps you understand how the business actually works, then makes that understanding useful for the questions and decisions in front of you.</p>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
                <Link to="/how-it-works" className="inline-flex items-center justify-center rounded-full bg-cyan-400 px-7 py-4 text-base font-semibold text-slate-950 transition hover:bg-cyan-300">How it works <ArrowRight size={17} className="ml-2" aria-hidden="true" /></Link>
                <Link to="/founding100/offer" onClick={handleFounding100Click} className="inline-flex items-center justify-center rounded-full border border-slate-700 px-7 py-4 text-base font-semibold text-white transition hover:border-slate-500 hover:bg-slate-900">Explore Founding 100</Link>
              </div>
            </div>
          </div>
        </section>

        <section className={sectionClass} aria-labelledby="reality-title">
          <div className="grid items-start gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-cyan-300/75">01 · Operational Reality</p>
              <h2 id="reality-title" className="text-3xl font-semibold text-white md:text-5xl">How the organization actually works.</h2>
              <p className="mt-6 text-lg leading-8 text-slate-300">Your operating model already exists. It is distributed across people, work, systems, authority, dependencies, exceptions, and memory. StrategicAI helps make that connected reality visible without claiming it is complete or unquestionable.</p>
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              {realityInputs.map(([title, body]) => (
                <article key={title} className={cardClass}>
                  <h3 className="text-xl font-semibold text-white">{title}</h3>
                  <p className="mt-4 text-base leading-7 text-slate-400">{body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={`${sectionClass} pt-0`} aria-labelledby="intelligence-title">
          <div className="rounded-3xl border border-cyan-400/20 bg-[linear-gradient(145deg,rgba(9,42,49,0.7),rgba(15,23,42,0.9))] p-8 md:p-12">
            <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
              <div>
                <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-cyan-300/75">02 · Operational Intelligence</p>
                <h2 id="intelligence-title" className="text-3xl font-semibold text-white md:text-5xl">Useful understanding formed from the picture.</h2>
                <p className="mt-6 text-lg leading-8 text-slate-300">When the organization can inspect and correct the operating picture, it becomes more than collected context. It becomes intelligence that can support a better question, a clearer decision, or a more appropriate next step.</p>
              </div>
              <div className="grid gap-4 sm:grid-cols-3">
                {[
                  ["Inspect", "Look at the relationship that matters."],
                  ["Correct", "Change the picture when the evidence says it is wrong."],
                  ["Reason", "Ask what follows from the accepted context."],
                ].map(([title, body], index) => (
                  <div key={title} className="rounded-2xl border border-slate-700/80 bg-slate-950/35 p-5">
                    <span className="text-xs font-semibold tracking-[0.18em] text-cyan-300/70">0{index + 1}</span>
                    <h3 className="mt-4 text-lg font-semibold text-white">{title}</h3>
                    <p className="mt-3 text-sm leading-6 text-slate-400">{body}</p>
                  </div>
                ))}
              </div>
            </div>
            <Link to="/#proof-thread" className="mt-10 inline-flex items-center text-sm font-semibold text-cyan-200 transition hover:text-cyan-100">See the Golden Proof Thread <ArrowRight size={16} className="ml-2" aria-hidden="true" /></Link>
          </div>
        </section>

        <section className={sectionClass} aria-labelledby="views-title">
          <div className="mb-10 max-w-3xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-cyan-300/75">03 · Business Views</p>
            <h2 id="views-title" className="text-3xl font-semibold text-white md:text-5xl">Make the useful part inspectable.</h2>
            <p className="mt-6 text-lg leading-8 text-slate-400">Business Views are bounded, correctable projections of the company picture. They help you look at a particular relationship or condition without pretending to replace the whole picture.</p>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {businessViews.map(([title, body]) => (
              <article key={title} className={`${cardClass} flex gap-4`}>
                <Eye size={21} className="mt-1 shrink-0 text-cyan-300" aria-hidden="true" />
                <div><h3 className="text-xl font-semibold text-white">{title}</h3><p className="mt-3 text-base leading-7 text-slate-400">{body}</p></div>
              </article>
            ))}
          </div>
          <p className="mt-8 text-base leading-7 text-slate-400">Business Views adapt to the questions and operating reality of the company. They are not a fixed report bundle.</p>
        </section>

        <section className={`${sectionClass} pt-0`} aria-labelledby="nemo-title">
          <div className="grid items-stretch gap-8 lg:grid-cols-[1.05fr_0.95fr]">
            <div className={cardClass}>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-cyan-300/75">04 · Nemo</p>
              <h2 id="nemo-title" className="text-3xl font-semibold text-white md:text-5xl">Nemo does not start with a blank prompt.</h2>
              <p className="mt-6 text-lg leading-8 text-slate-300">It starts with the organizational context StrategicAI has made available. Nemo is the intended interaction layer for reasoning from that context: a place to ask what depends on the owner, where a handoff is fragile, or what should be inspected next.</p>
              <div className="mt-8 flex items-center gap-4 text-sm text-slate-300"><MessageCircle size={19} className="text-cyan-300" aria-hidden="true" /><span>Reason from the company, not from a generic prompt.</span></div>
            </div>
            <div className="rounded-3xl border border-slate-800 bg-slate-900/55 p-8">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-cyan-300/75">05 · Capabilities</p>
              <h2 className="text-3xl font-semibold text-white">Action follows understanding.</h2>
              <ul className="mt-7 space-y-4 text-base leading-7 text-slate-300">
                {capabilities.map((item) => <li key={item} className="flex gap-3"><CheckCircle2 size={18} className="mt-1 shrink-0 text-cyan-300" aria-hidden="true" />{item}</li>)}
              </ul>
              <div className="mt-8 flex gap-3 text-sm text-slate-400"><GitBranch size={18} className="mt-0.5 shrink-0 text-amber-200" aria-hidden="true" /><span>Scope and authority stay explicit before anything acts.</span></div>
            </div>
          </div>
        </section>

        <section className={sectionClass} aria-labelledby="product-next-title">
          <div className="rounded-3xl border border-slate-800 bg-slate-900/55 p-8 text-center md:p-12">
            <ShieldCheck size={28} className="mx-auto text-cyan-300" aria-hidden="true" />
            <h2 id="product-next-title" className="mt-6 text-3xl font-semibold text-white md:text-5xl">Understand first. Then decide what is next.</h2>
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">See the mechanism in the Golden Proof Thread, or enter the Founding 100 as the current commercial path for building intelligence about your own business.</p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link to="/#proof-thread" className="inline-flex items-center rounded-full border border-slate-700 px-6 py-3.5 text-sm font-semibold text-white transition hover:border-slate-500 hover:bg-slate-950">See the proof</Link>
              <Link to="/founding100/offer" onClick={handleFounding100Click} className="inline-flex items-center rounded-full bg-cyan-400 px-6 py-3.5 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300">Explore Founding 100 <ArrowRight size={16} className="ml-2" aria-hidden="true" /></Link>
            </div>
          </div>
        </section>
      </main>
      <TrustAgentShell enabled={true} mode="public" />
    </div>
  );
}
