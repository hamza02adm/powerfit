"use client";

import { FadeUp, Counter } from "@/components/ui/motion";

const stats = [
  { value: 500, suffix: "+", label: "Members" },
  { value: 15, suffix: "+", label: "Coaches" },
  { value: 10, suffix: "+", label: "Years Experience" },
  { value: 4.9, suffix: "", label: "Rating", decimal: true },
];

function DecimalCounter({ className }: { className?: string }) {
  return <span className={className}>4.9</span>;
}

export function TrustBar() {
  return (
    <section className="border-y border-white/[0.06] bg-card/50">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
        <FadeUp>
          <div className="grid grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className={`flex flex-col items-center justify-center py-10 lg:py-14 ${
                  i < stats.length - 1 ? "lg:border-r lg:border-white/[0.06]" : ""
                } ${i < 2 ? "border-b lg:border-b-0 border-white/[0.06]" : ""} ${
                  i % 2 === 0 ? "border-r lg:border-r border-white/[0.06]" : "lg:border-r"
                }`}
              >
                <div className="font-display text-4xl tracking-wider sm:text-5xl">
                  {stat.decimal ? (
                    <DecimalCounter />
                  ) : (
                    <Counter target={stat.value} suffix={stat.suffix} />
                  )}
                </div>
                <div className="mt-2 text-xs font-medium uppercase tracking-[0.2em] text-muted">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
