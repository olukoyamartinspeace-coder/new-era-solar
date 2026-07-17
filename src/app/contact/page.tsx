"use client";
import { useEffect } from "react";
import { useForm } from "react-hook-form";

type QuoteForm = {
  fullName: string;
  email: string;
  serviceType: string;
  message: string;
};

export default function ContactPage() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm<QuoteForm>({
    defaultValues: {
      fullName: "",
      email: "",
      serviceType: "Residential Solar Installation",
      message: "",
    },
  });

  const onSubmit = (data: QuoteForm) => {
    console.log("Quote request:", data);
    reset();
  };

  useEffect(() => {
    document.querySelectorAll("input, select, textarea").forEach((input) => {
      input.addEventListener("focus", () => {
        input.parentElement?.querySelector("label")?.classList.replace("text-on-surface-variant", "text-solar-glow");
      });
      input.addEventListener("blur", () => {
        input.parentElement?.querySelector("label")?.classList.replace("text-solar-glow", "text-on-surface-variant");
      });
    });
  }, []);

  const toggleAccordion = (button: HTMLButtonElement) => {
    const item = button.parentElement;
    const isActive = item?.classList.contains("active");
    document.querySelectorAll(".accordion-item").forEach((el) => el.classList.remove("active"));
    if (!isActive) item?.classList.add("active");
  };

  return (
    <>
      <section className="relative min-h-[60vh] flex flex-col justify-center items-center text-center px-4 md:px-16 py-[120px] overflow-hidden">
        <div className="relative z-10 max-w-4xl mx-auto">
          <span className="text-secondary font-[family-name:var(--font-family-body)] text-[14px] leading-[20px] tracking-[0.05em] font-semibold uppercase tracking-widest mb-4 block">Reach Out</span>
          <h1 className="font-[family-name:var(--font-family-headline)] text-3xl md:text-[72px] leading-[80px] tracking-[-0.02em] font-bold text-on-surface leading-tight mb-6">Let&apos;s Power Your <span className="text-solar-glow">New Era</span></h1>
          <p className="text-text-muted font-[family-name:var(--font-family-body)] text-[18px] leading-[28px] max-w-2xl mx-auto">Transforming the way Nigeria harnesses energy. Our experts are ready to design your customized solar ecosystem.</p>
        </div>
      </section>
      <section className="max-w-[1280px] mx-auto px-4 md:px-16 pb-[120px]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-surface-elevated border border-surface-stroke p-12 rounded-xl transition-all">
            <div className="w-12 h-12 bg-secondary/10 flex items-center justify-center rounded-full mb-6"><span className="material-symbols-outlined text-secondary">call</span></div>
            <h3 className="font-[family-name:var(--font-family-headline)] text-[32px] leading-[40px] font-semibold mb-4 text-on-surface">Call Us</h3>
            <p className="text-on-surface-variant font-[family-name:var(--font-family-body)] text-[16px] leading-[24px] mb-2">0707 514 3322</p>
            <p className="text-on-surface-variant font-[family-name:var(--font-family-body)] text-[16px] leading-[24px]">0810 072 0275</p>
          </div>
          <div className="bg-surface-elevated border border-surface-stroke p-12 rounded-xl transition-all">
            <div className="w-12 h-12 bg-secondary/10 flex items-center justify-center rounded-full mb-6"><span className="material-symbols-outlined text-secondary">mail</span></div>
            <h3 className="font-[family-name:var(--font-family-headline)] text-[32px] leading-[40px] font-semibold mb-4 text-on-surface">Email Us</h3>
            <p className="text-on-surface-variant font-[family-name:var(--font-family-body)] text-[16px] leading-[24px]">newerasolarworld@gmail.com</p>
            <p className="text-text-muted text-[12px] leading-[16px] mt-2">Expect a response within 24 hours.</p>
          </div>
          <div className="bg-surface-elevated border border-surface-stroke p-12 rounded-xl transition-all">
            <div className="w-12 h-12 bg-secondary/10 flex items-center justify-center rounded-full mb-6"><span className="material-symbols-outlined text-secondary">location_on</span></div>
            <h3 className="font-[family-name:var(--font-family-headline)] text-[32px] leading-[40px] font-semibold mb-4 text-on-surface">Visit Us</h3>
            <p className="text-on-surface-variant font-[family-name:var(--font-family-body)] text-[16px] leading-[24px] leading-relaxed">Ibadan, Oyo State,<br />Nigeria</p>
          </div>
        </div>
      </section>
      <section className="bg-surface-container-low py-[120px] border-y border-surface-stroke">
        <div className="max-w-[1280px] mx-auto px-4 md:px-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="bg-surface-elevated p-12 md:p-10 rounded-xl border border-surface-stroke">
            <h2 className="font-[family-name:var(--font-family-headline)] text-3xl md:text-[48px] leading-[56px] tracking-[-0.01em] font-bold mb-6 text-on-surface">Get a Quote</h2>
            {isSubmitSuccessful && (
              <div className="mb-6 bg-secondary/10 border border-secondary/40 text-secondary px-4 py-3 rounded-lg text-[14px]">
                Thank you! Your request has been received. We&apos;ll respond within 24 hours.
              </div>
            )}
            <form className="space-y-6" onSubmit={handleSubmit(onSubmit)} noValidate>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="font-[family-name:var(--font-family-body)] text-[14px] leading-[20px] tracking-[0.05em] font-semibold text-on-surface-variant">Full Name</label>
                  <input
                    className={`w-full bg-background border rounded-lg px-4 py-3 text-on-surface focus:ring-1 transition-all outline-none ${errors.fullName ? "border-error" : "border-surface-stroke focus:border-solar-glow focus:ring-solar-glow"}`}
                    placeholder="John Doe"
                    type="text"
                    {...register("fullName", { required: "Please enter your name" })}
                  />
                  {errors.fullName && <p className="text-error text-[12px]">{errors.fullName.message}</p>}
                </div>
                <div className="space-y-2">
                  <label className="font-[family-name:var(--font-family-body)] text-[14px] leading-[20px] tracking-[0.05em] font-semibold text-on-surface-variant">Email Address</label>
                  <input
                    className={`w-full bg-background border rounded-lg px-4 py-3 text-on-surface focus:ring-1 transition-all outline-none ${errors.email ? "border-error" : "border-surface-stroke focus:border-solar-glow focus:ring-solar-glow"}`}
                    placeholder="john@example.com"
                    type="email"
                    {...register("email", {
                      required: "Please enter your email",
                      pattern: { value: /^\S+@\S+\.\S+$/, message: "Enter a valid email" },
                    })}
                  />
                  {errors.email && <p className="text-error text-[12px]">{errors.email.message}</p>}
                </div>
              </div>
              <div className="space-y-2">
                <label className="font-[family-name:var(--font-family-body)] text-[14px] leading-[20px] tracking-[0.05em] font-semibold text-on-surface-variant">Service Type</label>
                <select
                  className="w-full bg-background border border-surface-stroke rounded-lg px-4 py-3 text-on-surface focus:border-solar-glow focus:ring-1 focus:ring-solar-glow transition-all outline-none appearance-none"
                  {...register("serviceType")}
                >
                  <option>Residential Solar Installation</option>
                  <option>Commercial Energy Systems</option>
                  <option>Energy Audit</option>
                  <option>Maintenance & Support</option>
                  <option>Battery Storage Solutions</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="font-[family-name:var(--font-family-body)] text-[14px] leading-[20px] tracking-[0.05em] font-semibold text-on-surface-variant">Your Message</label>
                <textarea
                  className={`w-full bg-background border rounded-lg px-4 py-3 text-on-surface focus:ring-1 transition-all outline-none ${errors.message ? "border-error" : "border-surface-stroke focus:border-solar-glow focus:ring-solar-glow"}`}
                  placeholder="Tell us about your project..."
                  rows={4}
                  {...register("message", { required: "Please add a short message" })}
                ></textarea>
                {errors.message && <p className="text-error text-[12px]">{errors.message.message}</p>}
              </div>
              <button className="w-full bg-secondary-container text-on-secondary-container font-[family-name:var(--font-family-body)] text-[14px] leading-[20px] tracking-[0.05em] font-semibold py-4 rounded-lg flex items-center justify-center gap-2 hover:opacity-90 transition-all active:scale-[0.98]" type="submit">
                Request Consultation <span className="material-symbols-outlined">arrow_forward</span>
              </button>
            </form>
          </div>
          <div className="h-full min-h-[400px] lg:min-h-full rounded-xl overflow-hidden relative border border-surface-stroke">
            <div className="absolute inset-0 bg-surface-container-highest flex items-center justify-center">
              <div className="absolute inset-0 bg-cover bg-center grayscale contrast-125 opacity-60" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCxPKx9okr_tvl2mFsrsPgZxr7KNByWxwAX9znihnHX34VaP-Sr2Pokc8M8qna8iFPeCjJLtbqRrsJ_-tkufjv10IaSDKqlhs_DMc0Ok50LmArd19fBk68SWmCcbCg7gALTjUJEayYWwBbAKF_f39t-Mj3ZQE9jJhYFPVAQ9itaWmo1qDY5w_ZmeHwLpUqz1b-LBmnDZS5fJ_X43OgSyn_4iSfTW0TOfmu1lKo7kaayMnPicvR9dKQD2A')" }} />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
              <div className="relative z-10 flex flex-col items-center">
                <div className="w-16 h-16 bg-solar-glow/20 rounded-full flex items-center justify-center animate-pulse mb-4">
                  <div className="w-8 h-8 bg-solar-glow rounded-full flex items-center justify-center"><span className="material-symbols-outlined text-on-secondary-fixed text-[20px]">solar_power</span></div>
                </div>
                <div className="bg-surface-elevated/90 backdrop-blur-md px-6 py-4 rounded-xl border border-surface-stroke text-center">
                  <h4 className="font-[family-name:var(--font-family-body)] text-[14px] leading-[20px] tracking-[0.05em] font-semibold text-on-surface">HQ: Ibadan, Nigeria</h4>
                  <p className="text-[12px] leading-[16px] text-text-muted mt-1">Solar Hub of the Southwest</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="max-w-[1280px] mx-auto px-4 md:px-16 py-[120px]">
        <div className="text-center mb-12">
          <h2 className="font-[family-name:var(--font-family-headline)] text-3xl md:text-[48px] leading-[56px] tracking-[-0.01em] font-bold text-on-surface mb-4">Common Inquiries</h2>
          <p className="text-text-muted max-w-xl mx-auto">Quick answers to frequently asked questions about our solar process.</p>
        </div>
        <div className="max-w-3xl mx-auto space-y-4">
          {[
            { q: "What is the typical installation timeline?", a: "Residential installations typically take 3-5 business days from the moment the site audit is completed and equipment is delivered." },
            { q: "Do you provide maintenance after installation?", a: "Yes, New Era Solar World offers comprehensive annual maintenance plans to ensure your system operates at peak efficiency year-round." },
            { q: "What kind of warranties do you offer?", a: "We provide a 25-year performance warranty on solar panels and a 5-year workmanship warranty on all professional installations." },
            { q: "How much can I save on my electricity bill?", a: "Savings vary based on system size and usage, but most of our residential customers see 60-80% reduction in monthly electricity costs." },
            { q: "Does solar work during rainy season?", a: "Yes, our systems are designed to work in all weather conditions. While output is reduced during heavy cloud cover, battery storage ensures continuous power." },
          ].map((faq, i) => (
            <div key={i} className="accordion-item bg-surface-elevated border border-surface-stroke rounded-xl overflow-hidden group">
              <button className="w-full flex justify-between items-center px-6 py-6 text-left transition-colors" onClick={(e) => toggleAccordion(e.currentTarget)}>
                <span className="font-[family-name:var(--font-family-body)] text-[14px] leading-[20px] tracking-[0.05em] font-semibold text-on-surface">{faq.q}</span>
                <span className="material-symbols-outlined icon-rotate transition-transform text-secondary">expand_more</span>
              </button>
              <div className="accordion-content px-6 bg-surface-container-low transition-all">
                <div className="pb-6 pt-2 text-on-surface-variant text-[16px] leading-[24px]">{faq.a}</div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
