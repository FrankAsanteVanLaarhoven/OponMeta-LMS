import React, { createContext, useContext, useState, useEffect, type ReactNode } from 'react';
import i18n from '../i18n';

type Language = 'en' | 'es' | 'fr' | 'de' | 'zh' | 'ja' | 'ar' | 'ru' | 'pt' | 'it' | 'ko' | 'nl';

interface AppContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguageState] = useState<Language>('en');

  // Sync with i18n on mount
  useEffect(() => {
    const currentLang = i18n.language as Language;
    if (currentLang && currentLang !== language) {
      setLanguageState(currentLang);
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    i18n.changeLanguage(lang);
    // Store in localStorage for persistence
    localStorage.setItem('oponmeta-language', lang);
  };

  // Load language from localStorage on mount
  useEffect(() => {
    const savedLang = localStorage.getItem('oponmeta-language') as Language;
    if (savedLang && savedLang !== language) {
      setLanguage(savedLang);
    }
  }, []);

  return (
    <AppContext.Provider value={{ language, setLanguage }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
}; 