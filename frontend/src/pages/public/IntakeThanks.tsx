import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const scrollToTop = () => window.scrollTo(0, 0);

export default function IntakeThanks() {
    useEffect(scrollToTop, []);

    return (
        <div className="min-h-screen bg-slate-950 text-white flex flex-col items-center justify-center p-6 text-center">
            <div className="w-20 h-20 bg-blue-600/20 rounded-full flex items-center justify-center mb-8 border border-blue-500/30">
                <span className="text-4xl">✅</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Got it.</h1>
            <p className="text-xl text-slate-400 mb-12 max-w-lg leading-relaxed">
                We’ve received your intake. We’ll reach out within <strong>1 business day</strong> to discuss the right next step for your business.
            </p>
            <Link to="/" className="inline-flex items-center px-8 py-4 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-bold transition-all transform hover:scale-105 cursor-pointer shadow-lg shadow-blue-500/20">
                Back to Home
            </Link>
        </div>
    );
}
