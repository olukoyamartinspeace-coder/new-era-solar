"use client";
import { useEffect } from "react";

export default function RevealScript() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target.classList.contains("reveal-group")) {
              entry.target.querySelectorAll(".reveal").forEach((el, index) => {
                setTimeout(() => el.classList.add("active"), index * 100);
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

    const animateCounters = () => {
      document.querySelectorAll("[data-target]").forEach((counter) => {
        const target = parseInt(counter.getAttribute("data-target") || "0");
        const text = counter.innerText;
        const suffix = text.replace(/[0-9]/g, "");
        const duration = 2000;

        const update = (currentTime: number) => {
          const startTime = performance.now();
          const elapsed = currentTime - startTime;
          const progress = Math.min(elapsed / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 4);
          const current = Math.floor(eased * target);
          counter.innerText = current + suffix;
          if (progress < 1) requestAnimationFrame(update);
          else counter.innerText = target + suffix;
        };

        const counterObserver = new IntersectionObserver((entries) => {
          if (entries[0].isIntersecting) {
            requestAnimationFrame(update);
            counterObserver.unobserve(counter);
          }
        });
        counterObserver.observe(counter);
      });
    };

    animateCounters();
  }, []);

  return null;
}
