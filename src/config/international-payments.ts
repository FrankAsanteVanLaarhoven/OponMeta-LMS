// International Payment Configuration for OponMeta
// Supports Stripe, Paystack, and Flutterwave for global coverage

export interface CurrencyConfig {
  code: string;
  symbol: string;
  name: string;
  exchangeRate: number; // Relative to GBP
  gateway: 'stripe' | 'paystack' | 'flutterwave';
  enabled: boolean;
}

export interface RegionalGateway {
  name: string;
  supportedCountries: string[];
  supportedCurrencies: string[];
  apiKey: string;
  publicKey: string;
  enabled: boolean;
}

// Currency configurations with exchange rates (relative to GBP)
export const CURRENCIES: Record<string, CurrencyConfig> = {
  GBP: {
    code: 'GBP',
    symbol: '£',
    name: 'British Pound',
    exchangeRate: 1.0,
    gateway: 'stripe',
    enabled: true,
  },
  USD: {
    code: 'USD',
    symbol: '$',
    name: 'US Dollar',
    exchangeRate: 1.27,
    gateway: 'stripe',
    enabled: true,
  },
  EUR: {
    code: 'EUR',
    symbol: '€',
    name: 'Euro',
    exchangeRate: 1.17,
    gateway: 'stripe',
    enabled: true,
  },
  NGN: {
    code: 'NGN',
    symbol: '₦',
    name: 'Nigerian Naira',
    exchangeRate: 0.0016,
    gateway: 'paystack',
    enabled: true,
  },
  GHS: {
    code: 'GHS',
    symbol: '₵',
    name: 'Ghanaian Cedi',
    exchangeRate: 0.11,
    gateway: 'paystack',
    enabled: true,
  },
  KES: {
    code: 'KES',
    symbol: 'KSh',
    name: 'Kenyan Shilling',
    exchangeRate: 0.0078,
    gateway: 'flutterwave',
    enabled: true,
  },
  ZAR: {
    code: 'ZAR',
    symbol: 'R',
    name: 'South African Rand',
    exchangeRate: 0.067,
    gateway: 'stripe',
    enabled: true,
  },
  INR: {
    code: 'INR',
    symbol: '₹',
    name: 'Indian Rupee',
    exchangeRate: 0.015,
    gateway: 'stripe',
    enabled: true,
  },
  BRL: {
    code: 'BRL',
    symbol: 'R$',
    name: 'Brazilian Real',
    exchangeRate: 0.26,
    gateway: 'stripe',
    enabled: true,
  },
  CAD: {
    code: 'CAD',
    symbol: 'C$',
    name: 'Canadian Dollar',
    exchangeRate: 1.72,
    gateway: 'stripe',
    enabled: true,
  },
  AUD: {
    code: 'AUD',
    symbol: 'A$',
    name: 'Australian Dollar',
    exchangeRate: 1.95,
    gateway: 'stripe',
    enabled: true,
  },
};

// Regional payment gateways
export const PAYMENT_GATEWAYS: Record<string, RegionalGateway> = {
  stripe: {
    name: 'Stripe',
    supportedCountries: ['GB', 'US', 'CA', 'AU', 'EU', 'ZA', 'IN', 'BR'],
    supportedCurrencies: ['GBP', 'USD', 'EUR', 'CAD', 'AUD', 'ZAR', 'INR', 'BRL'],
    apiKey: import.meta.env.VITE_STRIPE_SECRET_KEY || 'sk_test_your_stripe_secret_key',
    publicKey: import.meta.env.VITE_STRIPE_PUBLIC_KEY || 'pk_test_your_stripe_public_key',
    enabled: true,
  },
  paystack: {
    name: 'Paystack',
    supportedCountries: ['NG', 'GH', 'ZA', 'KE', 'UG', 'TZ'],
    supportedCurrencies: ['NGN', 'GHS', 'ZAR', 'KES', 'UGX', 'TZS'],
    apiKey: import.meta.env.VITE_PAYSTACK_SECRET_KEY || 'sk_test_your_paystack_secret_key',
    publicKey: import.meta.env.VITE_PAYSTACK_PUBLIC_KEY || 'pk_test_your_paystack_public_key',
    enabled: true,
  },
  flutterwave: {
    name: 'Flutterwave',
    supportedCountries: ['NG', 'GH', 'KE', 'UG', 'TZ', 'ZA', 'RW', 'ZM'],
    supportedCurrencies: ['NGN', 'GHS', 'KES', 'UGX', 'TZS', 'ZAR', 'RWF', 'ZMW'],
    apiKey: import.meta.env.VITE_FLUTTERWAVE_SECRET_KEY || 'sk_test_your_flutterwave_secret_key',
    publicKey: import.meta.env.VITE_FLUTTERWAVE_PUBLIC_KEY || 'pk_test_your_flutterwave_public_key',
    enabled: true,
  },
};

