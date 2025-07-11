import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { useAppContext } from '@/context/AppContext';
import { 
  ArrowLeft, 
  Save, 
  Plus, 
  Mic, 
  Brain, 
  BookOpen, 
  Users, 
  Settings,
  Globe,
  Palette,
  Volume2
} from 'lucide-react';

const SUBJECTS = [
  { value: 'business', label: 'Business', color: '#FFB3BA' },
  { value: 'sports', label: 'Sports', color: '#FFD700' },
  { value: 'language', label: 'Language', color: '#BDE7FF' },
  { value: 'science', label: 'Science', color: '#E5D0FF' },
  { value: 'coding', label: 'Programming', color: '#FFC8E4' },
  { value: 'health', label: 'Health', color: '#98FB98' },
  { value: 'mathematics', label: 'Mathematics', color: '#FFDA6E' },
  { value: 'history', label: 'History', color: '#FFECC8' },
  { value: 'economics', label: 'Economics', color: '#C8FFDF' },
  { value: 'technology', label: 'Technology', color: '#B8E6B8' },
  { value: 'arts', label: 'Arts', color: '#DDA0DD' }
];

const VOICES = [
  { value: 'male-casual', label: 'Male - Casual' },
  { value: 'male-formal', label: 'Male - Formal' },
  { value: 'female-casual', label: 'Female - Casual' },
  { value: 'female-formal', label: 'Female - Formal' }
];

const STYLES = [
  { value: 'casual', label: 'Casual & Friendly' },
  { value: 'formal', label: 'Formal & Professional' },
  { value: 'enthusiastic', label: 'Enthusiastic & Energetic' },
  { value: 'patient', label: 'Patient & Supportive' },
  { value: 'analytical', label: 'Analytical & Logical' }
];

const AVATARS = [
  '🧑‍💼', '🏌️‍♀️', '👩‍🏫', '🧠', '💻', '💪', '🎨', '🔬', '📚', '🏆', '🌟', '🎯'
];

interface CompanionFormData {
  name: string;
  topic: string;
  subject: string;
  description: string;
  duration: number;
  style: string;
  voice: string;
  languages: string[];
  avatar: string;
  expertise: string;
  personality: string;
  specialties: string[];
  sessionTopics: string[];
}

