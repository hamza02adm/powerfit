import { ScrollAnimate } from "@/components/ui/scroll-animate";

const stats = [
  { value: "500+", label: "Members", description: "Growing stronger every day" },
  { value: "15+", label: "Trainers", description: "Certified experts by your side" },
  { value: "10+", label: "Years", description: "Of transforming lives" },
];

export function About() {
  return (
    <section id="about" className="py-24 sm:py-32">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollAnimate>
          <div className="rounded-2xl bg-neutral-900 p-8 sm:p-12 lg:p-16">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-20 items-center">
              <div>
                <span className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-accent">
                  About PowerFit
                </span>
                <h2
                  className="mt-4 font-heading font-bold leading-tight"
                  style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)" }}
                >
                  More Than a Gym.
                  <br />
                  <span className="text-neutral-500">We&apos;re a Movement.</span>
                </h2>
                <p className="mt-6 text-neutral-400 leading-relaxed">
                  For over a decade, PowerFit has helped thousands of people
                  discover their strength. Our mission is simple: empower you with
                  the tools, training, and support to become the strongest version
                  of yourself.
                </p>
                <a
                  href="#classes"
                  className="mt-8 inline-flex items-center gap-2 rounded-lg border border-neutral-700 px-6 py-2.5 text-sm font-medium text-white transition-all hover:border-neutral-500 hover:bg-neutral-800"
                >
                  Learn More
                </a>
              </div>

              <div className="grid grid-cols-3 gap-6 lg:gap-8">
                {stats.map((stat, i) => (
                  <ScrollAnimate key={stat.label} delay={i * 120}>
                    <div className="text-center">
                      <div
                        className="font-heading font-bold text-blue-accent"
                        style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)" }}
                      >
                        {stat.value}
                      </div>
                      <div className="mt-1 text-sm font-semibold">{stat.label}</div>
                      <div className="mt-1 text-xs text-neutral-600 leading-snug">
                        {stat.description}
                      </div>
                    </div>
                  </ScrollAnimate>
                ))}
              </div>
            </div>
          </div>
        </ScrollAnimate>
      </div>
    </section>
  );
}
