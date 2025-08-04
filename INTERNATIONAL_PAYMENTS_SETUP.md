# 🌍 International Payment System Setup Guide

## **🎯 Overview**

OponMeta now supports **global payment processing** with automatic currency detection, localized pricing, and regional payment gateways for maximum global reach.

### **✅ Supported Payment Gateways:**
- **Stripe** - Global coverage (GBP, USD, EUR, CAD, AUD, ZAR, INR, BRL)
- **Paystack** - African markets (NGN, GHS, ZAR, KES, UGX, TZS)
- **Flutterwave** - African markets with USSD support (NGN, GHS, KES, UGX, TZS, ZAR, RWF, ZMW)

### **✅ Supported Currencies:**
- **GBP** (£) - British Pound
- **USD** ($) - US Dollar
- **EUR** (€) - Euro
- **NGN** (₦) - Nigerian Naira
- **GHS** (₵) - Ghanaian Cedi
- **KES** (KSh) - Kenyan Shilling
- **ZAR** (R) - South African Rand
- **INR** (₹) - Indian Rupee
- **BRL** (R$) - Brazilian Real
- **CAD** (C$) - Canadian Dollar
- **AUD** (A$) - Australian Dollar

---

## **🔧 Setup Instructions**

### **1. Stripe Configuration**

