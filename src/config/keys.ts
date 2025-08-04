// API Keys Configuration
// Replace these with your actual keys

export const STRIPE_CONFIG = {
  // Replace with your actual Stripe publishable key
  // Get this from your Stripe Dashboard: https://dashboard.stripe.com/apikeys
  PUBLISHABLE_KEY: import.meta.env.VITE_STRIPE_PUBLIC_KEY || 'pk_test_your_stripe_public_key_here',
  
  // For production, use your live key
  // PUBLISHABLE_KEY: 'pk_live_your_stripe_live_key_here',
};

export const API_CONFIG = {
  BASE_URL: import.meta.env.VITE_API_URL || 'http://localhost:8080',
  ENVIRONMENT: import.meta.env.VITE_ENVIRONMENT || 'development',
};

// Instructions for setting up Stripe:
// 1. Go to https://dashboard.stripe.com/apikeys
// 2. Copy your publishable key (starts with pk_test_ or pk_live_)
// 3. Replace the PUBLISHABLE_KEY value above
// 4. For production, you'll also need to set up a server endpoint for payment intents 