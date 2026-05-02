import { ScrollAnimate } from "@/components/ui/scroll-animate";
import { ArrowRight } from "lucide-react";

const testimonials = [
  {
    name: "Alex R.",
    quote:
      "PowerFit changed my life. The trainers are incredible and the community keeps me motivated every day.",
  },
  {
    name: "Priya S.",
    quote:
      "The best gym I've ever been to. The equipment is top-notch and the atmosphere is unmatched.",
  },
  {
    name: "James T.",
    quote:
      "Personal training here took my fitness to the next level. Highly recommend PowerFit!",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-24 sm:py-32">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollAnimate>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <span className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-accent">
                Testimonials
              </span>
              <h2
                className="mt-3 font-heading font-bold tracking-tight"
                style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)" }}
              >
                Real People. Real Results.
              </h2>
            </div>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-sm font-medium text-neutral-400 transition-colors hover:text-white shrink-0"
            >
              View All Reviews <ArrowRight size={16} />
            </a>
          </div>
        </ScrollAnimate>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <ScrollAnimate key={t.name} delay={i * 100}>
              <div className="rounded-2xl bg-neutral-900 p-6 sm:p-8 transition-all hover:bg-neutral-800/80">
                <div className="text-4xl font-heading text-blue-accent/20 leading-none select-none">
                  &ldquo;&ldquo;
                </div>
                <blockquote className="mt-2 text-neutral-300 leading-relaxed">
                  {t.quote}
                </blockquote>
                <p className="mt-6 text-sm font-medium text-neutral-500">— {t.name}</p>
              </div>
            </ScrollAnimate>
          ))}
        </div>
      </div>
    </section>
  );
}
