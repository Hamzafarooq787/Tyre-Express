import Header from "@/components/layout/Header";
import Link from "next/link";
import Image from "next/image";
import Footer from "@/components/layout/Footer";

export default function AboutPage() {
  return (
    <div className="relative flex min-h-screen flex-col overflow-x-hidden">
      <Header />

      <main className="flex-grow">
        {/* Hero Section with Animation */}
        <section className="relative h-[350px] overflow-hidden">
          <div className="absolute inset-0 bg-cover bg-center scale-105 animate-slow-zoom" 
            style={{
              backgroundImage: "linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url('https://images.unsplash.com/photo-1581090700227-1e8b6a9c1e91?auto=format&fit=crop&w=1600&q=80')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <div className="absolute inset-0 bg-black/30"></div>
          <div className="relative h-full flex flex-col justify-center items-center text-center text-white px-4 animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-4 animate-slide-in-left">
              About Us
            </h1>
            <p className="text-lg md:text-xl opacity-90 max-w-2xl animate-slide-in-right">
              Your reliable partner for every mile of the journey.
            </p>
          </div>
        </section>

        {/* About Section with Animation */}
        <section className="py-16 md:py-20 px-4 md:px-8 max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            {/* Text Content */}
            <div className="flex-1 space-y-6 animate-fade-in-left">
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white">
                Trusted Expertise on Every Road.
              </h2>
              
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                Tyre Express is your trusted partner for emergency roadside assistance. 
                We provide fast, reliable tyre changes, jump-starts, and recovery services 
                to get you back on the road safely.
              </p>

              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                Founded with a simple goal—to reduce the stress of vehicle breakdowns—we 
                have grown into a leading mobile service provider. Whether you're stuck 
                in the city or on a remote highway, our network of professional operators 
                is always just a phone call away.
              </p>

              {/* Stats with Counters Animation */}
              <div className="flex flex-wrap gap-8 mt-8">
                <div className="stat-item group animate-pop-in" style={{ animationDelay: "0.1s" }}>
                  <h3 className="text-3xl font-black text-accent group-hover:scale-110 transition-transform duration-300">
                    24/7
                  </h3>
                  <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                    AVAILABILITY
                  </span>
                </div>
                
                <div className="stat-item group animate-pop-in" style={{ animationDelay: "0.2s" }}>
                  <h3 className="text-3xl font-black text-accent group-hover:scale-110 transition-transform duration-300">
                    30min
                  </h3>
                  <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                    AVG RESPONSE
                  </span>
                </div>
                
                <div className="stat-item group animate-pop-in" style={{ animationDelay: "0.3s" }}>
                  <h3 className="text-3xl font-black text-accent group-hover:scale-110 transition-transform duration-300">
                    10K+
                  </h3>
                  <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                    HAPPY DRIVERS
                  </span>
                </div>
              </div>
            </div>

            {/* Image with Animation */}
            <div className="flex-1 animate-fade-in-right">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-500"></div>
                <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1606663889134-b1dedb5ed8b7?auto=format&fit=crop&w=800&q=80"
                    alt="Tyre Express mechanic at work"
                    className="w-full h-auto transform transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission Section with Cards Animation */}
        <section className="py-16 md:py-20 px-4 bg-slate-50 dark:bg-slate-900/50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-black text-center mb-12 animate-fade-in">
              Mission & Values
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Card 1 */}
              <div className="group bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  <span className="material-symbols-outlined text-3xl text-primary">target</span>
                </div>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">
                  Our Mission
                </h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  To provide the fastest and most professional roadside support, ensuring 
                  no driver is ever left stranded for long.
                </p>
                <div className="absolute bottom-0 left-0 w-0 h-1 bg-primary group-hover:w-full transition-all duration-500"></div>
              </div>

              {/* Card 2 */}
              <div className="group bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
                <div className="w-16 h-16 bg-accent/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  <span className="material-symbols-outlined text-3xl text-accent">shield</span>
                </div>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-accent transition-colors">
                  Safety First
                </h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  We prioritize the safety of our customers and operators above all else 
                  during every service call.
                </p>
                <div className="absolute bottom-0 left-0 w-0 h-1 bg-accent group-hover:w-full transition-all duration-500"></div>
              </div>

              {/* Card 3 */}
              <div className="group bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
                <div className="w-16 h-16 bg-green-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  <span className="material-symbols-outlined text-3xl text-green-500">verified</span>
                </div>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-green-500 transition-colors">
                  Integrity
                </h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  Transparent pricing and honest assessments are the cornerstones of how 
                  we do business.
                </p>
                <div className="absolute bottom-0 left-0 w-0 h-1 bg-green-500 group-hover:w-full transition-all duration-500"></div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section with Animation */}
        <section className="py-16 md:py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-slate-900 to-slate-800 p-12 md:p-16 text-center group animate-scale-in">
              {/* Animated background elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl animate-pulse"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/20 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl animate-pulse delay-1000"></div>
              
              {/* Floating dots */}
              <div className="absolute top-10 left-10 w-3 h-3 bg-primary/30 rounded-full animate-float"></div>
              <div className="absolute bottom-10 right-10 w-4 h-4 bg-accent/30 rounded-full animate-float delay-500"></div>
              
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-6 relative z-10 animate-fade-in-up">
                Need immediate help?
              </h2>
              
              <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto relative z-10 animate-fade-in-up delay-150">
                Our mobile team is on standby 24 hours a day, 7 days a week.
              </p>
              
              <Link
                href="tel:0745047871"
                className="inline-flex items-center gap-3 bg-primary hover:bg-primary/90 text-white px-10 py-5 rounded-full text-2xl font-black shadow-2xl hover:scale-105 hover:shadow-primary/30 transition-all duration-300 relative z-10 animate-bounce-gentle group/btn"
              >
                <span className="material-symbols-outlined text-3xl animate-ring">call</span>
                0745047871
                <span className="absolute inset-0 rounded-full bg-white/20 scale-0 group-hover/btn:scale-150 transition-transform duration-500 opacity-0 group-hover/btn:opacity-100"></span>
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* Simple Footer (as requested - no footer) */}
      <Footer/>
    </div>
  );
}