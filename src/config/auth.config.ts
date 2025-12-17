/**
 * Authentication Configuration
 * Dummy credentials and auth settings for development.
 * In production, replace with real authentication provider.
 */

export interface DemoUser {
  email: string;
  password: string;
  name: string;
  role: 'user' | 'admin';
  subscription: 'free' | 'starter' | 'growth' | 'enterprise';
  avatar?: string;
}

export const authConfig = {
  // Demo/Test Credentials (for development only)
  demoUsers: [
    {
      email: 'demo@nexora.ai',
      password: 'demo123',
      name: 'Demo User',
      role: 'user' as const,
      subscription: 'starter' as const,
    },
    {
      email: 'admin@nexora.ai',
      password: 'admin123',
      name: 'Admin User',
      role: 'admin' as const,
      subscription: 'enterprise' as const,
    },
    {
      email: 'test@example.com',
      password: 'test123',
      name: 'Test User',
      role: 'user' as const,
      subscription: 'free' as const,
    },
  ] as DemoUser[],

  // Session settings
  session: {
    storageKey: 'nexora_auth',
    expiryDays: 7,
  },

  // Login page content
  loginPage: {
    title: 'Welcome Back',
    subtitle: 'Sign in to your account to continue',
    emailLabel: 'Email Address',
    emailPlaceholder: 'you@example.com',
    passwordLabel: 'Password',
    passwordPlaceholder: 'Enter your password',
    submitButton: 'Sign In',
    forgotPasswordText: 'Forgot password?',
    signupText: "Don't have an account?",
    signupLink: 'Get Started',
    demoCredentialsTitle: 'Demo Credentials',
    errorMessages: {
      invalidCredentials: 'Invalid email or password',
      emptyFields: 'Please fill in all fields',
    },
  },

  // Signup page content
  signupPage: {
    title: 'Get Started',
    subtitle: 'Create your account and start automating your ads',
    nameLabel: 'Full Name',
    namePlaceholder: 'John Doe',
    emailLabel: 'Email Address',
    emailPlaceholder: 'you@example.com',
    passwordLabel: 'Password',
    passwordPlaceholder: 'Create a password',
    submitButton: 'Create Account',
    loginText: 'Already have an account?',
    loginLink: 'Sign In',
    termsText: 'By creating an account, you agree to our',
    termsLink: 'Terms of Service',
    privacyLink: 'Privacy Policy',
  },

  // Redirect paths
  redirects: {
    afterLogin: '/projects',
    afterLogout: '/',
    afterSignup: '/create',
  },
} as const;

// Helper function to validate credentials
export const validateCredentials = (email: string, password: string): DemoUser | null => {
  const user = authConfig.demoUsers.find(
    (u) => u.email.toLowerCase() === email.toLowerCase() && u.password === password
  );
  return user || null;
};

export type AuthConfig = typeof authConfig;
