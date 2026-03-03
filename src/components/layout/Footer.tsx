import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-slate-900 py-12 text-slate-400">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
          <div className="col-span-1 md:col-span-2">
            <div className="mb-6 flex items-center">
              <Link href="/">
                <Image
                  src="/logo.png"
                  alt="Tyre Express"
                  width={180}
                  height={64}
                  className="h-14 w-auto object-contain brightness-0 invert"
                />
              </Link>
            </div>
            <p className="mb-6 max-w-sm leading-relaxed">
              Providing elite mobile tyre fitting and emergency roadside assistance across the UK. Fast, reliable, and available when you need us most.
            </p>
            <div className="flex gap-4">
              <Link
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-800 hover:bg-primary hover:text-white transition-colors"
              >
                <span className="material-symbols-outlined text-xl">social_leaderboard</span>
              </Link>
              <Link
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-800 hover:bg-primary hover:text-white transition-colors"
              >
                <span className="material-symbols-outlined text-xl">share</span>
              </Link>
            </div>
          </div>
          <div>
            <h3 className="mb-6 font-bold text-white">Our Services</h3>
            <ul className="flex flex-col gap-3">
              <li>
                <Link href="#" className="hover:text-primary transition-colors">
                  Mobile Tyre Fitting
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition-colors">
                  Battery JumpStart
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition-colors">
                  Fuel Delivery
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition-colors">
                  Wheel Balancing
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-6 font-bold text-white">Contact Info</h3>
            <ul className="flex flex-col gap-3">
              <li className="flex items-start gap-2">
                <span className="material-symbols-outlined text-sm text-primary">phone</span>
                +44 7495 047871
              </li>
              <li className="flex items-start gap-2">
                <span className="material-symbols-outlined text-sm text-primary">location_on</span>
                <span>
                  Mobile Service Across the UK <br /> Available on all major routes
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-slate-800 pt-8 text-center text-xs">
          <p>© 2026 Tyre Express. All rights reserved. Professional Mobile Tyre Services.</p>
          <p className="mt-2 text-slate-500">
            Designed &amp; Developed By{" "}
            <a
              href="https://linkedo.co.uk/"
              rel="nofollow noreferrer"
              target="_blank"
              className="font-semibold text-[#FF2400] hover:opacity-80 transition-opacity"
            >
              Linkedo
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
