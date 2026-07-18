"use client";
import { useEffect } from "react";
import Link from "next/link";

const services = [
  {
    num: "01", title: "Residential Solar",
    desc: "Tailored rooftop solar systems designed for maximum energy yield and seamless aesthetic integration with your home architecture.",
    img: "/optimized/svc-1.jpg",
    icon: "home", features: ["24/7 Power Backup", "Energy Bill Savings"],
  },
  {
    num: "02", title: "Commercial Energy",
    desc: "Scalable energy solutions for businesses, manufacturing hubs, and corporate offices to reduce operational costs and carbon footprint.",
    img: "/optimized/svc-2.jpg",
    icon: "factory", features: ["Tax Incentive Support", "Smart Load Management"],
  },
  {
    num: "03", title: "Maintenance & Support",
    desc: "Dedicated after-sales service including panel cleaning, system health monitoring, and expert technical support for all installations.",
    img: "/optimized/svc-3.jpg",
    icon: "build", features: ["Real-time Monitoring", "Annual Safety Checks"],
  },
  {
    num: "04", title: "Energy Audit",
    desc: "A data-driven assessment of your current energy usage to identify inefficiencies and recommend optimized solar configurations.",
    img: "/optimized/svc-4.jpg",
    icon: "query_stats", features: ["Load Optimization", "ROI Projections"],
  },
  {
    num: "05", title: "Solar Water Pumps",
    desc: "Eco-friendly irrigation and water supply solutions for agricultural projects, utilizing high-torque solar pumping technology.",
    img: "/optimized/svc-5.jpg",
    icon: "water_drop", features: ["Zero Fuel Costs", "Low Maintenance"],
  },
  {
    num: "06", title: "Solar CCTV Systems",
    desc: "Uninterrupted security monitoring for remote sites using integrated solar panels and battery storage for high-definition surveillance.",
    img: "/optimized/svc-6.jpg",
    icon: "security", features: ["Remote Access", "Weather Resistant"],
  },
];

export default function ServicesPage() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );
    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <section className="relative min-h-[614px] flex items-center justify-center overflow-hidden pt-12">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-primary-container/40 to-background"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-secondary/5 rounded-full blur-[120px]"></div>
        </div>
        <div className="relative z-10 w-full px-4 md:px-16 max-w-[1280px] mx-auto text-center">
          <div className="flex justify-center mb-6 reveal active">
            <span className="bg-surface-elevated border border-surface-stroke px-4 py-1.5 rounded-full text-secondary font-[family-name:var(--font-family-body)] text-[14px] leading-[20px] tracking-[0.05em] font-semibold flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-solar-glow glow-dot"></span>
              Premium Energy Ecosystems
            </span>
          </div>
          <h1 className="font-[family-name:var(--font-family-headline)] text-3xl md:text-[48px] leading-[56px] tracking-[-0.01em] font-bold mb-6 text-on-surface max-w-3xl mx-auto reveal active">
            Comprehensive <span className="text-secondary">Solar Solutions</span> for Every Need
          </h1>
          <p className="font-[family-name:var(--font-family-body)] text-[18px] leading-[28px] text-text-muted max-w-2xl mx-auto reveal active">
            From high-performance residential installations to industrial-scale energy audits, we provide the technology to power your life efficiently.
          </p>
        </div>
      </section>
      <div className="bg-surface-container-low border-y border-surface-stroke py-8 overflow-hidden">
        <div className="marquee-track flex items-center gap-16 md:gap-32">
          {["Reliability", "Efficiency", "Innovation", "Sustainability", "Excellence"].map((word, i) => (
            <span key={i} className={`font-[family-name:var(--font-family-headline)] text-2xl uppercase tracking-[0.2em] whitespace-nowrap ${i % 2 === 0 ? "text-secondary opacity-50" : "text-on-surface opacity-30"}`}>{word}</span>
          ))}
        </div>
      </div>
      <section className="py-[120px] px-4 md:px-16 max-w-[1280px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {services.map((service, i) => (
            <div key={i} className={`service-card-hover bg-surface-elevated border border-surface-stroke p-8 rounded-xl group reveal ${i > 0 ? `reveal-delay-${(i % 3) + 1}` : ""}`}>
              <div className="flex justify-between items-start mb-10">
                <div className="w-16 h-16 rounded-xl bg-secondary/10 flex items-center justify-center group-hover:bg-secondary/20 transition-colors">
                  <span className="material-symbols-outlined text-secondary text-4xl">{service.icon}</span>
                </div>
                <span className="font-[family-name:var(--font-family-headline)] text-[32px] leading-[40px] font-semibold opacity-10 group-hover:opacity-30 transition-opacity">{service.num}</span>
              </div>
              <h3 className="font-[family-name:var(--font-family-headline)] text-[32px] leading-[40px] font-semibold mb-6">{service.title}</h3>
              <p className="font-[family-name:var(--font-family-body)] text-[16px] leading-[24px] text-text-muted mb-8">{service.desc}</p>
              <div className="w-full h-48 rounded-lg overflow-hidden mb-8 bg-surface-container">
                <img className="w-full h-full object-cover card-img-zoom" alt={service.title} src={service.img}  loading="lazy" />
              </div>
              <ul className="space-y-3 mb-8">
                {service.features.map((feature, j) => (
                  <li key={j} className="flex items-center gap-3 text-on-surface-variant font-[family-name:var(--font-family-body)] text-[14px] leading-[20px] tracking-[0.05em] font-semibold">
                    <span className="material-symbols-outlined text-secondary text-xl">check_circle</span> {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
      <section className="py-[120px] bg-surface-container-lowest border-y border-surface-stroke overflow-hidden relative reveal">
        <div className="absolute right-0 top-0 w-1/2 h-full opacity-10">
          <div className="w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-secondary to-transparent"></div>
        </div>
        <div className="relative z-10 px-4 md:px-16 max-w-[1280px] mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="max-w-xl reveal reveal-delay-1">
            <h2 className="font-[family-name:var(--font-family-headline)] text-3xl md:text-[48px] leading-[56px] tracking-[-0.01em] font-bold mb-6 text-on-surface">Ready to Power Your New Era?</h2>
            <p className="font-[family-name:var(--font-family-body)] text-[18px] leading-[28px] text-text-muted">Consult with our energy experts to find the perfect solar configuration for your unique needs.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-6 w-full md:w-auto reveal reveal-delay-2">
            <Link href="/contact" className="shimmer-btn bg-secondary text-on-secondary font-[family-name:var(--font-family-body)] text-[14px] leading-[20px] tracking-[0.05em] font-semibold px-10 py-5 rounded-xl transition-all hover:scale-105 active:scale-95 shadow-lg shadow-secondary/10">Book a Consultation</Link>
            <Link href="/contact" className="bg-surface-elevated text-on-surface border border-surface-stroke font-[family-name:var(--font-family-body)] text-[14px] leading-[20px] tracking-[0.05em] font-semibold px-10 py-5 rounded-xl transition-all hover:bg-surface-bright active:scale-95">Download Brochure</Link>
          </div>
        </div>
      </section>
    </>
  );
}
