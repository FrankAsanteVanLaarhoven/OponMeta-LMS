import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown, Sun, Moon, Laptop, Globe, CloudSun, CloudDrizzle, CloudLightning, CloudRain, CloudSnow, CloudMoon, CloudFog, Users, BookOpen, Briefcase, Megaphone, Sparkles, UserCog, Layers, UserPlus, UserCheck, User, LogIn, LogOut, PlusCircle, FileText, FilePlus, FileCheck, FileBarChart2, FileSignature, FileSearch, FileInput, FileOutput, FileEdit, FileLock, FileX, FileMinus, FilePlus2, FileStack, FileText as FileTextIcon, FileBarChart, FilePieChart, FileSpreadsheet, FileQuestion, FileCheck2, FileWarning, Search, Play, Target, TrendingUp, Award, Heart, Star, Zap, BarChart3, Shield, Home, Wrench, CreditCard, Gift, Calendar, Truck, Music, Video, Handshake } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Link } from 'react-router-dom';
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
  { icon: <Laptop className="w-5 h-5 text-blue-600" />, name: 'Technology and Digital Skills', slug: 'technology-and-digital-skills', count: 0 },
  { icon: <BarChart3 className="w-5 h-5 text-cyan-500" />, name: 'Data and Analytics', slug: 'data-and-analytics', count: 0 },
  { icon: <Heart className="w-5 h-5 text-green-500" />, name: 'Health and Healthcare Innovation', slug: 'health-and-healthcare-innovation', count: 0 },
  { icon: <CloudSun className="w-5 h-5 text-blue-400" />, name: 'Cleaning and Sanitation Services', slug: 'cleaning-and-sanitation-services', count: 0 },
  { icon: <CloudSun className="w-5 h-5 text-green-400" />, name: 'Environment and Sustainability', slug: 'environment-and-sustainability', count: 0 },
  { icon: <Zap className="w-5 h-5 text-lime-500" />, name: 'Engineering and Construction', slug: 'engineering-and-construction', count: 0 },
  { icon: <Users className="w-5 h-5 text-cyan-500" />, name: 'Leadership and Management', slug: 'leadership-and-management', count: 0 },
  { icon: <Briefcase className="w-5 h-5 text-purple-500" />, name: 'Business, Strategy and Innovation', slug: 'business-strategy-and-innovation', count: 0 },
  { icon: <Globe className="w-5 h-5 text-green-500" />, name: 'Agriculture and Food System', slug: 'agriculture-and-food-system', count: 0 },
  { icon: <Target className="w-5 h-5 text-orange-500" />, name: 'Professional Development and Leadership', slug: 'professional-development-and-leadership', count: 0 },
  { icon: <Music className="w-5 h-5 text-pink-500" />, name: 'Music and Sound Production', slug: 'music-and-sound-production', count: 0 },
  { icon: <Sparkles className="w-5 h-5 text-purple-400" />, name: 'Art Design and Creative Media', slug: 'art-design-and-creative-media', count: 0 },
  { icon: <Award className="w-5 h-5 text-yellow-400" />, name: 'Drama, Theatre and Performance', slug: 'drama-theatre-and-performance', count: 0 },
  { icon: <UserPlus className="w-5 h-5 text-green-500" />, name: 'Mentorship & Career Readiness', slug: 'mentorship-career-readiness', count: 0 },
  { icon: <Layers className="w-5 h-5 text-purple-500" />, name: 'Specialized Industry Tracks', slug: 'specialized-industry-tracks', count: 0 },
  { icon: <Home className="w-5 h-5 text-yellow-500" />, name: 'Real Estate and Estate Management', slug: 'real-estate-and-estate-management', count: 0 },
  { icon: <Award className="w-5 h-5 text-yellow-400" />, name: 'Hospitality, Tourism and Events', slug: 'hospitality-tourism-and-events', count: 0 },
  { icon: <Shield className="w-5 h-5 text-red-500" />, name: 'Public Safety and Emergency Services', slug: 'public-safety-and-emergency-services', count: 0 },
  { icon: <Heart className="w-5 h-5 text-red-400" />, name: 'Sports, Fitness and Wellness', slug: 'sports-fitness-and-wellness', count: 0 },
  { icon: <Wrench className="w-5 h-5 text-gray-500" />, name: 'Vocational and Technical Training', slug: 'vocational-and-technical-training', count: 0 },
  { icon: <Heart className="w-5 h-5 text-pink-500" />, name: 'Social Care and Community Support', slug: 'social-care-and-community-support', count: 0 },
  { icon: <Users className="w-5 h-5 text-blue-400" />, name: 'Childhood Studies and Early Year Education', slug: 'childhood-studies-and-early-year-education', count: 0 },
  // OTHER section
  { icon: <BookOpen className="w-5 h-5 text-blue-500" />, name: 'Courses', slug: 'courses', count: 0 },
  { icon: <Users className="w-5 h-5 text-green-500" />, name: 'Workshops', slug: 'workshops', count: 0 },
  { icon: <UserPlus className="w-5 h-5 text-purple-500" />, name: 'Mentorship', slug: 'mentorship', count: 0 },
];

