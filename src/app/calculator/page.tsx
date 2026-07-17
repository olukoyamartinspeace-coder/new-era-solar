"use client";
import { useState, useMemo } from "react";

type FormState = {
  bill: number;
  location: string;
  roof: string;
  usage: string;
};

const LOCATIONS: Record<string, { label: string; sun: number; tariff: number }> = {
  ibadan: { label: "Ibadan, Oyo", sun: 5.2, tariff: 85 },
  lagos: { label: "Lagos", sun: 4.8, tariff: 90 },
  abuja: { label: "Abuja", sun: 5.6, tariff: 80 },
  kano: { label: "Kano", sun: 6.0, tariff: 75 },
  enugu: { label: "Enugu", sun: 4.9, tariff: 82 },
  other: { label: "Other (Nigeria)", sun: 5.0, tariff: 82 },
};

const ROOF_TYPES: Record<string, number> = {
  metal: 1.0,
  concrete: 0.95,
  tile: 0.9,
  ground: 1.05,
};

const USAGE_PROFILE: Record<string, number> = {
  residential: 1.0,
  business: 1.25,
  industrial: 1.5,
};

export default function CalculatorPage() {
  const [form, setForm] = useState<FormState>({
    bill: 50000,
    location: "ibadan",
    roof: "metal",
    usage: "residential",
  });

  const results = useMemo(() => {
    const loc = LOCATIONS[form.location] ?? LOCATIONS.other;
    const roofFactor = ROOF_TYPES[form.roof] ?? 1;
    const usageFactor = USAGE_PROFILE[form.usage] ?? 1;

    const monthlyBill = form.bill || 0;
    const monthlyKwh = monthlyBill / loc.tariff;
    const dailyKwh = monthlyKwh / 30;
    const systemSizeKwp = (dailyKwh / (loc.sun * 0.8)) * usageFactor * roofFactor;
    const panels = Math.max(1, Math.ceil(systemSizeKwp / 0.45));
    const batteryKwh = dailyKwh * 1.5 * usageFactor;
    const installCost = systemSizeKwp * 450000 + batteryKwh * 90000;
    const annualSavings = monthlyBill * 12 * 0.75;
    const paybackYears = installCost / Math.max(annualSavings, 1);
    const twentyYearSavings = annualSavings * 20 - installCost;
    const co2 = systemSizeKwp * 1.4 * 365;

    return {
      systemSizeKwp: Number(systemSizeKwp.toFixed(1)),
      panels,
      batteryKwh: Number(batteryKwh.toFixed(1)),
      installCost: Math.round(installCost / 1000) * 1000,
      annualSavings: Math.round(annualSavings / 1000) * 1000,
      paybackYears: Number(paybackYears.toFixed(1)),
      twentyYearSavings: Math.round(twentyYearSavings / 1000) * 1000,
      co2: Math.round(co2),
      monthlyBill,
    };
  }, [form]);

  const fmt = (n: number) =>
    "₦" + n.toLocaleString("en-NG", { maximumFractionDigits: 0 });
  const fmtK = (n: number) =>
    "₦" + (n / 1000).toLocaleString("en-NG", { maximumFractionDigits: 0 }) + "k";

  return (
    <>
      <section className="relative min-h-[55vh] flex flex-col justify-center items-center text-center px-4 md:px-16 py-[120px] overflow-hidden">
        <div className="relative z-10 max-w-4xl mx-auto">
          <span className="text-secondary font-[family-name:var(--font-family-body)] text-[14px] leading-[20px] tracking-[0.05em] font-semibold uppercase tracking-widest mb-4 block">
            Solar Savings Estimator
          </span>
          <h1 className="font-[family-name:var(--font-family-headline)] text-3xl md:text-[72px] leading-[80px] tracking-[-0.02em] font-bold text-on-surface leading-tight mb-6">
            Calculate Your <span className="text-solar-glow">Solar Potential</span>
          </h1>
          <p className="text-text-muted font-[family-name:var(--font-family-body)] text-[18px] leading-[28px] max-w-2xl mx-auto">
            Get an instant estimate of your ideal system size, savings, and payback
            period. Tailored to Nigerian sunlight and electricity tariffs.
          </p>
        </div>
      </section>

      <section className="max-w-[1280px] mx-auto px-4 md:px-16 pb-[120px]">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2 bg-surface-elevated border border-surface-stroke p-8 md:p-10 rounded-xl">
            <h2 className="font-[family-name:var(--font-family-headline)] text-2xl md:text-[32px] font-semibold mb-8 text-on-surface">
              Your Details
            </h2>

            <div className="space-y-8">
              <div className="space-y-3">
                <div className="flex justify-between items-baseline">
                  <label className="font-[family-name:var(--font-family-body)] text-[14px] leading-[20px] tracking-[0.05em] font-semibold text-on-surface-variant">
                    Monthly Electricity Bill
                  </label>
                  <span className="font-[family-name:var(--font-family-headline)] text-solar-glow font-bold text-lg">
                    {fmt(form.bill)}
                  </span>
                </div>
                <input
                  type="range"
                  min={5000}
                  max={500000}
                  step={5000}
                  value={form.bill}
                  onChange={(e) =>
                    setForm({ ...form, bill: Number(e.target.value) })
                  }
                  className="w-full accent-[#FFD600]"
                />
                <div className="flex justify-between text-[12px] text-text-muted">
                  <span>₦5k</span>
                  <span>₦500k</span>
                </div>
              </div>

              <div className="space-y-2">
                <label className="font-[family-name:var(--font-family-body)] text-[14px] leading-[20px] tracking-[0.05em] font-semibold text-on-surface-variant">
                  Location
                </label>
                <select
                  value={form.location}
                  onChange={(e) => setForm({ ...form, location: e.target.value })}
                  className="w-full bg-background border border-surface-stroke rounded-lg px-4 py-3 text-on-surface focus:border-solar-glow focus:ring-1 focus:ring-solar-glow transition-all outline-none appearance-none"
                >
                  {Object.entries(LOCATIONS).map(([k, v]) => (
                    <option key={k} value={k}>
                      {v.label}
                    </option>
                  ))}
                </select>
              </div>

              <div className="space-y-2">
                <label className="font-[family-name:var(--font-family-body)] text-[14px] leading-[20px] tracking-[0.05em] font-semibold text-on-surface-variant">
                  Installation Surface
                </label>
                <select
                  value={form.roof}
                  onChange={(e) => setForm({ ...form, roof: e.target.value })}
                  className="w-full bg-background border border-surface-stroke rounded-lg px-4 py-3 text-on-surface focus:border-solar-glow focus:ring-1 focus:ring-solar-glow transition-all outline-none appearance-none"
                >
                  <option value="metal">Metal Roof</option>
                  <option value="concrete">Concrete Roof</option>
                  <option value="tile">Tiled Roof</option>
                  <option value="ground">Ground Mount</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="font-[family-name:var(--font-family-body)] text-[14px] leading-[20px] tracking-[0.05em] font-semibold text-on-surface-variant">
                  Property Type
                </label>
                <select
                  value={form.usage}
                  onChange={(e) => setForm({ ...form, usage: e.target.value })}
                  className="w-full bg-background border border-surface-stroke rounded-lg px-4 py-3 text-on-surface focus:border-solar-glow focus:ring-1 focus:ring-solar-glow transition-all outline-none appearance-none"
                >
                  <option value="residential">Residential</option>
                  <option value="business">Small Business</option>
                  <option value="industrial">Industrial</option>
                </select>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3 space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <ResultCard
                icon="solar_power"
                label="Recommended System"
                value={`${results.systemSizeKwp} kWp`}
                sub={`~${results.panels} panels`}
              />
              <ResultCard
                icon="battery_charging_full"
                label="Battery Storage"
                value={`${results.batteryKwh} kWh`}
                sub="Backup capacity"
              />
              <ResultCard
                icon="receipt_long"
                label="Est. Installation"
                value={fmt(results.installCost)}
                sub="Turnkey estimate"
              />
              <ResultCard
                icon="savings"
                label="Annual Savings"
                value={fmt(results.annualSavings)}
                sub="vs grid bill"
              />
            </div>

            <div className="bg-surface-elevated border border-surface-stroke rounded-xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <span className="material-symbols-outlined text-secondary text-3xl">
                  trending_up
                </span>
                <h3 className="font-[family-name:var(--font-family-headline)] text-xl md:text-[28px] font-semibold text-on-surface">
                  Your 20-Year Outlook
                </h3>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                <Stat label="Payback Period" value={`${results.paybackYears} yrs`} />
                <Stat label="20-Year Savings" value={fmtK(results.twentyYearSavings)} highlight />
                <Stat label="CO₂ Avoided / yr" value={`${results.co2} kg`} />
              </div>
              <a
                href="/contact"
                className="mt-8 w-full bg-secondary-container text-on-secondary-container font-[family-name:var(--font-family-body)] text-[14px] leading-[20px] tracking-[0.05em] font-semibold py-4 rounded-lg flex items-center justify-center gap-2 hover:opacity-90 transition-all active:scale-[0.98]"
              >
                Get a Precise Quote <span className="material-symbols-outlined">arrow_forward</span>
              </a>
              <p className="text-[12px] text-text-muted mt-4 text-center">
                Estimates are indicative. A professional site audit delivers exact
                figures. Tariffs based on current DISCO averages.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function ResultCard({
  icon,
  label,
  value,
  sub,
}: {
  icon: string;
  label: string;
  value: string;
  sub: string;
}) {
  return (
    <div className="bg-surface-container-low border border-surface-stroke rounded-xl p-6 magnetic-card">
      <div className="w-10 h-10 bg-secondary/10 flex items-center justify-center rounded-full mb-4">
        <span className="material-symbols-outlined text-secondary">{icon}</span>
      </div>
      <p className="font-[family-name:var(--font-family-body)] text-[12px] leading-[16px] tracking-[0.05em] font-semibold uppercase text-on-surface-variant mb-1">
        {label}
      </p>
      <p className="font-[family-name:var(--font-family-headline)] text-2xl md:text-[32px] font-bold text-solar-glow leading-tight">
        {value}
      </p>
      <p className="text-[12px] text-text-muted mt-1">{sub}</p>
    </div>
  );
}

function Stat({
  label,
  value,
  highlight,
}: {
  label: string;
  value: string;
  highlight?: boolean;
}) {
  return (
    <div>
      <p className="font-[family-name:var(--font-family-body)] text-[12px] leading-[16px] tracking-[0.05em] font-semibold uppercase text-on-surface-variant mb-1">
        {label}
      </p>
      <p
        className={`font-[family-name:var(--font-family-headline)] text-2xl md:text-[28px] font-bold leading-tight ${
          highlight ? "text-solar-glow" : "text-on-surface"
        }`}
      >
        {value}
      </p>
    </div>
  );
}
