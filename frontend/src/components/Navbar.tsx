import React from "react";
import { Link, useLocation } from "react-router-dom";
import { trackEvent } from "../lib/analytics";

const navLinkClass = "text-sm font-medium text-slate-400 hover:text-white transition";

export function Navbar() {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <nav className="sticky top-0 z-50 border-b border-slate-800/80 bg-slate-950/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link to="/" className="group inline-flex items-center gap-2">
          <span className="text-2xl font-bold tracking-tight text-white">
            <span className="text-cyan-400 transition-colors group-hover:text-cyan-300">Strategic</span>AI
          </span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          <a href={isHome ? "#how-it-works" : "/#how-it-works"} className={navLinkClass}>
            How It Works
          </a>
          <Link to="/product" className={navLinkClass}>
            Product
          </Link>
          <Link to="/pricing#engagements" className={navLinkClass}>
            Engagements
          </Link>
          <Link to="/partners" className={navLinkClass}>
            Partners
          </Link>
          <Link
            to="/intake"
            onClick={() => trackEvent("executive_brief_cta_click", { source: "navbar" })}
            className="inline-flex items-center rounded-full bg-cyan-500 px-5 py-2.5 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400"
          >
            Build My Executive Brief
          </Link>
        </div>
      </div>
    </nav>
  );
}
