import { ArrowRight, CheckCircle2, Mail, Network, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";
import { TrustAgentShell } from "../../trustagent/TrustAgentShell";
import { usePageMeta } from "../../hooks/usePageMeta";
import { trackEvent } from "../../lib/analytics";

const sectionClass = "mx-auto max-w-6xl px-6 py-20";
const cardClass = "rounded-3xl border border-slate-800 bg-slate-900/55 p-8 shadow-[0_0_0_1px_rgba(34,211,238,0.03)]";

const recognitionMoments = [
  ["Discovery starts over in every meeting.", "The context lives in people instead of one shared picture."],
  ["The exception appears halfway through the build.", "Someone knew about it. It just wasn’t visible during scope."],
  ["Nobody agrees where the handoff actually ends.", "Both teams can be acting reasonably and still be working from different pictures."],
  ["The owner keeps translating the company for everyone.", "Consultants, vendors, employees, and systems all receive a different slice."],
] as const;

const partnerClasses = [
  ["Advisors and consultants", "Spend less time reconstructing context. Spend more time on the decision."],
  ["Automation and AI partners", "See the people, exceptions, and downstream effects before you automate the task."],
  ["Systems specialists", "Understand where information really moves before adding another integration."],
  ["Domain specialists", "Bring expertise without having to become the historian of the entire company."],
  ["Ecosystem partners", "Give organizations a shared place to begin before sending work downstream."],
] as const;

const commitments = [
  "The information behind the picture stays visible.",
  "Accountable people keep the final say.",
  "Scope is clear before implementation begins.",
  "What happens after the work can become new information.",
] as const;

export default function Partners() {
  usePageMeta({
    title: "StrategicAI Partners — Better Context Before Implementation",
    description: "Bring better context to client work by understanding how people, work, systems, and exceptions fit together before implementation begins.",
    path: "/partners",
  });

  function handlePartnerInquiry() {
    trackEvent("partner_inquiry_click", { source: "partners" });
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <main>
        <section className="relative overflow-hidden border-b border-slate-800/70"><div className="absolute inset-0"><img src="/images/brain-bg.jpg" alt="" className="h-full w-full object-cover opacity-[0.08]" /><div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.16),transparent_42%),linear-gradient(180deg,rgba(2,6,23,0.4),#020617_82%)]" /></div><div className="relative mx-auto max-w-6xl px-6 pb-24 pt-28"><div className="max-w-4xl"><p className="mb-6 text-sm font-semibold uppercase tracking-[0.28em] text-cyan-300/80">Partners</p><h1 className="text-5xl font-semibold leading-[1.05] text-white md:text-7xl">Your client wants you to fix the process. Three people describe three different processes.</h1><p className="mt-8 max-w-3xl text-lg leading-8 text-slate-300 md:text-2xl md:leading-10">If you advise, automate, integrate, or implement inside a business, you know the hardest part often comes before the build: figuring out how the work actually happens. StrategicAI gives you a shared operating picture to work from.</p><div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center"><a href="mailto:tony@strategicai.app?subject=StrategicAI%20partner%20inquiry" onClick={handlePartnerInquiry} className="inline-flex items-center justify-center rounded-full bg-cyan-400 px-7 py-4 text-base font-semibold text-slate-950 transition hover:bg-cyan-300">Start a partner conversation <Mail size={17} className="ml-2" aria-hidden="true" /></a><Link to="/how-it-works" className="inline-flex items-center justify-center rounded-full border border-slate-700 px-7 py-4 text-base font-semibold text-white transition hover:border-slate-500 hover:bg-slate-900">See how it works</Link></div></div></div></section>

        <section className={sectionClass} aria-labelledby="recognition-title"><div className="mb-10 max-w-3xl"><p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-cyan-300/75">You know this part of the job</p><h2 id="recognition-title" className="text-3xl font-semibold text-white md:text-5xl">Half the work is figuring out what the client actually means.</h2></div><div className="grid gap-5 md:grid-cols-2">{recognitionMoments.map(([title, body]) => <article key={title} className={cardClass}><h3 className="text-xl font-semibold text-white">{title}</h3><p className="mt-4 text-base leading-7 text-slate-400">{body}</p></article>)}</div><p className="mt-8 text-xl font-medium text-cyan-200">Better implementation starts with better context.</p></section>

        <section className={`${sectionClass} pt-0`} aria-labelledby="relationship-title"><div className="grid items-start gap-10 lg:grid-cols-[0.9fr_1.1fr]"><div><p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-cyan-300/75">The relationship</p><h2 id="relationship-title" className="text-3xl font-semibold text-white md:text-5xl">Bring your expertise after the picture exists.</h2><p className="mt-6 text-lg leading-8 text-slate-300">StrategicAI helps make the people, work, systems, dependencies, exceptions, and unknowns around the problem visible. Then you can work from something more useful than another round of reconstruction.</p></div><div className="rounded-3xl border border-cyan-400/20 bg-[linear-gradient(145deg,rgba(9,42,49,0.7),rgba(15,23,42,0.9))] p-8"><div className="flex flex-wrap items-center gap-3 text-sm text-slate-300">{["The picture", "Shared understanding", "Your expertise", "Better implementation"].map((item, index) => <span key={item} className="inline-flex items-center gap-3"><span className="rounded-full border border-slate-700 bg-slate-950/40 px-4 py-2">{item}</span>{index < 3 ? <ArrowRight size={15} className="text-cyan-200" aria-hidden="true" /> : null}</span>)}</div><p className="mt-8 text-base leading-7 text-slate-300">The owner, advisor, automation partner, systems specialist, or domain expert can see what the others are seeing before the work moves downstream.</p></div></div></section>

        <section className={`${sectionClass} pt-0`} aria-labelledby="partner-types-title"><div className="mb-10 max-w-3xl"><p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-cyan-300/75">Where partners fit</p><h2 id="partner-types-title" className="text-3xl font-semibold text-white md:text-5xl">Different expertise. Shared context.</h2></div><div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">{partnerClasses.map(([title, body]) => <article key={title} className={cardClass}><Network size={21} className="text-cyan-300" aria-hidden="true" /><h3 className="mt-6 text-xl font-semibold text-white">{title}</h3><p className="mt-4 text-base leading-7 text-slate-400">{body}</p></article>)}</div></section>

        <section className={sectionClass} aria-labelledby="commitments-title"><div className="rounded-3xl border border-slate-800 bg-slate-900/55 p-8 md:p-12"><div className="grid items-start gap-10 lg:grid-cols-[0.9fr_1.1fr]"><div><p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-cyan-300/75">A better handoff</p><h2 id="commitments-title" className="text-3xl font-semibold text-white md:text-5xl">Between understanding and implementation.</h2></div><div className="grid gap-4 sm:grid-cols-2">{commitments.map((item) => <p key={item} className="flex gap-3 text-lg leading-8 text-slate-300"><CheckCircle2 size={19} className="mt-1 shrink-0 text-cyan-300" aria-hidden="true" />{item}</p>)}</div></div></div></section>

        <section className={`${sectionClass} pt-0`} aria-labelledby="partner-next-title"><div className="rounded-3xl border border-cyan-400/20 bg-[linear-gradient(145deg,rgba(9,42,49,0.7),rgba(15,23,42,0.9))] p-8 text-center md:p-12"><ShieldCheck size={28} className="mx-auto text-cyan-300" aria-hidden="true" /><h2 id="partner-next-title" className="mt-6 text-3xl font-semibold text-white md:text-5xl">Bring better context to the work you already do.</h2><p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">If you already advise, build, integrate, automate, or support organizations, let’s talk about what changes when the operating picture exists before the engagement begins.</p><a href="mailto:tony@strategicai.app?subject=StrategicAI%20partner%20inquiry" onClick={handlePartnerInquiry} className="mt-10 inline-flex items-center rounded-full bg-cyan-400 px-6 py-3.5 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300">Start a partner conversation <Mail size={16} className="ml-2" aria-hidden="true" /></a></div></section>
      </main>
      <TrustAgentShell enabled={true} mode="public" />
    </div>
  );
}
