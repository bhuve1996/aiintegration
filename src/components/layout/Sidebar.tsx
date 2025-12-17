'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { navigationConfig } from '@/config';
import { Grid3X3, Heart, Image, Video, Trash2, Plus, Tag } from 'lucide-react';
import { useState } from 'react';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  grid: Grid3X3,
  heart: Heart,
  image: Image,
  video: Video,
  trash: Trash2,
};

interface SidebarProps {
  className?: string;
}

export function Sidebar({ className }: SidebarProps) {
  const pathname = usePathname();
  const [tags, setTags] = useState<string[]>(['Marketing', 'Social', 'Brand']);
  const [showAddTag, setShowAddTag] = useState(false);
  const [newTag, setNewTag] = useState('');

  const { assetSidebar } = navigationConfig;

  // Mock counts
  const counts: Record<string, number> = {
    all: 128,
    favorites: 12,
    images: 89,
    videos: 39,
  };

  const handleAddTag = () => {
    if (newTag.trim()) {
      setTags([...tags, newTag.trim()]);
      setNewTag('');
      setShowAddTag(false);
    }
  };

  return (
    <aside
      className={cn(
        'w-64 border-r border-[var(--color-border)] bg-[var(--color-background)] h-[calc(100vh-4rem)] sticky top-16 overflow-y-auto',
        className
      )}
    >
      <nav className="flex flex-col h-full p-4">
        {/* Main Sections */}
        <div className="space-y-1">
          {assetSidebar.sections.map((section) => {
            const Icon = iconMap[section.icon];
            const isActive = pathname === section.href || pathname.startsWith(`${section.href}?`);
            const count = section.countKey ? counts[section.countKey] : null;

            return (
              <Link
                key={section.key}
                href={section.href}
                className={cn(
                  'flex items-center justify-between px-3 py-2 text-sm font-medium rounded-lg transition-colors',
                  isActive
                    ? 'text-[var(--color-primary)] bg-[var(--color-primary)]/10'
                    : 'text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:bg-[var(--color-background-secondary)]'
                )}
              >
                <div className="flex items-center gap-3">
                  {Icon && <Icon className="h-4 w-4" />}
                  {section.label}
                </div>
                {count !== null && (
                  <span className="text-xs text-[var(--color-text-muted)]">{count}</span>
                )}
              </Link>
            );
          })}
        </div>

        {/* Tags Section */}
        <div className="mt-6">
          <div className="flex items-center justify-between px-3 mb-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-[var(--color-text-muted)]">
              Tags
            </span>
            <button
              onClick={() => setShowAddTag(true)}
              className="p-1 rounded text-[var(--color-text-muted)] hover:text-[var(--color-primary)] hover:bg-[var(--color-primary)]/10 transition-colors"
            >
              <Plus className="h-4 w-4" />
            </button>
          </div>

          <div className="space-y-1">
            {tags.map((tag) => (
              <Link
                key={tag}
                href={`/assets?tag=${encodeURIComponent(tag)}`}
                className="flex items-center gap-3 px-3 py-2 text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:bg-[var(--color-background-secondary)] rounded-lg transition-colors"
              >
                <Tag className="h-4 w-4" />
                {tag}
              </Link>
            ))}

            {showAddTag && (
              <div className="px-3 py-2">
                <input
                  type="text"
                  value={newTag}
                  onChange={(e) => setNewTag(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') handleAddTag();
                    if (e.key === 'Escape') setShowAddTag(false);
                  }}
                  onBlur={() => {
                    if (!newTag.trim()) setShowAddTag(false);
                  }}
                  placeholder="Tag name..."
                  className="w-full px-2 py-1 text-sm bg-[var(--color-background-secondary)] border border-[var(--color-border)] rounded focus:outline-none focus:border-[var(--color-primary)]"
                  autoFocus
                />
              </div>
            )}
          </div>
        </div>

        {/* Bottom Actions */}
        <div className="mt-auto pt-4 border-t border-[var(--color-border)]">
          {assetSidebar.actions.map((action) => {
            const Icon = iconMap[action.icon];

            return (
              <Link
                key={action.key}
                href={action.href}
                className="flex items-center gap-3 px-3 py-2 text-sm text-[var(--color-text-muted)] hover:text-[var(--color-destructive)] hover:bg-[var(--color-destructive)]/10 rounded-lg transition-colors"
              >
                {Icon && <Icon className="h-4 w-4" />}
                {action.label}
              </Link>
            );
          })}
        </div>
      </nav>
    </aside>
  );
}

export default Sidebar;
