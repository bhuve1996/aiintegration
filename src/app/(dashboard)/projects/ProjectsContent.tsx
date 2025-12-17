'use client';

import Link from 'next/link';
import { Card, CardContent, Button, Badge, EmptyState } from '@/components/ui';
import { Plus, Folder, MoreHorizontal, TrendingUp, DollarSign, MousePointer } from 'lucide-react';

// Mock data - in real app this would come from API
const mockProjects = [
  {
    id: '1',
    name: 'Summer Campaign 2024',
    description: 'Summer sale promotion across all channels',
    status: 'active' as const,
    thumbnail: null,
    metrics: {
      spend: 2450,
      impressions: 125000,
      clicks: 3200,
      conversions: 89,
      roas: 4.2,
    },
    createdAt: '2024-01-15',
    updatedAt: '2024-01-20',
  },
  {
    id: '2',
    name: 'Brand Awareness Q1',
    description: 'Expanding brand reach to new demographics',
    status: 'active' as const,
    thumbnail: null,
    metrics: {
      spend: 5200,
      impressions: 450000,
      clicks: 8500,
      conversions: 156,
      roas: 6.8,
    },
    createdAt: '2024-01-10',
    updatedAt: '2024-01-19',
  },
  {
    id: '3',
    name: 'Product Launch - Widget Pro',
    description: 'Launch campaign for new product line',
    status: 'draft' as const,
    thumbnail: null,
    metrics: {
      spend: 0,
      impressions: 0,
      clicks: 0,
      conversions: 0,
      roas: 0,
    },
    createdAt: '2024-01-18',
    updatedAt: '2024-01-18',
  },
];

const statusColors: Record<string, { bg: string; text: string }> = {
  active: { bg: 'bg-[var(--color-success)]/10', text: 'text-[var(--color-success)]' },
  draft: { bg: 'bg-[var(--color-warning)]/10', text: 'text-[var(--color-warning)]' },
  paused: { bg: 'bg-[var(--color-text-muted)]/10', text: 'text-[var(--color-text-muted)]' },
  completed: { bg: 'bg-[var(--color-info)]/10', text: 'text-[var(--color-info)]' },
};

function formatCurrency(value: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value);
}

function formatNumber(value: number): string {
  if (value >= 1000000) return `${(value / 1000000).toFixed(1)}M`;
  if (value >= 1000) return `${(value / 1000).toFixed(1)}K`;
  return value.toString();
}

export function ProjectsContent() {
  const projects = mockProjects;
  const hasProjects = projects.length > 0;

  const handleMenuClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    // Handle menu click
  };

  return (
    <main className="min-h-[calc(100vh-4rem)] p-6">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-2xl font-bold text-[var(--color-text-primary)]">Projects</h1>
          <p className="text-sm text-[var(--color-text-muted)]">
            Manage and monitor all your advertising projects
          </p>
        </div>
        <Link href="/create">
          <Button leftIcon={<Plus className="h-4 w-4" />}>New Project</Button>
        </Link>
      </div>

      {/* Projects Grid */}
      {hasProjects ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Create New Project Card */}
          <Link href="/create">
            <Card
              variant="bordered"
              className="h-full min-h-[280px] flex flex-col items-center justify-center cursor-pointer hover:border-[var(--color-primary)] hover:bg-[var(--color-primary)]/5 transition-all group"
            >
              <div className="p-4 rounded-full bg-[var(--color-primary)]/10 group-hover:bg-[var(--color-primary)]/20 transition-colors mb-4">
                <Plus className="h-8 w-8 text-[var(--color-primary)]" />
              </div>
              <h3 className="text-lg font-semibold text-[var(--color-text-primary)] mb-2">
                Create New Project
              </h3>
              <p className="text-sm text-[var(--color-text-muted)] text-center max-w-[200px]">
                Start a new AI-powered advertising campaign
              </p>
            </Card>
          </Link>

          {/* Project Cards */}
          {projects.map((project) => {
            const status = statusColors[project.status];
            return (
              <Link key={project.id} href={`/projects/${project.id}`}>
                <Card variant="interactive" className="h-full min-h-[280px] flex flex-col">
                  <CardContent className="flex-1 flex flex-col">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-[var(--color-background-secondary)]">
                          <Folder className="h-5 w-5 text-[var(--color-primary)]" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-[var(--color-text-primary)]">
                            {project.name}
                          </h3>
                          <Badge size="sm" className={`mt-1 ${status.bg} ${status.text} border-0`}>
                            {project.status.charAt(0).toUpperCase() + project.status.slice(1)}
                          </Badge>
                        </div>
                      </div>
                      <button
                        className="p-1 rounded hover:bg-[var(--color-background-secondary)]"
                        onClick={handleMenuClick}
                      >
                        <MoreHorizontal className="h-5 w-5 text-[var(--color-text-muted)]" />
                      </button>
                    </div>

                    {/* Description */}
                    <p className="text-sm text-[var(--color-text-secondary)] mb-4 line-clamp-2">
                      {project.description}
                    </p>

                    {/* Metrics */}
                    <div className="mt-auto pt-4 border-t border-[var(--color-border)] grid grid-cols-3 gap-4">
                      <div>
                        <div className="flex items-center gap-1 text-[var(--color-text-muted)] mb-1">
                          <DollarSign className="h-3 w-3" />
                          <span className="text-xs">Spend</span>
                        </div>
                        <p className="font-semibold text-[var(--color-text-primary)]">
                          {formatCurrency(project.metrics.spend)}
                        </p>
                      </div>
                      <div>
                        <div className="flex items-center gap-1 text-[var(--color-text-muted)] mb-1">
                          <MousePointer className="h-3 w-3" />
                          <span className="text-xs">Clicks</span>
                        </div>
                        <p className="font-semibold text-[var(--color-text-primary)]">
                          {formatNumber(project.metrics.clicks)}
                        </p>
                      </div>
                      <div>
                        <div className="flex items-center gap-1 text-[var(--color-text-muted)] mb-1">
                          <TrendingUp className="h-3 w-3" />
                          <span className="text-xs">ROAS</span>
                        </div>
                        <p className="font-semibold text-[var(--color-success)]">
                          {project.metrics.roas > 0 ? `${project.metrics.roas}x` : '-'}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>
      ) : (
        <EmptyState
          icon="Folder"
          title="No projects yet"
          description="Create your first project to start running AI-powered ad campaigns."
          action={{
            label: 'Create Project',
            href: '/create',
          }}
        />
      )}
    </main>
  );
}
