"use client";

import { FadeUp } from "@/components/ui/motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Marcus J.",
    text: "Lost 30 lbs in 4 months. The coaches here actually care about your progress — not just showing up.",
    role: "Member for 2 years",
  },
  {
    name: "Aisha R.",
    text: "I've been to a dozen gyms. PowerFit is the first one that felt serious. The environment pushes you without anyone saying a word.",
    role: "Member for 1 year",
  },
  {
    name: "David L.",
    text: "The personal coaching program changed everything. My deadlift went from 225 to 405 in under a year.",
    role: "Member for 3 years",
  },
];

function Stars() {
  return (
    <div className="flex gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} size={14} className="fill-brand text-brand" />
      ))}
    </div>
  );
}

export function Testimonials() {
  return (
    <section className="py-28 sm:py-36">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
        <FadeUp>
          <div className="text-center">
            <span className="text-[11px] font-semibold uppercase tracking-[0.3em] text-brand">
              Testimonials
            </span>
            <h2 className="mt-5 font-display text-4xl tracking-wider uppercase sm:text-5xl lg:text-6xl">
              Real Results
            </h2>
          </div>
        </FadeUp>

        <div className="mt-16 grid gap-5 sm:grid-cols-3">
          {testimonials.map((t, i) => (
            <FadeUp key={t.name} delay={i * 0.1}>
              <div className="group relative rounded-xl bg-card p-8 transition-all duration-500 hover:bg-[#161616] sm:p-10">
                <div className="absolute inset-0 rounded-xl border border-white/[0.06] transition-colors duration-500 group-hover:border-brand/20" />
                <div className="relative">
                  <Stars />
                  <p className="mt-5 text-sm leading-relaxed text-muted">
                    &ldquo;{t.text}&rdquo;
                  </p>
                  <div className="mt-6 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand/10 font-display text-lg text-brand">
                      {t.name.charAt(0)}
                    </div>
                    <div>
                      <p className="text-sm font-medium">{t.name}</p>
                      <p className="text-xs text-muted">{t.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
