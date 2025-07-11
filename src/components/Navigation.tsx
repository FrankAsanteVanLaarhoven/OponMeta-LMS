import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown, Sun, Moon, Laptop, Globe, DollarSign, CloudSun, Users, BookOpen, Briefcase, Megaphone, Sparkles, UserCog, Layers, UserPlus, UserCheck, User, LogIn, LogOut, PlusCircle, FileText, FilePlus, FileCheck, FileBarChart2, FileSignature, FileSearch, FileInput, FileOutput, FileEdit, FileLock, FileUnlock, FileX, FileMinus, FilePlus2, FileStack, FileText as FileTextIcon, FileBarChart, FilePieChart, FileSpreadsheet, FileQuestion, FileCheck2, FileWarning, FileCloud, FileCloudDrizzle, FileCloudLightning, FileCloudRain, FileCloudSnow, FileCloudSun, FileCloudMoon, FileCloudFog, FileCloudWind, FileCloudy, FileCloudy2, FileCloudyDay, FileCloudyNight, FileCloudyRain, FileCloudySnow, FileCloudySun, FileCloudyMoon, FileCloudyFog, FileCloudyWind, FileCloudyLightning, FileCloudyDrizzle, Search, Play, Target, TrendingUp, Award, Heart, Star, Zap, BarChart3, Shield, Home, Wrench, CreditCard, Gift, Calendar } from "lucide-react";
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
import CurrencyCalculator from './CurrencyCalculator';
import WeatherForecast from './WeatherForecast';
import LanguageSwitcher from './LanguageSwitcher';
import UserProfileDropdown from './UserProfileDropdown';
import GlobalSearch from './GlobalSearch';

// Alison-style menu data structures and helpers from MegaMenuNavbar

const COURSE_CATEGORIES = [
  { icon: <BookOpen className="w-5 h-5 text-blue-500" />, name: 'IT', count: 1254, sub: [
    'Network Security', 'Programming', 'Information Systems', 'Management', 'Engineering', 'Data Science', 'Databases', 'Administration', 'AWS', 'Business Management', 'CCNA', 'Comptia', 'Computer Networking'
  ] },
  { icon: <Heart className="w-5 h-5 text-green-500" />, name: 'Health', count: 1005, sub: [
    'Mental Health', 'Healthcare', 'Nursing', 'Caregiving', 'Nutrition', 'Food Safety', 'Pharmacology', 'Dementia', 'Disability', 'Health And Fitness', 'Hygiene', 'Management', 'Physical Therapy'
  ] },
  { icon: <Globe className="w-5 h-5 text-yellow-500" />, name: 'Language', count: 314, sub: [
    'English Language', 'Spanish Language', 'German Language', 'Irish Language', 'French Language', 'Chinese Language', 'Swedish Language', 'Japanese Language', 'Business English', 'English Conversation', 'English For Stem', 'English Literature', 'English Pronunciation'
  ] },
  { icon: <Briefcase className="w-5 h-5 text-purple-500" />, name: 'Business', count: 1704, sub: [
    'Human Resources', 'Operations', 'Supply Chain Management', 'Customer Service', 'Manufacturing', 'Health And Safety', 'Quality Management', 'E-commerce', 'Management', 'Sales', 'Accounting', 'Hospitality', 'Communication Skills'
  ] },
  { icon: <Users className="w-5 h-5 text-pink-500" />, name: 'Management', count: 1033, sub: [
    'Operations', 'Accounting', 'Supervision', 'Auditing', 'Health and Safety', 'Human Resources', 'ISO', 'Lean', 'Manufacturing', 'Motivation', 'Nursing', 'Productivity', 'Project Management'
  ] },
  { icon: <Target className="w-5 h-5 text-orange-500" />, name: 'Personal Development', count: 1300, sub: [
    'Fitness', 'Psychology', 'Finance', 'Music', 'Photography', 'Anxiety', 'Communication Skills', 'Depression', 'Diet', 'DSLR', 'Health', 'Mental Health', 'Mindset'
  ] },
  { icon: <TrendingUp className="w-5 h-5 text-fuchsia-500" />, name: 'Sales & Marketing', count: 433, sub: [
    'Entrepreneurship', 'Management', 'Digital Marketing', 'Advertising', 'Amazon', 'Content Marketing', 'Data Security', 'Ethics', 'Market Research', 'Marketing Strategy', 'Presentation Skills', 'Product Marketing', 'Retail'
  ] },
  { icon: <Zap className="w-5 h-5 text-lime-500" />, name: 'Engineering & Construction', count: 806, sub: [
    'Risk Management', 'Construction', 'Electrical Engineering', 'Carpentry', 'Automotive Engineering', 'Operations', 'Auditing', 'Compliance', 'Engineering', 'Health And Safety', 'ISO', 'Kaizen', 'Kanban'
  ] },
  { icon: <Award className="w-5 h-5 text-amber-500" />, name: 'Teaching & Academics', count: 1600, sub: [
    'Science', 'History', 'Geography', 'Law', 'Journalism', 'Economics', 'Mathematics', 'Literature', 'Adult Education', 'Architecture', 'Classroom Management', 'Climate Change', 'Educational Psychology'
  ] },
];

