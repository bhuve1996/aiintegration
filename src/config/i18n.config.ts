/**
 * Internationalization Configuration
 * Language support, locale settings, and text direction.
 */

export interface LanguageConfig {
  code: string;
  label: string;
  nativeLabel: string;
  rtl: boolean;
  enabled: boolean;
}

export const i18nConfig = {
  defaultLanguage: 'en',

  languages: [
    {
      code: 'en',
      label: 'English',
      nativeLabel: 'English',
      rtl: false,
      enabled: true,
    },
    {
      code: 'es',
      label: 'Spanish',
      nativeLabel: 'Español',
      rtl: false,
      enabled: true,
    },
    {
      code: 'zh',
      label: 'Chinese (Simplified)',
      nativeLabel: '简体中文',
      rtl: false,
      enabled: true,
    },
    {
      code: 'pt-br',
      label: 'Portuguese (Brazil)',
      nativeLabel: 'Português (Brasil)',
      rtl: false,
      enabled: true,
    },
    {
      code: 'ar',
      label: 'Arabic',
      nativeLabel: 'العربية',
      rtl: true,
      enabled: true,
    },
    {
      code: 'hi',
      label: 'Hindi',
      nativeLabel: 'हिंदी',
      rtl: false,
      enabled: true,
    },
    {
      code: 'fr',
      label: 'French',
      nativeLabel: 'Français',
      rtl: false,
      enabled: false,
    },
    {
      code: 'de',
      label: 'German',
      nativeLabel: 'Deutsch',
      rtl: false,
      enabled: false,
    },
    {
      code: 'ja',
      label: 'Japanese',
      nativeLabel: '日本語',
      rtl: false,
      enabled: false,
    },
  ] as LanguageConfig[],

  // Date & Number Formatting
  formats: {
    date: {
      short: { year: 'numeric', month: 'short', day: 'numeric' },
      long: { year: 'numeric', month: 'long', day: 'numeric', weekday: 'long' },
    },
    number: {
      currency: { style: 'currency', currency: 'USD' },
      percent: { style: 'percent', minimumFractionDigits: 2 },
    },
  },
} as const;

// Helper functions
export const getEnabledLanguages = (): LanguageConfig[] => {
  return i18nConfig.languages.filter((lang) => lang.enabled);
};

export const getLanguageByCode = (code: string): LanguageConfig | undefined => {
  return i18nConfig.languages.find((lang) => lang.code === code);
};

export const isRtlLanguage = (code: string): boolean => {
  const lang = getLanguageByCode(code);
  return lang?.rtl ?? false;
};

export type I18nConfig = typeof i18nConfig;
