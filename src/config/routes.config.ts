/**
 * Routes Configuration
 * All application routes, navigation labels, and access control.
 * Components render navigation dynamically from this config.
 */

export type LayoutType = 'public' | 'auth' | 'dashboard';

export interface RouteConfig {
  path: string;
  label: string;
  seoKey: string;
  requiresAuth: boolean;
  layoutType: LayoutType;
  icon?: string;
  enabled: boolean;
  children?: RouteConfig[];
}

export const routesConfig = {
  // Public Routes (No authentication required)
  publicRoutes: [
    {
      path: '/',
      label: 'Home',
      seoKey: 'home',
      requiresAuth: false,
      layoutType: 'public' as LayoutType,
      enabled: true,
    },
    {
      path: '/pricing',
      label: 'Pricing',
      seoKey: 'pricing',
      requiresAuth: false,
      layoutType: 'public' as LayoutType,
      enabled: true,
    },
    {
      path: '/about',
      label: 'About',
      seoKey: 'about',
      requiresAuth: false,
      layoutType: 'public' as LayoutType,
      enabled: true,
    },
    {
      path: '/contact',
      label: 'Contact',
      seoKey: 'contact',
      requiresAuth: false,
      layoutType: 'public' as LayoutType,
      enabled: true,
    },
  ] as RouteConfig[],

  // Auth Routes (Login, Signup, etc.)
  authRoutes: [
    {
      path: '/login',
      label: 'Sign In',
      seoKey: 'login',
      requiresAuth: false,
      layoutType: 'auth' as LayoutType,
      enabled: true,
    },
    {
      path: '/signup',
      label: 'Get Started',
      seoKey: 'signup',
      requiresAuth: false,
      layoutType: 'auth' as LayoutType,
      enabled: true,
    },
    {
      path: '/forgot-password',
      label: 'Forgot Password',
      seoKey: 'forgotPassword',
      requiresAuth: false,
      layoutType: 'auth' as LayoutType,
      enabled: true,
    },
  ] as RouteConfig[],

  // Dashboard Routes (Authenticated users)
  dashboardRoutes: [
    {
      path: '/create',
      label: 'Create',
      seoKey: 'create',
      requiresAuth: true,
      layoutType: 'dashboard' as LayoutType,
      icon: 'plus',
      enabled: true,
    },
    {
      path: '/projects',
      label: 'Projects',
      seoKey: 'projects',
      requiresAuth: true,
      layoutType: 'dashboard' as LayoutType,
      icon: 'folder',
      enabled: true,
    },
    {
      path: '/assets',
      label: 'Asset Library',
      seoKey: 'assets',
      requiresAuth: true,
      layoutType: 'dashboard' as LayoutType,
      icon: 'image',
      enabled: true,
    },
    {
      path: '/dashboard',
      label: 'Dashboard',
      seoKey: 'dashboard',
      requiresAuth: true,
      layoutType: 'dashboard' as LayoutType,
      icon: 'chart',
      enabled: true,
    },
    {
      path: '/settings',
      label: 'Settings',
      seoKey: 'settings',
      requiresAuth: true,
      layoutType: 'dashboard' as LayoutType,
      icon: 'settings',
      enabled: false, // Not yet implemented
    },
  ] as RouteConfig[],

  // Top Navigation (For main app header)
  topNav: [
    { key: 'create', route: '/create', enabled: true },
    { key: 'projects', route: '/projects', enabled: true },
    { key: 'assets', route: '/assets', enabled: true },
  ],

  // Footer Navigation
  footerNav: {
    company: [
      { label: 'About', path: '/about' },
      { label: 'Careers', path: '/careers' },
      { label: 'Contact', path: '/contact' },
    ],
    product: [
      { label: 'Features', path: '/features' },
      { label: 'Pricing', path: '/pricing' },
      { label: 'Integrations', path: '/integrations' },
    ],
    resources: [
      { label: 'Blog', path: '/blog' },
      { label: 'Documentation', path: '/docs' },
      { label: 'Help Center', path: '/help' },
    ],
    legal: [
      { label: 'Privacy Policy', path: '/privacy' },
      { label: 'Terms of Service', path: '/terms' },
      { label: 'Cookie Policy', path: '/cookies' },
    ],
  },
} as const;

// Helper functions
export const getRouteByPath = (path: string): RouteConfig | undefined => {
  const allRoutes = [
    ...routesConfig.publicRoutes,
    ...routesConfig.authRoutes,
    ...routesConfig.dashboardRoutes,
  ];
  return allRoutes.find((route) => route.path === path);
};

export const getEnabledRoutes = (routes: RouteConfig[]): RouteConfig[] => {
  return routes.filter((route) => route.enabled);
};

export type RoutesConfig = typeof routesConfig;
