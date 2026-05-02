"use client";

import { useState } from "react";
import { ScrollAnimate } from "@/components/ui/scroll-animate";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Basic",
    monthly: 29,
    yearly: 23,
    features: ["Gym Access", "Basic Equipment", "Group Classes", "Locker Room Access"],
    featured: false,
  },
  {
    name: "Pro",
    monthly: 49,
    yearly: 39,
    features: [
      "Everything in Basic",
      "All Group Classes",
      "Personalized Plan",
      "Priority Support",
    ],
    featured: true,
  },
  {
    name: "Elite",
    monthly: 79,
    yearly: 63,
    features: [
      "Everything in Pro",
      "1-on-1 Personal Training",
      "Nutrition Guidance",
      "VIP Access & Perks",
    ],
    featured: false,
  },
];

export function Pricing() {
  const [annual, setAnnual] = useState(false);

  return (
    <section id="pricing" className="py-24 sm:py-32">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollAnimate>
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <span className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-accent">
                Pricing
              </span>
              <h2
                className="mt-3 font-heading font-bold tracking-tight"
                style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)" }}
              >
                Simple. Transparent. Flexible.
              </h2>
            </div>

            <div className="flex items-center gap-1 rounded-lg border border-white/10 bg-white/5 p-1 self-start">
              <button
                type="button"
                onClick={() => setAnnual(false)}
                className={`rounded-md px-4 py-2 text-sm font-medium transition-all ${
                  !annual
                    ? "bg-blue-accent text-white"
                    : "text-neutral-400 hover:text-white"
                }`}
              >
                Monthly
              </button>
              <button
                type="button"
                onClick={() => setAnnual(true)}
                className={`rounded-md px-4 py-2 text-sm font-medium transition-all ${
                  annual
                    ? "bg-blue-accent text-white"
                    : "text-neutral-400 hover:text-white"
                }`}
              >
                Yearly{" "}
                <span className="ml-1 rounded bg-emerald-500/20 px-1.5 py-0.5 text-xs text-emerald-400">
                  Save 20%
                </span>
              </button>
            </div>
          </div>
        </ScrollAnimate>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {plans.map((plan, i) => (
            <ScrollAnimate key={plan.name} delay={i * 100}>
              <div
                className={`relative rounded-2xl border p-6 sm:p-8 transition-all ${
                  plan.featured
                    ? "border-blue-accent/40 bg-blue-accent/[0.04] shadow-xl shadow-blue-accent/5"
                    : "border-white/5 bg-white/[0.02] hover:border-white/10"
                }`}
              >
                {plan.featured && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-blue-accent px-4 py-1 text-xs font-bold uppercase tracking-wider text-white">
                    Most Popular
                  </div>
                )}

                <h3 className="text-lg font-bold font-heading">{plan.name}</h3>
                <div className="mt-4 flex items-baseline gap-1">
                  <span className="text-sm text-neutral-500">$</span>
                  <span
                    className="font-heading font-bold tabular-nums"
                    style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)" }}
                  >
                    {annual ? plan.yearly : plan.monthly}
                  </span>
                  <span className="text-sm text-neutral-500">/mo</span>
                </div>

                <div className="mt-6 space-y-3">
                  {plan.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-3">
                      <Check size={16} className="shrink-0 text-blue-accent" />
                      <span className="text-sm text-neutral-300">{feature}</span>
                    </div>
                  ))}
                </div>

                <a
                  href="#contact"
                  className={`mt-8 block rounded-xl py-3 text-center text-sm font-semibold transition-all active:scale-[0.97] ${
                    plan.featured
                      ? "bg-blue-accent text-white hover:bg-blue-500 hover:shadow-lg hover:shadow-blue-accent/25"
                      : "border border-white/10 bg-white/5 text-white hover:bg-white/10"
                  }`}
                >
                  Get Started
                </a>
              </div>
            </ScrollAnimate>
          ))}
        </div>
      </div>
    </section>
  );
}
