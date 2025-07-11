// Environment Configuration for OponMeta
// This file manages all environment variables and configuration settings

export interface EnvironmentConfig {
  // Stripe Configuration
  stripe: {
    publishableKey: string;
    secretKey: string;
    webhookSecret: string;
  };
  
  // API Configuration
  api: {
    url: string;
    timeout: number;
  };
  
  // App Configuration
  app: {
    url: string;
    name: string;
    version: string;
  };
  
  // Feature Flags
  features: {
    debugMode: boolean;
    mockStripe: boolean;
    autoLogin: boolean;
    enableAnalytics: boolean;
    enableErrorTracking: boolean;
  };
  
  // Development Settings
  development: {
    mockData: boolean;
    logLevel: 'debug' | 'info' | 'warn' | 'error';
  };
}

// Default configuration (development)
const defaultConfig: EnvironmentConfig = {
  stripe: {
    publishableKey: process.env.VITE_STRIPE_PUBLISHABLE_KEY || 'pk_test_mock_key',
    secretKey: process.env.VITE_STRIPE_SECRET_KEY || 'sk_test_mock_key',
    webhookSecret: process.env.VITE_STRIPE_WEBHOOK_SECRET || 'whsec_mock_secret',
  },
  
  api: {
    url: process.env.VITE_API_URL || 'http://localhost:3001/api',
    timeout: 30000,
  },
  
  app: {
    url: process.env.VITE_APP_URL || 'http://localhost:8080',
    name: 'OponMeta',
    version: '1.0.0',
  },
  
  features: {
    debugMode: process.env.VITE_DEBUG_MODE === 'true',
    mockStripe: process.env.VITE_MOCK_STRIPE !== 'false', // Default to true
    autoLogin: process.env.VITE_AUTO_LOGIN === 'true',
    enableAnalytics: process.env.VITE_ENABLE_ANALYTICS === 'true',
    enableErrorTracking: process.env.VITE_ENABLE_ERROR_TRACKING === 'true',
  },
  
  development: {
    mockData: true,
    logLevel: (process.env.VITE_LOG_LEVEL as any) || 'info',
  },
};

// Production configuration overrides
const productionConfig: Partial<EnvironmentConfig> = {
  features: {
    debugMode: false,
    mockStripe: false,
    autoLogin: false,
    enableAnalytics: true,
    enableErrorTracking: true,
  },
  
  development: {
    mockData: false,
    logLevel: 'warn',
  },
};

// Merge configurations based on environment
const isProduction = import.meta.env.PROD;
const config: EnvironmentConfig = isProduction 
  ? { ...defaultConfig, ...productionConfig }
  : defaultConfig;

// Environment validation
const validateConfig = () => {
  const errors: string[] = [];
  
  if (!config.stripe.publishableKey || config.stripe.publishableKey === 'pk_test_mock_key') {
    errors.push('Stripe publishable key not configured');
  }
  
  if (!config.stripe.secretKey || config.stripe.secretKey === 'sk_test_mock_key') {
    errors.push('Stripe secret key not configured');
  }
  
  if (errors.length > 0) {
    console.warn('Environment configuration warnings:', errors);
  }
  
  return errors.length === 0;
};

// Export configuration and validation
export const environment = config;
export const isValidConfig = validateConfig();

// Helper functions
export const isDevelopment = () => !isProduction;
export const isProduction = () => isProduction;
export const isMockMode = () => config.features.mockStripe;
export const isDebugMode = () => config.features.debugMode;

// Log configuration (only in development)
if (isDevelopment() && isDebugMode()) {
  console.log('🔧 Environment Configuration:', {
    environment: isProduction ? 'production' : 'development',
    mockStripe: isMockMode(),
    debugMode: isDebugMode(),
    apiUrl: config.api.url,
    appUrl: config.app.url,
  });
}

export default environment; 