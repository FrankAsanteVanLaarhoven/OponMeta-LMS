import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { 
  Users, 
  FolderOpen, 
  BookOpen, 
  Target, 
  Zap, 
  Award, 
  Calendar, 
  Trash2,
  Plus,
  Search,
  Filter,
  Download,
  Upload,
  Edit,
  Delete,
  Eye,
  Clock,
  Star,
  CheckCircle,
  X,
  ArrowRight,
  MessageSquare,
  Bell,
  Settings,
  User,
  Mail,
  Phone,
  MapPin,
  Globe,
  CreditCard,
  Wallet,
  TrendingUp,
  BarChart3,
  PieChart,
  Activity,
  Bookmark,
  Share,
  Heart,
  ThumbsUp,
  ThumbsDown,
  Flag,
  MoreHorizontal,
  ChevronRight,
  ChevronDown,
  Play,
  Pause,
  Volume2,
  Maximize,
  Minimize,
  SkipBack,
  SkipForward,
  RotateCcw,
  Settings as SettingsIcon,
  HelpCircle,
  MessageCircle,
  Star as StarIcon,
  Award as AwardIcon,
  Trophy,
  Medal,
  Crown,
  Target as TargetIcon,
  Brain,
  Palette,
  Layers,
  Wifi,
  Shield,
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
  FolderOpen as FolderOpenIcon,
  Target as TargetIcon2,
  Zap as ZapIcon2,
  Award as AwardIcon2,
  Calendar as CalendarIcon2,
  Trash2 as Trash2Icon,
  FileText,
  Video
} from 'lucide-react';

