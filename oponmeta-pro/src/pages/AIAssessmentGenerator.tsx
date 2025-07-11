import React, { useState } from 'react';
import { useAppContext } from '../context/AppContext';
import { 
  Brain, 
  Target, 
  Clock, 
  Users, 
  Sparkles,
  Wand2,
  CheckCircle,
  ArrowRight,
  Loader2,
  FileText,
  MessageSquare,
  FileImage,
  BarChart3,
  Settings,
  Play,
  Award,
  BookOpen,
  GraduationCap,
  TrendingUp,
  Shield
} from 'lucide-react';

const AIAssessmentGenerator: React.FC = () => {
  const { language } = useAppContext();
  const [isGenerating, setIsGenerating] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [assessmentData, setAssessmentData] = useState({
    title: '',
    description: '',
    subject: '',
    assessmentType: 'comprehensive',
    difficulty: 'intermediate',
    language: language,
    duration: 60,
    totalQuestions: 25,
    passingScore: 75,
    targetAudience: '',
    learningObjectives: '',
    topics: '',
    assessmentFeatures: {
      adaptiveQuestions: false,
      timeTracking: true,
      immediateFeedback: true,
      detailedReports: true,
      certificateGeneration: false,
      retakeOptions: true
    },
    questionDistribution: {
      multipleChoice: 40,
      trueFalse: 20,
      shortAnswer: 25,
      essay: 10,
      practical: 5
    }
  });

  const steps = [
    { id: 1, title: 'Assessment Overview', icon: Award },
    { id: 2, title: 'Assessment Type', icon: Target },
    { id: 3, title: 'Content & Objectives', icon: BookOpen },
    { id: 4, title: 'AI Generation', icon: Sparkles },
    { id: 5, title: 'Review & Create', icon: CheckCircle }
  ];

  const assessmentTypes = [
    { 
      id: 'comprehensive', 
      label: 'Comprehensive Assessment', 
      icon: Award, 
      description: 'Full evaluation of knowledge and skills',
      duration: '60-90 min',
      questions: '25-40'
    },
    { 
      id: 'diagnostic', 
      label: 'Diagnostic Assessment', 
      icon: Brain, 
      description: 'Identify knowledge gaps and learning needs',
      duration: '30-45 min',
      questions: '15-25'
    },
    { 
      id: 'formative', 
      label: 'Formative Assessment', 
      icon: TrendingUp, 
      description: 'Ongoing evaluation during learning process',
      duration: '15-30 min',
      questions: '10-20'
    },
    { 
      id: 'summative', 
      label: 'Summative Assessment', 
      icon: GraduationCap, 
      description: 'Final evaluation of learning outcomes',
      duration: '90-120 min',
      questions: '40-60'
    },
    { 
      id: 'certification', 
      label: 'Certification Assessment', 
      icon: Shield, 
      description: 'Professional certification and accreditation',
      duration: '120-180 min',
      questions: '60-100'
    }
  ];

  const handleInputChange = (field: string, value: any) => {
    setAssessmentData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleAssessmentFeatureToggle = (feature: string) => {
    setAssessmentData(prev => ({
      ...prev,
      assessmentFeatures: {
        ...prev.assessmentFeatures,
        [feature]: !prev.assessmentFeatures[feature as keyof typeof prev.assessmentFeatures]
      }
    }));
  };

  const handleQuestionDistributionChange = (type: string, percentage: number) => {
    setAssessmentData(prev => ({
      ...prev,
      questionDistribution: {
        ...prev.questionDistribution,
        [type]: percentage
      }
    }));
  };

  const generateAssessment = async () => {
    setIsGenerating(true);
    await new Promise(resolve => setTimeout(resolve, 5000));
    setIsGenerating(false);
    setCurrentStep(5);
  };

  const getAssessmentTypeInfo = (typeId: string) => {
    return assessmentTypes.find(type => type.id === typeId);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 p-6">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg">
              <Award className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">AI Assessment Generator</h1>
              <p className="text-gray-600">Create comprehensive assessments with AI assistance</p>
            </div>
          </div>
          
          {/* Language Selector */}
          <div className="flex items-center gap-4 mb-6">
            <span className="text-sm font-medium text-gray-700">Assessment Language:</span>
            <select
              value={assessmentData.language}
              onChange={(e) => handleInputChange('language', e.target.value)}
              className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
              <h2 className="text-2xl font-bold text-gray-900">Assessment Overview</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Assessment Title
                  </label>
                  <input
                    type="text"
                    value={assessmentData.title}
                    onChange={(e) => handleInputChange('title', e.target.value)}
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter assessment title..."
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Subject/Topic
                  </label>
                  <input
                    type="text"
                    value={assessmentData.subject}
                    onChange={(e) => handleInputChange('subject', e.target.value)}
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="e.g., Mathematics, Science, Business..."
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Assessment Description
                  </label>
                  <textarea
                    value={assessmentData.description}
                    onChange={(e) => handleInputChange('description', e.target.value)}
                    rows={3}
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Describe what this assessment will evaluate..."
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Duration (minutes)
                  </label>
                  <input
                    type="number"
                    value={assessmentData.duration}
                    onChange={(e) => handleInputChange('duration', parseInt(e.target.value))}
                    min="15"
                    max="240"
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Total Questions
                  </label>
                  <input
                    type="number"
                    value={assessmentData.totalQuestions}
                    onChange={(e) => handleInputChange('totalQuestions', parseInt(e.target.value))}
                    min="5"
                    max="100"
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Difficulty Level
                  </label>
                  <select
                    value={assessmentData.difficulty}
                    onChange={(e) => handleInputChange('difficulty', e.target.value)}
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="beginner">Beginner</option>
                    <option value="intermediate">Intermediate</option>
                    <option value="advanced">Advanced</option>
                    <option value="expert">Expert</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Passing Score (%)
                  </label>
                  <input
                    type="number"
                    value={assessmentData.passingScore}
                    onChange={(e) => handleInputChange('passingScore', parseInt(e.target.value))}
                    min="50"
                    max="100"
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Target Audience
                  </label>
                  <input
                    type="text"
                    value={assessmentData.targetAudience}
                    onChange={(e) => handleInputChange('targetAudience', e.target.value)}
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="e.g., High school students, Working professionals, Certification candidates..."
                  />
                </div>
              </div>
            </div>
          )}

          {currentStep === 2 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-900">Assessment Type</h2>
              <p className="text-gray-600">Choose the type of assessment that best fits your needs</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {assessmentTypes.map((type) => (
                  <div
                    key={type.id}
                    onClick={() => handleInputChange('assessmentType', type.id)}
                    className={`p-6 border-2 rounded-lg cursor-pointer transition-all ${
                      assessmentData.assessmentType === type.id
                        ? 'border-blue-500 bg-blue-50'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <type.icon className={`h-6 w-6 ${
                        assessmentData.assessmentType === type.id ? 'text-blue-600' : 'text-gray-500'
                      }`} />
                      <span className={`font-semibold ${
                        assessmentData.assessmentType === type.id ? 'text-blue-900' : 'text-gray-900'
                      }`}>
                        {type.label}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 mb-3">{type.description}</p>
                    <div className="flex items-center gap-4 text-xs text-gray-500">
                      <span>⏱️ {type.duration}</span>
                      <span>📝 {type.questions}</span>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                <h3 className="text-sm font-semibold text-blue-900 mb-2">📊 Assessment Type Guide</h3>
                <ul className="text-sm text-blue-800 space-y-1">
                  <li>• <strong>Comprehensive:</strong> Full evaluation of knowledge and skills</li>
                  <li>• <strong>Diagnostic:</strong> Identify knowledge gaps and learning needs</li>
                  <li>• <strong>Formative:</strong> Ongoing evaluation during learning process</li>
                  <li>• <strong>Summative:</strong> Final evaluation of learning outcomes</li>
                  <li>• <strong>Certification:</strong> Professional certification and accreditation</li>
                </ul>
              </div>
            </div>
          )}

          {currentStep === 3 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-900">Content & Learning Objectives</h2>
              <p className="text-gray-600">Define the content and learning objectives for your assessment</p>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Learning Objectives
                  </label>
                  <textarea
                    value={assessmentData.learningObjectives}
                    onChange={(e) => handleInputChange('learningObjectives', e.target.value)}
                    rows={4}
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="List the specific learning objectives this assessment will evaluate (e.g., Understand basic concepts, Apply knowledge to solve problems, Demonstrate critical thinking...)"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Specific Topics to Assess
                  </label>
                  <textarea
                    value={assessmentData.topics}
                    onChange={(e) => handleInputChange('topics', e.target.value)}
                    rows={3}
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="List specific topics, concepts, or skills to include in the assessment..."
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-4">
                    Question Type Distribution (%)
                  </label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {Object.entries(assessmentData.questionDistribution).map(([type, percentage]) => (
                      <div key={type} className="space-y-2">
                        <label className="block text-sm font-medium text-gray-700">
                          {type.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
                        </label>
                        <input
                          type="range"
                          min="0"
                          max="100"
                          value={percentage}
                          onChange={(e) => handleQuestionDistributionChange(type, parseInt(e.target.value))}
                          className="w-full"
                        />
                        <div className="flex justify-between text-xs text-gray-500">
                          <span>0%</span>
                          <span>{percentage}%</span>
                          <span>100%</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="bg-indigo-50 rounded-lg p-4">
                  <h3 className="text-sm font-semibold text-indigo-900 mb-2">🎯 Content Guidelines</h3>
                  <ul className="text-sm text-indigo-800 space-y-1">
                    <li>• Be specific about learning objectives to ensure relevant questions</li>
                    <li>• Consider the assessment type when defining content scope</li>
                    <li>• Include both theoretical knowledge and practical application</li>
                    <li>• Balance question types based on learning objectives</li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {currentStep === 4 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-900">Assessment Features</h2>
              <p className="text-gray-600">Configure advanced features for your assessment</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {Object.entries(assessmentData.assessmentFeatures).map(([feature, enabled]) => (
                  <div key={feature} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                    <div className="flex items-center gap-3">
                      {feature === 'adaptiveQuestions' && <Brain className="h-5 w-5 text-blue-500" />}
                      {feature === 'timeTracking' && <Clock className="h-5 w-5 text-green-500" />}
                      {feature === 'immediateFeedback' && <MessageSquare className="h-5 w-5 text-purple-500" />}
                      {feature === 'detailedReports' && <BarChart3 className="h-5 w-5 text-orange-500" />}
                      {feature === 'certificateGeneration' && <Award className="h-5 w-5 text-red-500" />}
                      {feature === 'retakeOptions' && <Settings className="h-5 w-5 text-gray-500" />}
                      <span className="text-sm font-medium text-gray-700">
                        {feature.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
                      </span>
                    </div>
                    <button
                      onClick={() => handleAssessmentFeatureToggle(feature)}
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
                  <h3 className="text-lg font-semibold text-gray-900">AI Assessment Generation Preview</h3>
                </div>
                <p className="text-sm text-gray-600">
                  AI will analyze your requirements and generate:
                </p>
                <ul className="mt-2 text-sm text-gray-600 space-y-1">
                  <li>• Questions aligned with your learning objectives</li>
                  <li>• Appropriate difficulty levels for your target audience</li>
                  <li>• Balanced question distribution across topics</li>
                  <li>• Detailed explanations for correct answers</li>
                  <li>• Comprehensive assessment reports and analytics</li>
                  <li>• Adaptive questions that adjust to learner performance</li>
                </ul>
              </div>
            </div>
          )}

          {currentStep === 5 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-900">Review & Create Assessment</h2>
              
              {isGenerating ? (
                <div className="text-center py-12">
                  <Loader2 className="h-12 w-12 text-blue-600 animate-spin mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Generating Your Assessment</h3>
                  <p className="text-gray-600">AI is creating comprehensive questions and content for your assessment...</p>
                </div>
              ) : (
                <div className="space-y-6">
                  <div className="bg-gray-50 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Assessment Summary</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="font-medium text-gray-700">Title:</span> {assessmentData.title}
                      </div>
                      <div>
                        <span className="font-medium text-gray-700">Language:</span> {assessmentData.language.toUpperCase()}
                      </div>
                      <div>
                        <span className="font-medium text-gray-700">Subject:</span> {assessmentData.subject}
                      </div>
                      <div>
                        <span className="font-medium text-gray-700">Type:</span> {getAssessmentTypeInfo(assessmentData.assessmentType)?.label}
                      </div>
                      <div>
                        <span className="font-medium text-gray-700">Duration:</span> {assessmentData.duration} minutes
                      </div>
                      <div>
                        <span className="font-medium text-gray-700">Questions:</span> {assessmentData.totalQuestions}
                      </div>
                      <div>
                        <span className="font-medium text-gray-700">Difficulty:</span> {assessmentData.difficulty}
                      </div>
                      <div>
                        <span className="font-medium text-gray-700">Passing Score:</span> {assessmentData.passingScore}%
                      </div>
                      <div className="md:col-span-2">
                        <span className="font-medium text-gray-700">Description:</span> {assessmentData.description}
                      </div>
                      <div className="md:col-span-2">
                        <span className="font-medium text-gray-700">Learning Objectives:</span> {assessmentData.learningObjectives}
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-blue-50 rounded-lg p-6">
                    <div className="flex items-center gap-3 mb-2">
                      <CheckCircle className="h-5 w-5 text-blue-600" />
                      <h3 className="text-lg font-semibold text-gray-900">Assessment Generated Successfully!</h3>
                    </div>
                    <p className="text-gray-600">Your AI-generated assessment is ready. You can now preview, edit, and assign it to learners.</p>
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
                onClick={generateAssessment}
                disabled={isGenerating || !assessmentData.title || !assessmentData.subject}
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
                    Generate Assessment
                  </>
                )}
              </button>
            ) : (
              <button
                onClick={() => window.location.href = '/courses'}
                className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center gap-2"
              >
                <Play className="h-4 w-4" />
                Take Assessment
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIAssessmentGenerator; 