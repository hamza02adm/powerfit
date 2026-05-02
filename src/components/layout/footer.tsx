function IconInstagram({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function IconX({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function IconYoutube({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
      <path d="m10 15 5-3-5-3z" />
    </svg>
  );
}

function IconFacebook({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 1.09.044 1.613.115v3.146c-.427-.044-.964-.065-1.492-.065-2.115 0-2.941.804-2.941 2.898v1.464h4.203l-.721 3.667h-3.482v8.139C19.395 23.025 24 18.07 24 12.073 24 5.404 18.627 0 12 0S0 5.404 0 12.073c0 5.457 3.977 9.985 9.101 11.618z" />
    </svg>
  );
}

const navGroups = [
  {
    title: "Gym",
    links: [
      { label: "About", href: "#about" },
      { label: "Classes", href: "#classes" },
      { label: "Trainers", href: "#trainers" },
      { label: "Pricing", href: "#pricing" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Contact", href: "#contact" },
      { label: "FAQ", href: "#contact" },
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
    ],
  },
];

const socials = [
  { icon: IconInstagram, href: "#", label: "Instagram" },
  { icon: IconX, href: "#", label: "X (Twitter)" },
  { icon: IconYoutube, href: "#", label: "YouTube" },
  { icon: IconFacebook, href: "#", label: "Facebook" },
];

export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-neutral-950">
      <div className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <a href="#" className="font-heading text-xl font-bold tracking-tight">
              Power<span className="text-blue-accent">Fit</span>
            </a>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-neutral-500">
              World-class fitness facility in the heart of New York. Premium
              equipment, expert trainers, and a community that pushes you to be
              your best.
            </p>
            <div className="mt-6 flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/5 bg-white/[0.02] text-neutral-500 transition-all hover:border-blue-accent/20 hover:text-white"
                >
                  <s.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {navGroups.map((group) => (
            <div key={group.title}>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-neutral-400">
                {group.title}
              </h3>
              <ul className="mt-4 space-y-3">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-neutral-500 transition-colors hover:text-white"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 border-t border-white/5 pt-8 text-center text-sm text-neutral-600">
          &copy; {new Date().getFullYear()} PowerFit. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
