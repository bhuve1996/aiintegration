/**
 * Application Configuration
 * Global app-level settings and branding.
 * Change these values to white-label the application.
 */

export const appConfig = {
  // Brand Identity
  appName: 'Nexora',
  companyName: 'Nexora Technologies',
  tagline: 'AI-Powered Ad Automation',
  description: 'Unlock the full potential of your Meta Ads with intelligent automation',

  // Domain & URLs
  domain: 'nexora.ai',
  baseUrl: process.env.NEXT_PUBLIC_BASE_URL || 'https://nexora.ai',
  apiUrl: process.env.NEXT_PUBLIC_API_URL || '/api',

  // Localization
  defaultLocale: 'en',
  supportedLocales: ['en', 'es', 'zh', 'pt-br', 'ar', 'hi'] as const,

  // Branding Text
  logoText: 'Nexora',
  copyright: `© ${new Date().getFullYear()} Nexora Technologies. All Rights Reserved.`,

  // Social Links
  social: {
    twitter: 'https://twitter.com/nexora',
    linkedin: 'https://linkedin.com/company/nexora',
    facebook: 'https://facebook.com/nexora',
    instagram: 'https://instagram.com/nexora',
  },

  // Support
  support: {
    email: 'support@nexora.ai',
    phone: '+1 (555) 123-4567',
    hours: '24/7 Support',
  },

  // Feature Flags
  features: {
    darkMode: true,
    i18n: true,
    analytics: true,
    chatWidget: true,
    notifications: true,
  },

  // Analytics
  analytics: {
    googleAnalyticsId: process.env.NEXT_PUBLIC_GA_ID || '',
    mixpanelToken: process.env.NEXT_PUBLIC_MIXPANEL_TOKEN || '',
  },
} as const;

export type AppConfig = typeof appConfig;
export type SupportedLocale = (typeof appConfig.supportedLocales)[number];
