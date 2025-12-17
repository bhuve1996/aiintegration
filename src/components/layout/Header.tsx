'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { navigationConfig, appConfig } from '@/config';
import { Button } from '@/components/ui';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const { header } = navigationConfig;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-[var(--color-border)] bg-[var(--color-background)]/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href={header.logo.href} className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-[var(--color-primary)] to-purple-600">
            <span className="text-sm font-bold text-white">{appConfig.logoText.charAt(0)}</span>
          </div>
          <span className="text-xl font-bold text-[var(--color-text-primary)]">
            {header.logo.text}
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1">
          {header.items
            .filter((item) => item.enabled)
            .map((item) => (
              <Link
                key={item.key}
                href={item.href}
                className={cn(
                  'px-4 py-2 text-sm font-medium rounded-lg transition-colors',
                  pathname === item.href
                    ? 'text-[var(--color-primary)] bg-[var(--color-primary)]/10'
                    : 'text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:bg-[var(--color-background-secondary)]'
                )}
              >
                {item.label}
              </Link>
            ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3">
          <Link href="/login">
            <Button variant="ghost" size="sm">
              Sign In
            </Button>
          </Link>
          <Link href={header.cta.href}>
            <Button size="sm">{header.cta.label}</Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg text-[var(--color-text-secondary)] hover:bg-[var(--color-background-secondary)]"
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-[var(--color-border)] bg-[var(--color-background)]">
          <nav className="flex flex-col p-4 gap-2">
            {header.items
              .filter((item) => item.enabled)
              .map((item) => (
                <Link
                  key={item.key}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={cn(
                    'px-4 py-3 text-sm font-medium rounded-lg transition-colors',
                    pathname === item.href
                      ? 'text-[var(--color-primary)] bg-[var(--color-primary)]/10'
                      : 'text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:bg-[var(--color-background-secondary)]'
                  )}
                >
                  {item.label}
                </Link>
              ))}
            <div className="flex flex-col gap-2 mt-4 pt-4 border-t border-[var(--color-border)]">
              <Link href="/login" onClick={() => setMobileMenuOpen(false)}>
                <Button variant="outline" className="w-full">
                  Sign In
                </Button>
              </Link>
              <Link href={header.cta.href} onClick={() => setMobileMenuOpen(false)}>
                <Button className="w-full">{header.cta.label}</Button>
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Header;
