import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  Search, 
  Filter, 
  ArrowLeft, 
  MoreVertical, 
  Star, 
  Users, 
  BookOpen, 
  DollarSign,
  TrendingUp,
  Bell,
  UserCheck,
  Folder,
  GitBranch,
  Library,
  Book,
  Settings,
  Gamepad2,
  Calendar,
  Trash,
  Plus,
  Clock,
  Heart,
  Bookmark,
  ThumbsUp,
  Eye,
  Play,
  Target,
  Award,
  MessageSquare,
  Video,
  FileText,
  BarChart3,
  Zap
} from "lucide-react";
import Footer from "@/components/Footer";
import { useNavigate } from "react-router-dom";
import { courseService } from "@/services/courseService";

const Vendors = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("All");
  const [selectedSpecialization, setSelectedSpecialization] = useState("All");
  const [sortBy, setSortBy] = useState("rating");
  const [showSidebar, setShowSidebar] = useState(false);
  const [activeWidget, setActiveWidget] = useState<string | null>(null);
  const [publishedCourses, setPublishedCourses] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  // Mock data for the dashboard
  const dashboardStats = {
    totalCourses: 12,
    totalStudents: 1847,
    totalRevenue: 24500,
    pendingCourses: 3,
    completedCourses: 8,
    progressPercentage: 65
  };

  const recommendedCourses = [
    {
      id: 1,
      title: "Digital Marketing Fundamentals",
      category: "Marketing",
      instructor: "Sarah Johnson",
      duration: "3-10 hours",
      students: 1234,
      rating: 4.8,
      currentPrice: 299,
      originalPrice: 399,
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=300&h=200&fit=crop",
      status: "resume"
    },
    {
      id: 2,
      title: "Web Development Bootcamp",
      category: "Technology",
      instructor: "Mike Chen",
      duration: "20+ hours",
      students: 2156,
      rating: 4.9,
      currentPrice: 499,
      originalPrice: 699,
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=300&h=200&fit=crop",
      status: "view"
    },
    {
      id: 3,
      title: "Data Science Masterclass",
      category: "Technology",
      instructor: "Dr. Emily Rodriguez",
      duration: "20+ hours",
      students: 1890,
      rating: 4.7,
      currentPrice: 449,
      originalPrice: 599,
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=300&h=200&fit=crop",
      status: "view"
    }
  ];

  const sidebarWidgets = [
    { id: "announcements", name: "Announcements", icon: Bell, description: "Manage platform announcements and notifications" },
    { id: "instructors", name: "Instructors", icon: UserCheck, description: "Manage instructor accounts and permissions" },
    { id: "folders", name: "Folders", icon: Folder, description: "Organize and manage course content folders" },
    { id: "learning-path", name: "Learning Path", icon: GitBranch, description: "Create and manage learning pathways" },
    { id: "library", name: "Library", icon: Library, description: "Access course library and resources" },
    { id: "ready-courses", name: "Ready to Use Courses", icon: Book, description: "Browse pre-built course templates" },
    { id: "automation", name: "Automation", icon: Settings, description: "Set up automated workflows and triggers" },
    { id: "gamification", name: "Gamification", icon: Gamepad2, description: "Configure engagement and reward systems" },
    { id: "calendar", name: "Training Calendar", icon: Calendar, description: "Schedule and manage training sessions" },
    { id: "trash", name: "Trash", icon: Trash, description: "View and restore deleted content" }
  ];

  useEffect(() => {
    const loadCourses = async () => {
      try {
        const courses = await courseService.getPublishedCourses();
        setPublishedCourses(courses);
      } catch (error) {
        console.error("Error loading courses:", error);
      } finally {
        setLoading(false);
      }
    };
    loadCourses();
  }, []);

  const handleWidgetClick = (widgetId: string) => {
    setActiveWidget(widgetId);
    setShowSidebar(true);
  };

  const renderWidgetContent = (widgetId: string) => {
    switch (widgetId) {
      case "announcements":
        return (
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-white">Announcements</h3>
            <div className="space-y-3">
              <Card className="bg-gray-800 border-gray-700">
                <CardContent className="p-4">
                  <div className="flex items-start space-x-3">
                    <Bell className="w-5 h-5 text-blue-400 mt-1" />
                    <div>
                      <h4 className="font-medium text-white">New Course Creation Feature</h4>
                      <p className="text-sm text-gray-300 mt-1">Enhanced AI-powered course creation tools are now available for all creators.</p>
                      <span className="text-xs text-gray-400 mt-2 block">2 hours ago</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-gray-800 border-gray-700">
                <CardContent className="p-4">
                  <div className="flex items-start space-x-3">
                    <Bell className="w-5 h-5 text-green-400 mt-1" />
                    <div>
                      <h4 className="font-medium text-white">Revenue Milestone</h4>
                      <p className="text-sm text-gray-300 mt-1">Congratulations! You've reached £10,000 in total revenue this month.</p>
                      <span className="text-xs text-gray-400 mt-2 block">1 day ago</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        );

      case "instructors":
        return (
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-white">Instructor Management</h3>
            <div className="grid gap-4">
              <Card className="bg-gray-800 border-gray-700">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                        <span className="text-white font-semibold">SJ</span>
                      </div>
                      <div>
                        <h4 className="font-medium text-white">Sarah Johnson</h4>
                        <p className="text-sm text-gray-300">Marketing Expert</p>
                      </div>
                    </div>
                    <Badge variant="secondary" className="bg-green-600 text-white">Active</Badge>
                  </div>
                </CardContent>
              </Card>
              <Button onClick={() => navigate("/instructor-application")} className="w-full">
                <Plus className="w-4 h-4 mr-2" />
                Add New Instructor
              </Button>
            </div>
          </div>
        );

      case "folders":
        return (
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-white">Content Folders</h3>
            <div className="grid gap-3">
              {["Course Materials", "Resources", "Templates", "Media Assets"].map((folder) => (
                <Card key={folder} className="bg-gray-800 border-gray-700">
                  <CardContent className="p-3">
                    <div className="flex items-center space-x-3">
                      <Folder className="w-5 h-5 text-blue-400" />
                      <span className="text-white">{folder}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        );

      case "learning-path":
        return (
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-white">Learning Paths</h3>
            <div className="space-y-3">
              <Card className="bg-gray-800 border-gray-700">
                <CardContent className="p-4">
                  <h4 className="font-medium text-white">Digital Marketing Career Path</h4>
                  <p className="text-sm text-gray-300 mt-1">Complete pathway from beginner to expert</p>
                  <div className="flex items-center space-x-2 mt-2">
                    <Badge variant="secondary" className="bg-blue-600 text-white">5 Courses</Badge>
                    <Badge variant="secondary" className="bg-green-600 text-white">Active</Badge>
                  </div>
                </CardContent>
              </Card>
              <Button className="w-full">
                <Plus className="w-4 h-4 mr-2" />
                Create New Path
              </Button>
            </div>
          </div>
        );

      case "library":
        return (
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-white">Course Library</h3>
            <div className="space-y-3">
              <div className="grid grid-cols-2 gap-3">
                {["Templates", "Resources", "Assets", "Tutorials"].map((item) => (
                  <Card key={item} className="bg-gray-800 border-gray-700">
                    <CardContent className="p-3 text-center">
                      <Book className="w-6 h-6 text-blue-400 mx-auto mb-2" />
                      <span className="text-white text-sm">{item}</span>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        );

      case "ready-courses":
        return (
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-white">Ready to Use Courses</h3>
            <div className="space-y-3">
              {["Business Fundamentals", "Tech Essentials", "Creative Skills", "Leadership"].map((course) => (
                <Card key={course} className="bg-gray-800 border-gray-700">
                  <CardContent className="p-3">
                    <div className="flex items-center justify-between">
                      <span className="text-white">{course}</span>
                      <Button size="sm" variant="outline">Use Template</Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        );

      case "automation":
        return (
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-white">Automation Workflows</h3>
            <div className="space-y-3">
              <Card className="bg-gray-800 border-gray-700">
                <CardContent className="p-4">
                  <h4 className="font-medium text-white">Welcome Email Series</h4>
                  <p className="text-sm text-gray-300 mt-1">Automated welcome emails for new students</p>
                  <Badge variant="secondary" className="bg-green-600 text-white mt-2">Active</Badge>
                </CardContent>
              </Card>
              <Card className="bg-gray-800 border-gray-700">
                <CardContent className="p-4">
                  <h4 className="font-medium text-white">Course Completion</h4>
                  <p className="text-sm text-gray-300 mt-1">Certificate generation and follow-up</p>
                  <Badge variant="secondary" className="bg-green-600 text-white mt-2">Active</Badge>
                </CardContent>
              </Card>
            </div>
          </div>
        );

      case "gamification":
        return (
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-white">Gamification</h3>
            <div className="grid gap-3">
              {["Badges", "Points", "Leaderboards", "Achievements"].map((feature) => (
                <Card key={feature} className="bg-gray-800 border-gray-700">
                  <CardContent className="p-3">
                    <div className="flex items-center justify-between">
                      <span className="text-white">{feature}</span>
                      <Badge variant="secondary" className="bg-green-600 text-white">Enabled</Badge>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        );

      case "calendar":
        return (
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-white">Training Calendar</h3>
            <div className="space-y-3">
              <Card className="bg-gray-800 border-gray-700">
                <CardContent className="p-4">
                  <h4 className="font-medium text-white">Live Q&A Session</h4>
                  <p className="text-sm text-gray-300 mt-1">Digital Marketing Fundamentals</p>
                  <p className="text-xs text-gray-400 mt-2">Tomorrow, 2:00 PM</p>
                </CardContent>
              </Card>
              <Card className="bg-gray-800 border-gray-700">
                <CardContent className="p-4">
                  <h4 className="font-medium text-white">Course Launch</h4>
                  <p className="text-sm text-gray-300 mt-1">Advanced Web Development</p>
                  <p className="text-xs text-gray-400 mt-2">Next Week, Monday</p>
                </CardContent>
              </Card>
            </div>
          </div>
        );

      case "trash":
        return (
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-white">Trash</h3>
            <div className="space-y-3">
              <Card className="bg-gray-800 border-gray-700">
                <CardContent className="p-4">
                  <h4 className="font-medium text-white">Old Course Template</h4>
                  <p className="text-sm text-gray-300 mt-1">Deleted 3 days ago</p>
                  <Button size="sm" variant="outline" className="mt-2">Restore</Button>
                </CardContent>
              </Card>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-[#0a1834]">
      {/* Header */}
      <div className="px-6 py-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-4">
              <Button variant="ghost" onClick={() => navigate(-1)} className="text-white">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back
              </Button>
              <div>
                <h1 className="text-3xl font-bold text-white">Dashboard</h1>
                <p className="text-gray-300">Monitor your training platform performance</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Search Groups"
                  className="pl-10 bg-gray-800 border-gray-700 text-white placeholder-gray-400 w-64"
                />
              </div>
              
              <div className="flex items-center space-x-2 text-white">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span className="text-sm">1 of 10 Active Users</span>
              </div>
              
              <div className="relative">
                <Button
                  variant="ghost"
                  onClick={() => setShowSidebar(!showSidebar)}
                  className="text-white"
                >
                  <MoreVertical className="w-5 h-5" />
                </Button>
                
                {showSidebar && (
                  <div className="absolute right-0 top-12 w-80 bg-gray-900 border border-gray-700 rounded-lg shadow-xl z-50 max-h-96 overflow-y-auto">
                    <div className="p-4">
                      <h3 className="text-lg font-semibold text-white mb-4">Quick Actions</h3>
                      <div className="space-y-2">
                        {sidebarWidgets.map((widget) => (
                          <button
                            key={widget.id}
                            onClick={() => handleWidgetClick(widget.id)}
                            className="w-full text-left p-3 rounded-lg hover:bg-gray-800 transition-colors"
                          >
                            <div className="flex items-center space-x-3">
                              <widget.icon className="w-5 h-5 text-blue-400" />
                              <div>
                                <p className="text-white font-medium">{widget.name}</p>
                                <p className="text-sm text-gray-400">{widget.description}</p>
                              </div>
                            </div>
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* KPI Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card className="bg-gray-800 border-gray-700">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-400 text-sm">Total Courses</p>
                    <p className="text-2xl font-bold text-white">{dashboardStats.totalCourses}</p>
                    <p className="text-green-400 text-sm">+2 this month</p>
                  </div>
                  <BookOpen className="w-8 h-8 text-blue-400" />
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-gray-800 border-gray-700">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-400 text-sm">Total Students</p>
                    <p className="text-2xl font-bold text-white">{dashboardStats.totalStudents.toLocaleString()}</p>
                    <p className="text-green-400 text-sm">+127 this week</p>
                  </div>
                  <Users className="w-8 h-8 text-green-400" />
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-gray-800 border-gray-700">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-400 text-sm">Total Revenue</p>
                    <p className="text-2xl font-bold text-white">£{dashboardStats.totalRevenue.toLocaleString()}</p>
                    <p className="text-green-400 text-sm">+12% vs last month</p>
                  </div>
                  <DollarSign className="w-8 h-8 text-yellow-400" />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Recommended Courses Section */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-2">
                <Star className="w-5 h-5 text-yellow-400" />
                <h2 className="text-xl font-semibold text-white">Recommended for You</h2>
              </div>
              <Badge variant="secondary" className="bg-blue-600 text-white">Personalised</Badge>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {recommendedCourses.map((course) => (
                <Card key={course.id} className="bg-gray-800 border-gray-700 overflow-hidden">
                  <div className="relative">
                    <img 
                      src={course.image} 
                      alt={course.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-3 right-3 flex space-x-2">
                      <Heart className="w-5 h-5 text-white cursor-pointer hover:text-red-400" />
                      <Bookmark className="w-5 h-5 text-white cursor-pointer hover:text-blue-400" />
                      <ThumbsUp className="w-5 h-5 text-white cursor-pointer hover:text-green-400" />
                    </div>
                    <Badge className="absolute top-3 left-3 bg-blue-600 text-white">
                      {course.category}
                    </Badge>
                  </div>
                  
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-white mb-2">{course.title}</h3>
                    <p className="text-gray-300 text-sm mb-3">by {course.instructor}</p>
                    
                    <div className="flex items-center space-x-4 text-sm text-gray-400 mb-3">
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{course.duration}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Users className="w-4 h-4" />
                        <span>{course.students.toLocaleString()}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span>{course.rating}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-2">
                        <span className="text-white font-semibold">£{course.currentPrice}</span>
                        <span className="text-gray-400 line-through">£{course.originalPrice}</span>
                      </div>
                    </div>
                    
                    <Button 
                      className={`w-full ${
                        course.status === 'resume' 
                          ? 'bg-blue-600 hover:bg-blue-700' 
                          : 'bg-gray-600 hover:bg-gray-700'
                      }`}
                    >
                      {course.status === 'resume' ? (
                        <>
                          <Play className="w-4 h-4 mr-2" />
                          Resume
                        </>
                      ) : (
                        <>
                          <Eye className="w-4 h-4 mr-2" />
                          View
                        </>
                      )}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Course Creation Section */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-white">Course Management</h2>
              <Button 
                onClick={() => navigate("/dashboard/ai-course-creator")}
                className="bg-blue-600 hover:bg-blue-700"
              >
                <Plus className="w-4 h-4 mr-2" />
                Create New Course
              </Button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="bg-gray-800 border-gray-700">
                <CardContent className="p-6 text-center">
                  <Target className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-white mb-2">Pending</h3>
                  <p className="text-3xl font-bold text-white">{dashboardStats.pendingCourses}</p>
                </CardContent>
              </Card>
              
              <Card className="bg-gray-800 border-gray-700">
                <CardContent className="p-6 text-center">
                  <Award className="w-12 h-12 text-green-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-white mb-2">Completed</h3>
                  <p className="text-3xl font-bold text-white">{dashboardStats.completedCourses}</p>
                </CardContent>
              </Card>
              
              <Card className="bg-gray-800 border-gray-700">
                <CardContent className="p-6 text-center">
                  <BarChart3 className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-white mb-2">Progress</h3>
                  <p className="text-3xl font-bold text-white">{dashboardStats.progressPercentage}%</p>
                  <div className="w-full bg-gray-700 rounded-full h-2 mt-2">
                    <div 
                      className="bg-yellow-400 h-2 rounded-full" 
                      style={{ width: `${dashboardStats.progressPercentage}%` }}
                    ></div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Button 
              onClick={() => navigate("/dashboard/ai-course-creator")}
              className="bg-blue-600 hover:bg-blue-700 h-20 flex-col"
            >
              <Video className="w-6 h-6 mb-2" />
              <span>AI Course Creator</span>
            </Button>
            
            <Button 
              onClick={() => navigate("/dashboard/instructor-management")}
              className="bg-green-600 hover:bg-green-700 h-20 flex-col"
            >
              <UserCheck className="w-6 h-6 mb-2" />
              <span>Instructor Management</span>
            </Button>
            
            <Button 
              onClick={() => navigate("/dashboard/payment-analytics")}
              className="bg-yellow-600 hover:bg-yellow-700 h-20 flex-col"
            >
              <DollarSign className="w-6 h-6 mb-2" />
              <span>Payment Analytics</span>
            </Button>
            
            <Button 
              onClick={() => navigate("/creators-portal")}
              className="bg-purple-600 hover:bg-purple-700 h-20 flex-col"
            >
              <Zap className="w-6 h-6 mb-2" />
              <span>Creators Portal</span>
            </Button>
          </div>
        </div>
      </div>

      {/* Sidebar Widget Content */}
      {activeWidget && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-gray-900 rounded-lg max-w-2xl w-full max-h-[80vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold text-white">
                  {sidebarWidgets.find(w => w.id === activeWidget)?.name}
                </h2>
                <Button
                  variant="ghost"
                  onClick={() => setActiveWidget(null)}
                  className="text-white"
                >
                  ✕
                </Button>
              </div>
              {renderWidgetContent(activeWidget)}
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Vendors;