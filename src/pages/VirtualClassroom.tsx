import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Video, 
  Monitor, 
  FileText, 
  MessageSquare, 
  Grid, 
  Play,
  ArrowRight,
  Users,
  Clock,
  Globe,
  Shield,
  Zap,
  Star,
  CheckCircle,
  Award,
  TrendingUp,
  BarChart3,
  Settings,
  Mic,
  Camera,
  Share,
  Download,
  Upload,
  Calendar,
  Phone,
  Mail,
  MapPin,
  Clock as ClockIcon,
  User,
  BookOpen,
  Target,
  Heart,
  Brain,
  Palette,
  Layers,
  Wifi,
  Activity
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Footer from '@/components/Footer';

const VirtualClassroom = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: <Video className="w-8 h-8 text-blue-400" />,
      title: "HD Video Streaming",
      description: "Crystal clear video quality with support for up to 1000 concurrent participants"
    },
    {
      icon: <Monitor className="w-8 h-8 text-green-400" />,
      title: "Screen Sharing",
      description: "Share your screen, applications, or specific windows with all participants"
    },
    {
      icon: <FileText className="w-8 h-8 text-purple-400" />,
      title: "Interactive Whiteboard",
      description: "Collaborate in real-time with drawing tools, shapes, and annotations"
    },
    {
      icon: <MessageSquare className="w-8 h-8 text-orange-400" />,
      title: "Live Chat",
      description: "Engage with participants through public and private messaging"
    },
    {
      icon: <Grid className="w-8 h-8 text-pink-400" />,
      title: "Breakout Rooms",
      description: "Split participants into smaller groups for focused discussions"
    },
    {
      icon: <Play className="w-8 h-8 text-cyan-400" />,
      title: "Session Recording",
      description: "Record sessions for later review and distribution to attendees"
    }
  ];

  const advancedFeatures = [
    {
      icon: <Users className="w-6 h-6 text-blue-400" />,
      title: "Multi-participant Support",
      description: "Host sessions with up to 1000 concurrent participants"
    },
    {
      icon: <Shield className="w-6 h-6 text-green-400" />,
      title: "Enterprise Security",
      description: "End-to-end encryption and secure authentication"
    },
    {
      icon: <Globe className="w-6 h-6 text-purple-400" />,
      title: "Global Access",
      description: "Low-latency connections worldwide"
    },
    {
      icon: <Activity className="w-6 h-6 text-orange-400" />,
      title: "Real-time Analytics",
      description: "Track engagement and participation metrics"
    },
    {
      icon: <Zap className="w-6 h-6 text-pink-400" />,
      title: "Instant Setup",
      description: "Join sessions with one-click access"
    },
    {
      icon: <Star className="w-6 h-6 text-cyan-400" />,
      title: "Premium Quality",
      description: "HD video and crystal clear audio"
    }
  ];

  const useCases = [
    {
      title: "Corporate Training",
      description: "Conduct employee training sessions and workshops",
      icon: <Users className="w-6 h-6 text-blue-400" />,
      features: ["Screen Sharing", "Recording", "Breakout Rooms"]
    },
    {
      title: "Academic Classes",
      description: "Deliver lectures and interactive learning sessions",
      icon: <BookOpen className="w-6 h-6 text-green-400" />,
      features: ["Whiteboard", "Chat", "File Sharing"]
    },
    {
      title: "Client Meetings",
      description: "Host professional client presentations and consultations",
      icon: <Target className="w-6 h-6 text-purple-400" />,
      features: ["HD Video", "Screen Sharing", "Recording"]
    },
    {
      title: "Team Collaboration",
      description: "Facilitate team meetings and brainstorming sessions",
      icon: <Heart className="w-6 h-6 text-orange-400" />,
      features: ["Breakout Rooms", "Whiteboard", "Chat"]
    }
  ];

  const stats = [
    { number: "1000+", label: "Concurrent Participants", icon: <Users className="w-6 h-6" /> },
    { number: "99.9%", label: "Uptime", icon: <Shield className="w-6 h-6" /> },
    { number: "150+", label: "Countries Supported", icon: <Globe className="w-6 h-6" /> },
    { number: "4K", label: "Video Quality", icon: <Video className="w-6 h-6" /> }
  ];

  return (
    <div className="min-h-screen bg-[#0a1834]">
      {/* Hero Section */}
      <section className="bg-[#0a1834] text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <h1 className="text-5xl lg:text-7xl font-bold mb-6">
              Virtual Classroom
            </h1>
            <p className="text-xl lg:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed text-gray-300">
              Deliver engaging online learning experiences with our comprehensive virtual classroom platform. 
              Support live sessions, recordings, and interactive collaboration tools.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={() => navigate('/virtual-classroom/demo')}
                className="bg-white text-[#0a1834] hover:bg-gray-100 px-8 py-4 rounded-full font-semibold text-lg flex items-center gap-2"
              >
                <Video className="w-5 h-5" />
                Join Demo Session
              </Button>
              <Button 
                onClick={() => navigate('/virtual-classroom/schedule')}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-semibold text-lg flex items-center gap-2"
              >
                <Calendar className="w-5 h-5" />
                Schedule Session
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-[#0a1834]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Powerful Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              All the tools you need for impactful and interactive online learning
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="bg-gray-800 border-gray-700 hover:bg-gray-750 transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <div className="flex justify-center mb-6">
                    <div className="p-4 bg-gray-700 rounded-full">
                      {feature.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-white">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300">
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
              Advanced Capabilities
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Enterprise-grade features for professional virtual learning
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
      <section className="py-20 px-4 bg-[#0a1834]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Perfect for Every Use Case
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Versatile platform that adapts to your specific learning needs
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

      {/* Stats Section */}
      <section className="py-20 px-4 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Trusted by Educators Worldwide
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Join thousands of educators who are delivering amazing virtual learning experiences
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4 text-blue-400">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold mb-2">{stat.number}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-20 px-4 bg-[#0a1834]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Built with Advanced Technology
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Cutting-edge technology ensures the best virtual learning experience
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-600/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Wifi className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Low Latency</h3>
              <p className="text-gray-300 text-sm">
                Ultra-fast connections for real-time interaction
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-600/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-green-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Secure & Private</h3>
              <p className="text-gray-300 text-sm">
                Enterprise-grade security and privacy
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-600/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-purple-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Global CDN</h3>
              <p className="text-gray-300 text-sm">
                Worldwide content delivery network
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-orange-600/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-orange-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Auto Scaling</h3>
              <p className="text-gray-300 text-sm">
                Automatically scales to meet demand
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-blue-600/20 border-t border-blue-500/30">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Transform Your Learning Experience?
          </h2>
          <p className="text-xl mb-8 text-gray-300">
            Join thousands of educators who are already delivering amazing virtual learning experiences
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={() => navigate('/virtual-classroom/demo')}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-semibold text-lg"
            >
              Start Free Trial
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

export default VirtualClassroom;