import { generatePageMetadata } from '@/lib/seo';
import { SignupForm } from './SignupForm';

export const metadata = generatePageMetadata('signup');

export default function SignupPage() {
  return <SignupForm />;
}
