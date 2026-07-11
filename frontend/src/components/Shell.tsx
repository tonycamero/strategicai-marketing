import React, { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

export default function Shell() {
    const location = useLocation();

    useEffect(() => {
        if (location.hash) {
            const id = location.hash.replace("#", "");
            const target = document.getElementById(id);

            if (target) {
                window.requestAnimationFrame(() => {
                    target.scrollIntoView({ behavior: "smooth", block: "start" });
                });
                return;
            }
        }

        window.scrollTo({ top: 0, behavior: "smooth" });
    }, [location.hash, location.pathname]);

    return (
        <>
            <Navbar />
            <Outlet />
            <Footer />
        </>
    );
}
