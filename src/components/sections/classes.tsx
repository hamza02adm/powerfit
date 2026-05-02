import { ScrollAnimate } from "@/components/ui/scroll-animate";
import { ArrowRight } from "lucide-react";

const classes = [
  {
    emoji: "🏋️",
    name: "Weightlifting",
    description: "Build strength and muscle with focused lifting programs.",
    color: "from-blue-500/20 to-blue-600/5",
  },
  {
    emoji: "🔥",
    name: "CrossFit",
    description: "High-intensity functional workouts for all levels.",
    color: "from-orange-500/20 to-orange-600/5",
  },
  {
    emoji: "🥊",
    name: "Boxing",
    description: "Improve technique, strength, and confidence.",
    color: "from-red-500/20 to-red-600/5",
  },
  {
    emoji: "🧘",
    name: "Yoga",
    description: "Increase flexibility, reduce stress, and find balance.",
    color: "from-emerald-500/20 to-emerald-600/5",
  },
  {
    emoji: "💪",
    name: "Cardio",
    description: "Boost endurance with exciting cardio sessions.",
    color: "from-violet-500/20 to-violet-600/5",
  },
  {
    emoji: "🎯",
    name: "Personal Training",
    description: "One-on-one coaching tailored to your goals.",
    color: "from-cyan-500/20 to-cyan-600/5",
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
              <div className="group cursor-pointer rounded-2xl bg-neutral-900 p-5 transition-all hover:bg-neutral-800 sm:p-6">
                <div
                  className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${cls.color} text-2xl`}
                >
                  {cls.emoji}
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
                    className="text-blue-accent transition-all group-hover:translate-x-1"
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
