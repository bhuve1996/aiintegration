import { Metadata } from 'next';
import { seoConfig } from '@/config';
import { PricingContent } from './PricingContent';

export const metadata: Metadata = {
  title: seoConfig.pages.pricing.title,
  description: seoConfig.pages.pricing.description,
};

export default function PricingPage() {
  return <PricingContent />;
}

