"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

const NAV = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/products", label: "Products" },
  { href: "/calculator", label: "Calculator" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [light, setLight] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    setLight(document.documentElement.classList.contains("light"));
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleTheme = () => {
    const next = !light;
    setLight(next);
    document.documentElement.classList.toggle("light", next);
    try {
      localStorage.setItem("theme", next ? "light" : "dark");
    } catch (e) {}
  };

  const linkClass =
    "font-[family-name:var(--font-family-body)] text-[14px] leading-[20px] tracking-[0.05em] font-semibold text-on-surface-variant hover:text-on-surface transition-colors duration-300";

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
          {NAV.map((item) => (
            <Link key={item.href} href={item.href} className={linkClass}>
              {item.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2 md:gap-3">
          <button
            type="button"
            onClick={toggleTheme}
            aria-label="Toggle light and dark mode"
            className="material-symbols-outlined text-on-surface w-10 h-10 flex items-center justify-center rounded-lg hover:bg-surface-container-high transition-colors cursor-pointer"
          >
            {light ? "dark_mode" : "light_mode"}
          </button>

          <Link
            href="/contact"
            className="hidden sm:block bg-secondary text-on-secondary px-6 py-2.5 font-[family-name:var(--font-family-body)] text-[14px] leading-[20px] tracking-[0.05em] font-semibold rounded-lg hover:scale-105 active:scale-95 transition-all shimmer"
          >
            Get a Quote
          </Link>

          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-label="Open menu"
            aria-expanded={open}
            className="lg:hidden material-symbols-outlined text-on-surface w-10 h-10 flex items-center justify-center rounded-lg hover:bg-surface-container-high transition-colors cursor-pointer"
          >
            {open ? "close" : "menu"}
          </button>
        </div>
      </nav>

      {open && (
        <div className="lg:hidden bg-background/98 border-b border-surface-stroke px-4 pb-6 pt-2 backdrop-blur-md">
          <div className="flex flex-col gap-1">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="py-3 px-2 text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high rounded-lg transition-colors font-[family-name:var(--font-family-body)] text-[15px] font-semibold tracking-[0.03em]"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 bg-secondary text-on-secondary px-6 py-3 text-center font-[family-name:var(--font-family-body)] text-[14px] tracking-[0.05em] font-semibold rounded-lg shimmer"
            >
              Get a Quote
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
