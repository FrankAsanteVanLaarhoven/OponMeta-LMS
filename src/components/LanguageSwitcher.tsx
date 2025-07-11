import React, { useState, useRef, useEffect } from 'react';
import { Globe, ChevronDown } from 'lucide-react';
import { useAppContext } from '../context/AppContext';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher: React.FC = () => {
  const { language, setLanguage } = useAppContext();
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const languages = [
    { code: 'en', label: 'EN', name: 'English', flag: '🇬🇧' },
    { code: 'es', label: 'ES', name: 'Español', flag: '🇪🇸' },
    { code: 'fr', label: 'FR', name: 'Français', flag: '🇫🇷' },
    { code: 'de', label: 'DE', name: 'Deutsch', flag: '🇩🇪' },
    { code: 'zh', label: '中文', name: '中文', flag: '🇨🇳' },
    { code: 'ja', label: '日本語', name: '日本語', flag: '🇯🇵' },
    { code: 'ar', label: 'AR', name: 'العربية', flag: '🇸🇦' },
    { code: 'ru', label: 'RU', name: 'Русский', flag: '🇷🇺' },
    { code: 'pt', label: 'PT', name: 'Português', flag: '🇵🇹' },
    { code: 'it', label: 'IT', name: 'Italiano', flag: '🇮🇹' },
    { code: 'ko', label: '한국어', name: '한국어', flag: '🇰🇷' },
    { code: 'nl', label: 'NL', name: 'Nederlands', flag: '🇳🇱' },
  ];

  const currentLanguage = languages.find(lang => lang.code === language) || languages[0];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleLanguageChange = (langCode: string) => {
    setLanguage(langCode as any);
    setIsOpen(false);
    
    // Update document direction for RTL languages
    if (langCode === 'ar') {
      document.documentElement.dir = 'rtl';
      document.documentElement.lang = 'ar';
    } else {
      document.documentElement.dir = 'ltr';
      document.documentElement.lang = langCode;
    }
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 px-3 py-2 text-white hover:text-blue-300 transition-colors rounded-lg hover:bg-white/10"
        aria-label="Select language"
      >
        <Globe size={18} />
        <span className="text-sm font-medium">{currentLanguage.flag} {currentLanguage.label}</span>
        <ChevronDown size={14} className={`transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 shadow-lg border border-gray-200 dark:border-gray-700 rounded-lg py-1 z-50">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => handleLanguageChange(lang.code)}
              className={`w-full text-left px-4 py-2 text-sm hover:bg-blue-50 dark:hover:bg-gray-700 transition-colors flex items-center space-x-3 ${
                language === lang.code 
                  ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-gray-700' 
                  : 'text-gray-700 dark:text-gray-200'
              }`}
            >
              <span className="text-lg">{lang.flag}</span>
              <div className="flex flex-col">
                <span className="font-medium">{lang.name}</span>
                <span className="text-xs text-gray-500 dark:text-gray-400">{lang.label}</span>
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher; 