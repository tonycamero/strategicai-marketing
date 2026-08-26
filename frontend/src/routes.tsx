import React from "react";
import { Navigate } from "react-router-dom";

import AlternateHomePage from "./pages/public/AlternateHomePage";
import Partners from "./pages/public/Partners";
import Placeholder from "./pages/public/Placeholder";
import Intake from "./pages/public/Intake";
import IntakeThanks from "./pages/public/IntakeThanks";
import Product from "./pages/public/Product";
import Pricing from "./pages/public/Pricing";
import Founding100 from "./pages/public/Founding100";
import Founding100Content from "./pages/public/Founding100Content";
import Founding100Offer from "./pages/public/Founding100Offer";

export type AppRoute = {
  path: string;
  element: React.ReactElement;
  label?: string;
  shell?: boolean;
};

export const routes: AppRoute[] = [
  { path: "/", element: <AlternateHomePage /> },
  { path: "/legacy-home", element: <Navigate to="/" replace /> },
  { path: "/brain", element: <Navigate to="/" replace /> },
  { path: "/alt-home", element: <Navigate to="/" replace /> },

  /* Navigation Links */
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
  { path: "/intake", element: <Intake /> },
  { path: "/intake/thanks", element: <IntakeThanks /> },

  /* Founding 100 funnel and customer handoff */
  { path: "/founding100/quick", element: <Founding100Content kind="short" />, shell: false },
  { path: "/founding100/webinar", element: <Founding100Content kind="deep" />, shell: false },
  { path: "/founding100/offer", element: <Founding100Offer />, shell: false },
  { path: "/founding100", element: <Founding100 />, shell: false },

  /* Auth/Roadmap Placeholders */
  { path: "/login", element: <Placeholder /> },
  { path: "/roadmap", element: <Placeholder /> },
];
