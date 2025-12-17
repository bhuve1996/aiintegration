import { generatePageMetadata } from '@/lib/seo';
import { DashboardContent } from './DashboardContent';

export const metadata = generatePageMetadata('dashboard');

export default function DashboardPage() {
  return <DashboardContent />;
}

