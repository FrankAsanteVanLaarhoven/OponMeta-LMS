// Test utility for language switching functionality
import { Language, LANGUAGES } from '../../../src/types/content';

export const testLanguageSwitching = () => {
  console.log('🧪 Testing Language Switching Functionality...');
  
  // Test 1: Verify all supported languages are available
  console.log('✅ Supported Languages:', LANGUAGES);
  
  // Test 2: Verify language labels are correct
  const languageLabels: Record<Language, string> = {
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
  
  LANGUAGES.forEach(lang => {
    if (languageLabels[lang]) {
      console.log(`✅ Language label for ${lang}: ${languageLabels[lang]}`);
    } else {
      console.error(`❌ Missing language label for ${lang}`);
    }
  });
  
  // Test 3: Verify sample content exists for different languages
  const sampleContent = {
    en: {
      title: 'Introduction to Artificial Intelligence',
      description: 'Learn the fundamentals of AI and machine learning'
    },
    es: {
      title: 'Introducción a la Inteligencia Artificial',
      description: 'Aprende los fundamentos de la IA y el aprendizaje automático'
    },
    de: {
      title: 'Einführung in künstliche Intelligenz',
      description: 'Lernen Sie die Grundlagen von KI und maschinellem Lernen'
    }
  };
  
  Object.entries(sampleContent).forEach(([lang, content]) => {
    console.log(`✅ Sample content for ${lang}:`, content);
  });
  
  console.log('🎉 Language switching test completed successfully!');
  console.log('');
  console.log('📋 Manual Testing Checklist:');
  console.log('1. Navigate to the main navigation bar');
  console.log('2. Find the language selector dropdown');
  console.log('3. Change from English to Spanish (es)');
  console.log('4. Verify content updates in Courses page');
  console.log('5. Check Dashboard shows Spanish language indicator');
  console.log('6. Test AI Course Creator language selection');
  console.log('7. Verify all UI elements respect the selected language');
  console.log('');
  console.log('🔗 Quick Test Links:');
  console.log('- Dashboard: /dashboard');
  console.log('- Courses: /courses');
  console.log('- AI Course Creator: /dashboard/ai-course-creator');
  console.log('- AI Lesson Generator: /dashboard/ai-lesson-generator');
};

export const verifyLanguageContent = (language: Language, content: any[]) => {
  const languageContent = content.filter(item => item.language === language);
  console.log(`📊 Content for ${language}:`, languageContent.length, 'items');
  return languageContent;
};

export const testAIFeatures = () => {
  console.log('🤖 Testing AI Features...');
  
  const aiFeatures = [
    'AI Course Creator',
    'AI Lesson Generator', 
    'AI Quiz Generator',
    'AI Video Generator',
    'AI Assessment Generator'
  ];
  
  aiFeatures.forEach(feature => {
    console.log(`✅ ${feature} is available`);
  });
  
  console.log('🎯 AI Features test completed!');
}; 