import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const styles = {
  navItem: "text-sm font-medium text-slate-400 hover:text-white transition cursor-pointer flex items-center gap-1",
  dropdownItem: "block px-4 py-2 text-sm text-slate-400 hover:text-white hover:bg-slate-800 transition rounded-md",
  dropdownCard: "absolute top-full w-56 p-2 bg-slate-900 border border-slate-800 rounded-xl shadow-2xl z-50 animate-in fade-in slide-in-from-top-2",
};

const navLinks = [
  {
    label: "Product",
    links: [
      { label: "Features", to: "/features" },
      { label: "Pricing", to: "/pricing" },
    ],
  },
  {
    label: "Partnership",
    links: [
      { label: "About Partner Program", to: "/partners" },
      { label: "Certified Operator", to: "/operator" },
      { label: "Authority Economics", to: "/economics" },
    ],
  },
];

export function Navbar() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const location = useLocation();

  // Close dropdown on navigation
  useEffect(() => {
    setOpenDropdown(null);
  }, [location.pathname]);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <nav className="border-b border-slate-800 bg-slate-950/80 backdrop-blur-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" onClick={scrollToTop}>
          <div className="flex items-center gap-2 cursor-pointer group">
            <span className="text-2xl font-bold tracking-tighter text-white">
              <span className="text-blue-500 group-hover:text-blue-400 transition-colors">Strategic</span>AI.app
            </span>
          </div>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((category) => (
            <div
              key={category.label}
              className="relative group py-2"
              onMouseEnter={() => setOpenDropdown(category.label)}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <button className={styles.navItem}>
                {category.label}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className={`transition-transform duration-200 ${openDropdown === category.label ? "rotate-180" : ""}`}
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </button>

              {openDropdown === category.label && (
                <div className={styles.dropdownCard}>
                  {category.links.map((link) => (
                    <Link key={link.to} to={link.to} className={styles.dropdownItem} onClick={scrollToTop}>
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}

          <a
            href="https://portal.strategicai.app/login"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-slate-400 hover:text-white transition cursor-pointer"
          >
            Login
          </a>

          <Link to="/intake" onClick={scrollToTop}>
            <span className="px-4 py-2 rounded-full bg-blue-600 text-sm font-semibold text-white hover:bg-blue-700 transition cursor-pointer shadow-lg shadow-blue-500/20">
              Build My AI Brain
            </span>
          </Link>
        </div>
      </div>
    </nav>
  );
}
