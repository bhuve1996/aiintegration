'use client';

import { forwardRef, type HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';
import type { BadgeVariant } from '@/types';

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
  size?: 'sm' | 'md' | 'lg';
}

const variantStyles: Record<BadgeVariant, string> = {
  default:
    'bg-[var(--color-background-tertiary)] text-[var(--color-text-secondary)] border-[var(--color-border)]',
  primary:
    'bg-[var(--color-primary)]/10 text-[var(--color-primary)] border-[var(--color-primary)]/20',
  secondary:
    'bg-[var(--color-background-secondary)] text-[var(--color-text-muted)] border-[var(--color-border)]',
  success:
    'bg-[var(--color-success)]/10 text-[var(--color-success)] border-[var(--color-success)]/20',
  warning:
    'bg-[var(--color-warning)]/10 text-[var(--color-warning)] border-[var(--color-warning)]/20',
  destructive:
    'bg-[var(--color-destructive)]/10 text-[var(--color-destructive)] border-[var(--color-destructive)]/20',
  info: 'bg-[var(--color-info)]/10 text-[var(--color-info)] border-[var(--color-info)]/20',
  outline: 'bg-transparent text-[var(--color-text-secondary)] border-[var(--color-border)]',
};

const sizeStyles = {
  sm: 'px-2 py-0.5 text-xs',
  md: 'px-2.5 py-1 text-xs',
  lg: 'px-3 py-1.5 text-sm',
};

export const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant = 'default', size = 'md', children, ...props }, ref) => {
    return (
      <span
        ref={ref}
        className={cn(
          'inline-flex items-center rounded-full border font-medium',
          variantStyles[variant],
          sizeStyles[size],
          className
        )}
        {...props}
      >
        {children}
      </span>
    );
  }
);

Badge.displayName = 'Badge';

export default Badge;
