import { Metadata } from 'next';
import { seoConfig } from '@/config';
import { AboutContent } from './AboutContent';

export const metadata: Metadata = {
  title: seoConfig.pages.about.title,
  description: seoConfig.pages.about.description,
};

export default function AboutPage() {
  return <AboutContent />;
}

