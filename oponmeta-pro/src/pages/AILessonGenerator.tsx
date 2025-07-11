import React, { useState } from 'react';
import { useAppContext } from '../context/AppContext';
import { 
  Brain, 
  FileText, 
  Target, 
  Clock, 
  Users, 
  Sparkles,
  Wand2,
  CheckCircle,
  ArrowRight,
  Loader2,
  BookOpen,
  MessageSquare,
  Video,
  FileImage
} from 'lucide-react';

const AILessonGenerator: React.FC = () => {
  const { language } = useAppContext();
  const [isGenerating, setIsGenerating] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [lessonData, setLessonData] = useState({
    title: '',
    description: '',
    learningObjectives: '',
    targetAudience: '',
    duration: '',
    difficulty: 'beginner',
    language: language,
    contentType: 'text',
    aiFeatures: {
      generateContent: true,
      generateExamples: true,
      generateExercises: true,
      generateImages: false,
      generateVideos: false
    }
  });

  const steps = [
    { id: 1, title: 'Lesson Overview', icon: BookOpen },
    { id: 2, title: 'Learning Objectives', icon: Target },
    { id: 3, title: 'Content Type', icon: FileText },
    { id: 4, title: 'AI Generation', icon: Sparkles },
    { id: 5, title: 'Review & Create', icon: CheckCircle }
  ];

  const handleInputChange = (field: string, value: any) => {
    setLessonData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleAIFeatureToggle = (feature: string) => {
    setLessonData(prev => ({
      ...prev,
      aiFeatures: {
        ...prev.aiFeatures,
        [feature]: !prev.aiFeatures[feature as keyof typeof prev.aiFeatures]
      }
    }));
  };

  const generateLesson = async () => {
    setIsGenerating(true);
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsGenerating(false);
    setCurrentStep(5);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 p-6">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg">
              <Brain className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">AI Lesson Generator</h1>
              <p className="text-gray-600">Create engaging lessons with AI assistance</p>
            </div>
          </div>
          
          {/* Language Selector */}
          <div className="flex items-center gap-4 mb-6">
            <span className="text-sm font-medium text-gray-700">Lesson Language:</span>
            <select
              value={lessonData.language}
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
                    ? 'bg-blue-600 border-blue-600 text-white' 
                    : 'bg-white border-gray-300 text-gray-500'
                }`}>
                  {currentStep > step.id ? (
                    <CheckCircle className="h-5 w-5" />
                  ) : (
                    <step.icon className="h-5 w-5" />
                  )}
                </div>
                <span className={`ml-2 text-sm font-medium ${
                  currentStep >= step.id ? 'text-blue-600' : 'text-gray-500'
                }`}>
                  {step.title}
                </span>
                {index < steps.length - 1 && (
                  <div className={`w-16 h-0.5 mx-4 ${
                    currentStep > step.id ? 'bg-blue-600' : 'bg-gray-300'
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
              <h2 className="text-2xl font-bold text-gray-900">Lesson Overview</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Lesson Title
                  </label>
                  <input
                    type="text"
                    value={lessonData.title}
                    onChange={(e) => handleInputChange('title', e.target.value)}
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter lesson title..."
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Duration (minutes)
                  </label>
                  <input
                    type="number"
                    value={lessonData.duration}
                    onChange={(e) => handleInputChange('duration', e.target.value)}
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="45"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Lesson Description
                  </label>
                  <textarea
                    value={lessonData.description}
                    onChange={(e) => handleInputChange('description', e.target.value)}
                    rows={3}
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Describe what this lesson will cover..."
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Target Audience
                  </label>
                  <input
                    type="text"
                    value={lessonData.targetAudience}
                    onChange={(e) => handleInputChange('targetAudience', e.target.value)}
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="e.g., Beginners, Intermediate students..."
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Difficulty Level
                  </label>
                  <select
                    value={lessonData.difficulty}
                    onChange={(e) => handleInputChange('difficulty', e.target.value)}
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
              <h2 className="text-2xl font-bold text-gray-900">Learning Objectives</h2>
              <p className="text-gray-600">Define what students will learn from this lesson</p>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Learning Objectives
                </label>
                <textarea
                  value={lessonData.learningObjectives}
                  onChange={(e) => handleInputChange('learningObjectives', e.target.value)}
                  rows={4}
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="By the end of this lesson, students will be able to:&#10;• Understand the basic concepts of...&#10;• Apply knowledge to solve problems...&#10;• Demonstrate proficiency in..."
                />
              </div>
              
              <div className="bg-blue-50 rounded-lg p-4">
                <h3 className="text-sm font-semibold text-blue-900 mb-2">💡 Tips for Writing Learning Objectives</h3>
                <ul className="text-sm text-blue-800 space-y-1">
                  <li>• Use action verbs (understand, apply, analyze, create)</li>
                  <li>• Be specific and measurable</li>
                  <li>• Focus on what students will be able to do</li>
                  <li>• Keep objectives achievable within the lesson timeframe</li>
                </ul>
              </div>
            </div>
          )}

          {currentStep === 3 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-900">Content Type & Format</h2>
              <p className="text-gray-600">Choose how you want to present the lesson content</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { id: 'text', label: 'Text-based Lesson', icon: FileText, description: 'Traditional text content with explanations' },
                  { id: 'interactive', label: 'Interactive Lesson', icon: MessageSquare, description: 'Engaging interactive elements and quizzes' },
                  { id: 'video', label: 'Video Lesson', icon: Video, description: 'Video content with narration and visuals' },
                  { id: 'multimedia', label: 'Multimedia Lesson', icon: FileImage, description: 'Combination of text, images, and media' }
                ].map((type) => (
                  <div
                    key={type.id}
                    onClick={() => handleInputChange('contentType', type.id)}
                    className={`p-4 border-2 rounded-lg cursor-pointer transition-all ${
                      lessonData.contentType === type.id
                        ? 'border-blue-500 bg-blue-50'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <type.icon className={`h-5 w-5 ${
                        lessonData.contentType === type.id ? 'text-blue-600' : 'text-gray-500'
                      }`} />
                      <span className={`font-medium ${
                        lessonData.contentType === type.id ? 'text-blue-900' : 'text-gray-900'
                      }`}>
                        {type.label}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600">{type.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {currentStep === 4 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-900">AI Content Generation</h2>
              <p className="text-gray-600">Select what content you want AI to generate for your lesson</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {Object.entries(lessonData.aiFeatures).map(([feature, enabled]) => (
                  <div key={feature} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                    <div className="flex items-center gap-3">
                      {feature === 'generateContent' && <FileText className="h-5 w-5 text-blue-500" />}
                      {feature === 'generateExamples' && <Sparkles className="h-5 w-5 text-green-500" />}
                      {feature === 'generateExercises' && <Target className="h-5 w-5 text-purple-500" />}
                      {feature === 'generateImages' && <FileImage className="h-5 w-5 text-orange-500" />}
                      {feature === 'generateVideos' && <Video className="h-5 w-5 text-red-500" />}
                      <span className="text-sm font-medium text-gray-700">
                        {feature.replace('generate', '').replace(/([A-Z])/g, ' $1').trim()}
                      </span>
                    </div>
                    <button
                      onClick={() => handleAIFeatureToggle(feature)}
                      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                        enabled ? 'bg-blue-600' : 'bg-gray-200'
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
              
              <div className="mt-6 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg">
                <div className="flex items-center gap-3 mb-2">
                  <Wand2 className="h-5 w-5 text-blue-600" />
                  <h3 className="text-lg font-semibold text-gray-900">AI Generation Preview</h3>
                </div>
                <p className="text-sm text-gray-600">
                  AI will analyze your lesson requirements and generate:
                </p>
                <ul className="mt-2 text-sm text-gray-600 space-y-1">
                  <li>• Engaging lesson content tailored to your objectives</li>
                  <li>• Real-world examples and case studies</li>
                  <li>• Interactive exercises and practice problems</li>
                  <li>• Visual aids and multimedia elements</li>
                </ul>
              </div>
            </div>
          )}

          {currentStep === 5 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-900">Review & Create Lesson</h2>
              
              {isGenerating ? (
                <div className="text-center py-12">
                  <Loader2 className="h-12 w-12 text-blue-600 animate-spin mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Generating Your Lesson</h3>
                  <p className="text-gray-600">AI is creating comprehensive content for your lesson...</p>
                </div>
              ) : (
                <div className="space-y-6">
                  <div className="bg-gray-50 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Lesson Summary</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="font-medium text-gray-700">Title:</span> {lessonData.title}
                      </div>
                      <div>
                        <span className="font-medium text-gray-700">Language:</span> {lessonData.language.toUpperCase()}
                      </div>
                      <div>
                        <span className="font-medium text-gray-700">Duration:</span> {lessonData.duration} minutes
                      </div>
                      <div>
                        <span className="font-medium text-gray-700">Difficulty:</span> {lessonData.difficulty}
                      </div>
                      <div className="md:col-span-2">
                        <span className="font-medium text-gray-700">Description:</span> {lessonData.description}
                      </div>
                      <div className="md:col-span-2">
                        <span className="font-medium text-gray-700">Learning Objectives:</span>
                        <div className="mt-1 text-gray-600 whitespace-pre-line">{lessonData.learningObjectives}</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-green-50 rounded-lg p-6">
                    <div className="flex items-center gap-3 mb-2">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      <h3 className="text-lg font-semibold text-gray-900">Lesson Generated Successfully!</h3>
                    </div>
                    <p className="text-gray-600">Your AI-generated lesson is ready. You can now edit, customize, and integrate it into your course.</p>
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
            
            {currentStep < 4 ? (
              <button
                onClick={() => setCurrentStep(currentStep + 1)}
                className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center gap-2"
              >
                Next
                <ArrowRight className="h-4 w-4" />
              </button>
            ) : currentStep === 4 ? (
              <button
                onClick={generateLesson}
                disabled={isGenerating || !lessonData.title || !lessonData.description}
                className="px-6 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg hover:from-blue-700 hover:to-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
              >
                {isGenerating ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Generating...
                  </>
                ) : (
                  <>
                    <Sparkles className="h-4 w-4" />
                    Generate Lesson
                  </>
                )}
              </button>
            ) : (
              <button
                onClick={() => window.location.href = '/courses'}
                className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 flex items-center gap-2"
              >
                View Lesson
                <ArrowRight className="h-4 w-4" />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AILessonGenerator; 