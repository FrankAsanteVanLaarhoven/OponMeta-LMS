import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { 
  Home, 
  BookOpen, 
  ShoppingBag, 
  Calendar, 
  Star, 
  Trophy, 
  Wallet, 
  MessageSquare, 
  Bot, 
  Settings, 
  Plus,
  Search,
  Bell,
  User,
  ChevronRight,
  Play,
  Clock,
  CheckCircle,
  Bookmark,
  Download,
  Upload,
  ArrowLeft,
  ArrowRight,
  FileText,
  Video,
  Headphones,
  File,
  Award,
  Target,
  TrendingUp,
  BarChart3,
  Users,
  Globe,
  Zap,
  Shield,
  CreditCard,
  MapPin,
  Edit,
  Eye,
  Download as DownloadIcon,
  Bookmark as BookmarkIcon,
  Share,
  MoreHorizontal,
  Volume2,
  Maximize,
  Minimize,
  SkipBack,
  SkipForward,
  Pause,
  RotateCcw,
  Settings as SettingsIcon,
  HelpCircle,
  MessageCircle,
  ThumbsUp,
  ThumbsDown,
  Flag,
  Star as StarIcon,
  X
} from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

// Import all widget components
import {
  AnnouncementsWidget,
  InstructorsWidget,
  FoldersWidget,
  LearningPathWidget,
  LibraryWidget,
  ReadyToUseCoursesWidget,
  AutomationWidget,
  GamificationWidget,
  TrainingCalendarWidget,
  TrashWidget
} from '@/components/StudentPortalWidgets';

