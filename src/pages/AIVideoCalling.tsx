import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Rocket, 
  ArrowRight, 
  Play, 
  Video, 
  User, 
  Users, 
  Calendar,
  Globe,
  Mic,
  Brain,
  MessageSquare,
  Target,
  Zap,
  Clock,
  Star,
  CheckCircle,
  Shield,
  Award,
  TrendingUp,
  Eye,
  Headphones,
  Smartphone,
  Monitor,
  Wifi,
  Camera,
  Phone,
  BookOpen
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Footer from '@/components/Footer';

const AIVideoCalling = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: <Video className="w-8 h-8 text-blue-400" />,
      title: "AI Video Call Experience",
      description: "Seamless video calls with AI agents providing real-time responses and personalised learning assistance"
    },
    {
      icon: <User className="w-8 h-8 text-green-400" />,
      title: "Instant AI Coaching",
      description: "Receive immediate feedback and guidance from AI agents tailored to your specific learning needs"
    },
    {
      icon: <Users className="w-8 h-8 text-purple-400" />,
      title: "Interactive Learning Sessions",
      description: "Participate in live sessions powered by AI tutors and connect with global experts worldwide"
    },
    {
      icon: <Calendar className="w-8 h-8 text-orange-400" />,
      title: "Personalised Career Planning",
      description: "AI-driven career plans customised to your unique goals, skills, and aspirations"
    }
  ];

  const advancedFeatures = [
    {
      icon: <Mic className="w-6 h-6 text-blue-400" />,
      title: "Voice-First Learning",
      description: "Natural conversations with AI tutors that understand context and provide intelligent responses"
    },
    {
      icon: <Brain className="w-6 h-6 text-green-400" />,
      title: "Adaptive Intelligence",
      description: "AI that learns your learning style and adjusts teaching methods for optimal results"
    },
    {
      icon: <Target className="w-6 h-6 text-purple-400" />,
      title: "Goal-Oriented Paths",
      description: "Personalised learning paths designed to help you achieve your specific career objectives"
    },
    {
      icon: <MessageSquare className="w-6 h-6 text-orange-400" />,
      title: "Real-Time Feedback",
      description: "Instant feedback on your progress with actionable insights for improvement"
    },
    {
      icon: <Shield className="w-6 h-6 text-red-400" />,
      title: "Secure & Private",
      description: "Enterprise-grade security ensuring your learning sessions remain confidential"
    },
    {
      icon: <Zap className="w-6 h-6 text-yellow-400" />,
      title: "Lightning Fast",
      description: "Ultra-low latency connections for smooth, uninterrupted learning experiences"
    }
  ];

  const useCases = [
    {
      title: "Professional Development",
      description: "Upskill with industry experts and AI mentors for career advancement",
      icon: <TrendingUp className="w-6 h-6 text-blue-400" />,
      features: ["Skill Assessment", "Career Guidance", "Industry Insights"]
    },
    {
      title: "Academic Support",
      description: "Get personalised tutoring and homework help from AI and human experts",
      icon: <BookOpen className="w-6 h-6 text-green-400" />,
      features: ["Subject Tutoring", "Exam Preparation", "Study Planning"]
    },
    {
      title: "Language Learning",
      description: "Practice with native speakers and AI language coaches",
      icon: <Globe className="w-6 h-6 text-purple-400" />,
      features: ["Conversation Practice", "Grammar Correction", "Cultural Context"]
    },
    {
      title: "Technical Training",
      description: "Learn coding, design, and technical skills with expert guidance",
      icon: <Monitor className="w-6 h-6 text-orange-400" />,
      features: ["Code Review", "Project Guidance", "Best Practices"]
    }
  ];

  const stats = [
    { number: "50,000+", label: "Active Learners", icon: <Users className="w-8 h-8 text-blue-400" /> },
    { number: "1,200+", label: "Global Instructors", icon: <User className="w-8 h-8 text-green-400" /> },
    { number: "5,000+", label: "Courses Available", icon: <BookOpen className="w-8 h-8 text-purple-400" /> },
    { number: "54", label: "Countries Served", icon: <Globe className="w-8 h-8 text-orange-400" /> },
    { number: "99.9%", label: "Uptime", icon: <Shield className="w-8 h-8 text-red-400" /> },
    { number: "4.9/5", label: "User Rating", icon: <Star className="w-8 h-8 text-yellow-400" /> }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "Free",
      duration: "7 days",
      features: [
        "3 AI video sessions",
        "Basic learning paths",
        "Community access",
        "Email support"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "£29",
      duration: "per month",
      features: [
        "Unlimited AI sessions",
        "Advanced learning paths",
        "Priority support",
        "Progress tracking",
        "Certificate generation"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      duration: "contact us",
      features: [
        "Everything in Professional",
        "Custom AI training",
        "Dedicated support",
        "API access",
        "White-label options"
      ],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-[#0a1834]">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            {/* Tagline */}
            <div className="inline-flex items-center gap-2 bg-blue-600/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6 border border-blue-500/30">
              <Rocket className="w-4 h-4 text-blue-400" />
              <span className="text-sm font-medium text-blue-200">Experience the Future of Learning</span>
            </div>

            {/* Main Title */}
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 text-white">
              Meet AI
            </h1>
            
            {/* Subtitle */}
            <h2 className="text-2xl lg:text-3xl font-semibold mb-8 text-blue-100">
              Video Calling Powered by AI Agents
            </h2>
            
            {/* Description */}
            <p className="text-lg lg:text-xl max-w-4xl mx-auto mb-10 leading-relaxed text-gray-300">
              Experience the future of online learning with AI-powered video calls, real-time coaching, and personalised learning assistance. 
              Connect with intelligent AI tutors and global experts for an unparalleled educational experience.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <Button 
                onClick={() => navigate('/companion-subscribe')}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-semibold flex items-center gap-2 text-lg"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button 
                variant="outline"
                className="border-blue-400 text-blue-300 hover:bg-blue-600/20 px-8 py-4 rounded-full font-semibold flex items-center gap-2 text-lg"
              >
                <Play className="w-5 h-5" />
                Watch Demo
              </Button>
            </div>

            {/* Hero Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {stats.slice(0, 4).map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-white mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-300">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Core Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Revolutionary AI Learning Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover how AI-powered video calling transforms your learning experience with cutting-edge technology
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="bg-gray-800 border-gray-700 hover:bg-gray-750 transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-blue-600/20 rounded-full">
                      {feature.icon}
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold mb-3 text-white">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-gray-300 leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Advanced Features Section */}
      <section className="py-20 px-4 bg-gray-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Advanced AI Capabilities
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the power of artificial intelligence in every learning session
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {advancedFeatures.map((feature, index) => (
              <div key={index} className="flex items-start space-x-4 p-6 bg-gray-800 rounded-lg border border-gray-700">
                <div className="flex-shrink-0">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 text-sm">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Perfect for Every Learning Need
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Whether you're advancing your career or pursuing personal growth, AI video calling adapts to your goals
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <Card key={index} className="bg-gray-800 border-gray-700 hover:bg-gray-750 transition-all duration-300">
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-3 mb-3">
                    {useCase.icon}
                    <h3 className="text-xl font-semibold text-white">
                      {useCase.title}
                    </h3>
                  </div>
                  <p className="text-gray-300 text-sm">
                    {useCase.description}
                  </p>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="space-y-2">
                    {useCase.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-400" />
                        <span className="text-sm text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 px-4 bg-gray-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              How AI Video Calling Works
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Simple steps to start your AI-powered learning journey
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-600/20 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl font-bold text-blue-400">1</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Choose Your Learning Path</h3>
              <p className="text-gray-300">
                Select from thousands of courses and learning paths tailored to your goals
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-600/20 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl font-bold text-green-400">2</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Connect with AI Tutor</h3>
              <p className="text-gray-300">
                Start a video call with your AI tutor and begin your personalised learning session
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-600/20 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl font-bold text-purple-400">3</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Track Your Progress</h3>
              <p className="text-gray-300">
                Monitor your learning progress and receive detailed analytics and insights
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Choose Your Plan
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Start with our free trial and upgrade as you grow
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <Card key={index} className={`bg-gray-800 border-gray-700 ${plan.popular ? 'border-blue-500 ring-2 ring-blue-500/20' : ''}`}>
                <CardHeader className="text-center pb-4">
                  {plan.popular && (
                    <Badge className="mb-4 bg-blue-600 text-white">Most Popular</Badge>
                  )}
                  <h3 className="text-2xl font-bold text-white">{plan.name}</h3>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-300 ml-2">{plan.duration}</span>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="space-y-3 mb-6">
                    {plan.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-400" />
                        <span className="text-sm text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button 
                    className={`w-full ${plan.popular ? 'bg-blue-600 hover:bg-blue-700' : 'bg-gray-700 hover:bg-gray-600'}`}
                    onClick={() => navigate('/companion-subscribe')}
                  >
                    {plan.name === 'Enterprise' ? 'Contact Sales' : 'Get Started'}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-20 px-4 bg-gray-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Powered by Advanced Technology
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Built with cutting-edge AI and video technology for the best learning experience
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-600/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Camera className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">HD Video Quality</h3>
              <p className="text-gray-300 text-sm">
                Crystal clear video calls with adaptive quality
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-600/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Wifi className="w-8 h-8 text-green-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Low Latency</h3>
              <p className="text-gray-300 text-sm">
                Ultra-fast connections for real-time interaction
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-600/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Brain className="w-8 h-8 text-purple-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">AI Processing</h3>
              <p className="text-gray-300 text-sm">
                Advanced AI models for intelligent responses
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-orange-600/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-orange-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Secure & Private</h3>
              <p className="text-gray-300 text-sm">
                Enterprise-grade security and privacy
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-blue-600/20 border-t border-blue-500/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Learning?
          </h2>
          <p className="text-xl mb-8 text-gray-300">
            Join thousands of learners who are already experiencing the future of education with AI-powered video calling
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={() => navigate('/companion-subscribe')}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-semibold text-lg"
            >
              Start Your Free Trial
            </Button>
            <Button 
              variant="outline"
              className="border-blue-400 text-blue-300 hover:bg-blue-600/20 px-8 py-4 rounded-full font-semibold text-lg"
            >
              Schedule a Demo
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AIVideoCalling; 