const CompanionCreator = () => {
  const navigate = useNavigate();
  const { language } = useAppContext();
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<CompanionFormData>({
    name: '',
    topic: '',
    subject: 'business',
    description: '',
    duration: 30,
    style: 'casual',
    voice: 'female-casual',
    languages: ['en'],
    avatar: '🧑‍💼',
    expertise: '',
    personality: '',
    specialties: [],
    sessionTopics: []
  });

  const [newSpecialty, setNewSpecialty] = useState('');
  const [newTopic, setNewTopic] = useState('');

  const updateFormData = (field: keyof CompanionFormData, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const addSpecialty = () => {
    if (newSpecialty.trim() && !formData.specialties.includes(newSpecialty.trim())) {
      updateFormData('specialties', [...formData.specialties, newSpecialty.trim()]);
      setNewSpecialty('');
    }
  };

  const removeSpecialty = (index: number) => {
    updateFormData('specialties', formData.specialties.filter((_, i) => i !== index));
  };

  const addSessionTopic = () => {
    if (newTopic.trim() && !formData.sessionTopics.includes(newTopic.trim())) {
      updateFormData('sessionTopics', [...formData.sessionTopics, newTopic.trim()]);
      setNewTopic('');
    }
  };

  const removeSessionTopic = (index: number) => {
    updateFormData('sessionTopics', formData.sessionTopics.filter((_, i) => i !== index));
  };

  const toggleLanguage = (lang: string) => {
    const current = formData.languages;
    if (current.includes(lang)) {
      updateFormData('languages', current.filter(l => l !== lang));
    } else {
      updateFormData('languages', [...current, lang]);
    }
  };

  const nextStep = () => {
    if (currentStep < 4) setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const handleSave = () => {
    // Here you would typically save to backend
    console.log('Saving companion:', formData);
    alert('Companion created successfully!');
    navigate('/companions');
  };

  const renderStep1 = () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold mb-4">Basic Information</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-2">Companion Name</label>
            <Input
              value={formData.name}
              onChange={(e) => updateFormData('name', e.target.value)}
              placeholder="e.g., Alex the Project Manager"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Avatar</label>
            <div className="grid grid-cols-6 gap-2">
              {AVATARS.map((avatar, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => updateFormData('avatar', avatar)}
                  className={`p-2 text-2xl rounded-lg border-2 ${
                    formData.avatar === avatar ? 'border-blue-500 bg-blue-50' : 'border-gray-200'
                  }`}
                >
                  {avatar}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Subject Area</label>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {SUBJECTS.map((subject) => (
            <button
              key={subject.value}
              type="button"
              onClick={() => updateFormData('subject', subject.value)}
              className={`p-3 rounded-lg border-2 text-left transition-colors ${
                formData.subject === subject.value
                  ? 'border-blue-500 bg-blue-50'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
              style={{ borderLeftColor: subject.color, borderLeftWidth: '4px' }}
            >
              <div className="font-medium">{subject.label}</div>
            </button>
          ))}
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Main Topic</label>
        <Input
          value={formData.topic}
          onChange={(e) => updateFormData('topic', e.target.value)}
          placeholder="e.g., Project Management Fundamentals"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Description</label>
        <textarea
          value={formData.description}
          onChange={(e) => updateFormData('description', e.target.value)}
          placeholder="Describe what this companion will teach..."
          className="w-full p-3 border border-gray-300 rounded-lg resize-none h-24"
        />
      </div>
    </div>
  );

  const renderStep2 = () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold mb-4">Personality & Style</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-2">Teaching Style</label>
            <div className="space-y-2">
              {STYLES.map((style) => (
                <button
                  key={style.value}
                  type="button"
                  onClick={() => updateFormData('style', style.value)}
                  className={`w-full p-3 rounded-lg border-2 text-left ${
                    formData.style === style.value
                      ? 'border-blue-500 bg-blue-50'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div className="font-medium">{style.label}</div>
                </button>
              ))}
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Voice</label>
            <div className="space-y-2">
              {VOICES.map((voice) => (
                <button
                  key={voice.value}
                  type="button"
                  onClick={() => updateFormData('voice', voice.value)}
                  className={`w-full p-3 rounded-lg border-2 text-left ${
                    formData.voice === voice.value
                      ? 'border-blue-500 bg-blue-50'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div className="font-medium">{voice.label}</div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Personality Description</label>
        <textarea
          value={formData.personality}
          onChange={(e) => updateFormData('personality', e.target.value)}
          placeholder="Describe the companion's personality and teaching approach..."
          className="w-full p-3 border border-gray-300 rounded-lg resize-none h-24"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Session Duration (minutes)</label>
        <Input
          type="number"
          value={formData.duration}
          onChange={(e) => updateFormData('duration', parseInt(e.target.value) || 30)}
          min="10"
          max="120"
          className="w-32"
        />
      </div>
    </div>
  );

  const renderStep3 = () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold mb-4">Expertise & Specialties</h3>
        <div>
          <label className="block text-sm font-medium mb-2">Primary Expertise</label>
          <Input
            value={formData.expertise}
            onChange={(e) => updateFormData('expertise', e.target.value)}
            placeholder="e.g., Project Management, Agile Methodology"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Specialties</label>
        <div className="flex gap-2 mb-3">
          <Input
            value={newSpecialty}
            onChange={(e) => setNewSpecialty(e.target.value)}
            placeholder="Add a specialty..."
            onKeyPress={(e) => e.key === 'Enter' && addSpecialty()}
          />
          <Button onClick={addSpecialty} type="button">
            <Plus className="w-4 h-4" />
          </Button>
        </div>
        <div className="flex flex-wrap gap-2">
          {formData.specialties.map((specialty, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm flex items-center gap-2"
            >
              {specialty}
              <button
                type="button"
                onClick={() => removeSpecialty(index)}
                className="text-blue-600 hover:text-blue-800"
              >
                ×
              </button>
            </span>
          ))}
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Session Topics</label>
        <div className="flex gap-2 mb-3">
          <Input
            value={newTopic}
            onChange={(e) => setNewTopic(e.target.value)}
            placeholder="Add a session topic..."
            onKeyPress={(e) => e.key === 'Enter' && addSessionTopic()}
          />
          <Button onClick={addSessionTopic} type="button">
            <Plus className="w-4 h-4" />
          </Button>
        </div>
        <div className="space-y-2">
          {formData.sessionTopics.map((topic, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
            >
              <span className="text-sm">{topic}</span>
              <button
                type="button"
                onClick={() => removeSessionTopic(index)}
                className="text-red-600 hover:text-red-800"
              >
                ×
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderStep4 = () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold mb-4">Language Support</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {['en', 'es', 'fr', 'de', 'zh', 'ar', 'ru', 'pt', 'it', 'ja'].map((lang) => (
            <button
              key={lang}
              type="button"
              onClick={() => toggleLanguage(lang)}
              className={`p-3 rounded-lg border-2 text-center ${
                formData.languages.includes(lang)
                  ? 'border-blue-500 bg-blue-50'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              <div className="font-medium">{lang.toUpperCase()}</div>
              <div className="text-sm text-gray-600">
                {lang === 'en' && 'English'}
                {lang === 'es' && 'Español'}
                {lang === 'fr' && 'Français'}
                {lang === 'de' && 'Deutsch'}
                {lang === 'zh' && '中文'}
                {lang === 'ar' && 'العربية'}
                {lang === 'ru' && 'Русский'}
                {lang === 'pt' && 'Português'}
                {lang === 'it' && 'Italiano'}
                {lang === 'ja' && '日本語'}
              </div>
            </button>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Preview</h3>
        <Card className="p-6">
          <div className="flex items-center gap-4 mb-4">
            <span className="text-4xl">{formData.avatar}</span>
            <div>
              <h4 className="text-xl font-bold">{formData.name || 'Your Companion'}</h4>
              <p className="text-gray-600">{formData.topic || 'Topic'}</p>
              <div className="flex gap-2 mt-2">
                <span className="text-xs px-2 py-1 bg-gray-100 rounded">
                  {SUBJECTS.find(s => s.value === formData.subject)?.label || 'Subject'}
                </span>
                <span className="text-xs px-2 py-1 bg-blue-100 rounded">
                  {formData.duration} min
                </span>
              </div>
            </div>
          </div>
          <p className="text-gray-600 text-sm mb-4">
            {formData.description || 'Description will appear here...'}
          </p>
          <div className="flex flex-wrap gap-1">
            {formData.languages.map(lang => (
              <span key={lang} className="text-xs px-2 py-1 bg-green-100 text-green-800 rounded">
                {lang.toUpperCase()}
              </span>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );

  const steps = [
    { number: 1, title: 'Basic Info', icon: <BookOpen className="w-4 h-4" /> },
    { number: 2, title: 'Personality', icon: <Brain className="w-4 h-4" /> },
    { number: 3, title: 'Expertise', icon: <Users className="w-4 h-4" /> },
    { number: 4, title: 'Languages', icon: <Globe className="w-4 h-4" /> }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-400 via-blue-500 to-cyan-500 py-8">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button variant="ghost" onClick={() => navigate('/companions')}>
                <ArrowLeft className="w-5 h-5" />
              </Button>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Create New Companion</h1>
                <p className="text-gray-600">Design your custom AI learning companion</p>
              </div>
            </div>
          </div>
        </div>

        {/* Progress Steps */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
          <div className="flex items-center justify-between">
            {steps.map((step, index) => (
              <div key={step.number} className="flex items-center">
                <div
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg ${
                    currentStep >= step.number
                      ? 'bg-blue-500 text-white'
                      : 'bg-gray-100 text-gray-500'
                  }`}
                >
                  {step.icon}
                  <span className="font-medium">{step.title}</span>
                </div>
                {index < steps.length - 1 && (
                  <div className="w-8 h-0.5 bg-gray-200 mx-2" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Form Content */}
        <Card className="p-6">
          {currentStep === 1 && renderStep1()}
          {currentStep === 2 && renderStep2()}
          {currentStep === 3 && renderStep3()}
          {currentStep === 4 && renderStep4()}

          {/* Navigation */}
          <div className="flex justify-between mt-8 pt-6 border-t">
            <Button
              variant="outline"
              onClick={prevStep}
              disabled={currentStep === 1}
            >
              Previous
            </Button>
            
            <div className="flex gap-2">
              {currentStep < 4 ? (
                <Button onClick={nextStep}>
                  Next
                </Button>
              ) : (
                <Button onClick={handleSave} className="bg-green-600 hover:bg-green-700">
                  <Save className="w-4 h-4 mr-2" />
                  Create Companion
                </Button>
              )}
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default CompanionCreator; 