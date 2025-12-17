import type { AnalyticsData, CampaignMetrics } from '@/types';

// Generate mock analytics data for the past 30 days
export const generateAnalyticsData = (days: number = 30): AnalyticsData[] => {
  const data: AnalyticsData[] = [];
  const baseDate = new Date();

  for (let i = days - 1; i >= 0; i--) {
    const date = new Date(baseDate);
    date.setDate(date.getDate() - i);

    // Add some variance to make data look realistic
    const variance = 0.8 + Math.random() * 0.4; // 80% to 120%
    const weekendFactor = date.getDay() === 0 || date.getDay() === 6 ? 0.7 : 1;

    const spend = Math.round(150 * variance * weekendFactor);
    const impressions = Math.round(5000 * variance * weekendFactor);
    const clicks = Math.round(impressions * (0.02 + Math.random() * 0.02));
    const conversions = Math.round(clicks * (0.03 + Math.random() * 0.02));
    const revenue = Math.round(conversions * (45 + Math.random() * 30));

    data.push({
      date: date.toISOString().split('T')[0],
      spend,
      impressions,
      clicks,
      conversions,
      revenue,
    });
  }

  return data;
};

// Aggregate metrics from analytics data
export const aggregateMetrics = (data: AnalyticsData[]): CampaignMetrics => {
  const totals = data.reduce(
    (acc, day) => ({
      spend: acc.spend + day.spend,
      impressions: acc.impressions + day.impressions,
      clicks: acc.clicks + day.clicks,
      conversions: acc.conversions + day.conversions,
      revenue: acc.revenue + day.revenue,
    }),
    { spend: 0, impressions: 0, clicks: 0, conversions: 0, revenue: 0 }
  );

  return {
    spend: totals.spend,
    impressions: totals.impressions,
    reach: Math.round(totals.impressions * 0.65), // Estimate unique reach
    clicks: totals.clicks,
    ctr: totals.impressions > 0 ? (totals.clicks / totals.impressions) * 100 : 0,
    conversions: totals.conversions,
    cpc: totals.clicks > 0 ? totals.spend / totals.clicks : 0,
    cpa: totals.conversions > 0 ? totals.spend / totals.conversions : 0,
    roas: totals.spend > 0 ? totals.revenue / totals.spend : 0,
  };
};

// Dashboard summary metrics
export const getDashboardMetrics = () => {
  const last30Days = generateAnalyticsData(30);
  const previous30Days = generateAnalyticsData(30);

  const current = aggregateMetrics(last30Days);
  const previous = aggregateMetrics(previous30Days);

  const calculateChange = (current: number, previous: number): number => {
    if (previous === 0) return 0;
    return ((current - previous) / previous) * 100;
  };

  return {
    metrics: current,
    changes: {
      spend: calculateChange(current.spend, previous.spend),
      impressions: calculateChange(current.impressions, previous.impressions),
      clicks: calculateChange(current.clicks, previous.clicks),
      conversions: calculateChange(current.conversions, previous.conversions),
      roas: calculateChange(current.roas, previous.roas),
    },
    chartData: last30Days,
  };
};
