import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { 
  Calendar, 
  Clock, 
  Play, 
  Star, 
  Trophy, 
  Users, 
  Settings, 
  Share2, 
  CheckCircle2, 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram,
  BookOpen,
  Target,
  Award,
  Search,
  Filter,
  ArrowRight,
  Download,
  FileText,
  CalendarDays,
  TrendingUp,
  AlertTriangle,
  Eye,
  BarChart3,
  Activity,
  Zap,
  Lightbulb
} from "lucide-react";
import Navigation from "@/components/Navigation";
import PageNavigation from "@/components/PageNavigation";
import { Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { useTranslation } from "react-i18next";
import { CertificateGenerator, LearningAnalyticsTracker, type LearningAnalytics } from "@/utils/certificateGenerator";

interface EnrolledCourse {
  id: number;
  title: string;
  instructor: string;
  price: number;
  rating: number;
  image: string;
  category: string;
  duration: string;
  level: string;
  lessonsCount: number;
  description: string;
  progress: number;
  completedLessons: number;
  totalLessons: number;
  lastAccessed: string;
  purchaseDate: string;
  certificateEarned: boolean;
  isBestseller: boolean;
  status: 'in-progress' | 'completed' | 'not-started';
  learningAnalytics?: LearningAnalytics;
  assessmentScores?: { assessmentId: string; score: number; maxScore: number; grade: string }[];
}

const StudentPortal = () => {
  const [streak] = useState(0);
  const { toast } = useToast();
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [settings, setSettings] = useState({
    emailNotifications: true,
    pushNotifications: false,
    publicProfile: true,
    courseUpdates: true,
    socialLinks: {
      facebook: "",
      twitter: "",
      linkedin: "",
      instagram: ""
    }
  });

  const { t } = useTranslation();

  // Mock data for enrolled courses
  const enrolledCourses: EnrolledCourse[] = [
    {
      id: 1,
      title: "Digital Marketing Fundamentals",
      instructor: "Sarah Johnson",
      price: 299,
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
      category: "Marketing",
      duration: "8 hours",
      level: "Beginner",
      lessonsCount: 18,
      description: "Master the fundamentals of digital marketing and grow your online presence",
      progress: 75,
      completedLessons: 14,
      totalLessons: 18,
      lastAccessed: "2024-03-15",
      purchaseDate: "2024-01-15",
      certificateEarned: false,
      isBestseller: true,
      status: 'in-progress',
      learningAnalytics: {
        totalTimeSpent: 120,
        chaptersCompleted: 10,
        averageTimePerChapter: 12,
        learningPattern: 'normal',
        unusualBehaviorFlags: []
      }
    },
    {
      id: 2,
      title: "Web Development Bootcamp",
      instructor: "Mike Chen",
      price: 499,
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
      category: "Technology",
      duration: "25 hours",
      level: "Intermediate",
      lessonsCount: 45,
      description: "Complete bootcamp covering HTML, CSS, JavaScript, React, and Node.js",
      progress: 100,
      completedLessons: 45,
      totalLessons: 45,
      lastAccessed: "2024-03-10",
      purchaseDate: "2024-01-10",
      certificateEarned: true,
      isBestseller: true,
      status: 'completed',
      learningAnalytics: {
        totalTimeSpent: 300,
        chaptersCompleted: 20,
        averageTimePerChapter: 15,
        learningPattern: 'normal',
        unusualBehaviorFlags: ['fast_forward_event']
      }
    },
    {
      id: 3,
      title: "Business Strategy & Leadership",
      instructor: "Dr. Amara Okafor",
      price: 399,
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
      category: "Business",
      duration: "12 hours",
      level: "Advanced",
      lessonsCount: 32,
      description: "Advanced strategies for business leadership and organizational development",
      progress: 0,
      completedLessons: 0,
      totalLessons: 32,
      lastAccessed: "Never",
      purchaseDate: "2024-03-01",
      certificateEarned: false,
      isBestseller: false,
      status: 'not-started',
      learningAnalytics: {
        totalTimeSpent: 0,
        chaptersCompleted: 0,
        averageTimePerChapter: 0,
        learningPattern: 'normal',
        unusualBehaviorFlags: []
      }
    }
  ];

  const learningStats = {
    totalCourses: enrolledCourses.length,
    completedCourses: enrolledCourses.filter(c => c.status === 'completed').length,
    inProgressCourses: enrolledCourses.filter(c => c.status === 'in-progress').length,
    totalHoursLearned: 45,
    certificatesEarned: enrolledCourses.filter(c => c.certificateEarned).length,
    averageProgress: Math.round(enrolledCourses.reduce((acc, c) => acc + c.progress, 0) / enrolledCourses.length)
  };

  const upcomingEvents = [
    {
      date: "Jun 30",
      title: "Ultimate React Native Course",
      time: "Mon | 8AM GMT",
      type: "Upcoming Elite Course"
    }
  ];

  const filteredCourses = enrolledCourses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.instructor.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.category.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterStatus === 'all' || course.status === filterStatus;
    return matchesSearch && matchesFilter;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'bg-green-100 text-green-800';
      case 'in-progress': return 'bg-[#16203a] text-cyan-300';
      case 'not-started': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'completed': return 'Completed';
      case 'in-progress': return 'In Progress';
      case 'not-started': return 'Not Started';
      default: return 'Unknown';
    }
  };

  const markCourseComplete = () => {
    toast({
      title: "Course Completed! 🎉",
      description: "Congratulations on completing your course. Keep up the great work!",
    });
  };

  const generateCertificate = async (course: EnrolledCourse) => {
    try {
      const certificateData = {
        studentName: "John Doe", // In real app, get from user profile
        courseTitle: course.title,
        instructorName: course.instructor,
        completionDate: new Date().toLocaleDateString(),
        courseDuration: course.duration,
        certificateId: `CERT-${course.id}-${Date.now()}`,
        courseCategory: course.category,
        grade: course.assessmentScores?.[0]?.grade || "Pass"
      };

      const certificateBlob = await CertificateGenerator.generateCertificate(certificateData);
      const filename = `${course.title.replace(/\s+/g, '_')}_Certificate.pdf`;
      CertificateGenerator.downloadCertificate(certificateBlob, filename);

      toast({
        title: "Certificate Generated! 🎉",
        description: "Your certificate has been downloaded successfully.",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to generate certificate. Please try again.",
        variant: "destructive"
      });
    }
  };

  const generateDiploma = async (course: EnrolledCourse) => {
    try {
      const diplomaData = {
        studentName: "John Doe", // In real app, get from user profile
        courseTitle: course.title,
        instructorName: course.instructor,
        completionDate: new Date().toLocaleDateString(),
        courseDuration: course.duration,
        certificateId: `DIPLOMA-${course.id}-${Date.now()}`,
        courseCategory: course.category,
        grade: course.assessmentScores?.[0]?.grade || "Pass",
        isDiploma: true
      };

      const diplomaBlob = await CertificateGenerator.generateDiploma(diplomaData);
      const filename = `${course.title.replace(/\s+/g, '_')}_Diploma.pdf`;
      CertificateGenerator.downloadCertificate(diplomaBlob, filename);

      toast({
        title: "Diploma Generated! 🎉",
        description: "Your diploma has been downloaded successfully.",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to generate diploma. Please try again.",
        variant: "destructive"
      });
    }
  };

  const shareCourse = (platform: string) => {
    const courseUrl = `${window.location.origin}/course-viewer/1`;
    const text = "Check out this amazing course I'm taking!";
    
    let shareUrl = "";
    switch(platform) {
      case 'facebook':
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(courseUrl)}`;
        break;
      case 'twitter':
        shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(courseUrl)}`;
        break;
      case 'linkedin':
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(courseUrl)}`;
        break;
    }
    
    if (shareUrl) {
      window.open(shareUrl, '_blank', 'width=600,height=400');
    }
    
    toast({
      title: "Shared!",
      description: `Course shared on ${platform}`,
    });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* <Navigation /> removed to prevent double navbar */}
      
      <div className="container mx-auto px-4 py-8">
        <Tabs defaultValue="dashboard" className="w-full">
          <TabsList className="grid w-full grid-cols-6">
            <TabsTrigger value="dashboard">My Dashboard</TabsTrigger>
            <TabsTrigger value="courses">My Courses</TabsTrigger>
            <TabsTrigger value="certificates">Certificates</TabsTrigger>
            <TabsTrigger value="analytics">Learning Analytics</TabsTrigger>
            <TabsTrigger value="booking">1:1 Booking</TabsTrigger>
            <TabsTrigger value="settings">Account Settings</TabsTrigger>
          </TabsList>
          
          <TabsContent value="dashboard" className="mt-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Left Column */}
              <div className="lg:col-span-2 space-y-6">
                {/* Learning Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <Card>
                    <CardContent className="p-4 text-center">
                      <div className="text-2xl font-bold text-primary">{learningStats.totalCourses}</div>
                      <div className="text-sm text-muted-foreground">Total Courses</div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-4 text-center">
                      <div className="text-2xl font-bold text-green-600">{learningStats.completedCourses}</div>
                      <div className="text-sm text-muted-foreground">Completed</div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-4 text-center">
                      <div className="text-2xl font-bold text-cyan-300">{learningStats.inProgressCourses}</div>
                      <div className="text-sm text-muted-foreground">In Progress</div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-4 text-center">
                      <div className="text-2xl font-bold text-purple-600">{learningStats.certificatesEarned}</div>
                      <div className="text-sm text-muted-foreground">Certificates</div>
                    </CardContent>
                  </Card>
                </div>

                {/* Streak Section */}
                <Card className="bg-card border-border">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-4">
                      <Trophy className="h-5 w-5 text-yellow-500" />
                      <span className="text-foreground">You have a <span className="text-yellow-500 font-bold">{streak}-day</span> learning streak!</span>
                    </div>
                    
                    {/* Calendar Grid */}
                    <div className="mb-4">
                      <div className="grid grid-cols-7 gap-1 text-xs text-muted-foreground mb-2">
                        <div>M</div>
                        <div>W</div>
                        <div>F</div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                      </div>
                      
                      <div className="space-y-1">
                        <div className="text-xs text-muted-foreground mb-2">
                          <span className="inline-block w-12">Apr</span>
                          <span className="inline-block w-12">May</span>
                          <span className="inline-block w-12">Jun</span>
                          <span className="inline-block w-12">Jul</span>
                          <span className="inline-block w-12">Aug</span>
                        </div>
                        
                        {/* Calendar dots representing activity */}
                        {Array.from({ length: 3 }, (_, weekIndex) => (
                          <div key={weekIndex} className="flex gap-1">
                            {Array.from({ length: 15 }, (_, dayIndex) => (
                              <div
                                key={dayIndex}
                                className={`w-3 h-3 rounded-sm ${
                                  dayIndex === 10 && weekIndex === 1 
                                    ? 'bg-green-500' 
                                    : 'bg-muted'
                                }`}
                              />
                            ))}
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Recent Activity */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-foreground">Recent Learning Activity</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {enrolledCourses
                        .filter(course => course.status === 'in-progress' || course.status === 'completed')
                        .slice(0, 3)
                        .map((course) => (
                          <div key={course.id} className="flex items-center gap-4 p-4 rounded-lg bg-muted/50">
                            <div className="w-12 h-12 bg-[#16203a] rounded-lg flex items-center justify-center">
                              <BookOpen className="h-6 w-6 text-white" />
                            </div>
                            <div className="flex-1">
                              <h3 className="font-semibold text-foreground">{course.title}</h3>
                              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                                <span>Progress: {course.progress}%</span>
                                <span>Last accessed: {course.lastAccessed}</span>
                              </div>
                            </div>
                            <Button size="sm" onClick={() => window.open(`/course-viewer/${course.id}`, '_self')}>
                              Continue
                            </Button>
                          </div>
                        ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Right Column */}
              <div className="space-y-6">
                {/* Overall Progress */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-foreground">Overall Progress</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between text-sm mb-2">
                          <span>Average Progress</span>
                          <span>{learningStats.averageProgress}%</span>
                        </div>
                        <Progress value={learningStats.averageProgress} className="h-2" />
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-primary">{learningStats.totalHoursLearned}</div>
                        <div className="text-sm text-muted-foreground">Hours Learned</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Upcoming Events */}
                <Card className="bg-card border-border">
                  <CardHeader>
                    <CardTitle className="text-foreground">{t('studentPortal.upcomingEvents')}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    {upcomingEvents.map((event, index) => (
                      <div key={index} className="flex items-center gap-4 p-4 rounded-lg bg-muted/50">
                        <div className="text-center">
                          <div className="text-2xl font-bold text-foreground">{event.date.split(' ')[1]}</div>
                          <div className="text-xs text-muted-foreground">{event.date.split(' ')[0]}</div>
                        </div>
                        <div className="flex-1">
                          <Badge variant="outline" className="mb-2 text-xs">
                            {event.type}
                          </Badge>
                          <h3 className="font-semibold text-foreground">{event.title}</h3>
                          <div className="flex items-center gap-1 text-sm text-muted-foreground">
                            <Clock className="h-4 w-4" />
                            {event.time}
                          </div>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="courses" className="mt-6">
            <Card>
              <CardHeader>
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                  <CardTitle>My Courses</CardTitle>
                  <div className="flex gap-2">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input
                        placeholder="Search courses..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="pl-10 w-64"
                      />
                    </div>
                    <select
                      value={filterStatus}
                      onChange={(e) => setFilterStatus(e.target.value)}
                      className="px-3 py-2 border rounded-md"
                    >
                      <option value="all">All Courses</option>
                      <option value="in-progress">In Progress</option>
                      <option value="completed">Completed</option>
                      <option value="not-started">Not Started</option>
                    </select>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {filteredCourses.map((course) => (
                    <div key={course.id} className="border rounded-lg p-6 hover:shadow-md transition-shadow">
                      <div className="flex flex-col lg:flex-row gap-6">
                        {/* Course Image */}
                        <div className="w-full lg:w-48 h-32 bg-[#16203a] rounded-lg flex items-center justify-center">
                          <BookOpen className="h-12 w-12 text-white" />
                        </div>

                        {/* Course Info */}
                        <div className="flex-1">
                          <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4 mb-4">
                            <div>
                              <div className="flex items-center gap-2 mb-2">
                                <h3 className="text-xl font-semibold">{course.title}</h3>
                                {course.isBestseller && (
                                  <Badge className="bg-yellow-100 text-yellow-800">Bestseller</Badge>
                                )}
                                <Badge className={getStatusColor(course.status)}>
                                  {getStatusText(course.status)}
                                </Badge>
                              </div>
                              <p className="text-muted-foreground mb-2">by {course.instructor}</p>
                              <p className="text-sm text-muted-foreground">{course.description}</p>
                            </div>
                            <div className="flex items-center gap-1">
                              <Star className="h-4 w-4 text-yellow-500" />
                              <span className="font-semibold">{course.rating}</span>
                            </div>
                          </div>

                          {/* Progress and Stats */}
                          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                            <div>
                              <p className="text-sm text-muted-foreground">Progress</p>
                              <div className="flex items-center gap-2">
                                <Progress value={course.progress} className="flex-1 h-2" />
                                <span className="text-sm font-semibold">{course.progress}%</span>
                              </div>
                            </div>
                            <div>
                              <p className="text-sm text-muted-foreground">Lessons</p>
                              <p className="font-semibold">{course.completedLessons}/{course.totalLessons}</p>
                            </div>
                            <div>
                              <p className="text-sm text-muted-foreground">Duration</p>
                              <p className="font-semibold">{course.duration}</p>
                            </div>
                            <div>
                              <p className="text-sm text-muted-foreground">Last Accessed</p>
                              <p className="font-semibold">{course.lastAccessed}</p>
                            </div>
                          </div>

                          {/* Actions */}
                          <div className="flex flex-wrap gap-2">
                            {course.status === 'in-progress' && (
                              <Button onClick={() => window.open(`/course-viewer/${course.id}`, '_self')}>
                                <Play className="h-4 w-4 mr-2" />
                                Continue Learning
                              </Button>
                            )}
                            {course.status === 'not-started' && (
                              <Button onClick={() => window.open(`/course-viewer/${course.id}`, '_self')}>
                                <Play className="h-4 w-4 mr-2" />
                                Start Learning
                              </Button>
                            )}
                            {course.status === 'completed' && (
                              <Button variant="outline" onClick={() => toast({ title: "Certificate downloaded", description: "Your certificate has been downloaded" })}>
                                <FileText className="h-4 w-4 mr-2" />
                                Download Certificate
                              </Button>
                            )}
                            <Button variant="outline" onClick={() => shareCourse('facebook')}>
                              <Share2 className="h-4 w-4 mr-2" />
                              Share
                            </Button>
                            <Button variant="outline">
                              <Download className="h-4 w-4 mr-2" />
                              Download
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="certificates" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>My Certificates</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {enrolledCourses
                    .filter(course => course.certificateEarned)
                    .map((course) => (
                      <div key={course.id} className="flex items-center justify-between p-4 border rounded-lg">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 bg-[#16203a] rounded-lg flex items-center justify-center">
                            <Award className="h-6 w-6 text-white" />
                          </div>
                          <div>
                            <h3 className="font-semibold">{course.title}</h3>
                            <p className="text-sm text-muted-foreground">Completed on {course.lastAccessed}</p>
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm">
                            <Download className="h-4 w-4 mr-2" />
                            Download
                          </Button>
                          <Button variant="outline" size="sm">
                            <Share2 className="h-4 w-4 mr-2" />
                            Share
                          </Button>
                        </div>
                      </div>
                    ))}
                  {enrolledCourses.filter(course => course.certificateEarned).length === 0 && (
                    <div className="text-center py-8">
                      <Award className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                      <h3 className="text-lg font-semibold mb-2">No certificates yet</h3>
                      <p className="text-muted-foreground">Complete your courses to earn certificates!</p>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="analytics" className="mt-6">
            <div className="space-y-6">
              {/* Learning Analytics Overview */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BarChart3 className="h-5 w-5" />
                    Learning Analytics Overview
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                    <div className="text-center p-4 bg-[#11204a] rounded-lg">
                      <div className="text-2xl font-bold text-cyan-300">45</div>
                      <div className="text-sm text-gray-600">Total Hours</div>
                    </div>
                    <div className="text-center p-4 bg-green-50 rounded-lg">
                      <div className="text-2xl font-bold text-green-600">2.3</div>
                      <div className="text-sm text-gray-600">Avg. Time/Chapter (min)</div>
                    </div>
                    <div className="text-center p-4 bg-yellow-50 rounded-lg">
                      <div className="text-2xl font-bold text-yellow-600">3</div>
                      <div className="text-sm text-gray-600">Fast Forward Events</div>
                    </div>
                    <div className="text-center p-4 bg-purple-50 rounded-lg">
                      <div className="text-2xl font-bold text-purple-600">Normal</div>
                      <div className="text-sm text-gray-600">Learning Pattern</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Course-Specific Analytics */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Activity className="h-5 w-5" />
                    Course-Specific Analytics
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {enrolledCourses.map((course) => (
                      <div key={course.id} className="border rounded-lg p-4">
                        <div className="flex items-center justify-between mb-4">
                          <h3 className="font-semibold">{course.title}</h3>
                          <Badge className={course.learningAnalytics?.learningPattern === 'normal' ? 'bg-green-100 text-green-800' : 
                                           course.learningAnalytics?.learningPattern === 'suspicious' ? 'bg-yellow-100 text-yellow-800' : 
                                           'bg-red-100 text-red-800'}>
                            {course.learningAnalytics?.learningPattern || 'Normal'} Pattern
                          </Badge>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                          <div>
                            <p className="text-sm text-gray-600">Time Spent</p>
                            <p className="font-semibold">{course.learningAnalytics?.totalTimeSpent || 0} minutes</p>
                          </div>
                          <div>
                            <p className="text-sm text-gray-600">Chapters Completed</p>
                            <p className="font-semibold">{course.learningAnalytics?.chaptersCompleted || 0} / {course.totalLessons}</p>
                          </div>
                          <div>
                            <p className="text-sm text-gray-600">Avg. Time/Chapter</p>
                            <p className="font-semibold">{course.learningAnalytics?.averageTimePerChapter || 0} min</p>
                          </div>
                        </div>

                        {/* Behavior Flags */}
                        {course.learningAnalytics?.unusualBehaviorFlags && course.learningAnalytics.unusualBehaviorFlags.length > 0 && (
                          <div className="mb-4">
                            <p className="text-sm font-medium text-red-600 mb-2">⚠️ Unusual Behavior Detected:</p>
                            <div className="flex flex-wrap gap-2">
                              {course.learningAnalytics.unusualBehaviorFlags.map((flag, index) => (
                                <Badge key={index} variant="destructive" className="text-xs">
                                  {flag.replace(/_/g, ' ')}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Assessment Scores */}
                        {course.assessmentScores && course.assessmentScores.length > 0 && (
                          <div>
                            <p className="text-sm font-medium mb-2">Assessment Performance:</p>
                            <div className="space-y-2">
                              {course.assessmentScores.map((assessment, index) => (
                                <div key={index} className="flex items-center justify-between p-2 bg-gray-50 rounded">
                                  <span className="text-sm">Assessment {index + 1}</span>
                                  <div className="flex items-center gap-2">
                                    <span className="text-sm">{assessment.score}/{assessment.maxScore}</span>
                                    <Badge className={assessment.score >= 80 ? 'bg-green-100 text-green-800' : 
                                                     assessment.score >= 60 ? 'bg-yellow-100 text-yellow-800' : 
                                                     'bg-red-100 text-red-800'}>
                                      {assessment.grade}
                                    </Badge>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Anti-Cheating Alerts */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <AlertTriangle className="h-5 w-5 text-red-500" />
                    Learning Integrity Alerts
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                      <div className="flex items-start gap-3">
                        <AlertTriangle className="h-5 w-5 text-yellow-600 mt-0.5" />
                        <div>
                          <h4 className="font-medium text-yellow-800">Suspicious Activity Detected</h4>
                          <p className="text-sm text-yellow-700 mt-1">
                            Multiple fast-forward events detected in "Digital Marketing Fundamentals". 
                            Consider reviewing the material more thoroughly.
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5" />
                        <div>
                          <h4 className="font-medium text-green-800">Good Learning Pattern</h4>
                          <p className="text-sm text-green-700 mt-1">
                            Your learning pattern in "Web Development Bootcamp" shows consistent engagement 
                            and appropriate time spent on each chapter.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Learning Recommendations */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Lightbulb className="h-5 w-5" />
                    Learning Recommendations
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <Zap className="h-4 w-4 text-cyan-300 mt-0.5" />
                      <div>
                        <p className="font-medium">Optimize Your Learning</p>
                        <p className="text-sm text-gray-600">Try to spend at least 3-5 minutes per chapter for better retention</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Eye className="h-4 w-4 text-green-500 mt-0.5" />
                      <div>
                        <p className="font-medium">Review Completed Chapters</p>
                        <p className="text-sm text-gray-600">Revisit previous chapters to reinforce your understanding</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Target className="h-4 w-4 text-purple-500 mt-0.5" />
                      <div>
                        <p className="font-medium">Focus on Weak Areas</p>
                        <p className="text-sm text-gray-600">Your assessment scores suggest reviewing advanced concepts</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="booking" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>1:1 Booking</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8">
                  <Calendar className="h-16 w-16 text-primary mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Book a 1:1 Session</h3>
                  <p className="text-muted-foreground mb-6">
                    Schedule a personalized 1-on-1 session with one of our expert instructors.
                    Perfect for getting immediate feedback and personalized guidance.
                  </p>
                  <div className="space-y-4">
                    <Button asChild className="w-full sm:w-auto">
                      <a href="/one-to-one-booking">Book Now</a>
                    </Button>
                    <div className="text-sm text-muted-foreground">
                      <p>• Get personalized guidance from experts</p>
                      <p>• Receive immediate feedback on your work</p>
                      <p>• Ask questions and get detailed explanations</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="settings" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Account Settings</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Notification Settings */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Notification Preferences</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <Label htmlFor="email-notifications">Email Notifications</Label>
                        <p className="text-sm text-muted-foreground">Receive course updates and announcements</p>
                      </div>
                      <Switch
                        id="email-notifications"
                        checked={settings.emailNotifications}
                        onCheckedChange={(checked) => setSettings({...settings, emailNotifications: checked})}
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <Label htmlFor="push-notifications">Push Notifications</Label>
                        <p className="text-sm text-muted-foreground">Get real-time updates on your device</p>
                      </div>
                      <Switch
                        id="push-notifications"
                        checked={settings.pushNotifications}
                        onCheckedChange={(checked) => setSettings({...settings, pushNotifications: checked})}
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <Label htmlFor="course-updates">Course Updates</Label>
                        <p className="text-sm text-muted-foreground">Notifications about new course content</p>
                      </div>
                      <Switch
                        id="course-updates"
                        checked={settings.courseUpdates}
                        onCheckedChange={(checked) => setSettings({...settings, courseUpdates: checked})}
                      />
                    </div>
                  </div>
                </div>

                {/* Social Links */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Social Media Links</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="facebook">Facebook</Label>
                      <Input
                        id="facebook"
                        placeholder="Your Facebook profile"
                        value={settings.socialLinks.facebook}
                        onChange={(e) => setSettings({
                          ...settings,
                          socialLinks: {...settings.socialLinks, facebook: e.target.value}
                        })}
                      />
                    </div>
                    <div>
                      <Label htmlFor="twitter">Twitter</Label>
                      <Input
                        id="twitter"
                        placeholder="Your Twitter handle"
                        value={settings.socialLinks.twitter}
                        onChange={(e) => setSettings({
                          ...settings,
                          socialLinks: {...settings.socialLinks, twitter: e.target.value}
                        })}
                      />
                    </div>
                    <div>
                      <Label htmlFor="linkedin">LinkedIn</Label>
                      <Input
                        id="linkedin"
                        placeholder="Your LinkedIn profile"
                        value={settings.socialLinks.linkedin}
                        onChange={(e) => setSettings({
                          ...settings,
                          socialLinks: {...settings.socialLinks, linkedin: e.target.value}
                        })}
                      />
                    </div>
                    <div>
                      <Label htmlFor="instagram">Instagram</Label>
                      <Input
                        id="instagram"
                        placeholder="Your Instagram handle"
                        value={settings.socialLinks.instagram}
                        onChange={(e) => setSettings({
                          ...settings,
                          socialLinks: {...settings.socialLinks, instagram: e.target.value}
                        })}
                      />
                    </div>
                  </div>
                </div>

                <Button className="w-full">Save Settings</Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default StudentPortal;