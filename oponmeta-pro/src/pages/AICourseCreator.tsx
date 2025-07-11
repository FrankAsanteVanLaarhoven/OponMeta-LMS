import React, { useState } from 'react';
import { useAppContext } from '../context/AppContext';
import type { Course } from '../../../src/types/content';
import { 
  Sparkles, 
  BookOpen, 
  Target, 
  Clock, 
  Users, 
  Brain,
  Wand2,
  FileText,
  Video,
  MessageSquare,
  CheckCircle,
  ArrowRight,
  Loader2
} from 'lucide-react';

const AICourseCreator: React.FC = () => {
  const { language, setCourses } = useAppContext();
  const [isGenerating, setIsGenerating] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [courseData, setCourseData] = useState({
    title: '',
    description: '',
    targetAudience: '',
    duration: '',
    difficulty: 'beginner',
    language: language,
    aiFeatures: {
      generateLessons: true,
      generateQuizzes: true,
      generateAssessments: true,
      generateVideos: false,
      generateResources: true
    }
  });

  const steps = [
    { id: 1, title: 'Course Description', icon: BookOpen },
    { id: 2, title: 'AI Training', icon: Brain },
    { id: 3, title: 'Learner Profile', icon: Users },
    { id: 4, title: 'Course Structure', icon: Target },
    { id: 5, title: 'Content Generation', icon: Sparkles },
    { id: 6, title: 'Review & Publish', icon: CheckCircle }
  ];

  const handleInputChange = (field: string, value: any) => {
    setCourseData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleAIFeatureToggle = (feature: string) => {
    setCourseData(prev => ({
      ...prev,
      aiFeatures: {
        ...prev.aiFeatures,
        [feature]: !prev.aiFeatures[feature as keyof typeof prev.aiFeatures]
      }
    }));
  };

  const generateCourse = async () => {
    setIsGenerating(true);
    
    // Simulate AI course generation
    await new Promise(resolve => setTimeout(resolve, 3000));
    
    const newCourse: Course = {
      id: `course-${Date.now()}`,
      type: 'course',
      language: language,
      slug: courseData.title.toLowerCase().replace(/\s+/g, '-'),
      title: courseData.title,
      description: courseData.description,
      content: '',
      metadata: {
        targetAudience: courseData.targetAudience || 'General audience',
        duration: courseData.duration,
        difficulty: courseData.difficulty,
        estimatedHours: parseInt(courseData.duration) || 10,
        modules: [],
        prerequisites: [],
        learningOutcomes: []
      },
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      publishedAt: new Date().toISOString(),
      status: 'draft',
      tags: [],
      category: 'ai-generated',
      author: 'AI Assistant',
      featuredImage: '',
      seo: {
        title: courseData.title,
        description: courseData.description,
        keywords: []
      },
      translations: {
        en: `course-${Date.now()}`,
        es: `course-${Date.now()}`,
        de: `course-${Date.now()}`,
        fr: `course-${Date.now()}`,
        it: `course-${Date.now()}`,
        ja: `course-${Date.now()}`,
        ko: `course-${Date.now()}`,
        nl: `course-${Date.now()}`,
        pt: `course-${Date.now()}`,
        zh: `course-${Date.now()}`
      },
      level: courseData.difficulty as 'beginner' | 'intermediate' | 'advanced' | 'expert',
      duration: (parseInt(courseData.duration) || 10) * 60, // Convert hours to minutes
      modules: [],
      learningObjectives: [
        'Complete the course objectives',
        'Apply learned concepts',
        'Demonstrate understanding'
      ]
    };

    setCourses(prev => [...prev, newCourse]);
    setIsGenerating(false);
    setCurrentStep(6);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-blue-50 p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg">
              <Sparkles className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">AI Course Creator</h1>
              <p className="text-gray-600">Create world-class courses with AI assistance</p>
            </div>
          </div>
          
          {/* Language Selector */}
          <div className="flex items-center gap-4 mb-6">
            <span className="text-sm font-medium text-gray-700">Course Language:</span>
            <select
              value={courseData.language}
              onChange={(e) => handleInputChange('language', e.target.value)}
              className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            >
              <option value="en">English</option>
              <option value="es">Español</option>
              <option value="de">Deutsch</option>
              <option value="fr">Français</option>
              <option value="it">Italiano</option>
              <option value="ja">日本語</option>
              <option value="ko">한국어</option>
              <option value="nl">Nederlands</option>
              <option value="pt">Português</option>
              <option value="zh">中文</option>
            </select>
          </div>
        </div>

        {/* Progress Steps */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            {steps.map((step, index) => (
              <div key={step.id} className="flex items-center">
                <div className={`flex items-center justify-center w-10 h-10 rounded-full border-2 ${
                  currentStep >= step.id 
                    ? 'bg-indigo-600 border-indigo-600 text-white' 
                    : 'bg-white border-gray-300 text-gray-500'
                }`}>
                  {currentStep > step.id ? (
                    <CheckCircle className="h-5 w-5" />
                  ) : (
                    <step.icon className="h-5 w-5" />
                  )}
                </div>
                <span className={`ml-2 text-sm font-medium ${
                  currentStep >= step.id ? 'text-indigo-600' : 'text-gray-500'
                }`}>
                  {step.title}
                </span>
                {index < steps.length - 1 && (
                  <div className={`w-16 h-0.5 mx-4 ${
                    currentStep > step.id ? 'bg-indigo-600' : 'bg-gray-300'
                  }`} />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Step Content */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          {currentStep === 1 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-900">Course Description</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Course Title
                  </label>
                  <input
                    type="text"
                    value={courseData.title}
                    onChange={(e) => handleInputChange('title', e.target.value)}
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    placeholder="Enter course title..."
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Duration (hours)
                  </label>
                  <input
                    type="number"
                    value={courseData.duration}
                    onChange={(e) => handleInputChange('duration', e.target.value)}
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    placeholder="10"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Course Description
                  </label>
                  <textarea
                    value={courseData.description}
                    onChange={(e) => handleInputChange('description', e.target.value)}
                    rows={4}
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    placeholder="Describe what this course will cover..."
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Target Audience
                  </label>
                  <input
                    type="text"
                    value={courseData.targetAudience}
                    onChange={(e) => handleInputChange('targetAudience', e.target.value)}
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    placeholder="e.g., Beginners, Intermediate developers, Business professionals..."
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Difficulty Level
                  </label>
                  <select
                    value={courseData.difficulty}
                    onChange={(e) => handleInputChange('difficulty', e.target.value)}
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  >
                    <option value="beginner">Beginner</option>
                    <option value="intermediate">Intermediate</option>
                    <option value="advanced">Advanced</option>
                  </select>
                </div>
              </div>
            </div>
          )}

          {currentStep === 2 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-900">AI Training & Context</h2>
              <p className="text-gray-600">Help AI understand your teaching style and content preferences</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-900">Teaching Style</h3>
                  <div className="space-y-3">
                    {['Practical', 'Theoretical', 'Interactive', 'Visual', 'Hands-on'].map((style) => (
                      <label key={style} className="flex items-center">
                        <input type="checkbox" className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                        <span className="ml-2 text-sm text-gray-700">{style}</span>
                      </label>
                    ))}
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-900">Content Preferences</h3>
                  <div className="space-y-3">
                    {['Real-world examples', 'Case studies', 'Step-by-step guides', 'Industry insights', 'Best practices'].map((pref) => (
                      <label key={pref} className="flex items-center">
                        <input type="checkbox" className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                        <span className="ml-2 text-sm text-gray-700">{pref}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {currentStep === 3 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-900">Learner Profile</h2>
              <p className="text-gray-600">Define your target learners to create more relevant content</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Learner Background
                  </label>
                  <textarea
                    rows={3}
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    placeholder="Describe the typical background of your learners..."
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Learning Goals
                  </label>
                  <textarea
                    rows={3}
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    placeholder="What do learners want to achieve?"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Prerequisites
                  </label>
                  <textarea
                    rows={3}
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    placeholder="What should learners know before starting?"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Learning Environment
                  </label>
                  <select className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-indigo-500 focus:border-transparent">
                    <option>Online self-paced</option>
                    <option>Instructor-led</option>
                    <option>Hybrid</option>
                    <option>Corporate training</option>
                  </select>
                </div>
              </div>
            </div>
          )}

          {currentStep === 4 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-900">Course Structure</h2>
              <p className="text-gray-600">Configure how your course will be organized</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Number of Modules
                  </label>
                  <input
                    type="number"
                    min="1"
                    max="20"
                    defaultValue="5"
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Lessons per Module
                  </label>
                  <input
                    type="number"
                    min="1"
                    max="10"
                    defaultValue="3"
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Course Structure Type
                  </label>
                  <select className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-indigo-500 focus:border-transparent">
                    <option>Linear progression</option>
                    <option>Topic-based modules</option>
                    <option>Project-based</option>
                    <option>Scenario-based</option>
                  </select>
                </div>
              </div>
            </div>
          )}

          {currentStep === 5 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-900">AI Content Generation</h2>
              <p className="text-gray-600">Select what content you want AI to generate</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {Object.entries(courseData.aiFeatures).map(([feature, enabled]) => (
                  <div key={feature} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                    <div className="flex items-center gap-3">
                      {feature === 'generateLessons' && <FileText className="h-5 w-5 text-blue-500" />}
                      {feature === 'generateQuizzes' && <MessageSquare className="h-5 w-5 text-green-500" />}
                      {feature === 'generateAssessments' && <CheckCircle className="h-5 w-5 text-purple-500" />}
                      {feature === 'generateVideos' && <Video className="h-5 w-5 text-red-500" />}
                      {feature === 'generateResources' && <BookOpen className="h-5 w-5 text-orange-500" />}
                      <span className="text-sm font-medium text-gray-700">
                        {feature.replace('generate', '').replace(/([A-Z])/g, ' $1').trim()}
                      </span>
                    </div>
                    <button
                      onClick={() => handleAIFeatureToggle(feature)}
                      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                        enabled ? 'bg-indigo-600' : 'bg-gray-200'
                      }`}
                    >
                      <span
                        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                          enabled ? 'translate-x-6' : 'translate-x-1'
                        }`}
                      />
                    </button>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 p-4 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg">
                <div className="flex items-center gap-3 mb-2">
                  <Wand2 className="h-5 w-5 text-indigo-600" />
                  <h3 className="text-lg font-semibold text-gray-900">AI Generation Preview</h3>
                </div>
                <p className="text-sm text-gray-600">
                  AI will analyze your course requirements and generate comprehensive content including:
                </p>
                <ul className="mt-2 text-sm text-gray-600 space-y-1">
                  <li>• Detailed lesson content with learning objectives</li>
                  <li>• Interactive quizzes and assessments</li>
                  <li>• Practical exercises and real-world examples</li>
                  <li>• Progress tracking and analytics</li>
                </ul>
              </div>
            </div>
          )}

          {currentStep === 6 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-900">Review & Publish</h2>
              
              {isGenerating ? (
                <div className="text-center py-12">
                  <Loader2 className="h-12 w-12 text-indigo-600 animate-spin mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Generating Your Course</h3>
                  <p className="text-gray-600">AI is creating comprehensive content for your course...</p>
                </div>
              ) : (
                <div className="space-y-6">
                  <div className="bg-gray-50 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Course Summary</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="font-medium text-gray-700">Title:</span> {courseData.title}
                      </div>
                      <div>
                        <span className="font-medium text-gray-700">Language:</span> {courseData.language.toUpperCase()}
                      </div>
                      <div>
                        <span className="font-medium text-gray-700">Duration:</span> {courseData.duration} hours
                      </div>
                      <div>
                        <span className="font-medium text-gray-700">Difficulty:</span> {courseData.difficulty}
                      </div>
                      <div className="md:col-span-2">
                        <span className="font-medium text-gray-700">Description:</span> {courseData.description}
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-green-50 rounded-lg p-6">
                    <div className="flex items-center gap-3 mb-2">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      <h3 className="text-lg font-semibold text-gray-900">Course Generated Successfully!</h3>
                    </div>
                    <p className="text-gray-600">Your AI-generated course is ready. You can now edit, customize, and publish it.</p>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-8 pt-6 border-t border-gray-200">
            <button
              onClick={() => setCurrentStep(Math.max(1, currentStep - 1))}
              disabled={currentStep === 1}
              className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Previous
            </button>
            
            {currentStep < 5 ? (
              <button
                onClick={() => setCurrentStep(currentStep + 1)}
                className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 flex items-center gap-2"
              >
                Next
                <ArrowRight className="h-4 w-4" />
              </button>
            ) : currentStep === 5 ? (
              <button
                onClick={generateCourse}
                disabled={isGenerating || !courseData.title || !courseData.description}
                className="px-6 py-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-lg hover:from-purple-700 hover:to-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
              >
                {isGenerating ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Generating...
                  </>
                ) : (
                  <>
                    <Sparkles className="h-4 w-4" />
                    Generate Course
                  </>
                )}
              </button>
            ) : (
              <button
                onClick={() => window.location.href = '/courses'}
                className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 flex items-center gap-2"
              >
                View Course
                <ArrowRight className="h-4 w-4" />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AICourseCreator; 