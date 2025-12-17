import { Metadata } from 'next';
import { Card } from '@/components/ui';
import { appConfig } from '@/config';

export const metadata: Metadata = {
  title: `Terms of Service | ${appConfig.appName}`,
  description: `Terms of Service for ${appConfig.appName}. Read our terms and conditions.`,
};

export default function TermsPage() {
  const lastUpdated = 'December 1, 2024';

  return (
    <main className="min-h-screen py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold text-[var(--color-text-primary)] mb-4">Terms of Service</h1>
        <p className="text-[var(--color-text-muted)] mb-12">Last updated: {lastUpdated}</p>

        <Card variant="bordered" padding="lg">
          <div className="space-y-8">
            <section>
              <h2 className="text-xl font-semibold text-[var(--color-text-primary)] mb-4">
                1. Agreement to Terms
              </h2>
              <p className="text-[var(--color-text-secondary)] leading-relaxed">
                By accessing or using {appConfig.appName}, you agree to be bound by these Terms of Service. If you
                disagree with any part of the terms, you may not access the service.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[var(--color-text-primary)] mb-4">
                2. Description of Service
              </h2>
              <p className="text-[var(--color-text-secondary)] leading-relaxed">
                {appConfig.appName} provides an AI-powered advertising platform that helps businesses create, manage,
                and optimize digital advertising campaigns across various platforms including Meta (Facebook/Instagram)
                and Google Ads.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[var(--color-text-primary)] mb-4">
                3. User Accounts
              </h2>
              <ul className="list-disc pl-6 space-y-2 text-[var(--color-text-secondary)]">
                <li>You must be 18 years or older to use this service</li>
                <li>You are responsible for maintaining the confidentiality of your account</li>
                <li>You agree to provide accurate and complete information</li>
                <li>You are responsible for all activities under your account</li>
                <li>You must notify us immediately of any unauthorized use</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[var(--color-text-primary)] mb-4">
                4. Acceptable Use
              </h2>
              <p className="text-[var(--color-text-secondary)] leading-relaxed mb-4">You agree not to:</p>
              <ul className="list-disc pl-6 space-y-2 text-[var(--color-text-secondary)]">
                <li>Use the service for any illegal purposes</li>
                <li>Violate advertising platform policies (Meta, Google, etc.)</li>
                <li>Upload malicious content or attempt to hack our systems</li>
                <li>Promote prohibited products or services</li>
                <li>Infringe on intellectual property rights</li>
                <li>Engage in deceptive or misleading advertising practices</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[var(--color-text-primary)] mb-4">
                5. Payment Terms
              </h2>
              <ul className="list-disc pl-6 space-y-2 text-[var(--color-text-secondary)]">
                <li>Subscription fees are billed in advance on a monthly or annual basis</li>
                <li>All fees are non-refundable except as stated in our refund policy</li>
                <li>We reserve the right to change pricing with 30 days notice</li>
                <li>Ad spend is charged directly by advertising platforms</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[var(--color-text-primary)] mb-4">
                6. Intellectual Property
              </h2>
              <p className="text-[var(--color-text-secondary)] leading-relaxed">
                The service and its original content, features, and functionality are owned by {appConfig.companyName}{' '}
                and are protected by international copyright, trademark, and other intellectual property laws. You
                retain ownership of content you upload, but grant us a license to use it for providing the service.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[var(--color-text-primary)] mb-4">
                7. Limitation of Liability
              </h2>
              <p className="text-[var(--color-text-secondary)] leading-relaxed">
                {appConfig.appName} shall not be liable for any indirect, incidental, special, consequential, or
                punitive damages resulting from your use of the service. Our total liability shall not exceed the
                amount paid by you in the 12 months preceding the claim.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[var(--color-text-primary)] mb-4">
                8. Termination
              </h2>
              <p className="text-[var(--color-text-secondary)] leading-relaxed">
                We may terminate or suspend your account immediately, without prior notice, for conduct that we believe
                violates these Terms or is harmful to other users, us, or third parties, or for any other reason.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[var(--color-text-primary)] mb-4">
                9. Changes to Terms
              </h2>
              <p className="text-[var(--color-text-secondary)] leading-relaxed">
                We reserve the right to modify these terms at any time. We will provide notice of significant changes
                via email or through the service. Continued use after changes constitutes acceptance of new terms.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[var(--color-text-primary)] mb-4">
                10. Contact
              </h2>
              <p className="text-[var(--color-text-secondary)] leading-relaxed">
                For questions about these Terms, contact us at{' '}
                <a
                  href="mailto:legal@nexora.ai"
                  className="text-[var(--color-primary)] hover:underline"
                >
                  legal@nexora.ai
                </a>
              </p>
            </section>
          </div>
        </Card>
      </div>
    </main>
  );
}

