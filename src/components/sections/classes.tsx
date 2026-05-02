import { ScrollAnimate } from "@/components/ui/scroll-animate";
import { Dumbbell, Flame, Swords, Leaf, HeartPulse, UserRound, ArrowRight } from "lucide-react";

const classes = [
  {
    icon: Dumbbell,
    name: "Weightlifting",
    description: "Build strength and muscle with focused lifting programs.",
  },
  {
    icon: Flame,
    name: "CrossFit",
    description: "High-intensity functional workouts for all levels.",
  },
  {
    icon: Swords,
    name: "Boxing",
    description: "Improve technique, strength, and confidence.",
  },
  {
    icon: Leaf,
    name: "Yoga",
    description: "Increase flexibility, reduce stress, and find balance.",
  },
  {
    icon: HeartPulse,
    name: "Cardio",
    description: "Boost endurance with exciting cardio sessions.",
  },
  {
    icon: UserRound,
    name: "Personal Training",
    description: "One-on-one coaching tailored to your goals.",
  },
];

export function Classes() {
  return (
    <section id="classes" className="py-24 sm:py-32">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollAnimate>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <span className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-accent">
                Classes
              </span>
              <h2
                className="mt-3 font-heading font-bold tracking-tight"
                style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)" }}
              >
                Find What Moves You
              </h2>
            </div>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-sm font-medium text-neutral-400 transition-colors hover:text-white shrink-0"
            >
              View All Classes <ArrowRight size={16} />
            </a>
          </div>
        </ScrollAnimate>

        <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6 sm:gap-4">
          {classes.map((cls, i) => (
            <ScrollAnimate key={cls.name} delay={i * 60}>
              <div className="group rounded-2xl border border-white/5 bg-white/[0.02] p-5 transition-all hover:border-blue-accent/20 hover:bg-white/[0.04] sm:p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-accent/10 text-blue-accent transition-colors group-hover:bg-blue-accent/20">
                  <cls.icon size={24} />
                </div>
                <h3 className="mt-4 text-sm font-bold font-heading sm:text-base">
                  {cls.name}
                </h3>
                <p className="mt-1.5 text-xs leading-relaxed text-neutral-500 sm:text-sm">
                  {cls.description}
                </p>
                <div className="mt-4">
                  <ArrowRight
                    size={16}
                    className="text-blue-accent opacity-0 transition-all group-hover:opacity-100 group-hover:translate-x-1"
                  />
                </div>
              </div>
            </ScrollAnimate>
          ))}
        </div>
      </div>
    </section>
  );
}
