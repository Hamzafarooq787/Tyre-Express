import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import FloatingButtonsFull from "@/components/ui/FloatingButtonsFull";

export default function ServicesPage() {
  return (
    <div className="relative flex min-h-screen flex-col overflow-x-hidden">
      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <div className="relative w-full h-56 sm:h-64 md:h-80 overflow-hidden bg-slate-900 group">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-60 transition-transform duration-10000 group-hover:scale-110"
            style={{
              backgroundImage:
                'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAz_7WWrTAVPW3G3luRSOPtMo1gnQFUm4u_-2A3BoenXplRTk6RMU1KJmh4ZzO7vj2frFik8BE44vNBr3m5yTxTaZsPqJ0MKIQMZ9yHzGNxX1KfiNefzHdKa90ZkjJPvYks2QVgCJYNzboGU_HteiHt3GFI03-nVjaB9FStx1QefHvZx8rYL-9OqBQgLzLWTuEIHMzJ61xZ8FGMj4h7PfKw6nF0DQEFEL0xrHGOLuONun0sFMAK8CgnlBXGzPvU8hn6jIkajVUxFjQd")',
            }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent"></div>
          <div className="relative max-w-7xl mx-auto px-4 h-full flex flex-col justify-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-3 animate-slide-in-left">
              Our Services
            </h2>
            <p className="text-base sm:text-lg text-slate-200 max-w-xl leading-relaxed animate-slide-in-right delay-300">
              Fast, reliable, and professional roadside assistance across the region. We come to you, 24 hours a day.
            </p>
          </div>
        </div>

        {/* Services Section */}
        <section className="py-10 sm:py-16 px-4 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 gap-10 sm:gap-12">
            {/* Mobile Tyre Fitting */}
            <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 items-center bg-white dark:bg-slate-800 p-5 sm:p-6 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-700 hover:shadow-2xl transition-all duration-500 animate-fade-in-left">
              <div className="w-full lg:w-1/2 aspect-video rounded-xl overflow-hidden shadow-inner group/image">
                <div
                  className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover/image:scale-110"
                  style={{
                    backgroundImage:
                      'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAtTbiPZZEfvVZmY0SPrINkrfM8hf3f8FqkUozYlXjXvUEOtl6ZV_8gYyZdqQI_7JYo0XhUYqzVY2lHmMgxUF2fai_f4niNcHNqcafF5S_jp8-GuGyiHArcaJERQ7rLwCa_vo-5kVswSpDHboGAccDvr0sK6HPUmoX9-JwTD-Z0qdxxTaWhf3av6j7cyabMawMg9IviPuiu04W0YQ8BAyNHsnnUD5IUKZ46hOO_oUWU-9RTbsXOHAuAYjpfBgTxoQRswoh22IXHhLrs")',
                  }}
                ></div>
              </div>

              <div className="w-full lg:w-1/2 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-bold uppercase tracking-wider">
                  <span className="material-symbols-outlined text-sm">check_circle</span>
                  Popular Choice
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
                  Mobile Tyre Fitting
                </h3>

                <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm sm:text-base">
                  Expert tyre fitting and repair wherever you are. Whether you're at home, at work, or stranded on the
                  roadside, our mobile vans are equipped with state-of-the-art machinery to get you back on the move
                  safely.
                </p>

                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 text-sm text-slate-700 dark:text-slate-300">
                  {[
                    "Emergency Puncture Repair",
                    "New Tyre Installation",
                    "Wheel Balancing",
                    "TPMS Sensor Service",
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-primary text-lg flex-shrink-0">verified</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-2">
                  <Link
                    href="tel:0745047871"
                    className="inline-flex items-center justify-center gap-2 bg-primary text-white px-6 py-3 rounded-lg font-bold hover:bg-primary/90 transition-all duration-300 hover:scale-105 text-sm sm:text-base"
                  >
                    <span className="material-symbols-outlined">build</span>
                    Request Fitting
                  </Link>
                </div>
              </div>
            </div>

            {/* JumpStart and Fuel Delivery Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
              {/* JumpStart */}
              <div className="bg-white dark:bg-slate-800 p-6 sm:p-8 rounded-2xl shadow-lg border border-slate-100 dark:border-slate-700 flex flex-col hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 group/jump">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-accent/10 text-accent rounded-xl flex items-center justify-center mb-5 group-hover/jump:scale-110 group-hover/jump:rotate-12 transition-all duration-300">
                  <span className="material-symbols-outlined text-2xl sm:text-3xl">bolt</span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold mb-3">JumpStart Service</h3>

                <p className="text-slate-600 dark:text-slate-400 mb-5 flex-grow text-sm sm:text-base leading-relaxed">
                  Flat battery? Don't let it ruin your day. Our jump-start service is available 24/7. We use
                  professional-grade boosters to ensure your vehicle's electronics stay safe.
                </p>

                <div className="bg-accent/5 p-4 rounded-lg border border-accent/10 mb-5">
                  <p className="text-xs font-bold text-accent uppercase tracking-widest mb-1">Pricing From</p>
                  <p className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">£45.00</p>
                </div>

                <Link
                  href="tel:0745047871"
                  className="w-full py-3 border-2 border-accent text-accent hover:bg-accent hover:text-white font-bold rounded-lg transition-all duration-300 text-center text-sm sm:text-base relative overflow-hidden group/btn"
                >
                  <span className="relative z-10">Call for JumpStart</span>
                  <span className="absolute inset-0 bg-accent translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300"></span>
                </Link>
              </div>

              {/* Fuel Delivery */}
              <div className="bg-white dark:bg-slate-800 p-6 sm:p-8 rounded-2xl shadow-lg border border-slate-100 dark:border-slate-700 flex flex-col hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 group/fuel">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-5 group-hover/fuel:scale-110 group-hover/fuel:rotate-12 transition-all duration-300">
                  <span className="material-symbols-outlined text-2xl sm:text-3xl">local_gas_station</span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold mb-3">Fuel Delivery</h3>

                <p className="text-slate-600 dark:text-slate-400 mb-5 flex-grow text-sm sm:text-base leading-relaxed">
                  Ran out of fuel? We provide emergency delivery of Petrol or Diesel to your exact location. We bring
                  enough to get you to the nearest filling station.
                </p>

                <div className="bg-primary/5 p-4 rounded-lg border border-primary/10 mb-5">
                  <p className="text-xs font-bold text-primary uppercase tracking-widest mb-1">Pricing From</p>
                  <p className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">£40.00 + Fuel Cost</p>
                </div>

                <Link
                  href="tel:0745047871"
                  className="w-full py-3 border-2 border-primary text-primary hover:bg-primary hover:text-white font-bold rounded-lg transition-all duration-300 text-center text-sm sm:text-base relative overflow-hidden group/btn"
                >
                  <span className="relative z-10">Deliver Fuel Now</span>
                  <span className="absolute inset-0 bg-primary translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300"></span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Table */}
        <section className="bg-slate-50 dark:bg-slate-900/50 py-10 sm:py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl font-extrabold mb-3">Service Areas & Base Pricing</h2>
              <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
                Transparent pricing for our mobile call-out services across the region.
              </p>
            </div>

            {/* Responsive table — cards on mobile, table on sm+ */}
            <div className="hidden sm:block overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800 shadow-sm">
              <table className="w-full text-left border-collapse">
                <thead className="bg-slate-100 dark:bg-slate-700/50 text-slate-600 dark:text-slate-300">
                  <tr>
                    <th className="px-5 py-4 font-bold uppercase text-xs">Area / Region</th>
                    <th className="px-5 py-4 font-bold uppercase text-xs">Call-out Fee</th>
                    <th className="px-5 py-4 font-bold uppercase text-xs">Response Time</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-700">
                  {[
                    { area: "City Centre & Inner Suburbs", fee: "£30.00", time: "30-45 Mins", accent: false },
                    { area: "Outer Ring & Suburbs", fee: "£45.00", time: "45-60 Mins", accent: false },
                    { area: "Rural & Surrounding Towns", fee: "£60.00+", time: "60-90 Mins", accent: false },
                    { area: "Motorway Recovery / Assist", fee: "Quote Required", time: "Priority (20-40 Mins)", accent: true },
                  ].map((row, index) => (
                    <tr key={index} className="hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors duration-300">
                      <td className="px-5 py-4 font-medium text-sm">{row.area}</td>
                      <td className={`px-5 py-4 font-bold text-sm ${row.accent ? "text-accent" : "text-primary"}`}>{row.fee}</td>
                      <td className="px-5 py-4 text-slate-600 dark:text-slate-400 text-sm">{row.time}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile card layout */}
            <div className="flex flex-col gap-4 sm:hidden">
              {[
                { area: "City Centre & Inner Suburbs", fee: "£30.00", time: "30-45 Mins", accent: false },
                { area: "Outer Ring & Suburbs", fee: "£45.00", time: "45-60 Mins", accent: false },
                { area: "Rural & Surrounding Towns", fee: "£60.00+", time: "60-90 Mins", accent: false },
                { area: "Motorway Recovery / Assist", fee: "Quote Required", time: "Priority (20-40 Mins)", accent: true },
              ].map((row, index) => (
                <div key={index} className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-4 space-y-2">
                  <p className="font-semibold text-slate-900 dark:text-white text-sm">{row.area}</p>
                  <div className="flex items-center justify-between">
                    <span className={`font-bold text-base ${row.accent ? "text-accent" : "text-primary"}`}>{row.fee}</span>
                    <span className="text-xs text-slate-500 dark:text-slate-400">{row.time}</span>
                  </div>
                </div>
              ))}
            </div>

            <p className="mt-6 text-center text-xs sm:text-sm text-slate-500">
              * Prices shown are for call-out only. Labour and parts (tyres, fuel) are charged additionally.
            </p>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 sm:py-20 px-4">
          <div className="max-w-7xl mx-auto bg-primary rounded-2xl sm:rounded-[2rem] p-6 sm:p-10 md:p-16 relative overflow-hidden text-center text-white">
            <div className="absolute top-0 right-0 w-48 h-48 sm:w-64 sm:h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl animate-pulse"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 sm:w-64 sm:h-64 bg-accent/20 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl animate-pulse delay-700"></div>

            <h2 className="text-2xl sm:text-3xl md:text-5xl font-black mb-4 sm:mb-6 relative z-10">
              Stranded? We're on the way.
            </h2>

            <p className="text-base sm:text-xl opacity-90 mb-8 sm:mb-10 max-w-2xl mx-auto relative z-10">
              Our operators are standing by 24 hours a day, 7 days a week to assist you with any roadside emergency.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
              <Link
                href="tel:0745047871"
                className="flex items-center justify-center gap-2 sm:gap-3 bg-white text-primary px-6 sm:px-10 py-4 sm:py-5 rounded-full text-lg sm:text-2xl font-black shadow-2xl hover:scale-105 transition-all duration-300"
              >
                <span className="material-symbols-outlined text-2xl sm:text-3xl">call</span>
                0745047871
              </Link>

              <Link
                href="/contact"
                className="bg-transparent border-2 border-white/40 hover:border-white text-white px-6 sm:px-10 py-4 sm:py-5 rounded-full text-base sm:text-lg font-bold transition-all duration-300 hover:bg-white/10"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <FloatingButtonsFull />
    </div>
  );
}
