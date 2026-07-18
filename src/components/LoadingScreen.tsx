"use client";
import { useEffect, useState } from "react";

export default function LoadingScreen() {
  const [hidden, setHidden] = useState(false);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    const MIN_DURATION = 2200;
    const start = Date.now();
    let assetsReady = document.readyState === "complete";

    const onLoad = () => {
      assetsReady = true;
    };
    if (!assetsReady) {
      window.addEventListener("load", onLoad);
    }

    const tryFinish = () => {
      const elapsed = Date.now() - start;
      if (assetsReady && elapsed >= MIN_DURATION) {
        setFade(true);
        setTimeout(() => setHidden(true), 700);
        return true;
      }
      return false;
    };

    const interval = setInterval(() => {
      if (tryFinish()) clearInterval(interval);
    }, 100);

    return () => {
      clearInterval(interval);
      window.removeEventListener("load", onLoad);
    };
  }, []);

  if (hidden) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background transition-opacity duration-700 ${
        fade ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <div className="relative flex items-center justify-center mb-10">
        <span className="material-symbols-outlined text-secondary text-7xl animate-pulse-glow">
          solar_power
        </span>
        <span
          className="absolute w-28 h-28 rounded-full border-2 border-transparent border-t-secondary border-r-solar-glow animate-spin"
          style={{ animationDuration: "1.1s" }}
        />
      </div>
      <h1 className="font-[family-name:var(--font-family-headline)] text-2xl md:text-[32px] uppercase tracking-tighter font-semibold text-on-surface">
        New Era Solar World
      </h1>
      <p className="font-[family-name:var(--font-family-body)] text-[13px] leading-[20px] tracking-[0.2em] uppercase text-on-surface-variant mt-3">
        Powering your future
      </p>
      <div className="mt-8 h-[3px] w-48 overflow-hidden rounded-full bg-surface-stroke">
        <div className="h-full bg-secondary loading-bar" />
      </div>
    </div>
  );
}
