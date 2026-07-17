"use client";
import { useEffect } from "react";

export default function InsightsPage() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) { entry.target.classList.add("active"); observer.unobserve(entry.target); }
        });
      }, { threshold: 0.1 }
    );
    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <header className="relative overflow-hidden pt-20 pb-10 px-4 md:px-16 max-w-[1280px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 items-end gap-6">
          <div>
            <span className="font-[family-name:var(--font-family-body)] font-semibold text-[14px] leading-[20px] tracking-[0.05em] text-secondary uppercase tracking-widest mb-4 block">Our Journal</span>
            <h1 className="font-[family-name:var(--font-family-headline)] text-4xl md:text-[72px] leading-[80px] tracking-[-0.02em] font-bold text-on-surface leading-none">Energy Insights</h1>
            <p className="font-[family-name:var(--font-family-body)] text-[18px] leading-[28px] text-text-muted max-w-lg">Staying ahead of the solar curve with expert analysis on the future of renewable energy and sustainable architecture.</p>
          </div>
          <div className="hidden md:flex justify-end pb-4">
            <div className="text-right">
              <p className="text-on-surface-variant font-semibold text-[14px] leading-[20px] tracking-[0.05em]">CURRENT EDITION</p>
              <p className="text-secondary font-[family-name:var(--font-family-headline)] text-[32px] leading-[40px] font-semibold">SUMMER 2024</p>
            </div>
          </div>
        </div>
      </header>
      <div className="bg-surface-elevated border-y border-surface-stroke overflow-hidden py-4 my-10">
        <div className="marquee-content whitespace-nowrap flex">
          <div className="flex items-center space-x-12 px-6">
            <span className="flex items-center font-semibold text-[14px] leading-[20px] tracking-[0.05em] text-on-surface uppercase"><span className="material-symbols-outlined mr-2 text-solar-glow">bolt</span> Latest: California&apos;s new grid standard</span>
            <span className="flex items-center font-semibold text-[14px] leading-[20px] tracking-[0.05em] text-on-surface uppercase"><span className="material-symbols-outlined mr-2 text-solar-glow">eco</span> New Era Solar ranks #1 for efficiency</span>
            <span className="flex items-center font-semibold text-[14px] leading-[20px] tracking-[0.05em] text-on-surface uppercase"><span className="material-symbols-outlined mr-2 text-solar-glow">trending_up</span> Lithium prices hit 2-year low</span>
            <span className="flex items-center font-semibold text-[14px] leading-[20px] tracking-[0.05em] text-on-surface uppercase"><span className="material-symbols-outlined mr-2 text-solar-glow">factory</span> Industrial storage demand up 40%</span>
          </div>
        </div>
      </div>
      <section className="px-4 md:px-16 max-w-[1280px] mx-auto mb-24">
        <div className="group cursor-pointer relative overflow-hidden rounded-xl bg-surface-elevated border border-surface-stroke">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 overflow-hidden">
            <div className="overflow-hidden h-96 lg:h-auto">
              <div className="bg-cover bg-center w-full h-full transition-transform duration-700 group-hover:scale-105" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCP6HdJhbZVL8ubaTdpR7EFFpOLl5tDxck2bXUNqaJqq-old7AAJaPOuLT5rlCmIykAbzXBdZzQtwFlNVa7pmFbh3rYDPZpxVn3VyYYPvq05pO66XhZSVMYZ9nDj5LwYe9X5RQgyoZQOEZl0gMzMJonxc08fUJj601b7iaUTKEcC-ddBWgLCHcz2Ll4iGQLxUpFGCqXUHZmpNb75lJZR-9TswMH3qHAyoGOvb3MdsyjlzKJhAnAmPEhg')" }} />
            </div>
            <div className="p-12 lg:p-20 flex flex-col justify-center">
              <div className="flex items-center space-x-4 mb-6">
                <span className="bg-secondary/10 text-secondary px-3 py-1 rounded-full font-semibold text-[12px] leading-[16px] uppercase tracking-wider">Featured Analysis</span>
                <span className="text-text-muted font-semibold text-[12px] leading-[16px]">12 MIN READ</span>
              </div>
              <h2 className="font-[family-name:var(--font-family-headline)] text-3xl md:text-[48px] leading-[56px] tracking-[-0.01em] font-bold text-on-surface group-hover:text-secondary transition-colors">Navigating the 2025 Net Metering Landscape</h2>
              <p className="font-[family-name:var(--font-family-body)] text-[18px] leading-[28px] text-text-muted my-6">As regulations shift, understanding the financial implications of grid-tied systems becomes critical.</p>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full border border-surface-stroke overflow-hidden bg-gradient-to-br from-secondary/40 to-primary/40 flex items-center justify-center text-white font-bold">EV</div>
                <div><p className="font-semibold text-[14px] leading-[20px] text-on-surface">Dr. Elena Vance</p><p className="text-[12px] leading-[16px] text-text-muted">Chief Energy Strategist</p></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="px-4 md:px-16 max-w-[1280px] mx-auto mb-24">
        <div className="flex items-center justify-between mb-12">
          <h3 className="font-[family-name:var(--font-family-headline)] text-[32px] leading-[40px] font-semibold">Latest Deep Dives</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { category: "Technology", title: "The Future of Lithium Storage", desc: "New solid-state breakthroughs are promising to double energy density by 2026.", date: "June 14, 2024", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDjx6wsRxpfQPMsUt0TTYjfvLaXpW_0Wf8sQq8NJIGVB2rDmKLZL8ew637U4E3zdhPG35nsgm7fJekU3YqabiQZiScMrDToDjLh0hiN26NfmNIgcH1c86rzJJB_WxGA7lNbnBedjqmHwP9BkVVCVDxiUsMweg8NeCmN2_SaXsQYd5tqjxKAdO2SyB8s24FSdmZTo9ozzz1fxEZRB4WYtPsk70wpUTudV3f5tdxmTmvg11Qxvq90WiUWRA" },
            { category: "Commercial", title: "Maximizing ROI on Industrial Solar", desc: "A financial deep dive into tax incentives and peak-shaving strategies.", date: "May 29, 2024", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuB5dwz-KtcSdAyHZU8bR6cbLV_6y4ECaOXANztD0J_H7Um0uQgkYsDp8FKqzEXwHstsQSgk1ab9ciyuj_S7RYywq4pMEEBnTT6SYHrg8pX9icCV8jtNVw8JfYucQDF_Z58Nr_WzGQxgmD84YCGSo33c-fnItOXQdpEDj4cVinPqDLW2QYmEFfvQjRz5sVr5_uLZjDP-fGXl-X9x_T4Hpb9wK4bx5my133fohM-qxjX5K5-6anfXjaZMA" },
            { category: "Guides", title: "Maintenance Tips for Tier-1 Panels", desc: "Preserve your 25-year warranty with simple quarterly checkups.", date: "May 12, 2024", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAMblR3GdhVI1ZPpLa-E_jr4EZnUYFZV3pQScTU2pewdgSZ2Gob1G4YWd6U2L9wskYphbxmIJoCAwBJv4Vq_fO3k27uLfnCSmlcCBw7ZpHRuUjkFzLwx6KeLJp-dDPp9qoDEDrY20T8J64TsHsHRjfcSQxN8rKVuGE8zkkBQp3ND7iCdndLLncXehDM-JnVQRPR6VPHwYNxhNQYYgoTa9NbGQVSEwzfogRuXkdhiCCR9f01J2LzJUOtHA" },
          ].map((article, i) => (
            <article key={i} className="group flex flex-col bg-surface-elevated border border-surface-stroke rounded-xl overflow-hidden cursor-pointer transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-secondary/5">
              <div className="h-64 overflow-hidden">
                <div className="bg-cover bg-center w-full h-full transition-transform duration-700 group-hover:scale-110" style={{ backgroundImage: `url('${article.img}')` }} />
              </div>
              <div className="p-8 flex flex-col flex-1">
                <span className="font-semibold text-[12px] leading-[16px] text-secondary uppercase mb-4">{article.category}</span>
                <h4 className="font-[family-name:var(--font-family-headline)] text-[24px] leading-[32px] text-on-surface mb-4 group-hover:text-secondary transition-colors">{article.title}</h4>
                <p className="text-text-muted text-[16px] leading-[24px] mb-8 flex-1">{article.desc}</p>
                <div className="pt-6 border-t border-surface-stroke flex items-center justify-between">
                  <span className="text-[12px] leading-[16px] text-text-muted italic">{article.date}</span>
                  <span className="material-symbols-outlined text-secondary group-hover:translate-x-1 transition-transform">arrow_forward</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
      <section className="px-4 md:px-16 max-w-[1280px] mx-auto mb-24">
        <div className="relative rounded-2xl overflow-hidden bg-primary-container p-12 md:p-24 text-center">
          <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/10 blur-[120px] -mr-48 -mt-48"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 blur-[120px] -ml-48 -mb-48"></div>
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="font-[family-name:var(--font-family-headline)] text-3xl md:text-[48px] leading-[56px] tracking-[-0.01em] font-bold text-on-surface mb-6">Join the Solar Revolution</h2>
            <p className="font-[family-name:var(--font-family-body)] text-[18px] leading-[28px] text-on-primary-container mb-12">Get exclusive monthly insights, market reports, and technological breakthroughs delivered straight to your inbox.</p>
            <form className="flex flex-col md:flex-row gap-4">
              <input className="flex-1 bg-surface-container-low border border-surface-stroke rounded-lg px-6 py-4 text-on-surface focus:outline-none focus:border-secondary transition-colors" placeholder="Enter your work email" type="email" />
              <button className="bg-secondary text-on-secondary font-semibold text-[14px] leading-[20px] tracking-[0.05em] px-10 py-4 rounded-lg hover:opacity-90 active:scale-95 transition-all shadow-lg shadow-secondary/20" type="submit">Subscribe Now</button>
            </form>
            <p className="mt-6 text-[12px] leading-[16px] text-text-muted">No spam. Only high-voltage insights. Unsubscribe at any time.</p>
          </div>
        </div>
      </section>
    </>
  );
}
