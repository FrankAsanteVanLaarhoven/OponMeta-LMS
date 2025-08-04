import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { 
  Plus, 
  Eye, 
  Play, 
  Settings, 
  BarChart3, 
  CheckCircle, 
  Target, 
  FileText, 
  Brain, 
  Star,
  ArrowRight,
  Save,
  Share,
  Trash2,
  Copy,
  Download,
  Upload,
  Clock,
  Users,
  Award,
  Zap,
  BookOpen,
  Shield,
  Globe,
  TrendingUp,
  PieChart,
  LineChart,
  Activity
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Footer from '@/components/Footer';

const QuizBuilder = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('quiz-builder');

  const questionTypes = [
    {
      type: 'multiple-choice',
      icon: <CheckCircle className="w-8 h-8 text-green-400" />,
      title: 'Multiple Choice',
      description: 'Single or multiple correct answers'
    },
    {
      type: 'true-false',
      icon: <Target className="w-8 h-8 text-blue-400" />,
      title: 'True/False',
      description: 'Simple binary questions'
    },
    {
      type: 'fill-blank',
      icon: <FileText className="w-8 h-8 text-purple-400" />,
      title: 'Fill in the Blank',
      description: 'Text input responses'
    },
    {
      type: 'drag-drop',
      icon: <Brain className="w-8 h-8 text-orange-400" />,
      title: 'Drag & Drop',
      description: 'Interactive matching exercises'
    },
    {
      type: 'rating-scale',
      icon: <BarChart3 className="w-8 h-8 text-pink-400" />,
      title: 'Rating Scale',
      description: 'Likert scale responses'
    },
    {
      type: 'image-selection',
      icon: <Eye className="w-8 h-8 text-cyan-400" />,
      title: 'Image Selection',
      description: 'Visual question types'
    }
  ];

  const tabs = [
    { id: 'quiz-builder', label: 'Quiz Builder', icon: <Plus className="w-4 h-4" /> },
    { id: 'quiz-library', label: 'Quiz Library', icon: <BookOpen className="w-4 h-4" /> },
    { id: 'analytics', label: 'Analytics', icon: <BarChart3 className="w-4 h-4" /> },
    { id: 'features', label: 'Features', icon: <Zap className="w-4 h-4" /> }
  ];

  return (
    <div className="min-h-screen bg-[#0a1834]">
      {/* Hero Section */}
      <section className="bg-[#0a1834] text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <h1 className="text-5xl lg:text-7xl font-bold mb-6">
              Quiz & Survey Builder
            </h1>
            <p className="text-xl lg:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed text-gray-300">
              Design interactive assessments with a variety of question types. Monitor progress with advanced analytics and AI-driven insights.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={() => navigate('/quiz-builder/create')}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-semibold text-lg flex items-center gap-2"
              >
                <Plus className="w-5 h-5" />
                New Quiz
              </Button>
              <Button 
                variant="outline"
                className="border-blue-400 text-blue-300 hover:bg-blue-600/20 px-8 py-4 rounded-full font-semibold text-lg flex items-center gap-2"
              >
                <Eye className="w-5 h-5" />
                Preview Example
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="bg-[#0a1834] border-b border-blue-500/30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex space-x-1">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 px-6 py-4 rounded-t-lg font-medium transition-colors ${
                  activeTab === tab.id
                    ? 'bg-white text-[#0a1834]'
                    : 'text-gray-300 hover:text-white hover:bg-blue-600/20'
                }`}
              >
                {tab.icon}
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 px-4 bg-[#0a1834]">
        <div className="max-w-7xl mx-auto">
          {activeTab === 'quiz-builder' && (
            <div>
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-white mb-4">
                  Choose Question Type
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Select from a variety of question types to create engaging assessments
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {questionTypes.map((questionType, index) => (
                  <Card key={index} className="bg-gray-800 border-gray-700 hover:bg-gray-750 transition-all duration-300 cursor-pointer">
                    <CardContent className="p-8 text-center">
                      <div className="flex justify-center mb-6">
                        <div className="p-4 bg-gray-700 rounded-full">
                          {questionType.icon}
                        </div>
                      </div>
                      <h3 className="text-xl font-semibold mb-3 text-white">
                        {questionType.title}
                      </h3>
                      <p className="text-gray-300 mb-6">
                        {questionType.description}
                      </p>
                      <Button
                        onClick={() => navigate(`/quiz-builder/create?type=${questionType.type}`)}
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                      >
                        Create {questionType.title}
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'quiz-library' && (
            <div>
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-white mb-4">
                  Quiz Library
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Browse and use pre-built quizzes from our extensive library
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  { title: 'Math Fundamentals', category: 'Education', questions: 20, time: '30 min' },
                  { title: 'Business Ethics', category: 'Business', questions: 15, time: '25 min' },
                  { title: 'Programming Basics', category: 'Technology', questions: 25, time: '45 min' },
                  { title: 'Health & Safety', category: 'Compliance', questions: 18, time: '35 min' },
                  { title: 'Customer Service', category: 'Business', questions: 12, time: '20 min' },
                  { title: 'Data Analysis', category: 'Technology', questions: 22, time: '40 min' }
                ].map((quiz, index) => (
                  <Card key={index} className="bg-gray-800 border-gray-700 hover:bg-gray-750 transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <Badge variant="secondary" className="bg-gray-600 text-white">{quiz.category}</Badge>
                        <div className="flex items-center space-x-2 text-gray-300">
                          <Clock className="w-4 h-4" />
                          <span className="text-sm">{quiz.time}</span>
                        </div>
                      </div>
                      <h3 className="text-lg font-semibold mb-2 text-white">{quiz.title}</h3>
                      <p className="text-gray-300 mb-4">{quiz.questions} questions</p>
                      <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                        Use This Quiz
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'analytics' && (
            <div>
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-white mb-4">
                  Quiz Analytics
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Track performance and gain insights with advanced analytics
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                {[
                  { title: 'Total Quizzes', value: '156', icon: <BookOpen className="w-8 h-8" />, color: 'text-blue-400' },
                  { title: 'Active Users', value: '2,847', icon: <Users className="w-8 h-8" />, color: 'text-green-400' },
                  { title: 'Avg. Score', value: '78%', icon: <Award className="w-8 h-8" />, color: 'text-yellow-400' },
                  { title: 'Completion Rate', value: '92%', icon: <TrendingUp className="w-8 h-8" />, color: 'text-purple-400' }
                ].map((stat, index) => (
                  <Card key={index} className="bg-gray-800 border-gray-700">
                    <CardContent className="p-6 text-center">
                      <div className={`flex justify-center mb-4 ${stat.color}`}>
                        {stat.icon}
                      </div>
                      <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                      <div className="text-gray-300">{stat.title}</div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <Card className="bg-gray-800 border-gray-700">
                  <CardHeader>
                    <CardTitle className="text-white">Performance Trends</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="h-64 bg-gray-700 rounded flex items-center justify-center">
                      <div className="text-center text-gray-300">
                        <BarChart3 className="w-16 h-16 mx-auto mb-4" />
                        <p>Performance chart will be displayed here</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="bg-gray-800 border-gray-700">
                  <CardHeader>
                    <CardTitle className="text-white">Question Analysis</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="h-64 bg-gray-700 rounded flex items-center justify-center">
                      <div className="text-center text-gray-300">
                        <PieChart className="w-16 h-16 mx-auto mb-4" />
                        <p>Question analysis chart will be displayed here</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          )}

          {activeTab === 'features' && (
            <div>
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-white mb-4">
                  Advanced Features
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Explore powerful features to enhance your quiz creation experience
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  { title: 'AI-Powered Insights', description: 'Get intelligent recommendations for quiz improvement', icon: <Brain className="w-8 h-8 text-blue-400" /> },
                  { title: 'Real-time Analytics', description: 'Monitor student performance in real-time', icon: <Activity className="w-8 h-8 text-green-400" /> },
                  { title: 'Advanced Scoring', description: 'Custom scoring rules and weighted questions', icon: <Award className="w-8 h-8 text-yellow-400" /> },
                  { title: 'Multi-language Support', description: 'Create quizzes in multiple languages', icon: <Globe className="w-8 h-8 text-purple-400" /> },
                  { title: 'Secure Testing', description: 'Anti-cheating measures and secure delivery', icon: <Shield className="w-8 h-8 text-red-400" /> },
                  { title: 'Integration Ready', description: 'Seamless integration with your LMS', icon: <Zap className="w-8 h-8 text-orange-400" /> }
                ].map((feature, index) => (
                  <Card key={index} className="bg-gray-800 border-gray-700 hover:bg-gray-750 transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex justify-center mb-4">
                        {feature.icon}
                      </div>
                      <h3 className="text-lg font-semibold mb-3 text-white text-center">
                        {feature.title}
                      </h3>
                      <p className="text-gray-300 text-center">
                        {feature.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Bottom Action Bar */}
      <section className="bg-blue-600/20 border-t border-blue-500/30 py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col sm:flex-row items-center justify-between">
            <div className="text-white mb-4 sm:mb-0">
              <h3 className="text-lg font-semibold">Quiz Builder Interface</h3>
              <p className="text-gray-300">Create engaging assessments with ease</p>
            </div>
            <div className="flex space-x-4">
              <Button variant="outline" className="border-blue-400 text-blue-300 hover:bg-blue-600/20">
                <Settings className="w-4 h-4 mr-2" />
                Quiz Settings
              </Button>
              <Button variant="outline" className="border-blue-400 text-blue-300 hover:bg-blue-600/20">
                <Eye className="w-4 h-4 mr-2" />
                Preview Quiz
              </Button>
              <Button className="bg-green-600 hover:bg-green-700 text-white">
                <Play className="w-4 h-4 mr-2" />
                Publish Quiz
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default QuizBuilder;