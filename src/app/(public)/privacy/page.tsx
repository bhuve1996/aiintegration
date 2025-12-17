import { Metadata } from 'next';
import { Card } from '@/components/ui';
import { appConfig } from '@/config';

export const metadata: Metadata = {
  title: `Privacy Policy | ${appConfig.appName}`,
  description: `Privacy Policy for ${appConfig.appName}. Learn how we collect, use, and protect your data.`,
};

export default function PrivacyPage() {
  const lastUpdated = 'December 1, 2024';

  return (
    <main className="min-h-screen py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold text-[var(--color-text-primary)] mb-4">Privacy Policy</h1>
        <p className="text-[var(--color-text-muted)] mb-12">Last updated: {lastUpdated}</p>

        <Card variant="bordered" padding="lg" className="prose-custom">
          <div className="space-y-8">
            <section>
              <h2 className="text-xl font-semibold text-[var(--color-text-primary)] mb-4">
                1. Introduction
              </h2>
              <p className="text-[var(--color-text-secondary)] leading-relaxed">
                Welcome to {appConfig.appName} (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;). We are committed to
                protecting your privacy and personal information. This Privacy Policy explains how we collect, use,
                disclose, and safeguard your information when you use our AI-powered advertising platform.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[var(--color-text-primary)] mb-4">
                2. Information We Collect
              </h2>
              <p className="text-[var(--color-text-secondary)] leading-relaxed mb-4">
                We collect information that you provide directly to us, including:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-[var(--color-text-secondary)]">
                <li>Account information (name, email, password)</li>
                <li>Business information (company name, website URL, industry)</li>
                <li>Payment information (processed securely by our payment providers)</li>
                <li>Advertising assets (images, videos, copy) you upload</li>
                <li>Communication preferences and support inquiries</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[var(--color-text-primary)] mb-4">
                3. How We Use Your Information
              </h2>
              <ul className="list-disc pl-6 space-y-2 text-[var(--color-text-secondary)]">
                <li>Provide, maintain, and improve our services</li>
                <li>Process transactions and send related information</li>
                <li>Generate AI-powered advertising content and recommendations</li>
                <li>Analyze campaign performance and provide insights</li>
                <li>Send promotional communications (with your consent)</li>
                <li>Respond to your comments, questions, and support requests</li>
                <li>Detect, investigate, and prevent fraudulent transactions</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[var(--color-text-primary)] mb-4">
                4. Data Sharing
              </h2>
              <p className="text-[var(--color-text-secondary)] leading-relaxed mb-4">
                We may share your information with:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-[var(--color-text-secondary)]">
                <li>Advertising platforms (Meta, Google) to run your campaigns</li>
                <li>Service providers who assist in our operations</li>
                <li>Analytics partners to improve our services</li>
                <li>Legal authorities when required by law</li>
              </ul>
              <p className="text-[var(--color-text-secondary)] leading-relaxed mt-4">
                We never sell your personal information to third parties.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[var(--color-text-primary)] mb-4">
                5. Data Security
              </h2>
              <p className="text-[var(--color-text-secondary)] leading-relaxed">
                We implement industry-standard security measures including encryption, secure servers, and regular
                security audits. However, no method of transmission over the Internet is 100% secure.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[var(--color-text-primary)] mb-4">
                6. Your Rights
              </h2>
              <p className="text-[var(--color-text-secondary)] leading-relaxed mb-4">You have the right to:</p>
              <ul className="list-disc pl-6 space-y-2 text-[var(--color-text-secondary)]">
                <li>Access your personal data</li>
                <li>Correct inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Object to processing of your data</li>
                <li>Export your data in a portable format</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[var(--color-text-primary)] mb-4">
                7. Contact Us
              </h2>
              <p className="text-[var(--color-text-secondary)] leading-relaxed">
                If you have any questions about this Privacy Policy, please contact us at{' '}
                <a
                  href="mailto:privacy@nexora.ai"
                  className="text-[var(--color-primary)] hover:underline"
                >
                  privacy@nexora.ai
                </a>
              </p>
            </section>
          </div>
        </Card>
      </div>
    </main>
  );
}

