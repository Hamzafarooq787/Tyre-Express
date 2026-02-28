"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const FloatingButtonsFull = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* Vertically stacked floating buttons - bottom right */}
      <div className="fixed bottom-6 right-5 z-50 flex flex-col items-end gap-3">
        {/* WhatsApp Button */}
        <Link
          href="https://wa.me/44745047871?text=Hello%20Tyre%20Express%2C%20I%20need%20emergency%20roadside%20assistance%21"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          className="flex items-center justify-center w-13 h-13 bg-green-500 text-white p-3.5 rounded-full shadow-lg shadow-green-500/40 hover:bg-green-600 transition-all duration-300 hover:scale-110"
        >
          <span className="material-symbols-outlined text-2xl">chat</span>
        </Link>

        {/* Call Button */}
        <div className="relative">
          <Link
            href="tel:0745047871"
            aria-label="Call 0745047871"
            className="flex items-center justify-center w-13 h-13 bg-primary text-white p-3.5 rounded-full shadow-lg shadow-primary/40 hover:bg-primary/90 transition-all duration-300 hover:scale-110"
          >
            <span className="material-symbols-outlined text-2xl">call</span>
          </Link>
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full leading-tight">
            24/7
          </span>
        </div>
      </div>

      {/* Back to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-40 right-5 z-50 bg-slate-800 text-white p-3 rounded-full shadow-xl hover:bg-primary transition-all duration-300 hover:scale-110 animate-fade-in"
          aria-label="Back to top"
        >
          <span className="material-symbols-outlined text-2xl">arrow_upward</span>
        </button>
      )}

    </>
  );
};

export default FloatingButtonsFull;
