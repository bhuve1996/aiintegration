'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Button, Input, Card } from '@/components/ui';
import { authConfig } from '@/config/auth.config';
import { useAuth } from '@/hooks/useAuth';
import { Mail, Lock, Eye, EyeOff, AlertCircle, User } from 'lucide-react';

export function SignupForm() {
  const router = useRouter();
  const { signup } = useAuth();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const { signupPage, redirects } = authConfig;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!name || !email || !password) {
      setError('Please fill in all fields');
      return;
    }

    if (password.length < 6) {
      setError('Password must be at least 6 characters');
      return;
    }

    setIsLoading(true);
    const result = await signup(name, email, password);
    setIsLoading(false);

    if (result.success) {
      router.push(redirects.afterSignup);
    } else {
      setError(result.error || 'Signup failed');
    }
  };

  return (
    <div className="w-full max-w-md">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-[var(--color-text-primary)] mb-2">
          {signupPage.title}
        </h1>
        <p className="text-[var(--color-text-secondary)]">{signupPage.subtitle}</p>
      </div>

      {/* Signup Card */}
      <Card variant="elevated" padding="lg">
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Error Message */}
          {error && (
            <div className="flex items-center gap-2 p-3 rounded-lg bg-[var(--color-destructive)]/10 text-[var(--color-destructive)] text-sm">
              <AlertCircle className="h-4 w-4 shrink-0" />
              {error}
            </div>
          )}

          {/* Name Input */}
          <Input
            label={signupPage.nameLabel}
            type="text"
            placeholder={signupPage.namePlaceholder}
            value={name}
            onChange={(e) => setName(e.target.value)}
            leftIcon={<User className="h-4 w-4" />}
            inputSize="lg"
          />

          {/* Email Input */}
          <Input
            label={signupPage.emailLabel}
            type="email"
            placeholder={signupPage.emailPlaceholder}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            leftIcon={<Mail className="h-4 w-4" />}
            inputSize="lg"
          />

          {/* Password Input */}
          <div className="relative">
            <Input
              label={signupPage.passwordLabel}
              type={showPassword ? 'text' : 'password'}
              placeholder={signupPage.passwordPlaceholder}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              leftIcon={<Lock className="h-4 w-4" />}
              inputSize="lg"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-[38px] text-[var(--color-text-muted)] hover:text-[var(--color-text-secondary)]"
            >
              {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
            </button>
          </div>

          {/* Terms */}
          <p className="text-xs text-[var(--color-text-muted)]">
            {signupPage.termsText}{' '}
            <Link href="/terms" className="text-[var(--color-primary)] hover:underline">
              {signupPage.termsLink}
            </Link>{' '}
            and{' '}
            <Link href="/privacy" className="text-[var(--color-primary)] hover:underline">
              {signupPage.privacyLink}
            </Link>
            .
          </p>

          {/* Submit Button */}
          <Button type="submit" size="lg" className="w-full" isLoading={isLoading}>
            {signupPage.submitButton}
          </Button>

          {/* Login Link */}
          <p className="text-center text-sm text-[var(--color-text-secondary)]">
            {signupPage.loginText}{' '}
            <Link href="/login" className="text-[var(--color-primary)] hover:underline font-medium">
              {signupPage.loginLink}
            </Link>
          </p>
        </form>
      </Card>
    </div>
  );
}
