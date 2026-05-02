import { ScrollAnimate } from "@/components/ui/scroll-animate";
import { Check, X } from "lucide-react";

const plans = [
  {
    name: "Basic",
    price: 29,
    description: "Perfect for getting started",
    featured: false,
    features: [
      { text: "Full gym access", included: true },
      { text: "Locker room access", included: true },
      { text: "2 group classes/week", included: true },
      { text: "Basic fitness assessment", included: true },
      { text: "Personal training", included: false },
      { text: "Nutrition planning", included: false },
      { text: "Recovery zone access", included: false },
    ],
  },
  {
    name: "Pro",
    price: 49,
    description: "Most popular choice",
    featured: true,
    features: [
      { text: "Full gym access", included: true },
      { text: "Locker room & sauna", included: true },
      { text: "Unlimited group classes", included: true },
      { text: "Full fitness assessment", included: true },
      { text: "2 PT sessions/month", included: true },
      { text: "Basic nutrition guide", included: true },
      { text: "Recovery zone access", included: false },
    ],
  },
  {
    name: "Elite",
    price: 79,
    description: "The complete experience",
    featured: false,
    features: [
      { text: "Full gym access 24/7", included: true },
      { text: "Locker room, sauna & spa", included: true },
      { text: "Unlimited group classes", included: true },
      { text: "Monthly body composition", included: true },
      { text: "4 PT sessions/month", included: true },
      { text: "Custom nutrition plan", included: true },
      { text: "Recovery zone access", included: true },
    ],
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="relative py-24 sm:py-32">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollAnimate>
          <div className="text-center">
            <span className="text-sm font-semibold uppercase tracking-widest text-blue-accent">
              Pricing
            </span>
            <h2
              className="mt-4 font-heading font-bold tracking-tight"
              style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)" }}
            >
              Invest in Yourself
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-neutral-400 text-lg">
              Simple, transparent pricing. No hidden fees. No long-term contracts.
              Cancel anytime.
            </p>
          </div>
        </ScrollAnimate>

        <div className="mt-16 grid gap-6 lg:grid-cols-3 items-start">
          {plans.map((plan, i) => (
            <ScrollAnimate key={plan.name} delay={i * 120}>
              <div
                className={`relative rounded-2xl border p-6 sm:p-8 transition-all ${
                  plan.featured
                    ? "border-blue-accent/40 bg-blue-accent/[0.04] shadow-xl shadow-blue-accent/10"
                    : "border-white/5 bg-white/[0.02] hover:border-white/10"
                }`}
              >
                {plan.featured && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-blue-accent px-4 py-1 text-xs font-semibold text-white">
                    Most Popular
                  </div>
                )}

                <div className="text-center">
                  <h3 className="text-lg font-bold font-heading">{plan.name}</h3>
                  <p className="mt-1 text-sm text-neutral-500">{plan.description}</p>
                  <div className="mt-6 flex items-baseline justify-center gap-1">
                    <span className="text-sm text-neutral-500">$</span>
                    <span
                      className="font-heading font-bold leading-none"
                      style={{ fontSize: "clamp(2.5rem, 4vw, 3.5rem)" }}
                    >
                      {plan.price}
                    </span>
                    <span className="text-sm text-neutral-500">/mo</span>
                  </div>
                </div>

                <div className="mt-8 space-y-3">
                  {plan.features.map((feature) => (
                    <div key={feature.text} className="flex items-center gap-3">
                      {feature.included ? (
                        <Check size={16} className="shrink-0 text-blue-accent" />
                      ) : (
                        <X size={16} className="shrink-0 text-neutral-600" />
                      )}
                      <span
                        className={`text-sm ${
                          feature.included ? "text-neutral-300" : "text-neutral-600"
                        }`}
                      >
                        {feature.text}
                      </span>
                    </div>
                  ))}
                </div>

                <a
                  href="#contact"
                  className={`mt-8 block rounded-xl py-3.5 text-center text-sm font-semibold transition-all active:scale-[0.97] ${
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
