import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
};

export default function PrivacyPage() {
  return (
    <main className="mx-auto w-full max-w-3xl px-4 py-24 sm:px-6 sm:py-32">
      <h1 className="font-heading text-3xl font-bold sm:text-4xl">Privacy Policy</h1>
      <p className="mt-2 text-sm text-neutral-500">Last updated: May 2, 2026</p>

      <div className="mt-10 space-y-8 text-neutral-400 leading-relaxed [&_h2]:text-lg [&_h2]:font-semibold [&_h2]:text-white [&_h2]:font-heading [&_h2]:mt-8 [&_h2]:mb-3">
        <section>
          <h2>Information We Collect</h2>
          <p>
            When you submit our contact form, we collect your name, email address,
            and message content. We may also collect basic usage data through
            cookies to improve site performance.
          </p>
        </section>

        <section>
          <h2>How We Use Your Information</h2>
          <p>
            We use the information you provide to respond to inquiries, improve our
            services, and communicate relevant updates. We do not sell or share
            your personal data with third parties for marketing purposes.
          </p>
        </section>

        <section>
          <h2>Cookies</h2>
          <p>
            We use essential cookies to remember your preferences (like cookie
            consent). Analytics cookies are only activated with your explicit
            consent.
          </p>
        </section>

        <section>
          <h2>Your Rights</h2>
          <p>
            You have the right to access, correct, or delete your personal data at
            any time. To exercise these rights, contact us at hello@powerfit.com.
          </p>
        </section>

        <section>
          <h2>Contact</h2>
          <p>
            For privacy-related inquiries, email us at{" "}
            <a href="mailto:hello@powerfit.com" className="text-blue-accent hover:underline">
              hello@powerfit.com
            </a>
            .
          </p>
        </section>
      </div>
    </main>
  );
}
