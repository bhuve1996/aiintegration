/**
 * Dashboard Content Configuration
 * Dashboard sections, widgets, and empty states.
 */

export interface DashboardSection {
  id: string;
  title: string;
  iconKey: string;
  route: string;
  enabled: boolean;
  description?: string;
}

export interface DashboardMetric {
  key: string;
  label: string;
  format: 'number' | 'currency' | 'percent' | 'duration';
  trend?: 'up' | 'down' | 'neutral';
}

export const dashboardConfig = {
  // Main Dashboard Sections
  sections: [
    {
      id: 'overview',
      title: 'Overview',
      iconKey: 'layout-dashboard',
      route: '/dashboard',
      enabled: true,
      description: "Get a bird's eye view of all your campaigns",
    },
    {
      id: 'campaigns',
      title: 'Campaigns',
      iconKey: 'megaphone',
      route: '/dashboard/campaigns',
      enabled: true,
      description: 'Manage and monitor active campaigns',
    },
    {
      id: 'analytics',
      title: 'Analytics',
      iconKey: 'chart-bar',
      route: '/dashboard/analytics',
      enabled: true,
      description: 'Deep dive into performance metrics',
    },
    {
      id: 'audiences',
      title: 'Audiences',
      iconKey: 'users',
      route: '/dashboard/audiences',
      enabled: true,
      description: 'View and manage target audiences',
    },
    {
      id: 'reports',
      title: 'Reports',
      iconKey: 'file-text',
      route: '/dashboard/reports',
      enabled: false,
      description: 'Generate custom performance reports',
    },
  ] as DashboardSection[],

  // Key Metrics to Display
  metrics: [
    {
      key: 'totalSpend',
      label: 'Total Spend',
      format: 'currency',
    },
    {
      key: 'impressions',
      label: 'Impressions',
      format: 'number',
    },
    {
      key: 'clicks',
      label: 'Clicks',
      format: 'number',
    },
    {
      key: 'ctr',
      label: 'CTR',
      format: 'percent',
    },
    {
      key: 'conversions',
      label: 'Conversions',
      format: 'number',
    },
    {
      key: 'roas',
      label: 'ROAS',
      format: 'number',
    },
    {
      key: 'cpc',
      label: 'Avg. CPC',
      format: 'currency',
    },
    {
      key: 'cpa',
      label: 'Avg. CPA',
      format: 'currency',
    },
  ] as DashboardMetric[],

  // Time Range Options
  timeRanges: [
    { key: 'today', label: 'Today' },
    { key: '7d', label: 'Last 7 Days' },
    { key: '30d', label: 'Last 30 Days' },
    { key: '90d', label: 'Last 90 Days' },
    { key: 'custom', label: 'Custom Range' },
  ],

  // Empty States
  emptyStates: {
    noCampaigns: {
      icon: 'megaphone',
      title: 'No campaigns yet',
      description: 'Create your first AI-powered campaign and start driving results.',
      cta: {
        label: 'Create Campaign',
        href: '/create',
      },
    },
    noData: {
      icon: 'chart-bar',
      title: 'No data available',
      description: "Once your campaigns start running, you'll see performance data here.",
    },
    noAudiences: {
      icon: 'users',
      title: 'No audiences created',
      description: 'Our AI will automatically create optimized audiences for your campaigns.',
    },
  },

  // Quick Actions
  quickActions: [
    {
      key: 'create-campaign',
      label: 'Create Campaign',
      icon: 'plus',
      href: '/create',
      variant: 'primary',
    },
    {
      key: 'upload-assets',
      label: 'Upload Assets',
      icon: 'upload',
      href: '/assets?action=upload',
      variant: 'secondary',
    },
    {
      key: 'view-reports',
      label: 'View Reports',
      icon: 'file-text',
      href: '/dashboard/reports',
      variant: 'secondary',
    },
  ],
} as const;

export type DashboardConfig = typeof dashboardConfig;
