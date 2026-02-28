"use client";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import FloatingButtonsFull from "@/components/ui/FloatingButtonsFull";
import { useState, type FormEvent } from "react";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const text = `Hello Tyre Express,%0AName: ${encodeURIComponent(name)}%0AEmail: ${encodeURIComponent(email)}%0AMessage: ${encodeURIComponent(message)}`;
    window.open(`https://wa.me/447495047871?text=${text}`, "_blank");
  }
  return (
    <div className="relative flex min-h-screen flex-col overflow-x-hidden">
      <Header />

      <main className="max-w-7xl mx-auto px-4 py-8 sm:py-12 sm:px-6 lg:px-8">
        {/* Hero */}
        <div className="mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-3 animate-slide-in-left">
            Contact Us
          </h1>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-2xl animate-slide-in-right delay-150">
            Expert tyre services just a call or message away. Our team is ready to help you get back on the road safely.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
          {/* Contact Info & Map */}
          <div className="space-y-6 sm:space-y-8 animate-fade-in-left">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {/* Phone */}
              <Link
                href="tel:+447495047871"
                className="relative group p-5 sm:p-6 bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl hover:border-primary transition-all duration-300 hover:shadow-xl overflow-hidden"
              >
                <div className="size-10 sm:size-12 bg-primary/10 text-primary rounded-lg flex items-center justify-center mb-3 sm:mb-4 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <span className="material-symbols-outlined">phone_in_talk</span>
                </div>
                <h3 className="font-bold text-slate-900 dark:text-white mb-1 group-hover:text-primary transition-colors text-sm sm:text-base">Call Us</h3>
                <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm mb-2">Speak to an expert now</p>
                <p className="text-primary font-bold text-sm sm:text-base">+44 7495 047871</p>
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              </Link>

              {/* Email */}
              <Link
                href="mailto:info@tyreexpress.com"
                className="relative group p-5 sm:p-6 bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl hover:border-primary transition-all duration-300 hover:shadow-xl overflow-hidden"
              >
                <div className="size-10 sm:size-12 bg-primary/10 text-primary rounded-lg flex items-center justify-center mb-3 sm:mb-4 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <span className="material-symbols-outlined">mail</span>
                </div>
                <h3 className="font-bold text-slate-900 dark:text-white mb-1 group-hover:text-primary transition-colors text-sm sm:text-base">Email Us</h3>
                <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm mb-2">We reply within 2 hours</p>
                <p className="text-primary font-bold text-xs sm:text-sm break-all">info@tyreexpress.com</p>
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              </Link>

              {/* Working Hours */}
              <div className="p-5 sm:p-6 bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl sm:col-span-2">
                <div className="flex items-center gap-3 mb-4">
                  <div className="size-9 sm:size-10 bg-accent/10 text-accent rounded-lg flex items-center justify-center">
                    <span className="material-symbols-outlined text-sm sm:text-base">schedule</span>
                  </div>
                  <h3 className="font-bold text-slate-900 dark:text-white text-sm sm:text-base">Working Hours</h3>
                </div>
                <div className="grid grid-cols-2 gap-3 text-xs sm:text-sm">
                  {[
                    { day: "Mon - Fri", hours: "8:00 AM - 6:00 PM" },
                    { day: "Saturday", hours: "9:00 AM - 4:00 PM" },
                    { day: "Sunday", hours: "Closed", accent: true },
                    { day: "Holidays", hours: "10:00 AM - 2:00 PM" },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="flex justify-between border-b border-slate-100 dark:border-slate-700 pb-2"
                    >
                      <span className="text-slate-500">{item.day}</span>
                      <span className={`font-semibold ${item.accent ? "text-accent" : ""}`}>{item.hours}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="relative overflow-hidden rounded-xl border border-slate-200 dark:border-slate-700 h-52 sm:h-64 bg-slate-200 dark:bg-slate-800 group">
              <div
                className="absolute inset-0 bg-cover bg-center opacity-80 transition-transform duration-10000 group-hover:scale-110"
                style={{
                  backgroundImage:
                    'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDJKumfwTBY9gtiBGEX5antlnSDRZTiisYx-HjtKsrYdM7kxFQNlNLdudeZnX3NE8CEfgzCVibiGqNcnj68FkFiLEPo3yGvSVa4jgP2U8cshBv8Cy1nZ6lWtQQYYnGKa_AnuTEOZnn-ZSknsJRbyp7a2S08L2DRpjRgaycdZENJhYZTjrglPhjD66bbKF9mtAqy_163K533KRASaeVcVOFhE0G1jPoGrbdN7bJO5NhrQvq6Ev9JUrtGEWAp7VPRoaHnkfppaAp8xyaW")',
                }}
              ></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-white dark:bg-slate-900 p-3 sm:p-4 rounded-lg shadow-xl border border-slate-100 dark:border-slate-800 flex items-center gap-2 sm:gap-3">
                  <span className="material-symbols-outlined text-primary">location_on</span>
                  <div>
                    <p className="font-bold text-xs sm:text-sm">Tyre Express Workshop</p>
                    <p className="text-xs text-slate-500">123 Industrial Way, Main City</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 p-6 sm:p-8 rounded-2xl shadow-sm animate-fade-in-right">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-5 sm:mb-6">
              Send us a message
            </h2>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="John Doe"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-700 dark:bg-slate-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300 text-sm"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="info@tyreexpress.com"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-700 dark:bg-slate-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300 text-sm"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="How can we help you today?"
                  required
                  rows={5}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-700 dark:bg-slate-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300 text-sm"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3.5 sm:py-4 rounded-lg shadow-lg shadow-green-500/20 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2 group relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                <span className="material-symbols-outlined group-hover:rotate-12 transition-transform duration-300 text-lg">chat</span>
                <span className="relative z-10 text-sm sm:text-base">Send via WhatsApp</span>
              </button>

              <p className="text-center text-xs text-slate-500">
                Tapping the button will open WhatsApp with your message pre-filled.
              </p>
            </form>
          </div>
        </div>
      </main>

      <Footer />
      <FloatingButtonsFull />
    </div>
  );
}
