import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Link from "next/link";

export default function ServicesPage() {
  return (
    <div className="relative flex min-h-screen flex-col overflow-x-hidden">
      <Header />

      <main className="flex-grow">
        {/* Hero Section with Animations */}
        <div className="relative w-full h-64 md:h-80 overflow-hidden bg-slate-900 group">
          {/* Background image with slow zoom */}
          <div
            className="absolute inset-0 bg-cover bg-center opacity-60 transition-transform duration-10000 group-hover:scale-110"
            style={{
              backgroundImage:
                'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAz_7WWrTAVPW3G3luRSOPtMo1gnQFUm4u_-2A3BoenXplRTk6RMU1KJmh4ZzO7vj2frFik8BE44vNBr3m5yTxTaZsPqJ0MKIQMZ9yHzGNxX1KfiNefzHdKa90ZkjJPvYks2QVgCJYNzboGU_HteiHt3GFI03-nVjaB9FStx1QefHvZx8rYL-9OqBQgLzLWTuEIHMzJ61xZ8FGMj4h7PfKw6nF0DQEFEL0xrHGOLuONun0sFMAK8CgnlBXGzPvU8hn6jIkajVUxFjQd")',
            }}
          ></div>
          
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent"></div>
          
          {/* Animated particles */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white/30 rounded-full animate-ping"></div>
            <div className="absolute top-3/4 right-1/4 w-3 h-3 bg-primary/30 rounded-full animate-ping delay-300"></div>
            <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-accent/30 rounded-full animate-ping delay-700"></div>
          </div>
          
          {/* Text content with slide animations */}
          <div className="relative max-w-7xl mx-auto px-4 h-full flex flex-col justify-center">
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4 animate-slide-in-left">
              Our Services
            </h2>
            <p className="text-lg text-slate-200 max-w-xl leading-relaxed animate-slide-in-right delay-300">
              Fast, reliable, and professional roadside assistance across the region. We come to you, 24 hours a day.
            </p>
          </div>
        </div>

        {/* Services Section */}
        <section className="py-16 px-4 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 gap-12">
            {/* Mobile Tyre Fitting - Fade In Left */}
            <div className="flex flex-col lg:flex-row gap-8 items-center bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-700 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 animate-fade-in-left">
              {/* Image with zoom effect */}
              <div className="w-full lg:w-1/2 aspect-video rounded-xl overflow-hidden shadow-inner group/image">
                <div
                  className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover/image:scale-110"
                  style={{
                    backgroundImage:
                      'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAtTbiPZZEfvVZmY0SPrINkrfM8hf3f8FqkUozYlXjXvUEOtl6ZV_8gYyZdqQI_7JYo0XhUYqzVY2lHmMgxUF2fai_f4niNcHNqcafF5S_jp8-GuGyiHArcaJERQ7rLwCa_vo-5kVswSpDHboGAccDvr0sK6HPUmoX9-JwTD-Z0qdxxTaWhf3av6j7cyabMawMg9IviPuiu04W0YQ8BAyNHsnnUD5IUKZ46hOO_oUWU-9RTbsXOHAuAYjpfBgTxoQRswoh22IXHhLrs")',
                  }}
                ></div>
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover/image:opacity-100 transition-opacity duration-500"></div>
              </div>
              
              {/* Content with staggered animations */}
              <div className="w-full lg:w-1/2 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-bold uppercase tracking-wider animate-pop-in">
                  <span className="material-symbols-outlined text-sm animate-pulse">check_circle</span>
                  Popular Choice
                </div>
                
                <h3 className="text-3xl font-bold text-slate-900 dark:text-white animate-fade-in-up">
                  Mobile Tyre Fitting
                </h3>
                
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed animate-fade-in-up delay-150">
                  Expert tyre fitting and repair wherever you are. Whether you're at home, at work, or stranded on the
                  roadside, our mobile vans are equipped with state-of-the-art machinery to get you back on the move
                  safely.
                </p>
                
                {/* Features list with staggered animations */}
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-slate-700 dark:text-slate-300">
                  {[
                    "Emergency Puncture Repair",
                    "New Tyre Installation",
                    "Wheel Balancing",
                    "TPMS Sensor Service"
                  ].map((item, index) => (
                    <li 
                      key={index}
                      className="flex items-center gap-2 group/item animate-fade-in-right"
                      style={{ animationDelay: `${0.2 + index * 0.1}s` }}
                    >
                      <span className="material-symbols-outlined text-primary text-lg group-hover/item:scale-125 transition-transform duration-300">
                        verified
                      </span>
                      <span className="group-hover/item:text-primary transition-colors">{item}</span>
                    </li>
                  ))}
                </ul>
                
                {/* Button with hover effects */}
                <div className="pt-4 animate-fade-in-up delay-500">
                  <Link
                    href="tel:0745047871"
                    className="inline-flex items-center justify-center gap-2 bg-primary text-white px-8 py-3 rounded-lg font-bold hover:bg-primary/90 transition-all duration-300 hover:scale-105 hover:shadow-xl group/btn relative overflow-hidden"
                  >
                    <span className="material-symbols-outlined group-hover/btn:rotate-12 transition-transform">
                      build
                    </span>
                    Request Fitting
                    <span className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-500"></span>
                  </Link>
                </div>
              </div>
            </div>

            {/* JumpStart and Fuel Delivery Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* JumpStart - Fade In Up */}
              <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-lg border border-slate-100 dark:border-slate-700 flex flex-col hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 animate-fade-in-up group/jump">
                <div className="w-14 h-14 bg-accent/10 text-accent rounded-xl flex items-center justify-center mb-6 group-hover/jump:scale-110 group-hover/jump:rotate-12 transition-all duration-300">
                  <span className="material-symbols-outlined text-3xl animate-bounce-gentle">bolt</span>
                </div>
                
                <h3 className="text-2xl font-bold mb-3 group-hover/jump:text-accent transition-colors">
                  JumpStart Service
                </h3>
                
                <p className="text-slate-600 dark:text-slate-400 mb-6 flex-grow">
                  Flat battery? Don't let it ruin your day. Our jump-start service is available 24/7. We use
                  professional-grade boosters to ensure your vehicle's electronics stay safe while getting your engine
                  running.
                </p>
                
                <div className="bg-accent/5 p-4 rounded-lg border border-accent/10 mb-6 relative overflow-hidden group/price">
                  <div className="absolute inset-0 bg-accent/0 group-hover/price:bg-accent/10 transition-colors duration-300"></div>
                  <p className="text-xs font-bold text-accent uppercase tracking-widest mb-1">Pricing From</p>
                  <p className="text-2xl font-black text-slate-900 dark:text-white group-hover/price:scale-105 transition-transform">
                    £45.00
                  </p>
                </div>
                
                <Link
                  href="tel:0745047871"
                  className="w-full py-3 border-2 border-accent text-accent hover:bg-accent hover:text-white font-bold rounded-lg transition-all duration-300 text-center relative overflow-hidden group/btn"
                >
                  <span className="relative z-10">Call for JumpStart</span>
                  <span className="absolute inset-0 bg-accent translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300"></span>
                </Link>
              </div>

              {/* Fuel Delivery - Fade In Up with delay */}
              <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-lg border border-slate-100 dark:border-slate-700 flex flex-col hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 animate-fade-in-up delay-150 group/fuel">
                <div className="w-14 h-14 bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-6 group-hover/fuel:scale-110 group-hover/fuel:rotate-12 transition-all duration-300">
                  <span className="material-symbols-outlined text-3xl animate-pulse">local_gas_station</span>
                </div>
                
                <h3 className="text-2xl font-bold mb-3 group-hover/fuel:text-primary transition-colors">
                  Fuel Delivery
                </h3>
                
                <p className="text-slate-600 dark:text-slate-400 mb-6 flex-grow">
                  Ran out of fuel? We provide emergency delivery of Petrol or Diesel to your exact location. We bring
                  enough to get you to the nearest filling station, saving you a long walk or a tow truck fee.
                </p>
                
                <div className="bg-primary/5 p-4 rounded-lg border border-primary/10 mb-6 relative overflow-hidden group/price">
                  <div className="absolute inset-0 bg-primary/0 group-hover/price:bg-primary/10 transition-colors duration-300"></div>
                  <p className="text-xs font-bold text-primary uppercase tracking-widest mb-1">Pricing From</p>
                  <p className="text-2xl font-black text-slate-900 dark:text-white group-hover/price:scale-105 transition-transform">
                    £40.00 + Fuel Cost
                  </p>
                </div>
                
                <Link
                  href="tel:0745047871"
                  className="w-full py-3 border-2 border-primary text-primary hover:bg-primary hover:text-white font-bold rounded-lg transition-all duration-300 text-center relative overflow-hidden group/btn"
                >
                  <span className="relative z-10">Deliver Fuel Now</span>
                  <span className="absolute inset-0 bg-primary translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300"></span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Table with Animations */}
        <section className="bg-slate-50 dark:bg-slate-900/50 py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 animate-fade-in">
              <h2 className="text-3xl font-extrabold mb-4 animate-slide-in-left">
                Service Areas & Base Pricing
              </h2>
              <p className="text-slate-600 dark:text-slate-400 animate-slide-in-right delay-150">
                Transparent pricing for our mobile call-out services across the region.
              </p>
            </div>
            
            <div className="overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800 shadow-sm hover:shadow-2xl transition-all duration-500 animate-fade-in-up">
              <table className="w-full text-left border-collapse">
                <thead className="bg-slate-100 dark:bg-slate-700/50 text-slate-600 dark:text-slate-300">
                  <tr>
                    <th className="px-6 py-4 font-bold uppercase text-xs">Area / Region</th>
                    <th className="px-6 py-4 font-bold uppercase text-xs">Call-out Fee</th>
                    <th className="px-6 py-4 font-bold uppercase text-xs">Response Time</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-700">
                  {[
                    { area: "City Centre & Inner Suburbs", fee: "£30.00", time: "30-45 Mins", accent: false },
                    { area: "Outer Ring & Suburbs", fee: "£45.00", time: "45-60 Mins", accent: false },
                    { area: "Rural & Surrounding Towns", fee: "£60.00+", time: "60-90 Mins", accent: false },
                    { area: "Motorway Recovery / Assist", fee: "Quote Required", time: "Priority (20-40 Mins)", accent: true },
                  ].map((row, index) => (
                    <tr 
                      key={index}
                      className="hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors duration-300 animate-fade-in-right"
                      style={{ animationDelay: `${0.1 + index * 0.1}s` }}
                    >
                      <td className="px-6 py-4 font-medium">{row.area}</td>
                      <td className={`px-6 py-4 font-bold ${row.accent ? 'text-accent' : 'text-primary'}`}>
                        {row.fee}
                      </td>
                      <td className="px-6 py-4 text-slate-600 dark:text-slate-400">{row.time}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            <p className="mt-6 text-center text-sm text-slate-500 animate-fade-in-up delay-500">
              * Prices shown are for call-out only. Labour and parts (tyres, fuel) are charged additionally.
            </p>
          </div>
        </section>

        {/* CTA Section with Animations */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto bg-primary rounded-[2rem] p-8 md:p-16 relative overflow-hidden text-center text-white group/cta animate-scale-in">
            {/* Animated background elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl animate-pulse"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/20 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl animate-pulse delay-700"></div>
            
            {/* Floating icons */}
            <div className="absolute top-10 left-10 text-white/20 animate-float">
              <span className="material-symbols-outlined text-4xl">emergency</span>
            </div>
            <div className="absolute bottom-10 right-10 text-white/20 animate-float delay-500">
              <span className="material-symbols-outlined text-4xl">car_repair</span>
            </div>
            
            <h2 className="text-3xl md:text-5xl font-black mb-6 relative z-10 animate-fade-in-up">
              Stranded? We're on the way.
            </h2>
            
            <p className="text-xl opacity-90 mb-10 max-w-2xl mx-auto relative z-10 animate-fade-in-up delay-150">
              Our operators are standing by 24 hours a day, 7 days a week to assist you with any roadside emergency.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
              <Link
                href="tel:0745047871"
                className="flex items-center justify-center gap-3 bg-white text-primary px-10 py-5 rounded-full text-2xl font-black shadow-2xl hover:scale-110 hover:shadow-white/30 transition-all duration-300 group/btn relative overflow-hidden animate-bounce-gentle"
              >
                <span className="material-symbols-outlined text-3xl group-hover/btn:rotate-12 transition-transform animate-ring">
                  call
                </span>
                0745047871
                <span className="absolute inset-0 bg-primary/10 translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-500"></span>
              </Link>
              
              <Link
                href="/contact"
                className="bg-transparent border-2 border-white/40 hover:border-white text-white px-10 py-5 rounded-full text-lg font-bold transition-all duration-300 hover:scale-105 hover:bg-white/10 relative overflow-hidden group/btn"
              >
                Contact Us
                <span className="absolute inset-0 bg-white/20 scale-0 group-hover/btn:scale-150 transition-transform duration-500 opacity-0 group-hover/btn:opacity-100 rounded-full"></span>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}