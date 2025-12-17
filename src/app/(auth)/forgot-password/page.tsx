import { Metadata } from 'next';
import { seoConfig } from '@/config';
import { ForgotPasswordForm } from './ForgotPasswordForm';

export const metadata: Metadata = {
  title: seoConfig.pages.forgotPassword.title,
  description: seoConfig.pages.forgotPassword.description,
};

export default function ForgotPasswordPage() {
  return <ForgotPasswordForm />;
}

