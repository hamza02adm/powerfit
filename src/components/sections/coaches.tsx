"use client";

import Image from "next/image";
import { FadeUp, SlideIn } from "@/components/ui/motion";
import { motion } from "framer-motion";

const coaches = [
  {
    name: "Marcus Cole",
    title: "Head of Strength",
    image: "/images/coach-elite-1.png",
    stat: "12+ years",
    statLabel: "Experience",
  },
  {
    name: "Elena Voss",
    title: "Performance & Recovery",
    image: "/images/coach-elite-2.png",
    stat: "500+",
    statLabel: "Athletes Trained",
  },
  {
    name: "James Okafor",
    title: "Combat & Conditioning",
    image: "/images/coach-elite-3.png",
    stat: "3× Champion",
    statLabel: "National Boxing",
  },
];

export function Coaches() {
  return (
    <section id="coaches" className="relative py-40 sm:py-56">
      <div className="mx-auto max-w-[1600px] px-6 sm:px-10 lg:px-16">
        {/* Header */}
        <FadeUp>
          <div className="flex items-center gap-4 mb-6">
            <span className="block h-[1px] w-12 bg-white/20" />
            <span className="text-[10px] font-medium uppercase tracking-[0.5em] text-white/30">
              The Team
            </span>
          </div>
          <h2
            className="font-display uppercase tracking-[0.02em] leading-[0.9] max-w-3xl"
            style={{ fontSize: "clamp(2.5rem, 5vw, 5rem)" }}
          >
            Not Trainers.<br />
            <span className="text-white/20">Architects.</span>
          </h2>
        </FadeUp>

        {/* Coaches grid — editorial, not card-based */}
        <div className="mt-24 space-y-0">
          {coaches.map((coach, i) => (
            <FadeUp key={coach.name} delay={i * 0.15}>
              <div className="group grid lg:grid-cols-12 gap-0 border-t border-white/[0.04] py-12 lg:py-16 items-center">
                {/* Number */}
                <div className="lg:col-span-1 mb-4 lg:mb-0">
                  <span className="text-[11px] font-medium uppercase tracking-[0.3em] text-white/15">
                    0{i + 1}
                  </span>
                </div>

                {/* Image — editorial portrait */}
                <div className="lg:col-span-3 mb-6 lg:mb-0">
                  <div className="relative w-full aspect-[3/4] max-w-[280px] overflow-hidden">
                    <Image
                      src={coach.image}
                      alt={coach.name}
                      fill
                      className="object-cover grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-[1.03]"
                      sizes="(max-width: 1024px) 100vw, 25vw"
                    />
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  </div>
                </div>

                {/* Info */}
                <div className="lg:col-span-5 lg:pl-8">
                  <motion.h3
                    className="font-display text-3xl sm:text-4xl lg:text-5xl tracking-[0.06em] uppercase transition-all duration-700"
                  >
                    <span className="group-hover:text-white transition-colors duration-700">
                      {coach.name}
                    </span>
                  </motion.h3>
                  <p className="mt-3 text-[11px] font-medium uppercase tracking-[0.35em] text-white/25">
                    {coach.title}
                  </p>
                </div>

                {/* Stat */}
                <div className="lg:col-span-3 mt-6 lg:mt-0 lg:text-right">
                  <span className="block font-display text-3xl sm:text-4xl tracking-wider text-white/15 group-hover:text-white/40 transition-colors duration-700">
                    {coach.stat}
                  </span>
                  <span className="block mt-1 text-[10px] uppercase tracking-[0.3em] text-white/15">
                    {coach.statLabel}
                  </span>
                </div>
              </div>
            </FadeUp>
          ))}
          {/* Bottom border */}
          <div className="border-t border-white/[0.04]" />
        </div>
      </div>
    </section>
  );
}
