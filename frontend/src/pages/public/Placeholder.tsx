import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const scrollToTop = () => window.scrollTo(0, 0);

export default function Placeholder() {
    const location = useLocation();

    useEffect(scrollToTop, [location]);

    return (
        <div className="min-h-screen bg-slate-950 text-white flex flex-col items-center justify-center p-6 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Coming Soon</h1>
            <p className="text-xl text-slate-400 mb-8 max-w-lg">
                The page <strong>{location.pathname}</strong> is currently under construction as part of our 2026Q1 site refresh.
            </p>
            <Link to="/" className="inline-flex items-center px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium transition cursor-pointer">
                Return Home
            </Link>
        </div>
    );
}
