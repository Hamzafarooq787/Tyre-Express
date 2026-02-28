"use client";

import Link from "next/link";

const FloatingButtonsFull = () => {
  return (
    <>
      {/* Vertically stacked floating buttons - bottom right */}
      <div className="fixed bottom-6 right-5 z-50 flex flex-col items-end gap-3">
        {/* WhatsApp Button */}
        <Link
          href="https://wa.me/447495047871?text=Hello%20Tyre%20Express%2C%20I%20need%20emergency%20roadside%20assistance%21"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          className="flex items-center justify-center w-13 h-13 bg-green-500 text-white p-3.5 rounded-full shadow-lg shadow-green-500/40 hover:bg-green-600 transition-all duration-300 hover:scale-110"
        >
          <span className="material-symbols-outlined text-2xl">chat</span>
        </Link>

        {/* Call Button */}
        <Link
          href="tel:+447495047871"
          aria-label="Call +44 7495 047871"
          className="flex items-center justify-center w-13 h-13 bg-primary text-white p-3.5 rounded-full shadow-lg shadow-primary/40 hover:bg-primary/90 transition-all duration-300 hover:scale-110"
        >
          <span className="material-symbols-outlined text-2xl">call</span>
        </Link>
      </div>
    </>
  );
};

export default FloatingButtonsFull;
