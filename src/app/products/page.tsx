"use client";
import { useEffect } from "react";

const products = [
  {
    name: "Solar Panels",
    icon: "solar_power",
    desc: "High-efficiency monocrystalline and polycrystalline solar panels with 25-year performance warranty.",
  },
  {
    name: "Solar Inverters",
    icon: "settings_power",
    desc: "Pure sine wave inverters for clean, reliable power conversion from DC to AC.",
  },
  {
    name: "Solar Batteries",
    icon: "battery_charging_full",
    desc: "Lithium-ion and deep-cycle battery storage for 24/7 energy availability.",
  },
  {
    name: "Solar Generators",
    icon: "generating_tokens",
    desc: "Portable and standby solar generators for backup power during outages.",
  },
  {
    name: "Solar Fans",
    icon: "air",
    desc: "Energy-efficient ceiling and standing fans powered directly by solar panels.",
  },
  {
    name: "Solar Refrigerators",
    icon: "kitchen",
    desc: "Medical-grade and domestic solar refrigerators for off-grid cooling.",
  },
  {
    name: "Solar Street Lights",
    icon: "light",
    desc: "Automatic dusk-to-dawn LED street lighting with motion sensors.",
  },
  {
    name: "Solar Water Pumps",
    icon: "water_drop",
    desc: "High-torque submersible and surface pumps for agricultural water supply.",
  },
  {
    name: "Solar CCTV Systems",
    icon: "videocam",
    desc: "Wireless, solar-powered surveillance cameras with night vision.",
  },
  {
    name: "Security Lights",
    icon: "flash_on",
    desc: "Motion-activated solar floodlights for perimeter security.",
  },
  {
    name: "Accessories",
    icon: "cable",
    desc: "Mounting racks, cables, connectors, charge controllers, and monitoring systems.",
  },
];

export default function ProductsPage() {
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
      { threshold: 0.1 }
    );
    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-primary-container/30 to-background"></div>
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-[100px]"></div>
        </div>
        <div className="relative z-10 text-center px-4 md:px-16 max-w-[1280px] mx-auto">
          <span className="text-secondary font-[family-name:var(--font-family-body)] text-[14px] leading-[20px] tracking-[0.05em] font-semibold uppercase tracking-widest mb-4 block">
            Our Catalog
          </span>
          <h1 className="font-[family-name:var(--font-family-headline)] text-4xl md:text-[72px] leading-[80px] tracking-[-0.02em] font-bold text-on-surface mb-6">
            Premium Solar <span className="text-secondary">Products</span>
          </h1>
          <p className="text-text-muted font-[family-name:var(--font-family-body)] text-[18px] leading-[28px] max-w-2xl mx-auto">
            Industry-leading solar equipment and accessories sourced from top
            global manufacturers, backed by comprehensive warranties.
          </p>
        </div>
      </section>

      <section className="py-[120px] px-4 md:px-16 max-w-[1280px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, i) => (
            <div
              key={i}
              className={`bg-surface-elevated border border-surface-stroke p-8 rounded-xl magnetic-card reveal ${
                i > 0 ? `reveal-delay-${(i % 3) + 1}` : ""
              }`}
            >
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-secondary text-3xl">
                  {product.icon}
                </span>
              </div>
              <h3 className="font-[family-name:var(--font-family-headline)] text-[24px] leading-[32px] font-semibold mb-4">
                {product.name}
              </h3>
              <p className="text-on-surface-variant font-[family-name:var(--font-family-body)] text-[16px] leading-[24px] mb-6">
                {product.desc}
              </p>
              <button className="text-secondary font-[family-name:var(--font-family-body)] text-[14px] leading-[20px] tracking-[0.05em] font-semibold flex items-center gap-2 hover:gap-4 transition-all">
                Request Quote{" "}
                <span className="material-symbols-outlined text-[18px]">
                  arrow_forward
                </span>
              </button>
            </div>
          ))}
        </div>
      </section>

      <section className="py-[120px] bg-surface-container-lowest relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center px-4 relative z-10">
          <h2 className="font-[family-name:var(--font-family-headline)] text-3xl md:text-[48px] leading-[56px] tracking-[-0.01em] font-bold text-on-surface mb-6">
            Need Help Choosing?
          </h2>
          <p className="text-text-muted font-[family-name:var(--font-family-body)] text-[18px] leading-[28px] mb-12 max-w-2xl mx-auto">
            Our product specialists can help you select the right equipment for
            your specific energy needs and budget.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <button className="bg-secondary text-on-secondary px-10 py-5 rounded-xl font-[family-name:var(--font-family-body)] text-[14px] leading-[20px] tracking-[0.05em] font-semibold hover:scale-105 transition-all shimmer-btn">
              Speak to a Specialist
            </button>
            <button className="border border-surface-stroke text-on-surface px-10 py-5 rounded-xl font-[family-name:var(--font-family-body)] text-[14px] leading-[20px] tracking-[0.05em] font-semibold hover:bg-surface-elevated transition-all">
              View Full Catalog
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
