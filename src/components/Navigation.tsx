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
  { name: 'Quiz Builder', href: '/quiz-builder', description: 'Create interactive assessments and quizzes' },
  { name: 'Virtual Classroom', href: '/virtual-classroom', description: 'Real-time virtual learning environment' },
  { name: 'Student Portal', href: '/student-portal', description: 'Access your learning dashboard and progress' },
  { name: 'Instructor Dashboard', href: '/instructor-portal', description: 'Manage your courses and students' },
  { name: 'Analytics Dashboard', href: '/dashboard/analytics', description: 'Track learning progress and performance' },
  { name: 'Advanced Features', href: '/advanced-features', description: 'Explore advanced learning tools and features' }
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
        <div className="w-full flex items-center justify-between px-6 py-2">
          {/* Logo and main nav */}
          <div className="flex items-center space-x-8">
            <a href="/" className="flex items-center space-x-2">
              <img src="/branding/logo.png" alt="OponMeta Symbol Logo" className="h-10 w-10 animate-swivel mr-2" />
              <span className="text-2xl font-bold bg-gradient-to-r from-yellow-400 via-amber-400 to-yellow-600 bg-clip-text text-transparent">OponMeta</span>
            </a>
            <nav className="flex items-center space-x-6">
              {/* Explore Courses Dropdown */}
              <div
                className="relative group"
                onMouseEnter={() => setActiveCategory('courses')}
                onMouseLeave={() => { setActiveCategory(null); setActiveSubCategory(null); }}
              >
                <button className="flex items-center text-[#0a1834] dark:text-white hover:text-cyan-600 dark:hover:text-cyan-300 px-3 py-2 text-base font-medium transition-colors">
                  PROGRAMMES <ChevronDown className="ml-1 w-4 h-4" />
                </button>
                {activeCategory === 'courses' && (
                  <div
                    className="absolute left-0 top-full z-50 bg-white dark:bg-[#16203a] shadow-lg rounded-xl mt-2 w-96 p-6 pointer-events-auto"
                    style={{ marginTop: '-2px' }}
                    onMouseEnter={() => setActiveCategory('courses')}
                    onMouseLeave={() => { setActiveCategory(null); setActiveSubCategory(null); }}
                  >
                    <div className="p-4 relative">
                      {/* CATEGORIES Section */}
                      <h3 className="text-xs font-semibold text-cyan-600 dark:text-cyan-300 mb-2">CATEGORIES</h3>
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
                <button className="flex items-center text-[#0a1834] dark:text-white hover:text-cyan-600 dark:hover:text-cyan-300 px-3 py-2 text-base font-medium transition-colors">
                  Resources <ChevronDown className="ml-1 w-4 h-4" />
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
                        item.to ? (
                          <Link key={item.label} to={item.to} className="flex items-center px-2 py-2 hover:bg-[#f0f4fa] dark:hover:bg-[#11204a] rounded cursor-pointer">
                            {item.icon}
                            <span className="ml-2 font-medium text-[#0a1834] dark:text-white flex-1">{item.label}</span>
                            {item.badge && <span className="ml-2 text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded">{item.badge}</span>}
                            <span className="ml-2 text-xs text-cyan-600 dark:text-cyan-300">{item.desc}</span>
                          </Link>
                        ) : (
                          <div key={item.label} className="flex items-center px-2 py-2 text-gray-400 cursor-not-allowed">
                            {item.icon}
                            <span className="ml-2 font-medium flex-1">{item.label}</span>
                            {item.badge && <span className="ml-2 text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded">{item.badge}</span>}
                            <span className="ml-2 text-xs">{item.desc}</span>
                          </div>
                        )
                      ))}
                    </div>
                  </div>
                )}
              </div>
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
              href="/signin"
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