import React from "react";
import { Navigate } from "react-router-dom";

import SmbSales from "./pages/public/SmbSales";
import HomePage from "./pages/public/HomePage";
import Partners from "./pages/public/Partners";
import AuthorityEconomics from "./pages/public/AuthorityEconomics";
import AuthorityPartner from "./pages/public/AuthorityPartner";
import CertifiedOperator from "./pages/public/CertifiedOperator";
import PartnerRevenueSimulator from "./pages/public/PartnerRevenueSimulator";
import Placeholder from "./pages/public/Placeholder";
import Intake from "./pages/public/Intake";
import IntakeThanks from "./pages/public/IntakeThanks";
import Product from "./pages/public/Product";
import WhyStrategicAI from "./pages/public/WhyStrategicAI";
import Pricing from "./pages/public/Pricing";
import StrategicAiBrain from "./pages/public/StrategicAiBrain";

export type AppRoute = {
  path: string;
  element: React.ReactElement;
  label?: string;
};

export const routes: AppRoute[] = [
  { path: "/", element: <StrategicAiBrain /> },
  { path: "/legacy-home", element: <HomePage /> },
  
  /* Navigation Links */
  { path: "/product", element: <Product /> },
  { path: "/strategic-ai-brain", element: <StrategicAiBrain /> },
  { path: "/features", element: <Product />, label: "Features" }, // Alias for convenience
  { path: "/why", element: <WhyStrategicAI /> },
  { path: "/pricing", element: <Pricing /> },
  
  /* Solutions */
  { path: "/smb", element: <SmbSales /> },
  
  /* Partners & Certification */
  { path: "/partners", element: <Partners />, label: "Partner Program" },
  { path: "/partner", element: <AuthorityPartner /> },
  { path: "/authority-partner", element: <AuthorityPartner />, label: "Partner" },
  { path: "/operator", element: <CertifiedOperator /> },
  { path: "/certified-operator", element: <CertifiedOperator />, label: "Certification" },
  
  /* Strategic/Economics */
  { path: "/economics", element: <AuthorityEconomics /> },
  { path: "/authority-economics", element: <AuthorityEconomics /> },
  { path: "/partner-revenue-simulator", element: <PartnerRevenueSimulator /> },
  
  /* Intake Flow */
  { path: "/intake", element: <Intake /> },
  { path: "/intake/thanks", element: <IntakeThanks /> },
  
  /* Auth/Roadmap Placeholders */
  { path: "/login", element: <Placeholder /> },
  { path: "/roadmap", element: <Placeholder /> },
];
