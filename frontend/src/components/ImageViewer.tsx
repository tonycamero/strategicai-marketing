import React, { useEffect } from 'react';

interface ImageViewerProps {
    isOpen: boolean;
    src: string | null;
    alt?: string;
    onClose: () => void;
}

export const ImageViewer: React.FC<ImageViewerProps> = ({ isOpen, src, alt, onClose }) => {
    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
        };
        if (isOpen) {
            window.addEventListener('keydown', handleEsc);
            document.body.style.overflow = 'hidden'; // Prevent scrolling
        }
        return () => {
            window.removeEventListener('keydown', handleEsc);
            document.body.style.overflow = 'unset';
        };
    }, [isOpen, onClose]);

    if (!isOpen || !src) return null;

    return (
        <div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/95 backdrop-blur-sm p-4 animate-fade-in"
            onClick={onClose}
        >
            <div className="relative max-w-7xl w-full max-h-[95vh] flex items-center justify-center">
                <button
                    onClick={onClose}
                    className="absolute -top-12 right-0 text-slate-400 hover:text-white transition-colors p-2"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                    <span className="sr-only">Close</span>
                </button>
                <img
                    src={src}
                    alt={alt || "Full screen view"}
                    className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl border border-slate-800"
                    onClick={(e) => e.stopPropagation()} // Prevent closing when clicking the image itself
                />
            </div>
        </div>
    );
};
