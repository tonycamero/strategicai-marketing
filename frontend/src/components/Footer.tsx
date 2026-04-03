import React from "react";
import { Link } from "react-router-dom";

export function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="border-t border-slate-800 bg-slate-950 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" onClick={scrollToTop} className="inline-block mb-6">
              <span className="text-2xl font-bold tracking-tighter text-white">
                <span className="text-blue-500">Strategic</span>AI.app
              </span>
            </Link>
            <p className="text-slate-400 text-sm max-w-sm leading-relaxed mb-6">
              Helping businesses map workflows, identify leaks, and fix operational friction with <span className="font-bold italic underline text-white">precision operational intelligence</span>.
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-wider">Product</h4>
            <ul className="space-y-4">
              <li><Link to="/features" onClick={scrollToTop} className="text-slate-500 hover:text-white transition text-sm">Features</Link></li>
              <li><Link to="/pricing" onClick={scrollToTop} className="text-slate-500 hover:text-white transition text-sm">Pricing</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-wider">Partnership</h4>
            <ul className="space-y-4">
              <li><Link to="/partners" onClick={scrollToTop} className="text-slate-500 hover:text-white transition text-sm">About Partner Program</Link></li>
              <li><Link to="/operator" onClick={scrollToTop} className="text-slate-500 hover:text-white transition text-sm">Certified Operator</Link></li>
              <li><Link to="/economics" onClick={scrollToTop} className="text-slate-500 hover:text-white transition text-sm">Authority Economics</Link></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex gap-8 text-xs font-medium text-slate-500">
            <a href="https://portal.strategicai.app/login" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">Partner Login</a>
          </div>
          <p className="text-xs text-slate-600 italic">© {new Date().getFullYear()} Strategic AI app. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
