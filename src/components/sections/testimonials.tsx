import { ScrollAnimate } from "@/components/ui/scroll-animate";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "James Rivera",
    stars: 5,
    quote:
      "I've been to a lot of gyms, but PowerFit is different. The trainers actually care about your progress, and the community keeps you accountable. Down 30 lbs in 6 months.",
    initials: "JR",
    role: "Member for 2 years",
  },
  {
    name: "Aisha Patel",
    stars: 5,
    quote:
      "The CrossFit classes are insane — in the best way. Sarah pushes you hard but always keeps it safe. Best investment I've made in my health.",
    initials: "AP",
    role: "Member for 1 year",
  },
  {
    name: "Tom Fischer",
    stars: 5,
    quote:
      "As someone who was intimidated by gyms, PowerFit made me feel welcome from day one. The Elite plan with personal training sessions changed everything for me.",
    initials: "TF",
    role: "Member for 8 months",
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: count }).map((_, i) => (
        <Star
          key={i}
          size={16}
          className="fill-amber-400 text-amber-400"
        />
      ))}
    </div>
  );
}

export function Testimonials() {
  return (
    <section id="testimonials" className="relative py-24 sm:py-32">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollAnimate>
          <div className="text-center">
            <span className="text-sm font-semibold uppercase tracking-widest text-blue-accent">
              Testimonials
            </span>
            <h2
              className="mt-4 font-heading font-bold tracking-tight"
              style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)" }}
            >
              What Our Members Say
            </h2>
          </div>
        </ScrollAnimate>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <ScrollAnimate key={t.name} delay={i * 100}>
              <div className="flex h-full flex-col rounded-2xl border border-white/5 bg-white/[0.02] p-6 sm:p-8 transition-all hover:border-blue-accent/20 hover:bg-white/[0.04]">
                <Stars count={t.stars} />
                <blockquote className="mt-4 flex-1 text-neutral-300 leading-relaxed">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <div className="mt-6 flex items-center gap-3 border-t border-white/5 pt-5">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-accent/10 text-sm font-bold text-blue-accent">
                    {t.initials}
                  </div>
                  <div>
                    <div className="text-sm font-semibold">{t.name}</div>
                    <div className="text-xs text-neutral-500">{t.role}</div>
                  </div>
                </div>
              </div>
            </ScrollAnimate>
          ))}
        </div>
      </div>
    </section>
  );
}
