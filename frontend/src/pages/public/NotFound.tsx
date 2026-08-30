import { ArrowLeft, ArrowRight, Compass } from "lucide-react";
import { Link } from "react-router-dom";
import { TrustAgentShell } from "../../trustagent/TrustAgentShell";
import { usePageMeta } from "../../hooks/usePageMeta";

export default function NotFound() {
  usePageMeta({
    title: "StrategicAI | Page Not Found",
    description: "This StrategicAI page is not available. Return to the current StrategicAI story or explore the Founding 100.",
  });

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <main className="mx-auto flex min-h-[70vh] max-w-6xl items-center px-6 py-24">
        <section className="max-w-3xl">
          <Compass size={30} className="text-cyan-300" aria-hidden="true" />
          <p className="mt-8 text-sm font-semibold uppercase tracking-[0.28em] text-cyan-300/80">404 · Route not found</p>
          <h1 className="mt-5 text-5xl font-semibold leading-[1.05] text-white md:text-7xl">This page is not part of the current picture.</h1>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-300 md:text-2xl md:leading-10">The page you followed may be an older link or may no longer be available. Start again with how the business actually works.</p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Link to="/" className="inline-flex items-center justify-center rounded-full bg-cyan-400 px-7 py-4 text-base font-semibold text-slate-950 transition hover:bg-cyan-300"><ArrowLeft size={17} className="mr-2" aria-hidden="true" /> Return home</Link>
            <Link to="/founding100/offer" className="inline-flex items-center justify-center rounded-full border border-slate-700 px-7 py-4 text-base font-semibold text-white transition hover:border-slate-500 hover:bg-slate-900">Explore Founding 100 <ArrowRight size={17} className="ml-2" aria-hidden="true" /></Link>
          </div>
        </section>
      </main>
      <TrustAgentShell enabled={true} mode="public" />
    </div>
  );
}
