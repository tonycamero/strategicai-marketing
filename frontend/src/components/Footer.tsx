import React from "react";
import { Link } from "react-router-dom";
import { buildSignupUrl } from "../lib/signup";

export function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          <div className="md:col-span-2">
            <Link to="/" className="inline-block mb-6">
              <span className="text-2xl font-bold tracking-tight text-white">
                <span className="text-cyan-400">Strategic</span>AI
              </span>
            </Link>
            <p className="max-w-lg text-sm leading-relaxed text-slate-400">
              StrategicAI helps leadership see how the organization is actually operating before
              deciding what should change.
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-wider">Navigate</h4>
            <ul className="space-y-4">
              <li><Link to="/#how-it-works" className="text-slate-500 hover:text-white transition text-sm">How It Works</Link></li>
              <li><Link to="/product" className="text-slate-500 hover:text-white transition text-sm">Product</Link></li>
              <li><Link to="/pricing#engagements" className="text-slate-500 hover:text-white transition text-sm">Engagements</Link></li>
              <li><a href={buildSignupUrl("footer_executive_brief")} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-white transition text-sm">Build My Executive Brief</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 mt-12 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-xs text-slate-600">
            Free reflection first. Diagnostic, roadmap, and execution only after the evidence is clear.
          </p>
          <p className="text-xs text-slate-600 italic">© {new Date().getFullYear()} StrategicAI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
