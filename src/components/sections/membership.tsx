"use client";

import { FadeUp } from "@/components/ui/motion";
import { motion } from "framer-motion";

const tiers = [
  {
    name: "Standard",
    price: "49",
    interval: "/ month",
    description: "Full access to the floor.",
    details: [
      "Unlimited gym access",
      "Group training sessions",
      "Locker & recovery room",
    ],
  },
  {
    name: "Elite",
    price: "129",
    interval: "/ month",
    description: "For serious athletes.",
    details: [
      "Everything in Standard",
      "4× personal coaching / month",
      "Custom nutrition protocol",
      "InBody composition tracking",
      "Priority booking",
    ],
    featured: true,
  },
  {
    name: "Private",
    price: "299",
    interval: "/ month",
    description: "By application only.",
    details: [
      "Everything in Elite",
      "Unlimited 1-on-1 coaching",
      "24/7 facility access",
      "Dedicated recovery suite",
      "Direct line to your coach",
    ],
  },
];

export function Membership() {
  return (
    <section id="membership" className="relative py-40 sm:py-56">
      <div className="mx-auto max-w-[1600px] px-6 sm:px-10 lg:px-16">
        {/* Header */}
        <FadeUp>
          <div className="flex items-center gap-4 mb-6">
            <span className="block h-[1px] w-12 bg-white/20" />
            <span className="text-[10px] font-medium uppercase tracking-[0.5em] text-white/30">
              Membership
            </span>
          </div>
          <h2
            className="font-display uppercase tracking-[0.02em] leading-[0.9]"
            style={{ fontSize: "clamp(2.5rem, 5vw, 5rem)" }}
          >
            Choose Your<br />
            <span className="text-white/20">Commitment.</span>
          </h2>
        </FadeUp>

        {/* Tiers — horizontal editorial layout */}
        <div className="mt-20 grid gap-[1px] bg-white/[0.04] lg:grid-cols-3">
          {tiers.map((tier, i) => (
            <FadeUp key={tier.name} delay={i * 0.15}>
              <div
                className={`group relative bg-[#050505] p-10 sm:p-14 transition-all duration-700 hover:bg-[#0a0a0a] ${
                  tier.featured ? "lg:bg-[#0c0c0c]" : ""
                }`}
              >
                {/* Tier label */}
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-medium uppercase tracking-[0.4em] text-white/30">
                    0{i + 1}
                  </span>
                  {tier.featured && (
                    <span className="text-[9px] font-medium uppercase tracking-[0.3em] text-white/50 border border-white/10 px-3 py-1">
                      Recommended
                    </span>
                  )}
                </div>

                {/* Name */}
                <h3 className="mt-8 font-display text-4xl sm:text-5xl tracking-[0.06em] uppercase">
                  {tier.name}
                </h3>

                {/* Price */}
                <div className="mt-6 flex items-baseline gap-2">
                  <span className="font-display text-6xl sm:text-7xl tracking-wider">
                    ${tier.price}
                  </span>
                  <span className="text-[11px] uppercase tracking-[0.2em] text-white/25">
                    {tier.interval}
                  </span>
                </div>

                {/* Description */}
                <p className="mt-4 text-[13px] text-white/30 font-light">
                  {tier.description}
                </p>

                {/* Divider */}
                <div className="mt-10 h-[1px] bg-white/[0.06]" />

                {/* Details */}
                <ul className="mt-10 space-y-4">
                  {tier.details.map((detail) => (
                    <li
                      key={detail}
                      className="flex items-center gap-4 text-[13px] text-white/40"
                    >
                      <span className="block h-[1px] w-3 bg-white/20" />
                      {detail}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <motion.a
                  href="#contact"
                  whileHover={{ letterSpacing: "0.35em" }}
                  transition={{ duration: 0.4 }}
                  className={`mt-12 block py-5 text-center text-[11px] font-medium uppercase tracking-[0.25em] transition-all duration-500 ${
                    tier.featured
                      ? "bg-white text-black hover:bg-white/90"
                      : "border border-white/10 text-white/50 hover:border-white/30 hover:text-white"
                  }`}
                >
                  {tier.name === "Private" ? "Apply" : "Get Started"}
                </motion.a>
              </div>
            </FadeUp>
          ))}
        </div>

        {/* Note */}
        <FadeUp delay={0.5}>
          <p className="mt-12 text-[11px] uppercase tracking-[0.3em] text-white/15 text-center">
            No contracts · Cancel anytime · All prices in USD
          </p>
        </FadeUp>
      </div>
    </section>
  );
}
