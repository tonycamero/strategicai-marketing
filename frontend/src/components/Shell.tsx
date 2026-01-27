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