#### **A. Get Your Stripe Keys:**
1. Go to [Stripe Dashboard](https://dashboard.stripe.com/apikeys)
2. Copy your **Publishable Key** (starts with `pk_test_` or `pk_live_`)
3. Copy your **Secret Key** (starts with `sk_test_` or `sk_live_`)

#### **B. Update Configuration:**
```typescript
// In src/config/keys.ts
export const STRIPE_CONFIG = {
  PUBLISHABLE_KEY: 'pk_test_YOUR_ACTUAL_STRIPE_PUBLIC_KEY',
  SECRET_KEY: 'sk_test_YOUR_ACTUAL_STRIPE_SECRET_KEY',
};
```

### **2. Paystack Configuration (Africa)**

#### **A. Get Your Paystack Keys:**
1. Go to [Paystack Dashboard](https://dashboard.paystack.com/#/settings/developer)
2. Copy your **Public Key** (starts with `pk_test_` or `pk_live_`)
3. Copy your **Secret Key** (starts with `sk_test_` or `sk_live_`)

#### **B. Update Configuration:**
```typescript
// In src/config/international-payments.ts
export const PAYMENT_GATEWAYS: Record<string, RegionalGateway> = {
  paystack: {
    // ... other config
    apiKey: 'sk_test_YOUR_ACTUAL_PAYSTACK_SECRET_KEY',
    publicKey: 'pk_test_YOUR_ACTUAL_PAYSTACK_PUBLIC_KEY',
    enabled: true,
  },
};
```

### **3. Flutterwave Configuration (Africa)**

#### **A. Get Your Flutterwave Keys:**
1. Go to [Flutterwave Dashboard](https://dashboard.flutterwave.com/settings/apis)
2. Copy your **Public Key** (starts with `FLWPUBK_TEST_` or `FLWPUBK_`)
3. Copy your **Secret Key** (starts with `FLWSECK_TEST_` or `FLWSECK_`)

#### **B. Update Configuration:**
```typescript
// In src/config/international-payments.ts
export const PAYMENT_GATEWAYS: Record<string, RegionalGateway> = {
  flutterwave: {
    // ... other config
    apiKey: 'FLWSECK_TEST_YOUR_ACTUAL_FLUTTERWAVE_SECRET_KEY',
    publicKey: 'FLWPUBK_TEST_YOUR_ACTUAL_FLUTTERWAVE_PUBLIC_KEY',
    enabled: true,
  },
};
```

---

## **🌍 Pricing Strategy**

### **Regional Pricing Tiers:**

#### **Premium Markets (100% Price):**
- **Countries:** GB, US, CA, AU, EU
- **Strategy:** Full pricing for developed markets

#### **Competitive Markets (70% Price):**
- **Countries:** ZA, BR, IN
- **Strategy:** 30% discount for emerging markets

#### **Accessible Markets (50% Price):**
- **Countries:** NG, GH, KE, UG, TZ
- **Strategy:** 50% discount for developing markets

### **Customize Pricing:**
```typescript
// In src/config/international-payments.ts
export const PRICING_STRATEGIES = {
  premium: {
    countries: ['GB', 'US', 'CA', 'AU', 'EU'],
    multiplier: 1.0, // Full price
  },
  competitive: {
    countries: ['ZA', 'BR', 'IN'],
    multiplier: 0.7, // 30% discount
  },
  accessible: {
    countries: ['NG', 'GH', 'KE', 'UG', 'TZ'],
    multiplier: 0.5, // 50% discount
  },
};
```

---

## **🚀 Features**

### **✅ Automatic Features:**
- **Location Detection:** IP geolocation + browser geolocation fallback
- **Currency Detection:** Automatic currency selection based on location
- **Gateway Selection:** Appropriate payment gateway for each region
- **Localized Pricing:** Regional pricing strategies applied automatically
- **Payment Methods:** Card, bank transfer, mobile money, USSD (where supported)

### **✅ User Experience:**
- **Real-time Currency Conversion:** Live exchange rates
- **Regional Discounts:** Automatic application of regional pricing
- **Multiple Payment Options:** Card, PayPal, Google Pay, Apple Pay, mobile money
- **Secure Processing:** PCI DSS compliant payment processing
- **Success Page:** Professional payment confirmation with next steps

---

## **🔒 Security & Compliance**

### **✅ Security Features:**
- **PCI DSS Compliant:** All payment gateways are PCI DSS Level 1 compliant
- **Encrypted Data:** All payment data is encrypted in transit
- **Tokenized Payments:** No card data stored on your servers
- **Fraud Protection:** Built-in fraud detection from payment providers

### **✅ Compliance:**
- **GDPR Compliant:** European data protection compliance
- **Local Regulations:** Compliance with local payment regulations
- **Tax Handling:** Automatic tax calculation where required

---

## **📊 Testing**

### **Test Cards:**

#### **Stripe Test Cards:**
- **Success:** `4242 4242 4242 4242`
- **Decline:** `4000 0000 0000 0002`
- **Expiry:** Any future date
- **CVC:** Any 3 digits

#### **Paystack Test Cards:**
- **Success:** `4084 0840 8408 4081`
- **Decline:** `4084 0840 8408 4082`
- **Expiry:** Any future date
- **CVC:** Any 3 digits

#### **Flutterwave Test Cards:**
- **Success:** `5531 8866 5214 2950`
- **Decline:** `5531 8866 5214 2951`
- **Expiry:** Any future date
- **CVC:** Any 3 digits

---

## **🔧 Environment Variables**

Create a `.env.local` file in your project root:

```env
# Stripe Configuration
VITE_STRIPE_PUBLIC_KEY=pk_test_your_stripe_public_key
VITE_STRIPE_SECRET_KEY=sk_test_your_stripe_secret_key

# Paystack Configuration
VITE_PAYSTACK_PUBLIC_KEY=pk_test_your_paystack_public_key
VITE_PAYSTACK_SECRET_KEY=sk_test_your_paystack_secret_key

# Flutterwave Configuration
VITE_FLUTTERWAVE_PUBLIC_KEY=FLWPUBK_TEST_your_flutterwave_public_key
VITE_FLUTTERWAVE_SECRET_KEY=FLWSECK_TEST_your_flutterwave_secret_key

# Other Configuration
VITE_API_URL=http://localhost:8080
VITE_ENVIRONMENT=development
```

---

## **📱 Mobile Money Support**

### **Paystack Mobile Money:**
- **Nigeria:** MTN, Airtel, 9mobile, Glo
- **Ghana:** MTN, Vodafone, AirtelTigo

### **Flutterwave Mobile Money:**
- **Kenya:** M-Pesa, Airtel Money
- **Uganda:** MTN Mobile Money, Airtel Money
- **Tanzania:** M-Pesa, Airtel Money
- **Rwanda:** Mobile Money
- **Zambia:** Mobile Money

---

## **🌐 Geolocation Services**

### **IP Geolocation:**
- **Service:** ipapi.com (free tier available)
- **Fallback:** Browser geolocation
- **Storage:** localStorage for performance

### **Setup IP Geolocation:**
1. Sign up at [ipapi.com](https://ipapi.com)
2. Get your API key
3. Update the geolocation service:

```typescript
// In src/services/geolocation.ts
const response = await fetch('https://api.ipapi.com/api/check?access_key=YOUR_API_KEY');
```

---

## **📈 Analytics & Monitoring**

### **Payment Analytics:**
- **Conversion Rates:** Track payment success rates by region
- **Currency Performance:** Monitor which currencies perform best
- **Gateway Performance:** Compare payment gateway success rates
- **Regional Insights:** Understand regional payment preferences

### **Monitoring:**
- **Webhook Handling:** Set up webhooks for payment confirmations
- **Error Tracking:** Monitor payment failures and errors
- **Performance Metrics:** Track payment processing times

---

## **🚀 Production Deployment**

### **1. Update to Live Keys:**
```typescript
// Replace test keys with live keys
REACT_APP_STRIPE_PUBLIC_KEY=pk_live_your_stripe_live_key
REACT_APP_PAYSTACK_PUBLIC_KEY=pk_live_your_paystack_live_key
REACT_APP_FLUTTERWAVE_PUBLIC_KEY=FLWPUBK_your_flutterwave_live_key
```

### **2. Set Up Webhooks:**
- **Stripe Webhooks:** For payment confirmations
- **Paystack Webhooks:** For payment status updates
- **Flutterwave Webhooks:** For payment confirmations

### **3. SSL Certificate:**
- **Required:** HTTPS for all payment processing
- **Security:** Ensures encrypted data transmission

### **4. Testing:**
- **Sandbox Testing:** Test with test cards first
- **Live Testing:** Small transactions to verify setup
- **User Testing:** Real user payment flows

---

## **📞 Support**

### **Payment Gateway Support:**
- **Stripe:** [support.stripe.com](https://support.stripe.com)
- **Paystack:** [paystack.com/support](https://paystack.com/support)
- **Flutterwave:** [flutterwave.com/support](https://flutterwave.com/support)

### **OponMeta Support:**
- **Email:** info@oponmeta.com
- **Documentation:** [docs.oponmeta.com](https://docs.oponmeta.com)
- **Community:** [community.oponmeta.com](https://community.oponmeta.com)

---

## **🎉 Ready to Go Global!**

Your OponMeta platform is now equipped with a **world-class international payment system** that:

✅ **Automatically detects user location and currency**  
✅ **Applies regional pricing strategies**  
✅ **Provides appropriate payment gateways**  
✅ **Supports multiple payment methods**  
✅ **Ensures PCI DSS compliance**  
✅ **Offers seamless user experience**  

**Start accepting payments from customers worldwide! 🌍** 