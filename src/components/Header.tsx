"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/95 shadow-2xl"
          : "bg-background/80 backdrop-blur-md"
      } border-b border-surface-stroke`}
    >
      <nav className="flex justify-between items-center w-full px-4 md:px-16 py-2 max-w-[1280px] mx-auto h-20">
        <Link href="/" className="flex items-center gap-2">
          <span className="material-symbols-outlined text-secondary text-4xl">
            solar_power
          </span>
          <span className="font-[family-name:var(--font-family-headline)] text-xl md:text-[32px] text-on-surface tracking-tighter uppercase font-semibold">
            New Era Solar World
          </span>
        </Link>
        <div className="hidden lg:flex gap-8">
          <Link
            href="/"
            className="font-[family-name:var(--font-family-body)] text-[14px] leading-[20px] tracking-[0.05em] font-semibold text-on-surface-variant hover:text-on-surface transition-colors duration-300"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="font-[family-name:var(--font-family-body)] text-[14px] leading-[20px] tracking-[0.05em] font-semibold text-on-surface-variant hover:text-on-surface transition-colors duration-300"
          >
            About
          </Link>
          <Link
            href="/services"
            className="font-[family-name:var(--font-family-body)] text-[14px] leading-[20px] tracking-[0.05em] font-semibold text-on-surface-variant hover:text-on-surface transition-colors duration-300"
          >
            Services
          </Link>
          <Link
            href="/projects"
            className="font-[family-name:var(--font-family-body)] text-[14px] leading-[20px] tracking-[0.05em] font-semibold text-on-surface-variant hover:text-on-surface transition-colors duration-300"
          >
            Projects
          </Link>
          <Link
            href="/products"
            className="font-[family-name:var(--font-family-body)] text-[14px] leading-[20px] tracking-[0.05em] font-semibold text-on-surface-variant hover:text-on-surface transition-colors duration-300"
          >
            Products
          </Link>
          <Link
            href="/calculator"
            className="font-[family-name:var(--font-family-body)] text-[14px] leading-[20px] tracking-[0.05em] font-semibold text-on-surface-variant hover:text-on-surface transition-colors duration-300"
          >
            Calculator
          </Link>
        </div>
        <Link
          href="/contact"
          className="bg-secondary text-on-secondary px-6 py-2.5 font-[family-name:var(--font-family-body)] text-[14px] leading-[20px] tracking-[0.05em] font-semibold rounded-lg hover:scale-105 active:scale-95 transition-all shimmer"
        >
          Get a Quote
        </Link>
      </nav>
    </header>
  );
}
