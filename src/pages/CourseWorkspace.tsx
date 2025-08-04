import React, { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { 
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
  ThumbsUp,
  ThumbsDown,
  Flag,
  Bookmark,
  Download,
  Upload,
  FileText,
  Video,
  Headphones,
  File,
  CheckCircle,
  Clock,
  ChevronRight,
  ChevronDown,
  Star,
  Share,
  MoreHorizontal,
  ArrowLeft,
  ArrowRight,
  Plus,
  Edit,
  Trash2,
  Eye,
  EyeOff,
  BookOpen,
  Target,
  Award,
  Users,
  Calendar,
  Globe,
  Zap,
  Shield,
  Brain,
  Palette,
  Layers,
  Activity,
  TrendingUp,
  BarChart3,
  PieChart,
  LineChart,
  Download as DownloadIcon,
  Bookmark as BookmarkIcon,
  MessageSquare,
  User,
  Settings,
  Bell,
  Search,
  Home,
  ShoppingBag,
  Calendar as CalendarIcon,
  Trophy,
  Wallet,
  Bot
} from 'lucide-react';
import { useNavigate, useParams } from 'react-router-dom';

const CourseWorkspace = () => {
  const navigate = useNavigate();
  const { courseId } = useParams();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showNotes, setShowNotes] = useState(false);
  const [showBookmarks, setShowBookmarks] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');
  const [currentModule, setCurrentModule] = useState(0);
  const [currentLesson, setCurrentLesson] = useState(0);
  const [notes, setNotes] = useState('');
  const [bookmarks, setBookmarks] = useState<Array<{time: number, title: string}>>([]);

  const courseData = {
    id: courseId,
    title: "Complete Web Development Bootcamp",
    instructor: "Dr. Angela Yu",
    progress: 65,
    totalModules: 12,
    completedModules: 8,
    totalLessons: 45,
    completedLessons: 29,
    rating: 4.8,
    students: 125000,
    lastAccessed: "2 hours ago",
    modules: [
      {
        id: 1,
        title: "Introduction to Web Development",
        lessons: [
          { id: 1, title: "Welcome to the Course", duration: "5:30", type: "video", completed: true },
          { id: 2, title: "Setting Up Your Development Environment", duration: "12:45", type: "video", completed: true },
          { id: 3, title: "Understanding HTML Basics", duration: "18:20", type: "video", completed: true },
          { id: 4, title: "HTML Practice Exercise", duration: "15:00", type: "exercise", completed: false }
        ]
      },
      {
        id: 2,
        title: "HTML Fundamentals",
        lessons: [
          { id: 5, title: "HTML Document Structure", duration: "22:15", type: "video", completed: true },
          { id: 6, title: "Working with Text and Headings", duration: "16:40", type: "video", completed: true },
          { id: 7, title: "Creating Lists and Links", duration: "19:30", type: "video", completed: false },
          { id: 8, title: "HTML Forms and Inputs", duration: "25:10", type: "video", completed: false },
          { id: 9, title: "HTML Project: Personal Website", duration: "45:00", type: "project", completed: false }
        ]
      },
      {
        id: 3,
        title: "CSS Styling",
        lessons: [
          { id: 10, title: "Introduction to CSS", duration: "20:30", type: "video", completed: false },
          { id: 11, title: "CSS Selectors and Properties", duration: "28:15", type: "video", completed: false },
          { id: 12, title: "Box Model and Layout", duration: "32:45", type: "video", completed: false },
          { id: 13, title: "CSS Flexbox", duration: "35:20", type: "video", completed: false },
          { id: 14, title: "CSS Grid", duration: "40:10", type: "video", completed: false }
        ]
      }
    ],
    resources: [
      { id: 1, title: "Course Syllabus", type: "pdf", size: "2.3 MB" },
      { id: 2, title: "HTML Cheat Sheet", type: "pdf", size: "1.1 MB" },
      { id: 3, title: "CSS Reference Guide", type: "pdf", size: "3.2 MB" },
      { id: 4, title: "Project Files", type: "zip", size: "15.7 MB" },
      { id: 5, title: "Bonus: JavaScript Basics", type: "video", size: "45.2 MB" }
    ]
  };

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      setCurrentTime(videoRef.current.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      setDuration(videoRef.current.duration);
    }
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const time = parseFloat(e.target.value);
    if (videoRef.current) {
      videoRef.current.currentTime = time;
      setCurrentTime(time);
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (videoRef.current) {
      videoRef.current.volume = newVolume;
    }
  };

  const toggleFullscreen = () => {
    if (videoRef.current) {
      if (!isFullscreen) {
        videoRef.current.requestFullscreen();
      } else {
        document.exitFullscreen();
      }
      setIsFullscreen(!isFullscreen);
    }
  };

  const addBookmark = () => {
    const newBookmark = {
      time: currentTime,
      title: `Bookmark at ${Math.floor(currentTime / 60)}:${Math.floor(currentTime % 60).toString().padStart(2, '0')}`
    };
    setBookmarks([...bookmarks, newBookmark]);
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const currentLessonData = courseData.modules[currentModule]?.lessons[currentLesson];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Navigation */}
      <div className="bg-white border-b border-gray-200 px-6 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              onClick={() => navigate('/student-portal')}
              className="text-black hover:bg-gray-100"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Portal
            </Button>
            <div className="h-6 w-px bg-gray-300" />
            <h1 className="text-lg font-semibold text-black">{courseData.title}</h1>
          </div>
          
          <div className="flex items-center space-x-4">
            <Button variant="outline" className="text-black border-gray-300 hover:bg-gray-50">
              <Share className="w-4 h-4 mr-2" />
              Share
            </Button>
            <Button variant="outline" className="text-black border-gray-300 hover:bg-gray-50">
              <Download className="w-4 h-4 mr-2" />
              Download
            </Button>
            <Button variant="outline" className="text-black border-gray-300 hover:bg-gray-50">
              <Bookmark className="w-4 h-4 mr-2" />
              Bookmark
            </Button>
          </div>
        </div>
      </div>

      <div className="flex">
        {/* Main Content */}
        <div className="flex-1">
          {/* Video Player */}
          <div className="bg-black">
            <div className="relative">
              <video
                ref={videoRef}
                className="w-full h-96 object-cover"
                onTimeUpdate={handleTimeUpdate}
                onLoadedMetadata={handleLoadedMetadata}
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
              >
                <source src="/sample-video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>

              {/* Video Controls */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                <div className="flex items-center space-x-4">
                  <Button
                    onClick={handlePlayPause}
                    variant="ghost"
                    className="text-white hover:bg-white/20"
                  >
                    {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
                  </Button>

                  <div className="flex-1">
                    <input
                      type="range"
                      min="0"
                      max={duration}
                      value={currentTime}
                      onChange={handleSeek}
                      className="w-full h-1 bg-gray-600 rounded-lg appearance-none cursor-pointer"
                    />
                  </div>

                  <span className="text-white text-sm">
                    {formatTime(currentTime)} / {formatTime(duration)}
                  </span>

                  <div className="flex items-center space-x-2">
                    <Volume2 className="w-4 h-4 text-white" />
                    <input
                      type="range"
                      min="0"
                      max="1"
                      step="0.1"
                      value={volume}
                      onChange={handleVolumeChange}
                      className="w-20 h-1 bg-gray-600 rounded-lg appearance-none cursor-pointer"
                    />
                  </div>

                  <Button
                    onClick={toggleFullscreen}
                    variant="ghost"
                    className="text-white hover:bg-white/20"
                  >
                    {isFullscreen ? <Minimize className="w-5 h-5" /> : <Maximize className="w-5 h-5" />}
                  </Button>
                </div>
              </div>

              {/* Video Actions */}
              <div className="absolute top-4 right-4 flex space-x-2">
                <Button
                  onClick={addBookmark}
                  variant="ghost"
                  className="bg-black/50 text-white hover:bg-black/70"
                >
                  <Bookmark className="w-4 h-4" />
                </Button>
                <Button
                  variant="ghost"
                  className="bg-black/50 text-white hover:bg-black/70"
                >
                  <ThumbsUp className="w-4 h-4" />
                </Button>
                <Button
                  variant="ghost"
                  className="bg-black/50 text-white hover:bg-black/70"
                >
                  <ThumbsDown className="w-4 h-4" />
                </Button>
                <Button
                  variant="ghost"
                  className="bg-black/50 text-white hover:bg-black/70"
                >
                  <Flag className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* Course Content */}
          <div className="p-6">
            <div className="flex space-x-6">
              {/* Main Content Area */}
              <div className="flex-1">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h2 className="text-2xl font-bold text-black">
                      {currentLessonData?.title || "Welcome to the Course"}
                    </h2>
                    <p className="text-gray-600">Module {currentModule + 1} • Lesson {currentLesson + 1}</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Button
                      onClick={() => setCurrentLesson(Math.max(0, currentLesson - 1))}
                      disabled={currentLesson === 0}
                      variant="outline"
                      className="text-black border-gray-300 hover:bg-gray-50"
                    >
                      <ArrowLeft className="w-4 h-4" />
                    </Button>
                    <Button
                      onClick={() => setCurrentLesson(Math.min(courseData.modules[currentModule]?.lessons.length - 1 || 0, currentLesson + 1))}
                      disabled={currentLesson === (courseData.modules[currentModule]?.lessons.length - 1 || 0)}
                      variant="outline"
                      className="text-black border-gray-300 hover:bg-gray-50"
                    >
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </div>
                </div>

                {/* Tabs */}
                <div className="flex space-x-1 border-b mb-6">
                  {[
                    { id: 'overview', label: 'Overview', icon: <Eye className="w-4 h-4" /> },
                    { id: 'notes', label: 'Notes', icon: <FileText className="w-4 h-4" /> },
                    { id: 'resources', label: 'Resources', icon: <Download className="w-4 h-4" /> },
                    { id: 'discussions', label: 'Discussions', icon: <MessageSquare className="w-4 h-4" /> }
                  ].map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`flex items-center space-x-2 px-6 py-3 font-medium transition-colors ${
                        activeTab === tab.id
                          ? 'text-blue-600 border-b-2 border-blue-600'
                          : 'text-gray-600 hover:text-gray-900'
                      }`}
                    >
                      {tab.icon}
                      <span>{tab.label}</span>
                    </button>
                  ))}
                </div>

                {/* Tab Content */}
                {activeTab === 'overview' && (
                  <div className="space-y-6">
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-black">About This Lesson</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-700 mb-4">
                          In this lesson, you'll learn the fundamentals of web development and set up your development environment. 
                          We'll cover the basics of HTML, CSS, and JavaScript to get you started on your journey to becoming a web developer.
                        </p>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="flex items-center space-x-2">
                            <Clock className="w-4 h-4 text-gray-500" />
                            <span className="text-sm text-gray-600">Duration: {currentLessonData?.duration || "5:30"}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <FileText className="w-4 h-4 text-gray-500" />
                            <span className="text-sm text-gray-600">Type: {currentLessonData?.type || "Video"}</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle className="text-black">Learning Objectives</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2">
                          <li className="flex items-center space-x-2">
                            <CheckCircle className="w-4 h-4 text-green-500" />
                            <span className="text-gray-700">Understand the basics of web development</span>
                          </li>
                          <li className="flex items-center space-x-2">
                            <CheckCircle className="w-4 h-4 text-green-500" />
                            <span className="text-gray-700">Set up your development environment</span>
                          </li>
                          <li className="flex items-center space-x-2">
                            <CheckCircle className="w-4 h-4 text-green-500" />
                            <span className="text-gray-700">Create your first HTML document</span>
                          </li>
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                )}

                {activeTab === 'notes' && (
                  <div className="space-y-6">
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-black">My Notes</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <Textarea
                          value={notes}
                          onChange={(e) => setNotes(e.target.value)}
                          placeholder="Take notes during the lesson..."
                          className="min-h-32 text-black"
                        />
                        <div className="flex justify-end mt-4">
                          <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                            Save Notes
                          </Button>
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle className="text-black">Bookmarks</CardTitle>
                      </CardHeader>
                      <CardContent>
                        {bookmarks.length === 0 ? (
                          <p className="text-gray-500 text-center py-4">No bookmarks yet. Click the bookmark button during the video to save important moments.</p>
                        ) : (
                          <div className="space-y-2">
                            {bookmarks.map((bookmark, index) => (
                              <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                                <div>
                                  <p className="font-medium text-black">{bookmark.title}</p>
                                  <p className="text-sm text-gray-600">{formatTime(bookmark.time)}</p>
                                </div>
                                <Button
                                  variant="ghost"
                                  onClick={() => {
                                    if (videoRef.current) {
                                      videoRef.current.currentTime = bookmark.time;
                                      setCurrentTime(bookmark.time);
                                    }
                                  }}
                                  className="text-blue-600 hover:bg-blue-50"
                                >
                                  Go to
                                </Button>
                              </div>
                            ))}
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  </div>
                )}

                {activeTab === 'resources' && (
                  <div className="space-y-6">
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-black">Course Resources</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3">
                          {courseData.resources.map((resource) => (
                            <div key={resource.id} className="flex items-center justify-between p-3 border rounded-lg">
                              <div className="flex items-center space-x-3">
                                <FileText className="w-5 h-5 text-gray-500" />
                                <div>
                                  <p className="font-medium text-black">{resource.title}</p>
                                  <p className="text-sm text-gray-600">{resource.size}</p>
                                </div>
                              </div>
                              <Button variant="outline" className="text-black border-gray-300 hover:bg-gray-50">
                                <Download className="w-4 h-4 mr-2" />
                                Download
                              </Button>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle className="text-black">Upload Assignment</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                          <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                          <p className="text-gray-600">Drag and drop your assignment file here, or click to browse</p>
                          <Button variant="outline" className="mt-4 text-black border-gray-300 hover:bg-gray-50">
                            Choose File
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                )}

                {activeTab === 'discussions' && (
                  <div className="space-y-6">
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-black">Course Discussions</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div className="flex space-x-3">
                            <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
                              <User className="w-4 h-4 text-gray-600" />
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center space-x-2 mb-1">
                                <span className="font-medium text-black">John Doe</span>
                                <span className="text-sm text-gray-500">2 hours ago</span>
                              </div>
                              <p className="text-gray-700">Great lesson! I'm having trouble with the HTML structure. Can someone help?</p>
                              <div className="flex items-center space-x-4 mt-2">
                                <button className="text-sm text-gray-500 hover:text-gray-700">Reply</button>
                                <button className="text-sm text-gray-500 hover:text-gray-700">Like</button>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="mt-4">
                          <Textarea
                            placeholder="Add a comment..."
                            className="text-black"
                          />
                          <div className="flex justify-end mt-2">
                            <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                              Post Comment
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                )}
              </div>

              {/* Sidebar */}
              <div className="w-80">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-black">Course Content</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {courseData.modules.map((module, moduleIndex) => (
                        <div key={module.id}>
                          <button
                            onClick={() => setCurrentModule(moduleIndex)}
                            className={`w-full text-left p-3 rounded-lg transition-colors ${
                              currentModule === moduleIndex
                                ? 'bg-blue-50 text-blue-600'
                                : 'text-gray-700 hover:bg-gray-50'
                            }`}
                          >
                            <div className="flex items-center justify-between">
                              <div className="flex items-center space-x-2">
                                <ChevronRight className="w-4 h-4" />
                                <span className="font-medium">{module.title}</span>
                              </div>
                              <span className="text-sm text-gray-500">
                                {module.lessons.filter(l => l.completed).length}/{module.lessons.length}
                              </span>
                            </div>
                          </button>
                          
                          {currentModule === moduleIndex && (
                            <div className="ml-6 mt-2 space-y-1">
                              {module.lessons.map((lesson, lessonIndex) => (
                                <button
                                  key={lesson.id}
                                  onClick={() => setCurrentLesson(lessonIndex)}
                                  className={`w-full text-left p-2 rounded transition-colors ${
                                    currentLesson === lessonIndex
                                      ? 'bg-blue-100 text-blue-600'
                                      : 'text-gray-600 hover:bg-gray-50'
                                  }`}
                                >
                                  <div className="flex items-center space-x-2">
                                    {lesson.completed ? (
                                      <CheckCircle className="w-4 h-4 text-green-500" />
                                    ) : (
                                      <div className="w-4 h-4 border-2 border-gray-300 rounded-full" />
                                    )}
                                    <span className="text-sm">{lesson.title}</span>
                                  </div>
                                  <div className="flex items-center space-x-2 ml-6 mt-1">
                                    <Clock className="w-3 h-3 text-gray-400" />
                                    <span className="text-xs text-gray-500">{lesson.duration}</span>
                                    <Badge variant="secondary" className="text-xs">
                                      {lesson.type}
                                    </Badge>
                                  </div>
                                </button>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="mt-4">
                  <CardHeader>
                    <CardTitle className="text-black">Course Progress</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span className="text-gray-600">Overall Progress</span>
                          <span className="text-black font-medium">{courseData.progress}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-blue-600 h-2 rounded-full" style={{ width: `${courseData.progress}%` }}></div>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <p className="text-gray-600">Modules</p>
                          <p className="text-black font-medium">{courseData.completedModules}/{courseData.totalModules}</p>
                        </div>
                        <div>
                          <p className="text-gray-600">Lessons</p>
                          <p className="text-black font-medium">{courseData.completedLessons}/{courseData.totalLessons}</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseWorkspace; 