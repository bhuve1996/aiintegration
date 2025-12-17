import { generatePageMetadata } from '@/lib/seo';
import { ContactContent } from './ContactContent';

export const metadata = generatePageMetadata('contact');

export default function ContactPage() {
  return <ContactContent />;
}

