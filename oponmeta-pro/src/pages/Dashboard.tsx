import React from 'react';
import { useAppContext } from '../context/AppContext';
import { 
  BookOpen, 
  Target, 
  Award, 
  FileText, 
  Users, 
  BarChart3, 
  Sparkles,
  Globe,
  TrendingUp,
  Clock,
  Star,
  Brain,
  ArrowRight,
  Video,
  Bot
} from 'lucide-react';

const Dashboard: React.FC = () => {
  const { 
    language, 
    courses, 
    miniCourses, 
    rtoQualifications, 
    blogPosts
  } = useAppContext();

  const getLanguageLabel = (lang: string) => {
    const labels: Record<string, string> = {
      en: 'English',
      es: 'Español',
      de: 'Deutsch',
      fr: 'Français',
      it: 'Italiano',
      ja: '日本語',
      ko: '한국어',
      nl: 'Nederlands',
      pt: 'Português',
      zh: '中文',
    };
    return labels[lang] || lang;
  };

  const stats = [
    {
      title: 'Total Courses',
      value: courses.length,
      icon: BookOpen,
      color: 'bg-blue-500',
      change: '+12%',
      changeType: 'positive'
    },
    {
      title: 'Mini Courses',
      value: miniCourses.length,
      icon: Target,
      color: 'bg-green-500',
      change: '+8%',
      changeType: 'positive'
    },
    {
      title: 'RTO Qualifications',
      value: rtoQualifications.length,
      icon: Award,
      color: 'bg-purple-500',
      change: '+15%',
      changeType: 'positive'
    },
    {
      title: 'Blog Posts',
      value: blogPosts.length,
      icon: FileText,
      color: 'bg-orange-500',
      change: '+5%',
      changeType: 'positive'
    }
  ];

  const recentCourses = courses.slice(0, 5);
  const aiGeneratedCourses = courses.filter(c => c.category === 'ai-generated');

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
              <p className="text-gray-600">
                Welcome to OponMeta - Currently viewing content in {getLanguageLabel(language)}
              </p>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 px-3 py-2 bg-indigo-100 rounded-lg">
                <Globe className="h-4 w-4 text-indigo-600" />
                <span className="text-sm font-medium text-indigo-700">
                  {getLanguageLabel(language)}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                  <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                </div>
                <div className={`p-3 rounded-lg ${stat.color}`}>
                  <stat.icon className="h-6 w-6 text-white" />
                </div>
              </div>
              <div className="mt-4 flex items-center">
                <TrendingUp className={`h-4 w-4 ${
                  stat.changeType === 'positive' ? 'text-green-500' : 'text-red-500'
                }`} />
                <span className={`ml-1 text-sm font-medium ${
                  stat.changeType === 'positive' ? 'text-green-600' : 'text-red-600'
                }`}>
                  {stat.change}
                </span>
                <span className="ml-1 text-sm text-gray-500">from last month</span>
              </div>
            </div>
          ))}
        </div>

        {/* AI Learning Companions Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">AI Learning Companions</h2>
          <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl p-6 text-white">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-xl font-bold mb-2">Interactive AI Tutors</h3>
                <p className="text-indigo-100">
                  Engage with personalized AI learning companions across multiple subjects
                </p>
              </div>
              <Bot className="h-12 w-12 text-indigo-200" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              <div className="bg-white/10 rounded-lg p-4">
                <div className="text-2xl font-bold">15</div>
                <div className="text-indigo-100 text-sm">Available Companions</div>
              </div>
              <div className="bg-white/10 rounded-lg p-4">
                <div className="text-2xl font-bold">10</div>
                <div className="text-indigo-100 text-sm">Subjects Covered</div>
              </div>
              <div className="bg-white/10 rounded-lg p-4">
                <div className="text-2xl font-bold">8.5h</div>
                <div className="text-indigo-100 text-sm">Total Content</div>
              </div>
            </div>
            <a 
              href="/companions" 
              className="inline-flex items-center bg-white text-indigo-600 px-6 py-2 rounded-lg font-medium hover:bg-indigo-50 transition-colors"
            >
              Explore Companions
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </div>
        </div>

        {/* AI Tools Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">AI Creation Tools</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-6 text-white">
              <div className="flex items-center justify-between mb-4">
                <Brain className="h-8 w-8" />
                <Sparkles className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-2">AI Course Creator</h3>
              <p className="text-blue-100 mb-4">Create complete courses with AI assistance</p>
              <a href="/ai-course-creator" className="inline-flex items-center text-blue-100 hover:text-white font-medium">
                Get Started <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </div>

            <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-xl p-6 text-white">
              <div className="flex items-center justify-between mb-4">
                <BookOpen className="h-8 w-8" />
                <Sparkles className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-2">AI Lesson Generator</h3>
              <p className="text-green-100 mb-4">Generate individual lessons with AI</p>
              <a href="/ai-lesson-generator" className="inline-flex items-center text-green-100 hover:text-white font-medium">
                Get Started <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </div>

            <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl p-6 text-white">
              <div className="flex items-center justify-between mb-4">
                <Target className="h-8 w-8" />
                <Sparkles className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-2">AI Quiz Generator</h3>
              <p className="text-purple-100 mb-4">Create engaging assessments with AI</p>
              <a href="/ai-quiz-generator" className="inline-flex items-center text-purple-100 hover:text-white font-medium">
                Get Started <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </div>

            <div className="bg-gradient-to-br from-pink-500 to-pink-600 rounded-xl p-6 text-white">
              <div className="flex items-center justify-between mb-4">
                <Video className="h-8 w-8" />
                <Sparkles className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-2">AI Video Generator</h3>
              <p className="text-pink-100 mb-4">Generate educational videos with AI</p>
              <a href="/ai-video-generator" className="inline-flex items-center text-pink-100 hover:text-white font-medium">
                Get Started <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </div>

            <div className="bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-xl p-6 text-white">
              <div className="flex items-center justify-between mb-4">
                <Award className="h-8 w-8" />
                <Sparkles className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-2">AI Assessment Generator</h3>
              <p className="text-indigo-100 mb-4">Create comprehensive assessments with AI</p>
              <a href="/ai-assessment-generator" className="inline-flex items-center text-indigo-100 hover:text-white font-medium">
                Get Started <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Content Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Recent Courses */}
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-gray-900">Recent Courses</h2>
              <button
                onClick={() => window.location.href = '/courses'}
                className="text-sm text-indigo-600 hover:text-indigo-700 font-medium"
              >
                View All
              </button>
            </div>
            <div className="space-y-4">
              {recentCourses.length > 0 ? (
                recentCourses.map((course) => (
                  <div key={course.id} className="flex items-center gap-4 p-3 border border-gray-200 rounded-lg hover:bg-gray-50">
                    <div className="p-2 bg-indigo-100 rounded-lg">
                      <BookOpen className="h-4 w-4 text-indigo-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium text-gray-900">{course.title}</h3>
                      <p className="text-sm text-gray-500">{course.metadata.difficulty} • {course.metadata.estimatedHours}h</p>
                    </div>
                    <div className="flex items-center gap-2">
                      {course.category === 'ai-generated' && (
                        <Sparkles className="h-4 w-4 text-purple-500" />
                      )}
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        course.status === 'published' ? 'bg-green-100 text-green-800' :
                        course.status === 'draft' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-gray-100 text-gray-800'
                      }`}>
                        {course.status}
                      </span>
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center py-8">
                  <BookOpen className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 mb-2">No courses yet</h3>
                  <p className="text-gray-600 mb-4">Get started by creating your first course</p>
                  <button
                    onClick={() => window.location.href = '/dashboard/ai-course-creator'}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
                  >
                    <Sparkles className="h-4 w-4" />
                    Create with AI
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* AI Generated Content Stats */}
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-gray-900">AI Generated Content</h2>
              <Sparkles className="h-5 w-5 text-purple-500" />
            </div>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-purple-50 rounded-lg">
                <div>
                  <p className="font-medium text-gray-900">AI Generated Courses</p>
                  <p className="text-sm text-gray-500">Created with AI assistance</p>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold text-purple-600">{aiGeneratedCourses.length}</p>
                  <p className="text-sm text-gray-500">Total</p>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <p className="text-2xl font-bold text-green-600">
                    {aiGeneratedCourses.filter(c => c.status === 'published').length}
                  </p>
                  <p className="text-sm text-gray-600">Published</p>
                </div>
                <div className="text-center p-4 bg-yellow-50 rounded-lg">
                  <p className="text-2xl font-bold text-yellow-600">
                    {aiGeneratedCourses.filter(c => c.status === 'draft').length}
                  </p>
                  <p className="text-sm text-gray-600">Draft</p>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-gradient-to-r from-purple-50 to-indigo-50 rounded-lg">
                <h3 className="font-medium text-gray-900 mb-2">AI Content Benefits</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Faster content creation</li>
                  <li>• Consistent quality</li>
                  <li>• Multilingual support</li>
                  <li>• Personalized learning paths</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Language Information */}
        <div className="mt-8 bg-white rounded-lg shadow p-6">
          <div className="flex items-center gap-3 mb-4">
            <Globe className="h-6 w-6 text-indigo-600" />
            <h2 className="text-lg font-semibold text-gray-900">Multilingual Content Overview</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {['en', 'es', 'de', 'fr', 'it'].map((lang) => (
              <div key={lang} className={`text-center p-3 rounded-lg ${
                lang === language ? 'bg-indigo-100 border-2 border-indigo-300' : 'bg-gray-50'
              }`}>
                <p className="font-medium text-gray-900">{getLanguageLabel(lang)}</p>
                <p className="text-sm text-gray-500">
                  {courses.filter(c => c.language === lang).length} courses
                </p>
              </div>
            ))}
          </div>
          <p className="mt-4 text-sm text-gray-600">
            Use the language selector in the navigation to switch between languages and view content in different languages.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard; 