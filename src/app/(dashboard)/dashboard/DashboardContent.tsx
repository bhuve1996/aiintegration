'use client';

import { useState } from 'react';
import Link from 'next/link';
import { PageHeader } from '@/components/layout';
import { Card, CardContent, Button, Badge, Select, Divider, type SelectOption } from '@/components/ui';
import {
  TrendingUp,
  TrendingDown,
  DollarSign,
  Eye,
  MousePointer,
  ShoppingCart,
  ArrowRight,
  Sparkles,
  BarChart3,
  Target,
  Zap,
} from 'lucide-react';

const timeframeOptions: SelectOption[] = [
  { value: '7d', label: 'Last 7 days' },
  { value: '30d', label: 'Last 30 days' },
  { value: '90d', label: 'Last 90 days' },
  { value: 'all', label: 'All time' },
];

// Mock analytics data
const analyticsData = {
  overview: [
    {
      label: 'Total Spend',
      value: '$12,450',
      change: 12.5,
      icon: DollarSign,
      color: 'text-[var(--color-primary)]',
      bgColor: 'bg-[var(--color-primary)]/10',
    },
    {
      label: 'Impressions',
      value: '1.2M',
      change: 8.2,
      icon: Eye,
      color: 'text-purple-500',
      bgColor: 'bg-purple-500/10',
    },
    {
      label: 'Clicks',
      value: '45.2K',
      change: -3.1,
      icon: MousePointer,
      color: 'text-blue-500',
      bgColor: 'bg-blue-500/10',
    },
    {
      label: 'Conversions',
      value: '892',
      change: 24.7,
      icon: ShoppingCart,
      color: 'text-[var(--color-success)]',
      bgColor: 'bg-[var(--color-success)]/10',
    },
  ],
  kpis: {
    ctr: { value: '3.76%', benchmark: '2.5%', status: 'good' },
    cpc: { value: '$0.28', benchmark: '$0.35', status: 'good' },
    cpa: { value: '$13.95', benchmark: '$15.00', status: 'good' },
    roas: { value: '4.2x', benchmark: '3.0x', status: 'excellent' },
  },
  topCampaigns: [
    { name: 'Summer Sale 2024', spend: 4250, conversions: 312, roas: 5.2, status: 'active' },
    { name: 'Brand Awareness Q1', spend: 3100, conversions: 189, roas: 3.8, status: 'active' },
    { name: 'Product Launch', spend: 2800, conversions: 245, roas: 4.9, status: 'active' },
    { name: 'Retargeting Campaign', spend: 1500, conversions: 98, roas: 6.1, status: 'paused' },
  ],
  aiInsights: [
    {
      type: 'opportunity',
      title: 'Increase budget on Summer Sale',
      description: 'This campaign is performing 40% above target ROAS. Consider increasing daily budget.',
      impact: '+$2,400 projected monthly revenue',
    },
    {
      type: 'warning',
      title: 'Audience fatigue detected',
      description: 'Brand Awareness Q1 is showing signs of ad fatigue. Refresh creatives recommended.',
      impact: 'Prevent 15% CTR decline',
    },
    {
      type: 'success',
      title: 'New high-performing audience',
      description: "AI discovered 'Tech Professionals 25-34' segment with 2x higher conversion rate.",
      impact: 'Expand reach by 50K users',
    },
  ],
};

