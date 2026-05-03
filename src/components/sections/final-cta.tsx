"use client";

import { FadeUp, RevealText } from "@/components/ui/motion";
import { motion } from "framer-motion";

export function FinalCTA() {
  return (
    <section className="relative py-40 sm:py-56 lg:py-64 overflow-hidden">
      {/* Subtle ambient glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,#151515_0%,#050505_70%)]" />

      <div className="relative z-10 mx-auto max-w-[1600px] px-6 sm:px-10 lg:px-16">
        <div className="max-w-5xl mx-auto text-center">
          {/* Micro label */}
          <FadeUp>
            <span className="text-[10px] font-medium uppercase tracking-[0.5em] text-white/20">
              The Next Step
            </span>
          </FadeUp>

          {/* Massive headline */}
          <div className="mt-10">
            <h2 className="font-display uppercase leading-[0.85] tracking-[0.02em]">
              <span className="block" style={{ fontSize: "clamp(3rem, 8vw, 9rem)" }}>
                <RevealText text="Stop Thinking" delay={0.2} />
              </span>
              <span className="block" style={{ fontSize: "clamp(3rem, 8vw, 9rem)" }}>
                <RevealText text="About It." delay={0.5} />
              </span>
            </h2>
          </div>

          {/* Subline */}
          <FadeUp delay={0.8}>
            <p className="mt-10 mx-auto max-w-md text-[15px] leading-[1.8] text-white/25 font-light">
              You already know what you need. The only question is whether you&apos;ll
              do something about it today.
            </p>
          </FadeUp>

          {/* CTA button — the only white element, demands attention */}
          <FadeUp delay={1}>
            <div className="mt-14">
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.3 }}
                className="inline-block bg-white text-black px-16 py-6 text-[11px] font-medium uppercase tracking-[0.35em] transition-all duration-500 hover:shadow-[0_0_60px_rgba(255,255,255,0.1)]"
              >
                Start Now
              </motion.a>
            </div>
          </FadeUp>

          {/* Bottom detail */}
          <FadeUp delay={1.2}>
            <p className="mt-10 text-[10px] uppercase tracking-[0.4em] text-white/10">
              Limited spots available each month
            </p>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
