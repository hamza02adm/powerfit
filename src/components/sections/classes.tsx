import { ScrollAnimate } from "@/components/ui/scroll-animate";
import { Dumbbell, Flame, Swords, Leaf, HeartPulse, UserRound } from "lucide-react";

const classes = [
  {
    icon: Dumbbell,
    name: "Weightlifting",
    description: "Build raw strength with structured progressive overload programs and Olympic lifting techniques.",
  },
  {
    icon: Flame,
    name: "CrossFit",
    description: "High-intensity functional training that combines cardio, gymnastics, and weightlifting.",
  },
  {
    icon: Swords,
    name: "Boxing",
    description: "Learn proper technique while getting an incredible full-body cardio workout.",
  },
  {
    icon: Leaf,
    name: "Yoga",
    description: "Improve flexibility, balance, and mental clarity with guided flow and recovery sessions.",
  },
  {
    icon: HeartPulse,
    name: "Cardio",
    description: "Torch calories and boost endurance with HIIT, spin, and circuit training classes.",
  },
  {
    icon: UserRound,
    name: "Personal Training",
    description: "One-on-one sessions tailored to your goals with a dedicated certified trainer.",
  },
];

export function Classes() {
  return (
    <section id="classes" className="relative py-24 sm:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,#3B82F608_0%,transparent_50%)]" />
      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollAnimate>
          <div className="text-center">
            <span className="text-sm font-semibold uppercase tracking-widest text-blue-accent">
              Our Classes
            </span>
            <h2
              className="mt-4 font-heading font-bold tracking-tight"
              style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)" }}
            >
              Find Your Perfect Workout
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-neutral-400 text-lg">
              From high-intensity training to mindful recovery — we have a class
              for every fitness level and goal.
            </p>
          </div>
        </ScrollAnimate>

        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {classes.map((cls, i) => (
            <ScrollAnimate key={cls.name} delay={i * 80}>
              <div className="group relative rounded-2xl border border-white/5 bg-white/[0.02] p-6 transition-all hover:border-blue-accent/20 hover:bg-white/[0.04] sm:p-8">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-blue-accent/10 text-blue-accent transition-colors group-hover:bg-blue-accent/20">
                  <cls.icon size={28} />
                </div>
                <h3 className="mt-5 text-xl font-bold font-heading">{cls.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-400">
                  {cls.description}
                </p>
              </div>
            </ScrollAnimate>
          ))}
        </div>
      </div>
    </section>
  );
}
