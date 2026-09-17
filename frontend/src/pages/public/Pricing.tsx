import { ArrowRight, CheckCircle2, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import { TrustAgentShell } from "../../trustagent/TrustAgentShell";
import { usePageMeta } from "../../hooks/usePageMeta";
import { trackEvent } from "../../lib/analytics";

const sectionClass = "mx-auto max-w-6xl px-6 py-20";
const cardClass = "rounded-3xl border border-slate-800 bg-slate-900/55 p-8 shadow-[0_0_0_1px_rgba(34,211,238,0.03)]";

const boundaries = [
  "Founding 100 is the current public place to begin.",
  "The picture is formed from available company context and human correction.",
  "Business Views adapt to what the available picture supports.",
  "Nemo helps you reason from available company context.",
  "Implementation or specialist work is separately scoped.",
] as const;

export default function Pricing() {
  usePageMeta({
    title: "Ways to Work with StrategicAI | Start with the Picture",
    description: "Founding 100 is the current public place to begin building shared understanding of how your business works before deciding what deserves attention.",
    path: "/pricing",
  });

  function handleFounding100Click() {
    trackEvent("founding100_cta_click", { source: "ways-to-work", destination: "/founding100/offer" });
  }

  function handlePartnerClick() {
    trackEvent("partner_inquiry_click", { source: "ways-to-work" });
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <main>
        <section id="ways-to-work" className="relative overflow-hidden border-b border-slate-800/70"><div className="absolute inset-0"><img src="/images/brain-bg.jpg" alt="" className="h-full w-full object-cover opacity-[0.08]" /><div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.16),transparent_42%),linear-gradient(180deg,rgba(2,6,23,0.4),#020617_82%)]" /></div><div className="relative mx-auto max-w-6xl px-6 pb-24 pt-28"><div className="max-w-4xl"><p className="mb-6 text-sm font-semibold uppercase tracking-[0.28em] text-cyan-300/80">Ways to work with StrategicAI</p><h1 className="text-5xl font-semibold leading-[1.05] text-white md:text-7xl">Start with the picture before you choose the fix.</h1><p className="mt-8 max-w-3xl text-lg leading-8 text-slate-300 md:text-2xl md:leading-10">When the same handoff, interruption, or decision keeps returning, build enough shared understanding of the business to decide what deserves attention next.</p><Link to="/founding100/offer" onClick={handleFounding100Click} className="mt-10 inline-flex items-center rounded-full bg-cyan-400 px-7 py-4 text-base font-semibold text-slate-950 transition hover:bg-cyan-300">See Founding 100 <ArrowRight size={17} className="ml-2" aria-hidden="true" /></Link></div></div></section>

        <section className={sectionClass} aria-labelledby="current-entry-title"><div className="grid items-stretch gap-8 lg:grid-cols-[1.05fr_0.95fr]"><div className={`${cardClass} border-cyan-400/20 bg-[linear-gradient(145deg,rgba(9,42,49,0.7),rgba(15,23,42,0.9))]`}><p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-cyan-300/75">The current public place to begin</p><h2 id="current-entry-title" className="text-3xl font-semibold text-white md:text-5xl">Founding 100</h2><p className="mt-6 text-lg leading-8 text-slate-300">Founding 100 is for businesses where important context is scattered across people, systems, files, conversations, and memory. Bring the business you actually have. Build the operating picture with the people closest to the work, then correct it.</p><p className="mt-6 text-base leading-7 text-slate-400">Current participation details and approved commercial terms are available on the Founding 100 offer page.</p><Link to="/founding100/offer" onClick={handleFounding100Click} className="mt-8 inline-flex items-center text-sm font-semibold text-cyan-200 transition hover:text-cyan-100">See what Founding 100 includes <ArrowRight size={16} className="ml-2" aria-hidden="true" /></Link></div><div className={cardClass}><p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-cyan-300/75">What the path protects</p><ul className="space-y-5 text-base leading-7 text-slate-300">{boundaries.map((item) => <li key={item} className="flex gap-3"><CheckCircle2 size={18} className="mt-1 shrink-0 text-cyan-300" aria-hidden="true" />{item}</li>)}</ul></div></div></section>

        <section className={`${sectionClass} pt-0`} aria-labelledby="later-title"><div className="rounded-3xl border border-slate-800 bg-slate-900/55 p-8 md:p-12"><p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-cyan-300/75">What may come later</p><h2 id="later-title" className="text-3xl font-semibold text-white md:text-5xl">Let the picture inform the next move.</h2><p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">A clearer operating picture may point to repaired ownership, a clearer handoff, deeper investigation, implementation, automation, or no immediate change. StrategicAI does not assume the answer before the picture exists.</p><div className="mt-10 grid gap-5 md:grid-cols-3">{[["Inspect", "Make the part behind the question easier to see."], ["Question", "Reason from the available company context."], ["Decide", "Choose what deserves action, and what does not."]].map(([title, body]) => <div key={title} className="rounded-2xl border border-slate-700/80 bg-slate-950/35 p-5"><h3 className="text-xl font-semibold text-white">{title}</h3><p className="mt-3 text-sm leading-6 text-slate-400">{body}</p></div>)}</div></div></section>

        <section className={`${sectionClass} pt-0`} aria-labelledby="partner-route-title"><div className="grid gap-8 lg:grid-cols-[1fr_1fr]"><div><p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-cyan-300/75">For people who help businesses change</p><h2 id="partner-route-title" className="text-3xl font-semibold text-white md:text-5xl">Bring better context into implementation.</h2><p className="mt-6 text-lg leading-8 text-slate-300">If you advise, implement, integrate, or bring StrategicAI into a defined context, start with the partner path.</p></div><div className={cardClass}><Mail size={27} className="text-cyan-300" aria-hidden="true" /><p className="mt-6 text-base leading-7 text-slate-400">Different expertise works better when the operating picture is visible before the work moves downstream.</p><Link to="/partners" onClick={handlePartnerClick} className="mt-7 inline-flex items-center text-sm font-semibold text-cyan-200 transition hover:text-cyan-100">See the partner path <ArrowRight size={16} className="ml-2" aria-hidden="true" /></Link></div></div></section>
      </main>
      <TrustAgentShell enabled={true} mode="public" />
    </div>
  );
}
