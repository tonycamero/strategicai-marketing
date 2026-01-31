import React from "react";
import { Navigate } from "react-router-dom";

import SmbSales from "./pages/public/SmbSales";
import Partners from "./pages/public/Partners";
import AuthorityEconomics from "./pages/public/AuthorityEconomics";
import AuthorityPartner from "./pages/public/AuthorityPartner";
import CertifiedOperator from "./pages/public/CertifiedOperator";
import PartnerRevenueSimulator from "./pages/public/PartnerRevenueSimulator";
import Placeholder from "./pages/public/Placeholder";


export type AppRoute = {
  path: string;
  element: React.ReactElement;
  label?: string;
};



import Product from "./pages/public/Product";
import WhyStrategicAI from "./pages/public/WhyStrategicAI";
import Pricing from "./pages/public/Pricing";

export const routes: AppRoute[] = [
  { path: "/", element: <SmbSales /> },
  { path: "/partners", element: <Partners />, label: "Partner Program" },
  { path: "/product", element: <Product /> },
  { path: "/why", element: <WhyStrategicAI /> },
  { path: "/pricing", element: <Pricing /> },
  { path: "/login", element: <Placeholder /> },
  { path: "/roadmap", element: <Placeholder /> },
  { path: "/authority-economics", element: <AuthorityEconomics />, label: "Authority Economics" },
  { path: "/authority-partner", element: <AuthorityPartner />, label: "Authority Partner" },
  { path: "/certified-operator", element: <CertifiedOperator />, label: "Certified Operator" },
  { path: "/partner-revenue-simulator", element: <PartnerRevenueSimulator />, label: "Partner Revenue Simulator" },
];
