import Image from "next/image";
import { ArrowRight, Play, Dumbbell, Users, HeartHandshake } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-[100dvh] flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/95 to-transparent z-10" />

      <div className="absolute inset-0">
        <Image
          src="/images/hero.png"
          alt="Athlete training at PowerFit gym"
          fill
          className="object-cover object-[75%_center] lg:object-center"
          priority
          sizes="100vw"
        />
      </div>

      <div className="relative z-20 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-accent mb-6">
            Stronger Body. Stronger Mind. Better You.
          </p>

          <h1
            className="font-heading font-bold uppercase leading-[1.05] tracking-tight"
            style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}
          >
            Transform
            <br />
            Your Body,
            <br />
            Transform
            <br />
            Your{" "}
            <span className="bg-gradient-to-r from-blue-accent to-cyan-400 bg-clip-text text-transparent">
              Life.
            </span>
          </h1>

          <p className="mt-6 max-w-lg text-neutral-400 leading-relaxed text-lg">
            World-class training, premium equipment, and a community that pushes
            you to be your best.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-lg bg-blue-accent px-7 py-3.5 font-semibold text-white uppercase text-sm tracking-wide transition-all hover:bg-blue-500 hover:shadow-xl hover:shadow-blue-accent/25 active:scale-[0.97]"
            >
              Start Your Journey
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </a>
            <button
              type="button"
              className="inline-flex items-center gap-3 rounded-lg border border-white/10 bg-white/5 px-6 py-3.5 text-sm font-medium text-neutral-300 transition-all hover:bg-white/10 hover:text-white active:scale-[0.97]"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/20 bg-white/5">
                <Play size={14} className="ml-0.5" />
              </span>
              Watch Video
            </button>
          </div>

          <div className="mt-14 flex flex-wrap items-center gap-8 text-sm text-neutral-500">
            <div className="flex items-center gap-2.5">
              <Dumbbell size={18} className="text-blue-accent" />
              <span>Expert Trainers</span>
            </div>
            <div className="flex items-center gap-2.5">
              <Users size={18} className="text-blue-accent" />
              <span>Premium Equipment</span>
            </div>
            <div className="flex items-center gap-2.5">
              <HeartHandshake size={18} className="text-blue-accent" />
              <span>Supportive Community</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
