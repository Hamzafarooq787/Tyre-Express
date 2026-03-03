"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => setIsOpen(!isOpen);

  const links = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white/90 dark:bg-background-dark/90 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.png"
              alt="Tyre Express"
              width={160}
              height={56}
              className="h-12 w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-semibold transition-colors ${
                  pathname === link.href ? "text-primary border-b-2 border-primary" : "hover:text-primary"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Call Button */}
          <div className="hidden sm:flex items-center gap-4">
            <Link
              href="tel:+447495047871"
              className="flex items-center gap-2 bg-primary text-white px-5 py-2 rounded-lg font-bold text-sm hover:bg-primary/90 transition-all"
            >
              <span className="material-symbols-outlined text-sm">call</span>
              +44 7495 047871
            </Link>
          </div>

          {/* Hamburger Menu */}
          <button
            className="md:hidden flex items-center justify-center p-2 rounded-md text-primary hover:bg-primary/10"
            onClick={toggleMenu}
          >
            <span className="material-symbols-outlined">{isOpen ? "close" : "menu"}</span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <nav className="md:hidden bg-white dark:bg-background-dark border-t border-slate-200 dark:border-slate-800">
          <ul className="flex flex-col p-4 gap-3">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`block text-sm font-semibold transition-colors ${
                    pathname === link.href ? "text-primary" : "text-slate-700 dark:text-slate-200 hover:text-primary"
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            ))}

          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
