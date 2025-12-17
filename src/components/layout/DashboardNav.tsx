'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { navigationConfig, appConfig } from '@/config';
import { Plus, Folder, Image, Globe, User, LogOut, ChevronDown } from 'lucide-react';
import { useState } from 'react';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  plus: Plus,
  folder: Folder,
  image: Image,
};

export function DashboardNav() {
  const pathname = usePathname();
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const [langMenuOpen, setLangMenuOpen] = useState(false);

  const { dashboardNav } = navigationConfig;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-[var(--color-border)] bg-[var(--color-background)]/95 backdrop-blur-xl">
      <div className="flex h-16 items-center justify-between px-4 sm:px-6">
        {/* Logo */}
        <Link href="/dashboard" className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-[var(--color-primary)] to-purple-600">
            <span className="text-sm font-bold text-white">{appConfig.logoText.charAt(0)}</span>
          </div>
          <span className="text-xl font-bold text-[var(--color-text-primary)] hidden sm:inline">
            {appConfig.logoText}
          </span>
        </Link>

        {/* Center Navigation */}
        <nav className="flex items-center gap-1">
          {dashboardNav.items
            .filter((item) => item.enabled)
            .map((item) => {
              const Icon = item.icon ? iconMap[item.icon] : null;
              const isActive = pathname === item.href || pathname.startsWith(`${item.href}/`);

              return (
                <Link
                  key={item.key}
                  href={item.href}
                  className={cn(
                    'flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg transition-all',
                    isActive
                      ? 'text-[var(--color-primary)] bg-[var(--color-primary)]/10'
                      : 'text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:bg-[var(--color-background-secondary)]'
                  )}
                >
                  {Icon && <Icon className="h-4 w-4" />}
                  <span className="hidden sm:inline">{item.label}</span>
                </Link>
              );
            })}
        </nav>

        {/* Right Side Actions */}
        <div className="flex items-center gap-2">
          {/* Language Selector */}
          <div className="relative">
            <button
              onClick={() => setLangMenuOpen(!langMenuOpen)}
              className="flex items-center gap-1.5 px-3 py-2 text-sm rounded-lg text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:bg-[var(--color-background-secondary)] transition-colors"
            >
              <Globe className="h-4 w-4" />
              <span className="hidden sm:inline">EN</span>
              <ChevronDown className="h-3 w-3" />
            </button>

            {langMenuOpen && (
              <>
                <div className="fixed inset-0 z-40" onClick={() => setLangMenuOpen(false)} />
                <div className="absolute right-0 top-full mt-2 w-48 rounded-xl border border-[var(--color-border)] bg-[var(--color-card)] shadow-[var(--shadow-popup)] z-50 py-2">
                  {['English', '中文', 'Español', 'Português', 'العربية', 'हिंदी'].map((lang) => (
                    <button
                      key={lang}
                      onClick={() => setLangMenuOpen(false)}
                      className="w-full px-4 py-2 text-left text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:bg-[var(--color-background-secondary)]"
                    >
                      {lang}
                    </button>
                  ))}
                </div>
              </>
            )}
          </div>

          {/* User Menu */}
          <div className="relative">
            <button
              onClick={() => setUserMenuOpen(!userMenuOpen)}
              className="flex items-center gap-2 px-2 py-1.5 rounded-lg hover:bg-[var(--color-background-secondary)] transition-colors"
            >
              <div className="h-8 w-8 rounded-full bg-gradient-to-br from-[var(--color-primary)] to-purple-600 flex items-center justify-center">
                <User className="h-4 w-4 text-white" />
              </div>
              <ChevronDown className="h-3 w-3 text-[var(--color-text-muted)]" />
            </button>

            {userMenuOpen && (
              <>
                <div className="fixed inset-0 z-40" onClick={() => setUserMenuOpen(false)} />
                <div className="absolute right-0 top-full mt-2 w-64 rounded-xl border border-[var(--color-border)] bg-[var(--color-card)] shadow-[var(--shadow-popup)] z-50">
                  {/* User Info */}
                  <div className="p-4 border-b border-[var(--color-border)]">
                    <p className="font-medium text-[var(--color-text-primary)]">John Doe</p>
                    <p className="text-sm text-[var(--color-text-muted)]">john@example.com</p>
                    <span className="inline-block mt-2 px-2 py-0.5 text-xs font-medium rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)]">
                      Starter Plan
                    </span>
                  </div>

                  {/* Menu Items */}
                  <div className="py-2">
                    {navigationConfig.userMenu.items.map((item) => (
                      <Link
                        key={item.key}
                        href={item.href}
                        onClick={() => setUserMenuOpen(false)}
                        className="flex items-center gap-3 px-4 py-2 text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:bg-[var(--color-background-secondary)]"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>

                  {/* Logout */}
                  <div className="border-t border-[var(--color-border)] py-2">
                    <button
                      onClick={() => setUserMenuOpen(false)}
                      className="flex items-center gap-3 w-full px-4 py-2 text-sm text-[var(--color-destructive)] hover:bg-[var(--color-destructive)]/10"
                    >
                      <LogOut className="h-4 w-4" />
                      Sign Out
                    </button>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

export default DashboardNav;
