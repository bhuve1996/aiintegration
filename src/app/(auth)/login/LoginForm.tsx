'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Button, Input, Card } from '@/components/ui';
import { authConfig } from '@/config/auth.config';
import { useAuth } from '@/hooks/useAuth';
import { Mail, Lock, Eye, EyeOff, AlertCircle, User } from 'lucide-react';

export function LoginForm() {
  const router = useRouter();
  const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const { loginPage, demoUsers, redirects } = authConfig;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!email || !password) {
      setError(loginPage.errorMessages.emptyFields);
      return;
    }

    setIsLoading(true);
    const result = await login(email, password);
    setIsLoading(false);

    if (result.success) {
      router.push(redirects.afterLogin);
    } else {
      setError(result.error || 'Login failed');
    }
  };

  const fillDemoCredentials = (user: (typeof demoUsers)[number]) => {
    setEmail(user.email);
    setPassword(user.password);
    setError('');
  };

  return (
    <div className="w-full max-w-md">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-[var(--color-text-primary)] mb-2">
          {loginPage.title}
        </h1>
        <p className="text-[var(--color-text-secondary)]">{loginPage.subtitle}</p>
      </div>

      {/* Login Card */}
      <Card variant="elevated" padding="lg">
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Error Message */}
          {error && (
            <div className="flex items-center gap-2 p-3 rounded-lg bg-[var(--color-destructive)]/10 text-[var(--color-destructive)] text-sm">
              <AlertCircle className="h-4 w-4 shrink-0" />
              {error}
            </div>
          )}

          {/* Email Input */}
          <Input
            label={loginPage.emailLabel}
            type="email"
            placeholder={loginPage.emailPlaceholder}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            leftIcon={<Mail className="h-4 w-4" />}
            inputSize="lg"
          />

          {/* Password Input */}
          <div className="relative">
            <Input
              label={loginPage.passwordLabel}
              type={showPassword ? 'text' : 'password'}
              placeholder={loginPage.passwordPlaceholder}
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

          {/* Forgot Password */}
          <div className="text-right">
            <Link
              href="/forgot-password"
              className="text-sm text-[var(--color-primary)] hover:underline"
            >
              {loginPage.forgotPasswordText}
            </Link>
          </div>

          {/* Submit Button */}
          <Button type="submit" size="lg" className="w-full" isLoading={isLoading}>
            {loginPage.submitButton}
          </Button>

          {/* Sign Up Link */}
          <p className="text-center text-sm text-[var(--color-text-secondary)]">
            {loginPage.signupText}{' '}
            <Link
              href="/signup"
              className="text-[var(--color-primary)] hover:underline font-medium"
            >
              {loginPage.signupLink}
            </Link>
          </p>
        </form>
      </Card>

      {/* Demo Credentials */}
      <Card variant="bordered" padding="md" className="mt-6">
        <h3 className="text-sm font-semibold text-[var(--color-text-primary)] mb-3 flex items-center gap-2">
          <User className="h-4 w-4" />
          {loginPage.demoCredentialsTitle}
        </h3>
        <div className="space-y-2">
          {demoUsers.map((user) => (
            <button
              key={user.email}
              type="button"
              onClick={() => fillDemoCredentials(user)}
              className="w-full p-3 rounded-lg bg-[var(--color-background-secondary)] hover:bg-[var(--color-background-tertiary)] text-left transition-colors group"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-[var(--color-text-primary)]">
                    {user.email}
                  </p>
                  <p className="text-xs text-[var(--color-text-muted)]">
                    Password: {user.password} • {user.subscription} plan
                  </p>
                </div>
                <span className="text-xs text-[var(--color-primary)] opacity-0 group-hover:opacity-100 transition-opacity">
                  Use →
                </span>
              </div>
            </button>
          ))}
        </div>
      </Card>
    </div>
  );
}
