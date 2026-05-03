"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = document.cookie.includes("cookie_consent=");
    if (!consent) {
      const timer = setTimeout(() => setVisible(true), 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  function respond(accepted: boolean) {
    const value = accepted ? "accepted" : "declined";
    document.cookie = `cookie_consent=${value}; max-age=${365 * 24 * 60 * 60}; path=/; SameSite=Lax`;
    setVisible(false);
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-6 left-6 right-6 sm:left-auto sm:right-8 sm:bottom-8 sm:max-w-sm z-50 bg-[#0e0e0e] border border-white/[0.06] p-6"
        >
          <p className="text-[12px] text-white/30 leading-[1.7] font-light">
            We use cookies for analytics and experience.{" "}
            <a href="/privacy" className="text-white/50 underline underline-offset-2 hover:text-white transition-colors">
              Privacy Policy
            </a>
          </p>
          <div className="flex gap-3 mt-5">
            <button
              type="button"
              onClick={() => respond(false)}
              className="text-[10px] uppercase tracking-[0.2em] text-white/20 hover:text-white transition-colors"
            >
              Decline
            </button>
            <button
              type="button"
              onClick={() => respond(true)}
              className="bg-white text-black px-5 py-2 text-[10px] uppercase tracking-[0.2em] font-medium hover:bg-white/90 transition-colors"
            >
              Accept
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
