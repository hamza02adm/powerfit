"use client";

import { FadeUp } from "@/components/ui/motion";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: 29,
    description: "Perfect for getting started",
    features: ["Gym floor access", "Locker room access", "2 group classes / week", "Basic fitness assessment"],
    featured: false,
  },
  {
    name: "Performance",
    price: 49,
    description: "Our most popular plan",
    features: [
      "Full gym access",
      "Unlimited group classes",
      "1 personal session / month",
      "Nutrition guidance",
      "InBody composition scan",
    ],
    featured: true,
  },
  {
    name: "Elite",
    price: 79,
    description: "For those who want it all",
    features: [
      "24/7 premium access",
      "Unlimited everything",
      "4 personal sessions / month",
      "Custom meal plans",
      "Priority booking",
      "Recovery suite access",
    ],
    featured: false,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="py-28 sm:py-36">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
        <FadeUp>
          <div className="text-center">
            <span className="text-[11px] font-semibold uppercase tracking-[0.3em] text-brand">
              Pricing
            </span>
            <h2 className="mt-5 font-display text-4xl tracking-wider uppercase sm:text-5xl lg:text-6xl">
              Invest In Yourself
            </h2>
          </div>
        </FadeUp>

        <div className="mt-16 grid items-center gap-5 lg:grid-cols-3">
          {plans.map((plan, i) => (
            <FadeUp key={plan.name} delay={i * 0.1}>
              <div
                className={`group relative rounded-xl p-8 transition-all duration-500 sm:p-10 ${
                  plan.featured
                    ? "bg-card scale-[1.02] shadow-[0_0_60px_rgba(59,130,246,0.08)] lg:py-14"
                    : "bg-card hover:bg-[#161616]"
                }`}
              >
                <div
                  className={`absolute inset-0 rounded-xl border transition-colors duration-500 ${
                    plan.featured
                      ? "border-brand/30 shadow-[inset_0_0_30px_rgba(59,130,246,0.05)]"
                      : "border-white/[0.06] group-hover:border-brand/20"
                  }`}
                />
                <div className="relative">
                  {plan.featured && (
                    <span className="mb-6 inline-block rounded-full bg-brand/10 px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-brand">
                      Most Popular
                    </span>
                  )}
                  <h3 className="font-display text-3xl tracking-wider uppercase">
                    {plan.name}
                  </h3>
                  <p className="mt-1 text-sm text-muted">{plan.description}</p>
                  <div className="mt-6 flex items-baseline gap-1">
                    <span className="font-display text-5xl tracking-wider sm:text-6xl">
                      ${plan.price}
                    </span>
                    <span className="text-sm text-muted">/month</span>
                  </div>
                  <ul className="mt-8 space-y-3">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-center gap-3 text-sm text-muted">
                        <Check size={16} className="shrink-0 text-brand" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="#contact"
                    className={`mt-8 block rounded-md py-4 text-center text-[13px] font-semibold uppercase tracking-wider transition-all duration-300 ${
                      plan.featured
                        ? "bg-brand text-white hover:bg-blue-500 hover:shadow-[0_0_40px_rgba(59,130,246,0.3)]"
                        : "border border-white/[0.08] bg-white/[0.03] text-white/80 hover:bg-white/[0.06] hover:text-white"
                    }`}
                  >
                    Get Started
                  </a>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>

        <FadeUp delay={0.3}>
          <p className="mt-10 text-center text-sm text-muted">
            No contracts. No hidden fees. Cancel anytime.
          </p>
        </FadeUp>
      </div>
    </section>
  );
}
