"use client";

import Image from "next/image";
import { FadeUp } from "@/components/ui/motion";

export function FeatureImage() {
  return (
    <section className="relative h-[70dvh] min-h-[500px] overflow-hidden">
      <Image
        src="/images/gym-interior.png"
        alt="PowerFit gym interior"
        fill
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative z-10 flex h-full items-center justify-center text-center">
        <FadeUp>
          <p className="font-display text-4xl tracking-[0.25em] uppercase sm:text-6xl lg:text-7xl">
            More Than A Gym.{" "}
            <span className="bg-gradient-to-r from-brand to-glow bg-clip-text text-transparent">
              A Standard.
            </span>
          </p>
        </FadeUp>
      </div>
    </section>
  );
}
