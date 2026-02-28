import Header from "@/components/layout/Header";
import Link from "next/link";
import Footer from "@/components/layout/Footer";
import FloatingButtonsFull from "@/components/ui/FloatingButtonsFull";

export default function AboutPage() {
  return (
    <div className="relative flex min-h-screen flex-col overflow-x-hidden">
      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative h-56 sm:h-72 md:h-[350px] overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center animate-slow-zoom"
            style={{
              backgroundImage:
                "linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url('/about.jfif')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <div className="absolute inset-0 bg-black/30"></div>
          <div className="relative h-full flex flex-col justify-center items-center text-center text-white px-4">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-3 animate-slide-in-left">
              About Us
            </h1>
            <p className="text-base sm:text-lg md:text-xl opacity-90 max-w-2xl animate-slide-in-right">
              Your reliable partner for every mile of the journey.
            </p>
          </div>
        </section>

        {/* About Section */}
        <section className="py-10 sm:py-16 md:py-20 px-4 max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-8 sm:gap-12 lg:gap-16">
            {/* Text Content */}
            <div className="flex-1 space-y-5 animate-fade-in-left">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 dark:text-white">
                Trusted Expertise on Every Road.
              </h2>

              <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm sm:text-base">
                Tyre Express is your trusted partner for emergency roadside assistance.
                We provide fast, reliable tyre changes, jump-starts, and recovery services
                to get you back on the road safely.
              </p>

              <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm sm:text-base">
                Founded with a simple goal—to reduce the stress of vehicle breakdowns—we
                have grown into a leading mobile service provider. Whether you're stuck
                in the city or on a remote highway, our network of professional operators
                is always just a phone call away.
              </p>

              {/* Stats */}
              <div className="flex flex-wrap gap-6 sm:gap-8 mt-6">
                {[
                  { value: "24/7", label: "AVAILABILITY" },
                  { value: "30min", label: "AVG RESPONSE" },
                  { value: "10K+", label: "HAPPY DRIVERS" },
                ].map((stat, i) => (
                  <div key={i} className="group animate-pop-in">
                    <h3 className="text-2xl sm:text-3xl font-black text-accent group-hover:scale-110 transition-transform duration-300">
                      {stat.value}
                    </h3>
                    <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Image */}
            <div className="flex-1 w-full animate-fade-in-right">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-500"></div>
                <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                  <img
                    src="/Mobile-Tire-Repair.webp"
                    alt="Tyre Express mechanic at work"
                    className="w-full h-auto transform transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-10 sm:py-16 md:py-20 px-4 bg-slate-50 dark:bg-slate-900/50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-center mb-8 sm:mb-12">
              Mission & Values
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
              {[
                {
                  icon: "target",
                  color: "primary",
                  title: "Our Mission",
                  body: "To provide the fastest and most professional roadside support, ensuring no driver is ever left stranded for long.",
                },
                {
                  icon: "shield",
                  color: "accent",
                  title: "Safety First",
                  body: "We prioritize the safety of our customers and operators above all else during every service call.",
                },
                {
                  icon: "verified",
                  color: "green-500",
                  title: "Integrity",
                  body: "Transparent pricing and honest assessments are the cornerstones of how we do business.",
                },
              ].map((card, i) => (
                <div
                  key={i}
                  className="relative group bg-white dark:bg-slate-800 p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 overflow-hidden"
                >
                  <div className={`w-12 h-12 sm:w-16 sm:h-16 bg-${card.color}/10 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                    <span className={`material-symbols-outlined text-2xl sm:text-3xl text-${card.color}`}>{card.icon}</span>
                  </div>
                  <h3 className={`text-xl sm:text-2xl font-bold mb-3 group-hover:text-${card.color} transition-colors`}>
                    {card.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm sm:text-base">
                    {card.body}
                  </p>
                  <div className={`absolute bottom-0 left-0 w-0 h-1 bg-${card.color} group-hover:w-full transition-all duration-500`}></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-10 sm:py-16 md:py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="relative overflow-hidden rounded-2xl sm:rounded-[2rem] bg-gradient-to-br from-slate-900 to-slate-800 p-8 sm:p-12 md:p-16 text-center">
              <div className="absolute top-0 right-0 w-48 h-48 sm:w-64 sm:h-64 bg-primary/20 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl animate-pulse"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 sm:w-64 sm:h-64 bg-accent/20 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl animate-pulse delay-1000"></div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white mb-4 sm:mb-6 relative z-10">
                Need immediate help?
              </h2>

              <p className="text-base sm:text-xl text-slate-300 mb-8 sm:mb-10 max-w-2xl mx-auto relative z-10">
                Our mobile team is on standby 24 hours a day, 7 days a week.
              </p>

              <Link
                href="tel:0745047871"
                className="inline-flex items-center gap-2 sm:gap-3 bg-primary hover:bg-primary/90 text-white px-7 sm:px-10 py-4 sm:py-5 rounded-full text-lg sm:text-2xl font-black shadow-2xl hover:scale-105 transition-all duration-300 relative z-10"
              >
                <span className="material-symbols-outlined text-2xl sm:text-3xl">call</span>
                0745047871
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
