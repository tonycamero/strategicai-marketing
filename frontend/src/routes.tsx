import React from "react";
import { Navigate, useLocation } from "react-router-dom";

import AlternateHomePage from "./pages/public/AlternateHomePage";
import HowItWorks from "./pages/public/HowItWorks";
import Partners from "./pages/public/Partners";
import Placeholder from "./pages/public/Placeholder";
import Product from "./pages/public/Product";
import Pricing from "./pages/public/Pricing";
import Founding100 from "./pages/public/Founding100";
import Founding100Content from "./pages/public/Founding100Content";
import Founding100Offer from "./pages/public/Founding100Offer";
import NotFound from "./pages/public/NotFound";

export type AppRoute = {
  path: string;
  element: React.ReactElement;
  label?: string;
  shell?: boolean;
};

function LegacyRedirect({ to }: { to: string }) {
  const location = useLocation();

  return <Navigate to={{ pathname: to, search: location.search, hash: location.hash }} replace />;
}

export const routes: AppRoute[] = [
  { path: "/", element: <AlternateHomePage /> },
  { path: "/legacy-home", element: <Navigate to="/" replace /> },
  { path: "/brain", element: <Navigate to="/" replace /> },
  { path: "/alt-home", element: <Navigate to="/" replace /> },

  /* Navigation Links */
  { path: "/how-it-works", element: <HowItWorks /> },
  { path: "/product", element: <Product /> },
  { path: "/strategic-ai-brain", element: <Navigate to="/" replace /> },
  { path: "/features", element: <Navigate to="/product" replace />, label: "Features" },
  { path: "/why", element: <Navigate to="/" replace /> },
  { path: "/pricing", element: <Pricing /> },
  
  /* Solutions */
  { path: "/smb", element: <Navigate to="/" replace /> },
  
  /* Partners & Certification */
  { path: "/partners", element: <Partners />, label: "Partner Program" },
  { path: "/partner", element: <Navigate to="/partners" replace /> },
  { path: "/authority-partner", element: <Navigate to="/partners" replace />, label: "Partner" },
  { path: "/operator", element: <Navigate to="/partners" replace /> },
  { path: "/certified-operator", element: <Navigate to="/partners" replace />, label: "Certification" },
  
  /* Strategic/Economics */
  { path: "/economics", element: <Navigate to="/partners" replace /> },
  { path: "/authority-economics", element: <Navigate to="/partners" replace /> },
  { path: "/partner-revenue-simulator", element: <Navigate to="/partners" replace /> },
  
  /* Intake Flow */
  { path: "/intake", element: <LegacyRedirect to="/founding100/offer" />, shell: false },
  { path: "/intake/thanks", element: <LegacyRedirect to="/founding100/offer" />, shell: false },

  /* Compatibility surface for the retired engagements label */
  { path: "/engagements", element: <LegacyRedirect to="/pricing" />, shell: false },

  /* Founding 100 funnel and customer handoff */
  { path: "/founding100/quick", element: <Founding100Content kind="short" />, shell: false },
  { path: "/founding100/webinar", element: <Founding100Content kind="deep" />, shell: false },
  { path: "/founding100/offer", element: <Founding100Offer />, shell: false },
  { path: "/founding100", element: <Founding100 />, shell: false },

  /* Auth/Roadmap Placeholders */
  { path: "/login", element: <Placeholder /> },
  { path: "/roadmap", element: <Placeholder /> },
  { path: "*", element: <NotFound /> },
];
