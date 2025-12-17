import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { appConfig, seoConfig } from '@/config';
import { ChatWidget } from '@/components/chat';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: {
    default: seoConfig.defaultTitle,
    template: seoConfig.titleTemplate,
  },
  description: seoConfig.defaultDescription,
  keywords: [...seoConfig.defaultKeywords],
  authors: [{ name: appConfig.companyName }],
  creator: appConfig.companyName,
  publisher: appConfig.companyName,
  metadataBase: new URL(appConfig.baseUrl),
  openGraph: {
    type: 'website',
    locale: seoConfig.openGraph.locale,
    siteName: seoConfig.openGraph.siteName,
    title: seoConfig.defaultTitle,
    description: seoConfig.defaultDescription,
    images: [
      {
        url: seoConfig.openGraph.defaultImage,
        width: seoConfig.openGraph.imageWidth,
        height: seoConfig.openGraph.imageHeight,
        alt: appConfig.appName,
      },
    ],
  },
  twitter: {
    card: seoConfig.twitter.cardType,
    site: seoConfig.twitter.site,
    creator: seoConfig.twitter.creator,
    title: seoConfig.defaultTitle,
    description: seoConfig.defaultDescription,
    images: [seoConfig.openGraph.defaultImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico', sizes: 'any' },
    ],
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang={appConfig.defaultLocale} className={inter.variable}>
      <head>
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(seoConfig.structuredData.organization),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(seoConfig.structuredData.website),
          }}
        />
      </head>
      <body className="min-h-screen antialiased">
        {children}
        {/* Floating Chat Widget */}
        <ChatWidget />
      </body>
    </html>
  );
}
