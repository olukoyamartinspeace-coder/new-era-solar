"use client";
import { useEffect, useRef } from "react";

export function useReveal() {
  const ref = useRef<HTMLDivElement>(null);

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

    return () => observer.disconnect();
  }, []);

  return ref;
}
