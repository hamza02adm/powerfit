"use client";

import { useState, useEffect } from "react";

export function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = document.cookie.includes("cookie_consent=");
    if (!consent) {
      const timer = setTimeout(() => setVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  function respond(accepted: boolean) {
    const value = accepted ? "accepted" : "declined";
    document.cookie = `cookie_consent=${value}; max-age=${365 * 24 * 60 * 60}; path=/; SameSite=Lax`;
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-white/5 bg-neutral-950/95 backdrop-blur-xl p-4 sm:p-6">
      <div className="mx-auto flex max-w-7xl flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-neutral-400 max-w-xl">
          We use cookies to improve your experience. By continuing to use this
          site, you agree to our{" "}
          <a href="/privacy" className="text-blue-accent underline underline-offset-2">
            Privacy Policy
          </a>
          .
        </p>
        <div className="flex gap-3 shrink-0">
          <button
            type="button"
            onClick={() => respond(false)}
            className="rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm text-neutral-300 transition-colors hover:bg-white/10"
          >
            Decline
          </button>
          <button
            type="button"
            onClick={() => respond(true)}
            className="rounded-lg bg-blue-accent px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-blue-500"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
