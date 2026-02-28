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
      {/* WhatsApp Button - Left Side */}
      <div className="fixed bottom-4 left-4 z-50 group">
        <Link
          href="https://wa.me/44745047871?text=Hello%20Tyre%20Express%2C%20I%20need%20emergency%20roadside%20assistance%21"
          target="_blank"
          className="flex items-center gap-3 bg-green-500 text-white pl-3 pr-5 py-3 rounded-full shadow-xl shadow-green-500/50 hover:bg-green-600 transition-all duration-300 hover:scale-105"
        >
          <span className="material-symbols-outlined text-2xl">chat</span>
          <span className="font-bold text-sm hidden sm:inline">WhatsApp</span>
        </Link>
        
        {/* Online status */}
        <span className="absolute -top-1 -right-1 w-3 h-3 bg-green-300 rounded-full border-2 border-white animate-pulse"></span>
      </div>

      {/* Emergency Call Button - Right Side */}
      <div className="fixed bottom-4 right-4 z-50 group">
        <Link
          href="tel:0745047871"
          className="flex items-center gap-3 bg-primary text-white pl-3 pr-5 py-3 rounded-full shadow-xl shadow-primary/50 hover:bg-primary/90 transition-all duration-300 hover:scale-105"
        >
          <span className="material-symbols-outlined text-2xl animate-ring relative">
            call
            <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full animate-ping"></span>
          </span>
          <span className="font-bold text-sm hidden sm:inline">0745047871</span>
        </Link>
        
        {/* 24/7 badge */}
        <span className="absolute -top-2 -right-2 bg-accent text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
          24/7
        </span>
      </div>

      {/* Back to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-20 right-4 z-50 bg-slate-800 text-white p-3 rounded-full shadow-xl hover:bg-primary transition-all duration-300 hover:scale-110 animate-fade-in"
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