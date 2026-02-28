import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import FloatingButtonsFull from "@/components/ui/FloatingButtonsFull";

export default function Home() {
  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
      <Header />

      <main className="flex-1">
        {/* Hero Section - Fully Responsive */}
        <section className="relative overflow-hidden bg-white py-12 sm:py-16 md:py-20 lg:py-24">
          {/* Animated background elements */}
          <div className="absolute top-20 left-10 w-32 h-32 sm:w-40 sm:h-40 md:w-64 md:h-64 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-32 h-32 sm:w-40 sm:h-40 md:w-64 md:h-64 bg-accent/5 rounded-full blur-3xl animate-pulse delay-700"></div>
          
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 gap-8 sm:gap-10 md:gap-12 lg:grid-cols-2 lg:items-center">
              
              {/* Left Content - Responsive Text */}
              <div className="flex flex-col gap-4 sm:gap-6 md:gap-8 animate-fade-in-left">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 sm:px-4 py-1.5 text-xs sm:text-sm font-bold text-primary w-fit animate-pop-in">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75"></span>
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-primary"></span>
                  </span>
                  24/7 Roadside Assistance
                </div>
                
                {/* Heading - Responsive Font Sizes */}
                <div className="flex flex-col gap-2 sm:gap-3 md:gap-4">
                  <h1 className="text-5xl sm:text-6xl md:text-6xl lg:text-7xl xl:text-8xl font-black leading-[1.1] tracking-tight text-slate-900 animate-slide-in-left">
                    Fast & Reliable <br className="hidden xs:block" />
                    <span className="text-primary">Mobile Tyre Fitting</span>
                  </h1>
                  <p className="text-lg sm:text-xl md:text-2xl font-black text-slate-900 animate-slide-in-right delay-150 tracking-tight">
                    24-Hour Emergency Tyre Replacement
                  </p>
                </div>
                
                {/* Buttons - Responsive Stack */}
                <div className="flex flex-col xs:flex-row gap-3 sm:gap-4 pt-2 sm:pt-4">
                  <Link
                    href="tel:+447495047871"
                    className="flex items-center justify-center gap-2 rounded-xl bg-accent px-5 sm:px-6 md:px-8 py-3 sm:py-4 text-base sm:text-lg font-black text-white shadow-xl shadow-accent/30 hover:scale-105 hover:shadow-2xl transition-all duration-300 group relative overflow-hidden animate-fade-in-up delay-300"
                  >
                    <span className="material-symbols-outlined text-xl sm:text-2xl group-hover:rotate-12 transition-transform animate-ring">
                      phone_in_talk
                    </span>
                    <span className="whitespace-nowrap">Call Now: +44 7495 047871</span>
                    <span className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500"></span>
                  </Link>
                  
                  <Link
                    href="/services"
                    className="flex items-center justify-center gap-2 rounded-xl border-2 border-slate-200 bg-white px-5 sm:px-6 md:px-8 py-3 sm:py-4 text-base sm:text-lg font-bold text-slate-900 hover:bg-slate-50 hover:border-primary/30 transition-all duration-300 group animate-fade-in-up delay-500"
                  >
                    <span>Our Services</span>
                    <span className="material-symbols-outlined text-xl group-hover:translate-x-1 transition-transform">
                      arrow_forward
                    </span>
                  </Link>
                </div>
                
                {/* Social Proof - Responsive */}
                <div className="flex items-center gap-4 sm:gap-6 pt-4 sm:pt-6 animate-fade-in-up delay-700">
                  <div className="flex -space-x-3">
                    {[1, 2, 3].map((i) => (
                      <div
                        key={i}
                        className={`h-8 w-8 sm:h-10 sm:w-10 rounded-full border-2 border-white bg-slate-${
                          i === 1 ? "200" : i === 2 ? "300" : "400"
                        } hover:scale-110 hover:z-10 transition-transform duration-300`}
                      ></div>
                    ))}
                  </div>
                  <div className="text-xs sm:text-sm font-medium text-slate-600">
                    <span className="font-bold text-slate-900 text-sm sm:text-base">500+</span> Tyres fitted this month
                  </div>
                </div>
              </div>
              
              {/* Right Image - Responsive */}
              <div className="relative animate-fade-in-right">
                <div className="relative">
                  {/* Main Image */}
                  <div
                    className="aspect-video w-full overflow-hidden rounded-2xl sm:rounded-3xl bg-slate-100 shadow-xl sm:shadow-2xl group/image"
                  >
                    <div
                      className="w-full h-full bg-cover bg-center transition-transform duration-10000 group-hover/image:scale-110"
                      style={{
                        backgroundImage:
                          'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAIMQWN5_MfY0ojHNz0ZYkB-z_3yN8veYM1cLXVJwa5tD0SKtrCvYjj9xhRwEhe0doNwhHq6AIy8wS4Mnv3F_RhYTVzDkR20_cnVxZRxheaHEvceNru-fJrN34y2Wpdfd5U3aFtf88eQVI9yheCGyEInK2lx9VnAErec8Vu47FA3w1ok8Vj_uj0otxIPohOE3aaJJMWcdceFJ1BMGu5WjP1lV4isAzPdgx7hoJ4O77E60_npAKsZHpXXhZhdVuYdJdXZQhi_xcKLucy")',
                      }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-0 group-hover/image:opacity-100 transition-opacity duration-500"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section - Responsive Grid */}
        <section className="bg-background-light py-12 sm:py-16 md:py-20" id="services">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {/* Section Header */}
            <div className="mb-8 sm:mb-10 md:mb-12 flex flex-col items-center text-center animate-fade-in">
              <h2 className="mb-3 sm:mb-4 text-2xl sm:text-3xl md:text-4xl font-black tracking-tight text-slate-900">
                Our Emergency Services
              </h2>
              <p className="max-w-2xl text-sm sm:text-base text-slate-600 px-4">
                We provide a comprehensive range of mobile vehicle services to get you back on the road as quickly as
                possible.
              </p>
            </div>
            
            {/* Service Cards - Responsive Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
              {[
                {
                  title: "Mobile Tyre Fitting",
                  desc: "Punctures, blowouts, or worn treads? We come to your home, work, or roadside to fit brand new tyres.",
                  image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD4YoYQIACEtaoluKJrS5BbCE8K8dKyH76A_OH2ywc_HQLLRdL7a8Fj56eYv29MD5lZwsozbBovS4MWzx048cJX82Xtctx09-io-Fbg8uU4N3tn1PBZPjx9GwbA18Kr-BevHhqQ6E62TMK65nADcChK3Nvt7oTDYKaJuNGOjhiKXY--jOMPq6hF5JVfPLmJnYncx62kGBCXYKjIuUJ3ZX6oEn1pjz-5Ey6ZgLzZlKpbh7Von-fGYZ8d1zNzS2i01AUEqQ1jJ2jWktEZ",
                  icon: "tire_repair",
                  delay: "0.1s"
                },
                {
                  title: "Emergency JumpStart",
                  desc: "Dead battery? Don't get stranded. Our technicians carry heavy-duty jump packs for all vehicle types.",
                  image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDc86pAOOAJU5ertG_C6RdX7MVKgFZpKOhqCs4P31E3oIXyp4yN95AK73Sz6orkCZbadIOxngw_xBka0rn3hyr4Wgv6Fd5qyZ0oSSysYi0lne07ah14vUw9lT5QIUSeSimnjV8cykP5brRzQVyTRimVZmW4Tt7k3qRCUifxJSS7yx7L9wtWRU8scYIxjugmbqTox6Qx4EpLBXje9-WaZnTNNPJL3F1B6wu7exSiSLk7Z-zsQcePYFPhEckrl2NKkXEj0d0TnMhs2jMO",
                  icon: "bolt",
                  delay: "0.2s"
                },
                {
                  title: "Fuel Delivery",
                  desc: "Ran out of gas or diesel? We'll deliver enough fuel to get you to the nearest service station safely.",
                  image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA0brCgmCwWVxHsUzxsU11Az33EFHqJUmLXp_CHafuXQ6TWXXJRHwk8DzptYh6pUOfHK5tCcXnDoCSSyTXPRdDXbjgpzxv0j3bCGaEDqXWT0jtAz0-zoFmlUA0Li4KYcTveONRyzwXYEbvd6gyEN7z7d3DgfUvQpIeqpMz77N_JVeZGRpIKevJNIPhKwWV3N-XlZ-qLFRfK1ISv99B23-jfzUydF9aUDDMkaZYYdZ1ELulgliLeWGUZ5L7OuCx6a-IMfJio3uWcIrJ5",
                  icon: "local_gas_station",
                  delay: "0.3s"
                }
              ].map((service, index) => (
                <div
                  key={index}
                  className="group flex flex-col overflow-hidden rounded-xl sm:rounded-2xl bg-white shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 animate-fade-in-up"
                  style={{ animationDelay: service.delay }}
                >
                  {/* Image Container */}
                  <div className="relative aspect-[4/3] w-full overflow-hidden">
                    <div
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                      style={{
                        backgroundImage: `url("${service.image}")`,
                      }}
                    ></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    {/* Icon Overlay on Mobile */}
                    <div className="absolute top-3 right-3 sm:hidden bg-white/90 p-2 rounded-full">
                      <span className="material-symbols-outlined text-primary">{service.icon}</span>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="flex flex-1 flex-col p-4 sm:p-5 md:p-6">
                    <h3 className="mb-2 text-lg sm:text-xl font-bold text-slate-900 group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="mb-4 sm:mb-6 text-xs sm:text-sm text-slate-600">
                      {service.desc}
                    </p>
                    <Link
                      href="/services"
                      className="mt-auto flex items-center font-bold text-primary group-hover:gap-2 transition-all"
                    >
                      <span>Learn More</span>
                      <span className="material-symbols-outlined ml-1 text-sm group-hover:translate-x-1 transition-transform">
                        arrow_forward
                      </span>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section - Responsive */}
        <section className="bg-white py-12 sm:py-16 md:py-20" id="about">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row gap-8 sm:gap-10 md:gap-12 lg:items-center">
              
              {/* Left Content */}
              <div className="lg:w-1/2 animate-fade-in-left">
                <h2 className="mb-4 sm:mb-6 text-3xl sm:text-4xl font-black tracking-tight text-slate-900">
                  Why Choose Us?
                </h2>
                <p className="mb-6 sm:mb-8 md:mb-10 text-base sm:text-lg text-slate-600">
                  We pride ourselves on speed, reliability, and professional service all across the UK. Here is what
                  sets us apart from traditional garages.
                </p>
                
                {/* Features Grid - Responsive */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 md:gap-6">
                  {[
                    {
                      icon: "schedule",
                      title: "24/7 Availability",
                      desc: "We are available day and night, 365 days a year.",
                      delay: "0.1s"
                    },
                    {
                      icon: "bolt",
                      title: "Rapid Response",
                      desc: "Our team reaches you within 30-60 minutes on average.",
                      delay: "0.2s"
                    },
                    {
                      icon: "engineering",
                      title: "Expert Technicians",
                      desc: "Certified professionals with latest technology.",
                      delay: "0.3s"
                    },
                    {
                      icon: "payments",
                      title: "Fair Pricing",
                      desc: "No hidden fees. Transparent competitive pricing.",
                      delay: "0.4s"
                    }
                  ].map((feature, index) => (
                    <div
                      key={index}
                      className="flex flex-col gap-2 sm:gap-3 rounded-xl sm:rounded-2xl border border-slate-100 bg-slate-50 p-4 sm:p-5 md:p-6 transition-all duration-300 hover:bg-primary/5 hover:scale-105 hover:shadow-lg animate-fade-in-up"
                      style={{ animationDelay: feature.delay }}
                    >
                      <div className="flex h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 items-center justify-center rounded-lg sm:rounded-xl bg-primary text-white group-hover:rotate-12 transition-transform">
                        <span className="material-symbols-outlined text-base sm:text-lg md:text-xl">{feature.icon}</span>
                      </div>
                      <h3 className="text-base sm:text-lg font-bold text-slate-900">{feature.title}</h3>
                      <p className="text-xs sm:text-sm leading-relaxed text-slate-600">{feature.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Right Content - Testimonial */}
              <div className="lg:w-1/2 animate-fade-in-right">
                <div className="relative rounded-2xl sm:rounded-3xl bg-gradient-to-br from-slate-900 to-slate-800 p-6 sm:p-8 md:p-10 text-white shadow-2xl hover:shadow-3xl transition-all duration-500 group">
                  
                  {/* Animated background */}
                  <div className="absolute top-0 right-0 w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
                  <div className="absolute bottom-0 left-0 w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 bg-accent/20 rounded-full blur-3xl animate-pulse delay-700"></div>
                  
                  {/* Quote Icon */}
                  <div className="relative z-10">
                    <span className="material-symbols-outlined text-3xl sm:text-4xl md:text-5xl text-primary/50 group-hover:scale-110 transition-transform">
                      format_quote
                    </span>
                  </div>
                  
                  {/* Testimonial Text */}
                  <p className="relative z-10 text-base sm:text-lg md:text-xl font-medium italic leading-relaxed mt-2 sm:mt-4">
                    "Stuck on the M25 with a shredded tyre late on a Sunday. Tyre Express arrived in 40 minutes and
                    had me back on the road in 15. Absolute lifesavers!"
                  </p>
                  
                  {/* Author + Rating */}
                  <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 border-t border-slate-700 pt-4 sm:pt-5 md:pt-6 mt-4 sm:mt-5 md:mt-6">
                    <div className="flex items-center gap-3 sm:gap-4">
                      <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-gradient-to-br from-primary to-accent p-[2px] shrink-0">
                        <div className="h-full w-full rounded-full bg-slate-800"></div>
                      </div>
                      <div>
                        <p className="font-bold text-sm sm:text-base">David Thompson</p>
                        <p className="text-xs sm:text-sm text-slate-400">Regular Customer</p>
                      </div>
                    </div>
                    {/* Rating */}
                    <div className="flex gap-0.5">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <span key={star} className="material-symbols-outlined text-accent text-lg sm:text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                          star
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section - Responsive */}
        <section className="bg-primary py-12 sm:py-16 md:py-20" id="contact">
          <div className="mx-auto max-w-7xl px-4 text-center md:px-8">
            <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl bg-gradient-to-r from-primary to-primary/80 p-6 sm:p-8 md:p-10 lg:p-12 animate-scale-in">
              
              {/* Animated Background Elements */}
              <div className="absolute top-0 right-0 w-32 h-32 sm:w-40 sm:h-40 md:w-64 md:h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl animate-pulse"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 sm:w-40 sm:h-40 md:w-64 md:h-64 bg-accent/20 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl animate-pulse delay-700"></div>
              
              {/* Floating Icons */}
              <div className="absolute top-5 left-5 sm:top-10 sm:left-10 text-white/20 animate-float">
                <span className="material-symbols-outlined text-2xl sm:text-3xl md:text-4xl">emergency</span>
              </div>
              <div className="absolute bottom-5 right-5 sm:bottom-10 sm:right-10 text-white/20 animate-float delay-500">
                <span className="material-symbols-outlined text-2xl sm:text-3xl md:text-4xl">car_repair</span>
              </div>
              
              {/* Content */}
              <h2 className="relative z-10 mb-3 sm:mb-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white animate-fade-in-up">
                Need Urgent Assistance?
              </h2>
              
              <p className="relative z-10 mb-6 sm:mb-8 md:mb-10 text-base sm:text-lg md:text-xl text-white/80 max-w-2xl mx-auto animate-fade-in-up delay-150">
                Speak to our dispatch team right now for immediate response.
              </p>
              
              <Link
                href="tel:+447495047871"
                className="relative z-10 inline-flex items-center justify-center gap-2 sm:gap-3 md:gap-4 rounded-full bg-white px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 text-lg sm:text-xl md:text-2xl font-black text-primary shadow-2xl hover:scale-105 hover:shadow-white/30 transition-all duration-300 group overflow-hidden animate-bounce-gentle"
              >
                <span className="material-symbols-outlined text-xl sm:text-2xl md:text-3xl group-hover:rotate-12 transition-transform animate-ring">
                  call
                </span>
                <span className="whitespace-nowrap">+44 7495 047871</span>
                <span className="absolute inset-0 bg-primary/10 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500"></span>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <FloatingButtonsFull/>
    </div>
  );
}
