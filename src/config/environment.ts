// Environment Configuration
// This file centralizes all environment variables for easy access throughout the app

export const config = {
  // App Configuration
  app: {
    name: import.meta.env.VITE_APP_NAME || 'Learning Management System',
    url: import.meta.env.VITE_APP_URL || 'http://localhost:8080',
    version: import.meta.env.VITE_APP_VERSION || '1.0.0',
    environment: import.meta.env.VITE_NODE_ENV || 'development',
  },

  // API Configuration
  api: {
    baseUrl: import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000/api',
    timeout: parseInt(import.meta.env.VITE_API_TIMEOUT || '30000'),
  },

  // Authentication
  auth: {
    domain: import.meta.env.VITE_AUTH_DOMAIN || '',
    clientId: import.meta.env.VITE_AUTH_CLIENT_ID || '',
    redirectUri: import.meta.env.VITE_AUTH_REDIRECT_URI || '',
  },

  // Database
  database: {
    name: import.meta.env.VITE_DB_NAME || 'lms_database',
    version: parseInt(import.meta.env.VITE_DB_VERSION || '1'),
  },

  // External Services
  services: {
    stripe: {
      publicKey: import.meta.env.VITE_STRIPE_PUBLIC_KEY || '',
    },
    sentry: {
      dsn: import.meta.env.VITE_SENTRY_DSN || '',
    },
  },

  // Analytics
  analytics: {
    googleAnalytics: import.meta.env.VITE_GA_TRACKING_ID || '',
    mixpanel: import.meta.env.VITE_MIXPANEL_TOKEN || '',
  },

  // File Upload
  upload: {
    url: import.meta.env.VITE_UPLOAD_URL || '/api/upload',
    maxFileSize: parseInt(import.meta.env.VITE_MAX_FILE_SIZE || '10485760'), // 10MB
  },

  // Feature Flags
  features: {
    ai: import.meta.env.VITE_ENABLE_AI_FEATURES === 'true',
    social: import.meta.env.VITE_ENABLE_SOCIAL_FEATURES === 'true',
    notifications: import.meta.env.VITE_ENABLE_NOTIFICATIONS === 'true',
    analytics: import.meta.env.VITE_ENABLE_ANALYTICS === 'true',
  },

  // Internationalization
  i18n: {
    defaultLocale: import.meta.env.VITE_DEFAULT_LOCALE || 'en',
    supportedLocales: (import.meta.env.VITE_SUPPORTED_LOCALES || 'en').split(','),
  },
} as const;

// Type-safe environment configuration
export type Config = typeof config;

// Helper function to check if we're in production
export const isProduction = config.app.environment === 'production';

// Helper function to check if we're in development
export const isDevelopment = config.app.environment === 'development';

// Helper function to get feature flag
export const hasFeature = (feature: keyof typeof config.features): boolean => {
  return config.features[feature];
};

// Helper function to get API URL
export const getApiUrl = (endpoint: string): string => {
  return `${config.api.baseUrl}${endpoint.startsWith('/') ? endpoint : `/${endpoint}`}`;
};

// Helper function to get upload URL
export const getUploadUrl = (): string => {
  return config.upload.url;
};

// Helper function to get max file size in MB
export const getMaxFileSizeMB = (): number => {
  return config.upload.maxFileSize / (1024 * 1024);
}; 