"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const links = [
    { label: "Membership", href: "#membership" },
    { label: "Coaches", href: "#coaches" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        scrolled
          ? "bg-[#050505]/90 backdrop-blur-2xl"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto w-full max-w-[1600px] px-6 sm:px-10 lg:px-16">
        <div className="flex h-20 items-center justify-between lg:h-24">
          {/* Logo — raw, uppercase, no color gimmicks */}
          <a href="#" className="font-display text-2xl tracking-[0.3em] uppercase">
            PowerFit
          </a>

          {/* Desktop nav — minimal links */}
          <div className="hidden items-center gap-12 lg:flex">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[11px] font-medium uppercase tracking-[0.25em] text-white/40 transition-colors duration-500 hover:text-white"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="border border-white/20 px-8 py-3 text-[11px] font-medium uppercase tracking-[0.25em] text-white transition-all duration-500 hover:bg-white hover:text-black"
            >
              Apply
            </a>
          </div>

          {/* Mobile toggle — two lines, not a hamburger icon */}
          <button
            type="button"
            className="lg:hidden flex flex-col gap-[6px] p-2 group"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Close menu" : "Open menu"}
          >
            <motion.span
              animate={open ? { rotate: 45, y: 4 } : { rotate: 0, y: 0 }}
              className="block h-[1px] w-6 bg-white origin-center"
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            />
            <motion.span
              animate={open ? { rotate: -45, y: -4 } : { rotate: 0, y: 0 }}
              className="block h-[1px] w-6 bg-white origin-center"
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            />
          </button>
        </div>
      </div>

      {/* Fullscreen mobile menu — editorial, not template */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 top-0 z-40 bg-[#050505] lg:hidden flex flex-col justify-center"
          >
            <div className="px-6 sm:px-10">
              {links.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ delay: i * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className="block py-6 font-display text-[clamp(3rem,10vw,5rem)] tracking-[0.15em] uppercase text-white/80 hover:text-white transition-colors border-b border-white/[0.04]"
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.a
                href="#contact"
                onClick={() => setOpen(false)}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="mt-12 inline-block border border-white/20 px-10 py-5 text-[11px] font-medium uppercase tracking-[0.25em] text-white transition-all duration-500 hover:bg-white hover:text-black"
              >
                Apply Now
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
