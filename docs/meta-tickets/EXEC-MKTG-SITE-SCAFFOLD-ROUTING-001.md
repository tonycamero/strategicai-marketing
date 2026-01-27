META-TICKET v2
ID: EXEC-MKTG-SITE-SCAFFOLD-ROUTING-001
TITLE: strategicai-marketing — add Vite+React+TS scaffold + full routing for existing public pages, deploy on Netlify
STATUS: APPROVED FOR EXECUTION
OWNER: Tony Camero
AGENT: Local (Tony + terminal)
MODE: Surgical / deterministic / no refactors beyond required scaffolding + routing
SCOPE: ONLY this repo (strategicai-marketing). Do not touch DNS.

OBJECTIVE
Repo currently contains only TSX page components at frontend/src/pages/public/*.tsx with no build scaffolding. Create a complete buildable marketing app using Vite + React + TS and implement full routing to every existing public page. Deploy via Netlify with correct build/publish settings.

HARD RULES
- Do NOT delete or rewrite existing page components except to fix import paths/types if build fails.
- Prefer minimal wrapper/layout; keep styling untouched.
- Use React Router v6 (react-router-dom).
- Use Vite defaults (dist output).

ACCEPTANCE CRITERIA
- `npm run build` succeeds locally.
- Netlify deploy succeeds with:
  - Base directory: frontend
  - Build command: npm ci && npm run build
  - Publish directory: dist
- Production URLs render:
  - https://strategicai.app/
  - https://strategicai.app/features
  - https://strategicai.app/authority-economics
  - https://strategicai.app/authority-partner
  - https://strategicai.app/certified-operator
  - https://strategicai.app/partner-revenue-simulator
  - https://strategicai.app/smb-sales
- Direct deep links work (Netlify SPA rewrite configured).
- No blank page; no console fatal errors.

TASKS

0) PRECHECK (confirm repo state)
- In repo root:
  - ls -la
  - ls -la frontend/src/pages/public
  - Confirm there is NO frontend/package.json (expected)

1) CREATE VITE REACT+TS SCAFFOLD IN /frontend
- From repo root:
  - mkdir -p frontend
  - cd frontend
  - npm create vite@latest . -- --template react-ts
  - npm install

2) INSTALL ROUTER
- In /frontend:
  - npm install react-router-dom

3) ENSURE EXISTING PAGES ARE PRESENT
- Verify these files exist:
  - frontend/src/pages/public/AuthorityEconomics.tsx
  - frontend/src/pages/public/AuthorityPartner.tsx
  - frontend/src/pages/public/CertifiedOperator.tsx
  - frontend/src/pages/public/Features.tsx
  - frontend/src/pages/public/PartnerRevenueSimulator.tsx
  - frontend/src/pages/public/SmbSales.tsx

IF ANY ARE MISSING:
- STOP and pull/restore them before proceeding.

4) ADD SPA ROUTING STRUCTURE
4.1) Create: frontend/src/routes.tsx
- File content (exact):

  import React from "react";
  import { Navigate } from "react-router-dom";

  import Features from "./pages/public/Features";
  import AuthorityEconomics from "./pages/public/AuthorityEconomics";
  import AuthorityPartner from "./pages/public/AuthorityPartner";
  import CertifiedOperator from "./pages/public/CertifiedOperator";
  import PartnerRevenueSimulator from "./pages/public/PartnerRevenueSimulator";
  import SmbSales from "./pages/public/SmbSales";

  export type AppRoute = {
    path: string;
    element: React.ReactElement;
    label?: string;
  };

  export const routes: AppRoute[] = [
    { path: "/", element: <Navigate to="/features" replace /> },
    { path: "/features", element: <Features />, label: "Features" },
    { path: "/authority-economics", element: <AuthorityEconomics />, label: "Authority Economics" },
    { path: "/authority-partner", element: <AuthorityPartner />, label: "Authority Partner" },
    { path: "/certified-operator", element: <CertifiedOperator />, label: "Certified Operator" },
    { path: "/partner-revenue-simulator", element: <PartnerRevenueSimulator />, label: "Partner Revenue Simulator" },
    { path: "/smb-sales", element: <SmbSales />, label: "SMB Sales" },
  ];

4.2) Create: frontend/src/components/Shell.tsx
- Minimal shell with navigation to prove routing works (no styling assumptions; keep minimal):

  import React from "react";
  import { Link, Outlet, useLocation } from "react-router-dom";
  import { routes } from "../routes";

  export default function Shell() {
    const loc = useLocation();
    const nav = routes.filter(r => r.label);

    return (
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: 16 }}>
        <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 16 }}>
          {nav.map(r => (
            <Link
              key={r.path}
              to={r.path}
              style={{
                textDecoration: "none",
                padding: "6px 10px",
                borderRadius: 10,
                border: "1px solid rgba(255,255,255,0.15)",
                opacity: loc.pathname === r.path ? 1 : 0.8,
              }}
            >
              {r.label}
            </Link>
          ))}
        </div>
        <Outlet />
      </div>
    );
  }

4.3) Update: frontend/src/main.tsx
- Replace default Vite content with router bootstrap:

  import React from "react";
  import ReactDOM from "react-dom/client";
  import { BrowserRouter, Routes, Route } from "react-router-dom";
  import "./index.css";

  import Shell from "./components/Shell";
  import { routes } from "./routes";

  ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route element={<Shell />}>
            {routes.map(r => (
              <Route key={r.path} path={r.path} element={r.element} />
            ))}
          </Route>
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  );

5) NETLIFY SPA DEEP-LINK FIX (REWRITE)
- Create file: frontend/public/_redirects
- Content (exact):
  /*    /index.html   200

6) BUILD + RUN LOCALLY
- In /frontend:
  - npm run dev
  - Visit:
    - http://localhost:5173/
    - /features
    - /authority-economics
    - /authority-partner
    - /certified-operator
    - /partner-revenue-simulator
    - /smb-sales
- Then:
  - npm run build
  - Confirm:
    - ls -la dist
    - dist/index.html exists
    - dist/_redirects exists (copied from public)

7) FIX ANY BUILD FAILURES (ALLOWED CHANGES)
If a page component fails build due to missing imports, illegal relative paths, or expecting app-level providers:
- Allowed: add minimal safe polyfills/wrappers in Shell.tsx or adjust imports inside that page.
- Not allowed: redesign page, change copy, or restructure UI.

8) COMMIT + PUSH
- From repo root:
  - git status
  - git add -A
  - git commit -m "feat(marketing): add Vite React scaffold + full public routing"
  - git push origin main

9) NETLIFY SETTINGS (strategicai-marketing SITE)
Set exactly:
- Base directory: frontend
- Build command: npm ci && npm run build
- Publish directory: dist
Then trigger deploy (clear cache once if necessary).

10) POST-DEPLOY VALIDATION
- Confirm render on:
  - https://strategicai.app/features
  - https://strategicai.app/authority-economics
  - https://strategicai.app/authority-partner
  - https://strategicai.app/certified-operator
  - https://strategicai.app/partner-revenue-simulator
  - https://strategicai.app/smb-sales
- Hard refresh and direct paste deep-links should still work.

OUTPUT (BACK TO CHAT)
- Netlify deploy success screenshot (or summary line)
- Confirmed live URLs list + “PASS” for each
- Any minimal fixes applied to page components (file + one-line reason)
