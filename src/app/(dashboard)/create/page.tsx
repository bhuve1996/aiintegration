import { Metadata } from 'next';
import { Card, Button, Input } from '@/components/ui';
import { seoConfig } from '@/config';
import { Link2, Upload, Sparkles, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: seoConfig.pages.create.title,
  description: seoConfig.pages.create.description,
};

export default function CreateCampaignPage() {
  return (
    <main className="min-h-[calc(100vh-4rem)] flex items-center justify-center p-6">
      <div className="w-full max-w-2xl">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex p-3 rounded-2xl bg-gradient-to-br from-[var(--color-primary)] to-purple-600 mb-6">
            <Sparkles className="h-8 w-8 text-white" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-[var(--color-text-primary)] mb-4">
            Create Your Campaign
          </h1>
          <p className="text-lg text-[var(--color-text-secondary)] max-w-md mx-auto">
            Simply enter your website URL and let our AI create high-converting ads for you.
          </p>
        </div>

        {/* Campaign Setup Card */}
        <Card variant="elevated" padding="lg" className="backdrop-blur-xl">
          <form className="space-y-6">
            {/* URL Input */}
            <div>
              <label
                htmlFor="url"
                className="block text-sm font-medium text-[var(--color-text-primary)] mb-2"
              >
                Your Website URL
              </label>
              <Input
                id="url"
                type="url"
                placeholder="https://your-website.com"
                inputSize="lg"
                leftIcon={<Link2 className="h-5 w-5" />}
              />
              <p className="mt-2 text-sm text-[var(--color-text-muted)]">
                We&apos;ll analyze your website to create targeted ad campaigns
              </p>
            </div>

            {/* Optional Asset Upload */}
            <div>
              <label className="block text-sm font-medium text-[var(--color-text-primary)] mb-2">
                Upload Assets{' '}
                <span className="text-[var(--color-text-muted)] font-normal">(Optional)</span>
              </label>
              <div className="flex items-center gap-3">
                <Button variant="outline" type="button" leftIcon={<Upload className="h-4 w-4" />}>
                  Upload Images/Videos
                </Button>
                <span className="text-sm text-[var(--color-text-muted)]">
                  Or we&apos;ll generate them with AI
                </span>
              </div>
            </div>

            {/* Divider */}
            <div className="relative py-4">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-[var(--color-border)]" />
              </div>
              <div className="relative flex justify-center">
                <span className="px-4 text-sm text-[var(--color-text-muted)] bg-[var(--color-card)]">
                  AI will handle the rest
                </span>
              </div>
            </div>

            {/* What AI Does */}
            <div className="grid sm:grid-cols-3 gap-4">
              {[
                { title: 'Market Research', desc: 'Analyze your competitors' },
                { title: 'Ad Creative', desc: 'Generate compelling copy' },
                { title: 'Smart Targeting', desc: 'Find your audience' },
              ].map((item) => (
                <div
                  key={item.title}
                  className="p-4 rounded-lg bg-[var(--color-background-secondary)] text-center"
                >
                  <h4 className="font-medium text-[var(--color-text-primary)] mb-1">
                    {item.title}
                  </h4>
                  <p className="text-sm text-[var(--color-text-muted)]">{item.desc}</p>
                </div>
              ))}
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              size="lg"
              className="w-full animate-pulse-glow"
              rightIcon={<ArrowRight className="h-5 w-5" />}
            >
              Boost My Ads
            </Button>

            {/* Helper Text */}
            <p className="text-center text-sm text-[var(--color-text-muted)]">
              Campaign setup takes less than 1 minute
            </p>
          </form>
        </Card>

        {/* Trust Indicators */}
        <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-[var(--color-text-muted)]">
          <span>✓ No credit card required</span>
          <span>✓ AI-powered optimization</span>
          <span>✓ Results in 24 hours</span>
        </div>
      </div>
    </main>
  );
}
