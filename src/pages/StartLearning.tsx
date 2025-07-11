import Navigation from "@/components/Navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { PlayCircle, BookOpen, Users, Clock, Star, ChevronRight, Award, Target, TrendingUp } from "lucide-react";
import { useNavigate } from "react-router-dom";
import PageNavigation from "@/components/PageNavigation";

const StartLearning = () => {
  const navigate = useNavigate();

  const featuredCourses = [
    {
      title: "AI & Machine Learning Fundamentals",
      instructor: "Dr. Sarah Chen",
      duration: "8 weeks",
      students: 12500,
      rating: 4.9,
      level: "Beginner",
      category: "Technology",
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c",
      progress: 0,
      price: "Free"
    },
    {
      title: "Digital Marketing Mastery",
      instructor: "Michael Johnson",
      duration: "6 weeks", 
      students: 8900,
      rating: 4.8,
      level: "Intermediate",
      category: "Marketing",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
      progress: 0,
      price: "Free"
    },
    {
      title: "Leadership in the Digital Age",
      instructor: "Prof. Maria Rodriguez",
      duration: "4 weeks",
      students: 15200,
      rating: 4.9,
      level: "All Levels",
      category: "Leadership",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978",
      progress: 0,
      price: "Free"
    },
    {
      title: "Python Programming Complete Course",
      instructor: "James Wilson",
      duration: "12 weeks",
      students: 25000,
      rating: 4.8,
      level: "Beginner",
      category: "Programming",
      image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4",
      progress: 0,
      price: "Free"
    }
  ];

  const learningPaths = [
    {
      title: "Data Science Career Path",
      courses: 8,
      duration: "6 months",
      level: "Beginner to Advanced",
      students: 5400,
      description: "Master data analysis, machine learning, and visualization"
    },
    {
      title: "Full-Stack Web Development",
      courses: 12,
      duration: "8 months", 
      level: "Beginner to Advanced",
      students: 7800,
      description: "Build modern web applications from front-end to back-end"
    },
    {
      title: "Digital Marketing Professional",
      courses: 6,
      duration: "4 months",
      level: "Beginner to Intermediate", 
      students: 3200,
      description: "Comprehensive digital marketing skills for modern businesses"
    }
  ];

  const benefits = [
    {
      icon: BookOpen,
      title: "1000+ Courses",
      description: "Access to comprehensive course library"
    },
    {
      icon: Users,
      title: "Expert Instructors",
      description: "Learn from industry professionals"
    },
    {
      icon: Award,
      title: "Certificates",
      description: "Earn recognized certifications"
    },
    {
      icon: Target,
      title: "Personalized",
      description: "AI-powered learning recommendations"
    }
  ];

  const handleStartCourse = (courseTitle: string) => {
    navigate("/courses");
  };

  const handleStartPath = (pathTitle: string) => {
    navigate("/courses");
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Removed <Navigation /> to prevent double navbar */}
      
      <div className="max-w-7xl mx-auto px-4 py-20">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-extrabold text-slate-900 mb-4">
            Start Learning Today
          </h1>
          <p className="text-xl text-slate-700 max-w-2xl mx-auto mb-8">
            Join millions of learners worldwide and unlock your potential with our expert-led courses and AI-powered learning paths
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-blue-700 text-white hover:bg-blue-800 font-semibold shadow-md" onClick={() => navigate("/signup")}> 
              Create Free Account
            </Button>
            <Button size="lg" variant="outline" className="border-blue-700 text-blue-700 hover:bg-blue-50 font-semibold" onClick={() => navigate("/courses")}> 
              Browse All Courses
            </Button>
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          {benefits.map((benefit, index) => (
            <Card key={index} className="bg-white border border-blue-100 text-center shadow-sm">
              <CardContent className="p-6">
                <benefit.icon className="h-10 w-10 text-blue-600 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-slate-900 mb-2">{benefit.title}</h3>
                <p className="text-slate-700 text-base">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Featured Courses */}
        <section className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-extrabold text-slate-900">Featured Courses</h2>
            <Button variant="ghost" className="text-blue-700 hover:bg-blue-50 font-semibold" onClick={() => navigate("/courses")}> 
              View All <ChevronRight className="h-4 w-4 ml-1" />
            </Button>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredCourses.map((course, index) => (
              <Card key={index} className="bg-white border border-blue-100 group hover:bg-blue-50 transition-all duration-300 shadow-sm">
                <CardContent className="p-0">
                  <div className="relative">
                    <img 
                      src={course.image}
                      alt={course.title}
                      className="w-full h-40 object-cover rounded-t-lg"
                    />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/5 transition-colors" />
                    <div className="absolute top-2 left-2">
                      <Badge className="bg-green-600 text-white font-bold shadow">{course.price}</Badge>
                    </div>
                    <div className="absolute top-2 right-2">
                      <Badge variant="secondary" className="bg-blue-700 text-white font-bold shadow">{course.level}</Badge>
                    </div>
                    <Button 
                      size="sm" 
                      className="absolute bottom-2 right-2 bg-blue-700 hover:bg-blue-800 text-white font-semibold shadow"
                      onClick={() => handleStartCourse(course.title)}
                    >
                      <PlayCircle className="h-4 w-4" />
                    </Button>
                  </div>
                  <div className="p-4">
                    <div className="mb-2">
                      <Badge variant="outline" className="border-blue-700 text-blue-700 text-xs font-semibold">
                        {course.category}
                      </Badge>
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2 line-clamp-2">{course.title}</h3>
                    <p className="text-blue-800 text-sm mb-3 font-medium">by {course.instructor}</p>
                    <div className="flex items-center space-x-4 text-sm text-blue-700 mb-3">
                      <div className="flex items-center space-x-1">
                        <Clock className="h-3 w-3" />
                        <span>{course.duration}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Users className="h-3 w-3" />
                        <span>{course.students.toLocaleString()}</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2 mb-4">
                      <Star className="h-4 w-4 text-yellow-500 fill-current" />
                      <span className="text-slate-900 font-bold">{course.rating}</span>
                    </div>
                    <Button 
                      size="sm" 
                      className="w-full bg-gradient-to-r from-blue-700 to-purple-700 hover:from-blue-800 hover:to-purple-800 text-white border-0 font-semibold shadow"
                      onClick={() => handleStartCourse(course.title)}
                    >
                      Start Learning
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Learning Paths */}
        <section className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-extrabold text-slate-900 mb-4">Structured Learning Paths</h2>
            <p className="text-slate-700 max-w-2xl mx-auto font-medium">
              Follow our carefully designed learning paths to master complete skill sets
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {learningPaths.map((path, index) => (
              <Card key={index} className="bg-white border border-blue-100 group hover:bg-blue-50 transition-all duration-300 shadow-sm">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-2 mb-4">
                    <TrendingUp className="h-6 w-6 text-green-600" />
                    <Badge variant="outline" className="border-green-600 text-green-700 font-semibold">
                      {path.level}
                    </Badge>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{path.title}</h3>
                  <p className="text-slate-700 mb-4 font-medium">{path.description}</p>
                  <div className="space-y-2 mb-6 text-sm text-blue-700">
                    <div className="flex justify-between">
                      <span>Courses:</span>
                      <span>{path.courses}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Duration:</span>
                      <span>{path.duration}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Students:</span>
                      <span>{path.students.toLocaleString()}</span>
                    </div>
                  </div>
                  <Button 
                    className="w-full bg-gradient-to-r from-blue-700 to-purple-700 hover:from-blue-800 hover:to-purple-800 text-white border-0 font-semibold shadow"
                    onClick={() => handleStartPath(path.title)}
                  >
                    Start Path
                    <ChevronRight className="h-4 w-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <Card className="bg-gradient-to-r from-blue-700/90 to-purple-700/90 border-0 shadow-lg">
          <CardContent className="p-12 text-center">
            <h2 className="text-3xl font-extrabold text-white mb-4">Ready to Transform Your Career?</h2>
            <p className="text-xl text-white mb-8 max-w-2xl mx-auto font-medium">
              Join 50,000+ learners who have already started their journey with OPONMETA
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-blue-700 hover:bg-blue-50 font-semibold shadow" onClick={() => navigate("/signup")}> 
                Get Started Free
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 font-semibold" onClick={() => navigate("/get-demo")}> 
                Schedule Demo
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
      <PageNavigation />
    </div>
  );
};

export default StartLearning;