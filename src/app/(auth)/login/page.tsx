import { generatePageMetadata } from '@/lib/seo';
import { LoginForm } from './LoginForm';

export const metadata = generatePageMetadata('login');

export default function LoginPage() {
  return <LoginForm />;
}
