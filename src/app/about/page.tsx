"use client";

import { useEffect } from "react";

export default function AboutPage() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target.classList.contains("reveal-group")) {
              const reveals = entry.target.querySelectorAll(".reveal");
              reveals.forEach((el, index) => {
                setTimeout(() => {
                  el.classList.add("active");
                }, index * 100);
              });
            } else {
              entry.target.classList.add("active");
            }
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -50px 0px" }
    );

    document.querySelectorAll(".reveal, .reveal-group").forEach((el) => {
      observer.observe(el);
    });

    window.addEventListener("load", () => {
      document.querySelectorAll("header .reveal").forEach((el, i) => {
        setTimeout(() => el.classList.add("active"), i * 150);
      });
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <header className="relative min-h-[716px] flex items-center overflow-hidden border-b border-surface-stroke">
        <div className="absolute inset-0 z-0">
          <div
            className="w-full h-full bg-cover bg-center opacity-40 scale-105"
            style={{
              backgroundImage:
                "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAdS5MDF4hBwj4HPi5SP7BXEtrBv9ur40AeE4ed4DN3_DjyQCEas1S_NMyH8OW8eXZO8n8Tkdq2DbEtV7Hiin9RxYU729DsdFAPckrcD_MUSYWC9fMpnfiSYUwJ09wgdC8Ek9A80DPKHuMqSYiMqpX-21job4bB20y68VwH-xZgBuAfdt49TavfSJ6lVRcZ6_8VKqvH7SgOM0BZE5xbDP0pYo7IN60pKL7iGs1O9l8V7HNGhoEdFaXKfA')",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background"></div>
        </div>
        <div className="relative z-10 w-full px-4 md:px-16 max-w-[1280px] mx-auto">
          <div className="max-w-3xl">
            <h1 className="font-[family-name:var(--font-family-headline)] text-4xl md:text-[72px] leading-[80px] tracking-[-0.02em] font-bold mb-6 leading-tight reveal">
              Powering the <span className="text-solar-glow">New Era</span> of Energy
            </h1>
            <p className="font-[family-name:var(--font-family-body)] text-[18px] leading-[28px] text-on-surface-variant mb-12 reveal reveal-delay-1">
              We are more than a solar provider. We are architects of a sustainable future, delivering reliable power solutions that redefine how the world consumes energy.
            </p>
            <div className="flex gap-6 reveal reveal-delay-2">
              <button className="bg-secondary text-on-secondary px-8 py-4 rounded-lg font-[family-name:var(--font-family-body)] text-[14px] leading-[20px] tracking-[0.05em] font-semibold shimmer hover:scale-105 transition-transform active:scale-95">
                EXPLORE OUR STORY
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="bg-surface-container py-6 border-y border-surface-stroke overflow-hidden">
        <div className="marquee-track inline-flex items-center gap-12 font-[family-name:var(--font-family-headline)] text-on-surface/30 uppercase tracking-[0.2em] select-none">
          <span>Clean Energy</span><span className="text-solar-glow/20">●</span>
          <span>Sustainable Future</span><span className="text-solar-glow/20">●</span>
          <span>Modern Innovation</span><span className="text-solar-glow/20">●</span>
          <span>Reliable Power</span><span className="text-solar-glow/20">●</span>
          <span>Bespoke Design</span><span className="text-solar-glow/20">●</span>
          <span>Clean Energy</span><span className="text-solar-glow/20">●</span>
          <span>Sustainable Future</span><span className="text-solar-glow/20">●</span>
          <span>Modern Innovation</span><span className="text-solar-glow/20">●</span>
          <span>Reliable Power</span><span className="text-solar-glow/20">●</span>
          <span>Bespoke Design</span><span className="text-solar-glow/20">●</span>
        </div>
      </div>

      <section className="py-[120px] px-4 md:px-16 max-w-[1280px] mx-auto reveal-group">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          <div className="reveal">
            <span className="text-solar-glow font-[family-name:var(--font-family-body)] text-[14px] leading-[20px] tracking-[0.05em] font-semibold uppercase tracking-widest mb-2 block">Our Heritage</span>
            <h2 className="font-[family-name:var(--font-family-headline)] text-3xl md:text-[48px] leading-[56px] tracking-[-0.01em] font-bold mb-6">A Legacy Built on Light</h2>
            <div className="space-y-6 text-on-surface-variant font-[family-name:var(--font-family-body)] text-[18px] leading-[28px]">
              <p>Founded with a vision to bridge the gap between energy scarcity and technological advancement, New Era Solar World has emerged as a leader in premium solar integration.</p>
              <p>Today, we leverage cutting-edge photovoltaic technology and high-performance engineering to create systems that stand the test of time.</p>
            </div>
          </div>
          <div className="reveal reveal-delay-1 zoom-container relative aspect-square md:aspect-auto md:h-[600px] rounded-xl overflow-hidden border border-surface-stroke bg-surface-elevated">
            <img className="w-full h-full object-cover" alt="Solar engineer inspecting system" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBazz8cRXo9_a1BSiXTAyZbEs_foq2WK74dmGXhFnTszSy7mzlPx7ix4Ki4VKhcDShBV6n5nAtctSea-MiBrsFqHT6Z4V6ea_DA_ggatIcbxLHY6wRfd_OMz4Hf36TgtadKjUmO6T5XID0HKSFGSCMDEiIO58LJCIm6Pc8dkHMuebnbsBkYqRH_TnIYNwCAr7YboTDLwKOcUI8M0GH--dfmPsqpmn6moNsaMTEENkQEvBAsFKBOaQmrJQ"  loading="lazy" />
          </div>
        </div>
      </section>

      <section className="py-[120px] bg-surface-container-lowest reveal-group">
        <div className="px-4 md:px-16 max-w-[1280px] mx-auto">
          <div className="text-center mb-12 reveal">
            <h2 className="font-[family-name:var(--font-family-headline)] text-3xl md:text-[48px] leading-[56px] tracking-[-0.01em] font-bold mb-2">Core Principles</h2>
            <p className="text-on-surface-variant max-w-2xl mx-auto font-[family-name:var(--font-family-body)] text-[16px] leading-[24px]">The driving forces behind every watt we generate and every connection we make.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2 p-12 rounded-xl bg-surface-elevated border border-surface-stroke flex flex-col justify-between magnetic-card reveal">
              <div>
                <div className="w-12 h-12 rounded-full bg-solar-glow/10 flex items-center justify-center text-solar-glow mb-6"><span className="material-symbols-outlined">bolt</span></div>
                <h3 className="font-[family-name:var(--font-family-headline)] text-[32px] leading-[40px] font-semibold mb-2">The Mission</h3>
                <p className="text-on-surface-variant font-[family-name:var(--font-family-body)] text-[18px] leading-[28px]">To accelerate the global transition to sustainable energy through uncompromising quality, innovative engineering, and a customer-first approach.</p>
              </div>
            </div>
            <div className="p-12 rounded-xl bg-surface-elevated border border-surface-stroke magnetic-card reveal reveal-delay-1">
              <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center text-secondary mb-6"><span className="material-symbols-outlined">verified_user</span></div>
              <h3 className="font-[family-name:var(--font-family-headline)] text-[32px] leading-[40px] font-semibold mb-2">Reliability</h3>
              <p className="text-on-surface-variant font-[family-name:var(--font-family-body)] text-[16px] leading-[24px]">We build systems that work when it matters most, day or night, rain or shine.</p>
            </div>
            <div className="p-12 rounded-xl bg-surface-elevated border border-surface-stroke magnetic-card reveal reveal-delay-1">
              <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center text-secondary mb-6"><span className="material-symbols-outlined">precision_manufacturing</span></div>
              <h3 className="font-[family-name:var(--font-family-headline)] text-[32px] leading-[40px] font-semibold mb-2">Innovation</h3>
              <p className="text-on-surface-variant font-[family-name:var(--font-family-body)] text-[16px] leading-[24px]">Staying ahead of the curve with the latest battery tech and smart energy management.</p>
            </div>
            <div className="md:col-span-2 p-12 rounded-xl bg-surface-elevated border border-surface-stroke flex flex-col md:flex-row gap-6 items-center magnetic-card reveal reveal-delay-2">
              <div className="flex-1">
                <div className="w-12 h-12 rounded-full bg-solar-glow/10 flex items-center justify-center text-solar-glow mb-6"><span className="material-symbols-outlined">eco</span></div>
                <h3 className="font-[family-name:var(--font-family-headline)] text-[32px] leading-[40px] font-semibold mb-2">Sustainability</h3>
                <p className="text-on-surface-variant font-[family-name:var(--font-family-body)] text-[16px] leading-[24px]">Every installation is a step toward a greener planet, reducing carbon footprints without sacrificing luxury or comfort.</p>
              </div>
              <div className="flex-1 w-full h-48 rounded-lg overflow-hidden zoom-container">
                <img className="w-full h-full object-cover" alt="Green leaf close up" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBwUESPHXxhLCI_2vfF3Pv3_ORPTSIe6KnIrpZE1ri7r-nCaF2m39hG1xk6a2Z8of4mdDYZ8PYoDfz13o5hWD1A_fJVPlY3WMMbTKAex-o8DiGoD7p7Nw9GSScRK8btTfQ4VmTe6Q4UziJp7BUsrhVU1dBwI37j7lrz0nsXdcn1Aqp0QcFtT0TYepdggWul4O1FvZRhzWL7m-I1_h3qe9RfQWW-ApR34_0otAAtaTg6BjRK0HPk6Dikwg"  loading="lazy" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-[120px] px-4 md:px-16 max-w-[1280px] mx-auto reveal-group">
        <div className="mb-12 reveal">
          <h2 className="font-[family-name:var(--font-family-headline)] text-3xl md:text-[48px] leading-[56px] tracking-[-0.01em] font-bold mb-2">The Specialists</h2>
          <p className="text-on-surface-variant font-[family-name:var(--font-family-body)] text-[18px] leading-[28px]">A multidisciplinary team of engineers, designers, and solar strategists.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { name: "Oluwaseun Adewale", title: "Chief Systems Engineer", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDcUF7M1NxAyUd8ItVTnhAgKedCIhMUGKbvIbWQn3EUTL5MdYJwq6BcXyFaIU6d92CLSs9sALiXo_CmpTbbrJy1PmXIUdEQ021sTHexZYVxmRKdtBK4k4GAeijCS-iujH7zeaw7tgrsmcrXfRmKdmdWUy8wJQCwwSvEvRgBZQUiza5qbCdjP9Hw_72HUk_nP7klMrmTDkEdxn59OldwQ35wffN91tB1phUttV07V5gsFin-msWCj4QHMQ" },
            { name: "Amara Nwosu", title: "Lead Design Strategist", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDQ42T6SQpeGZSPh8aeM0B0uMoLt_qB-lHVA09lAhZzIIWTS4O8_wx8gHevM67XBNAuutwFdNuWqOj8C6FGyr-YqmeZ4KYNhUruiQqlD8TYJFrWgv0zMi1wUNfnJjNg7XdxC_Dr9Jx_7yGnF0C0heZP9PSiy2Lr9kVfK9JUQ8s9-s_RoXM2hBrm9dTKizs84lQriR58WTwPS458rA3CsfVKJVvcuVF2SuS6ElOunvN0eAkpvzMxhtNrdQ" },
            { name: "Kenechukwu Obi", title: "Installation Lead", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCZEBlJ53Ls6UDhiuxlgK6vtQ5T4pAI_YkftC4beXZdXOadEjZtReBPtc12o3P7Amiwr0FTuyqxTJ0IyG3o1lRpnK2KYfTzJy50am5L1B8N2-h_4A8G-liaIJIEhLVwKFeYejPJ7MRKQ2w_CceC-Kd2tXq8usR1U_DY5xxckq3gxf3u97tWDT_l9JZ7-j6O6mxeMN6XLxXGS1wkl4dwotHkZ7MSdzmiU4YFA0jwVHmBS0STow3WiPF8BQ" },
            { name: "Zainab Bello", title: "Client Solutions Director", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAbU6LRyWdvWn8MFyoqpflp_TtLbZ7cSLk9iPWrD_eLxrgVjW7bYd9IdtsC0raNTKSYFSvLurpitj3WmfDLI0wAvFDZs1n94mzb_g6ZxTl2cVf9_u1-0vyvR3mbuTBYboU2wc7_-lzric0sDSFZznySuuVPjvJBsXiez9U_C2MqZKCCzXZ4hhc1xuP7cdzopV9z-pB-6XGMchyM6uFlkNYgtVkO2qlYqnZOPoVrx3kg9a8hwRhaDrur6Q" },
          ].map((member, i) => (
            <div key={i} className={`group reveal magnetic-card ${i > 0 ? `reveal-delay-${i}` : ""}`}>
              <div className="aspect-[3/4] rounded-lg overflow-hidden bg-surface-elevated mb-2 relative border border-surface-stroke zoom-container">
                <img className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" alt={member.name} src={member.img}  loading="lazy" />
              </div>
              <h4 className="font-[family-name:var(--font-family-headline)] text-[18px] leading-[28px] font-semibold text-on-surface">{member.name}</h4>
              <p className="text-solar-glow font-[family-name:var(--font-family-body)] text-[12px] leading-[16px] font-semibold uppercase tracking-wider">{member.title}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-[120px] px-4 md:px-16 reveal-group">
        <div className="max-w-[1280px] mx-auto bg-primary-container rounded-2xl p-12 relative overflow-hidden border border-surface-stroke reveal">
          <div className="absolute right-0 top-0 w-1/3 h-full opacity-10 pointer-events-none">
            <span className="material-symbols-outlined text-[300px] text-solar-glow translate-x-1/2 -translate-y-1/4">wb_sunny</span>
          </div>
          <div className="relative z-10 max-w-2xl">
            <h2 className="font-[family-name:var(--font-family-headline)] text-3xl md:text-[48px] leading-[56px] tracking-[-0.01em] font-bold mb-6 text-on-surface reveal">Ready for your new era?</h2>
            <p className="text-on-primary-container font-[family-name:var(--font-family-body)] text-[18px] leading-[28px] mb-12 reveal reveal-delay-1">Connect with our specialists today for a comprehensive energy audit and custom solar design proposal.</p>
            <div className="flex flex-wrap gap-6 reveal reveal-delay-2">
              <button className="bg-solar-glow text-on-surface font-[family-name:var(--font-family-body)] text-[14px] leading-[20px] tracking-[0.05em] font-semibold px-8 py-4 rounded-lg hover:scale-105 transition-transform active:scale-95">SCHEDULE CONSULTATION</button>
              <button className="border border-outline text-on-surface font-[family-name:var(--font-family-body)] text-[14px] leading-[20px] tracking-[0.05em] font-semibold px-8 py-4 rounded-lg hover:bg-surface-variant/20 transition-colors">VIEW PROJECTS</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
