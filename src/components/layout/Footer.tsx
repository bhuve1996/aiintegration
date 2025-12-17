'use client';

import Link from 'next/link';
import { appConfig, navigationConfig } from '@/config';
import { Logo } from '@/components/ui';
import { Twitter, Linkedin, Facebook, Instagram } from 'lucide-react';

const socialIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  twitter: Twitter,
  linkedin: Linkedin,
  facebook: Facebook,
  instagram: Instagram,
};

export function Footer() {
  const { footer } = navigationConfig;

  return (
    <footer className="border-t border-[var(--color-border)] bg-[var(--color-background)]">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-5">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1">
            <Link href="/" className="inline-block mb-4">
              <Logo size="md" />
            </Link>
            <p className="text-sm text-[var(--color-text-secondary)] mb-4 max-w-xs">
              {appConfig.description}
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              {Object.entries(appConfig.social).map(([key, url]) => {
                const Icon = socialIcons[key];
                if (!Icon) return null;
                return (
                  <a
                    key={key}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)] hover:bg-[var(--color-background-secondary)] transition-colors"
                    aria-label={`Follow us on ${key}`}
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Navigation Columns */}
          {footer.sections.map((section) => (
            <div key={section.title}>
              <h4 className="font-semibold text-[var(--color-text-primary)] mb-4">
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.items
                  .filter((item) => item.enabled)
                  .map((item) => (
                    <li key={item.key}>
                      <Link
                        href={item.href}
                        className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-[var(--color-border)] flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-[var(--color-text-muted)]">{appConfig.copyright}</p>
          <div className="flex gap-6">
            <Link
              href="/privacy"
              className="text-sm text-[var(--color-text-muted)] hover:text-[var(--color-text-secondary)]"
            >
              Privacy
            </Link>
            <Link
              href="/terms"
              className="text-sm text-[var(--color-text-muted)] hover:text-[var(--color-text-secondary)]"
            >
              Terms
            </Link>
            <Link
              href="/cookies"
              className="text-sm text-[var(--color-text-muted)] hover:text-[var(--color-text-secondary)]"
            >
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
