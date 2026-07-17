import React, { useEffect } from "react";
import { TrustAgentShell } from "../../trustagent/TrustAgentShell";
import { usePageMeta } from "../../hooks/usePageMeta";
import { trackEvent } from "../../lib/analytics";
import { buildSignupUrl } from "../../lib/signup";

const sectionClass = "mx-auto max-w-6xl px-6 py-20";
const cardClass = "rounded-[2rem] border border-slate-800 bg-slate-900/55 p-8";

export default function Partners() {
  usePageMeta({
    title: "StrategicAI Partners | Deliver Governed Organizational Change",
    description:
      "StrategicAI works with a limited group of operators, advisors, and ecosystem leaders who help organizations move consequential change with clear boundaries and evidence.",
  });

  useEffect(() => window.scrollTo({ top: 0, behavior: "smooth" }), []);

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <main>
        <section className={sectionClass}>
          <div className="max-w-4xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-cyan-300/75">Partners</p>
            <h1 className="text-4xl font-semibold leading-tight md:text-6xl">Help leaders change without asking them to gamble the organization.</h1>
            <p className="mt-8 text-lg leading-8 text-slate-300">StrategicAI works with a limited group of operators, advisors, and ecosystem leaders who can preserve evidence, authority, and accountability while consequential change moves into practice.</p>
            <p className="mt-6 text-sm text-slate-400">Partner access remains limited while the operating model and delivery standards are proven across active engagements.</p>
          </div>
        </section>

        <section className={`${sectionClass} pt-0`}>
          <h2 className="max-w-3xl text-3xl font-semibold md:text-5xl">Partnership begins with responsibility for the result.</h2>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {["You already advise, operate, or support organizations through consequential decisions.", "You want a governed delivery system, not an affiliate link.", "You respect the boundary between evidence, interpretation, recommendation, and implementation.", "You can preserve leadership authority while bringing specialist capability into the work."].map((item) => <div key={item} className={cardClass}><p className="leading-7 text-slate-300">{item}</p></div>)}
          </div>
        </section>

        <section className={sectionClass}>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              ["Ecosystem Partners", "Leaders and platforms that bring StrategicAI into a defined organizational context while preserving clear commercial and governance boundaries."],
              ["Delivery Partners", "Operators, consultants, and implementation teams capable of carrying an approved intervention into practice under StrategicAI delivery standards."],
              ["Specialist Partners", "Domain experts, technology providers, and system builders who contribute bounded capability without claiming authority over the whole organization."],
            ].map(([title, body]) => <div key={title} className={cardClass}><h2 className="text-2xl font-semibold">{title}</h2><p className="mt-5 leading-7 text-slate-400">{body}</p></div>)}
          </div>
        </section>

        <section className={sectionClass}>
          <div className={cardClass}>
            <h2 className="text-3xl font-semibold md:text-5xl">Leverage requires boundaries.</h2>
            <div className="mt-8 grid gap-4 text-lg text-slate-300 md:grid-cols-2">
              {["Evidence before prescription.", "Authority before action.", "Scope before automation.", "Receipts before outcome claims.", "Accountable leadership remains accountable."].map((item) => <p key={item}>{item}</p>)}
            </div>
          </div>
        </section>

        <section className={sectionClass}>
          <div className={`${cardClass} text-center`}>
            <h2 className="text-3xl font-semibold md:text-5xl">Experience the model before you carry it to others.</h2>
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">Begin with the Executive Brief and experience the same evidence, participation, and artifact boundaries your clients or ecosystem would encounter.</p>
            <a href={buildSignupUrl("partners_executive_brief")} target="_blank" rel="noopener noreferrer" onClick={() => trackEvent("executive_brief_cta_click", { source: "partners" })} className="mt-10 inline-flex rounded-full bg-cyan-400 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300">Build My Executive Brief</a>
          </div>
        </section>
      </main>
      <TrustAgentShell enabled={true} mode="public" />
    </div>
  );
}