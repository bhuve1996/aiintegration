'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button, Input, Card, Spinner } from '@/components/ui';
import { Mail, ArrowLeft, CheckCircle } from 'lucide-react';

export function ForgotPasswordForm() {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsLoading(false);
    setIsSubmitted(true);
  };

  return (
    <div className="w-full max-w-md">
      {/* Back Link */}
      <Link
        href="/login"
        className="inline-flex items-center gap-2 text-sm text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)] mb-8 transition-colors"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to login
      </Link>

      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-[var(--color-text-primary)] mb-2">Reset your password</h1>
        <p className="text-[var(--color-text-secondary)]">
          Enter your email and we&apos;ll send you a link to reset your password.
        </p>
      </div>

      {/* Card */}
      <Card variant="elevated" padding="lg">
        {isSubmitted ? (
          <div className="text-center py-6">
            <div className="inline-flex p-4 rounded-full bg-[var(--color-success)]/10 mb-6">
              <CheckCircle className="h-10 w-10 text-[var(--color-success)]" />
            </div>
            <h3 className="text-xl font-semibold text-[var(--color-text-primary)] mb-3">
              Check your email
            </h3>
            <p className="text-[var(--color-text-secondary)] mb-6">
              We&apos;ve sent a password reset link to{' '}
              <span className="font-medium text-[var(--color-text-primary)]">{email}</span>
            </p>
            <p className="text-sm text-[var(--color-text-muted)] mb-6">
              Didn&apos;t receive the email? Check your spam folder or{' '}
              <button
                onClick={() => setIsSubmitted(false)}
                className="text-[var(--color-primary)] hover:underline"
              >
                try again
              </button>
            </p>
            <Link href="/login">
              <Button variant="outline" className="w-full">
                Return to login
              </Button>
            </Link>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <Input
              label="Email Address"
              type="email"
              placeholder="john@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              leftIcon={<Mail className="h-4 w-4" />}
              inputSize="lg"
              required
            />

            <Button type="submit" size="lg" className="w-full" disabled={isLoading || !email}>
              {isLoading ? (
                <span className="flex items-center gap-2">
                  <Spinner size="sm" />
                  Sending...
                </span>
              ) : (
                'Send Reset Link'
              )}
            </Button>

            <p className="text-center text-sm text-[var(--color-text-muted)]">
              Remember your password?{' '}
              <Link href="/login" className="text-[var(--color-primary)] hover:underline font-medium">
                Sign in
              </Link>
            </p>
          </form>
        )}
      </Card>
    </div>
  );
}

