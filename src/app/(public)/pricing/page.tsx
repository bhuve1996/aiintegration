import { generatePageMetadata } from '@/lib/seo';
import { PricingContent } from './PricingContent';

export const metadata = generatePageMetadata('pricing');

export default function PricingPage() {
  return <PricingContent />;
}

