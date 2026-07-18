"use client";
import { useEffect } from "react";
import Link from "next/link";

const projects = [
  { category: "residential", title: "Eco-Villa Solar Upgrade", subtitle: "RESIDENTIAL UPGRADE", size: "12kW System", img: "/optimized/proj-ecovilla.jpg", cols: "md:col-span-8" },
  { category: "commercial", title: "Tech Hub Energy System", subtitle: "COMMERCIAL", desc: "Powering 24/7 operations for over 200 workstations.", img: "/optimized/proj-techhub.jpg", cols: "md:col-span-4" },
  { category: "industrial", title: "Logistics Hub Micro-Grid", subtitle: "INDUSTRIAL", img: "/optimized/proj-logistics.jpg", cols: "md:col-span-6" },
  { category: "offgrid", title: "Safari Lodge Independence", subtitle: "OFF-GRID", img: "/optimized/proj-safari.jpg", cols: "md:col-span-6" },
];

export default function ProjectsPage() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) { entry.target.classList.add("active"); observer.unobserve(entry.target); }
        });
      }, { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );
    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <section className="relative pt-24 pb-[120px] px-4 md:px-16 max-w-[1280px] mx-auto overflow-hidden reveal">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-secondary/5 rounded-full blur-[100px]"></div>
        <div className="flex flex-col md:flex-row items-end justify-between gap-6 mb-12 border-b border-surface-stroke pb-6">
          <div className="max-w-2xl reveal stagger-1">
            <span className="text-secondary font-[family-name:var(--font-family-body)] text-[14px] leading-[20px] tracking-[0.05em] font-semibold tracking-widest block mb-2">PROJECTS PORTFOLIO</span>
            <h1 className="font-[family-name:var(--font-family-headline)] text-3xl md:text-[48px] leading-[56px] tracking-[-0.01em] font-bold text-on-surface mb-2">Powering the <span className="text-secondary">Sustainable</span> Future.</h1>
            <p className="text-text-muted font-[family-name:var(--font-family-body)] text-[18px] leading-[28px] leading-relaxed">A curated showcase of our most ambitious solar installations across residential, commercial, and industrial sectors.</p>
          </div>
          <div className="flex items-center gap-6 pb-2 reveal stagger-2">
            <div className="text-right">
              <div className="font-[family-name:var(--font-family-headline)] text-[32px] leading-[40px] font-semibold text-secondary">500+</div>
              <div className="text-[12px] leading-[16px] uppercase tracking-wider text-text-muted">Installs Completed</div>
            </div>
            <div className="h-12 w-px bg-surface-stroke"></div>
            <div className="text-right">
              <div className="font-[family-name:var(--font-family-headline)] text-[32px] leading-[40px] font-semibold text-secondary">15MW</div>
              <div className="text-[12px] leading-[16px] uppercase tracking-wider text-text-muted">Total Power Generated</div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {projects.map((project, i) => (
            <div key={i} className={`${project.cols} group project-card relative overflow-hidden rounded-xl bg-surface-elevated border border-surface-stroke cursor-pointer reveal ${i > 0 ? `stagger-${(i % 3) + 1}` : ""}`} data-category={project.category}>
              <div className="aspect-[16/9] w-full relative overflow-hidden">
                <img className="w-full h-full object-cover" alt={project.title} src={project.img}  loading="lazy" />
              </div>
              <div className="p-6 flex justify-between items-center bg-surface-elevated/90 backdrop-blur-md absolute bottom-0 left-0 right-0">
                <div>
                  <span className="text-secondary font-[family-name:var(--font-family-body)] text-[12px] leading-[16px] font-semibold mb-1 block">{project.subtitle}</span>
                  <h3 className="font-[family-name:var(--font-family-headline)] text-[32px] leading-[40px] font-semibold text-on-surface">{project.title}</h3>
                </div>
                <div className="flex flex-col items-end">{project.size && <span className="text-on-surface-variant font-[family-name:var(--font-family-body)] text-[16px] leading-[24px] font-semibold">{project.size}</span>}<span className="material-symbols-outlined text-secondary">arrow_outward</span></div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="max-w-[1280px] mx-auto px-4 md:px-16 py-[120px] reveal">
        <div className="group project-card relative overflow-hidden rounded-xl bg-surface-elevated border border-surface-stroke cursor-pointer">
          <div className="flex flex-col md:flex-row h-full">
            <div className="md:w-3/5 h-80 md:h-96 relative overflow-hidden">
              <img className="w-full h-full object-cover" alt="Green Mall" src="/optimized/proj-greenmall.jpg"  loading="lazy" />
            </div>
            <div className="md:w-2/5 p-12 flex flex-col justify-center bg-surface-container-high">
              <span className="text-secondary font-[family-name:var(--font-family-body)] text-[12px] leading-[16px] font-semibold mb-2 block tracking-[0.2em]">CASE STUDY</span>
              <h3 className="font-[family-name:var(--font-family-headline)] text-3xl md:text-[48px] leading-[56px] tracking-[-0.01em] font-bold text-on-surface mb-6 leading-tight">Metropolis Green Mall</h3>
              <p className="text-on-surface-variant mb-6">A flagship project reducing carbon emissions by 40% annually through 1,200 monocrystalline panels and smart grid integration.</p>
              <Link href="/contact" className="flex items-center gap-2 text-secondary font-[family-name:var(--font-family-body)] text-[14px] leading-[20px] tracking-[0.05em] font-semibold hover:gap-4 transition-all">Read Full Case Study <span className="material-symbols-outlined">trending_flat</span></Link>
            </div>
          </div>
        </div>
      </section>
      <section className="py-[120px] bg-surface-container-lowest relative overflow-hidden reveal">
        <div className="max-w-4xl mx-auto text-center px-4 relative z-10">
          <h2 className="font-[family-name:var(--font-family-headline)] text-3xl md:text-[48px] leading-[56px] tracking-[-0.01em] font-bold text-on-surface mb-6">Ready to Power <span className="text-secondary">Your</span> Project?</h2>
          <p className="text-text-muted font-[family-name:var(--font-family-body)] text-[18px] leading-[28px] mb-12 max-w-2xl mx-auto">Whether you&apos;re looking for home solar or an industrial micro-grid, our expert engineers are ready to design a solution tailored to your specific needs.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link href="/contact" className="bg-secondary text-on-secondary px-8 py-4 rounded-xl font-[family-name:var(--font-family-headline)] text-[16px] leading-[24px] font-semibold btn-premium">Start Energy Consultation</Link>
            <Link href="/contact" className="px-8 py-4 border border-surface-stroke rounded-xl font-[family-name:var(--font-family-headline)] text-[16px] leading-[24px] font-semibold text-on-surface hover:bg-surface-elevated transition-colors btn-premium">Download Portfolio PDF</Link>
          </div>
        </div>
      </section>
    </>
  );
}

