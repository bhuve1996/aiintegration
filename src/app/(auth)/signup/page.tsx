import { Metadata } from 'next';
import { seoConfig } from '@/config';
import { SignupForm } from './SignupForm';

export const metadata: Metadata = {
  title: seoConfig.pages.signup.title,
  description: seoConfig.pages.signup.description,
};

export default function SignupPage() {
  return <SignupForm />;
}
