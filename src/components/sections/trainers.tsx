import { ScrollAnimate } from "@/components/ui/scroll-animate";

const trainers = [
  {
    name: "Marcus Chen",
    specialty: "Strength & Conditioning",
    initials: "MC",
    color: "from-blue-500 to-cyan-500",
    bio: "10+ years coaching competitive athletes and everyday lifters alike.",
  },
  {
    name: "Sarah Johnson",
    specialty: "CrossFit & HIIT",
    initials: "SJ",
    color: "from-violet-500 to-fuchsia-500",
    bio: "CrossFit L3 trainer and former national competitor.",
  },
  {
    name: "David Okafor",
    specialty: "Boxing & MMA",
    initials: "DO",
    color: "from-amber-500 to-orange-500",
    bio: "Professional boxing coach with 8 years of ring experience.",
  },
  {
    name: "Elena Petrova",
    specialty: "Yoga & Recovery",
    initials: "EP",
    color: "from-emerald-500 to-teal-500",
    bio: "Certified yoga therapist specializing in mobility and injury prevention.",
  },
];

export function Trainers() {
  return (
    <section id="trainers" className="relative py-24 sm:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,#3B82F608_0%,transparent_50%)]" />
      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollAnimate>
          <div className="text-center">
            <span className="text-sm font-semibold uppercase tracking-widest text-blue-accent">
              Our Trainers
            </span>
            <h2
              className="mt-4 font-heading font-bold tracking-tight"
              style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)" }}
            >
              Train With the Best
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-neutral-400 text-lg">
              Our certified professionals are here to guide, motivate, and push
              you toward results you didn&apos;t think were possible.
            </p>
          </div>
        </ScrollAnimate>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {trainers.map((trainer, i) => (
            <ScrollAnimate key={trainer.name} delay={i * 100}>
              <div className="group rounded-2xl border border-white/5 bg-white/[0.02] p-6 text-center transition-all hover:border-blue-accent/20 hover:bg-white/[0.04]">
                <div
                  className={`mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br ${trainer.color} text-2xl font-bold text-white font-heading shadow-lg`}
                >
                  {trainer.initials}
                </div>
                <h3 className="mt-5 text-lg font-bold font-heading">
                  {trainer.name}
                </h3>
                <p className="mt-1 text-sm font-medium text-blue-accent">
                  {trainer.specialty}
                </p>
                <p className="mt-3 text-sm text-neutral-500 leading-relaxed">
                  {trainer.bio}
                </p>
              </div>
            </ScrollAnimate>
          ))}
        </div>
      </div>
    </section>
  );
}
