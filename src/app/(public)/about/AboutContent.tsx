'use client';

import Link from 'next/link';
import { Card, Button, Divider } from '@/components/ui';
import { aboutConfig } from '@/config/content/about.config';
import { Sparkles, Users, Shield, Zap, ArrowRight } from 'lucide-react';

const iconMap = {
  Sparkles,
  Users,
  Shield,
  Zap,
};

export function AboutContent() {
  const { hero, story, values, stats, team, cta } = aboutConfig;

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-24 sm:py-32">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-primary)]/5 via-transparent to-purple-500/5" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--color-primary)]/20 to-transparent" />

        <div className="container relative mx-auto px-4 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[var(--color-text-primary)] mb-6 max-w-4xl mx-auto leading-tight">
            {hero.title}
          </h1>
          <p className="text-lg sm:text-xl text-[var(--color-text-secondary)] max-w-2xl mx-auto">
            {hero.subtitle}
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-[var(--color-background-secondary)] border-y border-[var(--color-border)]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-[var(--color-primary)] mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-[var(--color-text-muted)]">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--color-text-primary)] mb-8">
            {story.title}
          </h2>
          <div className="space-y-6">
            {story.paragraphs.map((paragraph, idx) => (
              <p key={idx} className="text-lg text-[var(--color-text-secondary)] leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      <Divider className="container mx-auto px-4 max-w-3xl" />

      {/* Values */}
      <section className="py-20 container mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-[var(--color-text-primary)] text-center mb-4">
          {values.title}
        </h2>
        <p className="text-center text-[var(--color-text-secondary)] mb-12 max-w-xl mx-auto">
          The principles that guide everything we do
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {values.items.map((value, idx) => {
            const Icon = iconMap[value.icon as keyof typeof iconMap];
            return (
              <Card key={idx} variant="bordered" padding="lg" className="text-center group hover:border-[var(--color-primary)]/50 transition-colors">
                <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4 group-hover:bg-[var(--color-primary)]/20 transition-colors">
                  <Icon className="h-6 w-6 text-[var(--color-primary)]" />
                </div>
                <h3 className="text-lg font-semibold text-[var(--color-text-primary)] mb-2">
                  {value.title}
                </h3>
                <p className="text-sm text-[var(--color-text-secondary)]">{value.description}</p>
              </Card>
            );
          })}
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-[var(--color-background-secondary)]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--color-text-primary)] text-center mb-4">
            {team.title}
          </h2>
          <p className="text-center text-[var(--color-text-secondary)] mb-12">{team.subtitle}</p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {team.members.map((member, idx) => (
              <div key={idx} className="text-center">
                {/* Avatar Placeholder */}
                <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gradient-to-br from-[var(--color-primary)] to-purple-600 flex items-center justify-center">
                  <span className="text-3xl font-bold text-white">
                    {member.name
                      .split(' ')
                      .map((n) => n[0])
                      .join('')}
                  </span>
                </div>
                <h3 className="font-semibold text-[var(--color-text-primary)]">{member.name}</h3>
                <p className="text-sm text-[var(--color-primary)] mb-2">{member.role}</p>
                <p className="text-sm text-[var(--color-text-muted)]">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Investors */}
      <section className="py-16 container mx-auto px-4">
        <h3 className="text-center text-sm font-medium text-[var(--color-text-muted)] mb-8 uppercase tracking-wider">
          {aboutConfig.investors.title}
        </h3>
        <div className="flex flex-wrap justify-center items-center gap-12 opacity-60">
          {aboutConfig.investors.logos.map((investor, idx) => (
            <div
              key={idx}
              className="h-8 px-6 flex items-center justify-center text-lg font-bold text-[var(--color-text-muted)]"
            >
              {investor.name}
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-[var(--color-primary)]/10 to-purple-500/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--color-text-primary)] mb-4">
            {cta.title}
          </h2>
          <p className="text-lg text-[var(--color-text-secondary)] mb-8 max-w-xl mx-auto">
            {cta.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {cta.buttons.map((button, idx) => (
              <Link key={idx} href={button.href}>
                <Button
                  variant={button.variant}
                  size="lg"
                  rightIcon={button.variant === 'primary' ? <ArrowRight className="h-5 w-5" /> : undefined}
                >
                  {button.label}
                </Button>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

