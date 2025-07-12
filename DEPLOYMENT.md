# Deployment Guide

This guide will help you deploy your Learning Management System to production on Vercel or Netlify.

## Prerequisites

- Node.js 18+ installed
- Git repository set up
- Vercel or Netlify account

## Quick Deploy Options

### Option 1: Deploy to Vercel (Recommended)

1. **Install Vercel CLI:**
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel:**
   ```bash
   vercel login
   ```

3. **Deploy:**
   ```bash
   npm run deploy:vercel
   ```

### Option 2: Deploy to Netlify

1. **Install Netlify CLI:**
   ```bash
   npm install -g netlify-cli
   ```

2. **Login to Netlify:**
   ```bash
   netlify login
   ```

3. **Deploy:**
   ```bash
   npm run deploy:netlify
   ```

### Option 3: Manual Deployment

1. **Build the project:**
   ```bash
   npm run build:prod
   ```

2. **Upload the `dist` folder** to your hosting provider

## Environment Configuration

### Required Environment Variables

Create a `.env.local` file for local development or set these in your hosting platform:

```bash
# App Configuration
VITE_APP_NAME="Your Learning Platform"
VITE_APP_URL="https://your-domain.com"

# API Configuration (if you have a backend)
VITE_API_BASE_URL="https://your-api-domain.com/api"

# Authentication (if using external auth)
VITE_AUTH_DOMAIN="your-auth-domain.com"
VITE_AUTH_CLIENT_ID="your-client-id"

# Payment Processing (if using Stripe)
VITE_STRIPE_PUBLIC_KEY="pk_test_your_stripe_public_key"

# Analytics (optional)
VITE_GA_TRACKING_ID="G-XXXXXXXXXX"

# Feature Flags
VITE_ENABLE_AI_FEATURES="true"
VITE_ENABLE_SOCIAL_FEATURES="true"
VITE_ENABLE_NOTIFICATIONS="true"
```

### Setting Environment Variables

#### Vercel
1. Go to your project dashboard
2. Navigate to Settings > Environment Variables
3. Add each variable with the appropriate environment (Production, Preview, Development)

#### Netlify
1. Go to your site dashboard
2. Navigate to Site settings > Environment variables
3. Add each variable

## Custom Domain Setup

### Vercel
1. Go to your project dashboard
2. Navigate to Settings > Domains
3. Add your custom domain
4. Update your DNS records as instructed

### Netlify
1. Go to your site dashboard
2. Navigate to Domain management
3. Add your custom domain
4. Update your DNS records as instructed

## Post-Deployment Checklist

- [ ] Test all major features
- [ ] Verify mobile responsiveness
- [ ] Check loading performance
- [ ] Test user registration/login
- [ ] Verify course creation and enrollment
- [ ] Test payment processing (if applicable)
- [ ] Check analytics tracking
- [ ] Verify email notifications
- [ ] Test file uploads
- [ ] Check internationalization

## Performance Optimization

### Build Optimization
- The project uses Vite for fast builds
- Assets are automatically optimized
- Code splitting is enabled
- Tree shaking removes unused code

### Runtime Optimization
- React components are optimized
- Images are lazy-loaded
- CSS is purged of unused styles
- Service worker for caching (if enabled)

## Security Considerations

- HTTPS is enforced
- Security headers are configured
- XSS protection is enabled
- Content Security Policy is set
- Frame options are restricted

## Monitoring and Analytics

### Recommended Tools
- **Vercel Analytics** (if using Vercel)
- **Google Analytics** (set VITE_GA_TRACKING_ID)
- **Sentry** for error tracking (set VITE_SENTRY_DSN)

### Performance Monitoring
- Core Web Vitals tracking
- Page load times
- User interaction metrics
- Error rates

## Troubleshooting

### Common Issues

1. **Build Failures**
   - Check Node.js version (requires 18+)
   - Clear node_modules and reinstall: `rm -rf node_modules package-lock.json && npm install`

2. **Environment Variables Not Working**
   - Ensure variables start with `VITE_`
   - Check for typos in variable names
   - Verify environment variable scope

3. **Routing Issues**
   - Ensure SPA routing is configured
   - Check vercel.json or netlify.toml configuration

4. **Performance Issues**
   - Optimize images
   - Enable compression
   - Use CDN for static assets

### Support

For deployment issues:
- Check the hosting platform's documentation
- Review build logs for errors
- Verify all dependencies are installed
- Ensure all required files are committed

## Next Steps

After successful deployment:

1. **Add Content**: Populate with your courses and materials
2. **Configure Branding**: Add your logos and customize the theme
3. **Set Up Analytics**: Configure tracking and monitoring
4. **Test Thoroughly**: Ensure all features work in production
5. **Launch**: Announce your platform to users 