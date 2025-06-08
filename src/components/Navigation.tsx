import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown, Sun, Moon, Laptop, Globe } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { useTheme } from 'next-themes';
import { useTranslation } from 'react-i18next';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const { theme, setTheme } = useTheme();
  const { i18n, t } = useTranslation();
  const [isLangOpen, setIsLangOpen] = useState(false);
  const langBtnRef = useRef(null);
  const langMenuRef = useRef(null);

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
  ];

  const themeIcons = {
    light: <Sun size={18} />, 
    dark: <Moon size={18} />, 
    system: <Laptop size={18} />
  };

  const themeLabels = {
    light: 'Light',
    dark: 'Dark',
    system: 'System'
  };

  // Close dropdown on outside click
  useEffect(() => {
    function handleClick(e) {
      if (
        langMenuRef.current &&
        !langMenuRef.current.contains(e.target) &&
        langBtnRef.current &&
        !langBtnRef.current.contains(e.target)
      ) {
        setIsLangOpen(false);
      }
    }
    if (isLangOpen) {
      document.addEventListener('mousedown', handleClick);
    } else {
      document.removeEventListener('mousedown', handleClick);
    }
    return () => document.removeEventListener('mousedown', handleClick);
  }, [isLangOpen]);

  return (
    <nav className="relative z-50 bg-white/10 backdrop-blur-md border-b border-white/20"  style={{background: "linear-gradient(to bottom right, rgb(29 78 216), rgb(30 64 175), rgb(67 56 202))"}}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <a href="/">
              <img 
                src="/logo.png" 
                alt="OponMeta Logo" 
                className="h-12 w-12 animate-swivel"
              />
            </a>
            <div className="flex flex-col">
              <span className="text-xl font-bold bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-600 bg-clip-text text-transparent">OPONMETA</span>
              <span className="text-xs text-blue-200">GLOBAL EDTech PowerHouse</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center">
            <NavigationMenu>
              <NavigationMenuList className="space-x-6">
                <NavigationMenuItem>
                  <NavigationMenuLink href="/" className="text-white hover:text-blue-200 transition-colors px-3 py-2">{t('home')}</NavigationMenuLink>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-white hover:text-blue-200 transition-colors bg-transparent hover:bg-white/10">
                    {t('resources')}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-52 p-1 bg-white dark:bg-gray-800 shadow-lg border border-gray-200 dark:border-gray-700 rounded-md">
                      <NavigationMenuLink href="/courses" className="block px-4 py-3 text-gray-700 dark:text-gray-200 hover:bg-blue-50 dark:hover:bg-gray-700 hover:text-blue-600 dark:hover:text-blue-400 rounded-sm transition-colors text-sm font-medium">
                        {t('courses')}
                      </NavigationMenuLink>
                      <NavigationMenuLink href="/meet-ai" className="block px-4 py-3 text-gray-700 dark:text-gray-200 hover:bg-blue-50 dark:hover:bg-gray-700 hover:text-blue-600 dark:hover:text-blue-400 rounded-sm transition-colors text-sm font-medium">
                        {t('meetAI')}
                      </NavigationMenuLink>
                      <NavigationMenuLink href="/vendors" className="block px-4 py-3 text-gray-700 dark:text-gray-200 hover:bg-blue-50 dark:hover:bg-gray-700 hover:text-blue-600 dark:hover:text-blue-400 rounded-sm transition-colors text-sm font-medium">
                        {t('vendors')}
                      </NavigationMenuLink>
                      <NavigationMenuLink href="/student-portal" className="block px-4 py-3 text-gray-700 dark:text-gray-200 hover:bg-blue-50 dark:hover:bg-gray-700 hover:text-blue-600 dark:hover:text-blue-400 rounded-sm transition-colors text-sm font-medium">
                        {t('studentPortal')}
                      </NavigationMenuLink>
                      <NavigationMenuLink href="/advertiser-portal" className="block px-4 py-3 text-gray-700 dark:text-gray-200 hover:bg-blue-50 dark:hover:bg-gray-700 hover:text-blue-600 dark:hover:text-blue-400 rounded-sm transition-colors text-sm font-medium">
                        {t('advertiserPortal')}
                      </NavigationMenuLink>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <NavigationMenuLink href="/features" className="text-white hover:text-blue-200 transition-colors px-3 py-2">{t('features')}</NavigationMenuLink>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <NavigationMenuLink href="/about" className="text-white hover:text-blue-200 transition-colors px-3 py-2">{t('about')}</NavigationMenuLink>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <NavigationMenuLink href="/contact" className="text-white hover:text-blue-200 transition-colors px-3 py-2">{t('contact')}</NavigationMenuLink>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <NavigationMenuLink href="/dashboard" className="text-white hover:text-blue-200 transition-colors px-3 py-2">{t('dashboard')}</NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Desktop Auth Buttons + Theme/Language Switchers */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" className="text-white hover:bg-white/10" onClick={() => window.location.href = '/signin'}>
              {t('signIn')}
            </Button>
            <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white border-0" onClick={() => window.location.href = '/signup'}>
              {t('signUp')}
            </Button>
            {/* Theme Switcher Dropdown */}
            <div className="relative group">
              <button aria-label="Select theme" className="flex items-center px-2 py-2 rounded-full text-white hover:bg-white/10" tabIndex={0}>
                {themeIcons[theme]}
                <ChevronDown size={16} className="ml-1" />
              </button>
              <div className="absolute right-0 mt-2 w-36 bg-white dark:bg-gray-800 shadow-lg border border-gray-200 dark:border-gray-700 rounded-md opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-opacity z-50">
                {(['light','dark','system'] as const).map(opt => (
                  <button key={opt} className={`w-full flex items-center px-3 py-2 text-sm hover:bg-blue-50 dark:hover:bg-gray-700 ${theme === opt ? 'font-bold text-blue-600 dark:text-blue-400' : 'text-gray-700 dark:text-gray-200'}`} onClick={() => setTheme(opt)}>
                    {themeIcons[opt]} <span className="ml-2">{themeLabels[opt]}</span>
                  </button>
                ))}
              </div>
            </div>
            {/* Language Selector */}
            <div className="relative">
              <button
                ref={langBtnRef}
                aria-label="Select language"
                className="flex items-center px-2 py-2 rounded-full text-white hover:bg-white/10"
                onClick={() => setIsLangOpen((v) => !v)}
                onMouseEnter={() => setIsLangOpen(true)}
                onMouseLeave={() => setIsLangOpen(false)}
                tabIndex={0}
              >
                <Globe size={18} className="mr-1" />
                <span className="font-semibold">{languages.find(l => l.code === i18n.language)?.label || 'EN'}</span>
                <ChevronDown size={16} className="ml-1" />
              </button>
              <div
                ref={langMenuRef}
                className={`absolute right-0 mt-2 w-36 bg-white dark:bg-gray-800 shadow-lg border border-gray-200 dark:border-gray-700 rounded-md z-50 transition-opacity ${isLangOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
                onMouseEnter={() => setIsLangOpen(true)}
                onMouseLeave={() => setIsLangOpen(false)}
              >
                {languages.map(lang => (
                  <button
                    key={lang.code}
                    className={`w-full flex items-center px-3 py-2 text-sm hover:bg-blue-50 dark:hover:bg-gray-700 ${i18n.language === lang.code ? 'font-bold text-blue-600 dark:text-blue-400' : 'text-gray-700 dark:text-gray-200'}`}
                    onClick={() => i18n.changeLanguage(lang.code)}
                  >
                    <span className="mr-2">{lang.flag}</span> {lang.name}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-blue-200"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white/10 backdrop-blur-md rounded-lg mt-2">
              <a
                href="/"
                className="block px-3 py-2 text-white hover:text-blue-200 transition-colors"
              >
                {t('home')}
              </a>
              
              {/* Resources Section */}
              <div className="border-t border-white/20 pt-2 mt-2">
                <div className="px-3 py-1 text-xs font-semibold text-blue-200">{t('resources')}</div>
                <a
                  href="/courses"
                  className="block px-3 py-2 text-white hover:text-blue-200 transition-colors"
                >
                  {t('courses')}
                </a>
                <a
                  href="/meet-ai"
                  className="block px-3 py-2 text-white hover:text-blue-200 transition-colors"
                >
                  {t('meetAI')}
                </a>
                <a
                  href="/vendors"
                  className="block px-3 py-2 text-white hover:text-blue-200 transition-colors"
                >
                  {t('vendors')}
                </a>
                <a
                  href="/student-portal"
                  className="block px-3 py-2 text-white hover:text-blue-200 transition-colors"
                >
                  {t('studentPortal')}
                </a>
                <a
                  href="/advertiser-portal"
                  className="block px-3 py-2 text-white hover:text-blue-200 transition-colors"
                >
                  {t('advertiserPortal')}
                </a>
              </div>
              
              <a
                href="/features"
                className="block px-3 py-2 text-white hover:text-blue-200 transition-colors"
              >
                {t('features')}
              </a>
              
              <a
                href="/about"
                className="block px-3 py-2 text-white hover:text-blue-200 transition-colors"
              >
                {t('about')}
              </a>
              <a
                href="/contact"
                className="block px-3 py-2 text-white hover:text-blue-200 transition-colors"
              >
                {t('contact')}
              </a>
              <a
                href="/dashboard"
                className="block px-3 py-2 text-white hover:text-blue-200 transition-colors"
              >
                {t('dashboard')}
              </a>
              
              <div className="pt-4 space-y-2">
                <Button variant="ghost" className="w-full text-white hover:bg-white/10">
                  {t('signIn')}
                </Button>
                <Button className="w-full bg-white text-purple-900 hover:bg-gray-100">
                  {t('signUp')}
                </Button>
              </div>
            </div>
            <div className="flex items-center justify-between mt-4 space-x-4">
              {/* Theme Switcher Dropdown */}
              <div className="relative group">
                <button aria-label="Select theme" className="flex items-center px-2 py-2 rounded-full text-white hover:bg-white/10" tabIndex={0}>
                  {themeIcons[theme]}
                  <ChevronDown size={16} className="ml-1" />
                </button>
                <div className="absolute right-0 mt-2 w-36 bg-white dark:bg-gray-800 shadow-lg border border-gray-200 dark:border-gray-700 rounded-md opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-opacity z-50">
                  {(['light','dark','system'] as const).map(opt => (
                    <button key={opt} className={`w-full flex items-center px-3 py-2 text-sm hover:bg-blue-50 dark:hover:bg-gray-700 ${theme === opt ? 'font-bold text-blue-600 dark:text-blue-400' : 'text-gray-700 dark:text-gray-200'}`} onClick={() => setTheme(opt)}>
                      {themeIcons[opt]} <span className="ml-2">{themeLabels[opt]}</span>
                    </button>
                  ))}
                </div>
              </div>
              {/* Language Selector */}
              <div className="relative">
                <button
                  ref={langBtnRef}
                  aria-label="Select language"
                  className="flex items-center px-2 py-2 rounded-full text-white hover:bg-white/10"
                  onClick={() => setIsLangOpen((v) => !v)}
                  onMouseEnter={() => setIsLangOpen(true)}
                  onMouseLeave={() => setIsLangOpen(false)}
                  tabIndex={0}
                >
                  <Globe size={18} className="mr-1" />
                  <span className="font-semibold">{languages.find(l => l.code === i18n.language)?.label || 'EN'}</span>
                  <ChevronDown size={16} className="ml-1" />
                </button>
                <div
                  ref={langMenuRef}
                  className={`absolute right-0 mt-2 w-36 bg-white dark:bg-gray-800 shadow-lg border border-gray-200 dark:border-gray-700 rounded-md z-50 transition-opacity ${isLangOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
                  onMouseEnter={() => setIsLangOpen(true)}
                  onMouseLeave={() => setIsLangOpen(false)}
                >
                  {languages.map(lang => (
                    <button
                      key={lang.code}
                      className={`w-full flex items-center px-3 py-2 text-sm hover:bg-blue-50 dark:hover:bg-gray-700 ${i18n.language === lang.code ? 'font-bold text-blue-600 dark:text-blue-400' : 'text-gray-700 dark:text-gray-200'}`}
                      onClick={() => i18n.changeLanguage(lang.code)}
                    >
                      <span className="mr-2">{lang.flag}</span> {lang.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;