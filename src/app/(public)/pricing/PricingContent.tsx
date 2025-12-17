'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Card, Button, Badge, Divider } from '@/components/ui';
import { pricingConfig } from '@/config/content/pricing.config';
import { Check, X, ChevronDown, ChevronUp, Sparkles, Zap } from 'lucide-react';

export function PricingContent() {
  const [isAnnual, setIsAnnual] = useState(true);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const { hero, billingToggle, plans, faq, guarantee } = pricingConfig;

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 sm:py-28">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-primary)]/5 via-transparent to-purple-500/5" />
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-[var(--color-primary)]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />

        <div className="container relative mx-auto px-4 text-center">
          <Badge variant="primary" size="lg" className="mb-6">
            <Sparkles className="h-4 w-4 mr-1" />
            {billingToggle.discount} with annual billing
          </Badge>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[var(--color-text-primary)] mb-6">
            {hero.title}
          </h1>
          <p className="text-lg sm:text-xl text-[var(--color-text-secondary)] max-w-2xl mx-auto mb-10">
            {hero.subtitle}
          </p>

          {/* Billing Toggle */}
          <div className="inline-flex items-center gap-4 p-1.5 rounded-full bg-[var(--color-background-secondary)] border border-[var(--color-border)]">
            <button
              onClick={() => setIsAnnual(false)}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all ${
                !isAnnual
                  ? 'bg-[var(--color-primary)] text-white shadow-lg'
                  : 'text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]'
              }`}
            >
              {billingToggle.monthly}
            </button>
            <button
              onClick={() => setIsAnnual(true)}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all flex items-center gap-2 ${
                isAnnual
                  ? 'bg-[var(--color-primary)] text-white shadow-lg'
                  : 'text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]'
              }`}
            >
              {billingToggle.annually}
              {isAnnual && (
                <span className="px-2 py-0.5 text-xs rounded-full bg-white/20">
                  {billingToggle.discount}
                </span>
              )}
            </button>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="container mx-auto px-4 pb-20">
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan) => {
            const price = isAnnual ? plan.price.annually : plan.price.monthly;
            const isEnterprise = plan.key === 'enterprise';

            return (
              <Card
                key={plan.key}
                variant={plan.popular ? 'elevated' : 'bordered'}
                padding="none"
                className={`relative overflow-hidden ${
                  plan.popular
                    ? 'ring-2 ring-[var(--color-primary)] scale-105 z-10'
                    : 'hover:border-[var(--color-primary)]/50'
                }`}
              >
                {/* Popular Badge */}
                {plan.badge && (
                  <div
                    className={`absolute top-0 right-0 px-4 py-1.5 text-xs font-bold rounded-bl-lg ${
                      plan.popular
                        ? 'bg-[var(--color-primary)] text-white'
                        : 'bg-[var(--color-background-tertiary)] text-[var(--color-text-secondary)]'
                    }`}
                  >
                    {plan.badge}
                  </div>
                )}

                <div className="p-8">
                  {/* Plan Header */}
                  <h3 className="text-2xl font-bold text-[var(--color-text-primary)] mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-sm text-[var(--color-text-secondary)] mb-6">{plan.description}</p>

                  {/* Price */}
                  <div className="mb-6">
                    {isEnterprise ? (
                      <div className="text-3xl font-bold text-[var(--color-text-primary)]">
                        Custom Pricing
                      </div>
                    ) : (
                      <>
                        <div className="flex items-baseline gap-1">
                          <span className="text-4xl font-bold text-[var(--color-text-primary)]">
                            ${price}
                          </span>
                          <span className="text-[var(--color-text-muted)]">/month</span>
                        </div>
                        {isAnnual && (
                          <p className="text-sm text-[var(--color-success)] mt-1">
                            Billed annually (${price * 12}/year)
                          </p>
                        )}
                      </>
                    )}
                  </div>

                  {/* CTA Button */}
                  <Link href={plan.cta.href} className="block">
                    <Button
                      variant={plan.popular ? 'primary' : 'outline'}
                      size="lg"
                      className="w-full"
                      leftIcon={plan.popular ? <Zap className="h-4 w-4" /> : undefined}
                    >
                      {plan.cta.label}
                    </Button>
                  </Link>

                  <Divider className="my-6" />

                  {/* Features */}
                  <ul className="space-y-3">
                    {plan.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className={`flex items-start gap-3 text-sm ${
                          feature.included
                            ? 'text-[var(--color-text-secondary)]'
                            : 'text-[var(--color-text-muted)] line-through'
                        }`}
                      >
                        {feature.included ? (
                          <Check
                            className={`h-5 w-5 shrink-0 ${
                              feature.highlight
                                ? 'text-[var(--color-primary)]'
                                : 'text-[var(--color-success)]'
                            }`}
                          />
                        ) : (
                          <X className="h-5 w-5 shrink-0 text-[var(--color-text-muted)]" />
                        )}
                        <span className={feature.highlight ? 'font-medium' : ''}>
                          {feature.text}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            );
          })}
        </div>
      </section>

      {/* Guarantee */}
      <section className="py-16 bg-gradient-to-r from-[var(--color-primary)]/10 via-purple-500/10 to-[var(--color-primary)]/10">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex p-3 rounded-full bg-[var(--color-success)]/10 mb-4">
            <Check className="h-8 w-8 text-[var(--color-success)]" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-[var(--color-text-primary)] mb-4">
            {guarantee.title}
          </h2>
          <p className="text-[var(--color-text-secondary)] max-w-xl mx-auto">
            {guarantee.description}
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 container mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-[var(--color-text-primary)] text-center mb-12">
          {faq.title}
        </h2>

        <div className="max-w-3xl mx-auto space-y-4">
          {faq.items.map((item, idx) => (
            <Card
              key={idx}
              variant="bordered"
              padding="none"
              className="overflow-hidden"
            >
              <button
                onClick={() => setOpenFaqIndex(openFaqIndex === idx ? null : idx)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-[var(--color-background-secondary)] transition-colors"
              >
                <span className="font-medium text-[var(--color-text-primary)] pr-4">
                  {item.question}
                </span>
                {openFaqIndex === idx ? (
                  <ChevronUp className="h-5 w-5 text-[var(--color-text-muted)] shrink-0" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-[var(--color-text-muted)] shrink-0" />
                )}
              </button>
              {openFaqIndex === idx && (
                <div className="px-6 pb-5">
                  <p className="text-[var(--color-text-secondary)]">{item.answer}</p>
                </div>
              )}
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[var(--color-background-secondary)]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--color-text-primary)] mb-4">
            Ready to boost your ads?
          </h2>
          <p className="text-lg text-[var(--color-text-secondary)] mb-8 max-w-xl mx-auto">
            Join thousands of businesses using AI to maximize their advertising ROI.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/signup">
              <Button size="lg" leftIcon={<Sparkles className="h-5 w-5" />}>
                Start Free Trial
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline">
                Talk to Sales
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

