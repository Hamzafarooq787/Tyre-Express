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
          className="flex items-center gap-2 bg-green-500 text-white pl-3 pr-4 py-3 rounded-full shadow-lg shadow-green-500/40 hover:bg-green-600 transition-all duration-300 hover:scale-105"
        >
          <span className="material-symbols-outlined text-xl">chat</span>
          <span className="font-semibold text-sm">WhatsApp</span>
        </Link>

        {/* Call Button */}
        <div className="relative">
          <Link
            href="tel:0745047871"
            aria-label="Call 0745047871"
            className="flex items-center gap-2 bg-primary text-white pl-3 pr-4 py-3 rounded-full shadow-lg shadow-primary/40 hover:bg-primary/90 transition-all duration-300 hover:scale-105"
          >
            <span className="material-symbols-outlined text-xl">call</span>
            <span className="font-semibold text-sm">0745047871</span>
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

      {/* Mobile Bottom Bar - Only on Mobile */}
      <div className="fixed bottom-0 left-0 right-0 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 py-2 px-4 flex justify-around items-center z-40 md:hidden">
        <Link href="/" className="flex flex-col items-center text-primary">
          <span className="material-symbols-outlined text-xl">home</span>
          <span className="text-[10px]">Home</span>
        </Link>
        <Link href="/services" className="flex flex-col items-center text-slate-600">
          <span className="material-symbols-outlined text-xl">build</span>
          <span className="text-[10px]">Services</span>
        </Link>
        <Link
          href="tel:0745047871"
          className="flex flex-col items-center -mt-8 bg-primary text-white p-3 rounded-full shadow-lg"
        >
          <span className="material-symbols-outlined text-2xl">call</span>
        </Link>
        <Link href="/about" className="flex flex-col items-center text-slate-600">
          <span className="material-symbols-outlined text-xl">info</span>
          <span className="text-[10px]">About</span>
        </Link>
        <Link href="/contact" className="flex flex-col items-center text-slate-600">
          <span className="material-symbols-outlined text-xl">mail</span>
          <span className="text-[10px]">Contact</span>
        </Link>
      </div>
    </>
  );
};

export default FloatingButtonsFull;
