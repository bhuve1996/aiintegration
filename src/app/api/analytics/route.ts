import { NextResponse } from 'next/server';
import { getDashboardMetrics } from '@/mock/data';

export async function GET() {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 400));

  const dashboardData = getDashboardMetrics();

  return NextResponse.json({
    success: true,
    data: dashboardData,
  });
}
