/**
 * Theme Configuration
 * All design tokens and theme values are defined here.
 * No hardcoded colors, fonts, or spacing values in components.
 */

export const themeConfig = {
  colors: {
    // Primary brand colors
    primary: '#8366FF',
    primaryForeground: '#FFFFFF',
    primaryHover: '#7055E8',
    primaryLight: '#A899FF',

    // Background colors
    background: '#0A0A0F',
    backgroundSecondary: '#121218',
    backgroundTertiary: '#1A1A24',

    // Card colors
    card: '#151520',
    cardHover: '#1D1D2A',
    cardBorder: '#2A2A3A',

    // Text colors
    textPrimary: '#FFFFFF',
    textSecondary: '#B4B4C0',
    textMuted: '#6B6B7A',
    textInverse: '#0A0A0F',

    // Border colors
    border: '#2A2A3A',
    borderHover: '#3A3A4A',
    borderFocus: '#8366FF',

    // Semantic colors
    success: '#22C55E',
    successLight: '#86EFAC',
    warning: '#F59E0B',
    warningLight: '#FCD34D',
    destructive: '#EF4444',
    destructiveLight: '#FCA5A5',
    info: '#3B82F6',
    infoLight: '#93C5FD',

    // Extended palette - Purple
    purple: {
      50: '#FAF5FF',
      100: '#F3E8FF',
      200: '#E9D5FF',
      300: '#D8B4FE',
      400: '#C084FC',
      500: '#A855F7',
      600: '#9333EA',
      700: '#7C3AED',
      800: '#6B21A8',
      900: '#581C87',
    },

    // Extended palette - Gray
    gray: {
      50: '#FAFAFA',
      100: '#F4F4F5',
      200: '#E4E4E7',
      300: '#D4D4D8',
      400: '#A1A1AA',
      500: '#71717A',
      600: '#52525B',
      700: '#3F3F46',
      800: '#27272A',
      900: '#18181B',
      950: '#09090B',
    },
  },

  fonts: {
    heading: '"Satoshi", "Plus Jakarta Sans", system-ui, sans-serif',
    body: '"Inter", "Plus Jakarta Sans", system-ui, sans-serif',
    mono: '"JetBrains Mono", "Fira Code", monospace',
  },

  fontSizes: {
    xs: '0.75rem',
    sm: '0.875rem',
    base: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
    '2xl': '1.5rem',
    '3xl': '1.875rem',
    '4xl': '2.25rem',
    '5xl': '3rem',
    '6xl': '3.75rem',
  },

  fontWeights: {
    normal: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
    extrabold: '800',
  },

  lineHeights: {
    tight: '1.1',
    snug: '1.25',
    normal: '1.5',
    relaxed: '1.625',
    loose: '2',
  },

  radius: {
    none: '0',
    sm: '0.25rem',
    md: '0.5rem',
    lg: '0.75rem',
    xl: '1rem',
    '2xl': '1.5rem',
    '3xl': '2rem',
    full: '9999px',
  },

  shadows: {
    none: 'none',
    sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
    default: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
    md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
    lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
    xl: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
    button: '0 4px 14px 0 rgba(131, 102, 255, 0.39)',
    card: '0 8px 32px rgba(0, 0, 0, 0.3)',
    popup: '0 16px 48px rgba(0, 0, 0, 0.4)',
    accent: '0 0 20px rgba(131, 102, 255, 0.5)',
    glow: '0 0 40px rgba(131, 102, 255, 0.3)',
  },

  gradients: {
    brand: 'linear-gradient(135deg, #8366FF 0%, #A855F7 100%)',
    brandSubtle:
      'linear-gradient(135deg, rgba(131, 102, 255, 0.1) 0%, rgba(168, 85, 247, 0.1) 100%)',
    hero: 'radial-gradient(ellipse at top, rgba(131, 102, 255, 0.15) 0%, transparent 50%)',
    card: 'linear-gradient(180deg, rgba(255, 255, 255, 0.05) 0%, transparent 100%)',
    text: 'linear-gradient(90deg, #8366FF, #A855F7, #8366FF)',
    mesh: 'radial-gradient(at 40% 20%, rgba(131, 102, 255, 0.3) 0px, transparent 50%), radial-gradient(at 80% 0%, rgba(168, 85, 247, 0.2) 0px, transparent 50%), radial-gradient(at 0% 50%, rgba(131, 102, 255, 0.15) 0px, transparent 50%)',
  },

  spacing: {
    px: '1px',
    0: '0',
    0.5: '0.125rem',
    1: '0.25rem',
    1.5: '0.375rem',
    2: '0.5rem',
    2.5: '0.625rem',
    3: '0.75rem',
    3.5: '0.875rem',
    4: '1rem',
    5: '1.25rem',
    6: '1.5rem',
    7: '1.75rem',
    8: '2rem',
    9: '2.25rem',
    10: '2.5rem',
    11: '2.75rem',
    12: '3rem',
    14: '3.5rem',
    16: '4rem',
    20: '5rem',
    24: '6rem',
    28: '7rem',
    32: '8rem',
    36: '9rem',
    40: '10rem',
    44: '11rem',
    48: '12rem',
    52: '13rem',
    56: '14rem',
    60: '15rem',
    64: '16rem',
    72: '18rem',
    80: '20rem',
    96: '24rem',
  },

  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
  },

  transitions: {
    fast: '150ms ease',
    default: '200ms ease',
    slow: '300ms ease',
    bounce: '300ms cubic-bezier(0.68, -0.55, 0.265, 1.55)',
  },

  zIndex: {
    dropdown: 1000,
    sticky: 1020,
    fixed: 1030,
    modalBackdrop: 1040,
    modal: 1050,
    popover: 1060,
    tooltip: 1070,
    toast: 1080,
  },
} as const;

export type ThemeConfig = typeof themeConfig;
export type ThemeColors = typeof themeConfig.colors;
export type ThemeFonts = typeof themeConfig.fonts;
