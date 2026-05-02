"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-[100dvh] flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-[#050505]/90 to-transparent z-10" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_50%,#3B82F612_0%,transparent_60%)] z-10" />

      <div className="absolute inset-0">
        <Image
          src="/images/hero.png"
          alt="Elite athlete training"
          fill
          className="object-cover object-[75%_center]"
          priority
          sizes="100vw"
        />
      </div>

      <div className="relative z-20 mx-auto w-full max-w-7xl px-5 sm:px-8 pt-28 pb-20">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 rounded-full border border-brand/30 bg-brand/5 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.3em] text-brand"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-brand" />
            Elite Fitness Club
          </motion.div>

          <h1 className="mt-8 font-display uppercase leading-[0.9] tracking-wider">
            <motion.span
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="block"
              style={{ fontSize: "clamp(3.5rem, 9vw, 7.5rem)" }}
            >
              Built For
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="block"
              style={{ fontSize: "clamp(3.5rem, 9vw, 7.5rem)" }}
            >
              Those Who
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="block"
              style={{ fontSize: "clamp(3.5rem, 9vw, 7.5rem)" }}
            >
              Refuse{" "}
              <span className="bg-gradient-to-r from-brand to-glow bg-clip-text text-transparent">
                Average
              </span>
            </motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mt-8 max-w-md text-lg text-muted leading-relaxed"
          >
            Train with expert coaches, world-class equipment, and a community
            built for results.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-md bg-brand px-8 py-4 text-[13px] font-semibold uppercase tracking-wider text-white transition-all duration-300 hover:bg-blue-500 hover:shadow-[0_0_40px_rgba(59,130,246,0.3)]"
            >
              Start Today
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#about"
              className="inline-flex items-center gap-2 rounded-md border border-white/[0.08] bg-white/[0.03] px-8 py-4 text-[13px] font-semibold uppercase tracking-wider text-white/80 transition-all duration-300 hover:bg-white/[0.06] hover:text-white"
            >
              Book Tour
            </a>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20">
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="h-12 w-7 rounded-full border border-white/10 flex items-start justify-center pt-2"
        >
          <div className="h-2 w-1 rounded-full bg-white/30" />
        </motion.div>
      </div>
    </section>
  );
}
