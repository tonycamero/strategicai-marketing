import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { trackEvent } from "../lib/analytics";

const navLinkClass = "text-sm font-medium text-slate-400 hover:text-white transition";
const mobileLinkClass = "rounded-xl px-4 py-3 text-base font-medium text-slate-200 hover:bg-slate-900";

export function Navbar() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname, location.hash]);

  return (
    <nav className="sticky top-0 z-50 border-b border-slate-800/80 bg-slate-950/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link to="/" className="group inline-flex items-center gap-2">
          <span className="text-2xl font-bold tracking-tight text-white">
            <span className="text-cyan-400 transition-colors group-hover:text-cyan-300">Strategic</span>AI
          </span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          <Link to="/how-it-works" className={navLinkClass}>How It Works</Link>
          <Link to="/product" className={navLinkClass}>Product</Link>
          <Link to="/partners" className={navLinkClass}>Partners</Link>
          <Link
            to="/founding100/offer"
            onClick={() => trackEvent("founding100_cta_click", { source: "navbar" })}
            className="inline-flex items-center rounded-full bg-cyan-500 px-5 py-2.5 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400"
          >
            Founding 100
          </Link>
        </div>

        <button
          type="button"
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsOpen((open) => !open)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-700 text-white transition hover:border-cyan-400/60 hover:bg-slate-900 md:hidden"
        >
          {isOpen ? <X aria-hidden="true" size={22} /> : <Menu aria-hidden="true" size={22} />}
        </button>
      </div>

      {isOpen && (
        <div id="mobile-navigation" className="border-t border-slate-800 bg-slate-950 px-6 pb-6 pt-4 md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-1">
            <Link to="/how-it-works" onClick={() => setIsOpen(false)} className={mobileLinkClass}>How It Works</Link>
            <Link to="/product" className={mobileLinkClass}>Product</Link>
            <Link to="/partners" className={mobileLinkClass}>Partners</Link>
            <Link
              to="/founding100/offer"
              onClick={() => {
                setIsOpen(false);
                trackEvent("founding100_cta_click", { source: "mobile-navbar" });
              }}
              className="mt-3 inline-flex items-center justify-center rounded-full bg-cyan-400 px-5 py-3 text-base font-semibold text-slate-950 transition hover:bg-cyan-300"
            >
              Founding 100
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
