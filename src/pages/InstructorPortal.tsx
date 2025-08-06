import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { 
  Home, 
  BookOpen, 
  Users, 
  TrendingUp, 
  DollarSign, 
  Calendar, 
  MessageSquare, 
  Settings, 
  Plus,
  Search,
  Bell,
  User,
  ChevronRight,
  Play,
  Clock,
  CheckCircle,
  Star,
  Award,
  Target,
  BarChart3,
  PieChart,
  Activity,
  Download,
  Upload,
  Edit,
  Eye,
  Trash2,
  MoreHorizontal,
  ArrowRight,
  FileText,
  Video,
  Headphones,
  File,
  Globe,
  Zap,
  Shield,
  CreditCard,
  MapPin,
  Star as StarIcon,
  X,
  Bookmark,
  Share,
  Heart,
  ThumbsUp,
  ThumbsDown,
  Flag,
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
  Trophy,
  Medal,
  Crown,
  Brain,
  Palette,
  Layers,
  Wifi,
  Zap as ZapIcon,
  Globe as GlobeIcon,
  Activity as ActivityIcon,
  TrendingUp as TrendingUpIcon,
  BarChart3 as BarChart3Icon,
  PieChart as PieChartIcon,
  LineChart,
  Users as UsersIcon,
  Calendar as CalendarIcon,
  Clock as ClockIcon,
  BookOpen as BookOpenIcon,
  Target as TargetIcon,
  Zap as ZapIcon2,
  Award as AwardIcon,
  Calendar as CalendarIcon2,
  Trash2 as Trash2Icon
} from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