const CAREER_CATEGORIES = [
  { icon: <Heart className="w-5 h-5 text-green-500" />, name: 'Health Science', count: 162 },
  { icon: <CreditCard className="w-5 h-5 text-yellow-500" />, name: 'Finance', count: 62 },
  { icon: <BookOpen className="w-5 h-5 text-blue-500" />, name: 'Information Technology', count: 57 },
  { icon: <Users className="w-5 h-5 text-pink-500" />, name: 'Education & Training', count: 57 },
  { icon: <Briefcase className="w-5 h-5 text-purple-500" />, name: 'Business Management & Administration', count: 57 },
  { icon: <TrendingUp className="w-5 h-5 text-fuchsia-500" />, name: 'Marketing, Sales, & Service', count: 48 },
  { icon: <Globe className="w-5 h-5 text-green-500" />, name: 'Agriculture, Food, & Natural Resources', count: 37 },
  { icon: <Award className="w-5 h-5 text-amber-500" />, name: 'Hospitality & Tourism', count: 34 },
];

const MORE_MENU = [
  { icon: <Home className="w-6 h-6 text-gray-500" />, label: 'Download the OponMeta App', desc: 'Learn anywhere, anytime for free' },
  { icon: <Users className="w-6 h-6 text-green-500" />, label: 'Résumé Builder', desc: 'Create your professional résumé', badge: 'New' },
  { icon: <Target className="w-6 h-6 text-orange-500" />, label: 'Career Ready Plan', desc: 'Plan to achieve your career goals', badge: 'New' },
  { icon: <Star className="w-6 h-6 text-pink-500" />, label: 'Aptitude Test', desc: 'Assess your skills and abilities' },
  { icon: <Shield className="w-6 h-6 text-blue-500" />, label: 'Workplace Personality Assessment', desc: 'Discover your strengths & weaknesses' },
  { icon: <Heart className="w-6 h-6 text-rose-500" />, label: 'Mental Health Assessment', desc: 'Assess your mental wellbeing' },
  { icon: <BookOpen className="w-6 h-6 text-indigo-500" />, label: 'Learning Management System', desc: 'Up-skill and empower your team' },
  { icon: <Play className="w-6 h-6 text-cyan-500" />, label: 'Webinars', desc: 'Register for upcoming webinars' },
  { icon: <FileSearch className="w-6 h-6 text-red-500" />, label: 'Plagiarism Checker', desc: 'Premium AI-powered plagiarism detection', badge: 'Premium' },
  { icon: <FileCheck className="w-6 h-6 text-green-500" />, label: 'Grammar Checker', desc: 'Free AI grammar and style checker' },
  { icon: <Award className="w-6 h-6 text-yellow-500" />, label: 'Get OponMeta Premium', desc: 'Remove ads' },
  { icon: <Gift className="w-6 h-6 text-purple-500" />, label: 'Gift Cards', desc: 'Purchase a certificate for others', badge: 'New' },
  { icon: <Users className="w-6 h-6 text-green-500" />, label: 'OponMeta Graduate Profiles', desc: 'Read graduate success stories' },
  { icon: <BookOpen className="w-6 h-6 text-red-500" />, label: 'Blogs', desc: 'News, insights, tips and stories from OponMeta' },
];

