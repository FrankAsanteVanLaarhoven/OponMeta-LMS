import React, { useState } from 'react';
import { useAppContext } from '../context/AppContext';
import { 
  Brain, 
  Video, 
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
  Mic,
  Camera,
  Music,
  Palette
} from 'lucide-react';

const AIVideoGenerator: React.FC = () => {
  const { language } = useAppContext();
  const [isGenerating, setIsGenerating] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [videoData, setVideoData] = useState({
    title: '',
    description: '',
    subject: '',
    duration: 5,
    language: language,
    videoType: 'educational',
    targetAudience: '',
    topics: '',
    style: 'modern',
    aiFeatures: {
      generateScript: true,
      generateNarration: true,
      generateVisuals: true,
      generateMusic: false,
      generateSubtitles: true,
      adaptivePacing: false
    },
    visualElements: {
      animations: true,
      graphics: true,
      charts: true,
      examples: true,
      transitions: true
    }
  });

  const steps = [
    { id: 1, title: 'Video Overview', icon: Video },
    { id: 2, title: 'Content & Style', icon: Palette },
    { id: 3, title: 'Visual Elements', icon: Camera },
    { id: 4, title: 'AI Generation', icon: Sparkles },
    { id: 5, title: 'Review & Create', icon: CheckCircle }
  ];

  const videoTypes = [
    { id: 'educational', label: 'Educational', icon: Brain, description: 'Traditional learning content' },
    { id: 'tutorial', label: 'Tutorial', icon: Play, description: 'Step-by-step instructions' },
    { id: 'presentation', label: 'Presentation', icon: BarChart3, description: 'Data and concept presentation' },
    { id: 'story', label: 'Story', icon: MessageSquare, description: 'Narrative-based learning' },
    { id: 'interactive', label: 'Interactive', icon: Settings, description: 'Engaging interactive elements' }
  ];

  const styles = [
    { id: 'modern', label: 'Modern', description: 'Clean, contemporary design' },
    { id: 'minimalist', label: 'Minimalist', description: 'Simple, focused content' },
    { id: 'playful', label: 'Playful', description: 'Fun, engaging animations' },
    { id: 'professional', label: 'Professional', description: 'Corporate, formal style' },
    { id: 'creative', label: 'Creative', description: 'Artistic, innovative approach' }
  ];

  const handleInputChange = (field: string, value: any) => {
    setVideoData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleAIFeatureToggle = (feature: string) => {
    setVideoData(prev => ({
      ...prev,
      aiFeatures: {
        ...prev.aiFeatures,
        [feature]: !prev.aiFeatures[feature as keyof typeof prev.aiFeatures]
      }
    }));
  };

  const handleVisualElementToggle = (element: string) => {
    setVideoData(prev => ({
      ...prev,
      visualElements: {
        ...prev.visualElements,
        [element]: !prev.visualElements[element as keyof typeof prev.visualElements]
      }
    }));
  };

  const generateVideo = async () => {
    setIsGenerating(true);
    await new Promise(resolve => setTimeout(resolve, 4000));
    setIsGenerating(false);
    setCurrentStep(5);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 p-6">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg">
              <Video className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">AI Video Generator</h1>
              <p className="text-gray-600">Create engaging educational videos with AI assistance</p>
            </div>
          </div>
          
          {/* Language Selector */}
          <div className="flex items-center gap-4 mb-6">
            <span className="text-sm font-medium text-gray-700">Video Language:</span>
            <select
              value={videoData.language}
              onChange={(e) => handleInputChange('language', e.target.value)}
              className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-purple-500 focus:border-transparent"
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
                    ? 'bg-purple-600 border-purple-600 text-white' 
                    : 'bg-white border-gray-300 text-gray-500'
                }`}>
                  {currentStep > step.id ? (
                    <CheckCircle className="h-5 w-5" />
                  ) : (
                    <step.icon className="h-5 w-5" />
                  )}
                </div>
                <span className={`ml-2 text-sm font-medium ${
                  currentStep >= step.id ? 'text-purple-600' : 'text-gray-500'
                }`}>
                  {step.title}
                </span>
                {index < steps.length - 1 && (
                  <div className={`w-16 h-0.5 mx-4 ${
                    currentStep > step.id ? 'bg-purple-600' : 'bg-gray-300'
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
              <h2 className="text-2xl font-bold text-gray-900">Video Overview</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Video Title
                  </label>
                  <input
                    type="text"
                    value={videoData.title}
                    onChange={(e) => handleInputChange('title', e.target.value)}
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="Enter video title..."
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Subject/Topic
                  </label>
                  <input
                    type="text"
                    value={videoData.subject}
                    onChange={(e) => handleInputChange('subject', e.target.value)}
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="e.g., Mathematics, Science, History..."
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Video Description
                  </label>
                  <textarea
                    value={videoData.description}
                    onChange={(e) => handleInputChange('description', e.target.value)}
                    rows={3}
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="Describe what this video will cover..."
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Duration (minutes)
                  </label>
                  <input
                    type="number"
                    value={videoData.duration}
                    onChange={(e) => handleInputChange('duration', parseInt(e.target.value))}
                    min="1"
                    max="30"
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Target Audience
                  </label>
                  <input
                    type="text"
                    value={videoData.targetAudience}
                    onChange={(e) => handleInputChange('targetAudience', e.target.value)}
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="e.g., High school students, College freshmen..."
                  />
                </div>
              </div>
            </div>
          )}

          {currentStep === 2 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-900">Content & Style</h2>
              <p className="text-gray-600">Choose the type and style of your video</p>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-4">
                    Video Type
                  </label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {videoTypes.map((type) => (
                      <div
                        key={type.id}
                        onClick={() => handleInputChange('videoType', type.id)}
                        className={`p-4 border-2 rounded-lg cursor-pointer transition-all ${
                          videoData.videoType === type.id
                            ? 'border-purple-500 bg-purple-50'
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        <div className="flex items-center gap-3 mb-2">
                          <type.icon className={`h-5 w-5 ${
                            videoData.videoType === type.id ? 'text-purple-600' : 'text-gray-500'
                          }`} />
                          <span className={`font-medium ${
                            videoData.videoType === type.id ? 'text-purple-900' : 'text-gray-900'
                          }`}>
                            {type.label}
                          </span>
                        </div>
                        <p className="text-sm text-gray-600">{type.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-4">
                    Visual Style
                  </label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {styles.map((style) => (
                      <div
                        key={style.id}
                        onClick={() => handleInputChange('style', style.id)}
                        className={`p-4 border-2 rounded-lg cursor-pointer transition-all ${
                          videoData.style === style.id
                            ? 'border-purple-500 bg-purple-50'
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        <div className="flex items-center gap-3 mb-2">
                          <Palette className={`h-5 w-5 ${
                            videoData.style === style.id ? 'text-purple-600' : 'text-gray-500'
                          }`} />
                          <span className={`font-medium ${
                            videoData.style === style.id ? 'text-purple-900' : 'text-gray-900'
                          }`}>
                            {style.label}
                          </span>
                        </div>
                        <p className="text-sm text-gray-600">{style.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Specific Topics to Cover
                  </label>
                  <textarea
                    value={videoData.topics}
                    onChange={(e) => handleInputChange('topics', e.target.value)}
                    rows={3}
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="List specific topics, concepts, or points to include in the video..."
                  />
                </div>
              </div>
            </div>
          )}

          {currentStep === 3 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-900">Visual Elements</h2>
              <p className="text-gray-600">Select the visual elements you want in your video</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {Object.entries(videoData.visualElements).map(([element, enabled]) => (
                  <div key={element} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                    <div className="flex items-center gap-3">
                      {element === 'animations' && <Play className="h-5 w-5 text-blue-500" />}
                      {element === 'graphics' && <FileImage className="h-5 w-5 text-green-500" />}
                      {element === 'charts' && <BarChart3 className="h-5 w-5 text-purple-500" />}
                      {element === 'examples' && <FileText className="h-5 w-5 text-orange-500" />}
                      {element === 'transitions' && <Settings className="h-5 w-5 text-gray-500" />}
                      <span className="text-sm font-medium text-gray-700">
                        {element.charAt(0).toUpperCase() + element.slice(1)}
                      </span>
                    </div>
                    <button
                      onClick={() => handleVisualElementToggle(element)}
                      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                        enabled ? 'bg-purple-600' : 'bg-gray-200'
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
              
              <div className="mt-6 p-4 bg-purple-50 rounded-lg">
                <h3 className="text-sm font-semibold text-purple-900 mb-2">🎬 Visual Element Tips</h3>
                <ul className="text-sm text-purple-800 space-y-1">
                  <li>• Animations: Help explain complex concepts dynamically</li>
                  <li>• Graphics: Visual representations of data and concepts</li>
                  <li>• Charts: Display statistical information clearly</li>
                  <li>• Examples: Real-world applications and case studies</li>
                  <li>• Transitions: Smooth flow between video segments</li>
                </ul>
              </div>
            </div>
          )}

          {currentStep === 4 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-900">AI Generation Features</h2>
              <p className="text-gray-600">Configure how AI will generate your video content</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {Object.entries(videoData.aiFeatures).map(([feature, enabled]) => (
                  <div key={feature} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                    <div className="flex items-center gap-3">
                      {feature === 'generateScript' && <FileText className="h-5 w-5 text-blue-500" />}
                      {feature === 'generateNarration' && <Mic className="h-5 w-5 text-green-500" />}
                      {feature === 'generateVisuals' && <Camera className="h-5 w-5 text-purple-500" />}
                      {feature === 'generateMusic' && <Music className="h-5 w-5 text-orange-500" />}
                      {feature === 'generateSubtitles' && <MessageSquare className="h-5 w-5 text-gray-500" />}
                      {feature === 'adaptivePacing' && <BarChart3 className="h-5 w-5 text-red-500" />}
                      <span className="text-sm font-medium text-gray-700">
                        {feature.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
                      </span>
                    </div>
                    <button
                      onClick={() => handleAIFeatureToggle(feature)}
                      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                        enabled ? 'bg-purple-600' : 'bg-gray-200'
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
              
              <div className="mt-6 p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg">
                <div className="flex items-center gap-3 mb-2">
                  <Wand2 className="h-5 w-5 text-purple-600" />
                  <h3 className="text-lg font-semibold text-gray-900">AI Video Generation Preview</h3>
                </div>
                <p className="text-sm text-gray-600">
                  AI will analyze your requirements and generate:
                </p>
                <ul className="mt-2 text-sm text-gray-600 space-y-1">
                  <li>• Engaging script tailored to your target audience</li>
                  <li>• Professional narration with appropriate pacing</li>
                  <li>• Relevant visual elements and animations</li>
                  <li>• Background music that enhances learning</li>
                  <li>• Accurate subtitles in your selected language</li>
                  <li>• Adaptive pacing based on content complexity</li>
                </ul>
              </div>
            </div>
          )}

          {currentStep === 5 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-900">Review & Create Video</h2>
              
              {isGenerating ? (
                <div className="text-center py-12">
                  <Loader2 className="h-12 w-12 text-purple-600 animate-spin mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Generating Your Video</h3>
                  <p className="text-gray-600">AI is creating engaging video content with visuals and narration...</p>
                </div>
              ) : (
                <div className="space-y-6">
                  <div className="bg-gray-50 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Video Summary</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="font-medium text-gray-700">Title:</span> {videoData.title}
                      </div>
                      <div>
                        <span className="font-medium text-gray-700">Language:</span> {videoData.language.toUpperCase()}
                      </div>
                      <div>
                        <span className="font-medium text-gray-700">Subject:</span> {videoData.subject}
                      </div>
                      <div>
                        <span className="font-medium text-gray-700">Duration:</span> {videoData.duration} minutes
                      </div>
                      <div>
                        <span className="font-medium text-gray-700">Type:</span> {videoData.videoType}
                      </div>
                      <div>
                        <span className="font-medium text-gray-700">Style:</span> {videoData.style}
                      </div>
                      <div className="md:col-span-2">
                        <span className="font-medium text-gray-700">Description:</span> {videoData.description}
                      </div>
                      <div className="md:col-span-2">
                        <span className="font-medium text-gray-700">Topics:</span> {videoData.topics}
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-purple-50 rounded-lg p-6">
                    <div className="flex items-center gap-3 mb-2">
                      <CheckCircle className="h-5 w-5 text-purple-600" />
                      <h3 className="text-lg font-semibold text-gray-900">Video Generated Successfully!</h3>
                    </div>
                    <p className="text-gray-600">Your AI-generated video is ready. You can now preview, edit, and share it with learners.</p>
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
                className="px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 flex items-center gap-2"
              >
                Next
                <ArrowRight className="h-4 w-4" />
              </button>
            ) : currentStep === 4 ? (
              <button
                onClick={generateVideo}
                disabled={isGenerating || !videoData.title || !videoData.subject}
                className="px-6 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg hover:from-purple-700 hover:to-pink-700 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
              >
                {isGenerating ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Generating...
                  </>
                ) : (
                  <>
                    <Sparkles className="h-4 w-4" />
                    Generate Video
                  </>
                )}
              </button>
            ) : (
              <button
                onClick={() => window.location.href = '/courses'}
                className="px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 flex items-center gap-2"
              >
                <Play className="h-4 w-4" />
                Watch Video
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIVideoGenerator; 