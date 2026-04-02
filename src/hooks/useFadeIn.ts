import { useEffect, useRef } from "react";

export function useFadeIn() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -50px 0px" }
    );

    const el = ref.current;
    if (el) {
      const targets = el.querySelectorAll(".fade-section, .fade-section-left, .fade-section-right");
      targets.forEach((t) => observer.observe(t));
      // Also observe the element itself
      if (el.classList.contains("fade-section") || el.classList.contains("fade-section-left") || el.classList.contains("fade-section-right")) {
        observer.observe(el);
      }
    }

    return () => observer.disconnect();
  }, []);

  return ref;
}
