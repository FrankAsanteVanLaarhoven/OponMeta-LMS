import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Play, Video, Mic, Users, Calendar, DollarSign, BookOpen, User, Check, Star, ArrowRight } from 'lucide-react';

const MeetAI = () => {
  const [activeDemo, setActiveDemo] = useState<string | null>(null);
  const [selectedPlan, setSelectedPlan] = useState('free');

  const stats = [
    { number: '50,000+', label: 'Learners Worldwide' },
    { number: '1,200+', label: 'Global Instructors' },
    { number: '5,000+', label: 'Courses Offered' },
    { number: '54', label: 'Countries Served' }
  ];

  const features = [
    {
      icon: Video,
      title: 'AI Video Call Experience',
      description: 'Seamless video calls with AI agents providing real-time responses',
      demo: 'video-interface'
    },
    {
      icon: User,
      title: 'Instant AI Coaching',
      description: 'Receive immediate feedback and guidance from AI agents tailored to your needs',
      demo: 'coaching'
    },
    {
      icon: Users,
      title: 'Interactive Learning Sessions',
      description: 'Participate in live sessions powered by AI tutors and global experts',
      demo: 'sessions'
    },
    {
      icon: Calendar,
      title: 'Personalised Career Planning',
      description: 'Career plans customized to your unique goals and aspirations',
      demo: 'career-plans'
    }
  ];

  const plans = [
    {
      id: 'free',
      name: 'FREE PLAN',
      subtitle: 'Perfect for individuals and small teams',
      price: '$0.00',
      period: 'free forever',
      features: ['All Features', '10 Learners', 'Unlimited Courses'],
      popular: true
    },
    {
      id: 'essentials',
      name: 'ESSENTIALS',
      subtitle: 'Great for growing organizations',
      price: '$1.99',
      period: 'per active learner/month',
      features: ['200+ Ready-to-Use Courses', '10+ Learners', 'AI Assistance & Tracking'],
      popular: false
    }
  ];

  const videos = [
    {
      title: 'How to Choose the Best Corporate Training Platform',
      category: 'Corporate Training',
      duration: '4:25',
      thumbnail: 'photo-1488590528505-98d2b5aba04b'
    },
    {
      title: 'How to Set up Your Virtual Classroom',
      category: 'Virtual Classroom',
      duration: '6:58',
      thumbnail: 'photo-1461749280684-dccba630e2f6'
    },
    {
      title: 'How to Choose the Best LMS Software for Employee Training',
      category: 'LMS Software',
      duration: '1:53',
      thumbnail: 'photo-1581091226825-a6a2a5aee158'
    }
  ];

  const expertStats = [
    { number: '100,000+', label: 'Courses & Assessments Created' },
    { number: '4,000,000+', label: 'Global Learners' },
    { number: '100', label: 'Year Vision' }
  ];

  const solutions = [
    {
      title: 'Extensive Course Library',
      description: 'Access hundreds of high-quality, customizable courses on trending topics.',
      action: 'Browse Course Library',
      image: 'photo-1498050108023-c5249f4df085'
    },
    {
      title: 'Virtual Classroom',
      description: 'Manage all online learning activities with secure, centralized classroom tools.',
      action: 'Enter Virtual Classroom',
      image: 'photo-1488590528505-98d2b5aba04b'
    },
    {
      title: 'Quizzes & Surveys',
      description: 'Measure learning progress with interactive quizzes and gather feedback with surveys.',
      action: 'Try Quiz Tools',
      image: 'photo-1461749280684-dccba630e2f6'
    },
    {
      title: 'E-learning Authoring Tool',
      description: 'Create engaging online courses quickly with our intuitive authoring platform.',
      action: 'Launch Authoring Tool',
      image: 'photo-1581091226825-a6a2a5aee158'
    }
  ];

  const renderDemo = (demoType: string) => {
    switch (demoType) {
      case 'video-interface':
        return (
          <div className="bg-gray-900 rounded-lg p-6 text-white">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <span className="text-sm text-gray-300">AI Agent Session</span>
            </div>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="bg-blue-600 rounded-lg p-4 text-center">
                <Video className="w-8 h-8 mx-auto mb-2" />
                <p className="text-sm">AI Career Coach</p>
                <div className="w-2 h-2 bg-green-400 rounded-full mx-auto mt-2"></div>
              </div>
              <div className="bg-gray-700 rounded-lg p-4 text-center">
                <User className="w-8 h-8 mx-auto mb-2" />
                <p className="text-sm">You</p>
                <div className="w-2 h-2 bg-green-400 rounded-full mx-auto mt-2"></div>
              </div>
            </div>
            <div className="flex justify-center space-x-4">
              <Button size="sm" variant="outline" className="bg-gray-700 border-gray-600">
                <Mic className="w-4 h-4 mr-2" />
                Mute
              </Button>
              <Button size="sm" variant="outline" className="bg-gray-700 border-gray-600">
                <Video className="w-4 h-4 mr-2" />
                Camera
              </Button>
            </div>
          </div>
        );
      case 'coaching':
        return (
          <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-lg p-6">
            <div className="space-y-4">
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                    <User className="w-4 h-4 text-white" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-900">AI Career Coach</p>
                    <p className="text-sm text-gray-600 mt-1">
                      "I notice you're interested in data science. Based on your background, I recommend focusing on Python and SQL first..."
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex justify-end">
                <div className="bg-blue-600 text-white rounded-lg p-3 max-w-xs">
                  <p className="text-sm">That makes sense! Can you suggest specific courses?</p>
                </div>
              </div>
            </div>
          </div>
        );
      case 'sessions':
        return (
          <div className="bg-gradient-to-br from-green-50 to-emerald-100 rounded-lg p-6">
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-white rounded-lg p-4 text-center shadow-sm">
                <div className="w-12 h-12 bg-green-600 rounded-full mx-auto mb-2 flex items-center justify-center">
                  <BookOpen className="w-6 h-6 text-white" />
                </div>
                <p className="text-sm font-medium">Language Tutor</p>
                <p className="text-xs text-gray-600">Available Now</p>
              </div>
              <div className="bg-white rounded-lg p-4 text-center shadow-sm">
                <div className="w-12 h-12 bg-purple-600 rounded-full mx-auto mb-2 flex items-center justify-center">
                  <User className="w-6 h-6 text-white" />
                </div>
                <p className="text-sm font-medium">Interview Coach</p>
                <p className="text-xs text-gray-600">Next: 2:30 PM</p>
              </div>
              <div className="bg-white rounded-lg p-4 text-center shadow-sm">
                <div className="w-12 h-12 bg-orange-600 rounded-full mx-auto mb-2 flex items-center justify-center">
                  <Star className="w-6 h-6 text-white" />
                </div>
                <p className="text-sm font-medium">Subject Expert</p>
                <p className="text-xs text-gray-600">Join Session</p>
              </div>
            </div>
          </div>
        );
      case 'career-plans':
        return (
          <div className="bg-gradient-to-br from-purple-50 to-pink-100 rounded-lg p-6">
            <div className="space-y-4">
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <h4 className="font-medium mb-2">Your Personalised Career Plan</h4>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <Check className="w-4 h-4 text-green-600 mr-2" />
                    <span className="text-sm">Complete Python Fundamentals</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-4 h-4 border-2 border-blue-600 rounded mr-2"></div>
                    <span className="text-sm">Data Analysis with Pandas</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-4 h-4 border-2 border-gray-300 rounded mr-2"></div>
                    <span className="text-sm text-gray-500">Machine Learning Basics</span>
                  </div>
                </div>
              </div>
              <div className="bg-purple-600 text-white rounded-lg p-3">
                <p className="text-sm text-center">Next milestone: Complete in 2 weeks</p>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-white/20 text-white hover:bg-white/30">
              🚀 Experience the Future of Learning
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200">
              Meet AI
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold mb-6">
              Video Calling Powered by AI Agents
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Experience the future of online learning with AI-powered video calls, real-time coaching, and personalised learning assistance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                <Play className="w-5 h-5 mr-2" />
                Watch Demo
              </Button>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card 
                key={index} 
                className="bg-white/10 backdrop-blur-lg border-white/20 text-white hover:bg-white/20 transition-all duration-300 cursor-pointer transform hover:scale-105"
                onClick={() => setActiveDemo(activeDemo === feature.demo ? null : feature.demo)}
              >
                <CardHeader className="text-center">
                  <feature.icon className="w-12 h-12 mx-auto mb-4 text-blue-200" />
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                  <CardDescription className="text-blue-100">
                    {feature.description}
                  </CardDescription>
                </CardHeader>
                {activeDemo === feature.demo && (
                  <CardContent className="pt-0">
                    {renderDemo(feature.demo)}
                  </CardContent>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              FREE. All Features. FOREVER!
            </h2>
            <p className="text-xl text-gray-600">
              Try our Forever FREE account for small teams with all premium features!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {plans.map((plan) => (
              <Card 
                key={plan.id}
                className={`relative ${plan.popular ? 'border-blue-500 shadow-xl scale-105' : 'border-gray-200'}`}
              >
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-600">
                    Most Popular
                  </Badge>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-lg font-bold text-gray-900">{plan.name}</CardTitle>
                  <CardDescription className="text-gray-600">{plan.subtitle}</CardDescription>
                  <div className="my-4">
                    <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                    <span className="text-gray-600 ml-2">{plan.period}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <Check className="w-5 h-5 text-green-600 mr-3" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className={`w-full ${plan.popular ? 'bg-blue-600 hover:bg-blue-700' : 'bg-gray-600 hover:bg-gray-700'}`}
                    onClick={() => setSelectedPlan(plan.id)}
                  >
                    Get Started
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">
              Got questions? Schedule a demo and get all your questions answered.
            </p>
            <Button variant="outline" size="lg">
              <Calendar className="w-5 h-5 mr-2" />
              Schedule Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Course Creation Platform */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Create & Sell Online Courses & Training
            </h2>
            <p className="text-xl text-gray-600">
              Sell your online courses easily with our eCommerce LMS
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Course Creation Platform</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Check className="w-6 h-6 text-green-600 mr-3 mt-0.5" />
                  <span className="text-gray-700">Create online courses & training</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-6 h-6 text-green-600 mr-3 mt-0.5" />
                  <span className="text-gray-700">Sell online courses & training</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-6 h-6 text-green-600 mr-3 mt-0.5" />
                  <span className="text-gray-700">Make more sales in our store</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-6 h-6 text-green-600 mr-3 mt-0.5" />
                  <span className="text-gray-700">Easy to set up & start selling</span>
                </li>
              </ul>
              <p className="text-sm text-gray-500 mt-6">✓ No credit card required.</p>
            </div>
            <div className="bg-white rounded-lg shadow-xl p-8">
              <div className="text-center">
                <BookOpen className="w-16 h-16 text-blue-600 mx-auto mb-4" />
                <h4 className="text-xl font-bold text-gray-900 mb-2">Start Creating Today</h4>
                <p className="text-gray-600 mb-6">Join thousands of instructors earning from their expertise</p>
                <Button size="lg" className="w-full">
                  Create Your First Course
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Tutorials */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Videos</h2>
            <p className="text-xl text-gray-600">
              Learn from our comprehensive video tutorials
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {videos.map((video, index) => (
              <Card key={index} className="group hover:shadow-xl transition-shadow duration-300">
                <div className="relative">
                  <img 
                    src={`https://images.unsplash.com/${video.thumbnail}?auto=format&fit=crop&w=400&h=225`}
                    alt={video.title}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-t-lg flex items-center justify-center">
                    <Play className="w-12 h-12 text-white" />
                  </div>
                  <Badge className="absolute top-4 left-4 bg-black/70 text-white">
                    {video.category}
                  </Badge>
                  <Badge className="absolute bottom-4 right-4 bg-black/70 text-white">
                    {video.duration}
                  </Badge>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{video.title}</h3>
                  <Button variant="outline" className="w-full">
                    <Play className="w-4 h-4 mr-2" />
                    Watch Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Expert Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              We Are Experts at Training Course Development
            </h2>
            <p className="text-xl text-blue-100">
              We've built hundreds of training courses and trained millions of learners, so we know how to do this.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {expertStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl font-bold mb-2">{stat.number}</div>
                <div className="text-blue-200 text-lg">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Elearning Solutions */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Custom Elearning Solutions
            </h2>
            <p className="text-xl text-gray-600">
              Get all the necessary resources and tools for elearning in one place
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {solutions.map((solution, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="relative">
                  <img 
                    src={`https://images.unsplash.com/${solution.image}?auto=format&fit=crop&w=600&h=300`}
                    alt={solution.title}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-t-lg"></div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{solution.title}</h3>
                  <p className="text-gray-600 mb-4">{solution.description}</p>
                  <Button className="w-full group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    {solution.action}
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Transform Your Learning Experience?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of learners already using AI-powered education tools
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
              Start Your Free Trial
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              Contact Sales
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MeetAI;