const PLATFORM_MENU = [
  { icon: <Star className="w-5 h-5 text-blue-600" />, label: 'Dashboard', to: '/dashboard' },
  { icon: <Briefcase className="w-5 h-5 text-purple-600" />, label: 'Vendor Portal', to: '/vendor-portal' },
  { icon: <Users className="w-5 h-5 text-green-600" />, label: 'Student Portal', to: '/student-portal' },
  { icon: <Users className="w-5 h-5 text-fuchsia-600" />, label: 'AI Mentor/Companion', to: '/companion' },
  { icon: <BookOpen className="w-5 h-5 text-yellow-600" />, label: 'Authoring Tool', to: '/authoring-tool' },
  { icon: <BarChart3 className="w-5 h-5 text-indigo-600" />, label: 'Course Creator Dashboard', to: '/dashboard/course-creator' },
  { icon: <BarChart3 className="w-5 h-5 text-orange-600" />, label: 'Analytics', to: '/dashboard/analytics' },
  { icon: <CreditCard className="w-5 h-5 text-pink-600" />, label: 'Subscription Management', to: '/companion-subscribe' },
  { icon: <Calendar className="w-5 h-5 text-emerald-600" />, label: '1:1 Booking', to: '/one-to-one-booking' },
  { icon: <Target className="w-5 h-5 text-teal-600" />, label: 'Goal', to: '/goals' },
];

