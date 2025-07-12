import { Zap, Globe, Users, BookOpen, Star, CreditCard, BarChart3, Shield, Briefcase, Heart, Target, TrendingUp, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';

const features = [
  {
    icon: <Zap className="w-8 h-8 text-blue-600" />, title: 'AI-Powered Course Creation',
    desc: 'Instantly generate courses, lessons, quizzes, videos, and assessments with advanced AI tools. Empower instructors and organizations to scale content creation and keep learning fresh.'
  },
  {
    icon: <Globe className="w-8 h-8 text-green-600" />, title: 'Multilingual & Global',
    desc: 'Reach learners worldwide with seamless language switching and culturally adaptive content. Our platform supports 10+ languages and growing.'
  },
  {
    icon: <Users className="w-8 h-8 text-purple-600" />, title: 'Personalized Learning Companions',
    desc: 'AI companions guide, motivate, and adapt to each learner’s journey. Unlock premium features with subscription plans.'
  },
  {
    icon: <CreditCard className="w-8 h-8 text-pink-600" />, title: 'Flexible Subscriptions & Payments',
    desc: 'Student, instructor, and vendor/advertiser plans. Secure Stripe integration for global payments. Manage everything in one place.'
  },
  {
    icon: <BookOpen className="w-8 h-8 text-yellow-600" />, title: 'Student & Instructor Portals',
    desc: 'Intuitive dashboards for tracking progress, managing courses, and engaging with the community.'
  },
  {
    icon: <Briefcase className="w-8 h-8 text-indigo-600" />, title: 'Vendor & Advertiser System',
    desc: 'Offer courses, manage subscriptions, and run targeted ad campaigns. Monetize your expertise or reach new audiences.'
  },
  {
    icon: <BarChart3 className="w-8 h-8 text-orange-600" />, title: 'Analytics & Insights',
    desc: 'Track learning outcomes, engagement, and ROI with real-time analytics for students, instructors, and vendors.'
  },
  {
    icon: <Target className="w-8 h-8 text-teal-600" />, title: 'Ad Management & Scheduling',
    desc: 'Dynamic ad panel with scheduling, targeting, and role-based access. Maximize visibility and revenue.'
  },
  {
    icon: <Award className="w-8 h-8 text-rose-600" />, title: 'World-Class UX & Accessibility',
    desc: 'Modern, responsive design. Accessible to all learners, on any device.'
  },
  {
    icon: <Star className="w-8 h-8 text-yellow-500" />, title: 'Mega-Menu Navigation',
    desc: 'One powerful, expandable navbar for all navigation. Effortlessly explore 22+ course categories, subcategories, and featured content.'
  },
  {
    icon: <TrendingUp className="w-8 h-8 text-fuchsia-600" />, title: 'Career & Skills Focused',
    desc: 'Discover trending skills, career paths, and industry-aligned learning goals.'
  },
  {
    icon: <Shield className="w-8 h-8 text-gray-600" />, title: 'Secure & Private',
    desc: 'Enterprise-grade security, privacy, and compliance. Your data is always protected.'
  },
  {
    icon: <Heart className="w-8 h-8 text-red-500" />, title: 'Community & Support',
    desc: 'Engage with peers, mentors, and support teams. Learning is better together.'
  }
];

const Features = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 text-gray-900">
      {/* Hero Section */}
      <section className="py-20 px-4 text-center">
        <div className="max-w-3xl mx-auto mb-10">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <img src="/branding/logo.png" alt="OponMeta Symbol Logo" className="h-16 w-16 animate-swivel" />
            <span className="text-4xl font-bold bg-gradient-to-r from-yellow-400 via-amber-400 to-yellow-600 bg-clip-text text-transparent">OponMeta</span>
          </div>
          <h1 className="text-5xl font-extrabold mb-4 drop-shadow-lg">Unlock the Future of Learning with OponMeta</h1>
          <p className="text-xl text-gray-700 mb-8">AI-powered, multilingual, and designed for students, instructors, and organizations worldwide. Experience the most advanced, accessible, and engaging educational platform ever built.</p>
          <Button size="lg" className="text-lg px-8 py-4 font-bold shadow-lg" asChild>
            <a href="/signup">Start Free – Join Our Platform Today</a>
          </Button>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <div key={i} className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center text-center hover:scale-[1.03] transition-transform duration-200 border border-gray-100">
              <div className="mb-4">{f.icon}</div>
              <h3 className="text-2xl font-bold mb-2">{f.title}</h3>
              <p className="text-gray-600 text-base mb-2">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Ready to experience the next generation of learning?</h2>
          <p className="text-lg text-gray-700 mb-8">Sign up now and join a global community of learners, educators, and innovators. Our platform is your gateway to limitless knowledge and opportunity.</p>
          <Button size="lg" className="text-lg px-8 py-4 font-bold shadow-lg" asChild>
            <a href="/signup">Get Started Free</a>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Features;