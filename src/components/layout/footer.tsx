"use client";

export function Footer() {
  return (
    <footer id="contact" className="border-t border-white/[0.04]">
      <div className="mx-auto max-w-[1600px] px-6 sm:px-10 lg:px-16">
        {/* Main footer */}
        <div className="grid lg:grid-cols-12 gap-16 py-20 sm:py-28">
          {/* Brand */}
          <div className="lg:col-span-5">
            <a href="#" className="font-display text-2xl tracking-[0.3em] uppercase">
              PowerFit
            </a>
            <p className="mt-6 max-w-sm text-[13px] leading-[1.8] text-white/25 font-light">
              Elite fitness for those who refuse to settle.
              No shortcuts. No compromises. Just results.
            </p>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3">
            <span className="text-[10px] font-medium uppercase tracking-[0.4em] text-white/20">
              Contact
            </span>
            <div className="mt-6 space-y-3">
              <a href="mailto:hello@powerfit.com" className="block text-[13px] text-white/35 hover:text-white transition-colors duration-500 font-light">
                hello@powerfit.com
              </a>
              <p className="text-[13px] text-white/35 font-light">
                +1 (555) 000-0000
              </p>
            </div>
          </div>

          {/* Socials */}
          <div className="lg:col-span-2">
            <span className="text-[10px] font-medium uppercase tracking-[0.4em] text-white/20">
              Social
            </span>
            <div className="mt-6 space-y-3">
              {["Instagram", "X / Twitter", "YouTube"].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="block text-[13px] text-white/35 hover:text-white transition-colors duration-500 font-light"
                >
                  {s}
                </a>
              ))}
            </div>
          </div>

          {/* Legal */}
          <div className="lg:col-span-2">
            <span className="text-[10px] font-medium uppercase tracking-[0.4em] text-white/20">
              Legal
            </span>
            <div className="mt-6 space-y-3">
              <a href="/privacy" className="block text-[13px] text-white/35 hover:text-white transition-colors duration-500 font-light">
                Privacy
              </a>
              <a href="/terms" className="block text-[13px] text-white/35 hover:text-white transition-colors duration-500 font-light">
                Terms
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/[0.04] py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[10px] uppercase tracking-[0.3em] text-white/10">
            &copy; {new Date().getFullYear()} PowerFit. All rights reserved.
          </p>
          <p className="text-[10px] uppercase tracking-[0.3em] text-white/10">
            Built for the obsessed.
          </p>
        </div>
      </div>
    </footer>
  );
}
