import Image from "next/image";
import { ScrollAnimate } from "@/components/ui/scroll-animate";
import { ArrowRight } from "lucide-react";

const trainers = [
  {
    name: "Daniel H.",
    specialty: "Strength Coach",
    description: "Specializes in strength training and muscle building.",
    image: "/images/coach-1.png",
  },
  {
    name: "Jessica L.",
    specialty: "Performance Coach",
    description: "Expert in functional training and athletic performance.",
    image: "/images/coach-2.png",
  },
  {
    name: "Michael T.",
    specialty: "Boxing Coach",
    description: "Former pro boxer with a passion for teaching and technique.",
    image: "/images/coach-3.png",
  },
  {
    name: "Sarah K.",
    specialty: "Yoga Instructor",
    description: "Helps you find balance and strength through mindful movement.",
    image: "/images/coach-4.png",
  },
];

export function Trainers() {
  return (
    <section id="trainers" className="py-24 sm:py-32">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollAnimate>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <span className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-accent">
                Our Trainers
              </span>
              <h2
                className="mt-3 font-heading font-bold tracking-tight"
                style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)" }}
              >
                Learn From the Best
              </h2>
            </div>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-sm font-medium text-neutral-400 transition-colors hover:text-white shrink-0"
            >
              View All Trainers <ArrowRight size={16} />
            </a>
          </div>
        </ScrollAnimate>

        <div className="mt-12 grid grid-cols-2 gap-3 lg:grid-cols-4 lg:gap-5">
          {trainers.map((trainer, i) => (
            <ScrollAnimate key={trainer.name} delay={i * 80}>
              <div className="group relative overflow-hidden rounded-2xl bg-neutral-900 transition-all hover:bg-neutral-800">
                <div className="relative aspect-[3/4] overflow-hidden">
                  <Image
                    src={trainer.image}
                    alt={trainer.name}
                    fill
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-transparent to-transparent" />
                </div>
                <div className="relative -mt-16 p-4 sm:p-5">
                  <p className="text-xs font-semibold uppercase tracking-wider text-blue-accent">
                    {trainer.name}
                  </p>
                  <p className="mt-0.5 text-sm font-bold font-heading">{trainer.specialty}</p>
                  <p className="mt-1.5 text-xs text-neutral-500 leading-relaxed line-clamp-2">
                    {trainer.description}
                  </p>
                </div>
              </div>
            </ScrollAnimate>
          ))}
        </div>
      </div>
    </section>
  );
}
