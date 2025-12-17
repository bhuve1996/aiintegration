import { generatePageMetadata } from '@/lib/seo';
import { ForgotPasswordForm } from './ForgotPasswordForm';

export const metadata = generatePageMetadata('forgotPassword');

export default function ForgotPasswordPage() {
  return <ForgotPasswordForm />;
}

