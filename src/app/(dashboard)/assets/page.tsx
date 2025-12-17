import { generatePageMetadata } from '@/lib/seo';
import { AssetsContent } from './AssetsContent';

export const metadata = generatePageMetadata('assets');

export default function AssetsPage() {
  return <AssetsContent />;
}
