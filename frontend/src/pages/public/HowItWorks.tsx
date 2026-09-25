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

const illustrativeSteps = [
  ["Evidence", "Sales says, “We handed the customer off Tuesday.” Operations says, “We did not have the information needed to start.” Both perspectives are evidence."],
  ["Picture", "The handoff exists, but the teams mean different things by “complete.” The missing information and an untracked Finance approval become visible relationships."],
  ["Correction", "Operations adds: “That’s not the actual dependency. We also need approval from Finance.” The picture changes because the people closest to the work can correct it."],
  ["Ask Nemo", "Where else does this process depend on information that one team does not know another team needs?"],
] as const;

export default function HowItWorks() {
  usePageMeta({
    title: "How StrategicAI Works | From Evidence to a Shared Operating Picture",
    description: "See how evidence becomes shared, correctable business context that people can inspect together and frontier intelligence can reason against before action.",
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
          <div className="relative mx-auto max-w-6xl px-6 pb-16 pt-20 md:pb-24 md:pt-28"><div className="max-w-4xl"><p className="mb-6 text-sm font-semibold uppercase tracking-[0.28em] text-cyan-300/80">How It Works</p><h1 className="text-5xl font-semibold leading-[1.05] text-white md:text-7xl">Everyone has a piece. StrategicAI helps put the picture together.</h1><p className="mt-8 max-w-3xl text-lg leading-8 text-slate-300 md:text-2xl md:leading-10">Ask two people how the work really happens and you may get two different answers. That’s part of the picture. StrategicAI brings available evidence together, keeps disagreement and unknowns visible, and forms shared context that people can inspect, dispute, and correct together.</p><div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center"><Link to="/#proof-thread" onClick={handleProofClick} className="inline-flex items-center justify-center rounded-full bg-cyan-400 px-7 py-4 text-base font-semibold text-slate-950 transition hover:bg-cyan-300">See the illustrative example <ArrowRight size={17} className="ml-2" aria-hidden="true" /></Link><Link to="/product" className="inline-flex items-center justify-center rounded-full border border-slate-700 px-7 py-4 text-base font-semibold text-white transition hover:border-slate-500 hover:bg-slate-900">Explore the product</Link></div></div></div>
        </section>

        <section className={sectionClass} aria-labelledby="reality-title"><div className="mb-10 max-w-3xl"><p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-cyan-300/75">01 · Evidence</p><h2 id="reality-title" className="text-3xl font-semibold text-white md:text-5xl">Start with what people actually know—not the process you wish existed.</h2><p className="mt-6 text-lg leading-8 text-slate-400">Operational Reality is already in the business. The owner knows why something matters. The person doing the work knows where it bends. Systems show what changed. Exceptions often live in memory. StrategicAI brings those pieces together without pretending they already agree.</p></div><div className="grid gap-5 md:grid-cols-2">{realityInputs.map(([title, body], index) => <article key={title} className={`${cardClass} flex gap-5`}><span className="pt-1 text-sm font-semibold tracking-[0.18em] text-cyan-300/70">0{index + 1}</span><div><h3 className="text-xl font-semibold text-white">{title}</h3><p className="mt-3 text-base leading-7 text-slate-400">{body}</p></div></article>)}</div></section>

        <section className={`${sectionClass} pt-0`} aria-labelledby="formation-title"><div className="grid items-stretch gap-8 lg:grid-cols-[1.05fr_0.95fr]"><div className={cardClass}><p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-cyan-300/75">02 · Formation</p><h2 id="formation-title" className="text-3xl font-semibold text-white md:text-5xl">Bring the available evidence into a shared operating picture.</h2><p className="mt-6 text-lg leading-8 text-slate-300">The picture is a representation of the business, not the business itself. It can show relationships between people, work, systems, decisions, dependencies, exceptions, and history while keeping the limits of the available evidence in view.</p></div><div className="grid gap-4 md:grid-cols-3 lg:grid-cols-1">{evidenceStates.map(([title, body]) => <div key={title} className="rounded-3xl border border-cyan-400/15 bg-cyan-400/[0.04] p-6"><div className="flex items-center gap-3"><CheckCircle2 size={18} className="text-cyan-300" aria-hidden="true" /><h3 className="text-lg font-semibold text-white">{title}</h3></div><p className="mt-3 text-sm leading-6 text-slate-400">{body}</p></div>)}</div></div></section>

        <section className={`${sectionClass} pt-0`} aria-labelledby="disagreement-title"><div className="rounded-3xl border border-cyan-400/20 bg-[linear-gradient(145deg,rgba(9,42,49,0.7),rgba(15,23,42,0.9))] p-8 md:p-12"><p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-cyan-300/75">03 · Disagreement and uncertainty</p><h2 id="disagreement-title" className="max-w-3xl text-3xl font-semibold text-white md:text-5xl">Different answers are not noise. They are part of the picture.</h2><p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">What nobody knows yet belongs in the picture too. A useful picture does not require false agreement; it shows what the available information supports, where perspectives differ, and what still needs to be learned.</p><div className="mt-10 grid gap-5 md:grid-cols-2"><div className="rounded-2xl border border-slate-700 bg-slate-950/35 p-6"><h3 className="text-xl font-semibold text-white">A useful picture does not require false agreement.</h3><p className="mt-3 text-base leading-7 text-slate-400">Sales may believe the work was handed off. Operations may believe it never arrived complete. Both perspectives are evidence.</p></div><div className="rounded-2xl border border-slate-700 bg-slate-950/35 p-6"><h3 className="text-xl font-semibold text-white">What nobody knows yet belongs in the picture too.</h3><p className="mt-3 text-base leading-7 text-slate-400">Unknowns stay visible instead of being quietly filled with confidence.</p></div></div></div></section>

        <section className={sectionClass} aria-labelledby="example-title"><div className="mb-10 max-w-3xl"><p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-amber-200/80">Illustrative example · not a customer result</p><h2 id="example-title" className="text-3xl font-semibold text-white md:text-5xl">Follow one handoff from disagreement to a better question.</h2><p className="mt-6 text-lg leading-8 text-slate-400">The sequence is evidence → picture → correction → question. The point is to make the mechanism concrete without pretending this example is proof from a named business.</p></div><div className="grid gap-5 md:grid-cols-2">{illustrativeSteps.map(([title, body], index) => <article key={title} className={cardClass}><span className="text-sm font-semibold tracking-[0.18em] text-cyan-300/70">0{index + 1}</span><h3 className="mt-4 text-xl font-semibold text-white">{title}</h3><p className="mt-3 text-base leading-7 text-slate-400">{body}</p></article>)}</div></section>

        <section className={sectionClass} aria-labelledby="correction-title"><div className="rounded-3xl border border-cyan-400/20 bg-[linear-gradient(145deg,rgba(9,42,49,0.7),rgba(15,23,42,0.9))] p-8 md:p-12"><p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-cyan-300/75">04 · Correction</p><h2 id="correction-title" className="max-w-3xl text-3xl font-semibold text-white md:text-5xl">Then you get to say: “No. That’s not how it works.”</h2><p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">That is not a failure state. It is useful information. When the people closest to the work correct the picture, StrategicAI should make the correction visible rather than defend the old version. The result is shared organizational context—not sophisticated personal memory for one person.</p><div className="mt-8 max-w-3xl border-l-2 border-cyan-300/50 pl-5 text-xl font-medium leading-8 text-cyan-100">A better picture is one multiple people can challenge together.</div></div></section>

        <section className={`${sectionClass} pt-0`} aria-labelledby="continuity-title"><div className="grid items-stretch gap-8 lg:grid-cols-[1.05fr_0.95fr]"><div className={cardClass}><p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-cyan-300/75">05 · Change and continuity</p><h2 id="continuity-title" className="text-3xl font-semibold text-white md:text-5xl">Change is easier to examine when there is context to compare it against.</h2><p className="mt-6 text-lg leading-8 text-slate-300">As people inspect, correct, and return to the available picture, the questions can become more useful: What changed? What does that change affect? What now deserves attention?</p><p className="mt-5 text-base leading-7 text-slate-400">This does not mean automatic monitoring or guaranteed risk detection. It means change can be examined against the context that is available instead of being reconstructed from scratch.</p></div><div className="rounded-3xl border border-slate-800 bg-slate-900/35 p-8"><p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300/75">Questions across time</p><div className="mt-6 space-y-4 text-lg leading-8 text-slate-300"><p>What changed?</p><p>What does that change affect?</p><p>What now deserves attention?</p></div></div></div></section>

        <section className={`${sectionClass} pt-0`} aria-labelledby="action-title"><div className="rounded-3xl border border-amber-200/20 bg-[linear-gradient(145deg,rgba(70,55,30,0.32),rgba(15,23,42,0.82))] p-8 md:p-12"><p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-amber-200/80">06 · Warranted action</p><h2 id="action-title" className="max-w-3xl text-3xl font-semibold text-white md:text-5xl">Only then decide what deserves action.</h2><p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">Maybe ownership needs to be clearer. Maybe the handoff needs to change. Maybe the right answer is to investigate further—or change nothing yet. Automation may be right when the evidence, scope, and authority support it. Leadership decides.</p><div className="mt-10 flex flex-wrap items-center gap-3 text-sm text-slate-300">{["clarify ownership", "fix a handoff", "investigate", "automate when warranted", "leave it alone"].map((item) => <span key={item} className="rounded-full border border-slate-700 bg-slate-950/40 px-4 py-2">{item}</span>)}</div></div></section>

        <section className={`${sectionClass} pt-0`} aria-labelledby="next-title"><div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]"><div><p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-cyan-300/75">Bring one real business problem</p><h2 id="next-title" className="text-3xl font-semibold text-white md:text-5xl">Start with the part that keeps coming back.</h2><p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">Bring the problem, the people who see it, and the question you have not been able to answer cleanly.</p></div><div className={`${cardClass} flex flex-col justify-between`}><p className="text-lg leading-8 text-slate-300">Founding 100 is the current place to begin building that picture around your own business.</p><Link to="/founding100/offer" onClick={handleFounding100Click} className="mt-8 inline-flex items-center justify-center rounded-full bg-cyan-400 px-6 py-3.5 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300">See Founding 100 <ArrowRight size={16} className="ml-2" aria-hidden="true" /></Link></div></div></section>
      </main>
      <TrustAgentShell enabled={true} mode="public" />
    </div>
  );
}
