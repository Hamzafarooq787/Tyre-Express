import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Link from "next/link";

export default function ContactPage() {
  return (
    <div className="relative flex min-h-screen flex-col overflow-x-hidden">
      <Header />

      <main className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        {/* Hero Section with Animations */}
        <div className="mb-12 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-4 animate-slide-in-left">
            Contact Us
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl animate-slide-in-right delay-150">
            Expert tyre services just a call or message away. Our team is ready to help you get back on the road safely.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information & Map */}
          <div className="space-y-8 animate-fade-in-left">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Phone - Pop In Animation */}
              <Link
                href="tel:0745047871"
                className="group p-6 bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl hover:border-primary transition-all duration-300 hover:scale-105 hover:shadow-xl animate-pop-in"
                style={{ animationDelay: "0.1s" }}
              >
                <div className="size-12 bg-primary/10 text-primary rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-all duration-300 group-hover:rotate-12 group-hover:scale-110">
                  <span className="material-symbols-outlined animate-ring">phone_in_talk</span>
                </div>
                <h3 className="font-bold text-slate-900 dark:text-white mb-1 group-hover:text-primary transition-colors">Call Us</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm mb-2">Speak to an expert now</p>
                <p className="text-primary font-bold group-hover:scale-105 transition-transform">0745047871</p>
                
                {/* Animated underline */}
                <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-primary group-hover:w-1/2 group-hover:left-0 transition-all duration-300"></div>
                <div className="absolute bottom-0 right-1/2 w-0 h-0.5 bg-primary group-hover:w-1/2 group-hover:right-0 transition-all duration-300"></div>
              </Link>

              {/* Email - Pop In Animation */}
              <Link
                href="mailto:info@tyreexpress.com"
                className="group p-6 bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl hover:border-primary transition-all duration-300 hover:scale-105 hover:shadow-xl animate-pop-in"
                style={{ animationDelay: "0.2s" }}
              >
                <div className="size-12 bg-primary/10 text-primary rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-all duration-300 group-hover:rotate-12 group-hover:scale-110">
                  <span className="material-symbols-outlined animate-bounce-gentle">mail</span>
                </div>
                <h3 className="font-bold text-slate-900 dark:text-white mb-1 group-hover:text-primary transition-colors">Email Us</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm mb-2">We reply within 2 hours</p>
                <p className="text-primary font-bold group-hover:scale-105 transition-transform">info@tyreexpress.com</p>
                
                {/* Animated shine effect */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              </Link>

              {/* Working Hours - Fade In Up Animation */}
              <div 
                className="p-6 bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl sm:col-span-2 animate-fade-in-up"
                style={{ animationDelay: "0.3s" }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="size-10 bg-accent/10 text-accent rounded-lg flex items-center justify-center animate-pulse">
                    <span className="material-symbols-outlined">schedule</span>
                  </div>
                  <h3 className="font-bold text-slate-900 dark:text-white">Working Hours</h3>
                </div>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  {[
                    { day: "Mon - Fri", hours: "8:00 AM - 6:00 PM", delay: "0.1s" },
                    { day: "Saturday", hours: "9:00 AM - 4:00 PM", delay: "0.2s" },
                    { day: "Sunday", hours: "Closed", delay: "0.3s", accent: true },
                    { day: "Holidays", hours: "10:00 AM - 2:00 PM", delay: "0.4s" },
                  ].map((item, index) => (
                    <div 
                      key={index}
                      className="flex justify-between border-b border-slate-100 dark:border-slate-700 pb-2 hover:translate-x-1 transition-transform duration-300 animate-fade-in-right"
                      style={{ animationDelay: item.delay }}
                    >
                      <span className="text-slate-500">{item.day}</span>
                      <span className={`font-semibold ${item.accent ? 'text-accent' : ''}`}>
                        {item.hours}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Map Placeholder with Animations */}
            <div className="relative overflow-hidden rounded-xl border border-slate-200 dark:border-slate-700 h-64 bg-slate-200 dark:bg-slate-800 group animate-fade-in-up delay-500">
              {/* Map image with zoom effect */}
              <div
                className="absolute inset-0 bg-cover bg-center opacity-80 transition-transform duration-10000 group-hover:scale-110"
                style={{
                  backgroundImage:
                    'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDJKumfwTBY9gtiBGEX5antlnSDRZTiisYx-HjtKsrYdM7kxFQNlNLdudeZnX3NE8CEfgzCVibiGqNcnj68FkFiLEPo3yGvSVa4jgP2U8cshBv8Cy1nZ6lWtQQYYnGKa_AnuTEOZnn-ZSknsJRbyp7a2S08L2DRpjRgaycdZENJhYZTjrglPhjD66bbKF9mtAqy_163K533KRASaeVcVOFhE0G1jPoGrbdN7bJO5NhrQvq6Ev9JUrtGEWAp7VPRoaHnkfppaAp8xyaW")',
                }}
              ></div>
              
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Location card with bounce animation */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-white dark:bg-slate-900 p-4 rounded-lg shadow-xl border border-slate-100 dark:border-slate-800 flex items-center gap-3 transform hover:scale-110 transition-transform duration-300 animate-bounce-gentle">
                  <span className="material-symbols-outlined text-primary animate-pulse">location_on</span>
                  <div>
                    <p className="font-bold text-sm">Tyre Express Workshop</p>
                    <p className="text-xs text-slate-500">123 Industrial Way, Main City</p>
                  </div>
                </div>
              </div>
              
              {/* Pulsing dots */}
              <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary rounded-full animate-ping"></div>
              <div className="absolute bottom-1/3 right-1/3 w-3 h-3 bg-accent rounded-full animate-ping delay-300"></div>
            </div>
          </div>

          {/* Contact Form with Animations */}
          <div className="bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 p-8 rounded-2xl shadow-sm animate-fade-in-right">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 animate-slide-in-right">
              Send us a message
            </h2>
            
            <form action="#" className="space-y-6" method="POST">
              {/* Name Field */}
              <div className="animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="John Doe"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-700 dark:bg-slate-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300 hover:scale-[1.02] focus:scale-100"
                />
              </div>

              {/* Email Field */}
              <div className="animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="info@tyreexpress.com"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-700 dark:bg-slate-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300 hover:scale-[1.02] focus:scale-100"
                />
              </div>

              {/* Message Field */}
              <div className="animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="How can we help you today?"
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-700 dark:bg-slate-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300 hover:scale-[1.02] focus:scale-100"
                ></textarea>
              </div>

              {/* Submit Button with Animations */}
              <button
                type="submit"
                className="w-full bg-accent hover:bg-accent/90 text-white font-bold py-4 rounded-lg shadow-lg shadow-accent/20 transition-all duration-300 transform hover:scale-105 active:scale-[0.98] flex items-center justify-center gap-2 group relative overflow-hidden animate-fade-in-up"
                style={{ animationDelay: "0.4s" }}
              >
                {/* Shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                
                <span className="material-symbols-outlined group-hover:rotate-12 transition-transform duration-300">
                  send
                </span>
                Send Message
                
                {/* Ripple effect on hover */}
                <span className="absolute inset-0 rounded-lg bg-white/20 scale-0 group-hover:scale-150 transition-transform duration-500 opacity-0 group-hover:opacity-100"></span>
              </button>

              {/* Privacy Policy Text */}
              <p className="text-center text-xs text-slate-500 mt-4 animate-fade-in-up delay-500">
                By submitting this form, you agree to our privacy policy and terms of service.
              </p>
            </form>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}