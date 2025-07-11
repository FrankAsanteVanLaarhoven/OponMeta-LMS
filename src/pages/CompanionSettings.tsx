import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { useAppContext } from '@/context/AppContext';
import { 
  ArrowLeft, 
  Save, 
  Settings, 
  Volume2, 
  Globe, 
  Brain,
  User,
  Bell,
  Shield,
  Palette,
  Clock,
  Mic,
  Languages,
  Eye,
  Zap,
  CreditCard,
  Calendar,
  DollarSign,
  AlertTriangle,
  CheckCircle,
  ExternalLink
} from 'lucide-react';

interface SettingsData {
  // Voice & Audio
  voiceSpeed: number;
  voicePitch: number;
  voiceVolume: number;
  autoPlayAudio: boolean;
  voiceType: string;
  
  // Language & Localization
  preferredLanguage: string;
  secondaryLanguages: string[];
  autoTranslate: boolean;
  showTranslations: boolean;
  
  // Learning Preferences
  sessionDuration: number;
  difficultyLevel: string;
  learningStyle: string;
  autoProgress: boolean;
  showHints: boolean;
  
  // Interface
  theme: string;
  fontSize: string;
  showAnimations: boolean;
  compactMode: boolean;
  
  // Notifications
  sessionReminders: boolean;
  progressUpdates: boolean;
  achievementAlerts: boolean;
  emailNotifications: boolean;
  
  // Privacy & Data
  dataCollection: boolean;
  analyticsSharing: boolean;
  sessionRecording: boolean;
  personalizedAds: boolean;
  
  // Accessibility
  highContrast: boolean;
  screenReader: boolean;
  keyboardNavigation: boolean;
  reducedMotion: boolean;
}

