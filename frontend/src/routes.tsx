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
