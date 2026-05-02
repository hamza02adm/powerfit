"use client";

import { useEffect, useRef } from "react";

let styleInjected = false;

function injectStyle() {
  if (styleInjected || typeof document === "undefined") return;
  const style = document.createElement("style");
  style.textContent = `.animate-visible { opacity: 1 !important; transform: translateY(0) !important; }`;
  document.head.appendChild(style);
  styleInjected = true;
}

export function ScrollAnimate({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    injectStyle();
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.transitionDelay = `${delay}ms`;
          el.classList.add("animate-visible");
          observer.unobserve(el);
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div
      ref={ref}
      className={`animate-on-scroll ${className ?? ""}`}
      style={{
        opacity: 0,
        transform: "translateY(24px)",
        transition: "opacity 0.6s ease-out, transform 0.6s ease-out",
      }}
    >
      {children}
    </div>
  );
}
