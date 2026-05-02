"use client";

import { useState, type FormEvent } from "react";
import { ScrollAnimate } from "@/components/ui/scroll-animate";
import { MapPin, Clock, Mail, Send, Loader2, CheckCircle2 } from "lucide-react";

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
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,#3B82F608_0%,transparent_50%)]" />
      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollAnimate>
          <div className="text-center">
            <span className="text-sm font-semibold uppercase tracking-widest text-blue-accent">
              Contact
            </span>
            <h2
              className="mt-4 font-heading font-bold tracking-tight"
              style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)" }}
            >
              Ready to Start?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-neutral-400 text-lg">
              Drop us a message and we&apos;ll get back to you within 24 hours.
            </p>
          </div>
        </ScrollAnimate>

        <div className="mt-16 grid gap-12 lg:grid-cols-[1fr_380px] lg:gap-16">
          <ScrollAnimate>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="hidden">
                <input type="text" name="website" tabIndex={-1} autoComplete="off" />
              </div>

              <div>
                <label htmlFor="name" className="block text-sm font-medium text-neutral-300 mb-2">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="John Doe"
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-neutral-600 transition-colors focus:border-blue-accent focus:outline-none focus:ring-1 focus:ring-blue-accent"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-neutral-300 mb-2">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="john@example.com"
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-neutral-600 transition-colors focus:border-blue-accent focus:outline-none focus:ring-1 focus:ring-blue-accent"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-neutral-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  placeholder="Tell us about your fitness goals..."
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-neutral-600 transition-colors focus:border-blue-accent focus:outline-none focus:ring-1 focus:ring-blue-accent resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={status === "sending" || status === "sent"}
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-blue-accent px-8 py-3.5 font-semibold text-white transition-all hover:bg-blue-500 hover:shadow-lg hover:shadow-blue-accent/25 active:scale-[0.97] disabled:opacity-50 disabled:cursor-not-allowed sm:w-auto"
              >
                {status === "sending" && <Loader2 size={18} className="animate-spin" />}
                {status === "sent" && <CheckCircle2 size={18} />}
                {status === "idle" && <Send size={18} />}
                {status === "error" && <Send size={18} />}
                {status === "sending"
                  ? "Sending..."
                  : status === "sent"
                    ? "Message Sent!"
                    : status === "error"
                      ? "Try Again"
                      : "Send Message"}
              </button>

              {status === "error" && (
                <p className="text-sm text-red-400">
                  Something went wrong. Please try again or email us directly.
                </p>
              )}
            </form>
          </ScrollAnimate>

          <ScrollAnimate delay={150}>
            <div className="space-y-6">
              <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-accent/10 text-blue-accent">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold font-heading">Location</h3>
                    <p className="mt-1 text-sm text-neutral-400 leading-relaxed">
                      123 Fitness Avenue<br />
                      Downtown District<br />
                      New York, NY 10001
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-accent/10 text-blue-accent">
                    <Clock size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold font-heading">Hours</h3>
                    <div className="mt-1 space-y-1 text-sm text-neutral-400">
                      <p>Mon — Fri: 5:00 AM – 11:00 PM</p>
                      <p>Saturday: 6:00 AM – 10:00 PM</p>
                      <p>Sunday: 7:00 AM – 9:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-accent/10 text-blue-accent">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold font-heading">Email</h3>
                    <a
                      href="mailto:hello@powerfit.com"
                      className="mt-1 text-sm text-neutral-400 transition-colors hover:text-blue-accent"
                    >
                      hello@powerfit.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </ScrollAnimate>
        </div>
      </div>
    </section>
  );
}
