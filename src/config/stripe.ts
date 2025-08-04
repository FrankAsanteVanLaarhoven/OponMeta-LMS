import { loadStripe } from '@stripe/stripe-js';

// Replace this with your actual Stripe publishable key
export const STRIPE_PUBLISHABLE_KEY = process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY || 'pk_test_your_stripe_public_key_here';

// Initialize Stripe
export const stripePromise = loadStripe(STRIPE_PUBLISHABLE_KEY);

// Stripe configuration
export const STRIPE_CONFIG = {
  currency: 'gbp',
  locale: 'en-GB',
  paymentMethodTypes: ['card', 'paypal'],
  mode: 'payment' as const,
};

// Payment intent configuration
export const createPaymentIntent = async (amount: number, currency: string = 'gbp') => {
  try {
    const response = await fetch('/api/create-payment-intent', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        amount,
        currency,
      }),
    });

    if (!response.ok) {
      throw new Error('Failed to create payment intent');
    }

    const data = await response.json();
    return data.clientSecret;
  } catch (error) {
    console.error('Error creating payment intent:', error);
    throw error;
  }
}; 