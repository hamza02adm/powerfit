"use client";

import { FadeUp, RevealText } from "@/components/ui/motion";

export function Statement() {
  return (
    <section className="relative py-32 sm:py-40 lg:py-48 overflow-hidden">
      {/* Subtle background texture */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,#111_0%,#050505_70%)]" />

      <div className="relative z-10 mx-auto max-w-[1600px] px-6 sm:px-10 lg:px-16">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left — micro label */}
          <FadeUp className="lg:col-span-3">
            <div className="flex items-center gap-4">
              <span className="block h-[1px] w-12 bg-white/20" />
              <span className="text-[10px] font-medium uppercase tracking-[0.5em] text-white/30">
                Philosophy
              </span>
            </div>
          </FadeUp>

          {/* Right — massive statement */}
          <div className="lg:col-span-9">
            <h2 className="font-display uppercase leading-[0.9] tracking-[0.02em]">
              <span className="block" style={{ fontSize: "clamp(1.8rem, 3.8vw, 3.8rem)" }}>
                <RevealText text="We don't build" delay={0.1} />
              </span>
              <span className="block" style={{ fontSize: "clamp(1.8rem, 3.8vw, 3.8rem)" }}>
                <RevealText text="gym members." delay={0.3} />
              </span>
              <span className="block mt-4" style={{ fontSize: "clamp(1.8rem, 3.8vw, 3.8rem)" }}>
                <RevealText text="We build" delay={0.5} />
              </span>
              <span className="block text-white/20" style={{ fontSize: "clamp(1.8rem, 3.8vw, 3.8rem)" }}>
                <RevealText text="dangerous people." delay={0.7} />
              </span>
            </h2>

            <FadeUp delay={1}>
              <div className="mt-16 max-w-md">
                <p className="text-[15px] leading-[1.8] text-white/35 font-light">
                  PowerFit exists for a specific type of person. Someone who
                  doesn&apos;t need motivation — they need a place that matches
                  their intensity. No music. No mirrors. No excuses.
                </p>
              </div>
            </FadeUp>
          </div>
        </div>
      </div>
    </section>
  );
}
