import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Plus, 
  Layers, 
  Type, 
  Image, 
  Video, 
  Mic, 
  FileText, 
  MousePointer, 
  Square, 
  Grid,
  ArrowRight,
  Play,
  Download,
  Share,
  Zap,
  Target,
  Users,
  Star,
  CheckCircle,
  BookOpen,
  Palette,
  Move,
  RotateCw,
  Eye,
  Settings,
  Globe,
  Award,
  Briefcase,
  Shield,
  Clock,
  TrendingUp
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Footer from '@/components/Footer';

const CourseAuthoringLanding = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: <Layers className="w-8 h-8 text-blue-400" />,
      title: "Drag & Drop Interface",
      description: "Intuitive drag-and-drop editor for easy course creation"
    },
    {
      icon: <BookOpen className="w-8 h-8 text-green-400" />,
      title: "100+ Professional Templates",
      description: "Ready-to-use templates for every industry and audience"
    },
    {
      icon: <Zap className="w-8 h-8 text-purple-400" />,
      title: "Quick Publishing",
      description: "Publish your courses instantly for students to purchase"
    },
    {
      icon: <Palette className="w-8 h-8 text-orange-400" />,
      title: "Customisable Design",
      description: "Full control over colours, fonts, and layouts"
    }
  ];

  const templates = [
    {
      name: "Corporate Training",
      category: "Business",
      slides: 12,
      description: "Professional training template for corporate environments",
      color: "bg-blue-600"
    },
    {
      name: "Product Demo",
      category: "Marketing",
      slides: 8,
      description: "Showcase your products with interactive demonstrations",
      color: "bg-red-600"
    },
    {
      name: "Technical Tutorial",
      category: "Education",
      slides: 15,
      description: "Step-by-step technical learning with code examples",
      color: "bg-green-600"
    },
    {
      name: "Safety Training",
      category: "Compliance",
      slides: 10,
      description: "Comprehensive safety and compliance training",
      color: "bg-orange-600"
    }
  ];

  const stats = [
    { number: "100+", label: "Professional Templates", icon: <BookOpen className="w-6 h-6" /> },
    { number: "50K+", label: "Courses Created", icon: <Layers className="w-6 h-6" /> },
    { number: "1M+", label: "Students Reached", icon: <Users className="w-6 h-6" /> },
    { number: "99.9%", label: "Uptime", icon: <Shield className="w-6 h-6" /> }
  ];

  return (
    <div className="min-h-screen bg-[#0a1834]">
      {/* Hero Section */}
      <section className="bg-[#0a1834] text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <h1 className="text-5xl lg:text-7xl font-bold mb-6">
              Course Authoring Tool
            </h1>
            <p className="text-xl lg:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed text-gray-300">
              Build engaging online courses in minutes with our intuitive drag-and-drop platform. 
              Select from 100+ global templates and design impactful learning experiences for any audience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={() => navigate('/course-authoring/editor')}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-semibold text-lg flex items-center gap-2"
              >
                <Plus className="w-5 h-5" />
                Start Creating
              </Button>
              <Button 
                variant="outline"
                className="border-blue-400 text-blue-300 hover:bg-blue-600/20 px-8 py-4 rounded-full font-semibold text-lg flex items-center gap-2"
              >
                <Play className="w-5 h-5" />
                Watch Demo
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
              Powerful Course Creation Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Everything you need to create professional, engaging courses that students love
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow bg-gray-800 border-gray-700">
                <CardContent className="p-6">
                  <div className="flex justify-center mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-3 text-white">
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

      {/* Templates Section */}
      <section className="py-20 px-4 bg-[#0a1834]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              100+ Professional Templates
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Jump-start your course creation with templates for every industry and audience
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {templates.map((template, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow bg-gray-800 border-gray-700">
                <div className={`h-48 ${template.color} flex items-center justify-center`}>
                  <div className="text-center text-white">
                    <BookOpen className="w-16 h-16 mx-auto mb-4 opacity-80" />
                    <h3 className="text-xl font-semibold">{template.name}</h3>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <Badge variant="secondary" className="bg-gray-600 text-white">{template.category}</Badge>
                    <span className="text-sm text-gray-300">{template.slides} slides</span>
                  </div>
                  <h3 className="font-semibold text-white mb-2">{template.name}</h3>
                  <p className="text-sm text-gray-300 mb-4">{template.description}</p>
                  <Button
                    onClick={() => navigate('/course-authoring/editor')}
                    className="w-full bg-orange-600 hover:bg-orange-700"
                  >
                    Use This Template
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Course Elements Section */}
      <section className="py-20 px-4 bg-[#0a1834]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Rich Course Elements
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Add interactive elements to make your courses engaging and effective
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <Type className="w-8 h-8" />, name: "Text", desc: "Add text blocks and headings" },
              { icon: <Image className="w-8 h-8" />, name: "Images", desc: "Insert images and graphics" },
              { icon: <Video className="w-8 h-8" />, name: "Video", desc: "Embed video content" },
              { icon: <Mic className="w-8 h-8" />, name: "Audio", desc: "Add audio narration" },
              { icon: <FileText className="w-8 h-8" />, name: "Quiz", desc: "Interactive assessments" },
              { icon: <MousePointer className="w-8 h-8" />, name: "Buttons", desc: "Navigation buttons" },
              { icon: <Square className="w-8 h-8" />, name: "Shapes", desc: "Geometric shapes" },
              { icon: <Grid className="w-8 h-8" />, name: "Layouts", desc: "Layout containers" }
            ].map((element, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow bg-gray-800 border-gray-700">
                <CardContent className="p-6">
                  <div className="flex justify-center mb-4 text-blue-400">
                    {element.icon}
                  </div>
                  <h3 className="font-semibold text-white mb-2">{element.name}</h3>
                  <p className="text-sm text-gray-300">{element.desc}</p>
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
              Join thousands of educators who are creating amazing courses with our platform
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

      {/* CTA Section */}
      <section className="py-20 px-4 bg-blue-600/20 border-t border-blue-500/30">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Build Your First Global Course?
          </h2>
          <p className="text-xl mb-8 text-gray-300">
            Join educators and trainers worldwide using our authoring tool to create engaging, impactful learning experiences.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={() => navigate('/course-authoring/editor')}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-semibold text-lg"
            >
              Start Free Trial
            </Button>
            <Button 
              variant="outline"
              className="border-blue-400 text-blue-300 hover:bg-blue-600/20 px-8 py-4 rounded-full font-semibold text-lg"
            >
              Request a Demo
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CourseAuthoringLanding; 