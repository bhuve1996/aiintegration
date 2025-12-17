/**
 * SEO Utility Functions
 * Helper functions for generating page metadata from config.
 */

import type { Metadata } from 'next';
import { seoConfig, appConfig } from '@/config';

export type SeoPageKey = keyof typeof seoConfig.pages;

/**
 * Generate metadata for a specific page using the SEO config
 */
export function generatePageMetadata(pageKey: SeoPageKey, overrides?: Partial<Metadata>): Metadata {
  const pageConfig = seoConfig.pages[pageKey];

  if (!pageConfig) {
    console.warn(`SEO config not found for page: ${pageKey}`);
    return {};
  }

  const metadata: Metadata = {
    title: pageConfig.title,
    description: pageConfig.description,
  };

  // Add keywords if available
  if (pageConfig.keywords) {
    metadata.keywords = pageConfig.keywords;
  }

  // Handle noIndex pages
  if (pageConfig.noIndex) {
    metadata.robots = {
      index: false,
      follow: false,
    };
  }

  // Add OpenGraph
  metadata.openGraph = {
    title: pageConfig.title,
    description: pageConfig.description,
    url: seoConfig.getCanonicalUrl(`/${pageKey === 'home' ? '' : pageKey}`),
    siteName: appConfig.appName,
    images: pageConfig.ogImage
      ? [{ url: pageConfig.ogImage }]
      : [{ url: seoConfig.openGraph.defaultImage }],
  };

  // Add Twitter Card
  metadata.twitter = {
    card: 'summary_large_image',
    title: pageConfig.title,
    description: pageConfig.description,
  };

  // Merge with overrides
  return { ...metadata, ...overrides };
}

/**
 * Get all available SEO page keys
 */
export function getSeoPageKeys(): SeoPageKey[] {
  return Object.keys(seoConfig.pages) as SeoPageKey[];
}

/**
 * Check if a page key exists in SEO config
 */
export function hasSeoConfig(pageKey: string): pageKey is SeoPageKey {
  return pageKey in seoConfig.pages;
}

