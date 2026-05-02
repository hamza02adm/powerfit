import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative flex min-h-[100dvh] items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,#3B82F610_0%,transparent_70%)]" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[600px] w-[800px] rounded-full bg-blue-accent/5 blur-[120px]" />

      <div className="relative mx-auto w-full max-w-7xl px-4 pt-24 pb-16 text-center sm:px-6 sm:pt-32 sm:pb-24 lg:px-8">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-neutral-300 mb-8">
          <span className="h-1.5 w-1.5 rounded-full bg-blue-accent animate-pulse" />
          Now open — Limited founding memberships
        </div>

        <h1
          className="mx-auto max-w-4xl font-heading font-bold leading-[1.1] tracking-tight"
          style={{ fontSize: "clamp(2.25rem, 5.5vw, 4.5rem)" }}
        >
          Transform Your Body,{" "}
          <span className="bg-gradient-to-r from-blue-accent to-cyan-400 bg-clip-text text-transparent">
            Transform Your Life
          </span>
        </h1>

        <p
          className="mx-auto mt-6 max-w-2xl text-neutral-400 leading-relaxed"
          style={{ fontSize: "clamp(1rem, 1.8vw, 1.25rem)" }}
        >
          World-class equipment, expert trainers, and a community that pushes you
          beyond your limits. Your transformation starts with a single step.
        </p>

        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-xl bg-blue-accent px-8 py-4 text-lg font-semibold text-white transition-all hover:bg-blue-500 hover:shadow-xl hover:shadow-blue-accent/25 active:scale-[0.97]"
          >
            Start Your Journey
            <ArrowRight
              size={20}
              className="transition-transform group-hover:translate-x-1"
            />
          </a>
          <a
            href="#about"
            className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-8 py-4 text-lg font-medium text-neutral-300 transition-all hover:bg-white/10 hover:text-white active:scale-[0.97]"
          >
            Learn More
          </a>
        </div>

        <div className="mt-16 flex items-center justify-center gap-8 text-sm text-neutral-500 sm:gap-12">
          <div>
            <span className="block text-2xl font-bold text-white font-heading sm:text-3xl">500+</span>
            Members
          </div>
          <div className="h-8 w-px bg-white/10" />
          <div>
            <span className="block text-2xl font-bold text-white font-heading sm:text-3xl">15+</span>
            Trainers
          </div>
          <div className="h-8 w-px bg-white/10" />
          <div>
            <span className="block text-2xl font-bold text-white font-heading sm:text-3xl">10+</span>
            Years
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="h-10 w-6 rounded-full border-2 border-white/20 flex items-start justify-center pt-2">
          <div className="h-2 w-1 rounded-full bg-white/40" />
        </div>
      </div>
    </section>
  );
}
