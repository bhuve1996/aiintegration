import { Metadata } from 'next';
import { seoConfig } from '@/config';
import { ContactContent } from './ContactContent';

export const metadata: Metadata = {
  title: seoConfig.pages.contact.title,
  description: seoConfig.pages.contact.description,
};

export default function ContactPage() {
  return <ContactContent />;
}

