/**
 * Configuration Index
 * Central export for all configuration files.
 */

// Core configs
export { appConfig, type AppConfig, type SupportedLocale } from './app.config';
export { themeConfig, type ThemeConfig, type ThemeColors, type ThemeFonts } from './theme.config';
export { seoConfig, type SeoConfig, type PageSeoConfig } from './seo.config';
export {
  routesConfig,
  getRouteByPath,
  getEnabledRoutes,
  type RoutesConfig,
  type RouteConfig,
  type LayoutType,
} from './routes.config';
export {
  navigationConfig,
  type NavigationConfig,
  type NavItem,
  type NavSection,
} from './navigation.config';
export {
  i18nConfig,
  getEnabledLanguages,
  getLanguageByCode,
  isRtlLanguage,
  type I18nConfig,
  type LanguageConfig,
} from './i18n.config';
export { chatConfig, type ChatConfig } from './chat.config';
export { authConfig, validateCredentials, type AuthConfig, type DemoUser } from './auth.config';

// Content configs
export { homeConfig, type HomeConfig } from './content/home.config';
export { pricingConfig, type PricingConfig, type PricingPlan } from './content/pricing.config';
export {
  dashboardConfig,
  type DashboardConfig,
  type DashboardSection,
  type DashboardMetric,
} from './content/dashboard.config';