// Country to currency mapping
export const COUNTRY_CURRENCY_MAP: Record<string, string> = {
  GB: 'GBP',
  US: 'USD',
  CA: 'CAD',
  AU: 'AUD',
  NG: 'NGN',
  GH: 'GHS',
  KE: 'KES',
  ZA: 'ZAR',
  IN: 'INR',
  BR: 'BRL',
  // Add more countries as needed
};

// Pricing strategies for different regions
export const PRICING_STRATEGIES = {
  // Premium pricing for developed markets
  premium: {
    countries: ['GB', 'US', 'CA', 'AU', 'EU'],
    multiplier: 1.0, // Full price
  },
  // Competitive pricing for emerging markets
  competitive: {
    countries: ['ZA', 'BR', 'IN'],
    multiplier: 0.7, // 30% discount
  },
  // Accessible pricing for developing markets
  accessible: {
    countries: ['NG', 'GH', 'KE', 'UG', 'TZ'],
    multiplier: 0.5, // 50% discount
  },
};

// Utility functions
export const getCurrencyForCountry = (countryCode: string): string => {
  return COUNTRY_CURRENCY_MAP[countryCode.toUpperCase()] || 'GBP';
};

export const getGatewayForCurrency = (currency: string): string => {
  const currencyConfig = CURRENCIES[currency];
  return currencyConfig ? currencyConfig.gateway : 'stripe';
};

export const convertPrice = (price: number, fromCurrency: string, toCurrency: string): number => {
  const fromConfig = CURRENCIES[fromCurrency];
  const toConfig = CURRENCIES[toCurrency];
  
  if (!fromConfig || !toConfig) return price;
  
  // Convert to GBP first, then to target currency
  const gbpAmount = price / fromConfig.exchangeRate;
  return gbpAmount * toConfig.exchangeRate;
};

export const getLocalizedPrice = (basePrice: number, countryCode: string): number => {
  const currency = getCurrencyForCountry(countryCode);
  const strategy = Object.values(PRICING_STRATEGIES).find(s => 
    s.countries.includes(countryCode)
  );
  
  const multiplier = strategy ? strategy.multiplier : 1.0;
  const convertedPrice = convertPrice(basePrice, 'GBP', currency);
  
  return Math.round(convertedPrice * multiplier * 100) / 100; // Round to 2 decimal places
};

export const formatPrice = (price: number, currency: string): string => {
  const config = CURRENCIES[currency];
  if (!config) return `${price} GBP`;
  
  return `${config.symbol}${price.toFixed(2)}`;
};

// Get supported payment methods for a country
export const getSupportedPaymentMethods = (countryCode: string): string[] => {
  const currency = getCurrencyForCountry(countryCode);
  const gateway = getGatewayForCurrency(currency);
  
  const methods: Record<string, string[]> = {
    stripe: ['card', 'paypal', 'apple_pay', 'google_pay'],
    paystack: ['card', 'bank_transfer', 'mobile_money'],
    flutterwave: ['card', 'bank_transfer', 'mobile_money', 'ussd'],
  };
  
  return methods[gateway] || ['card'];
}; 