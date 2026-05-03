"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative h-[100dvh] min-h-[700px] flex flex-col overflow-hidden">
      {/* Background image — fullscreen cinematic */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-cinematic.png"
          alt="Elite athlete in dramatic lighting"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
          quality={90}
        />
      </div>

      {/* Overlay — heavy vignette, not a flat gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/60 to-[#050505]/30 z-10" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#050505]/50 to-transparent z-10" />

      {/* Spacer — pushes content to bottom, prevents navbar overlap */}
      <div className="flex-1 min-h-[120px]" />

      {/* Content — bottom-aligned, editorial */}
      <div className="relative z-20 w-full pb-16 sm:pb-24 lg:pb-28">
        <div className="mx-auto max-w-[1600px] px-6 sm:px-10 lg:px-16">
          <div className="max-w-4xl">
            {/* Main headline — massive, stacked */}
            <h1 className="font-display uppercase leading-[0.85] tracking-[0.04em]">
              <div className="overflow-hidden">
                <motion.span
                  initial={{ y: "120%" }}
                  animate={{ y: "0%" }}
                  transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  className="block"
                  style={{ fontSize: "clamp(3.5rem, 10vw, 9rem)" }}
                >
                  Your Body
                </motion.span>
              </div>
              <div className="overflow-hidden">
                <motion.span
                  initial={{ y: "120%" }}
                  animate={{ y: "0%" }}
                  transition={{ duration: 1, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
                  className="block"
                  style={{ fontSize: "clamp(3.5rem, 10vw, 9rem)" }}
                >
                  Is Not
                </motion.span>
              </div>
              <div className="overflow-hidden">
                <motion.span
                  initial={{ y: "120%" }}
                  animate={{ y: "0%" }}
                  transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className="block text-white/20"
                  style={{ fontSize: "clamp(3.5rem, 10vw, 9rem)" }}
                >
                  A Temple.
                </motion.span>
              </div>
            </h1>

            {/* Tag — below headline */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
              className="mt-8 text-[10px] font-medium uppercase tracking-[0.5em] text-white/25"
            >
              Est. 2024 — Elite Fitness
            </motion.div>

            {/* Subline — raw, provocative */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="mt-5 max-w-lg text-[15px] sm:text-base leading-relaxed text-white/40 font-light"
            >
              It&apos;s a weapon. And we help you sharpen it.
            </motion.p>

            {/* CTA — minimal, high-contrast */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.5 }}
              className="mt-12 flex flex-wrap items-center gap-8"
            >
              <a
                href="#membership"
                className="group relative inline-flex items-center border border-white px-10 py-5 text-[11px] font-medium uppercase tracking-[0.3em] text-white transition-all duration-500 hover:bg-white hover:text-black"
              >
                View Membership
                <span className="ml-4 inline-block w-6 h-[1px] bg-white transition-all duration-500 group-hover:w-10 group-hover:bg-black" />
              </a>
              <a
                href="#coaches"
                className="text-[11px] font-medium uppercase tracking-[0.3em] text-white/30 transition-colors duration-500 hover:text-white"
              >
                Meet The Team
              </a>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll indicator — single line */}
      <motion.div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <span className="text-[9px] uppercase tracking-[0.4em] text-white/20">Scroll</span>
        <motion.div
          animate={{ height: ["16px", "32px", "16px"] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="w-[1px] bg-white/20"
        />
      </motion.div>
    </section>
  );
}
