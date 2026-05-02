"use client";

import { useState, type FormEvent } from "react";
import Image from "next/image";
import { ScrollAnimate } from "@/components/ui/scroll-animate";
import { MapPin, Clock, Phone, Send, Loader2, CheckCircle2, ArrowRight } from "lucide-react";

export function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
      honeypot: (form.elements.namedItem("website") as HTMLInputElement).value,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error();
      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="py-24 sm:py-32">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollAnimate>
          <div>
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-accent">
              Contact Us
            </span>
            <h2
              className="mt-3 font-heading font-bold tracking-tight"
              style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)" }}
            >
              We&apos;d Love to Hear From You
            </h2>
          </div>
        </ScrollAnimate>

        <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_1fr] lg:gap-12">
          <ScrollAnimate>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="hidden">
                <input type="text" name="website" tabIndex={-1} autoComplete="off" />
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <input
                  name="name"
                  type="text"
                  required
                  placeholder="Your Name"
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-neutral-600 transition-colors focus:border-blue-accent focus:outline-none focus:ring-1 focus:ring-blue-accent"
                />
                <input
                  name="email"
                  type="email"
                  required
                  placeholder="Your Email"
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-neutral-600 transition-colors focus:border-blue-accent focus:outline-none focus:ring-1 focus:ring-blue-accent"
                />
              </div>

              <textarea
                name="message"
                required
                rows={5}
                placeholder="Your Message"
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-neutral-600 transition-colors focus:border-blue-accent focus:outline-none focus:ring-1 focus:ring-blue-accent resize-none"
              />

              <button
                type="submit"
                disabled={status === "sending" || status === "sent"}
                className="inline-flex items-center gap-2 rounded-lg bg-blue-accent px-7 py-3 text-sm font-semibold text-white uppercase tracking-wide transition-all hover:bg-blue-500 hover:shadow-lg hover:shadow-blue-accent/25 active:scale-[0.97] disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === "sending" && <Loader2 size={16} className="animate-spin" />}
                {status === "sent" && <CheckCircle2 size={16} />}
                {status === "idle" && <Send size={16} />}
                {status === "error" && <Send size={16} />}
                {status === "sending"
                  ? "Sending..."
                  : status === "sent"
                    ? "Message Sent!"
                    : status === "error"
                      ? "Try Again"
                      : "Send Message"}
                {(status === "idle" || status === "error") && (
                  <ArrowRight size={14} />
                )}
              </button>

              {status === "error" && (
                <p className="text-sm text-red-400">
                  Something went wrong. Please try again or email us directly.
                </p>
              )}
            </form>
          </ScrollAnimate>

          <ScrollAnimate delay={100}>
            <div className="space-y-5">
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                <div className="rounded-xl border border-white/5 bg-white/[0.02] p-5">
                  <div className="flex items-start gap-3">
                    <MapPin size={18} className="mt-0.5 shrink-0 text-blue-accent" />
                    <div>
                      <h3 className="text-sm font-bold text-blue-accent uppercase tracking-wider">Address</h3>
                      <p className="mt-1.5 text-sm text-neutral-400 leading-relaxed">
                        123 PowerFit Way<br />New York, NY 10001
                      </p>
                    </div>
                  </div>
                </div>

                <div className="rounded-xl border border-white/5 bg-white/[0.02] p-5">
                  <div className="flex items-start gap-3">
                    <Clock size={18} className="mt-0.5 shrink-0 text-blue-accent" />
                    <div>
                      <h3 className="text-sm font-bold text-blue-accent uppercase tracking-wider">Hours</h3>
                      <div className="mt-1.5 space-y-0.5 text-sm text-neutral-400">
                        <p>Mon – Fri: 5:00 AM – 10:00 PM</p>
                        <p>Sat – Sun: 7:00 AM – 8:00 PM</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="rounded-xl border border-white/5 bg-white/[0.02] p-5 sm:col-span-2 lg:col-span-1 xl:col-span-2">
                  <div className="flex items-start gap-3">
                    <Phone size={18} className="mt-0.5 shrink-0 text-blue-accent" />
                    <div>
                      <h3 className="text-sm font-bold text-blue-accent uppercase tracking-wider">Phone</h3>
                      <a
                        href="tel:+12125550123"
                        className="mt-1.5 block text-sm text-neutral-400 transition-colors hover:text-white"
                      >
                        (212) 555-0123
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative overflow-hidden rounded-2xl aspect-[16/9]">
                <Image
                  src="/images/gym-interior.png"
                  alt="PowerFit gym interior"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </ScrollAnimate>
        </div>
      </div>
    </section>
  );
}
