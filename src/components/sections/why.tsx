"use client";

import { FadeUp } from "@/components/ui/motion";
import { Target, Shield, HeartHandshake } from "lucide-react";

const reasons = [
  {
    icon: Target,
    title: "Results First",
    description: "Programs engineered for transformation. Every rep, every set — designed with purpose.",
  },
  {
    icon: Shield,
    title: "Serious Environment",
    description: "No distractions. No ego. Just focused training and real, measurable progress.",
  },
  {
    icon: HeartHandshake,
    title: "Coaches That Care",
    description: "Expert trainers who push you further and guide you smarter. Your goals become theirs.",
  },
];

export function Why() {
  return (
    <section id="about" className="py-28 sm:py-36">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
        <FadeUp>
          <div className="text-center">
            <span className="text-[11px] font-semibold uppercase tracking-[0.3em] text-brand">
              Why PowerFit
            </span>
            <h2 className="mt-5 font-display text-4xl tracking-wider uppercase sm:text-5xl lg:text-6xl">
              Why Members Stay
            </h2>
          </div>
        </FadeUp>

        <div className="mt-16 grid gap-5 sm:grid-cols-3 lg:mt-20">
          {reasons.map((r, i) => (
            <FadeUp key={r.title} delay={i * 0.12}>
              <div className="group relative rounded-xl bg-card p-8 transition-all duration-500 hover:bg-[#161616] sm:p-10">
                <div className="absolute inset-0 rounded-xl border border-white/[0.06] transition-colors duration-500 group-hover:border-brand/20" />
                <div className="relative">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-brand/10 text-brand transition-all duration-500 group-hover:bg-brand/20 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.15)]">
                    <r.icon size={22} strokeWidth={1.5} />
                  </div>
                  <h3 className="mt-6 font-display text-2xl tracking-wider uppercase">
                    {r.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {r.description}
                  </p>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
