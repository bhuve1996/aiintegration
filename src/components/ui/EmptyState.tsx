'use client';

import { cn } from '@/lib/utils';
import { Button } from './Button';
import * as Icons from 'lucide-react';

export interface EmptyStateProps {
  icon?: keyof typeof Icons;
  title: string;
  description?: string;
  action?: {
    label: string;
    onClick?: () => void;
    href?: string;
  };
  className?: string;
}

export function EmptyState({ icon, title, description, action, className }: EmptyStateProps) {
  const IconComponent = icon ? (Icons[icon] as React.ComponentType<{ className?: string }>) : null;

  return (
    <div
      className={cn('flex flex-col items-center justify-center py-16 px-4 text-center', className)}
    >
      {IconComponent && (
        <div className="mb-4 rounded-full bg-[var(--color-background-secondary)] p-4">
          <IconComponent className="h-8 w-8 text-[var(--color-text-muted)]" />
        </div>
      )}
      <h3 className="mb-2 text-lg font-semibold text-[var(--color-text-primary)]">{title}</h3>
      {description && (
        <p className="mb-6 max-w-sm text-sm text-[var(--color-text-secondary)]">{description}</p>
      )}
      {action && (
        <Button onClick={action.onClick} {...(action.href ? { as: 'a', href: action.href } : {})}>
          {action.label}
        </Button>
      )}
    </div>
  );
}

export default EmptyState;
