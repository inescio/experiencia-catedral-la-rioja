"use client";

import { useEffect } from "react";

export default function FadeInObserver() {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>(".fade-in-up");

    if (!("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("visible"));
      return;
    }

    const obs = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    els.forEach((el) => obs.observe(el));

    return () => obs.disconnect();
  }, []);

  return null;
}
