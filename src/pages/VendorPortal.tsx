import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Plus, 
  BookOpen, 
  Users, 
  DollarSign, 
  BarChart3, 
  Play,
  Edit,
  Trash2,
  Upload,
  Eye,
  Settings,
  FileText
} from "lucide-react";
import { Link } from "react-router-dom";

const VendorPortal = () => {
  const [activeTab, setActiveTab] = useState("overview");

  const courseStats = {
    totalCourses: 12,
    totalStudents: 1847,
    totalRevenue: 24500,
    completionRate: 78
  };

  const recentCourses = [
    {
      id: 1,
      title: "Advanced React Development",
      students: 324,
      revenue: 4800,
      status: "published",
      completion: 85,
      thumbnail: "/lovable-uploads/b9fa448c-cd57-4a40-a46c-33ee5a78bdcf.png"
    },
    {
      id: 2,
      title: "JavaScript Fundamentals",
      students: 567,
      revenue: 8200,
      status: "published", 
      completion: 92,
      thumbnail: "/lovable-uploads/7c79407f-7808-403c-9a03-10f13c475bd9.png"
    },
    {
      id: 3,
      title: "UI/UX Design Principles",
      students: 234,
      revenue: 3600,
      status: "draft",
      completion: 45,
      thumbnail: "/lovable-uploads/68565b99-d611-46e4-af99-07eeb06cb8cb.png"
    }
  ];

  const tabs = [
    { id: "overview", label: "Overview", icon: BarChart3 },
    { id: "courses", label: "My Courses", icon: BookOpen },
    { id: "students", label: "Students", icon: Users },
    { id: "revenue", label: "Revenue", icon: DollarSign },
    { id: "settings", label: "Settings", icon: Settings }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-slate-900">
      {/* Header */}
      <div className="bg-white/10 backdrop-blur-md border-b border-white/20 p-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-white">Vendor Portal</h1>
            <p className="text-blue-200 mt-1">Create and manage your courses</p>
          </div>
          <div className="flex items-center gap-4">
            <Link to="/create-course">
              <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white">
                <Plus className="h-4 w-4 mr-2" />
                Create New Course
              </Button>
            </Link>
            <Link to="/authoring-tool">
              <Button variant="outline" className="border-white/20 text-white hover:bg-white/10">
                <Upload className="h-4 w-4 mr-2" />
                Content Studio
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto p-6">
        {/* Navigation Tabs */}
        <div className="flex items-center gap-2 mb-8 bg-white/10 backdrop-blur-md rounded-lg p-2">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <Button
                key={tab.id}
                variant={activeTab === tab.id ? "default" : "ghost"}
                size="sm"
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 ${
                  activeTab === tab.id 
                    ? "bg-white text-slate-800 hover:bg-white/90" 
                    : "text-white hover:bg-white/10"
                }`}
              >
                <Icon className="h-4 w-4" />
                {tab.label}
              </Button>
            );
          })}
        </div>

        {/* Overview Tab */}
        {activeTab === "overview" && (
          <div className="space-y-6">
            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="bg-white/10 backdrop-blur-md border-white/20 text-white">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-blue-200">Total Courses</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{courseStats.totalCourses}</div>
                  <p className="text-xs text-green-400 mt-1">+2 this month</p>
                </CardContent>
              </Card>

              <Card className="bg-white/10 backdrop-blur-md border-white/20 text-white">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-blue-200">Total Students</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{courseStats.totalStudents.toLocaleString()}</div>
                  <p className="text-xs text-green-400 mt-1">+127 this week</p>
                </CardContent>
              </Card>

              <Card className="bg-white/10 backdrop-blur-md border-white/20 text-white">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-blue-200">Total Revenue</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">${courseStats.totalRevenue.toLocaleString()}</div>
                  <p className="text-xs text-green-400 mt-1">+12% vs last month</p>
                </CardContent>
              </Card>

              <Card className="bg-white/10 backdrop-blur-md border-white/20 text-white">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-blue-200">Completion Rate</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{courseStats.completionRate}%</div>
                  <p className="text-xs text-green-400 mt-1">+5% improvement</p>
                </CardContent>
              </Card>
            </div>

            {/* Recent Courses */}
            <Card className="bg-white/10 backdrop-blur-md border-white/20">
              <CardHeader>
                <CardTitle className="text-white">Recent Courses</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentCourses.map((course) => (
                    <div key={course.id} className="flex items-center gap-4 p-4 bg-white/5 rounded-lg">
                      <img 
                        src={course.thumbnail} 
                        alt={course.title}
                        className="w-16 h-16 rounded-lg object-cover"
                      />
                      <div className="flex-1">
                        <h3 className="font-semibold text-white">{course.title}</h3>
                        <div className="flex items-center gap-4 mt-1">
                          <span className="text-sm text-blue-200">{course.students} students</span>
                          <span className="text-sm text-green-400">${course.revenue}</span>
                          <Badge 
                            variant={course.status === "published" ? "default" : "secondary"}
                            className={course.status === "published" ? "bg-green-600 text-white" : "bg-yellow-600 text-white"}
                          >
                            {course.status}
                          </Badge>
                        </div>
                        <div className="mt-2">
                          <div className="flex items-center gap-2">
                            <span className="text-xs text-blue-200">Progress:</span>
                            <Progress value={course.completion} className="flex-1 h-2" />
                            <span className="text-xs text-white">{course.completion}%</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Button size="sm" variant="ghost" className="text-white hover:bg-white/10">
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button size="sm" variant="ghost" className="text-white hover:bg-white/10">
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button size="sm" variant="ghost" className="text-white hover:bg-white/10">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Courses Tab */}
        {activeTab === "courses" && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-white">My Courses</h2>
              <div className="flex items-center gap-4">
                <Link to="/create-course">
                  <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white">
                    <Plus className="h-4 w-4 mr-2" />
                    New Course
                  </Button>
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {recentCourses.map((course) => (
                <Card key={course.id} className="bg-white/10 backdrop-blur-md border-white/20 overflow-hidden">
                  <div className="aspect-video bg-slate-800 relative">
                    <img 
                      src={course.thumbnail} 
                      alt={course.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-2 right-2">
                      <Badge 
                        variant={course.status === "published" ? "default" : "secondary"}
                        className={course.status === "published" ? "bg-green-600 text-white" : "bg-yellow-600 text-white"}
                      >
                        {course.status}
                      </Badge>
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-white mb-2">{course.title}</h3>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-blue-200">Students:</span>
                        <span className="text-white">{course.students}</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-blue-200">Revenue:</span>
                        <span className="text-green-400">${course.revenue}</span>
                      </div>
                      <div className="space-y-1">
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-blue-200">Completion:</span>
                          <span className="text-white">{course.completion}%</span>
                        </div>
                        <Progress value={course.completion} className="h-2" />
                      </div>
                    </div>
                    <div className="flex items-center gap-2 mt-4">
                      <Button size="sm" className="flex-1 bg-blue-600 hover:bg-blue-700 text-white">
                        <Edit className="h-4 w-4 mr-1" />
                        Edit
                      </Button>
                      <Button size="sm" variant="outline" className="border-white/20 text-white hover:bg-white/10">
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button size="sm" variant="outline" className="border-white/20 text-white hover:bg-white/10">
                        <Play className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Other tabs placeholder */}
        {activeTab !== "overview" && activeTab !== "courses" && (
          <Card className="bg-white/10 backdrop-blur-md border-white/20">
            <CardContent className="p-8 text-center">
              <FileText className="h-16 w-16 text-blue-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">{tabs.find(t => t.id === activeTab)?.label}</h3>
              <p className="text-blue-200">This section is coming soon. Stay tuned for updates!</p>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default VendorPortal;
