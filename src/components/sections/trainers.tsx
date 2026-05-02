"use client";

import Image from "next/image";
import { FadeUp } from "@/components/ui/motion";

const trainers = [
  { name: "Daniel Hayes", role: "Head Coach — Strength & Conditioning", image: "/images/coach-1.png" },
  { name: "Jessica Lane", role: "Boxing & HIIT Specialist", image: "/images/coach-2.png" },
  { name: "Michael Torres", role: "CrossFit & Functional Training", image: "/images/coach-3.png" },
  { name: "Sarah Kim", role: "Yoga & Recovery Expert", image: "/images/coach-4.png" },
];

export function Trainers() {
  return (
    <section id="trainers" className="py-28 sm:py-36">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
        <FadeUp>
          <div className="text-center">
            <span className="text-[11px] font-semibold uppercase tracking-[0.3em] text-brand">
              The Team
            </span>
            <h2 className="mt-5 font-display text-4xl tracking-wider uppercase sm:text-5xl lg:text-6xl">
              Meet Your Coaches
            </h2>
          </div>
        </FadeUp>

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {trainers.map((t, i) => (
            <FadeUp key={t.name} delay={i * 0.1}>
              <div className="group relative overflow-hidden rounded-xl">
                <div className="aspect-[3/4] relative overflow-hidden rounded-xl">
                  <Image
                    src={t.image}
                    alt={t.name}
                    fill
                    className="object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="font-display text-2xl tracking-wider uppercase">
                    {t.name}
                  </h3>
                  <p className="mt-1 text-xs font-medium uppercase tracking-[0.15em] text-brand">
                    {t.role}
                  </p>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
