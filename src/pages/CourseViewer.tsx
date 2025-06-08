import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Play, 
  Pause, 
  Volume2, 
  Maximize, 
  CheckCircle, 
  Circle,
  BookmarkPlus,
  Download,
  NotebookPen,
  Settings,
  Home
} from "lucide-react";
import { useParams, Link } from "react-router-dom";
import PageNavigation from "@/components/PageNavigation";

const CourseViewer = () => {
  const { courseId } = useParams();
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentLesson, setCurrentLesson] = useState(1);

  const courseModules = [
    {
      id: 1,
      title: "Welcome! (1:29)",
      completed: true,
      current: currentLesson === 1
    },
    {
      id: 2,
      title: "Access to a Private 24/7 Community",
      completed: true,
      current: false
    },
    {
      id: 3,
      title: "Environment Setup (1:44)",
      completed: true,
      current: false
    },
    {
      id: 4,
      title: "Visual Studio Code Setup (3:16)",
      completed: true,
      current: false
    }
  ];

  const bonuses = [
    {
      id: 5,
      title: "The Complete Path to JavaScript Mastery eBook",
      completed: true
    },
    {
      id: 6,
      title: "The Ultimate Tech Resume Practical eBook",
      completed: true
    }
  ];

  const businessMasterclass = [
    {
      id: 7,
      title: "Business Masterclass Intro (1:59)",
      completed: true
    },
    {
      id: 8,
      title: "Reading RFP (6:21)",
      completed: true
    },
    {
      id: 9,
      title: "Proposal Template (7:44)",
      completed: true
    },
    {
      id: 10,
      title: "CryptoKet Proposal (14:24)",
      completed: true
    }
  ];

  const projectSetup = [
    {
      id: 11,
      title: "Project Setup (10:52)",
      completed: true
    },
    {
      id: 12,
      title: "ESLint Setup (7:26)",
      completed: true
    },
    {
      id: 13,
      title: "Tailwind Introduction (3:12)",
      completed: true
    },
    {
      id: 14,
      title: "Git & GitHub Setup (6:18)",
      completed: false
    },
    {
      id: 15,
      title: "Next.js File-Based Routing and",
      completed: false
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground flex">
      {/* Sidebar */}
      <div className="w-80 bg-card border-r border-border overflow-y-auto">
        <div className="p-4 border-b border-border">
          <div className="flex items-center justify-between mb-2">
            <Link to="/student-portal" className="flex items-center gap-2 text-primary hover:text-primary/80">
              <Home className="h-4 w-4" />
              <span className="text-sm">Back to Portal</span>
            </Link>
            <Settings className="h-4 w-4 text-muted-foreground" />
          </div>
          <div className="text-lg font-semibold text-foreground mb-1">30% COMPLETE</div>
        </div>

        {/* Course Modules */}
        <div className="p-4 space-y-4">
          {/* Main Modules */}
          <div className="space-y-2">
            {courseModules.map((module) => (
              <div
                key={module.id}
                className={`flex items-center gap-3 p-2 rounded-lg cursor-pointer transition-colors ${
                  module.current 
                    ? 'bg-primary/10 border border-primary/20' 
                    : 'hover:bg-muted/50'
                }`}
                onClick={() => setCurrentLesson(module.id)}
              >
                <div className="flex items-center gap-2 flex-1">
                  {module.completed ? (
                    <CheckCircle className="h-4 w-4 text-green-500" />
                  ) : (
                    <Circle className="h-4 w-4 text-muted-foreground" />
                  )}
                  <Play className="h-3 w-3 text-muted-foreground" />
                  <span className={`text-sm ${module.current ? 'text-primary font-medium' : 'text-foreground'}`}>
                    {module.title}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Bonuses Section */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-2">Bonuses</h3>
            <div className="space-y-2">
              {bonuses.map((bonus) => (
                <div key={bonus.id} className="flex items-center gap-3 p-2 rounded-lg hover:bg-muted/50 cursor-pointer">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <BookmarkPlus className="h-3 w-3 text-muted-foreground" />
                  <span className="text-sm text-foreground">{bonus.title}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Business Masterclass */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-2">Business Masterclass</h3>
            <div className="space-y-2">
              {businessMasterclass.map((item) => (
                <div key={item.id} className="flex items-center gap-3 p-2 rounded-lg hover:bg-muted/50 cursor-pointer">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <Play className="h-3 w-3 text-muted-foreground" />
                  <span className="text-sm text-foreground">{item.title}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Project Initialization & Setup */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-2">Project Initialization & Setup</h3>
            <div className="space-y-2">
              {projectSetup.map((item) => (
                <div key={item.id} className="flex items-center gap-3 p-2 rounded-lg hover:bg-muted/50 cursor-pointer">
                  {item.completed ? (
                    <CheckCircle className="h-4 w-4 text-green-500" />
                  ) : (
                    <Circle className="h-4 w-4 text-muted-foreground" />
                  )}
                  <Play className="h-3 w-3 text-muted-foreground" />
                  <span className="text-sm text-foreground">{item.title}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Progress Bar */}
        <div className="p-4 border-b border-border">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-muted-foreground">Learning Progress</span>
            <span className="text-sm font-medium text-foreground">30% Complete</span>
          </div>
          <Progress value={30} className="h-2" />
        </div>

        {/* Video Player */}
        <div className="flex-1 bg-slate-900 relative">
          <div className="aspect-video bg-slate-800 relative">
            {/* Video placeholder */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="w-20 h-20 rounded-full bg-slate-700 flex items-center justify-center mb-4 mx-auto">
                  <img 
                    src="/oponmeta-uploads/instructor-placeholder.png" 
                    alt="Course Instructor" 
                    className="w-16 h-16 rounded-full object-cover"
                  />
                </div>
                <div className="bg-slate-700/90 p-6 rounded-lg max-w-2xl mx-auto">
                  <h2 className="text-2xl font-bold text-white mb-2">Start Your Global Learning Experience</h2>
                  <div className="bg-slate-600 p-4 rounded-lg mb-4">
                    <p className="text-white text-lg italic">
                      "This platform helped me reach new heights in my career."
                    </p>
                  </div>
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                    <Download className="h-4 w-4 mr-2" />
                    Download Course Resources
                  </Button>
                </div>
              </div>
            </div>

            {/* Video Controls */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
              <div className="flex items-center gap-4">
                <Button
                  size="sm"
                  variant="ghost"
                  className="text-white hover:bg-white/20"
                  onClick={() => setIsPlaying(!isPlaying)}
                >
                  {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
                </Button>
                <div className="flex-1 bg-white/20 rounded-full h-1">
                  <div className="bg-primary h-1 rounded-full w-1/4"></div>
                </div>
                <span className="text-white text-sm">1:29 / 5:00</span>
                <Volume2 className="h-4 w-4 text-white" />
                <Maximize className="h-4 w-4 text-white" />
              </div>
            </div>
          </div>
        </div>

        {/* Tools and Actions */}
        <div className="p-6 border-t border-border">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-4">
              <Button variant="outline" size="sm" className="flex items-center gap-2">
                <NotebookPen className="h-4 w-4" />
                My Notes
              </Button>
              <Button variant="outline" size="sm" className="flex items-center gap-2">
                <BookmarkPlus className="h-4 w-4" />
                Save This Lesson
              </Button>
              <Button variant="outline" size="sm" className="flex items-center gap-2">
                <Download className="h-4 w-4" />
                Download Materials
              </Button>
            </div>
            
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
              Complete & Continue
            </Button>
          </div>

          {/* Lesson Content */}
          <Card className="bg-card border-border">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Play className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground">Welcome to Your Course</h3>
                  <p className="text-muted-foreground">Begin your global learning journey with us</p>
                </div>
              </div>
              
              <div className="prose prose-sm max-w-none text-muted-foreground">
                <p>
                  We are delighted to welcome you to this in-depth course. In this introduction, you will learn about the course structure and how to make the most of your learning experience. Remember to take notes and bookmark important lessons as you progress.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      
      <PageNavigation />
    </div>
  );
};

export default CourseViewer;