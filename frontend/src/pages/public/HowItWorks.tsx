import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import { TrustAgentShell } from "../../trustagent/TrustAgentShell";
import { usePageMeta } from "../../hooks/usePageMeta";
import { trackEvent } from "../../lib/analytics";

const sectionClass = "mx-auto max-w-6xl px-6 py-20";
const cardClass = "rounded-3xl border border-slate-800 bg-slate-900/55 p-8 shadow-[0_0_0_1px_rgba(34,211,238,0.03)]";

const realityInputs = [
  ["Owner context", "What matters, what changed, and why it matters now."],
  ["Work reality", "What people actually do when the process meets the real world."],
  ["System signals", "Where information lives, changes, waits, or gets missed."],
  ["Different perspectives", "Where trusted people see the same work differently."],
] as const;

const evidenceStates = [
  ["Known", "The available information supports this."],
  ["Disputed", "People or sources do not agree yet."],
  ["Unknown", "We don’t know yet—and we don’t pretend we do."],
] as const;

export default function HowItWorks() {
  usePageMeta({
    title: "How StrategicAI Learns How Your Business Actually Works",
    description: "See how StrategicAI brings people, work, systems, and different perspectives together before you decide what should happen next.",
    path: "/how-it-works",
  });

  function handleProofClick() {
    trackEvent("homepage_proof_open", { source: "how-it-works" });
  }

  function handleFounding100Click() {
    trackEvent("founding100_cta_click", { source: "how-it-works", destination: "/founding100/offer" });
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <main>
        <section className="relative overflow-hidden border-b border-slate-800/70">
          <div className="absolute inset-0"><img src="/images/brain-bg.jpg" alt="" className="h-full w-full object-cover opacity-[0.08]" /><div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.16),transparent_42%),linear-gradient(180deg,rgba(2,6,23,0.4),#020617_82%)]" /></div>
          <div className="relative mx-auto max-w-6xl px-6 pb-16 pt-20 md:pb-24 md:pt-28"><div className="max-w-4xl"><p className="mb-6 text-sm font-semibold uppercase tracking-[0.28em] text-cyan-300/80">How It Works</p><h1 className="text-5xl font-semibold leading-[1.05] text-white md:text-7xl">Everyone has a piece. StrategicAI helps put the picture together.</h1><p className="mt-8 max-w-3xl text-lg leading-8 text-slate-300 md:text-2xl md:leading-10">Ask two people how the work really happens and you may get two different answers. That’s part of the picture. Systems and work contribute evidence too. StrategicAI brings those pieces together, keeps disagreement visible, and forms an understanding you can inspect and correct.</p><div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center"><Link to="/#proof-thread" onClick={handleProofClick} className="inline-flex items-center justify-center rounded-full bg-cyan-400 px-7 py-4 text-base font-semibold text-slate-950 transition hover:bg-cyan-300">See the 45-second proof <ArrowRight size={17} className="ml-2" aria-hidden="true" /></Link><Link to="/product" className="inline-flex items-center justify-center rounded-full border border-slate-700 px-7 py-4 text-base font-semibold text-white transition hover:border-slate-500 hover:bg-slate-900">Explore the product</Link></div></div></div>
        </section>

        <section className={sectionClass} aria-labelledby="reality-title"><div className="mb-10 max-w-3xl"><p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-cyan-300/75">Start with reality</p><h2 id="reality-title" className="text-3xl font-semibold text-white md:text-5xl">Start with what people actually know—not the process you wish existed.</h2><p className="mt-6 text-lg leading-8 text-slate-400">The owner knows why something matters. The person doing the work knows where it bends. The systems know what changed. The exceptions often live in someone’s memory. StrategicAI brings those pieces together without pretending they already agree.</p></div><div className="grid gap-5 md:grid-cols-2">{realityInputs.map(([title, body]) => <article key={title} className={`${cardClass} flex gap-5`}><span className="pt-1 text-sm font-semibold tracking-[0.18em] text-cyan-300/70">{title === "Owner context" ? "01" : title === "Work reality" ? "02" : title === "System signals" ? "03" : "04"}</span><div><h3 className="text-xl font-semibold text-white">{title}</h3><p className="mt-3 text-base leading-7 text-slate-400">{body}</p></div></article>)}</div></section>

        <section className={`${sectionClass} pt-0`} aria-labelledby="uncertainty-title"><div className="grid items-stretch gap-8 lg:grid-cols-[1.05fr_0.95fr]"><div className={cardClass}><p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-cyan-300/75">Keep the disagreement</p><h2 id="uncertainty-title" className="text-3xl font-semibold text-white md:text-5xl">Keep the disagreement. Keep the unknown.</h2><p className="mt-6 text-lg leading-8 text-slate-300">A useful picture does not need to pretend everything is settled. It needs to show what the information supports, where people disagree, and what nobody actually knows yet.</p></div><div className="grid gap-4 md:grid-cols-3 lg:grid-cols-1">{evidenceStates.map(([title, body]) => <div key={title} className="rounded-3xl border border-cyan-400/15 bg-cyan-400/[0.04] p-6"><div className="flex items-center gap-3"><CheckCircle2 size={18} className="text-cyan-300" aria-hidden="true" /><h3 className="text-lg font-semibold text-white">{title}</h3></div><p className="mt-3 text-sm leading-6 text-slate-400">{body}</p></div>)}</div></div></section>

        <section className={sectionClass} aria-labelledby="correction-title"><div className="rounded-3xl border border-cyan-400/20 bg-[linear-gradient(145deg,rgba(9,42,49,0.7),rgba(15,23,42,0.9))] p-8 md:p-12"><p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-cyan-300/75">The human correction</p><h2 id="correction-title" className="max-w-3xl text-3xl font-semibold text-white md:text-5xl">Then you get to say: “No. That’s not how it works.”</h2><p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">That is not a failure state. It’s useful information. When the owner or the person closest to the work corrects the picture, StrategicAI should change what it understands rather than defend the old version.</p><div className="mt-8 max-w-3xl border-l-2 border-cyan-300/50 pl-5 text-xl font-medium leading-8 text-cyan-100">A better picture is one you can challenge.</div></div></section>

        <section className={`${sectionClass} pt-0`} aria-labelledby="action-title"><div className="rounded-3xl border border-amber-200/20 bg-[linear-gradient(145deg,rgba(70,55,30,0.32),rgba(15,23,42,0.82))] p-8 md:p-12"><p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-amber-200/80">What comes next</p><h2 id="action-title" className="max-w-3xl text-3xl font-semibold text-white md:text-5xl">Only then decide what deserves action.</h2><p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">Maybe ownership needs to be clearer. Maybe the handoff needs to change. Maybe a system should tell someone when something moves. Maybe automation is the right next move. Maybe the right answer is to investigate further—or change nothing yet. That is why the picture comes first.</p><div className="mt-10 flex flex-wrap items-center gap-3 text-sm text-slate-300">{["clarify ownership", "fix a handoff", "notify someone", "investigate", "automate when the picture supports it", "leave it alone"].map((item) => <span key={item} className="rounded-full border border-slate-700 bg-slate-950/40 px-4 py-2">{item}</span>)}</div></div></section>

        <section className={`${sectionClass} pt-0`} aria-labelledby="next-title"><div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]"><div><p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-cyan-300/75">Bring one real business problem</p><h2 id="next-title" className="text-3xl font-semibold text-white md:text-5xl">Start with the part that keeps coming back.</h2><p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">Bring the problem, the people who see it, and the question you have not been able to answer cleanly.</p></div><div className={`${cardClass} flex flex-col justify-between`}><p className="text-lg leading-8 text-slate-300">The Founding 100 is the current place to begin building that picture around your own business.</p><Link to="/founding100/offer" onClick={handleFounding100Click} className="mt-8 inline-flex items-center justify-center rounded-full bg-cyan-400 px-6 py-3.5 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300">Bring one real business problem <ArrowRight size={16} className="ml-2" aria-hidden="true" /></Link></div></div></section>
      </main>
      <TrustAgentShell enabled={true} mode="public" />
    </div>
  );
}
