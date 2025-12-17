/**
 * SEO Configuration
 * All meta tags, OpenGraph, Twitter cards, and structured data.
 * Server-rendered and fully config-driven.
 */

import { appConfig } from './app.config';

export interface PageSeoConfig {
  title: string;
  description: string;
  keywords?: string[];
  ogImage?: string;
  noIndex?: boolean;
}

export const seoConfig = {
  // Default Meta
  defaultTitle: `${appConfig.appName} - ${appConfig.tagline}`,
  titleTemplate: `%s | ${appConfig.appName}`,
  defaultDescription: appConfig.description,

  // Default Keywords
  defaultKeywords: [
    'AI advertising',
    'Meta Ads automation',
    'Facebook ads AI',
    'ad optimization',
    'marketing automation',
    'ROAS optimization',
    'ad creative AI',
    'performance marketing',
  ],

  // OpenGraph Defaults
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: appConfig.appName,
    defaultImage: '/images/og-default.jpg',
    imageWidth: 1200,
    imageHeight: 630,
  },

  // Twitter Card Defaults
  twitter: {
    cardType: 'summary_large_image' as const,
    site: '@nexora',
    creator: '@nexora',
  },

  // Canonical URL Builder
  getCanonicalUrl: (path: string): string => {
    const cleanPath = path.startsWith('/') ? path : `/${path}`;
    return `${appConfig.baseUrl}${cleanPath}`;
  },

  // Per-Page SEO Configurations
  pages: {
    home: {
      title: `${appConfig.appName} - Unlock the Full Potential of Your Meta Ads`,
      description:
        'AI-powered ad automation that takes you from concept to campaign in minutes. Launch faster, spend smarter, achieve explosive ROAS.',
      keywords: ['AI ads', 'Meta advertising', 'automated campaigns', 'ad optimization'],
    },
    pricing: {
      title: 'Pricing Plans',
      description:
        'Choose the perfect plan for your business. From startups to enterprises, we have AI-powered ad solutions for every scale.',
      keywords: ['pricing', 'ad plans', 'marketing subscription', 'AI advertising plans'],
    },
    create: {
      title: 'Create Campaign',
      description:
        'Start your AI-powered ad campaign in just 1 minute. Simply enter your URL and let our AI do the rest.',
      keywords: ['create ads', 'campaign builder', 'AI campaign', 'ad creator'],
    },
    projects: {
      title: 'Projects',
      description:
        'Manage all your advertising projects in one place. Track performance, optimize campaigns, and scale your success.',
      keywords: ['ad projects', 'campaign management', 'marketing dashboard'],
    },
    assets: {
      title: 'Asset Library',
      description:
        'Organize and manage all your creative assets. Images, videos, and more - everything in one centralized library.',
      keywords: ['asset management', 'creative library', 'ad assets', 'media library'],
    },
    dashboard: {
      title: 'Dashboard',
      description:
        'Get real-time insights into your ad performance. Track metrics, analyze trends, and optimize your campaigns.',
      keywords: ['ad dashboard', 'analytics', 'performance tracking', 'marketing insights'],
    },
    login: {
      title: 'Sign In',
      description: `Sign in to your ${appConfig.appName} account and start managing your AI-powered ad campaigns.`,
      noIndex: true,
    },
    signup: {
      title: 'Get Started',
      description: `Create your ${appConfig.appName} account and unlock AI-powered advertising automation.`,
      keywords: ['signup', 'create account', 'get started', 'free trial'],
    },
    forgotPassword: {
      title: 'Reset Password',
      description: `Reset your ${appConfig.appName} password and regain access to your account.`,
      noIndex: true,
    },
    about: {
      title: 'About Us',
      description: `Learn about ${appConfig.appName}'s mission to democratize AI advertising for businesses of all sizes.`,
      keywords: ['about', 'company', 'team', 'mission', 'AI advertising platform'],
    },
    contact: {
      title: 'Contact Us',
      description: `Get in touch with the ${appConfig.appName} team. We're here to help with any questions about our AI advertising platform.`,
      keywords: ['contact', 'support', 'help', 'customer service'],
    },
  } as Record<string, PageSeoConfig>,

  // Structured Data Templates
  structuredData: {
    organization: {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: appConfig.companyName,
      url: appConfig.baseUrl,
      logo: `${appConfig.baseUrl}/images/logo.png`,
      sameAs: Object.values(appConfig.social),
      contactPoint: {
        '@type': 'ContactPoint',
        email: appConfig.support.email,
        contactType: 'customer service',
        availableLanguage: appConfig.supportedLocales,
      },
    },
    website: {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: appConfig.appName,
      url: appConfig.baseUrl,
      potentialAction: {
        '@type': 'SearchAction',
        target: `${appConfig.baseUrl}/search?q={search_term_string}`,
        'query-input': 'required name=search_term_string',
      },
    },
    software: {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: appConfig.appName,
      applicationCategory: 'BusinessApplication',
      operatingSystem: 'Web Browser',
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'USD',
      },
    },
  },
} as const;

export type SeoConfig = typeof seoConfig;
