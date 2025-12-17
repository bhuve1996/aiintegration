import { Metadata } from 'next';
import { seoConfig } from '@/config';
import { LoginForm } from './LoginForm';

export const metadata: Metadata = {
  title: seoConfig.pages.login.title,
  description: seoConfig.pages.login.description,
};

export default function LoginPage() {
  return <LoginForm />;
}
