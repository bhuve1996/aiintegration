import { generatePageMetadata } from '@/lib/seo';
import { AboutContent } from './AboutContent';

export const metadata = generatePageMetadata('about');

export default function AboutPage() {
  return <AboutContent />;
}