const CompanionSettings = () => {
  const navigate = useNavigate();
  const { language } = useAppContext();
  
  // Mock subscription data (replace with real data later)
  const [subscriptionData] = useState({
    plan: 'Premium',
    status: 'active',
    nextBilling: '2024-02-15',
    amount: 9.99,
    currency: 'USD',
    billingCycle: 'monthly',
    features: [
      'Unlimited AI Learning Sessions',
      'Voice-driven Lessons',
      'Progress Tracking',
      'Session History',
      'Personalized Learning Paths',
      'Multi-language Support'
    ]
  });

  const [showCancelModal, setShowCancelModal] = useState(false);
  const [showBillingHistory, setShowBillingHistory] = useState(false);

  const [settings, setSettings] = useState<SettingsData>({
    // Voice & Audio
    voiceSpeed: 1.0,
    voicePitch: 1.0,
    voiceVolume: 80,
    autoPlayAudio: true,
    voiceType: 'female-casual',
    
    // Language & Localization
    preferredLanguage: 'en',
    secondaryLanguages: ['es', 'fr'],
    autoTranslate: true,
    showTranslations: false,
    
    // Learning Preferences
    sessionDuration: 30,
    difficultyLevel: 'intermediate',
    learningStyle: 'visual',
    autoProgress: true,
    showHints: true,
    
    // Interface
    theme: 'light',
    fontSize: 'medium',
    showAnimations: true,
    compactMode: false,
    
    // Notifications
    sessionReminders: true,
    progressUpdates: true,
    achievementAlerts: true,
    emailNotifications: false,
    
    // Privacy & Data
    dataCollection: true,
    analyticsSharing: true,
    sessionRecording: false,
    personalizedAds: false,
    
    // Accessibility
    highContrast: false,
    screenReader: false,
    keyboardNavigation: true,
    reducedMotion: false
  });

  const [hasChanges, setHasChanges] = useState(false);

  const updateSetting = (key: keyof SettingsData, value: any) => {
    setSettings(prev => ({ ...prev, [key]: value }));
    setHasChanges(true);
  };

  const handleSave = () => {
    // Here you would typically save to backend
    console.log('Saving settings:', settings);
    alert('Settings saved successfully!');
    setHasChanges(false);
  };

  const resetToDefaults = () => {
    if (confirm('Are you sure you want to reset all settings to defaults?')) {
      // Reset to default values
      setHasChanges(true);
    }
  };

  const handleManageSubscription = () => {
    // In real implementation, this would redirect to Stripe customer portal
    alert('Redirecting to billing portal... (Stripe integration needed)');
  };

  const handleCancelSubscription = () => {
    setShowCancelModal(true);
  };

  const confirmCancelSubscription = () => {
    // In real implementation, this would call Stripe API to cancel subscription
    localStorage.removeItem('companionSubscribed');
    alert('Subscription cancelled. You can resubscribe anytime.');
    setShowCancelModal(false);
    navigate('/companion-subscribe');
  };

  const handleUpgradePlan = () => {
    // In real implementation, this would redirect to upgrade page
    alert('Redirecting to plan upgrade... (Stripe integration needed)');
  };

  const SettingSection = ({ title, icon, children }: { title: string; icon: React.ReactNode; children: React.ReactNode }) => (
    <Card className="p-6 mb-6">
      <div className="flex items-center gap-3 mb-4">
        {icon}
        <h3 className="text-lg font-semibold">{title}</h3>
      </div>
      {children}
    </Card>
  );

  const ToggleSetting = ({ label, value, onChange, description }: any) => (
    <div className="flex items-center justify-between py-3">
      <div>
        <p className="font-medium">{label}</p>
        {description && <p className="text-sm text-gray-600">{description}</p>}
      </div>
      <button
        onClick={() => onChange(!value)}
        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
          value ? 'bg-blue-600' : 'bg-gray-200'
        }`}
      >
        <span
          className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
            value ? 'translate-x-6' : 'translate-x-1'
          }`}
        />
      </button>
    </div>
  );

  const SliderSetting = ({ label, value, onChange, min = 0, max = 100, step = 1 }: any) => (
    <div className="py-3">
      <div className="flex justify-between mb-2">
        <span className="font-medium">{label}</span>
        <span className="text-sm text-gray-600">{value}</span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(parseFloat(e.target.value))}
        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
      />
    </div>
  );

  const SelectSetting = ({ label, value, onChange, options }: any) => (
    <div className="py-3">
      <label className="block font-medium mb-2">{label}</label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded-lg"
      >
        {options.map((option: any) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );

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
                <h1 className="text-2xl font-bold text-gray-900">Companion Settings</h1>
                <p className="text-gray-600">Customize your learning experience</p>
              </div>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" onClick={resetToDefaults}>
                Reset Defaults
              </Button>
              <Button 
                onClick={handleSave} 
                disabled={!hasChanges}
                className="bg-green-600 hover:bg-green-700"
              >
                <Save className="w-4 h-4 mr-2" />
                Save Changes
              </Button>
            </div>
          </div>
        </div>

        {/* Voice & Audio Settings */}
        <SettingSection title="Voice & Audio" icon={<Volume2 className="w-5 h-5 text-blue-600" />}>
          <div className="space-y-4">
            <SelectSetting
              label="Voice Type"
              value={settings.voiceType}
              onChange={(value: string) => updateSetting('voiceType', value)}
              options={[
                { value: 'female-casual', label: 'Female - Casual' },
                { value: 'female-formal', label: 'Female - Formal' },
                { value: 'male-casual', label: 'Male - Casual' },
                { value: 'male-formal', label: 'Male - Formal' }
              ]}
            />
            
            <SliderSetting
              label="Voice Speed"
              value={settings.voiceSpeed}
              onChange={(value: number) => updateSetting('voiceSpeed', value)}
              min={0.5}
              max={2.0}
              step={0.1}
            />
            
            <SliderSetting
              label="Voice Pitch"
              value={settings.voicePitch}
              onChange={(value: number) => updateSetting('voicePitch', value)}
              min={0.5}
              max={2.0}
              step={0.1}
            />
            
            <SliderSetting
              label="Volume"
              value={settings.voiceVolume}
              onChange={(value: number) => updateSetting('voiceVolume', value)}
            />
            
            <ToggleSetting
              label="Auto-play Audio"
              value={settings.autoPlayAudio}
              onChange={(value: boolean) => updateSetting('autoPlayAudio', value)}
              description="Automatically play companion voice responses"
            />
          </div>
        </SettingSection>

        {/* Language & Localization */}
        <SettingSection title="Language & Localization" icon={<Globe className="w-5 h-5 text-green-600" />}>
          <div className="space-y-4">
            <SelectSetting
              label="Preferred Language"
              value={settings.preferredLanguage}
              onChange={(value: string) => updateSetting('preferredLanguage', value)}
              options={[
                { value: 'en', label: 'English' },
                { value: 'es', label: 'Español' },
                { value: 'fr', label: 'Français' },
                { value: 'de', label: 'Deutsch' },
                { value: 'zh', label: '中文' },
                { value: 'ar', label: 'العربية' },
                { value: 'ru', label: 'Русский' },
                { value: 'pt', label: 'Português' },
                { value: 'it', label: 'Italiano' },
                { value: 'ja', label: '日本語' }
              ]}
            />
            
            <div className="py-3">
              <label className="block font-medium mb-2">Secondary Languages</label>
              <div className="grid grid-cols-2 gap-2">
                {['en', 'es', 'fr', 'de', 'zh', 'ar', 'ru', 'pt', 'it', 'ja'].map((lang) => (
                  <label key={lang} className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={settings.secondaryLanguages.includes(lang)}
                      onChange={(e) => {
                        const current = settings.secondaryLanguages;
                        if (e.target.checked) {
                          updateSetting('secondaryLanguages', [...current, lang]);
                        } else {
                          updateSetting('secondaryLanguages', current.filter(l => l !== lang));
                        }
                      }}
                      className="rounded"
                    />
                    <span className="text-sm">
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
                    </span>
                  </label>
                ))}
              </div>
            </div>
            
            <ToggleSetting
              label="Auto-translate"
              value={settings.autoTranslate}
              onChange={(value: boolean) => updateSetting('autoTranslate', value)}
              description="Automatically translate content to your preferred language"
            />
            
            <ToggleSetting
              label="Show Translations"
              value={settings.showTranslations}
              onChange={(value: boolean) => updateSetting('showTranslations', value)}
              description="Display original text alongside translations"
            />
          </div>
        </SettingSection>

        {/* Learning Preferences */}
        <SettingSection title="Learning Preferences" icon={<Brain className="w-5 h-5 text-purple-600" />}>
          <div className="space-y-4">
            <SliderSetting
              label="Session Duration (minutes)"
              value={settings.sessionDuration}
              onChange={(value: number) => updateSetting('sessionDuration', value)}
              min={10}
              max={120}
              step={5}
            />
            
            <SelectSetting
              label="Difficulty Level"
              value={settings.difficultyLevel}
              onChange={(value: string) => updateSetting('difficultyLevel', value)}
              options={[
                { value: 'beginner', label: 'Beginner' },
                { value: 'intermediate', label: 'Intermediate' },
                { value: 'advanced', label: 'Advanced' },
                { value: 'expert', label: 'Expert' }
              ]}
            />
            
            <SelectSetting
              label="Learning Style"
              value={settings.learningStyle}
              onChange={(value: string) => updateSetting('learningStyle', value)}
              options={[
                { value: 'visual', label: 'Visual' },
                { value: 'auditory', label: 'Auditory' },
                { value: 'kinesthetic', label: 'Kinesthetic' },
                { value: 'reading', label: 'Reading/Writing' }
              ]}
            />
            
            <ToggleSetting
              label="Auto Progress"
              value={settings.autoProgress}
              onChange={(value: boolean) => updateSetting('autoProgress', value)}
              description="Automatically advance to next topic when ready"
            />
            
            <ToggleSetting
              label="Show Hints"
              value={settings.showHints}
              onChange={(value: boolean) => updateSetting('showHints', value)}
              description="Display helpful hints during learning sessions"
            />
          </div>
        </SettingSection>

        {/* Interface Settings */}
        <SettingSection title="Interface" icon={<Palette className="w-5 h-5 text-pink-600" />}>
          <div className="space-y-4">
            <SelectSetting
              label="Theme"
              value={settings.theme}
              onChange={(value: string) => updateSetting('theme', value)}
              options={[
                { value: 'light', label: 'Light' },
                { value: 'dark', label: 'Dark' },
                { value: 'auto', label: 'Auto (System)' }
              ]}
            />
            
            <SelectSetting
              label="Font Size"
              value={settings.fontSize}
              onChange={(value: string) => updateSetting('fontSize', value)}
              options={[
                { value: 'small', label: 'Small' },
                { value: 'medium', label: 'Medium' },
                { value: 'large', label: 'Large' },
                { value: 'extra-large', label: 'Extra Large' }
              ]}
            />
            
            <ToggleSetting
              label="Show Animations"
              value={settings.showAnimations}
              onChange={(value: boolean) => updateSetting('showAnimations', value)}
              description="Enable interface animations and transitions"
            />
            
            <ToggleSetting
              label="Compact Mode"
              value={settings.compactMode}
              onChange={(value: boolean) => updateSetting('compactMode', value)}
              description="Use compact layout for more content on screen"
            />
          </div>
        </SettingSection>

        {/* Notifications */}
        <SettingSection title="Notifications" icon={<Bell className="w-5 h-5 text-yellow-600" />}>
          <div className="space-y-4">
            <ToggleSetting
              label="Session Reminders"
              value={settings.sessionReminders}
              onChange={(value: boolean) => updateSetting('sessionReminders', value)}
              description="Remind me about scheduled learning sessions"
            />
            
            <ToggleSetting
              label="Progress Updates"
              value={settings.progressUpdates}
              onChange={(value: boolean) => updateSetting('progressUpdates', value)}
              description="Notify me about learning progress and achievements"
            />
            
            <ToggleSetting
              label="Achievement Alerts"
              value={settings.achievementAlerts}
              onChange={(value: boolean) => updateSetting('achievementAlerts', value)}
              description="Show notifications for completed achievements"
            />
            
            <ToggleSetting
              label="Email Notifications"
              value={settings.emailNotifications}
              onChange={(value: boolean) => updateSetting('emailNotifications', value)}
              description="Send learning updates via email"
            />
          </div>
        </SettingSection>

        {/* Privacy & Data */}
        <SettingSection title="Privacy & Data" icon={<Shield className="w-5 h-5 text-red-600" />}>
          <div className="space-y-4">
            <ToggleSetting
              label="Data Collection"
              value={settings.dataCollection}
              onChange={(value: boolean) => updateSetting('dataCollection', value)}
              description="Allow collection of learning data for personalization"
            />
            
            <ToggleSetting
              label="Analytics Sharing"
              value={settings.analyticsSharing}
              onChange={(value: boolean) => updateSetting('analyticsSharing', value)}
              description="Share anonymous usage data to improve the platform"
            />
            
            <ToggleSetting
              label="Session Recording"
              value={settings.sessionRecording}
              onChange={(value: boolean) => updateSetting('sessionRecording', value)}
              description="Record learning sessions for review and improvement"
            />
            
            <ToggleSetting
              label="Personalized Ads"
              value={settings.personalizedAds}
              onChange={(value: boolean) => updateSetting('personalizedAds', value)}
              description="Show personalized advertisements based on learning interests"
            />
          </div>
        </SettingSection>

        {/* Accessibility */}
        <SettingSection title="Accessibility" icon={<Eye className="w-5 h-5 text-indigo-600" />}>
          <div className="space-y-4">
            <ToggleSetting
              label="High Contrast"
              value={settings.highContrast}
              onChange={(value: boolean) => updateSetting('highContrast', value)}
              description="Use high contrast colors for better visibility"
            />
            
            <ToggleSetting
              label="Screen Reader Support"
              value={settings.screenReader}
              onChange={(value: boolean) => updateSetting('screenReader', value)}
              description="Enable enhanced screen reader compatibility"
            />
            
            <ToggleSetting
              label="Keyboard Navigation"
              value={settings.keyboardNavigation}
              onChange={(value: boolean) => updateSetting('keyboardNavigation', value)}
              description="Enable full keyboard navigation support"
            />
            
            <ToggleSetting
              label="Reduced Motion"
              value={settings.reducedMotion}
              onChange={(value: boolean) => updateSetting('reducedMotion', value)}
              description="Reduce animations for users with motion sensitivity"
            />
          </div>
        </SettingSection>

        {/* Subscription & Billing */}
        <SettingSection title="Subscription & Billing" icon={<CreditCard className="w-5 h-5 text-emerald-600" />}>
          <div className="space-y-6">
            {/* Current Plan Info */}
            <div className="bg-gradient-to-r from-emerald-50 to-blue-50 border border-emerald-200 rounded-lg p-4">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-emerald-600" />
                  <span className="font-semibold text-emerald-800">Current Plan: {subscriptionData.plan}</span>
                </div>
                <span className="text-sm text-emerald-600 bg-emerald-100 px-2 py-1 rounded-full">
                  {subscriptionData.status}
                </span>
              </div>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-gray-600">Next Billing:</span>
                  <p className="font-medium">{subscriptionData.nextBilling}</p>
                </div>
                <div>
                  <span className="text-gray-600">Amount:</span>
                  <p className="font-medium">${subscriptionData.amount}/{subscriptionData.billingCycle}</p>
                </div>
              </div>
            </div>

            {/* Plan Features */}
            <div>
              <h4 className="font-medium mb-3">Your Plan Includes:</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {subscriptionData.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-emerald-600" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t">
              <Button 
                onClick={handleManageSubscription}
                className="bg-blue-600 hover:bg-blue-700 text-white"
              >
                <CreditCard className="w-4 h-4 mr-2" />
                Manage Billing
              </Button>
              
              <Button 
                onClick={() => setShowBillingHistory(true)}
                variant="outline"
                className="border-gray-300 hover:bg-gray-50"
              >
                <Calendar className="w-4 h-4 mr-2" />
                Billing History
              </Button>
              
              <Button 
                onClick={handleUpgradePlan}
                variant="outline"
                className="border-purple-300 text-purple-700 hover:bg-purple-50"
              >
                <Zap className="w-4 h-4 mr-2" />
                Upgrade Plan
              </Button>
              
              <Button 
                onClick={handleCancelSubscription}
                variant="outline"
                className="border-red-300 text-red-700 hover:bg-red-50"
              >
                <AlertTriangle className="w-4 h-4 mr-2" />
                Cancel Subscription
              </Button>
            </div>
          </div>
        </SettingSection>

        {/* Cancel Subscription Modal */}
        {showCancelModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4">
              <div className="flex items-center gap-3 mb-4">
                <AlertTriangle className="w-6 h-6 text-red-600" />
                <h3 className="text-lg font-semibold">Cancel Subscription</h3>
              </div>
              <p className="text-gray-600 mb-6">
                Are you sure you want to cancel your subscription? You'll lose access to all premium features at the end of your current billing period.
              </p>
              <div className="flex gap-3">
                <Button 
                  onClick={() => setShowCancelModal(false)}
                  variant="outline"
                  className="flex-1"
                >
                  Keep Subscription
                </Button>
                <Button 
                  onClick={confirmCancelSubscription}
                  className="bg-red-600 hover:bg-red-700 text-white flex-1"
                >
                  Cancel Subscription
                </Button>
              </div>
            </div>
          </div>
        )}

        {/* Billing History Modal */}
        {showBillingHistory && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-6 max-w-2xl w-full mx-4 max-h-[80vh] overflow-y-auto">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <Calendar className="w-6 h-6 text-blue-600" />
                  <h3 className="text-lg font-semibold">Billing History</h3>
                </div>
                <Button 
                  onClick={() => setShowBillingHistory(false)}
                  variant="ghost"
                  size="sm"
                >
                  ×
                </Button>
              </div>
              
              <div className="space-y-3">
                {/* Mock billing history */}
                {[
                  { date: '2024-01-15', amount: 9.99, status: 'Paid', description: 'Premium Plan - Monthly' },
                  { date: '2023-12-15', amount: 9.99, status: 'Paid', description: 'Premium Plan - Monthly' },
                  { date: '2023-11-15', amount: 9.99, status: 'Paid', description: 'Premium Plan - Monthly' },
                  { date: '2023-10-15', amount: 9.99, status: 'Paid', description: 'Premium Plan - Monthly' }
                ].map((invoice, index) => (
                  <div key={index} className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
                    <div>
                      <p className="font-medium">{invoice.description}</p>
                      <p className="text-sm text-gray-600">{invoice.date}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-medium">${invoice.amount}</p>
                      <span className="text-sm text-green-600 bg-green-100 px-2 py-1 rounded-full">
                        {invoice.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 pt-4 border-t">
                <Button 
                  onClick={() => setShowBillingHistory(false)}
                  className="w-full"
                >
                  Close
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CompanionSettings; 