import { ArrowRight, CheckCircle2, Mail, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";
import { TrustAgentShell } from "../../trustagent/TrustAgentShell";
import { usePageMeta } from "../../hooks/usePageMeta";
import { trackEvent } from "../../lib/analytics";

const sectionClass = "mx-auto max-w-6xl px-6 py-20";
const cardClass =
  "rounded-3xl border border-slate-800 bg-slate-900/55 p-8 shadow-[0_0_0_1px_rgba(34,211,238,0.03)]";

const boundaries = [
  "Founding 100 is the current commercial entry.",
  "The portfolio is built from real company context and correction.",
  "Business Views adapt to what the evidence supports.",
  "Nemo works from available company context in the authorized experience.",
  "Further implementation or specialist work is separately scoped.",
] as const;

export default function Pricing() {
  usePageMeta({
    title: "Ways to Work with StrategicAI | Founding 100",
    description:
      "See the current way to work with StrategicAI: the Founding 100 commercial entry, explicit scope boundaries, and separately scoped downstream work when warranted.",
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
        <section id="ways-to-work" className="relative overflow-hidden border-b border-slate-800/70">
          <div className="absolute inset-0">
            <img src="/images/brain-bg.png" alt="" className="h-full w-full object-cover opacity-[0.08]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.16),transparent_42%),linear-gradient(180deg,rgba(2,6,23,0.4),#020617_82%)]" />
          </div>
          <div className="relative mx-auto max-w-6xl px-6 pb-24 pt-28">
            <div className="max-w-4xl">
              <p className="mb-6 text-sm font-semibold uppercase tracking-[0.28em] text-cyan-300/80">Ways to work with StrategicAI</p>
              <h1 className="text-5xl font-semibold leading-[1.05] text-white md:text-7xl">Start with the current entry. Add depth when the evidence earns it.</h1>
              <p className="mt-8 max-w-3xl text-lg leading-8 text-slate-300 md:text-2xl md:leading-10">StrategicAI is not a fixed software ladder. The current public commercial entry is the Founding 100: a bounded experience for building intelligence about how your business actually works.</p>
              <Link to="/founding100/offer" onClick={handleFounding100Click} className="mt-10 inline-flex items-center rounded-full bg-cyan-400 px-7 py-4 text-base font-semibold text-slate-950 transition hover:bg-cyan-300">Explore Founding 100 <ArrowRight size={17} className="ml-2" aria-hidden="true" /></Link>
            </div>
          </div>
        </section>

        <section className={sectionClass} aria-labelledby="current-entry-title">
          <div className="grid items-stretch gap-8 lg:grid-cols-[1.05fr_0.95fr]">
            <div className={`${cardClass} border-cyan-400/20 bg-[linear-gradient(145deg,rgba(9,42,49,0.7),rgba(15,23,42,0.9))]`}>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-cyan-300/75">Current commercial entry</p>
              <h2 id="current-entry-title" className="text-3xl font-semibold text-white md:text-5xl">Founding 100</h2>
              <p className="mt-6 text-lg leading-8 text-slate-300">Build a serious body of intelligence about your company, make useful parts visible through Business Views, and work with Nemo from that context for the authorized experience.</p>
              <p className="mt-6 text-base leading-7 text-slate-400">The offer page carries the current price, scope, checkout state, and release boundaries. This compatibility surface does not duplicate the sales argument.</p>
              <Link to="/founding100/offer" onClick={handleFounding100Click} className="mt-8 inline-flex items-center text-sm font-semibold text-cyan-200 transition hover:text-cyan-100">Review the offer <ArrowRight size={16} className="ml-2" aria-hidden="true" /></Link>
            </div>
            <div className={cardClass}>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-cyan-300/75">Explicit boundaries</p>
              <ul className="space-y-5 text-base leading-7 text-slate-300">
                {boundaries.map((item) => <li key={item} className="flex gap-3"><CheckCircle2 size={18} className="mt-1 shrink-0 text-cyan-300" aria-hidden="true" />{item}</li>)}
              </ul>
            </div>
          </div>
        </section>

        <section className={`${sectionClass} pt-0`} aria-labelledby="downstream-title">
          <div className="rounded-3xl border border-slate-800 bg-slate-900/55 p-8 md:p-12">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-cyan-300/75">After understanding</p>
            <h2 id="downstream-title" className="text-3xl font-semibold text-white md:text-5xl">Downstream work stays separately scoped.</h2>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">A clearer operating picture may show that the right next move is a decision, a new owner, an investigation, a partner conversation, an automation, or no immediate change. StrategicAI does not pre-sell a replacement ladder for those possibilities.</p>
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {[
                ["Understand", "Form and correct the company picture."],
                ["Inspect", "Use Business Views and Nemo to reason from it."],
                ["Act when warranted", "Authorize the next intervention with clear scope."],
              ].map(([title, body]) => <div key={title} className="rounded-2xl border border-slate-700/80 bg-slate-950/35 p-5"><h3 className="text-xl font-semibold text-white">{title}</h3><p className="mt-3 text-sm leading-6 text-slate-400">{body}</p></div>)}
            </div>
          </div>
        </section>

        <section className={sectionClass} aria-labelledby="compatibility-title">
          <div className="grid gap-8 lg:grid-cols-[1fr_1fr]">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-cyan-300/75">If you arrived from an older page</p>
              <h2 id="compatibility-title" className="text-3xl font-semibold text-white md:text-5xl">The site now starts with understanding.</h2>
              <p className="mt-6 text-lg leading-8 text-slate-300">Older links may have described a different entry point. They now resolve into this current architecture so the public site does not promise a product sequence that no longer represents StrategicAI.</p>
            </div>
            <div className={cardClass}>
              <ShieldCheck size={26} className="text-cyan-300" aria-hidden="true" />
              <h3 className="mt-6 text-2xl font-semibold text-white">Need a partner conversation?</h3>
              <p className="mt-4 text-base leading-7 text-slate-400">If you advise, implement, integrate, or bring StrategicAI into a defined context, start with the partner page.</p>
              <Link to="/partners" onClick={handlePartnerClick} className="mt-7 inline-flex items-center text-sm font-semibold text-cyan-200 transition hover:text-cyan-100">Understand the partner model <ArrowRight size={16} className="ml-2" aria-hidden="true" /></Link>
            </div>
          </div>
        </section>

        <section className={`${sectionClass} pt-0`}>
          <div className="rounded-3xl border border-slate-800 bg-slate-900/55 p-8 text-center md:p-12">
            <Mail size={27} className="mx-auto text-cyan-300" aria-hidden="true" />
            <h2 className="mt-6 text-3xl font-semibold text-white md:text-5xl">See the current path.</h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">Enter the Founding 100 offer surface for the current commercial terms and release state.</p>
            <Link to="/founding100/offer" onClick={handleFounding100Click} className="mt-8 inline-flex items-center rounded-full bg-cyan-400 px-6 py-3.5 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300">Explore Founding 100 <ArrowRight size={16} className="ml-2" aria-hidden="true" /></Link>
          </div>
        </section>
      </main>
      <TrustAgentShell enabled={true} mode="public" />
    </div>
  );
}
