"use client";

import { FadeUp } from "@/components/ui/motion";
import { ArrowRight } from "lucide-react";

export function CTA() {
  return (
    <section className="relative overflow-hidden py-32 sm:py-40">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,#3B82F610_0%,transparent_70%)]" />
      <div className="relative z-10 mx-auto w-full max-w-4xl px-5 text-center sm:px-8">
        <FadeUp>
          <h2 className="font-display text-4xl tracking-wider uppercase sm:text-6xl lg:text-7xl">
            Ready To Become{" "}
            <span className="bg-gradient-to-r from-brand to-glow bg-clip-text text-transparent">
              Unrecognizable
            </span>
            ?
          </h2>
          <p className="mx-auto mt-6 max-w-md text-lg text-muted leading-relaxed">
            Your strongest version starts now.
          </p>
          <div className="mt-10">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-md bg-brand px-10 py-5 text-[13px] font-semibold uppercase tracking-wider text-white transition-all duration-300 hover:bg-blue-500 hover:shadow-[0_0_50px_rgba(59,130,246,0.35)]"
            >
              Join PowerFit
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
