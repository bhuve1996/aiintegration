import { Metadata } from 'next';
import { seoConfig } from '@/config';
import { DashboardContent } from './DashboardContent';

export const metadata: Metadata = {
  title: seoConfig.pages.dashboard.title,
  description: seoConfig.pages.dashboard.description,
};

export default function DashboardPage() {
  return <DashboardContent />;
}

