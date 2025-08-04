import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Brain, 
  Zap, 
  Users, 
  BookOpen, 
  Video, 
  MessageSquare, 
  BarChart3, 
  Target, 
  Award, 
  Globe, 
  Shield, 
  Clock, 
  Star, 
  Play, 
  Headphones, 
  FileText, 
  Palette, 
  Layers, 
  Wifi, 
  TrendingUp,
  ArrowRight,
  CheckCircle,
  Sparkles,
  Lightbulb,
  Rocket,
  Cpu,
  Database,
  Network,
  Smartphone,
  Monitor,
  Tablet,
  Laptop,
  Cloud,
  Lock,
  Eye,
  Heart,
  ThumbsUp,
  MessageCircle,
  Calendar,
  Bell,
  Settings,
  User,
  Search,
  Filter,
  Download,
  Upload,
  Share,
  Bookmark,
  Flag,
  Star as StarIcon,
  Award as AwardIcon,
  Trophy,
  Medal,
  Crown,
  Target as TargetIcon,
  Zap as ZapIcon,
  Globe as GlobeIcon,
  Activity,
  TrendingUp as TrendingUpIcon,
  BarChart3 as BarChart3Icon,
  PieChart,
  LineChart,
  Users as UsersIcon,
  Calendar as CalendarIcon,
  Clock as ClockIcon,
  BookOpen as BookOpenIcon,
  FileText as FileTextIcon,
  Video as VideoIcon,
  MessageSquare as MessageSquareIcon,
  Headphones as HeadphonesIcon,
  Palette as PaletteIcon,
  Layers as LayersIcon,
  Wifi as WifiIcon,
  Shield as ShieldIcon,
  Lock as LockIcon,
  Eye as EyeIcon,
  Heart as HeartIcon,
  ThumbsUp as ThumbsUpIcon,
  MessageCircle as MessageCircleIcon,
  Calendar as CalendarIcon2,
  Bell as BellIcon,
  Settings as SettingsIcon,
  User as UserIcon,
  Search as SearchIcon,
  Filter as FilterIcon,
  Download as DownloadIcon,
  Upload as UploadIcon,
  Share as ShareIcon,
  Bookmark as BookmarkIcon,
  Flag as FlagIcon
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const AdvancedFeatures = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('ai-powered');

  const features = {
    'ai-powered': [
      {
        icon: <Brain className="w-8 h-8 text-blue-500" />,
        title: "AI Course Creator",
        description: "Create comprehensive courses in minutes with AI assistance",
        features: ["Auto-generate course structure", "Smart content suggestions", "Adaptive learning paths", "Real-time feedback"],
        badge: "New"
      },
      {
        icon: <Zap className="w-8 h-8 text-yellow-500" />,
        title: "AI Video Calling",
        description: "Connect with AI tutors and experts for personalised learning",
        features: ["24/7 AI tutoring", "Real-time language translation", "Personalised explanations", "Interactive Q&A sessions"],
        badge: "Premium"
      },
      {
        icon: <MessageSquare className="w-8 h-8 text-green-500" />,
        title: "AI Learning Companions",
        description: "Personal AI assistants that adapt to your learning style",
        features: ["Personalised study plans", "Progress tracking", "Motivational support", "Knowledge reinforcement"],
        badge: "Popular"
      },
      {
        icon: <Target className="w-8 h-8 text-purple-500" />,
        title: "AI Assessment Generator",
        description: "Automatically create quizzes and assessments",
        features: ["Smart question generation", "Difficulty adaptation", "Instant grading", "Performance analytics"],
        badge: "Advanced"
      }
    ],
    'interactive': [
      {
        icon: <Video className="w-8 h-8 text-red-500" />,
        title: "Virtual Classroom",
        description: "Real-time virtual learning environment with interactive tools",
        features: ["Live video conferencing", "Screen sharing", "Interactive whiteboard", "Breakout rooms"],
        badge: "Live"
      },
      {
        icon: <Palette className="w-8 h-8 text-pink-500" />,
        title: "Interactive Whiteboard",
        description: "Collaborative digital whiteboard for visual learning",
        features: ["Real-time collaboration", "Drawing tools", "Templates library", "Session recording"],
        badge: "Interactive"
      },
      {
        icon: <Headphones className="w-8 h-8 text-indigo-500" />,
        title: "Audio Learning Tools",
        description: "Advanced audio features for enhanced learning",
        features: ["Text-to-speech", "Audio notes", "Podcast integration", "Voice commands"],
        badge: "Audio"
      },
      {
        icon: <FileText className="w-8 h-8 text-orange-500" />,
        title: "Interactive Documents",
        description: "Create and share interactive learning materials",
        features: ["Embedded videos", "Interactive quizzes", "Collaborative editing", "Version control"],
        badge: "Document"
      }
    ],
    'analytics': [
      {
        icon: <BarChart3 className="w-8 h-8 text-cyan-500" />,
        title: "Advanced Analytics",
        description: "Comprehensive learning analytics and insights",
        features: ["Learning progress tracking", "Performance analytics", "Engagement metrics", "Predictive insights"],
        badge: "Analytics"
      },
      {
        icon: <TrendingUp className="w-8 h-8 text-emerald-500" />,
        title: "Progress Tracking",
        description: "Detailed progress monitoring and goal setting",
        features: ["Milestone tracking", "Goal setting", "Achievement badges", "Progress reports"],
        badge: "Progress"
      },
      {
        icon: <PieChart className="w-8 h-8 text-rose-500" />,
        title: "Performance Insights",
        description: "Deep insights into learning performance",
        features: ["Skill gap analysis", "Learning patterns", "Time tracking", "Efficiency metrics"],
        badge: "Insights"
      },
      {
        icon: <LineChart className="w-8 h-8 text-violet-500" />,
        title: "Predictive Analytics",
        description: "AI-powered predictions for learning outcomes",
        features: ["Success prediction", "Risk assessment", "Personalised recommendations", "Intervention alerts"],
        badge: "AI"
      }
    ],
    'collaboration': [
      {
        icon: <Users className="w-8 h-8 text-blue-600" />,
        title: "Social Learning",
        description: "Connect and learn with peers worldwide",
        features: ["Study groups", "Peer reviews", "Discussion forums", "Knowledge sharing"],
        badge: "Social"
      },
      {
        icon: <MessageCircle className="w-8 h-8 text-green-600" />,
        title: "Real-time Chat",
        description: "Instant messaging and collaboration tools",
        features: ["Group chats", "File sharing", "Voice messages", "Video calls"],
        badge: "Chat"
      },
      {
        icon: <Calendar className="w-8 h-8 text-purple-600" />,
        title: "Study Scheduling",
        description: "Smart scheduling and time management",
        features: ["Automated scheduling", "Study reminders", "Calendar integration", "Time blocking"],
        badge: "Schedule"
      },
      {
        icon: <Share className="w-8 h-8 text-orange-600" />,
        title: "Content Sharing",
        description: "Easy sharing of learning materials and resources",
        features: ["Resource library", "Public sharing", "Collaborative playlists", "Export options"],
        badge: "Share"
      }
    ]
  };

  const tabs = [
    { id: 'ai-powered', label: 'AI-Powered Learning', icon: <Brain className="w-5 h-5" /> },
    { id: 'interactive', label: 'Interactive Tools', icon: <Palette className="w-5 h-5" /> },
    { id: 'analytics', label: 'Analytics & Insights', icon: <BarChart3 className="w-5 h-5" /> },
    { id: 'collaboration', label: 'Collaboration', icon: <Users className="w-5 h-5" /> }
  ];

  const stats = [
    { label: 'AI Features', value: '50+', icon: <Brain className="w-6 h-6" /> },
    { label: 'Interactive Tools', value: '25+', icon: <Palette className="w-6 h-6" /> },
    { label: 'Analytics Metrics', value: '100+', icon: <BarChart3 className="w-6 h-6" /> },
    { label: 'Collaboration Features', value: '30+', icon: <Users className="w-6 h-6" /> }
  ];

  return (
    <div className="min-h-screen bg-[#0a1834]">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge className="mb-4 bg-blue-600 text-white px-4 py-2">
              <Sparkles className="w-4 h-4 mr-2" />
              Advanced Learning Platform
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Discover Advanced
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400"> Learning Features</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Experience the future of education with cutting-edge AI-powered tools, interactive learning environments, 
              comprehensive analytics, and seamless collaboration features.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={() => navigate('/courses')}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg"
              >
                <Rocket className="w-5 h-5 mr-2" />
                Start Learning
              </Button>
              <Button 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-blue-900 px-8 py-3 text-lg"
              >
                <Play className="w-5 h-5 mr-2" />
                Watch Demo
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-blue-600/20 rounded-full text-blue-400">
                    {stat.icon}
                  </div>
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Features Tabs */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-colors ${
                  activeTab === tab.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white'
                }`}
              >
                {tab.icon}
                <span>{tab.label}</span>
              </button>
            ))}
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features[activeTab as keyof typeof features].map((feature, index) => (
              <Card key={index} className="bg-gray-800 border-gray-700 hover:bg-gray-750 transition-all duration-300 hover:shadow-xl">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="p-3 bg-gray-700 rounded-lg">
                        {feature.icon}
                      </div>
                      <div>
                        <CardTitle className="text-white text-xl">{feature.title}</CardTitle>
                        <p className="text-gray-300 mt-2">{feature.description}</p>
                      </div>
                    </div>
                    <Badge className={`${
                      feature.badge === 'New' ? 'bg-green-600 text-white' :
                      feature.badge === 'Premium' ? 'bg-purple-600 text-white' :
                      feature.badge === 'Popular' ? 'bg-orange-600 text-white' :
                      feature.badge === 'Advanced' ? 'bg-blue-600 text-white' :
                      feature.badge === 'Live' ? 'bg-red-600 text-white' :
                      feature.badge === 'Interactive' ? 'bg-pink-600 text-white' :
                      feature.badge === 'Audio' ? 'bg-indigo-600 text-white' :
                      feature.badge === 'Document' ? 'bg-yellow-600 text-white' :
                      feature.badge === 'Analytics' ? 'bg-cyan-600 text-white' :
                      feature.badge === 'Progress' ? 'bg-emerald-600 text-white' :
                      feature.badge === 'Insights' ? 'bg-rose-600 text-white' :
                      feature.badge === 'AI' ? 'bg-violet-600 text-white' :
                      feature.badge === 'Social' ? 'bg-blue-600 text-white' :
                      feature.badge === 'Chat' ? 'bg-green-600 text-white' :
                      feature.badge === 'Schedule' ? 'bg-purple-600 text-white' :
                      'bg-gray-600 text-white'
                    }`}>
                      {feature.badge}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {feature.features.map((item, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                        <span className="text-gray-300">{item}</span>
                      </div>
                    ))}
                  </div>
                  <Button 
                    variant="outline" 
                    className="w-full mt-6 text-white border-gray-600 hover:bg-gray-700"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Technology Stack */}
      <div className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Powered by Cutting-Edge Technology</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Our platform leverages the latest technologies to deliver an exceptional learning experience
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {[
              { name: 'AI/ML', icon: <Brain className="w-8 h-8" />, color: 'text-blue-400' },
              { name: 'Cloud', icon: <Cloud className="w-8 h-8" />, color: 'text-green-400' },
              { name: 'Security', icon: <Shield className="w-8 h-8" />, color: 'text-red-400' },
              { name: 'Analytics', icon: <BarChart3 className="w-8 h-8" />, color: 'text-purple-400' },
              { name: 'Mobile', icon: <Smartphone className="w-8 h-8" />, color: 'text-yellow-400' },
              { name: 'Real-time', icon: <Wifi className="w-8 h-8" />, color: 'text-cyan-400' }
            ].map((tech, index) => (
              <div key={index} className="text-center">
                <div className={`flex justify-center mb-3 ${tech.color}`}>
                  {tech.icon}
                </div>
                <div className="text-white font-medium">{tech.name}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Experience Advanced Learning?
          </h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of learners who are already using our advanced features to accelerate their learning journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={() => navigate('/signin')}
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 text-lg font-semibold"
            >
              <User className="w-5 h-5 mr-2" />
              Get Started Free
            </Button>
            <Button 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 text-lg"
            >
              <MessageSquare className="w-5 h-5 mr-2" />
              Contact Sales
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvancedFeatures; 