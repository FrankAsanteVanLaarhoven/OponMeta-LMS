import React from 'react';
import { useAppContext } from '../context/AppContext';
import type { Language } from '../../../src/types/content';
import { LANGUAGES } from '../../../src/types/content';

const LANGUAGE_LABELS: Record<Language, string> = {
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

export const LanguageSwitcher: React.FC = () => {
  const { language, setLanguage } = useAppContext();

  return (
    <div className="flex items-center gap-2">
      <label htmlFor="language-select" className="text-sm font-medium">Language:</label>
      <select
        id="language-select"
        value={language}
        onChange={e => setLanguage(e.target.value as Language)}
        className="border rounded px-2 py-1 text-sm"
      >
        {LANGUAGES.map((lang) => (
          <option key={lang} value={lang}>
            {LANGUAGE_LABELS[lang] || lang}
          </option>
        ))}
      </select>
    </div>
  );
}; 