'use client';

import { cn } from '@/lib/utils';

export interface DividerProps {
  orientation?: 'horizontal' | 'vertical';
  label?: string;
  className?: string;
}

export function Divider({ orientation = 'horizontal', label, className }: DividerProps) {
  if (orientation === 'vertical') {
    return (
      <div
        className={cn('w-px bg-[var(--color-border)] self-stretch', className)}
        role="separator"
        aria-orientation="vertical"
      />
    );
  }

  if (label) {
    return (
      <div className={cn('relative flex items-center', className)} role="separator">
        <div className="flex-1 border-t border-[var(--color-border)]" />
        <span className="px-4 text-sm text-[var(--color-text-muted)] bg-[var(--color-background)]">
          {label}
        </span>
        <div className="flex-1 border-t border-[var(--color-border)]" />
      </div>
    );
  }

  return (
    <hr
      className={cn('border-t border-[var(--color-border)] w-full', className)}
      role="separator"
      aria-orientation="horizontal"
    />
  );
}

export default Divider;
