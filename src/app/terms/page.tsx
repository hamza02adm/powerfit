import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
};

export default function TermsPage() {
  return (
    <main className="mx-auto w-full max-w-3xl px-4 py-24 sm:px-6 sm:py-32">
      <h1 className="font-heading text-3xl font-bold sm:text-4xl">Terms of Service</h1>
      <p className="mt-2 text-sm text-neutral-500">Last updated: May 2, 2026</p>

      <div className="mt-10 space-y-8 text-neutral-400 leading-relaxed [&_h2]:text-lg [&_h2]:font-semibold [&_h2]:text-white [&_h2]:font-heading [&_h2]:mt-8 [&_h2]:mb-3">
        <section>
          <h2>Service Description</h2>
          <p>
            PowerFit provides fitness facilities, group classes, and personal
            training services at our physical location. This website serves as an
            informational and contact platform for our gym.
          </p>
        </section>

        <section>
          <h2>Membership</h2>
          <p>
            Membership plans and pricing are subject to change. All memberships
            are month-to-month with no long-term commitment required. Cancellations
            take effect at the end of the current billing cycle.
          </p>
        </section>

        <section>
          <h2>User Responsibilities</h2>
          <p>
            Members are responsible for using gym equipment safely and following
            all posted facility rules. PowerFit is not liable for injuries
            resulting from improper use of equipment or failure to follow trainer
            instructions.
          </p>
        </section>

        <section>
          <h2>Intellectual Property</h2>
          <p>
            All content on this website, including text, graphics, and logos, is
            the property of PowerFit and may not be reproduced without written
            permission.
          </p>
        </section>

        <section>
          <h2>Limitation of Liability</h2>
          <p>
            PowerFit provides this website &ldquo;as is&rdquo; and makes no
            warranties regarding the accuracy or completeness of the information
            provided.
          </p>
        </section>

        <section>
          <h2>Contact</h2>
          <p>
            For questions about these terms, contact us at{" "}
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
