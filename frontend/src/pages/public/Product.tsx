import { ArrowRight, CheckCircle2, Eye, GitBranch, MessageCircle, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";
import { TrustAgentShell } from "../../trustagent/TrustAgentShell";
import { usePageMeta } from "../../hooks/usePageMeta";
import { trackEvent } from "../../lib/analytics";

const sectionClass = "mx-auto max-w-6xl px-6 py-20";
const cardClass = "rounded-3xl border border-slate-800 bg-slate-900/55 p-8 shadow-[0_0_0_1px_rgba(34,211,238,0.03)]";

const realityInputs = [
  ["People", "Who knows what—and who everyone still depends on."],
  ["Work", "How work really moves, including waits, exceptions, and workarounds."],
  ["Systems", "Where information lives, changes, and gets stranded."],
  ["Perspectives", "Where trusted people see the same process differently."],
] as const;

const intelligenceMoves = [
  ["Inspect", "Follow a handoff, dependency, decision, or unknown."],
  ["Correct", "Say what is wrong and change the picture."],
  ["Ask Nemo", "Start with a real company question instead of rebuilding the story from zero."],
] as const;

const businessViews = [
  ["Why does this keep coming back to me?", "Owner dependence, approval, and the path knowledge takes."],
  ["Where does this work actually stop?", "Workflow, handoff, queue, or decision where progress waits."],
  ["Who is waiting on whom?", "The dependency behind the delay or repeated escalation."],
  ["What do we still not know?", "Unknowns and disagreement that should stay visible."],
] as const;

const capabilities = [
  "Clarify who owns the decision",
  "Fix a broken handoff",
  "Notify the right person when something changes",
  "Investigate an unresolved dependency",
  "Automate when the picture supports it",
  "Keep learning when the answer is not clear yet",
] as const;

const architectureOutcomes = [
  ["Operational Reality", "Without this context, executive visibility is incomplete."],
  ["Operational Intelligence", "Supports earlier risk recognition, leadership alignment, and faster decisions."],
  ["Business Views", "Helps leaders move from broad complexity to the operating issue that matters now."],
  ["Nemo", "Most AI begins with your question. Nemo begins with the context behind it. That context supports trusted answers and faster preparation for consequential decisions."],
  ["Capabilities", "Turns understanding into appropriate action without assuming automation is always the answer."],
] as const;

const trustPrinciples = [
  ["Different perspectives can remain different", "StrategicAI does not need to erase disagreement to make the picture useful."],
  ["Humans correct the picture", "People closest to the work can say: “No. That’s not how it works.”"],
  ["Unknowns remain visible", "Missing context should not quietly become implied certainty."],
  ["People remain accountable for action", "Nemo helps reason from context. It does not become the accountable executive."],
] as const;

export default function Product() {
  usePageMeta({
    title: "StrategicAI Product | Operational Reality to Operational Intelligence",
    description: "Explore the parts of StrategicAI: Operational Reality, the shared operating picture, Operational Intelligence, Business Views, Nemo, and warranted capabilities.",
    path: "/product",
  });

  function handleFounding100Click() {
    trackEvent("founding100_cta_click", { source: "product", destination: "/founding100/offer" });
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <main>
        <section className="relative overflow-hidden border-b border-slate-800/70"><div className="absolute inset-0"><img src="/images/brain-bg.jpg" alt="" className="h-full w-full object-cover opacity-[0.08]" /><div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.16),transparent_42%),linear-gradient(180deg,rgba(2,6,23,0.4),#020617_82%)]" /></div><div className="relative mx-auto max-w-6xl px-6 pb-24 pt-28"><div className="max-w-4xl"><p className="mb-6 text-sm font-semibold uppercase tracking-[0.28em] text-cyan-300/80">Product architecture</p><h1 className="text-5xl font-semibold leading-[1.05] text-white md:text-7xl">Make what your company knows visible, durable, and usable.</h1><p className="mt-8 max-w-3xl text-lg leading-8 text-slate-300 md:text-2xl md:leading-10">StrategicAI starts with the Operational Reality already inside the business, forms a shared operating picture from available evidence, and makes that picture usable as Operational Intelligence you can inspect, correct, and question.</p><div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center"><Link to="/how-it-works" className="inline-flex items-center justify-center rounded-full bg-cyan-400 px-7 py-4 text-base font-semibold text-slate-950 transition hover:bg-cyan-300">See how it works <ArrowRight size={17} className="ml-2" aria-hidden="true" /></Link><Link to="/founding100/offer" onClick={handleFounding100Click} className="inline-flex items-center justify-center rounded-full border border-slate-700 px-7 py-4 text-base font-semibold text-white transition hover:border-slate-500 hover:bg-slate-900">See Founding 100</Link></div></div></div></section>

        <section className={sectionClass} aria-labelledby="reality-title"><div className="grid items-start gap-10 lg:grid-cols-[0.9fr_1.1fr]"><div><p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-cyan-300/75">01 · Operational Reality</p><h2 id="reality-title" className="text-3xl font-semibold text-white md:text-5xl">The business itself, not a polished description of it.</h2><p className="mt-6 text-lg leading-8 text-slate-300">Operational Reality is the people, work, systems, decisions, dependencies, exceptions, history, and differing perspectives shaping how the business actually operates. StrategicAI does not invent that reality or claim to know it completely.</p></div><div className="grid gap-5 sm:grid-cols-2">{realityInputs.map(([title, body]) => <article key={title} className={cardClass}><h3 className="text-xl font-semibold text-white">{title}</h3><p className="mt-4 text-base leading-7 text-slate-400">{body}</p></article>)}</div></div></section>

        <section className={`${sectionClass} pt-0`} aria-labelledby="intelligence-title"><div className="rounded-3xl border border-cyan-400/20 bg-[linear-gradient(145deg,rgba(9,42,49,0.7),rgba(15,23,42,0.9))] p-8 md:p-12"><div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]"><div><p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-cyan-300/75">02 · Operational Intelligence</p><h2 id="intelligence-title" className="text-3xl font-semibold text-white md:text-5xl">Usable understanding formed from the picture.</h2><p className="mt-6 text-lg leading-8 text-slate-300">Operational Intelligence begins when the available picture can be inspected, corrected, and used for the questions and decisions actually in front of you. It supports judgment; it does not become authority by itself.</p></div><div className="grid gap-4 sm:grid-cols-3">{intelligenceMoves.map(([title, body], index) => <div key={title} className="rounded-2xl border border-slate-700/80 bg-slate-950/35 p-5"><span className="text-xs font-semibold tracking-[0.18em] text-cyan-300/70">0{index + 1}</span><h3 className="mt-4 text-lg font-semibold text-white">{title}</h3><p className="mt-3 text-sm leading-6 text-slate-400">{body}</p></div>)}</div></div><Link to="/#proof-thread" className="mt-10 inline-flex items-center text-sm font-semibold text-cyan-200 transition hover:text-cyan-100">See the illustrative example <ArrowRight size={16} className="ml-2" /></Link></div></section>

        <section className={sectionClass} aria-labelledby="views-title"><div className="mb-10 max-w-3xl"><p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-cyan-300/75">03 · Business Views</p><h2 id="views-title" className="text-3xl font-semibold text-white md:text-5xl">See the part behind the question that’s bothering you.</h2><p className="mt-6 text-lg leading-8 text-slate-400">Business Views make a useful part of the company picture easier to inspect. They are not a fixed dashboard bundle.</p></div><div className="grid gap-5 md:grid-cols-2">{businessViews.map(([title, body]) => <article key={title} className={`${cardClass} flex gap-4`}><Eye size={21} className="mt-1 shrink-0 text-cyan-300" aria-hidden="true" /><div><h3 className="text-xl font-semibold text-white">{title}</h3><p className="mt-3 text-base leading-7 text-slate-400">{body}</p></div></article>)}</div></section>

        <section className={`${sectionClass} pt-0`} aria-labelledby="nemo-title"><div className="grid items-stretch gap-8 lg:grid-cols-[1.05fr_0.95fr]"><div className={cardClass}><p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-cyan-300/75">04 · Nemo</p><h2 id="nemo-title" className="text-3xl font-semibold text-white md:text-5xl">Reason from company context.</h2><p className="mt-6 text-lg leading-8 text-slate-300">Nemo is a reasoning interface for the company context StrategicAI has made available. It starts from that context rather than a blank prompt, while keeping the limits of what is known in view.</p><div className="mt-8 flex items-center gap-4 text-sm text-slate-300"><MessageCircle size={19} className="text-cyan-300" aria-hidden="true" /><span>Nemo helps you reason. Leadership decides.</span></div></div><div className="rounded-3xl border border-slate-800 bg-slate-900/55 p-8"><p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-slate-400">05 · Capabilities</p><h2 className="text-3xl font-semibold text-white">Then decide what deserves action.</h2><ul className="mt-7 space-y-4 text-base leading-7 text-slate-300">{capabilities.map((item) => <li key={item} className="flex gap-3"><CheckCircle2 size={18} className="mt-1 shrink-0 text-cyan-300" aria-hidden="true" />{item}</li>)}</ul><div className="mt-8 flex gap-3 text-sm text-slate-400"><GitBranch size={18} className="mt-0.5 shrink-0 text-amber-200" aria-hidden="true" /><span>Action follows evidence, scope, and authority.</span></div></div></div></section>

        <section className={sectionClass} aria-labelledby="outcomes-title"><div className="mb-10 max-w-3xl"><p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-cyan-300/75">What the architecture is for</p><h2 id="outcomes-title" className="text-3xl font-semibold text-white md:text-5xl">Each part should create a more useful executive outcome.</h2><p className="mt-6 text-lg leading-8 text-slate-400">These are intended value connections, not guaranteed results. What becomes possible depends on the evidence, context, and authority available.</p></div><div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">{architectureOutcomes.map(([component, outcome]) => <article key={component} className={cardClass}><p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-300/75">{component}</p><p className="mt-4 text-lg leading-8 text-slate-300">{outcome}</p></article>)}</div></section>

        <section className={sectionClass} aria-labelledby="trust-title"><div className="rounded-3xl border border-cyan-400/20 bg-[linear-gradient(145deg,rgba(9,42,49,0.7),rgba(15,23,42,0.9))] p-8 md:p-12"><div className="max-w-3xl"><p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-cyan-300/75">The trust contract</p><h2 id="trust-title" className="text-3xl font-semibold text-white md:text-5xl">Built to be challenged, not blindly trusted.</h2><p className="mt-6 text-lg leading-8 text-slate-300">The picture is useful because it can be inspected, questioned, and corrected—not because it is treated as unquestionable truth.</p></div><div className="mt-10 grid gap-5 md:grid-cols-2">{trustPrinciples.map(([title, body]) => <article key={title} className="rounded-2xl border border-slate-700/80 bg-slate-950/35 p-6"><h3 className="text-xl font-semibold text-white">{title}</h3><p className="mt-3 text-base leading-7 text-slate-400">{body}</p></article>)}</div></div></section>

        <section className={sectionClass} aria-labelledby="product-next-title"><div className="rounded-3xl border border-slate-800 bg-slate-900/55 p-8 text-center md:p-12"><ShieldCheck size={28} className="mx-auto text-cyan-300" aria-hidden="true" /><h2 id="product-next-title" className="mt-6 text-3xl font-semibold text-white md:text-5xl">Understand the business. Then decide what comes next.</h2><p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">See how the mechanism works, or see Founding 100 as the current path for building this kind of understanding around your own business.</p><div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"><Link to="/#proof-thread" className="inline-flex items-center rounded-full border border-slate-700 px-6 py-3.5 text-sm font-semibold text-white transition hover:border-slate-500 hover:bg-slate-950">See the example</Link><Link to="/founding100/offer" onClick={handleFounding100Click} className="inline-flex items-center rounded-full bg-cyan-400 px-6 py-3.5 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300">See Founding 100 <ArrowRight size={16} className="ml-2" aria-hidden="true" /></Link></div></div></section>
      </main>
      <TrustAgentShell enabled={true} mode="public" />
    </div>
  );
}