export function DashboardContent() {
  const [timeframe, setTimeframe] = useState('30d');

  const formatCurrency = (value: number) =>
    new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(value);

  return (
    <main className="min-h-[calc(100vh-4rem)] p-6">
      {/* Page Header */}
      <PageHeader
        title="Dashboard"
        description="Overview of your advertising performance"
        actions={
          <div className="flex items-center gap-3">
            <Select
              options={timeframeOptions}
              value={timeframe}
              onChange={(e) => setTimeframe(e.target.value)}
              className="w-40"
            />
            <Link href="/create">
              <Button leftIcon={<Sparkles className="h-4 w-4" />}>New Campaign</Button>
            </Link>
          </div>
        }
      />

      {/* Overview Cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {analyticsData.overview.map((metric) => {
          const Icon = metric.icon;
          const isPositive = metric.change >= 0;
          return (
            <Card key={metric.label} variant="bordered" padding="lg">
              <div className="flex items-start justify-between mb-4">
                <div className={`p-2.5 rounded-xl ${metric.bgColor}`}>
                  <Icon className={`h-5 w-5 ${metric.color}`} />
                </div>
                <div
                  className={`flex items-center gap-1 text-sm font-medium ${
                    isPositive ? 'text-[var(--color-success)]' : 'text-[var(--color-destructive)]'
                  }`}
                >
                  {isPositive ? <TrendingUp className="h-4 w-4" /> : <TrendingDown className="h-4 w-4" />}
                  {Math.abs(metric.change)}%
                </div>
              </div>
              <p className="text-2xl font-bold text-[var(--color-text-primary)]">{metric.value}</p>
              <p className="text-sm text-[var(--color-text-muted)] mt-1">{metric.label}</p>
            </Card>
          );
        })}
      </div>

      <div className="grid lg:grid-cols-3 gap-6 mb-8">
        {/* KPIs */}
        <Card variant="bordered" className="lg:col-span-1">
          <CardContent>
            <div className="flex items-center gap-2 mb-6">
              <Target className="h-5 w-5 text-[var(--color-primary)]" />
              <h3 className="font-semibold text-[var(--color-text-primary)]">Key Metrics</h3>
            </div>
            <div className="space-y-5">
              {Object.entries(analyticsData.kpis).map(([key, data]) => (
                <div key={key}>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-sm text-[var(--color-text-secondary)] uppercase">{key}</span>
                    <Badge
                      variant={data.status === 'excellent' ? 'success' : data.status === 'good' ? 'primary' : 'warning'}
                      size="sm"
                    >
                      {data.status === 'excellent' ? '↑ Excellent' : data.status === 'good' ? '✓ Good' : '→ Average'}
                    </Badge>
                  </div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-xl font-bold text-[var(--color-text-primary)]">{data.value}</span>
                    <span className="text-xs text-[var(--color-text-muted)]">vs {data.benchmark} benchmark</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Top Campaigns */}
        <Card variant="bordered" className="lg:col-span-2">
          <CardContent>
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                <BarChart3 className="h-5 w-5 text-[var(--color-primary)]" />
                <h3 className="font-semibold text-[var(--color-text-primary)]">Top Campaigns</h3>
              </div>
              <Link href="/projects" className="text-sm text-[var(--color-primary)] hover:underline flex items-center gap-1">
                View all <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="space-y-4">
              {analyticsData.topCampaigns.map((campaign, idx) => (
                <div key={idx}>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[var(--color-primary)] to-purple-600 flex items-center justify-center">
                        <span className="text-xs font-bold text-white">{idx + 1}</span>
                      </div>
                      <div>
                        <p className="font-medium text-[var(--color-text-primary)]">{campaign.name}</p>
                        <p className="text-xs text-[var(--color-text-muted)]">
                          {formatCurrency(campaign.spend)} spent • {campaign.conversions} conversions
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-[var(--color-success)]">{campaign.roas}x ROAS</p>
                      <Badge
                        size="sm"
                        variant={campaign.status === 'active' ? 'success' : 'secondary'}
                        className="mt-1"
                      >
                        {campaign.status}
                      </Badge>
                    </div>
                  </div>
                  {idx < analyticsData.topCampaigns.length - 1 && <Divider className="mt-4" />}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* AI Insights */}
      <Card variant="elevated">
        <CardContent>
          <div className="flex items-center gap-2 mb-6">
            <div className="p-2 rounded-lg bg-gradient-to-br from-[var(--color-primary)] to-purple-600">
              <Zap className="h-5 w-5 text-white" />
            </div>
            <div>
              <h3 className="font-semibold text-[var(--color-text-primary)]">AI Insights</h3>
              <p className="text-sm text-[var(--color-text-muted)]">
                Smart recommendations based on your campaign performance
              </p>
            </div>
          </div>
          <div className="grid sm:grid-cols-3 gap-4">
            {analyticsData.aiInsights.map((insight, idx) => {
              const colors = {
                opportunity: 'border-[var(--color-primary)] bg-[var(--color-primary)]/5',
                warning: 'border-[var(--color-warning)] bg-[var(--color-warning)]/5',
                success: 'border-[var(--color-success)] bg-[var(--color-success)]/5',
              };
              return (
                <div
                  key={idx}
                  className={`p-4 rounded-xl border-l-4 ${colors[insight.type as keyof typeof colors]}`}
                >
                  <h4 className="font-medium text-[var(--color-text-primary)] mb-2">{insight.title}</h4>
                  <p className="text-sm text-[var(--color-text-secondary)] mb-3">{insight.description}</p>
                  <Badge variant="outline" size="sm">
                    {insight.impact}
                  </Badge>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>
    </main>
  );
}