const renderStars = (rating) => {
  return Array.from({ length: 5 }, (_, i) => (
    <Star
      key={i}
      className={`w-3 h-3 ${i < Math.floor(rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
    />
  ));
};

const Navigation = () => {
  // Alison-style mega menu state and handlers
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [activeSubCategory, setActiveSubCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const megaMenuRef = useRef<HTMLDivElement>(null);

  // Close mega menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (megaMenuRef.current && !megaMenuRef.current.contains(event.target as Node)) {
        setActiveCategory(null);
        setActiveSubCategory(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Handle keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      // Open search with Ctrl+K (or Cmd+K on Mac)
      if ((event.ctrlKey || event.metaKey) && event.key === 'k') {
        event.preventDefault();
        setIsSearchOpen(true);
      }
      // Close search with Escape
      if (event.key === 'Escape') {
        setIsSearchOpen(false);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleCategoryHover = (categoryId: string) => {
    setActiveCategory(categoryId);
  };

  const handleCategoryLeave = () => {
    setActiveCategory(null);
    setActiveSubCategory(null);
  };

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const { theme, setTheme } = useTheme();
  const { i18n, t } = useTranslation();
  const [isLangOpen, setIsLangOpen] = useState(false);
  const langBtnRef = useRef(null);
  const langMenuRef = useRef(null);
  const [isThemeOpen, setIsThemeOpen] = useState(false);
  const themeBtnRef = useRef<HTMLButtonElement>(null);
  const themeMenuRef = useRef<HTMLDivElement>(null);
  const [isCurrencyOpen, setIsCurrencyOpen] = useState(false);
  const [isWeatherOpen, setIsWeatherOpen] = useState(false);
  const currencyBtnRef = useRef<HTMLButtonElement>(null);
  const currencyMenuRef = useRef<HTMLDivElement>(null);
  const weatherBtnRef = useRef<HTMLButtonElement>(null);
  const weatherMenuRef = useRef<HTMLDivElement>(null);

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

  // Close dropdown on click outside
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (
        themeMenuRef.current &&
        !themeMenuRef.current.contains(e.target as Node) &&
        themeBtnRef.current &&
        !themeBtnRef.current.contains(e.target as Node)
      ) {
        setIsThemeOpen(false);
      }
    }
    if (isThemeOpen) {
      document.addEventListener('mousedown', handleClick);
    } else {
      document.removeEventListener('mousedown', handleClick);
    }
    return () => document.removeEventListener('mousedown', handleClick);
  }, [isThemeOpen]);

  // Add click outside handlers for currency and weather dropdowns
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (
        currencyMenuRef.current &&
        !currencyMenuRef.current.contains(e.target as Node) &&
        currencyBtnRef.current &&
        !currencyBtnRef.current.contains(e.target as Node)
      ) {
        setIsCurrencyOpen(false);
      }
      if (
        weatherMenuRef.current &&
        !weatherMenuRef.current.contains(e.target as Node) &&
        weatherBtnRef.current &&
        !weatherBtnRef.current.contains(e.target as Node)
      ) {
        setIsWeatherOpen(false);
      }
    }
    if (isCurrencyOpen || isWeatherOpen) {
      document.addEventListener('mousedown', handleClick);
    } else {
      document.removeEventListener('mousedown', handleClick);
    }
    return () => document.removeEventListener('mousedown', handleClick);
  }, [isCurrencyOpen, isWeatherOpen]);

  return (
    <nav className="bg-white text-[#0a1834] dark:bg-[#0a1834] dark:text-white">
      <div className="w-full bg-[#f0f4fa] dark:bg-[#11204a] shadow z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-2">
          {/* Logo and main nav */}
          <div className="flex items-center space-x-8">
            <a href="/" className="flex items-center space-x-2">
              <img src="/logo.png" alt="OponMeta Logo" className="h-10 w-10 animate-swivel mr-2" />
              <span className="text-xl font-bold bg-gradient-to-r from-cyan-300 to-[#0a1834] dark:from-cyan-300 dark:to-white bg-clip-text text-transparent">OPONMETA</span>
            </a>
            <nav className="flex items-center space-x-6">
              {/* Explore Courses Dropdown */}
              <div
                className="relative group"
                onMouseEnter={() => setActiveCategory('courses')}
                onMouseLeave={() => { setActiveCategory(null); setActiveSubCategory(null); }}
              >
                <button className="flex items-center text-[#0a1834] dark:text-white hover:text-cyan-600 dark:hover:text-cyan-300 px-3 py-2 text-base font-medium transition-colors">
                  Explore Courses <ChevronDown className="ml-1 w-4 h-4" />
                </button>
                {activeCategory === 'courses' && (
                  <div
                    className="absolute left-0 top-full z-50 bg-white dark:bg-[#16203a] shadow-lg rounded-xl mt-2 w-96 p-6 pointer-events-auto"
                    style={{ marginTop: '-2px' }}
                    onMouseEnter={() => setActiveCategory('courses')}
                    onMouseLeave={() => { setActiveCategory(null); setActiveSubCategory(null); }}
                  >
                    <div className="p-4 relative">
                      <h3 className="text-xs font-semibold text-cyan-600 dark:text-cyan-300 mb-2">COURSE CATEGORIES</h3>
                      {COURSE_CATEGORIES.map((cat) => (
                        <div key={cat.name} className="flex items-center px-2 py-2 hover:bg-[#f0f4fa] dark:hover:bg-[#11204a] rounded cursor-pointer group relative"
                          onMouseEnter={() => setActiveSubCategory(cat.name)}
                          onMouseLeave={() => setActiveSubCategory(null)}>
                          {cat.icon}
                          <span className="ml-2 font-medium text-[#0a1834] dark:text-white flex-1">{cat.name} <span className="text-xs text-cyan-600 dark:text-cyan-300 ml-1">({cat.count} Courses)</span></span>
                          <ChevronDown className="ml-1 w-4 h-4 group-hover:rotate-180 transition-transform" />
                          {/* Submenu */}
                          {activeSubCategory === cat.name && (
                            <div className="absolute left-full top-0 z-50 bg-white dark:bg-[#16203a] shadow-xl border border-[#f0f4fa] dark:border-[#11204a] rounded-lg mt-0 min-w-[260px] pointer-events-auto"
                              onMouseEnter={() => setActiveSubCategory(cat.name)}
                              onMouseLeave={() => setActiveSubCategory(null)}>
                              <div className="p-4">
                                <h4 className="text-xs font-semibold text-cyan-600 dark:text-cyan-300 mb-2">View Top {cat.name} Courses</h4>
                                <ul className="space-y-1">
                                  {cat.sub.map((sub) => (
                                    <li key={sub} className="text-sm text-[#0a1834] dark:text-white hover:text-cyan-600 dark:hover:text-cyan-300 cursor-pointer">{sub}</li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
              {/* Discover Careers Dropdown */}
              <div
                className="relative group"
                onMouseEnter={() => setActiveCategory('careers')}
                onMouseLeave={() => setActiveCategory(null)}
              >
                <button className="flex items-center text-[#0a1834] dark:text-white hover:text-cyan-600 dark:hover:text-cyan-300 px-3 py-2 text-base font-medium transition-colors">
                  Discover Careers <ChevronDown className="ml-1 w-4 h-4" />
                </button>
                {activeCategory === 'careers' && (
                  <div
                    className="absolute left-0 top-full z-50 bg-white dark:bg-[#16203a] shadow-lg rounded-xl mt-2 w-96 p-6 pointer-events-auto"
                    style={{ marginTop: '-2px' }}
                    onMouseEnter={() => setActiveCategory('careers')}
                    onMouseLeave={() => setActiveCategory(null)}
                  >
                    {/* Dropdown content here */}
                    <div className="p-4">
                      <h3 className="text-xs font-semibold text-cyan-600 dark:text-cyan-300 mb-2">EXPLORE CAREER CATEGORIES</h3>
                      {CAREER_CATEGORIES.map((cat) => (
                        <div key={cat.name} className="flex items-center px-2 py-2 hover:bg-[#f0f4fa] dark:hover:bg-[#11204a] rounded cursor-pointer">
                          {cat.icon}
                          <span className="ml-2 font-medium text-[#0a1834] dark:text-white flex-1">{cat.name} <span className="text-xs text-cyan-600 dark:text-cyan-300 ml-1">({cat.count} Careers)</span></span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
              {/* Platform Dropdown */}
              <div
                className="relative group"
                onMouseEnter={() => setActiveCategory('platform')}
                onMouseLeave={() => setActiveCategory(null)}
              >
                <button className="flex items-center text-[#0a1834] dark:text-white hover:text-cyan-600 dark:hover:text-cyan-300 px-3 py-2 text-base font-medium transition-colors">
                  Platform <ChevronDown className="ml-1 w-4 h-4" />
                </button>
                {activeCategory === 'platform' && (
                  <div
                    className="absolute left-0 top-full z-50 bg-white dark:bg-[#16203a] shadow-lg rounded-xl mt-2 w-96 p-6 pointer-events-auto"
                    style={{ marginTop: '-2px' }}
                    onMouseEnter={() => setActiveCategory('platform')}
                    onMouseLeave={() => setActiveCategory(null)}
                  >
                    {/* Dropdown content here */}
                    <div className="p-4">
                      <h3 className="text-xs font-semibold text-cyan-600 dark:text-cyan-300 mb-2">QUICK ACCESS</h3>
                      {PLATFORM_MENU.map((item) => (
                        <a key={item.label} href={item.to} className="flex items-center px-2 py-2 hover:bg-[#f0f4fa] dark:hover:bg-[#11204a] rounded cursor-pointer">
                          {item.icon}
                          <span className="ml-2 font-medium text-[#0a1834] dark:text-white">{item.label}</span>
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
              {/* More Dropdown */}
              <div
                className="relative group"
                onMouseEnter={() => setActiveCategory('more')}
                onMouseLeave={() => setActiveCategory(null)}
              >
                <button className="flex items-center text-[#0a1834] dark:text-white hover:text-cyan-600 dark:hover:text-cyan-300 px-3 py-2 text-base font-medium transition-colors">
                  More <ChevronDown className="ml-1 w-4 h-4" />
                </button>
                {activeCategory === 'more' && (
                  <div
                    className="absolute left-0 top-full z-50 bg-white dark:bg-[#16203a] shadow-lg rounded-xl mt-2 w-96 p-6 pointer-events-auto"
                    style={{ marginTop: '-2px' }}
                    onMouseEnter={() => setActiveCategory('more')}
                    onMouseLeave={() => setActiveCategory(null)}
                  >
                    {/* Dropdown content here */}
                    <div className="p-4">
                      {MORE_MENU.map((item) => (
                        <div key={item.label} className="flex items-center px-2 py-2 hover:bg-[#f0f4fa] dark:hover:bg-[#11204a] rounded cursor-pointer">
                          {item.icon}
                          <span className="ml-2 font-medium text-[#0a1834] dark:text-white flex-1">{item.label}</span>
                          {item.badge && <span className="ml-2 text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded">{item.badge}</span>}
                          <span className="ml-2 text-xs text-cyan-600 dark:text-cyan-300">{item.desc}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
              <a href="/free-lms" className="ml-4 px-3 py-2 rounded border border-white text-white hover:bg-white/10 font-semibold transition">FREE LMS</a>
              <button className="ml-2 px-2 py-2 rounded border border-white text-white hover:bg-white/10 transition">$</button>
            </nav>
          </div>
          {/* Search and right controls */}
          <div className="flex items-center space-x-4 ml-8">
            <div 
              className="flex items-center bg-white rounded px-3 py-1 shadow-sm cursor-pointer hover:shadow-md transition-shadow"
              onClick={() => setIsSearchOpen(true)}
            >
              <Search className="w-5 h-5 text-gray-400 mr-2" />
              <input
                type="text"
                placeholder="Search courses, tools, features, or anything..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-transparent outline-none text-gray-800 w-56 placeholder-gray-400 cursor-pointer"
                readOnly
              />
              <div className="flex items-center space-x-1 ml-2 text-xs text-gray-400">
                <span className="px-1 py-0.5 bg-gray-100 rounded">⌘</span>
                <span className="px-1 py-0.5 bg-gray-100 rounded">K</span>
              </div>
            </div>
            <div className="flex items-center space-x-2 ml-4">
              <LanguageSwitcher />
              <button
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="p-2 rounded-full hover:bg-gray-100 transition-colors text-white"
                aria-label="Toggle dark mode"
              >
                {theme === 'dark' ? <Sun className="w-5 h-5 text-yellow-500" /> : <Moon className="w-5 h-5 text-gray-700" />}
              </button>
            </div>
            <a
              href="/login"
              className="ml-4 px-4 py-2 rounded font-bold text-blue-700 bg-white hover:bg-blue-100 shadow transition border border-blue-700"
              style={{ minWidth: 80, textAlign: 'center' }}
            >
              Sign In
            </a>
            <a
              href="/signup"
              className="ml-2 px-4 py-2 rounded font-bold text-white bg-blue-700 hover:bg-blue-800 shadow transition border border-blue-700"
              style={{ minWidth: 110, textAlign: 'center' }}
            >
              Get Started
            </a>
          </div>
        </div>
      </div>

      {/* Global Search Modal */}
      <GlobalSearch 
        isOpen={isSearchOpen} 
        onClose={() => setIsSearchOpen(false)} 
      />

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
                href="/one-to-one-booking"
                className="block px-3 py-2 text-white hover:text-blue-200 transition-colors"
              >
                1:1 Booking
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
              
              {/* Vendor Section */}
              <div className="border-t border-white/20 pt-2 mt-2">
                <div className="px-3 py-1 text-xs font-semibold text-blue-200">Vendor</div>
                <a
                  href="/vendor/subscription"
                  className="block px-3 py-2 text-white hover:text-blue-200 transition-colors"
                >
                  Subscription Plans
                </a>
                <a
                  href="/vendor/dashboard"
                  className="block px-3 py-2 text-white hover:text-blue-200 transition-colors"
                >
                  Vendor Dashboard
                </a>
              </div>
              
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
              <div className="relative">
                <button
                  ref={themeBtnRef}
                  aria-label="Select theme"
                  className="flex items-center px-2 py-2 rounded-full text-white hover:bg-white/10"
                  tabIndex={0}
                  onClick={() => setIsThemeOpen((v) => !v)}
                  onFocus={() => setIsThemeOpen(true)}
                  onBlur={(e) => {
                    if (!themeMenuRef.current?.contains(e.relatedTarget as Node)) setIsThemeOpen(false);
                  }}
                >
                  {themeIcons[theme]}
                  <ChevronDown size={16} className="ml-1" />
                </button>
                <div
                  ref={themeMenuRef}
                  className={`absolute right-0 mt-2 w-36 bg-white dark:bg-gray-800 shadow-lg border border-gray-200 dark:border-gray-700 rounded-md z-50 transition-opacity ${isThemeOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
                  onMouseEnter={() => setIsThemeOpen(true)}
                  onMouseLeave={() => setIsThemeOpen(false)}
                  tabIndex={-1}
                >
                  {(['light','dark','system'] as const).map(opt => (
                    <button
                      key={opt}
                      className={`w-full flex items-center px-3 py-2 text-sm hover:bg-blue-50 dark:hover:bg-gray-700 ${theme === opt ? 'font-bold text-blue-600 dark:text-blue-400' : 'text-gray-700 dark:text-gray-200'}`}
                      onClick={() => { setTheme(opt); setIsThemeOpen(false); }}
                    >
                      {themeIcons[opt]} <span className="ml-2">{themeLabels[opt]}</span>
                    </button>
                  ))}
                </div>
              </div>
              {/* Globalization Dropdown */}
              <div className="relative">
                <button
                  aria-label="Globalization menu"
                  className="flex items-center px-2 py-2 rounded-full text-white hover:bg-white/10"
                  tabIndex={0}
                  onClick={() => setIsLangOpen((v) => !v)}
                  onFocus={() => setIsLangOpen(true)}
                  onBlur={(e) => {
                    if (!langMenuRef.current?.contains(e.relatedTarget as Node)) setIsLangOpen(false);
                  }}
                >
                  <Globe size={20} />
                  <ChevronDown size={16} className="ml-1" />
                </button>
                <div
                  ref={langMenuRef}
                  className={`absolute right-0 mt-2 w-80 bg-white dark:bg-gray-800 shadow-lg border border-gray-200 dark:border-gray-700 rounded-md z-50 transition-opacity ${isLangOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
                  onMouseEnter={() => setIsLangOpen(true)}
                  onMouseLeave={() => setIsLangOpen(false)}
                >
                  {/* Currency Calculator */}
                  <div className="px-4 py-3 border-b border-gray-200 dark:border-gray-700 flex items-center gap-2">
                    <DollarSign size={18} className="mr-2 text-blue-500" />
                    <span className="font-semibold text-gray-700 dark:text-gray-200">Currency</span>
                  </div>
                  <div className="px-4 py-2">
                    <CurrencyCalculator />
                  </div>
                  {/* Weather Forecast */}
                  <div className="px-4 py-3 border-t border-b border-gray-200 dark:border-gray-700 flex items-center gap-2">
                    <CloudSun size={18} className="mr-2 text-yellow-500" />
                    <span className="font-semibold text-gray-700 dark:text-gray-200">Weather</span>
                  </div>
                  <div className="px-4 py-2">
                    <WeatherForecast />
                  </div>
                  {/* Language Selector */}
                  <div className="px-4 py-3 border-t border-gray-200 dark:border-gray-700 flex items-center gap-2">
                    <Globe size={18} className="mr-2 text-green-500" />
                    <span className="font-semibold text-gray-700 dark:text-gray-200">Language</span>
                  </div>
                  <div className="px-4 py-2 grid grid-cols-2 gap-2">
                    {languages.map(lang => (
                      <button
                        key={lang.code}
                        className={`w-full flex items-center px-3 py-2 text-sm rounded hover:bg-blue-50 dark:hover:bg-gray-700 ${i18n.language === lang.code ? 'font-bold text-blue-600 dark:text-blue-400' : 'text-gray-700 dark:text-gray-200'}`}
                        onClick={() => i18n.changeLanguage(lang.code)}
                      >
                        <span className="mr-2">{lang.flag}</span> {lang.name}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
    </nav>
  );
};

export default Navigation;