const InstructorPortal = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeTab, setActiveTab] = useState('dashboard');
  const [settingsTab, setSettingsTab] = useState('profile');
  const [searchQuery, setSearchQuery] = useState('');

  // Handle URL parameters for direct navigation
  useEffect(() => {
    const path = location.pathname;
    const tabFromUrl = path.split('/').pop();
    
    const tabMapping: { [key: string]: string } = {
      'dashboard': 'dashboard',
      'courses': 'courses',
      'students': 'students',
      'analytics': 'analytics',
      'earnings': 'earnings',
      'calendar': 'calendar',
      'messages': 'messages',
      'settings': 'settings'
    };

    if (tabFromUrl && tabMapping[tabFromUrl]) {
      setActiveTab(tabMapping[tabFromUrl]);
    } else if (path === '/instructor-portal') {
      setActiveTab('dashboard');
    }
  }, [location.pathname]);

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    const tabMapping: { [key: string]: string } = {
      'dashboard': 'dashboard',
      'courses': 'courses',
      'students': 'students',
      'analytics': 'analytics',
      'earnings': 'earnings',
      'calendar': 'calendar',
      'messages': 'messages',
      'settings': 'settings'
    };
    
    const urlSegment = tabMapping[tab] || 'dashboard';
    navigate(`/instructor-portal/${urlSegment}`, { replace: true });
  };

  const instructorStats = {
    totalCourses: 8,
    totalStudents: 1247,
    totalRevenue: 15420.50,
    averageRating: 4.8,
    completionRate: 87,
    activeStudents: 892
  };

  const courses = [
    {
      id: 1,
      title: "Complete Web Development Bootcamp",
      students: 456,
      revenue: 4560.00,
      rating: 4.9,
      status: "published",
      lastUpdated: "2 days ago",
      completionRate: 92,
      category: "Programming"
    },
    {
      id: 2,
      title: "Data Science Fundamentals",
      students: 234,
      revenue: 2340.00,
      rating: 4.7,
      status: "published",
      lastUpdated: "1 week ago",
      completionRate: 85,
      category: "Data Science"
    },
    {
      id: 3,
      title: "Digital Marketing Masterclass",
      students: 189,
      revenue: 1890.00,
      rating: 4.8,
      status: "draft",
      lastUpdated: "3 days ago",
      completionRate: 0,
      category: "Marketing"
    },
    {
      id: 4,
      title: "UI/UX Design Principles",
      students: 156,
      revenue: 1560.00,
      rating: 4.6,
      status: "published",
      lastUpdated: "5 days ago",
      completionRate: 78,
      category: "Design"
    }
  ];

  const recentStudents = [
    {
      id: 1,
      name: "Sarah Johnson",
      email: "sarah.j@email.com",
      enrolledCourse: "Web Development Bootcamp",
      progress: 65,
      lastActive: "2 hours ago",
      avatar: "/avatars/sarah.jpg"
    },
    {
      id: 2,
      name: "Mike Chen",
      email: "mike.chen@email.com",
      enrolledCourse: "Data Science Fundamentals",
      progress: 23,
      lastActive: "1 day ago",
      avatar: "/avatars/mike.jpg"
    },
    {
      id: 3,
      name: "Emma Davis",
      email: "emma.davis@email.com",
      enrolledCourse: "Digital Marketing Masterclass",
      progress: 100,
      lastActive: "3 days ago",
      avatar: "/avatars/emma.jpg"
    }
  ];

  const recentMessages = [
    {
      id: 1,
      from: "Sarah Johnson",
      subject: "Question about React Hooks",
      preview: "Hi! I'm having trouble understanding the useEffect hook...",
      time: "2 hours ago",
      unread: true
    },
    {
      id: 2,
      from: "Mike Chen",
      subject: "Assignment submission",
      preview: "I've completed the data visualization project...",
      time: "1 day ago",
      unread: false
    },
    {
      id: 3,
      from: "Emma Davis",
      subject: "Course completion certificate",
      preview: "Thank you for the amazing course! I've learned so much...",
      time: "3 days ago",
      unread: false
    }
  ];

  const navigationItems = [
    { id: 'dashboard', label: 'Dashboard', icon: <Home className="w-5 h-5" /> },
    { id: 'courses', label: 'My Courses', icon: <BookOpen className="w-5 h-5" /> },
    { id: 'students', label: 'Students', icon: <Users className="w-5 h-5" /> },
    { id: 'analytics', label: 'Analytics', icon: <BarChart3 className="w-5 h-5" /> },
    { id: 'earnings', label: 'Earnings', icon: <DollarSign className="w-5 h-5" /> },
    { id: 'calendar', label: 'Calendar', icon: <Calendar className="w-5 h-5" /> },
    { id: 'messages', label: 'Messages', icon: <MessageSquare className="w-5 h-5" /> },
    { id: 'settings', label: 'Settings', icon: <Settings className="w-5 h-5" /> }
  ];

  const renderDashboard = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="bg-gray-800 border-gray-700">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-300">Total Courses</p>
                <p className="text-2xl font-bold text-white">{instructorStats.totalCourses}</p>
              </div>
              <BookOpen className="w-8 h-8 text-blue-400" />
            </div>
          </CardContent>
        </Card>
        
        <Card className="bg-gray-800 border-gray-700">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-300">Total Students</p>
                <p className="text-2xl font-bold text-white">{instructorStats.totalStudents}</p>
              </div>
              <Users className="w-8 h-8 text-green-400" />
            </div>
          </CardContent>
        </Card>
        
        <Card className="bg-gray-800 border-gray-700">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-300">Total Revenue</p>
                <p className="text-2xl font-bold text-white">${instructorStats.totalRevenue.toLocaleString()}</p>
              </div>
              <DollarSign className="w-8 h-8 text-yellow-400" />
            </div>
          </CardContent>
        </Card>
        
        <Card className="bg-gray-800 border-gray-700">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-300">Average Rating</p>
                <p className="text-2xl font-bold text-white">{instructorStats.averageRating}</p>
              </div>
              <Star className="w-8 h-8 text-purple-400" />
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="bg-gray-800 border-gray-700">
          <CardHeader>
            <CardTitle className="text-white">Recent Students</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentStudents.map((student) => (
                <div key={student.id} className="flex items-center space-x-4 p-4 border border-gray-700 rounded-lg">
                  <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center">
                    <User className="w-5 h-5 text-gray-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-white">{student.name}</h3>
                    <p className="text-sm text-gray-300">{student.enrolledCourse}</p>
                    <div className="flex items-center space-x-2 mt-1">
                      <div className="flex-1 bg-gray-700 rounded-full h-2">
                        <div className="bg-blue-600 h-2 rounded-full" style={{ width: `${student.progress}%` }}></div>
                      </div>
                      <span className="text-xs text-gray-300">{student.progress}%</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-gray-400">{student.lastActive}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gray-800 border-gray-700">
          <CardHeader>
            <CardTitle className="text-white">Recent Messages</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentMessages.map((message) => (
                <div key={message.id} className={`p-4 border border-gray-700 rounded-lg ${message.unread ? 'bg-blue-900/20 border-blue-500/30' : ''}`}>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="font-semibold text-white">{message.from}</h3>
                      <p className="text-sm text-gray-300 font-medium">{message.subject}</p>
                      <p className="text-sm text-gray-400 mt-1">{message.preview}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-gray-400">{message.time}</p>
                      {message.unread && (
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );

  const renderCourses = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-white">My Courses</h2>
        <Button onClick={() => navigate('/dashboard/ai-course-creator')} className="bg-blue-600 hover:bg-blue-700 text-white">
          <Plus className="w-4 h-4 mr-2" />
          Create New Course
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course) => (
          <Card key={course.id} className="bg-gray-800 border-gray-700 hover:bg-gray-750 transition-shadow cursor-pointer">
            <div className="h-48 bg-gray-700 rounded-t-lg flex items-center justify-center">
              <Play className="w-12 h-12 text-gray-400" />
            </div>
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-2">
                <Badge variant="secondary" className="bg-gray-600 text-white">{course.category}</Badge>
                <Badge className={
                  course.status === 'published' ? 'bg-green-900 text-green-200' :
                  course.status === 'draft' ? 'bg-yellow-900 text-yellow-200' :
                  'bg-gray-600 text-gray-300'
                }>
                  {course.status}
                </Badge>
              </div>
              <h3 className="font-semibold text-white mb-2">{course.title}</h3>
              <div className="space-y-2 text-sm text-gray-300">
                <div className="flex justify-between">
                  <span>Students</span>
                  <span>{course.students}</span>
                </div>
                <div className="flex justify-between">
                  <span>Revenue</span>
                  <span>${course.revenue.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span>Rating</span>
                  <div className="flex items-center">
                    <StarIcon className="w-3 h-3 text-yellow-400 fill-current" />
                    <span className="ml-1">{course.rating}</span>
                  </div>
                </div>
                <div className="flex justify-between">
                  <span>Completion Rate</span>
                  <span>{course.completionRate}%</span>
                </div>
              </div>
              <div className="flex space-x-2 mt-4">
                <Button variant="outline" size="sm" className="text-white border-gray-600 hover:bg-gray-700">
                  <Edit className="w-4 h-4 mr-2" />
                  Edit
                </Button>
                <Button variant="outline" size="sm" className="text-white border-gray-600 hover:bg-gray-700">
                  <Eye className="w-4 h-4 mr-2" />
                  View
                </Button>
                <Button variant="outline" size="sm" className="text-white border-gray-600 hover:bg-gray-700">
                  <BarChart3 className="w-4 h-4 mr-2" />
                  Analytics
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );

  const renderStudents = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-white">My Students</h2>
        <div className="flex space-x-2">
          <Input 
            placeholder="Search students..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-64 bg-gray-800 border-gray-700 text-white" 
          />
          <Button className="bg-blue-600 hover:bg-blue-700 text-white">
            <Search className="w-4 h-4 mr-2" />
            Search
          </Button>
        </div>
      </div>

      <Card className="bg-gray-800 border-gray-700">
        <CardHeader>
          <CardTitle className="text-white">Student Overview</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            <div className="text-center p-4 bg-gray-700 rounded-lg">
              <p className="text-2xl font-bold text-white">{instructorStats.totalStudents}</p>
              <p className="text-sm text-gray-300">Total Students</p>
            </div>
            <div className="text-center p-4 bg-gray-700 rounded-lg">
              <p className="text-2xl font-bold text-white">{instructorStats.activeStudents}</p>
              <p className="text-sm text-gray-300">Active Students</p>
            </div>
            <div className="text-center p-4 bg-gray-700 rounded-lg">
              <p className="text-2xl font-bold text-white">{instructorStats.completionRate}%</p>
              <p className="text-sm text-gray-300">Completion Rate</p>
            </div>
            <div className="text-center p-4 bg-gray-700 rounded-lg">
              <p className="text-2xl font-bold text-white">{instructorStats.averageRating}</p>
              <p className="text-sm text-gray-300">Average Rating</p>
            </div>
          </div>

          <div className="space-y-4">
            {recentStudents.map((student) => (
              <div key={student.id} className="flex items-center justify-between p-4 border border-gray-700 rounded-lg">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center">
                    <User className="w-6 h-6 text-gray-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">{student.name}</h3>
                    <p className="text-sm text-gray-300">{student.email}</p>
                    <p className="text-sm text-gray-400">{student.enrolledCourse}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="text-right">
                    <p className="text-sm text-gray-300">Progress: {student.progress}%</p>
                    <p className="text-xs text-gray-400">{student.lastActive}</p>
                  </div>
                  <Button variant="outline" size="sm" className="text-white border-gray-600 hover:bg-gray-700">
                    <MessageSquare className="w-4 h-4 mr-2" />
                    Message
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );

  const renderAnalytics = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-white">Analytics Dashboard</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="bg-gray-800 border-gray-700">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-300">Course Views</p>
                <p className="text-2xl font-bold text-white">12,847</p>
                <p className="text-xs text-green-400">+12% from last month</p>
              </div>
              <Eye className="w-8 h-8 text-blue-400" />
            </div>
          </CardContent>
        </Card>
        
        <Card className="bg-gray-800 border-gray-700">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-300">Enrollments</p>
                <p className="text-2xl font-bold text-white">234</p>
                <p className="text-xs text-green-400">+8% from last month</p>
              </div>
              <Users className="w-8 h-8 text-green-400" />
            </div>
          </CardContent>
        </Card>
        
        <Card className="bg-gray-800 border-gray-700">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-300">Completion Rate</p>
                <p className="text-2xl font-bold text-white">87%</p>
                <p className="text-xs text-green-400">+3% from last month</p>
              </div>
              <CheckCircle className="w-8 h-8 text-purple-400" />
            </div>
          </CardContent>
        </Card>
        
        <Card className="bg-gray-800 border-gray-700">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-300">Revenue</p>
                <p className="text-2xl font-bold text-white">$15,420</p>
                <p className="text-xs text-green-400">+15% from last month</p>
              </div>
              <DollarSign className="w-8 h-8 text-yellow-400" />
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="bg-gray-800 border-gray-700">
          <CardHeader>
            <CardTitle className="text-white">Course Performance</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {courses.map((course) => (
                <div key={course.id} className="flex items-center justify-between p-4 border border-gray-700 rounded-lg">
                  <div className="flex-1">
                    <h3 className="font-semibold text-white">{course.title}</h3>
                    <div className="flex items-center space-x-4 mt-1 text-sm text-gray-300">
                      <span>{course.students} students</span>
                      <span>${course.revenue.toLocaleString()}</span>
                      <div className="flex items-center">
                        <StarIcon className="w-3 h-3 text-yellow-400 fill-current" />
                        <span className="ml-1">{course.rating}</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-300">{course.completionRate}% completion</p>
                    <p className="text-xs text-gray-400">{course.lastUpdated}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gray-800 border-gray-700">
          <CardHeader>
            <CardTitle className="text-white">Student Engagement</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-gray-300">Active Students</span>
                <span className="text-white font-semibold">{instructorStats.activeStudents}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-300">New Enrollments (30 days)</span>
                <span className="text-white font-semibold">45</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-300">Course Completions</span>
                <span className="text-white font-semibold">234</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-300">Average Study Time</span>
                <span className="text-white font-semibold">2.5 hours/week</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-300">Student Satisfaction</span>
                <span className="text-white font-semibold">{instructorStats.averageRating}/5.0</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );

  const renderEarnings = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-white">Earnings & Revenue</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="bg-gray-800 border-gray-700">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-300">Total Revenue</p>
                <p className="text-2xl font-bold text-white">${instructorStats.totalRevenue.toLocaleString()}</p>
              </div>
              <DollarSign className="w-8 h-8 text-green-400" />
            </div>
          </CardContent>
        </Card>
        
        <Card className="bg-gray-800 border-gray-700">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-300">This Month</p>
                <p className="text-2xl font-bold text-white">$2,450.00</p>
              </div>
              <TrendingUp className="w-8 h-8 text-blue-400" />
            </div>
          </CardContent>
        </Card>
        
        <Card className="bg-gray-800 border-gray-700">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-300">Pending Payout</p>
                <p className="text-2xl font-bold text-white">$1,234.56</p>
              </div>
              <Clock className="w-8 h-8 text-yellow-400" />
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="bg-gray-800 border-gray-700">
        <CardHeader>
          <CardTitle className="text-white">Revenue Breakdown</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {courses.map((course) => (
              <div key={course.id} className="flex items-center justify-between p-4 border border-gray-700 rounded-lg">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gray-700 rounded flex items-center justify-center">
                    <Play className="w-6 h-6 text-gray-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">{course.title}</h3>
                    <p className="text-sm text-gray-300">{course.students} students enrolled</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-lg font-bold text-white">${course.revenue.toLocaleString()}</p>
                  <p className="text-sm text-gray-300">${(course.revenue / course.students).toFixed(2)} per student</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );

  const renderCalendar = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-white">Calendar & Schedule</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle className="text-white">Upcoming Events</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  {
                    id: 1,
                    title: "Live Q&A Session",
                    date: "2024-01-25",
                    time: "14:00 - 15:00",
                    type: "qa",
                    attendees: 45
                  },
                  {
                    id: 2,
                    title: "Course Review Meeting",
                    date: "2024-01-28",
                    time: "10:00 - 11:00",
                    type: "review",
                    attendees: 8
                  },
                  {
                    id: 3,
                    title: "Student Office Hours",
                    date: "2024-02-01",
                    time: "16:00 - 17:00",
                    type: "office",
                    attendees: 12
                  }
                ].map((event) => (
                  <div key={event.id} className="flex items-center justify-between p-4 border border-gray-700 rounded-lg">
                    <div className="flex items-center space-x-4">
                      <div className={`w-3 h-3 rounded-full ${
                        event.type === 'qa' ? 'bg-blue-500' :
                        event.type === 'review' ? 'bg-green-500' :
                        'bg-purple-500'
                      }`}></div>
                      <div>
                        <h3 className="font-semibold text-white">{event.title}</h3>
                        <p className="text-sm text-gray-300">{event.date} • {event.time}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-gray-300">{event.attendees} attendees</p>
                      <Button variant="outline" size="sm" className="text-white border-gray-600 hover:bg-gray-700">
                        Join
                      </Button>
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
              <CardTitle className="text-white">Quick Actions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                  <Plus className="w-4 h-4 mr-2" />
                  Schedule Office Hours
                </Button>
                <Button variant="outline" className="w-full text-white border-gray-600 hover:bg-gray-700">
                  <Calendar className="w-4 h-4 mr-2" />
                  Create Event
                </Button>
                <Button variant="outline" className="w-full text-white border-gray-600 hover:bg-gray-700">
                  <MessageSquare className="w-4 h-4 mr-2" />
                  Send Announcement
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );

  const renderMessages = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-white">Messages & Communication</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle className="text-white">Recent Messages</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentMessages.map((message) => (
                  <div key={message.id} className={`p-4 border border-gray-700 rounded-lg cursor-pointer hover:bg-gray-750 ${message.unread ? 'bg-blue-900/20 border-blue-500/30' : ''}`}>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h3 className="font-semibold text-white">{message.from}</h3>
                        <p className="text-sm text-gray-300 font-medium">{message.subject}</p>
                        <p className="text-sm text-gray-400 mt-1">{message.preview}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-xs text-gray-400">{message.time}</p>
                        {message.unread && (
                          <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                        )}
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
              <CardTitle className="text-white">Quick Actions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                  <MessageSquare className="w-4 h-4 mr-2" />
                  New Message
                </Button>
                <Button variant="outline" className="w-full text-white border-gray-600 hover:bg-gray-700">
                  <Bell className="w-4 h-4 mr-2" />
                  Send Announcement
                </Button>
                <Button variant="outline" className="w-full text-white border-gray-600 hover:bg-gray-700">
                  <Users className="w-4 h-4 mr-2" />
                  Group Message
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );

  const renderSettings = () => (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-white mb-2">Settings</h2>
        <p className="text-gray-300">Manage your account preferences and instructor settings</p>
      </div>

      <div className="flex space-x-1 border-b border-gray-700">
        {[
          { id: 'profile', label: 'Profile', icon: <User className="w-4 h-4" /> },
          { id: 'notifications', label: 'Notifications', icon: <Bell className="w-4 h-4" /> },
          { id: 'security', label: 'Security', icon: <Shield className="w-4 h-4" /> },
          { id: 'billing', label: 'Billing', icon: <CreditCard className="w-4 h-4" /> }
        ].map((tab) => (
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
              <CardTitle className="text-white">Billing & Payouts</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="font-semibold text-white mb-3">Payout Method</h3>
                <div className="bg-blue-900/50 border border-blue-700 rounded-lg p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-xl font-bold text-blue-200">PayPal</h4>
                      <p className="text-sm text-blue-300">instructor@email.com</p>
                    </div>
                    <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                      Edit
                    </Button>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-white mb-3">Payout Schedule</h3>
                <div className="border border-gray-700 rounded-lg p-4 bg-gray-750">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium text-white">Monthly Payouts</p>
                      <p className="text-sm text-gray-300">Payouts processed on the 1st of each month</p>
                    </div>
                    <Button variant="outline" className="text-white border-gray-600 hover:bg-gray-700">
                      Change
                    </Button>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-white mb-3">Tax Information</h3>
                <div className="border border-gray-700 rounded-lg p-4 bg-gray-750">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-white">Tax ID: 12-3456789</p>
                      <p className="text-sm text-gray-300">Last updated: January 15, 2024</p>
                    </div>
                    <Button variant="outline" className="text-white border-gray-600 hover:bg-gray-700">
                      Update
                    </Button>
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
            <h1 className="text-xl font-bold text-white mb-8">Instructor Portal</h1>
            
            <div className="space-y-2">
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Dashboard</p>
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
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1">
          {/* Header */}
          <div className="bg-gray-900 border-b border-gray-800 px-6 py-4">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold text-white">
                {activeTab === 'dashboard' && 'Dashboard'}
                {activeTab === 'courses' && 'My Courses'}
                {activeTab === 'students' && 'Students'}
                {activeTab === 'analytics' && 'Analytics'}
                {activeTab === 'earnings' && 'Earnings & Revenue'}
                {activeTab === 'calendar' && 'Calendar & Schedule'}
                {activeTab === 'messages' && 'Messages & Communication'}
                {activeTab === 'settings' && 'Settings'}
              </h2>
              
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <Input
                    placeholder="Search courses, students, messages..."
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
            {activeTab === 'courses' && renderCourses()}
            {activeTab === 'students' && renderStudents()}
            {activeTab === 'analytics' && renderAnalytics()}
            {activeTab === 'earnings' && renderEarnings()}
            {activeTab === 'calendar' && renderCalendar()}
            {activeTab === 'messages' && renderMessages()}
            {activeTab === 'settings' && renderSettings()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstructorPortal; 