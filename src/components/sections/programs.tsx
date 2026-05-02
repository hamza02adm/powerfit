"use client";

import { FadeUp } from "@/components/ui/motion";

const programs = [
  { name: "Strength Training", emoji: "🏋️", description: "Build raw power with progressive overload." },
  { name: "Fat Loss", emoji: "🔥", description: "Science-backed programs for body recomposition." },
  { name: "Boxing", emoji: "🥊", description: "Learn technique. Build endurance. Get shredded." },
  { name: "CrossFit", emoji: "⚡", description: "High-intensity functional fitness." },
  { name: "Yoga & Recovery", emoji: "🧘", description: "Mobility, flexibility, and mental clarity." },
  { name: "Personal Coaching", emoji: "🎯", description: "1-on-1 programs tailored to your goals." },
];

export function Programs() {
  return (
    <section id="programs" className="py-28 sm:py-36">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
        <FadeUp>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <span className="text-[11px] font-semibold uppercase tracking-[0.3em] text-brand">
                Programs
              </span>
              <h2 className="mt-5 font-display text-4xl tracking-wider uppercase sm:text-5xl lg:text-6xl">
                Our Programs
              </h2>
            </div>
          </div>
        </FadeUp>

        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {programs.map((p, i) => (
            <FadeUp key={p.name} delay={i * 0.08}>
              <div className="group relative overflow-hidden rounded-xl bg-card transition-all duration-500 hover:bg-[#161616]">
                <div className="absolute inset-0 rounded-xl border border-white/[0.06] transition-colors duration-500 group-hover:border-brand/20" />
                <div className="relative p-8">
                  <span className="text-4xl">{p.emoji}</span>
                  <h3 className="mt-5 font-display text-xl tracking-wider uppercase sm:text-2xl">
                    {p.name}
                  </h3>
                  <p className="mt-2 text-sm text-muted leading-relaxed">
                    {p.description}
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
