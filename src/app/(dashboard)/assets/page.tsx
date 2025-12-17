import { Metadata } from 'next';
import { seoConfig } from '@/config';
import { AssetsContent } from './AssetsContent';

export const metadata: Metadata = {
  title: seoConfig.pages.assets.title,
  description: seoConfig.pages.assets.description,
};

export default function AssetsPage() {
  return <AssetsContent />;
}