// Announcements Widget
export const AnnouncementsWidget = () => {
  const [announcements] = useState([
    {
      id: 1,
      title: "New Course Available: Advanced JavaScript",
      content: "Learn advanced JavaScript concepts including ES6+, async/await, and modern frameworks.",
      date: "2024-01-15",
      priority: "high",
      read: false
    },
    {
      id: 2,
      title: "System Maintenance Notice",
      content: "Scheduled maintenance on Sunday, 2:00 AM - 4:00 AM. Some features may be temporarily unavailable.",
      date: "2024-01-14",
      priority: "medium",
      read: true
    },
    {
      id: 3,
      title: "Holiday Schedule Update",
      content: "Platform will be closed for New Year's Day. All courses and features will be available on January 2nd.",
      date: "2024-01-10",
      priority: "low",
      read: true
    }
  ]);

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'bg-red-100 text-red-800';
      case 'medium': return 'bg-yellow-100 text-yellow-800';
      case 'low': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-white">Announcements</h3>
        <Button variant="outline" size="sm" className="text-white border-gray-600 hover:bg-gray-700">
          <Plus className="w-4 h-4 mr-2" />
          New
        </Button>
      </div>
      
      <div className="space-y-3">
        {announcements.map((announcement) => (
          <Card key={announcement.id} className={`bg-gray-800 border-gray-700 ${!announcement.read ? 'border-l-4 border-l-blue-500' : ''}`}>
            <CardContent className="p-4">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-2">
                    <h4 className="font-medium text-white">{announcement.title}</h4>
                    <Badge className={getPriorityColor(announcement.priority)}>
                      {announcement.priority}
                    </Badge>
                  </div>
                  <p className="text-sm text-gray-300 mb-2">{announcement.content}</p>
                  <p className="text-xs text-gray-400">{announcement.date}</p>
                </div>
                {!announcement.read && (
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

// Instructors Widget
export const InstructorsWidget = () => {
  const [instructors] = useState([
    {
      id: 1,
      name: "Dr. Sarah Chen",
      specialty: "Web Development",
      rating: 4.9,
      students: 12500,
      courses: 8,
      avatar: "/avatars/sarah.jpg",
      status: "online"
    },
    {
      id: 2,
      name: "Mike Rodriguez",
      specialty: "Data Science",
      rating: 4.8,
      students: 8900,
      courses: 6,
      avatar: "/avatars/mike.jpg",
      status: "offline"
    },
    {
      id: 3,
      name: "Emma Thompson",
      specialty: "Digital Marketing",
      rating: 4.7,
      students: 6700,
      courses: 5,
      avatar: "/avatars/emma.jpg",
      status: "online"
    }
  ]);

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-white">Top Instructors</h3>
        <Button variant="outline" size="sm" className="text-white border-gray-600 hover:bg-gray-700">
          View All
        </Button>
      </div>
      
      <div className="space-y-3">
        {instructors.map((instructor) => (
          <Card key={instructor.id} className="bg-gray-800 border-gray-700">
            <CardContent className="p-4">
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <div className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center">
                    <User className="w-6 h-6 text-gray-400" />
                  </div>
                  <div className={`absolute -bottom-1 -right-1 w-4 h-4 rounded-full border-2 border-gray-800 ${
                    instructor.status === 'online' ? 'bg-green-500' : 'bg-gray-500'
                  }`}></div>
                </div>
                <div className="flex-1">
                  <h4 className="font-medium text-white">{instructor.name}</h4>
                  <p className="text-sm text-gray-300">{instructor.specialty}</p>
                  <div className="flex items-center space-x-2 mt-1">
                    <div className="flex items-center">
                      <StarIcon className="w-3 h-3 text-yellow-400 fill-current" />
                      <span className="text-xs text-gray-300 ml-1">{instructor.rating}</span>
                    </div>
                    <span className="text-xs text-gray-400">•</span>
                    <span className="text-xs text-gray-300">{instructor.students} students</span>
                  </div>
                </div>
                <Button variant="ghost" size="sm" className="text-blue-400 hover:bg-blue-600/20">
                  <MessageSquare className="w-4 h-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

// Folders Widget
export const FoldersWidget = () => {
  const [folders] = useState([
    {
      id: 1,
      name: "Course Materials",
      files: 24,
      lastModified: "2 hours ago",
      type: "folder"
    },
    {
      id: 2,
      name: "Assignments",
      files: 8,
      lastModified: "1 day ago",
      type: "folder"
    },
    {
      id: 3,
      name: "Study Notes",
      files: 15,
      lastModified: "3 days ago",
      type: "folder"
    },
    {
      id: 4,
      name: "Certificates",
      files: 3,
      lastModified: "1 week ago",
      type: "folder"
    }
  ]);

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-white">My Folders</h3>
        <Button variant="outline" size="sm" className="text-white border-gray-600 hover:bg-gray-700">
          <Plus className="w-4 h-4 mr-2" />
          New Folder
        </Button>
      </div>
      
      <div className="grid grid-cols-2 gap-3">
        {folders.map((folder) => (
          <Card key={folder.id} className="bg-gray-800 border-gray-700 hover:bg-gray-750 cursor-pointer">
            <CardContent className="p-4">
              <div className="flex items-center space-x-3">
                <FolderOpen className="w-8 h-8 text-blue-400" />
                <div className="flex-1">
                  <h4 className="font-medium text-white text-sm">{folder.name}</h4>
                  <p className="text-xs text-gray-300">{folder.files} files</p>
                  <p className="text-xs text-gray-400">{folder.lastModified}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

// Learning Path Widget
export const LearningPathWidget = () => {
  const [learningPath] = useState([
    {
      id: 1,
      title: "Web Development Fundamentals",
      progress: 100,
      completed: true,
      nextStep: "Advanced JavaScript"
    },
    {
      id: 2,
      title: "Advanced JavaScript",
      progress: 65,
      completed: false,
      nextStep: "React Framework"
    },
    {
      id: 3,
      title: "React Framework",
      progress: 0,
      completed: false,
      nextStep: "Full Stack Development"
    },
    {
      id: 4,
      title: "Full Stack Development",
      progress: 0,
      completed: false,
      nextStep: "Deployment & DevOps"
    }
  ]);

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-white">Learning Path</h3>
        <Button variant="outline" size="sm" className="text-white border-gray-600 hover:bg-gray-700">
          View Full Path
        </Button>
      </div>
      
      <div className="space-y-3">
        {learningPath.map((step, index) => (
          <div key={step.id} className="relative">
            <Card className={`bg-gray-800 border-gray-700 ${step.completed ? 'border-l-4 border-l-green-500' : ''}`}>
              <CardContent className="p-4">
                <div className="flex items-center space-x-3">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    step.completed ? 'bg-green-500' : 'bg-gray-600'
                  }`}>
                    {step.completed ? (
                      <CheckCircle className="w-5 h-5 text-white" />
                    ) : (
                      <span className="text-white text-sm font-medium">{index + 1}</span>
                    )}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium text-white">{step.title}</h4>
                    <div className="flex items-center space-x-2 mt-1">
                      <div className="flex-1 bg-gray-700 rounded-full h-2">
                        <div 
                          className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                          style={{ width: `${step.progress}%` }}
                        ></div>
                      </div>
                      <span className="text-xs text-gray-300">{step.progress}%</span>
                    </div>
                    {step.progress > 0 && step.progress < 100 && (
                      <p className="text-xs text-gray-400 mt-1">Next: {step.nextStep}</p>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
            {index < learningPath.length - 1 && (
              <div className="absolute left-4 top-12 w-0.5 h-6 bg-gray-600"></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

// Library Widget
export const LibraryWidget = () => {
  const [resources] = useState([
    {
      id: 1,
      title: "JavaScript ES6+ Guide",
      type: "pdf",
      size: "2.3 MB",
      downloads: 1250,
      rating: 4.8
    },
    {
      id: 2,
      title: "React Best Practices",
      type: "video",
      size: "45.2 MB",
      downloads: 890,
      rating: 4.9
    },
    {
      id: 3,
      title: "CSS Grid Layout",
      type: "pdf",
      size: "1.8 MB",
      downloads: 670,
      rating: 4.7
    },
    {
      id: 4,
      title: "Node.js Fundamentals",
      type: "video",
      size: "67.1 MB",
      downloads: 445,
      rating: 4.6
    }
  ]);

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-white">Resource Library</h3>
        <div className="flex space-x-2">
          <Button variant="outline" size="sm" className="text-white border-gray-600 hover:bg-gray-700">
            <Search className="w-4 h-4" />
          </Button>
          <Button variant="outline" size="sm" className="text-white border-gray-600 hover:bg-gray-700">
            <Filter className="w-4 h-4" />
          </Button>
        </div>
      </div>
      
      <div className="space-y-3">
        {resources.map((resource) => (
          <Card key={resource.id} className="bg-gray-800 border-gray-700 hover:bg-gray-750 cursor-pointer">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gray-700 rounded flex items-center justify-center">
                    {resource.type === 'pdf' ? (
                      <FileText className="w-5 h-5 text-red-400" />
                    ) : (
                      <Video className="w-5 h-5 text-blue-400" />
                    )}
                  </div>
                  <div>
                    <h4 className="font-medium text-white text-sm">{resource.title}</h4>
                    <div className="flex items-center space-x-2 mt-1">
                      <span className="text-xs text-gray-300">{resource.size}</span>
                      <span className="text-xs text-gray-400">•</span>
                      <div className="flex items-center">
                        <StarIcon className="w-3 h-3 text-yellow-400 fill-current" />
                        <span className="text-xs text-gray-300 ml-1">{resource.rating}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <Button variant="ghost" size="sm" className="text-blue-400 hover:bg-blue-600/20">
                  <Download className="w-4 h-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

// Ready to Use Courses Widget
export const ReadyToUseCoursesWidget = () => {
  const [courses] = useState([
    {
      id: 1,
      title: "Complete React Course",
      instructor: "Max Johnson",
      duration: "12 hours",
      students: 8500,
      rating: 4.9,
      price: 89.99,
      originalPrice: 129.99,
      image: "/courses/react.jpg"
    },
    {
      id: 2,
      title: "Python for Data Science",
      instructor: "Dr. Lisa Wang",
      duration: "18 hours",
      students: 6200,
      rating: 4.8,
      price: 79.99,
      originalPrice: 99.99,
      image: "/courses/python.jpg"
    },
    {
      id: 3,
      title: "UI/UX Design Masterclass",
      instructor: "Alex Chen",
      duration: "15 hours",
      students: 4300,
      rating: 4.7,
      price: 69.99,
      originalPrice: 89.99,
      image: "/courses/design.jpg"
    }
  ]);

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-white">Ready to Use Courses</h3>
        <Button variant="outline" size="sm" className="text-white border-gray-600 hover:bg-gray-700">
          Browse All
        </Button>
      </div>
      
      <div className="space-y-3">
        {courses.map((course) => (
          <Card key={course.id} className="bg-gray-800 border-gray-700 hover:bg-gray-750 cursor-pointer">
            <CardContent className="p-4">
              <div className="flex items-center space-x-3">
                <div className="w-16 h-12 bg-gray-700 rounded flex items-center justify-center">
                  <Play className="w-6 h-6 text-gray-400" />
                </div>
                <div className="flex-1">
                  <h4 className="font-medium text-white text-sm">{course.title}</h4>
                  <p className="text-xs text-gray-300">by {course.instructor}</p>
                  <div className="flex items-center space-x-2 mt-1">
                    <span className="text-xs text-gray-300">{course.duration}</span>
                    <span className="text-xs text-gray-400">•</span>
                    <div className="flex items-center">
                      <StarIcon className="w-3 h-3 text-yellow-400 fill-current" />
                      <span className="text-xs text-gray-300 ml-1">{course.rating}</span>
                    </div>
                    <span className="text-xs text-gray-400">•</span>
                    <span className="text-xs text-gray-300">{course.students} students</span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="flex items-center space-x-1">
                    <span className="text-sm font-medium text-white">${course.price}</span>
                    <span className="text-xs text-gray-400 line-through">${course.originalPrice}</span>
                  </div>
                  <Button size="sm" className="mt-1 bg-blue-600 hover:bg-blue-700 text-white">
                    Enroll
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

// Automation Widget
export const AutomationWidget = () => {
  const [automations] = useState([
    {
      id: 1,
      name: "Daily Study Reminder",
      description: "Sends daily notifications to continue learning",
      status: "active",
      schedule: "Daily at 9:00 AM"
    },
    {
      id: 2,
      name: "Progress Report",
      description: "Weekly progress summary sent to email",
      status: "active",
      schedule: "Every Sunday"
    },
    {
      id: 3,
      name: "Course Completion Certificate",
      description: "Automatically generates certificates upon completion",
      status: "inactive",
      schedule: "On completion"
    }
  ]);

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-white">Learning Automations</h3>
        <Button variant="outline" size="sm" className="text-white border-gray-600 hover:bg-gray-700">
          <Plus className="w-4 h-4 mr-2" />
          New Automation
        </Button>
      </div>
      
      <div className="space-y-3">
        {automations.map((automation) => (
          <Card key={automation.id} className="bg-gray-800 border-gray-700">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    automation.status === 'active' ? 'bg-green-500' : 'bg-gray-600'
                  }`}>
                    <Zap className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-medium text-white text-sm">{automation.name}</h4>
                    <p className="text-xs text-gray-300">{automation.description}</p>
                    <p className="text-xs text-gray-400">{automation.schedule}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Badge className={automation.status === 'active' ? 'bg-green-900 text-green-200' : 'bg-gray-600 text-gray-300'}>
                    {automation.status}
                  </Badge>
                  <Button variant="ghost" size="sm" className="text-gray-400 hover:bg-gray-700">
                    <Settings className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

// Gamification Widget
export const GamificationWidget = () => {
  const [achievements] = useState([
    {
      id: 1,
      name: "Quick Learner",
      description: "Complete 5 lessons in one day",
      icon: "⚡",
      earned: true,
      date: "2024-01-15"
    },
    {
      id: 2,
      name: "Consistent Student",
      description: "Study for 7 consecutive days",
      icon: "🔥",
      earned: false,
      progress: 5
    },
    {
      id: 3,
      name: "Course Master",
      description: "Complete your first course",
      icon: "🎓",
      earned: true,
      date: "2024-01-10"
    }
  ]);

  const [leaderboard] = useState([
    { rank: 1, name: "Sarah Chen", points: 2840, avatar: "/avatars/sarah.jpg" },
    { rank: 2, name: "Mike Rodriguez", points: 2650, avatar: "/avatars/mike.jpg" },
    { rank: 3, name: "Emma Thompson", points: 2420, avatar: "/avatars/emma.jpg" },
    { rank: 4, name: "You", points: 2180, avatar: "/avatars/you.jpg" },
    { rank: 5, name: "Alex Johnson", points: 1950, avatar: "/avatars/alex.jpg" }
  ]);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-white">Gamification</h3>
        <Button variant="outline" size="sm" className="text-white border-gray-600 hover:bg-gray-700">
          View All
        </Button>
      </div>
      
      {/* Achievements */}
      <div>
        <h4 className="text-md font-medium text-white mb-3">Recent Achievements</h4>
        <div className="space-y-2">
          {achievements.map((achievement) => (
            <Card key={achievement.id} className="bg-gray-800 border-gray-700">
              <CardContent className="p-3">
                <div className="flex items-center space-x-3">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-lg ${
                    achievement.earned ? 'bg-yellow-500' : 'bg-gray-600'
                  }`}>
                    {achievement.icon}
                  </div>
                  <div className="flex-1">
                    <h5 className="font-medium text-white text-sm">{achievement.name}</h5>
                    <p className="text-xs text-gray-300">{achievement.description}</p>
                    {achievement.earned ? (
                      <p className="text-xs text-green-400">Earned {achievement.date}</p>
                    ) : (
                      <div className="flex items-center space-x-2 mt-1">
                        <div className="flex-1 bg-gray-700 rounded-full h-1">
                          <div 
                            className="bg-yellow-500 h-1 rounded-full"
                            style={{ width: `${(achievement.progress / 7) * 100}%` }}
                          ></div>
                        </div>
                        <span className="text-xs text-gray-300">{achievement.progress}/7</span>
                      </div>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Leaderboard */}
      <div>
        <h4 className="text-md font-medium text-white mb-3">Leaderboard</h4>
        <div className="space-y-2">
          {leaderboard.map((player) => (
            <Card key={player.rank} className={`bg-gray-800 border-gray-700 ${player.name === 'You' ? 'border-l-4 border-l-blue-500' : ''}`}>
              <CardContent className="p-3">
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-gray-700 rounded-full flex items-center justify-center">
                    <span className="text-xs font-medium text-white">{player.rank}</span>
                  </div>
                  <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center">
                    <User className="w-4 h-4 text-gray-400" />
                  </div>
                  <div className="flex-1">
                    <h5 className={`font-medium text-sm ${player.name === 'You' ? 'text-blue-400' : 'text-white'}`}>
                      {player.name}
                    </h5>
                  </div>
                  <span className="text-sm text-gray-300">{player.points} pts</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

// Training Calendar Widget
export const TrainingCalendarWidget = () => {
  const [events] = useState([
    {
      id: 1,
      title: "Web Development Workshop",
      date: "2024-01-20",
      time: "10:00 AM - 12:00 PM",
      type: "workshop",
      instructor: "Dr. Sarah Chen",
      attendees: 45
    },
    {
      id: 2,
      title: "Data Science Q&A Session",
      date: "2024-01-22",
      time: "2:00 PM - 3:00 PM",
      type: "qa",
      instructor: "Mike Rodriguez",
      attendees: 32
    },
    {
      id: 3,
      title: "Project Review Meeting",
      date: "2024-01-25",
      time: "11:00 AM - 12:00 PM",
      type: "review",
      instructor: "Emma Thompson",
      attendees: 8
    }
  ]);

  const getEventTypeColor = (type: string) => {
    switch (type) {
      case 'workshop': return 'bg-blue-500';
      case 'qa': return 'bg-green-500';
      case 'review': return 'bg-purple-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-white">Training Calendar</h3>
        <Button variant="outline" size="sm" className="text-white border-gray-600 hover:bg-gray-700">
          <Plus className="w-4 h-4 mr-2" />
          Schedule Event
        </Button>
      </div>
      
      <div className="space-y-3">
        {events.map((event) => (
          <Card key={event.id} className="bg-gray-800 border-gray-700 hover:bg-gray-750 cursor-pointer">
            <CardContent className="p-4">
              <div className="flex items-start space-x-3">
                <div className={`w-3 h-3 rounded-full mt-2 ${getEventTypeColor(event.type)}`}></div>
                <div className="flex-1">
                  <h4 className="font-medium text-white text-sm">{event.title}</h4>
                  <p className="text-xs text-gray-300">by {event.instructor}</p>
                  <div className="flex items-center space-x-2 mt-1">
                    <Calendar className="w-3 h-3 text-gray-400" />
                    <span className="text-xs text-gray-300">{event.date}</span>
                    <span className="text-xs text-gray-400">•</span>
                    <Clock className="w-3 h-3 text-gray-400" />
                    <span className="text-xs text-gray-300">{event.time}</span>
                    <span className="text-xs text-gray-400">•</span>
                    <Users className="w-3 h-3 text-gray-400" />
                    <span className="text-xs text-gray-300">{event.attendees} attending</span>
                  </div>
                </div>
                <Button variant="ghost" size="sm" className="text-blue-400 hover:bg-blue-600/20">
                  Join
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

// Trash Widget
export const TrashWidget = () => {
  const [deletedItems] = useState([
    {
      id: 1,
      name: "Old Course Notes.pdf",
      type: "file",
      deletedDate: "2024-01-10",
      size: "2.3 MB"
    },
    {
      id: 2,
      name: "Draft Assignment",
      type: "document",
      deletedDate: "2024-01-08",
      size: "1.1 MB"
    },
    {
      id: 3,
      name: "Temporary Folder",
      type: "folder",
      deletedDate: "2024-01-05",
      size: "15.7 MB"
    }
  ]);

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-white">Trash</h3>
        <Button variant="outline" size="sm" className="text-white border-gray-600 hover:bg-gray-700">
          Empty Trash
        </Button>
      </div>
      
      <div className="space-y-3">
        {deletedItems.map((item) => (
          <Card key={item.id} className="bg-gray-800 border-gray-700">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-gray-700 rounded flex items-center justify-center">
                    {item.type === 'folder' ? (
                      <FolderOpen className="w-4 h-4 text-gray-400" />
                    ) : (
                      <FileText className="w-4 h-4 text-gray-400" />
                    )}
                  </div>
                  <div>
                    <h4 className="font-medium text-white text-sm">{item.name}</h4>
                    <p className="text-xs text-gray-300">Deleted {item.deletedDate}</p>
                    <p className="text-xs text-gray-400">{item.size}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Button variant="ghost" size="sm" className="text-green-400 hover:bg-green-600/20">
                    <RotateCcw className="w-4 h-4" />
                  </Button>
                  <Button variant="ghost" size="sm" className="text-red-400 hover:bg-red-600/20">
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}; 