const CAREER_CATEGORIES = [
  { icon: <Users className="w-5 h-5 text-cyan-500" />, name: 'Leadership and Management', count: 0 },
  { icon: <UserPlus className="w-5 h-5 text-green-500" />, name: 'Mentorship & Career Readiness', count: 0 },
  { icon: <Layers className="w-5 h-5 text-purple-500" />, name: 'Specialised Industry Tracks', count: 0 },
  { icon: <Home className="w-5 h-5 text-yellow-500" />, name: 'Real Estate and Estate Management', count: 0 },
  { icon: <Shield className="w-5 h-5 text-red-500" />, name: 'Public Safety and Emergency Services', count: 0 },
  { icon: <Heart className="w-5 h-5 text-pink-500" />, name: 'Social Care and Community Support', count: 0 },
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
  { icon: <BookOpen className="w-6 h-6 text-purple-500" />, label: 'Creators Portal', desc: 'Manage your courses and track performance', to: '/creators-portal', badge: 'New' },
  { icon: <Video className="w-6 h-6 text-blue-500" />, label: 'Meet AI Video Calling Powered by AI Agents', desc: 'Experience AI-powered learning', to: '/ai-video-calling', badge: 'New' },
  { icon: <Globe className="w-6 h-6 text-green-500" />, label: 'Share Your Knowledge Globally', desc: 'Inspire learners worldwide and grow your teaching career with our global platform', to: '/instructor-application', badge: 'New' },
  { icon: <UserPlus className="w-6 h-6 text-purple-500" />, label: 'Become an Instructor', desc: 'Share your knowledge and earn revenue', to: '/instructor-application', badge: 'New' },
  { icon: <Users className="w-6 h-6 text-blue-500" />, label: 'Instructor Portal', desc: 'Access your instructor dashboard and tools', to: '/instructor-portal', badge: 'New' },
  { icon: <BookOpen className="w-6 h-6 text-red-500" />, label: 'Blogs', desc: 'News, insights, tips and stories from our platform' },
  { icon: <Home className="w-6 h-6 text-gray-500" />, label: 'Download the App', desc: 'Learn anywhere, anytime for free' },
  { icon: <Users className="w-6 h-6 text-green-500" />, label: 'Résumé Builder', desc: 'Create your professional résumé', badge: 'New' },
  { icon: <Target className="w-6 h-6 text-orange-500" />, label: 'Career Ready Plan', desc: 'Plan to achieve your career goals', badge: 'New' },
  { icon: <Star className="w-6 h-6 text-pink-500" />, label: 'Aptitude Test', desc: 'Assess your skills and abilities' },
  { icon: <Shield className="w-6 h-6 text-blue-500" />, label: 'Workplace Personality Assessment', desc: 'Discover your strengths & weaknesses' },
  { icon: <Heart className="w-6 h-6 text-rose-500" />, label: 'Mental Health Assessment', desc: 'Assess your mental wellbeing' },
  { icon: <BookOpen className="w-6 h-6 text-indigo-500" />, label: 'Learning Management System', desc: 'Up-skill and empower your team' },
  { icon: <Play className="w-6 h-6 text-cyan-500" />, label: 'Webinars', desc: 'Register for upcoming webinars' },
  { icon: <FileSearch className="w-6 h-6 text-red-500" />, label: 'Plagiarism Checker', desc: 'Premium AI-powered plagiarism detection', badge: 'Premium' },
  { icon: <FileCheck className="w-6 h-6 text-green-500" />, label: 'Grammar Checker', desc: 'Free AI grammar and style checker' },
  { icon: <Award className="w-6 h-6 text-yellow-500" />, label: 'Get Premium', desc: 'Remove ads' },
  { icon: <Users className="w-6 h-6 text-green-500" />, label: 'Graduate Profiles', desc: 'Read graduate success stories' },
  { icon: <Award className="w-6 h-6 text-purple-500" />, label: 'Certification', desc: 'View and verify course certificates', to: '/certification', badge: 'New' },
  { icon: <Target className="w-6 h-6 text-purple-500" />, label: 'How to Build a Growth Mindset', desc: 'Practical strategies for lifelong learning and personal development' },
  { icon: <Users className="w-6 h-6 text-blue-500" />, label: 'Community', desc: 'Connect with learners and share experiences' },
];

