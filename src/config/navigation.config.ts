/**
 * Navigation Configuration
 * Header, sidebar, and footer navigation items.
 * All labels and routes are config-driven.
 */

export interface NavItem {
  key: string;
  label: string;
  href: string;
  icon?: string;
  badge?: string;
  external?: boolean;
  enabled: boolean;
}

export interface NavSection {
  title: string;
  items: NavItem[];
}

export const navigationConfig = {
  // Main Header Navigation (Public)
  header: {
    logo: {
      text: 'Nexora',
      href: '/',
    },
    items: [
      { key: 'features', label: 'Features', href: '/#features', enabled: true },
      { key: 'pricing', label: 'Pricing', href: '/pricing', enabled: true },
      { key: 'about', label: 'About', href: '/about', enabled: true },
    ] as NavItem[],
    cta: {
      label: 'Get Started',
      href: '/signup',
    },
  },

  // Dashboard Top Navigation
  dashboardNav: {
    items: [
      { key: 'create', label: 'Create', href: '/create', icon: 'plus', enabled: true },
      { key: 'projects', label: 'Projects', href: '/projects', icon: 'folder', enabled: true },
      { key: 'assets', label: 'Asset Library', href: '/assets', icon: 'image', enabled: true },
    ] as NavItem[],
  },

  // Asset Library Sidebar
  assetSidebar: {
    sections: [
      {
        key: 'all',
        label: 'All Assets',
        icon: 'grid',
        href: '/assets',
        countKey: 'all',
      },
      {
        key: 'favorites',
        label: 'Favorites',
        icon: 'heart',
        href: '/assets?filter=favorites',
        countKey: 'favorites',
      },
      {
        key: 'images',
        label: 'Images',
        icon: 'image',
        href: '/assets?type=images',
        countKey: 'images',
      },
      {
        key: 'videos',
        label: 'Videos',
        icon: 'video',
        href: '/assets?type=videos',
        countKey: 'videos',
      },
    ],
    actions: [
      {
        key: 'trash',
        label: 'Trash',
        icon: 'trash',
        href: '/assets/trash',
        position: 'bottom' as const,
      },
    ],
    tags: {
      expandable: true,
      addLabel: 'Add Tag',
    },
  },

  // User Menu Items
  userMenu: {
    items: [
      {
        key: 'profile',
        label: 'Profile',
        href: '/settings/profile',
        icon: 'user',
      },
      {
        key: 'settings',
        label: 'Settings',
        href: '/settings',
        icon: 'settings',
      },
      {
        key: 'billing',
        label: 'Billing',
        href: '/settings/billing',
        icon: 'credit-card',
      },
      {
        key: 'help',
        label: 'Help & Support',
        href: '/help',
        icon: 'help-circle',
      },
    ],
    footer: [
      {
        key: 'logout',
        label: 'Sign Out',
        action: 'logout',
        icon: 'log-out',
        destructive: true,
      },
    ],
  },

  // Footer Navigation
  footer: {
    sections: [
      {
        title: 'Product',
        items: [
          { key: 'features', label: 'Features', href: '/#features', enabled: true },
          { key: 'pricing', label: 'Pricing', href: '/pricing', enabled: true },
          { key: 'integrations', label: 'Integrations', href: '/integrations', enabled: true },
          { key: 'changelog', label: 'Changelog', href: '/changelog', enabled: true },
        ],
      },
      {
        title: 'Company',
        items: [
          { key: 'about', label: 'About', href: '/about', enabled: true },
          { key: 'blog', label: 'Blog', href: '/blog', enabled: true },
          { key: 'careers', label: 'Careers', href: '/careers', enabled: true },
          { key: 'contact', label: 'Contact', href: '/contact', enabled: true },
        ],
      },
      {
        title: 'Resources',
        items: [
          { key: 'docs', label: 'Documentation', href: '/docs', enabled: true },
          { key: 'help', label: 'Help Center', href: '/help', enabled: true },
          { key: 'community', label: 'Community', href: '/community', enabled: true },
          { key: 'status', label: 'Status', href: '/status', enabled: true },
        ],
      },
      {
        title: 'Legal',
        items: [
          { key: 'privacy', label: 'Privacy', href: '/privacy', enabled: true },
          { key: 'terms', label: 'Terms', href: '/terms', enabled: true },
          { key: 'cookies', label: 'Cookies', href: '/cookies', enabled: true },
        ],
      },
    ] as NavSection[],
  },
} as const;

export type NavigationConfig = typeof navigationConfig;
