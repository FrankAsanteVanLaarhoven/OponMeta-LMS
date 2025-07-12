// Environment Configuration
// This file centralizes all environment variables for easy access throughout the app

export const config = {
  // App Configuration
  app: {
    name: import.meta.env.VITE_APP_NAME || 'OponMeta',
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

  // Database (if using client-side database)
  database: {
    name: import.meta.env.VITE_DB_NAME || 'oponmeta_database',
    version: import.meta.env.VITE_DB_VERSION || '1',
  },

  // External Services
  services: {
    stripe: {
      publicKey: import.meta.env.VITE_STRIPE_PUBLIC_KEY || '',
    },
    sentry: {
      dsn: import.meta.env.VITE_SENTRY_DSN || '',
    },
    analytics: {
      googleAnalyticsId: import.meta.env.VITE_GA_ID || '',
    },
  },

  // Feature Flags
  features: {
    enableAnalytics: import.meta.env.VITE_ENABLE_ANALYTICS === 'true',
    enableNotifications: import.meta.env.VITE_ENABLE_NOTIFICATIONS !== 'false',
    enableOfflineMode: import.meta.env.VITE_ENABLE_OFFLINE_MODE === 'true',
  },
};

export default config;

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