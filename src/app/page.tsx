import Link from 'next/link';
import { Header, Footer } from '@/components/layout';
import { Button, Badge, Card } from '@/components/ui';
import { homeConfig } from '@/config';
import { generatePageMetadata } from '@/lib/seo';
import {
  Sparkles,
  LineChart,
  Target,
  Wallet,
  Rocket,
  RefreshCw,
  TrendingDown,
  TrendingUp,
  ArrowRight,
  Play,
  Check,
} from 'lucide-react';

// SEO Metadata - type-safe from config
export const metadata = generatePageMetadata('home');

const featureIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  sparkles: Sparkles,
  'chart-line': LineChart,
  target: Target,
  wallet: Wallet,
};

const benefitIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  rocket: Rocket,
  refresh: RefreshCw,
  'trending-down': TrendingDown,
  'trending-up': TrendingUp,
};

export default function HomePage() {
  const { hero, features, benefits, cta } = homeConfig;

  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-4 overflow-hidden hero-pattern">
          {/* Background effects */}
          <div className="absolute inset-0 grid-pattern opacity-50" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-[var(--color-primary)]/20 rounded-full blur-[120px] pointer-events-none" />

          <div className="relative mx-auto max-w-6xl text-center">
            {/* Badge */}
            <Badge className="mb-6 animate-fade-in">{hero.badge}</Badge>

            {/* Title */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in-up">
              <span className="text-[var(--color-text-primary)]">
                {hero.title.split(hero.highlight)[0]}
              </span>
              <span className="gradient-text">{hero.highlight}</span>
              <span className="text-[var(--color-text-primary)]">
                {hero.title.split(hero.highlight)[1]}
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl text-[var(--color-text-secondary)] max-w-2xl mx-auto mb-10 animate-fade-in-up delay-100">
              {hero.subtitle}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-fade-in-up delay-200">
              <Link href={hero.primaryCta.href}>
                <Button size="lg" rightIcon={<ArrowRight className="h-5 w-5" />}>
                  {hero.primaryCta.label}
                </Button>
              </Link>
              <Link href={hero.secondaryCta.href}>
                <Button variant="outline" size="lg" leftIcon={<Play className="h-5 w-5" />}>
                  {hero.secondaryCta.label}
                </Button>
              </Link>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap justify-center gap-8 sm:gap-16 animate-fade-in-up delay-300">
              {hero.stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-3xl sm:text-4xl font-bold gradient-text mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-[var(--color-text-muted)]">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-24 px-4 bg-[var(--color-background-secondary)]">
          <div className="mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                <span className="text-[var(--color-text-primary)]">{features.title}</span>
                <br />
                <span className="gradient-text">{features.subtitle}</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.items.map((feature, index) => {
                const Icon = featureIcons[feature.icon];
                return (
                  <Card
                    key={feature.key}
                    variant="interactive"
                    className="animate-fade-in-up"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="p-3 rounded-xl bg-[var(--color-primary)]/10 w-fit mb-4">
                      {Icon && <Icon className="h-6 w-6 text-[var(--color-primary)]" />}
                    </div>
                    <h3 className="text-lg font-semibold text-[var(--color-text-primary)] mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-[var(--color-text-secondary)]">
                      {feature.description}
                    </p>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-24 px-4">
          <div className="mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-[var(--color-text-primary)]">
                {benefits.title}
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {benefits.items.map((benefit, index) => {
                const Icon = benefitIcons[benefit.icon];
                return (
                  <Card
                    key={benefit.key}
                    variant="bordered"
                    className="relative overflow-hidden group animate-fade-in-up"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--color-primary)]/5 rounded-full blur-2xl group-hover:bg-[var(--color-primary)]/10 transition-colors" />
                    <div className="relative">
                      <div className="flex items-start gap-4 mb-4">
                        <div className="p-3 rounded-xl bg-gradient-to-br from-[var(--color-primary)] to-purple-600">
                          {Icon && <Icon className="h-6 w-6 text-white" />}
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold text-[var(--color-text-primary)] mb-2">
                            {benefit.title}
                          </h3>
                          <p className="text-[var(--color-text-secondary)]">
                            {benefit.description}
                          </p>
                        </div>
                      </div>
                      <Link
                        href="/signup"
                        className="inline-flex items-center gap-2 text-sm font-medium text-[var(--color-primary)] hover:underline"
                      >
                        {benefit.cta}
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Social Proof Section */}
        <section className="py-24 px-4 bg-[var(--color-background-secondary)]">
          <div className="mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-[var(--color-text-primary)] mb-4">
                Trusted by Growth-Focused Brands
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {homeConfig.testimonials.items.map((testimonial, index) => (
                <Card
                  key={testimonial.author}
                  className="animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-5 h-5 text-yellow-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-[var(--color-text-secondary)] mb-6 italic">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-gradient-to-br from-[var(--color-primary)] to-purple-600 flex items-center justify-center text-white font-semibold">
                      {testimonial.author.charAt(0)}
                    </div>
                    <div>
                      <div className="font-medium text-[var(--color-text-primary)]">
                        {testimonial.author}
                      </div>
                      <div className="text-sm text-[var(--color-text-muted)]">
                        {testimonial.role}, {testimonial.company}
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 px-4 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-primary)]/10 to-purple-600/10" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[var(--color-primary)]/20 rounded-full blur-[100px]" />

          <div className="relative mx-auto max-w-4xl text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--color-text-primary)] mb-4">
              {cta.title}
            </h2>
            <p className="text-lg text-[var(--color-text-secondary)] mb-10 max-w-2xl mx-auto">
              {cta.subtitle}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link href={cta.primaryCta.href}>
                <Button size="lg" className="animate-pulse-glow">
                  {cta.primaryCta.label}
                </Button>
              </Link>
              <Link href={cta.secondaryCta.href}>
                <Button variant="outline" size="lg">
                  {cta.secondaryCta.label}
                </Button>
              </Link>
            </div>

            <div className="flex flex-wrap justify-center gap-6 text-sm text-[var(--color-text-muted)]">
              <span className="flex items-center gap-2">
                <Check className="h-4 w-4 text-[var(--color-success)]" />
                No credit card required
              </span>
              <span className="flex items-center gap-2">
                <Check className="h-4 w-4 text-[var(--color-success)]" />
                14-day free trial
              </span>
              <span className="flex items-center gap-2">
                <Check className="h-4 w-4 text-[var(--color-success)]" />
                Cancel anytime
              </span>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
