# OponMeta-LMS

A comprehensive Learning Management System (LMS) built with React, TypeScript, and modern web technologies. This platform provides a complete educational experience with advanced features for students, instructors, and administrators.

## 🚀 Features

### Core LMS Features
- **Student Portal** - Complete dashboard with courses, progress tracking, and learning analytics
- **Course Management** - Create, edit, and manage courses with rich content
- **AI-Powered Learning** - Intelligent course recommendations and adaptive learning paths
- **Multilingual Support** - Content available in multiple languages
- **Social Learning** - Discussion forums, peer collaboration, and community features
- **Progress Tracking** - Detailed analytics and achievement systems
- **Mobile Responsive** - Optimized for all devices

### Advanced Features
- **AI Course Creator** - Generate courses with AI assistance
- **Virtual Classrooms** - Real-time video conferencing and collaboration
- **Quiz Builder** - Create interactive assessments and quizzes
- **White Label Branding** - Customizable branding for institutions
- **Integration Hub** - Connect with third-party tools and platforms
- **Analytics Dashboard** - Comprehensive learning analytics and insights

### Student Features
- **My Courses** - Enrolled courses with progress tracking
- **Bookings** - Schedule and manage tutoring sessions
- **Achievements** - Gamified learning with badges and certificates
- **Social Feed** - Connect with peers and share learning experiences
- **Wallet** - Manage credits, payments, and subscriptions
- **Settings** - Profile management and preferences

### Instructor Features
- **Course Creator** - Advanced course authoring tools
- **Student Management** - Track student progress and engagement
- **Analytics** - Detailed insights into course performance
- **Marketplace** - Sell courses and reach global learners
- **AI Tools** - AI-powered content generation and assessment tools

## 🛠️ Technology Stack

- **Frontend**: React 18, TypeScript, Vite
- **Styling**: Tailwind CSS, CSS Modules
- **UI Components**: Custom component library with shadcn/ui
- **State Management**: React Context API, React Query
- **Routing**: React Router v6
- **Internationalization**: i18next
- **Charts**: Recharts
- **Icons**: Lucide React
- **Forms**: React Hook Form with Zod validation

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/FrankAsanteVanLaarhoven/OponMeta-LMS.git
   cd OponMeta-LMS
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:8080` (or the port shown in the terminal)

## 🏗️ Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ui/             # Base UI components
│   ├── Sidebar.tsx     # Navigation sidebar
│   ├── Navigation.tsx  # Main navigation
│   └── ...
├── pages/              # Page components
│   ├── dashboard/      # Dashboard pages
│   ├── Index.tsx       # Landing page
│   ├── About.tsx       # About page
│   └── ...
├── utils/              # Utility functions
│   ├── analytics.ts    # Analytics utilities
│   ├── aiRecommendations.ts
│   └── ...
├── services/           # API services
├── types/              # TypeScript type definitions
├── hooks/              # Custom React hooks
├── context/            # React context providers
└── locales/            # Internationalization files
```

## 🎯 Key Pages

- **Landing Page** (`/`) - Platform overview and features
- **Student Portal** (`/student`) - Complete student dashboard
- **Course Marketplace** (`/marketplace`) - Browse and purchase courses
- **Instructor Dashboard** (`/instructor`) - Course management tools
- **Admin Panel** (`/admin`) - Platform administration

## 🔧 Configuration

### Environment Variables
Create a `.env.local` file in the root directory:

```env
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

### Customization
- **Branding**: Update colors and logos in `src/index.css`
- **Content**: Modify text content in `src/locales/`
- **Features**: Enable/disable features in configuration files

## 📱 Mobile Support

The platform is fully responsive and optimized for:
- Desktop computers
- Tablets
- Mobile phones
- Touch devices

## 🌐 Internationalization

Supports multiple languages with easy content management:
- English (default)
- Spanish
- French
- German
- Italian
- Japanese
- Korean
- Dutch
- Portuguese
- Chinese
- Arabic

## 🚀 Deployment

### Quick Deploy

#### Option 1: Vercel (Recommended)
```bash
# Install Vercel CLI
npm install -g vercel

# Login and deploy
vercel login
vercel --prod
```

#### Option 2: Netlify
```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login and deploy
netlify login
netlify deploy --prod
```

#### Option 3: Automated Script
```bash
# Make script executable and run
chmod +x scripts/deploy.sh
./scripts/deploy.sh [vercel|netlify]
```

### Environment Configuration

For production, set environment variables in your hosting platform's environment settings.

### Manual Deployment
```bash
# Build for production
npm run build:prod

# The dist/ folder contains your production-ready files
# Upload to your web server or hosting provider
```

### Post-Deployment Checklist

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

### Custom Domain Setup

1. **Vercel**: Go to Settings > Domains in your project dashboard
2. **Netlify**: Go to Domain management in your site dashboard
3. Update your DNS records as instructed by your hosting provider

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

For support and questions:
- Create an issue in the GitHub repository
- Check the documentation in the `/docs` folder
- Review the code examples in the `/examples` folder

## 🔮 Roadmap

- [ ] Advanced AI features
- [ ] Blockchain integration for certificates
- [ ] VR/AR learning experiences
- [ ] Advanced analytics
- [ ] Mobile app development
- [ ] Enterprise features

---

**Built with ❤️ for the future of education**