const StudentPortal = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeTab, setActiveTab] = useState('dashboard');
  const [settingsTab, setSettingsTab] = useState('profile');
  const [activeWidget, setActiveWidget] = useState<string | null>(null);
  const [showSidebar, setShowSidebar] = useState(false);

  // Handle URL parameters for direct navigation
  useEffect(() => {
    const path = location.pathname;
    const tabFromUrl = path.split('/').pop();
    
    // Map URL segments to tab names
    const tabMapping: { [key: string]: string } = {
      'dashboard': 'dashboard',
      'courses': 'my-courses',
      'marketplace': 'marketplace',
      'bookings': 'bookings',
      'progress': 'progress',
      'achievements': 'achievements',
      'wallet': 'wallet',
      'social': 'social',
      'ai-companions': 'ai-companions',
      'companions': 'ai-companions',
      'settings': 'settings'
    };

    if (tabFromUrl && tabMapping[tabFromUrl]) {
      setActiveTab(tabMapping[tabFromUrl]);
    } else if (path === '/student-portal') {
      setActiveTab('dashboard');
    }
  }, [location.pathname]);

  // Update URL when tab changes
  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    // Update URL without causing a page reload
    const tabMapping: { [key: string]: string } = {
      'dashboard': 'dashboard',
      'my-courses': 'courses',
      'marketplace': 'marketplace',
      'bookings': 'bookings',
      'progress': 'progress',
      'achievements': 'achievements',
      'wallet': 'wallet',
      'social': 'social',
      'ai-companions': 'ai-companions',
      'settings': 'settings'
    };
    
    const urlSegment = tabMapping[tab] || 'dashboard';
    navigate(`/student-portal/${urlSegment}`, { replace: true });
  };

  const enrolledCourses = [
    {
      id: 1,
      title: "Complete Web Development Bootcamp",
      instructor: "Dr. Angela Yu",
      progress: 65,
      lastAccessed: "2 hours ago",
      totalModules: 12,
      completedModules: 8,
      thumbnail: "/images/web-dev-course.jpg",
      category: "Programming",
      rating: 4.8,
      students: 125000
    },
    {
      id: 2,
      title: "Data Science and Machine Learning",
      instructor: "Jose Portilla",
      progress: 23,
      lastAccessed: "1 day ago",
      totalModules: 15,
      completedModules: 3,
      thumbnail: "/images/data-science-course.jpg",
      category: "Data Science",
      rating: 4.9,
      students: 89000
    },
    {
      id: 3,
      title: "Digital Marketing Masterclass",
      instructor: "Phil Ebiner",
      progress: 100,
      lastAccessed: "3 days ago",
      totalModules: 8,
      completedModules: 8,
      thumbnail: "/images/marketing-course.jpg",
      category: "Marketing",
      rating: 4.7,
      students: 67000
    }
  ];

  const recentActivity = [
    { type: 'course_progress', message: 'Completed Module 5 in Web Development Bootcamp', time: '2 hours ago' },
    { type: 'course_started', message: 'Started Data Science and Machine Learning course', time: '1 day ago' },
    { type: 'achievement', message: 'Earned "Quick Learner" badge', time: '2 days ago' },
    { type: 'certificate', message: 'Received certificate for Digital Marketing Masterclass', time: '3 days ago' }
  ];

  const navigationItems = [
    { id: 'dashboard', label: 'Dashboard', icon: <Home className="w-5 h-5" /> },
    { id: 'my-courses', label: 'My Courses', icon: <BookOpen className="w-5 h-5" /> },
    { id: 'marketplace', label: 'Course Marketplace', icon: <ShoppingBag className="w-5 h-5" /> },
    { id: 'bookings', label: 'Bookings', icon: <Calendar className="w-5 h-5" /> },
    { id: 'progress', label: 'Progress', icon: <Star className="w-5 h-5" /> },
    { id: 'achievements', label: 'Achievements', icon: <Trophy className="w-5 h-5" /> },
    { id: 'wallet', label: 'Wallet', icon: <Wallet className="w-5 h-5" /> },
    { id: 'social', label: 'Social', icon: <MessageSquare className="w-5 h-5" /> },
    { id: 'ai-companions', label: 'AI Companions', icon: <Bot className="w-5 h-5" /> },
    { id: 'settings', label: 'Settings', icon: <Settings className="w-5 h-5" /> }
  ];

  const sidebarWidgets = [
    { id: 'announcements', name: 'Announcements', icon: <Bell className="w-4 h-4" />, component: AnnouncementsWidget },
    { id: 'instructors', name: 'Instructors', icon: <Users className="w-4 h-4" />, component: InstructorsWidget },
    { id: 'folders', name: 'Folders', icon: <FileText className="w-4 h-4" />, component: FoldersWidget },
    { id: 'learning-path', name: 'Learning Path', icon: <Target className="w-4 h-4" />, component: LearningPathWidget },
    { id: 'library', name: 'Library', icon: <BookOpen className="w-4 h-4" />, component: LibraryWidget },
    { id: 'ready-courses', name: 'Ready to Use Courses', icon: <Play className="w-4 h-4" />, component: ReadyToUseCoursesWidget },
    { id: 'automation', name: 'Automation', icon: <Zap className="w-4 h-4" />, component: AutomationWidget },
    { id: 'gamification', name: 'Gamification', icon: <Award className="w-4 h-4" />, component: GamificationWidget },
    { id: 'training-calendar', name: 'Training Calendar', icon: <Calendar className="w-4 h-4" />, component: TrainingCalendarWidget },
    { id: 'trash', name: 'Trash', icon: <File className="w-4 h-4" />, component: TrashWidget }
  ];

  const settingsTabs = [
    { id: 'profile', label: 'Profile', icon: <User className="w-4 h-4" /> },
    { id: 'notifications', label: 'Notifications', icon: <Bell className="w-4 h-4" /> },
    { id: 'security', label: 'Security', icon: <Shield className="w-4 h-4" /> },
    { id: 'billing', label: 'Billing', icon: <CreditCard className="w-4 h-4" /> }
  ];

  const handleWidgetClick = (widgetId: string) => {
    setActiveWidget(widgetId);
    setShowSidebar(true);
  };

  const renderWidgetContent = () => {
    if (!activeWidget) return null;
    
    const widget = sidebarWidgets.find(w => w.id === activeWidget);
    if (!widget) return null;

    const WidgetComponent = widget.component;
    
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
        <div className="bg-gray-900 rounded-lg w-full max-w-4xl max-h-[90vh] overflow-hidden">
          <div className="flex items-center justify-between p-6 border-b border-gray-800">
            <div className="flex items-center space-x-3">
              {widget.icon}
              <h2 className="text-xl font-semibold text-white">{widget.name}</h2>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setShowSidebar(false)}
              className="text-gray-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </Button>
          </div>
          <div className="p-6 overflow-y-auto max-h-[calc(90vh-80px)]">
            <WidgetComponent />
          </div>
        </div>
      </div>
    );
  };

  const renderDashboard = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="bg-gray-800 border-gray-700">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-300">Enrolled Courses</p>
                <p className="text-2xl font-bold text-white">{enrolledCourses.length}</p>
              </div>
              <BookOpen className="w-8 h-8 text-blue-400" />
            </div>
          </CardContent>
        </Card>
        
        <Card className="bg-gray-800 border-gray-700">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-300">Total Progress</p>
                <p className="text-2xl font-bold text-white">62%</p>
              </div>
              <TrendingUp className="w-8 h-8 text-green-400" />
            </div>
          </CardContent>
        </Card>
        
        <Card className="bg-gray-800 border-gray-700">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-300">Study Time</p>
                <p className="text-2xl font-bold text-white">24h</p>
              </div>
              <Clock className="w-8 h-8 text-purple-400" />
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="bg-gray-800 border-gray-700">
          <CardHeader>
            <CardTitle className="text-white">Continue Learning</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {enrolledCourses.slice(0, 2).map((course) => (
                <div key={course.id} className="flex items-center space-x-4 p-4 border border-gray-700 rounded-lg hover:bg-gray-750 cursor-pointer" onClick={() => navigate(`/course-workspace/${course.id}`)}>
                  <div className="w-16 h-12 bg-gray-700 rounded flex items-center justify-center">
                    <Play className="w-6 h-6 text-gray-300" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-white">{course.title}</h3>
                    <p className="text-sm text-gray-300">Progress: {course.progress}%</p>
                    <div className="w-full bg-gray-700 rounded-full h-2 mt-1">
                      <div className="bg-blue-600 h-2 rounded-full" style={{ width: `${course.progress}%` }}></div>
                    </div>
                  </div>
                  <ChevronRight className="w-5 h-5 text-gray-400" />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gray-800 border-gray-700">
          <CardHeader>
            <CardTitle className="text-white">Recent Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivity.map((activity, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                  <div className="flex-1">
                    <p className="text-sm text-white">{activity.message}</p>
                    <p className="text-xs text-gray-400">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );

  const renderMyCourses = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-white">My Courses</h2>
        <Button onClick={() => navigate('/course-marketplace')} className="bg-blue-600 hover:bg-blue-700 text-white">
          <Plus className="w-4 h-4 mr-2" />
          Browse More Courses
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {enrolledCourses.map((course) => (
          <Card key={course.id} className="bg-gray-800 border-gray-700 hover:bg-gray-750 transition-shadow cursor-pointer" onClick={() => navigate(`/course-workspace/${course.id}`)}>
            <div className="h-48 bg-gray-700 rounded-t-lg flex items-center justify-center">
              <Play className="w-12 h-12 text-gray-400" />
            </div>
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-2">
                <Badge variant="secondary" className="bg-gray-600 text-white">{course.category}</Badge>
                <div className="flex items-center space-x-1">
                  <StarIcon className="w-4 h-4 text-yellow-400 fill-current" />
                  <span className="text-sm text-white">{course.rating}</span>
                </div>
              </div>
              <h3 className="font-semibold text-white mb-2">{course.title}</h3>
              <p className="text-sm text-gray-300 mb-3">by {course.instructor}</p>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-300">Progress</span>
                  <span className="text-white font-medium">{course.progress}%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div className="bg-blue-600 h-2 rounded-full" style={{ width: `${course.progress}%` }}></div>
                </div>
                <div className="flex justify-between text-sm text-gray-300">
                  <span>{course.completedModules}/{course.totalModules} modules</span>
                  <span>Last accessed {course.lastAccessed}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );

  const renderSettings = () => (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-white mb-2">Settings</h2>
        <p className="text-gray-300">Manage your account preferences and security settings</p>
      </div>

      <div className="flex space-x-1 border-b border-gray-700">
        {settingsTabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setSettingsTab(tab.id)}
            className={`flex items-center space-x-2 px-6 py-3 font-medium transition-colors ${
              settingsTab === tab.id
                ? 'text-blue-400 border-b-2 border-blue-400'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            {tab.icon}
            <span>{tab.label}</span>
          </button>
        ))}
      </div>

      {settingsTab === 'billing' && (
        <div className="space-y-6">
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle className="text-white">Billing & Subscription</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="font-semibold text-white mb-3">Current Plan</h3>
                <div className="bg-blue-900/50 border border-blue-700 rounded-lg p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-xl font-bold text-blue-200">Premium</h4>
                      <p className="text-sm text-blue-300">Next billing: 15/02/2024</p>
                    </div>
                    <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                      Manage Plan
                    </Button>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-white mb-3">Payment Method</h3>
                <div className="border border-gray-700 rounded-lg p-4 bg-gray-750">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <CreditCard className="w-6 h-6 text-blue-400" />
                      <div>
                        <p className="font-medium text-white">Visa ending in 4242</p>
                        <p className="text-sm text-gray-300">Expires 12/25</p>
                      </div>
                    </div>
                    <Button variant="outline" className="text-white border-gray-600 hover:bg-gray-700">
                      Edit
                    </Button>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-white mb-3">Billing Address</h3>
                <div className="border border-gray-700 rounded-lg p-4 bg-gray-750">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-white">123 Main St</p>
                      <p className="text-white">San Francisco, CA 94105</p>
                      <p className="text-white">United States</p>
                    </div>
                    <Button variant="outline" className="text-white border-gray-600 hover:bg-gray-700">
                      Edit Address
                    </Button>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-white mb-3">Billing History</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 border border-gray-700 rounded-lg bg-gray-750">
                    <div>
                      <p className="font-medium text-white">Premium Plan - Monthly</p>
                      <p className="text-sm text-gray-300">January 15, 2024</p>
                    </div>
                    <div className="text-right">
                      <p className="font-medium text-white">$29.99</p>
                      <Badge className="bg-green-900 text-green-200">Paid</Badge>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-3 border border-gray-700 rounded-lg bg-gray-750">
                    <div>
                      <p className="font-medium text-white">Premium Plan - Monthly</p>
                      <p className="text-sm text-gray-300">December 15, 2023</p>
                    </div>
                    <div className="text-right">
                      <p className="font-medium text-white">$29.99</p>
                      <Badge className="bg-green-900 text-green-200">Paid</Badge>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );

  return (
    <div className="min-h-screen bg-[#0a1834]">
      <div className="flex">
        {/* Sidebar */}
        <div className="w-64 bg-gray-900 border-r border-gray-800 min-h-screen">
          <div className="p-6">
            <h1 className="text-xl font-bold text-white mb-8">Student Portal</h1>
            
            <div className="space-y-2">
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Learning</p>
              {navigationItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleTabChange(item.id)}
                  className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-left transition-colors ${
                    activeTab === item.id
                      ? 'bg-blue-600/20 text-blue-400'
                      : 'text-gray-300 hover:bg-gray-800 hover:text-white'
                  }`}
                >
                  {item.icon}
                  <span className="font-medium">{item.label}</span>
                </button>
              ))}
            </div>

            <div className="mt-8 space-y-2">
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Instructor Tools</p>
              <button className="w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-left text-gray-300 hover:bg-gray-800 hover:text-white transition-colors">
                <Plus className="w-5 h-5" />
                <span className="font-medium">Create Course</span>
              </button>
            </div>

            {/* Widget Sidebar */}
            <div className="mt-8 space-y-2">
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Quick Access</p>
              {sidebarWidgets.map((widget) => (
                <button
                  key={widget.id}
                  onClick={() => handleWidgetClick(widget.id)}
                  className="w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-left text-gray-300 hover:bg-gray-800 hover:text-white transition-colors"
                >
                  {widget.icon}
                  <span className="font-medium">{widget.name}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1">
          {/* Header */}
          <div className="bg-gray-900 border-b border-gray-800 px-6 py-4">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold text-white">
                {activeTab === 'dashboard' && 'Dashboard'}
                {activeTab === 'my-courses' && 'My Courses'}
                {activeTab === 'marketplace' && 'Course Marketplace'}
                {activeTab === 'bookings' && 'Bookings'}
                {activeTab === 'progress' && 'Learning Progress'}
                {activeTab === 'achievements' && 'Achievements & Badges'}
                {activeTab === 'wallet' && 'Wallet & Transactions'}
                {activeTab === 'social' && 'Social Learning'}
                {activeTab === 'ai-companions' && 'AI Learning Companions'}
                {activeTab === 'settings' && 'Settings'}
              </h2>
              
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <Input
                    placeholder="Search courses, tools, features"
                    className="w-80 bg-gray-800 border-gray-700 text-white placeholder-gray-400"
                  />
                  <Search className="w-4 h-4 absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                </div>
                <button className="relative p-2 text-gray-300 hover:text-white">
                  <Bell className="w-5 h-5" />
                  <div className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></div>
                </button>
                <button className="p-2 text-gray-300 hover:text-white">
                  <User className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Page Content */}
          <div className="p-6">
            {activeTab === 'dashboard' && renderDashboard()}
            {activeTab === 'my-courses' && renderMyCourses()}
            {activeTab === 'settings' && renderSettings()}
            {activeTab === 'marketplace' && (
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <h2 className="text-2xl font-bold text-white">Course Marketplace</h2>
                  <div className="flex space-x-2">
                    <Input placeholder="Search courses..." className="w-64 bg-gray-800 border-gray-700 text-white" />
                    <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                      <Search className="w-4 h-4 mr-2" />
                      Search
                    </Button>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[
                    {
                      id: 1,
                      title: "Complete React Development Bootcamp",
                      instructor: "Max Johnson",
                      price: 89.99,
                      originalPrice: 129.99,
                      rating: 4.9,
                      students: 12500,
                      category: "Programming",
                      duration: "42 hours",
                      image: "/courses/react.jpg"
                    },
                    {
                      id: 2,
                      title: "Python for Data Science",
                      instructor: "Dr. Lisa Wang",
                      price: 79.99,
                      originalPrice: 99.99,
                      rating: 4.8,
                      students: 8900,
                      category: "Data Science",
                      duration: "38 hours",
                      image: "/courses/python.jpg"
                    },
                    {
                      id: 3,
                      title: "UI/UX Design Masterclass",
                      instructor: "Alex Chen",
                      price: 69.99,
                      originalPrice: 89.99,
                      rating: 4.7,
                      students: 6700,
                      category: "Design",
                      duration: "35 hours",
                      image: "/courses/design.jpg"
                    },
                    {
                      id: 4,
                      title: "Digital Marketing Strategy",
                      instructor: "Sarah Miller",
                      price: 59.99,
                      originalPrice: 79.99,
                      rating: 4.6,
                      students: 5400,
                      category: "Marketing",
                      duration: "28 hours",
                      image: "/courses/marketing.jpg"
                    },
                    {
                      id: 5,
                      title: "Machine Learning Fundamentals",
                      instructor: "Dr. Michael Brown",
                      price: 99.99,
                      originalPrice: 149.99,
                      rating: 4.9,
                      students: 7800,
                      category: "AI/ML",
                      duration: "45 hours",
                      image: "/courses/ml.jpg"
                    },
                    {
                      id: 6,
                      title: "Web Development with Node.js",
                      instructor: "David Wilson",
                      price: 74.99,
                      originalPrice: 94.99,
                      rating: 4.7,
                      students: 6200,
                      category: "Programming",
                      duration: "32 hours",
                      image: "/courses/nodejs.jpg"
                    }
                  ].map((course) => (
                    <Card key={course.id} className="bg-gray-800 border-gray-700 hover:bg-gray-750 transition-shadow cursor-pointer">
                      <div className="h-48 bg-gray-700 rounded-t-lg flex items-center justify-center">
                        <Play className="w-12 h-12 text-gray-400" />
                      </div>
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between mb-2">
                          <Badge variant="secondary" className="bg-gray-600 text-white">{course.category}</Badge>
                          <div className="flex items-center space-x-1">
                            <StarIcon className="w-4 h-4 text-yellow-400 fill-current" />
                            <span className="text-sm text-white">{course.rating}</span>
                          </div>
                        </div>
                        <h3 className="font-semibold text-white mb-2">{course.title}</h3>
                        <p className="text-sm text-gray-300 mb-3">by {course.instructor}</p>
                        <div className="flex items-center justify-between text-sm text-gray-300 mb-3">
                          <span>{course.duration}</span>
                          <span>{course.students} students</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-1">
                            <span className="text-lg font-bold text-white">${course.price}</span>
                            <span className="text-sm text-gray-400 line-through">${course.originalPrice}</span>
                          </div>
                          <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white">
                            Enroll Now
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            )}
            
            {activeTab === 'bookings' && (
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <h2 className="text-2xl font-bold text-white">My Bookings</h2>
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                    <Plus className="w-4 h-4 mr-2" />
                    Book New Session
                  </Button>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {[
                    {
                      id: 1,
                      title: "1-on-1 Tutoring Session",
                      instructor: "Dr. Sarah Chen",
                      date: "2024-01-25",
                      time: "14:00",
                      duration: "60 minutes",
                      status: "confirmed",
                      type: "tutoring"
                    },
                    {
                      id: 2,
                      title: "Group Study Session",
                      instructor: "Mike Rodriguez",
                      date: "2024-01-28",
                      time: "10:00",
                      duration: "90 minutes",
                      status: "pending",
                      type: "group"
                    },
                    {
                      id: 3,
                      title: "Career Guidance Session",
                      instructor: "Emma Thompson",
                      date: "2024-02-01",
                      time: "16:00",
                      duration: "45 minutes",
                      status: "confirmed",
                      type: "guidance"
                    }
                  ].map((booking) => (
                    <Card key={booking.id} className="bg-gray-800 border-gray-700">
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <h3 className="font-semibold text-white mb-1">{booking.title}</h3>
                            <p className="text-sm text-gray-300">with {booking.instructor}</p>
                          </div>
                          <Badge className={
                            booking.status === 'confirmed' ? 'bg-green-900 text-green-200' :
                            booking.status === 'pending' ? 'bg-yellow-900 text-yellow-200' :
                            'bg-red-900 text-red-200'
                          }>
                            {booking.status}
                          </Badge>
                        </div>
                        <div className="space-y-2 text-sm text-gray-300">
                          <div className="flex items-center space-x-2">
                            <Calendar className="w-4 h-4" />
                            <span>{booking.date}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Clock className="w-4 h-4" />
                            <span>{booking.time} ({booking.duration})</span>
                          </div>
                        </div>
                        <div className="flex space-x-2 mt-4">
                          <Button variant="outline" size="sm" className="text-white border-gray-600 hover:bg-gray-700">
                            Reschedule
                          </Button>
                          <Button variant="outline" size="sm" className="text-white border-gray-600 hover:bg-gray-700">
                            Cancel
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            )}
            
            {activeTab === 'progress' && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-white">Learning Progress</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <Card className="bg-gray-800 border-gray-700">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-medium text-gray-300">Overall Progress</p>
                          <p className="text-2xl font-bold text-white">68%</p>
                        </div>
                        <TrendingUp className="w-8 h-8 text-green-400" />
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="bg-gray-800 border-gray-700">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-medium text-gray-300">Study Time</p>
                          <p className="text-2xl font-bold text-white">24h</p>
                        </div>
                        <Clock className="w-8 h-8 text-blue-400" />
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="bg-gray-800 border-gray-700">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-medium text-gray-300">Courses Completed</p>
                          <p className="text-2xl font-bold text-white">3</p>
                        </div>
                        <CheckCircle className="w-8 h-8 text-purple-400" />
                      </div>
                    </CardContent>
                  </Card>
                </div>
                
                <Card className="bg-gray-800 border-gray-700">
                  <CardHeader>
                    <CardTitle className="text-white">Course Progress</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {enrolledCourses.map((course) => (
                        <div key={course.id} className="flex items-center space-x-4 p-4 border border-gray-700 rounded-lg">
                          <div className="w-16 h-12 bg-gray-700 rounded flex items-center justify-center">
                            <Play className="w-6 h-6 text-gray-300" />
                          </div>
                          <div className="flex-1">
                            <h3 className="font-semibold text-white">{course.title}</h3>
                            <p className="text-sm text-gray-300">Progress: {course.progress}%</p>
                            <div className="w-full bg-gray-700 rounded-full h-2 mt-1">
                              <div className="bg-blue-600 h-2 rounded-full" style={{ width: `${course.progress}%` }}></div>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="text-sm text-gray-300">{course.completedModules}/{course.totalModules} modules</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}
            
            {activeTab === 'achievements' && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-white">Achievements & Badges</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[
                    {
                      id: 1,
                      name: "Quick Learner",
                      description: "Complete 5 lessons in one day",
                      icon: "⚡",
                      earned: true,
                      date: "2024-01-15",
                      rarity: "common"
                    },
                    {
                      id: 2,
                      name: "Consistent Student",
                      description: "Study for 7 consecutive days",
                      icon: "🔥",
                      earned: true,
                      date: "2024-01-10",
                      rarity: "rare"
                    },
                    {
                      id: 3,
                      name: "Course Master",
                      description: "Complete your first course",
                      icon: "🎓",
                      earned: true,
                      date: "2024-01-05",
                      rarity: "epic"
                    },
                    {
                      id: 4,
                      name: "Perfect Score",
                      description: "Get 100% on any assessment",
                      icon: "🏆",
                      earned: false,
                      progress: 85,
                      rarity: "legendary"
                    },
                    {
                      id: 5,
                      name: "Social Butterfly",
                      description: "Participate in 10 discussions",
                      icon: "🦋",
                      earned: false,
                      progress: 7,
                      rarity: "common"
                    },
                    {
                      id: 6,
                      name: "Early Bird",
                      description: "Complete a lesson before 8 AM",
                      icon: "🌅",
                      earned: false,
                      progress: 0,
                      rarity: "rare"
                    }
                  ].map((achievement) => (
                    <Card key={achievement.id} className={`bg-gray-800 border-gray-700 ${
                      achievement.earned ? 'border-l-4 border-l-yellow-500' : ''
                    }`}>
                      <CardContent className="p-6">
                        <div className="flex items-center space-x-3 mb-3">
                          <div className={`w-12 h-12 rounded-full flex items-center justify-center text-2xl ${
                            achievement.earned ? 'bg-yellow-500' : 'bg-gray-600'
                          }`}>
                            {achievement.icon}
                          </div>
                          <div className="flex-1">
                            <h3 className="font-semibold text-white">{achievement.name}</h3>
                            <p className="text-sm text-gray-300">{achievement.description}</p>
                          </div>
                        </div>
                        {achievement.earned ? (
                          <p className="text-sm text-green-400">Earned {achievement.date}</p>
                        ) : (
                          <div className="space-y-2">
                            <div className="flex items-center space-x-2">
                              <div className="flex-1 bg-gray-700 rounded-full h-2">
                                <div 
                                  className="bg-yellow-500 h-2 rounded-full"
                                  style={{ width: `${achievement.progress}%` }}
                                ></div>
                              </div>
                              <span className="text-xs text-gray-300">{achievement.progress}%</span>
                            </div>
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            )}
            
            {activeTab === 'wallet' && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-white">Wallet & Transactions</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <Card className="bg-gray-800 border-gray-700">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-medium text-gray-300">Available Balance</p>
                          <p className="text-2xl font-bold text-white">$245.67</p>
                        </div>
                        <Wallet className="w-8 h-8 text-green-400" />
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="bg-gray-800 border-gray-700">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-medium text-gray-300">Total Spent</p>
                          <p className="text-2xl font-bold text-white">$1,234.56</p>
                        </div>
                        <TrendingUp className="w-8 h-8 text-blue-400" />
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="bg-gray-800 border-gray-700">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-medium text-gray-300">Rewards Earned</p>
                          <p className="text-2xl font-bold text-white">$89.45</p>
                        </div>
                        <Award className="w-8 h-8 text-purple-400" />
                      </div>
                    </CardContent>
                  </Card>
                </div>
                
                <Card className="bg-gray-800 border-gray-700">
                  <CardHeader>
                    <CardTitle className="text-white">Recent Transactions</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {[
                        {
                          id: 1,
                          type: "purchase",
                          amount: -89.99,
                          description: "React Development Bootcamp",
                          date: "2024-01-15",
                          status: "completed"
                        },
                        {
                          id: 2,
                          type: "refund",
                          amount: 29.99,
                          description: "Course refund - Digital Marketing",
                          date: "2024-01-12",
                          status: "completed"
                        },
                        {
                          id: 3,
                          type: "reward",
                          amount: 15.00,
                          description: "Referral bonus",
                          date: "2024-01-10",
                          status: "completed"
                        },
                        {
                          id: 4,
                          type: "purchase",
                          amount: -59.99,
                          description: "UI/UX Design Course",
                          date: "2024-01-08",
                          status: "completed"
                        }
                      ].map((transaction) => (
                        <div key={transaction.id} className="flex items-center justify-between p-4 border border-gray-700 rounded-lg">
                          <div className="flex items-center space-x-3">
                            <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                              transaction.type === 'purchase' ? 'bg-red-500' :
                              transaction.type === 'refund' ? 'bg-green-500' :
                              'bg-blue-500'
                            }`}>
                              {transaction.type === 'purchase' ? (
                                <Download className="w-4 h-4 text-white" />
                              ) : transaction.type === 'refund' ? (
                                <Upload className="w-4 h-4 text-white" />
                              ) : (
                                <Award className="w-4 h-4 text-white" />
                              )}
                            </div>
                            <div>
                              <p className="font-medium text-white">{transaction.description}</p>
                              <p className="text-sm text-gray-300">{transaction.date}</p>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className={`font-semibold ${
                              transaction.amount > 0 ? 'text-green-400' : 'text-red-400'
                            }`}>
                              {transaction.amount > 0 ? '+' : ''}${Math.abs(transaction.amount)}
                            </p>
                            <Badge className="bg-green-900 text-green-200">{transaction.status}</Badge>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}
            
            {activeTab === 'social' && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-white">Social Learning</h2>
                
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  <div className="lg:col-span-2">
                    <Card className="bg-gray-800 border-gray-700">
                      <CardHeader>
                        <CardTitle className="text-white">Learning Feed</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-6">
                          {[
                            {
                              id: 1,
                              user: "Sarah Chen",
                              avatar: "/avatars/sarah.jpg",
                              action: "completed",
                              course: "React Development Bootcamp",
                              time: "2 hours ago",
                              likes: 12,
                              comments: 3
                            },
                            {
                              id: 2,
                              user: "Mike Rodriguez",
                              avatar: "/avatars/mike.jpg",
                              action: "started",
                              course: "Python for Data Science",
                              time: "4 hours ago",
                              likes: 8,
                              comments: 1
                            },
                            {
                              id: 3,
                              user: "Emma Thompson",
                              avatar: "/avatars/emma.jpg",
                              action: "achieved",
                              achievement: "Perfect Score",
                              course: "Digital Marketing",
                              time: "6 hours ago",
                              likes: 15,
                              comments: 5
                            }
                          ].map((post) => (
                            <div key={post.id} className="border border-gray-700 rounded-lg p-4">
                              <div className="flex items-start space-x-3">
                                <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center">
                                  <User className="w-5 h-5 text-gray-400" />
                                </div>
                                <div className="flex-1">
                                  <div className="flex items-center space-x-2 mb-2">
                                    <span className="font-medium text-white">{post.user}</span>
                                    <span className="text-gray-400">•</span>
                                    <span className="text-sm text-gray-300">{post.time}</span>
                                  </div>
                                  <p className="text-gray-300 mb-3">
                                    {post.action === 'completed' && `Just completed "${post.course}"! 🎉`}
                                    {post.action === 'started' && `Started learning "${post.course}" 📚`}
                                    {post.action === 'achieved' && `Earned the "${post.achievement}" badge in "${post.course}"! 🏆`}
                                  </p>
                                  <div className="flex items-center space-x-4">
                                    <button className="flex items-center space-x-1 text-gray-400 hover:text-white">
                                      <ThumbsUp className="w-4 h-4" />
                                      <span className="text-sm">{post.likes}</span>
                                    </button>
                                    <button className="flex items-center space-x-1 text-gray-400 hover:text-white">
                                      <MessageSquare className="w-4 h-4" />
                                      <span className="text-sm">{post.comments}</span>
                                    </button>
                                    <button className="text-gray-400 hover:text-white">
                                      <Share className="w-4 h-4" />
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                  
                  <div>
                    <Card className="bg-gray-800 border-gray-700">
                      <CardHeader>
                        <CardTitle className="text-white">Study Groups</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          {[
                            { name: "React Developers", members: 45, active: true },
                            { name: "Data Science Enthusiasts", members: 32, active: true },
                            { name: "Design Community", members: 28, active: false },
                            { name: "Marketing Professionals", members: 19, active: true }
                          ].map((group, index) => (
                            <div key={index} className="flex items-center justify-between p-3 border border-gray-700 rounded-lg">
                              <div>
                                <p className="font-medium text-white">{group.name}</p>
                                <p className="text-sm text-gray-300">{group.members} members</p>
                              </div>
                              <Badge className={group.active ? 'bg-green-900 text-green-200' : 'bg-gray-600 text-gray-300'}>
                                {group.active ? 'Active' : 'Inactive'}
                              </Badge>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            )}
            
            {activeTab === 'ai-companions' && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-white">AI Learning Companions</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[
                    {
                      id: 1,
                      name: "CodeBot",
                      specialty: "Programming",
                      avatar: "🤖",
                      status: "online",
                      description: "Your personal programming tutor",
                      rating: 4.9,
                      sessions: 45
                    },
                    {
                      id: 2,
                      name: "DataSage",
                      specialty: "Data Science",
                      avatar: "🧠",
                      status: "online",
                      description: "Expert in data analysis and ML",
                      rating: 4.8,
                      sessions: 32
                    },
                    {
                      id: 3,
                      name: "DesignMate",
                      specialty: "UI/UX Design",
                      avatar: "🎨",
                      status: "offline",
                      description: "Creative design assistant",
                      rating: 4.7,
                      sessions: 28
                    },
                    {
                      id: 4,
                      name: "MathTutor",
                      specialty: "Mathematics",
                      avatar: "📐",
                      status: "online",
                      description: "Step-by-step math solutions",
                      rating: 4.9,
                      sessions: 56
                    },
                    {
                      id: 5,
                      name: "LanguageBuddy",
                      specialty: "Languages",
                      avatar: "🗣️",
                      status: "online",
                      description: "Practice conversations in any language",
                      rating: 4.6,
                      sessions: 23
                    },
                    {
                      id: 6,
                      name: "CareerCoach",
                      specialty: "Career Guidance",
                      avatar: "💼",
                      status: "offline",
                      description: "Professional development advisor",
                      rating: 4.8,
                      sessions: 18
                    }
                  ].map((companion) => (
                    <Card key={companion.id} className="bg-gray-800 border-gray-700 hover:bg-gray-750 cursor-pointer">
                      <CardContent className="p-6">
                        <div className="flex items-center space-x-3 mb-4">
                          <div className="relative">
                            <div className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center text-2xl">
                              {companion.avatar}
                            </div>
                            <div className={`absolute -bottom-1 -right-1 w-4 h-4 rounded-full border-2 border-gray-800 ${
                              companion.status === 'online' ? 'bg-green-500' : 'bg-gray-500'
                            }`}></div>
                          </div>
                          <div className="flex-1">
                            <h3 className="font-semibold text-white">{companion.name}</h3>
                            <p className="text-sm text-gray-300">{companion.specialty}</p>
                          </div>
                        </div>
                        <p className="text-sm text-gray-300 mb-3">{companion.description}</p>
                        <div className="flex items-center justify-between text-sm">
                          <div className="flex items-center space-x-1">
                            <StarIcon className="w-4 h-4 text-yellow-400 fill-current" />
                            <span className="text-gray-300">{companion.rating}</span>
                          </div>
                          <span className="text-gray-400">{companion.sessions} sessions</span>
                        </div>
                        <Button className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white">
                          Start Chat
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Widget Modal */}
      {showSidebar && renderWidgetContent()}
    </div>
  );
};

export default StudentPortal;