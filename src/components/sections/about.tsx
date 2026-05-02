import { ScrollAnimate } from "@/components/ui/scroll-animate";
import { Target, Users, Trophy } from "lucide-react";

const stats = [
  { icon: Users, value: "500+", label: "Active Members", description: "Training with us daily" },
  { icon: Target, value: "15+", label: "Expert Trainers", description: "Certified professionals" },
  { icon: Trophy, value: "10+", label: "Years Strong", description: "Of proven results" },
];

export function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-20 items-center">
          <ScrollAnimate>
            <div>
              <span className="text-sm font-semibold uppercase tracking-widest text-blue-accent">
                About Us
              </span>
              <h2
                className="mt-4 font-heading font-bold leading-tight tracking-tight"
                style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)" }}
              >
                More Than a Gym —{" "}
                <span className="text-neutral-400">A Community</span>
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-neutral-400">
                PowerFit was built on a simple belief: everyone deserves access to
                world-class fitness. Our 15,000 sq ft facility is equipped with
                premium gear, dedicated training zones, and recovery spaces
                designed to help you perform at your peak.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-neutral-400">
                Whether you&apos;re just starting out or training for competition,
                our certified trainers and supportive community will help you
                crush every goal you set.
              </p>
            </div>
          </ScrollAnimate>

          <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1 lg:gap-5">
            {stats.map((stat, i) => (
              <ScrollAnimate key={stat.label} delay={i * 100}>
                <div className="group rounded-2xl border border-white/5 bg-white/[0.02] p-6 transition-all hover:border-blue-accent/20 hover:bg-white/[0.04]">
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-accent/10 text-blue-accent">
                      <stat.icon size={24} />
                    </div>
                    <div>
                      <div className="text-2xl font-bold font-heading sm:text-3xl">
                        {stat.value}
                      </div>
                      <div className="text-sm font-medium text-white">
                        {stat.label}
                      </div>
                      <div className="text-xs text-neutral-500">
                        {stat.description}
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollAnimate>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