const PLATFORM_MENU = [
  { name: 'Course Library', href: '/courses', description: 'Browse our extensive course collection' },
  { name: 'AI Course Creator', href: '/dashboard/ai-course-creator', description: 'Create courses with AI assistance' },
  { name: 'Course Authoring Tool', href: '/course-authoring', description: 'Drag-and-drop course builder with templates' },
  { name: 'AI Video Calling', href: '/ai-video-calling', description: 'Connect with AI tutors and experts' },
  { name: 'Companion Library', href: '/companions', description: 'AI learning companions for personalised support' },
  { name: 'Whiteboard', href: '/whiteboard', description: 'Interactive whiteboard for collaborative learning' },
];

const renderStars = (rating) => {
  return Array.from({ length: 5 }, (_, i) => (
    <Star key={i} className={`w-4 h-4 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} />
  ));
};

const Navigation = () => {
  // Alison-style mega menu state and handlers
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [activeSubCategory, setActiveSubCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isSearchExpanded, setIsSearchExpanded] = useState(false);
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
    <nav className="bg-[#f0f4fa] dark:bg-[#11204a] text-[#0a1834] dark:text-white shadow-lg z-50 w-full nav-full-width">
      <div className="container-fluid">
        <div className="flex items-center justify-between h-16">
          {/* Logo and main nav */}
          <div className="flex items-center space-x-2 lg:space-x-4">
            <a href="/" className="flex items-center space-x-2 flex-shrink-0">
              <img src="/branding/logo.png" alt="OponMeta Symbol Logo" className="h-8 w-8 sm:h-10 sm:w-10 animate-swivel mr-2" />
              <span className="text-fluid-xl sm:text-fluid-2xl font-bold bg-gradient-to-r from-yellow-400 via-amber-400 to-yellow-600 bg-clip-text text-transparent">OponMeta</span>
            </a>
            
            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-3">
              {/* Explore Courses Dropdown */}
              <div
                className="relative group"
                onMouseEnter={() => setActiveCategory('courses')}
                onMouseLeave={() => { setActiveCategory(null); setActiveSubCategory(null); }}
              >
                                  <button className="flex items-center text-[#0a1834] dark:text-white hover:text-cyan-600 dark:hover:text-cyan-300 px-3 py-2 text-fluid-base nav-text transition-colors">
                    PROGRAMMES <ChevronDown className="ml-1 w-4 h-4" />
                  </button>
                {activeCategory === 'courses' && (
                  <div
                    className="absolute left-0 top-full z-50 bg-white dark:bg-[#16203a] shadow-lg rounded-xl mt-2 w-80 p-4 pointer-events-auto"
                    style={{ marginTop: '-2px' }}
                    onMouseEnter={() => setActiveCategory('courses')}
                    onMouseLeave={() => { setActiveCategory(null); setActiveSubCategory(null); }}
                  >
                    <div className="p-4 relative">
                      {/* CATEGORIES Section */}
                      <h3 className="text-fluid-xs font-semibold text-cyan-600 dark:text-cyan-300 mb-2">CATEGORIES</h3>
                      {COURSE_CATEGORIES.slice(0, 22).map((cat) => (
                        <div key={cat.name} className="flex items-center px-2 py-2 hover:bg-[#f0f4fa] dark:hover:bg-[#11204a] rounded cursor-pointer group relative"
                          onMouseEnter={() => setActiveSubCategory(cat.name)}
                          onMouseLeave={() => setActiveSubCategory(null)}>
                          {cat.icon}
                          <span className="ml-2 font-medium text-[#0a1834] dark:text-white flex-1">
                            <Link to={`/category/${cat.slug}`}>{cat.name}</Link>
                            <span className="text-xs text-cyan-600 dark:text-cyan-300 ml-1">({cat.count} Courses)</span>
                          </span>
                          <ChevronDown className="ml-1 w-4 h-4 group-hover:rotate-180 transition-transform" />
                        </div>
                      ))}
                      
                      {/* OTHER Section */}
                      <h3 className="text-xs font-semibold text-cyan-600 dark:text-cyan-300 mb-2 mt-4">OTHER</h3>
                      {COURSE_CATEGORIES.slice(22).map((cat) => (
                        <div key={cat.name} className="flex items-center px-2 py-2 hover:bg-[#f0f4fa] dark:hover:bg-[#11204a] rounded cursor-pointer group relative"
                          onMouseEnter={() => setActiveSubCategory(cat.name)}
                          onMouseLeave={() => setActiveSubCategory(null)}>
                          {cat.icon}
                          <span className="ml-2 font-medium text-[#0a1834] dark:text-white flex-1">
                            <Link to={`/category/${cat.slug}`}>{cat.name}</Link>
                            <span className="text-xs text-cyan-600 dark:text-cyan-300 ml-1">({cat.count} Courses)</span>
                          </span>
                          <ChevronDown className="ml-1 w-4 h-4 group-hover:rotate-180 transition-transform" />
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
                <button className="flex items-center text-[#0a1834] dark:text-white hover:text-cyan-600 dark:hover:text-cyan-300 px-3 py-2 text-fluid-base nav-text transition-colors">
                  Discover Careers <ChevronDown className="ml-1 w-4 h-4" />
                </button>
                {activeCategory === 'careers' && (
                  <div
                    className="absolute left-0 top-full z-50 bg-white dark:bg-[#16203a] shadow-lg rounded-xl mt-2 w-96 p-6 pointer-events-auto"
                    style={{ marginTop: '-2px' }}
                    onMouseEnter={() => setActiveCategory('careers')}
                    onMouseLeave={() => setActiveCategory(null)}
                  >
                    <div className="p-4">
                      <h3 className="text-xs font-semibold text-cyan-600 dark:text-cyan-300 mb-2">EXPLORE CAREER CATEGORIES</h3>
                      
                      {/* About Us Link at the top */}
                      <Link to="/about" className="flex items-center px-2 py-2 hover:bg-[#f0f4fa] dark:hover:bg-[#11204a] rounded cursor-pointer mb-3 border-b border-gray-200 dark:border-gray-700 pb-3">
                        <Target className="w-5 h-5 text-blue-600" />
                        <span className="ml-2 font-medium text-[#0a1834] dark:text-white flex-1">About Us</span>
                        <span className="text-xs text-cyan-600 dark:text-cyan-300 ml-1">(Company Info)</span>
                      </Link>
                      
                      {/* Workshops Link */}
                      <Link to="/workshops" className="flex items-center px-2 py-2 hover:bg-[#f0f4fa] dark:hover:bg-[#11204a] rounded cursor-pointer mb-3 border-b border-gray-200 dark:border-gray-700 pb-3">
                        <Users className="w-5 h-5 text-blue-600" />
                        <span className="ml-2 font-medium text-[#0a1834] dark:text-white flex-1">Workshops</span>
                        <span className="text-xs text-cyan-600 dark:text-cyan-300 ml-1">(Live Sessions)</span>
                      </Link>
                      
                      {/* Partners Link */}
                      <Link to="/partners" className="flex items-center px-2 py-2 hover:bg-[#f0f4fa] dark:hover:bg-[#11204a] rounded cursor-pointer mb-3 border-b border-gray-200 dark:border-gray-700 pb-3">
                        <Handshake className="w-5 h-5 text-green-600" />
                        <span className="ml-2 font-medium text-[#0a1834] dark:text-white flex-1">Our Partners</span>
                        <span className="text-xs text-cyan-600 dark:text-cyan-300 ml-1">(Collaborations)</span>
                      </Link>
                      
                      {CAREER_CATEGORIES.map((cat) => (
                        cat.count > 0 ? (
                          <Link key={cat.name} to={`/careers/${cat.name.toLowerCase().replace(/\s+/g, '-').replace(/&/g, 'and')}`} className="flex items-center px-2 py-2 hover:bg-[#f0f4fa] dark:hover:bg-[#11204a] rounded cursor-pointer">
                            {cat.icon}
                            <span className="ml-2 font-medium text-[#0a1834] dark:text-white flex-1">{cat.name} <span className="text-xs text-cyan-600 dark:text-cyan-300 ml-1">({cat.count} Careers)</span></span>
                          </Link>
                        ) : (
                          <div key={cat.name} className="flex items-center px-2 py-2 text-gray-400 cursor-not-allowed">
                            {cat.icon}
                            <span className="ml-2 font-medium text-gray-400 flex-1">{cat.name} <span className="text-xs ml-1">({cat.count} Careers)</span></span>
                          </div>
                        )
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
                <button className="flex items-center text-[#0a1834] dark:text-white hover:text-cyan-600 dark:hover:text-cyan-300 px-3 py-2 text-fluid-base nav-text transition-colors">
                  Platform <ChevronDown className="ml-1 w-4 h-4" />
                </button>
                {activeCategory === 'platform' && (
                  <div
                    className="absolute left-0 top-full z-50 bg-white dark:bg-[#16203a] shadow-lg rounded-xl mt-2 w-96 p-6 pointer-events-auto"
                    style={{ marginTop: '-2px' }}
                    onMouseEnter={() => setActiveCategory('platform')}
                    onMouseLeave={() => setActiveCategory(null)}
                  >
                    <div className="p-4">
                      <h3 className="text-xs font-semibold text-cyan-600 dark:text-cyan-300 mb-2">QUICK ACCESS</h3>
                      {PLATFORM_MENU.map((item) => (
                        item.href ? (
                          <Link key={item.name} to={item.href} className="flex items-center px-2 py-2 hover:bg-[#f0f4fa] dark:hover:bg-[#11204a] rounded cursor-pointer">
                            {item.name === 'Course Authoring Tool' ? <BookOpen className="w-5 h-5 text-blue-600" /> : item.name === 'AI Video Calling' ? <Video className="w-5 h-5 text-blue-600" /> : item.name === 'Companion Library' ? <Users className="w-5 h-5 text-blue-600" /> : item.name === 'Whiteboard' ? <Wrench className="w-5 h-5 text-blue-600" /> : item.name === 'Quiz Builder' ? <Sparkles className="w-5 h-5 text-blue-600" /> : item.name === 'Virtual Classroom' ? <Users className="w-5 h-5 text-blue-600" /> : item.name === 'Student Portal' ? <Users className="w-5 h-5 text-blue-600" /> : item.name === 'Instructor Dashboard' ? <Briefcase className="w-5 h-5 text-blue-600" /> : item.name === 'Analytics Dashboard' ? <BarChart3 className="w-5 h-5 text-blue-600" /> : item.name === 'Advanced Features' ? <Sparkles className="w-5 h-5 text-blue-600" /> : null}
                            <span className="ml-2 font-medium text-[#0a1834] dark:text-white">{item.name}</span>
                            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{item.description}</p>
                          </Link>
                        ) : (
                          <div key={item.name} className="flex items-center px-2 py-2 text-gray-400 cursor-not-allowed">
                            {item.name === 'Course Authoring Tool' ? <BookOpen className="w-5 h-5 text-blue-600" /> : item.name === 'AI Video Calling' ? <Video className="w-5 h-5 text-blue-600" /> : item.name === 'Companion Library' ? <Users className="w-5 h-5 text-blue-600" /> : item.name === 'Whiteboard' ? <Wrench className="w-5 h-5 text-blue-600" /> : item.name === 'Quiz Builder' ? <Sparkles className="w-5 h-5 text-blue-600" /> : item.name === 'Virtual Classroom' ? <Users className="w-5 h-5 text-blue-600" /> : item.name === 'Student Portal' ? <Users className="w-5 h-5 text-blue-600" /> : item.name === 'Instructor Dashboard' ? <Briefcase className="w-5 h-5 text-blue-600" /> : item.name === 'Analytics Dashboard' ? <BarChart3 className="w-5 h-5 text-blue-600" /> : item.name === 'Advanced Features' ? <Sparkles className="w-5 h-5 text-blue-600" /> : null}
                            <span className="ml-2 font-medium">{item.name}</span>
                            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{item.description}</p>
                          </div>
                        )
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
                <button className="flex items-center text-[#0a1834] dark:text-white hover:text-cyan-600 dark:hover:text-cyan-300 px-3 py-2 text-fluid-base nav-text transition-colors">
                  Resources <ChevronDown className="ml-1 w-4 h-4" />
                </button>
                {activeCategory === 'more' && (
                  <div
                    className="absolute left-0 top-full z-50 bg-white dark:bg-[#16203a] shadow-lg rounded-xl mt-2 w-96 p-6 pointer-events-auto"
                    style={{ marginTop: '-2px' }}
                    onMouseEnter={() => setActiveCategory('more')}
                    onMouseLeave={() => setActiveCategory(null)}
                  >
                    <div className="p-4">
                      {MORE_MENU.map((item) => {
                        if (item.to) {
                          return (
                            <Link key={item.label} to={item.to} className="flex items-center px-2 py-2 hover:bg-[#f0f4fa] dark:hover:bg-[#11204a] rounded cursor-pointer">
                              {item.icon}
                              <span className="ml-2 font-medium text-[#0a1834] dark:text-white flex-1">{item.label}</span>
                              {item.badge && <span className="ml-2 text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded">{item.badge}</span>}
                              <span className="ml-2 text-xs text-cyan-600 dark:text-cyan-300">{item.desc}</span>
                            </Link>
                          );
                        } else {
                          return (
                            <div key={item.label} className="flex items-center px-2 py-2 text-gray-400 cursor-not-allowed">
                              {item.icon}
                              <span className="ml-2 font-medium flex-1">{item.label}</span>
                              {item.badge && <span className="ml-2 text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded">{item.badge}</span>}
                              <span className="ml-2 text-xs">{item.desc}</span>
                            </div>
                          );
                        }
                      })}
                    </div>
                  </div>
                )}
              </div>
            </nav>
          </div>
          
          {/* Search and right controls */}
          <div className="flex items-center space-x-2">
            {/* Collapsible Search Bar */}
            <div className="hidden md:flex items-center">
              {!isSearchExpanded ? (
                <button
                  onClick={() => setIsSearchExpanded(true)}
                  className="flex items-center bg-white dark:bg-[#16203a] rounded-lg px-2 py-2 shadow-sm hover:shadow-md transition-all duration-200 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                >
                  <Search className="w-4 h-4 mr-1" />
                  <span className="text-fluid-sm">Search...</span>
                  <div className="flex items-center space-x-1 ml-1 text-xs">
                    <span className="px-1 py-0.5 bg-gray-100 dark:bg-gray-700 rounded">⌘</span>
                    <span className="px-1 py-0.5 bg-gray-100 dark:bg-gray-700 rounded">K</span>
                  </div>
                </button>
              ) : (
                <div className="flex items-center bg-white dark:bg-[#16203a] rounded-lg px-2 py-2 shadow-sm transition-all duration-200">
                  <Search className="w-4 h-4 text-gray-400 mr-1" />
                  <input
                    type="text"
                    placeholder="Search courses, tools, features..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="bg-transparent outline-none text-gray-800 dark:text-white w-40 lg:w-48 placeholder-gray-400"
                    autoFocus
                    onBlur={() => setIsSearchExpanded(false)}
                  />
                  <button
                    onClick={() => setIsSearchExpanded(false)}
                    className="ml-1 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              )}
            </div>
            
            {/* Language Selector */}
            <div className="hidden md:flex items-center relative">
              <button
                ref={langBtnRef}
                onClick={() => setIsLangOpen(!isLangOpen)}
                className="flex items-center space-x-1 px-2 py-2 rounded-lg hover:bg-white/10 transition-colors text-[#0a1834] dark:text-white"
                aria-label="Select language"
              >
                <Globe className="w-4 h-4" />
                <span className="text-fluid-sm font-medium">
                  {languages.find(lang => lang.code === i18n.language)?.label || 'EN'}
                </span>
                <ChevronDown className="w-3 h-3" />
              </button>
              
              {isLangOpen && (
                <div
                  ref={langMenuRef}
                  className="absolute top-full right-0 mt-1 w-48 bg-white dark:bg-[#16203a] border border-gray-200 dark:border-gray-600 rounded-lg shadow-lg z-50"
                >
                  {languages.map((language) => (
                    <button
                      key={language.code}
                      onClick={() => {
                        i18n.changeLanguage(language.code);
                        setIsLangOpen(false);
                      }}
                      className="w-full flex items-center space-x-3 px-4 py-3 text-left hover:bg-gray-50 dark:hover:bg-[#1a2a4a] transition-colors first:rounded-t-lg last:rounded-b-lg"
                    >
                      <span className="text-lg">{language.flag}</span>
                      <div className="flex-1">
                        <div className="text-sm font-medium text-[#0a1834] dark:text-white">
                          {language.name}
                        </div>
                        <div className="text-xs text-gray-500 dark:text-gray-400">
                          {language.label}
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Theme Toggle */}
            <div className="hidden md:flex items-center">
              <button
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="p-2 rounded-lg hover:bg-white/10 transition-colors text-[#0a1834] dark:text-white"
                aria-label="Toggle dark mode"
              >
                {theme === 'dark' ? <Sun className="w-5 h-5 text-yellow-500" /> : <Moon className="w-5 h-5 text-gray-700" />}
              </button>
            </div>
            
            {/* Auth Buttons */}
            <div className="flex items-center space-x-1">
              <Link
                to="/signin"
                className="px-2 py-2 rounded-lg text-[#0a1834] dark:text-white bg-white dark:bg-[#16203a] hover:bg-gray-100 dark:hover:bg-[#1a2a4a] shadow transition-colors border border-gray-200 dark:border-gray-600 text-fluid-sm truncate btn-text"
              >
                Sign In
              </Link>
              <Link
                to="/signup"
                className="px-2 py-2 rounded-lg text-white bg-[#0a1834] dark:bg-[#11204a] hover:bg-[#1a2a4a] dark:hover:bg-[#1a2a4a] shadow transition-colors text-fluid-sm truncate btn-text"
              >
                Get Started
              </Link>
            </div>
            
            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-md text-[#0a1834] dark:text-white hover:bg-white/10 transition-colors"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
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
        <div className="lg:hidden bg-[#f0f4fa] dark:bg-[#11204a] border-t border-gray-200 dark:border-gray-700 mobile-menu-content">
          <div className="px-4 py-6 space-y-4">
            {/* Mobile Search */}
            <div className="flex items-center bg-white dark:bg-[#16203a] rounded-lg px-4 py-3 shadow-sm">
              <Search className="w-5 h-5 text-gray-400 mr-3" />
              <input
                type="text"
                placeholder="Search courses, tools, features..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-transparent outline-none text-gray-800 dark:text-white w-full placeholder-gray-400 text-base"
                onFocus={() => setIsSearchExpanded(true)}
              />
              {isSearchExpanded && (
                <button
                  onClick={() => setIsSearchExpanded(false)}
                  className="ml-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 p-1"
                >
                  <X className="w-5 h-5" />
                </button>
              )}
            </div>
            
            {/* Mobile Navigation Links */}
            <div className="space-y-3">
              <Link to="/" className="block px-4 py-3 text-[#0a1834] dark:text-white hover:bg-white/10 rounded-lg transition-colors text-fluid-base font-medium">
                Home
              </Link>
              <Link to="/courses" className="block px-4 py-3 text-[#0a1834] dark:text-white hover:bg-white/10 rounded-lg transition-colors text-fluid-base font-medium">
                Courses
              </Link>
              <Link to="/workshops" className="block px-4 py-3 text-[#0a1834] dark:text-white hover:bg-white/10 rounded-lg transition-colors text-fluid-base font-medium">
                Workshops
              </Link>
              <Link to="/about" className="block px-4 py-3 text-[#0a1834] dark:text-white hover:bg-white/10 rounded-lg transition-colors text-fluid-base font-medium">
                About Us
              </Link>
              <Link to="/partners" className="block px-4 py-3 text-[#0a1834] dark:text-white hover:bg-white/10 rounded-lg transition-colors text-fluid-base font-medium">
                Partners
              </Link>
              <Link to="/creators-portal" className="block px-4 py-3 text-[#0a1834] dark:text-white hover:bg-white/10 rounded-lg transition-colors text-fluid-base font-medium">
                Creators Portal
              </Link>
              <Link to="/instructor-portal" className="block px-4 py-3 text-[#0a1834] dark:text-white hover:bg-white/10 rounded-lg transition-colors text-fluid-base font-medium">
                Instructor Portal
              </Link>
              <Link to="/student-portal" className="block px-4 py-3 text-[#0a1834] dark:text-white hover:bg-white/10 rounded-lg transition-colors text-fluid-base font-medium">
                Student Portal
              </Link>
              <Link to="/ai-video-calling" className="block px-4 py-3 text-[#0a1834] dark:text-white hover:bg-white/10 rounded-lg transition-colors text-fluid-base font-medium">
                AI Video Calling
              </Link>
              <Link to="/certification" className="block px-4 py-3 text-[#0a1834] dark:text-white hover:bg-white/10 rounded-lg transition-colors text-fluid-base font-medium">
                Certification
              </Link>
            </div>
            
            {/* Mobile Language Selector */}
            <div className="pt-6 border-t border-gray-200 dark:border-gray-700">
              <div className="px-4 py-3">
                <span className="text-sm text-[#0a1834] dark:text-white font-semibold">Language</span>
                <div className="mt-3 space-y-2">
                  {languages.map((language) => (
                    <button
                      key={language.code}
                      onClick={() => {
                        i18n.changeLanguage(language.code);
                        setIsMenuOpen(false);
                      }}
                      className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                        i18n.language === language.code
                          ? 'bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300'
                          : 'hover:bg-gray-50 dark:hover:bg-[#1a2a4a] text-[#0a1834] dark:text-white'
                      }`}
                    >
                      <span className="text-lg">{language.flag}</span>
                      <span className="text-sm font-medium">{language.name}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Mobile Theme Toggle */}
            <div className="pt-6 border-t border-gray-200 dark:border-gray-700">
              <div className="flex items-center justify-between px-4 py-3">
                <span className="text-sm text-[#0a1834] dark:text-white font-semibold">Theme</span>
                <button
                  onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                  className="flex items-center space-x-3 px-4 py-3 rounded-lg hover:bg-white/10 transition-colors"
                >
                  {theme === 'dark' ? <Sun className="w-5 h-5 text-yellow-500" /> : <Moon className="w-5 h-5 text-gray-700" />}
                  <span className="text-sm text-[#0a1834] dark:text-white font-medium">
                    {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;