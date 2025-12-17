import { appConfig } from '@/config';
import Link from 'next/link';

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-[var(--color-background)]">
      {/* Simple Header */}
      <header className="p-6">
        <Link href="/" className="flex items-center gap-2 w-fit">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-[var(--color-primary)] to-purple-600">
            <span className="text-sm font-bold text-white">{appConfig.logoText.charAt(0)}</span>
          </div>
          <span className="text-xl font-bold text-[var(--color-text-primary)]">
            {appConfig.logoText}
          </span>
        </Link>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center px-4 py-12">{children}</main>

      {/* Simple Footer */}
      <footer className="p-6 text-center text-sm text-[var(--color-text-muted)]">
        {appConfig.copyright}
      </footer>
    </div>
  );
}
