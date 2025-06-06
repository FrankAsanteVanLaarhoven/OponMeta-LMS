import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, Users, Globe, Star, ChevronRight, Play } from "lucide-react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import CourseCard from "@/components/CourseCard";
import FeatureShowcase from "@/components/FeatureShowcase";
import TrustedByCarousel from "@/components/TrustedByCarousel";
import SuccessStoriesCarousel from "@/components/SuccessStoriesCarousel";
import PageNavigation from "@/components/PageNavigation";
import Footer from "@/components/Footer";

const Index = () => {
  const featuredCourses = [
    {
      id: 1,
      title: "Digital Marketing Fundamentals",
      instructor: "Sarah Johnson",
      price: 299,
      originalPrice: 399,
      rating: 4.8,
      students: 1234,
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
      category: "Marketing",
      duration: "8 hours",
      level: "Beginner",
      lessonsCount: 18,
      description: "Master the fundamentals of digital marketing and grow your online presence",
      progress: 45,
      isBestseller: true,
      lastUpdated: "2024-02-20",
      language: "English",
      hasSubtitles: true
    },
    {
      id: 2,
      title: "Web Development Bootcamp",
      instructor: "Mike Chen",
      price: 499,
      originalPrice: 699,
      rating: 4.9,
      students: 2156,
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
      category: "Technology",
      duration: "25 hours",
      level: "Intermediate",
      lessonsCount: 45,
      description: "Complete bootcamp covering HTML, CSS, JavaScript, React, and Node.js",
      isBestseller: true,
      lastUpdated: "2024-03-05",
      language: "English",
      hasSubtitles: true
    },
    {
      id: 3,
      title: "Business Strategy & Leadership",
      instructor: "Dr. Amara Okafor",
      price: 399,
      rating: 4.7,
      students: 892,
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
      category: "Business",
      duration: "12 hours",
      level: "Advanced",
      lessonsCount: 32,
      description: "Advanced strategies for business leadership and organizational development",
      lastUpdated: "2024-02-28",
      language: "English",
      hasSubtitles: true
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <Hero />
      
      {/* Trusted By Carousel */}
      <TrustedByCarousel />
      
      {/* Career Advancement Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-foreground mb-6">Advance Your Career. Learn In-demand Skills.</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Upskill in business analytics, health care, graphic design, management and more.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="bg-white text-purple-900 hover:bg-gray-100" onClick={() => window.open('/career-guidance', '_self')}>
              I want to find a new career
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10" onClick={() => window.open('/career-guidance', '_self')}>
              I want to upskill in my current career
            </Button>
          </div>
          
          {/* Course Categories */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <div className="text-center">
              <div className="text-2xl font-bold text-foreground">Popular Courses</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-foreground">Top Diplomas</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-foreground">Top Certificates</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-foreground">New Courses</div>
            </div>
          </div>
          
          <Button size="lg" className="bg-blue-600 text-white hover:bg-blue-700" onClick={() => window.open('/courses', '_self')}>
            Explore Free Courses
          </Button>
        </div>
      </section>

      {/* Course Statistics Section */}
      <section className="py-20 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Explore 5,500+ Free Online Courses</h2>
            <p className="text-xl text-muted-foreground">Learn From The World's Leading Experts</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card className="bg-white/10 backdrop-blur-md border-white/20 text-center">
              <CardContent className="p-8">
                <div className="text-4xl font-bold text-white mb-2">10 Million+</div>
                <div className="text-blue-100">Graduates</div>
              </CardContent>
            </Card>
            <Card className="bg-white/10 backdrop-blur-md border-white/20 text-center">
              <CardContent className="p-8">
                <div className="text-4xl font-bold text-white mb-2">193</div>
                <div className="text-blue-100">Countries</div>
              </CardContent>
            </Card>
            <Card className="bg-white/10 backdrop-blur-md border-white/20 text-center">
              <CardContent className="p-8">
                <div className="text-4xl font-bold text-white mb-2">5,500+</div>
                <div className="text-blue-100">Free Courses</div>
              </CardContent>
            </Card>
          </div>
          
          {/* Course Categories Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/15 transition-all cursor-pointer hover:scale-105 hover:shadow-xl" onClick={() => window.open('/courses?category=it', '_blank')}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">IT</h3>
                    <p className="text-blue-100">1,246 Courses</p>
                  </div>
                  <BookOpen className="h-8 w-8 text-blue-400" />
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/15 transition-all cursor-pointer hover:scale-105 hover:shadow-xl" onClick={() => window.open('/courses?category=business', '_blank')}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Business</h3>
                    <p className="text-blue-100">1,697 Courses</p>
                  </div>
                  <BookOpen className="h-8 w-8 text-green-400" />
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/15 transition-all cursor-pointer hover:scale-105 hover:shadow-xl" onClick={() => window.open('/courses?category=teaching', '_blank')}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Teaching & Academics</h3>
                    <p className="text-blue-100">1,588 Courses</p>
                  </div>
                  <BookOpen className="h-8 w-8 text-purple-400" />
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/15 transition-all cursor-pointer hover:scale-105 hover:shadow-xl" onClick={() => window.open('/courses?category=personal-development', '_blank')}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Personal Development</h3>
                    <p className="text-blue-100">1,292 Courses</p>
                  </div>
                  <BookOpen className="h-8 w-8 text-yellow-400" />
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/15 transition-all cursor-pointer hover:scale-105 hover:shadow-xl" onClick={() => window.open('/courses?category=management', '_blank')}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Management</h3>
                    <p className="text-blue-100">1,025 Courses</p>
                  </div>
                  <BookOpen className="h-8 w-8 text-red-400" />
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/15 transition-all cursor-pointer hover:scale-105 hover:shadow-xl" onClick={() => window.open('/courses?category=health', '_blank')}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Health</h3>
                    <p className="text-blue-100">991 Courses</p>
                  </div>
                  <BookOpen className="h-8 w-8 text-pink-400" />
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/15 transition-all cursor-pointer hover:scale-105 hover:shadow-xl" onClick={() => window.open('/courses?category=engineering', '_blank')}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Engineering & Construction</h3>
                    <p className="text-blue-100">798 Courses</p>
                  </div>
                  <BookOpen className="h-8 w-8 text-orange-400" />
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/15 transition-all cursor-pointer hover:scale-105 hover:shadow-xl" onClick={() => window.open('/courses?category=sales-marketing', '_blank')}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Sales & Marketing</h3>
                    <p className="text-blue-100">432 Courses</p>
                  </div>
                  <BookOpen className="h-8 w-8 text-cyan-400" />
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/15 transition-all cursor-pointer hover:scale-105 hover:shadow-xl" onClick={() => window.open('/courses?category=language', '_blank')}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Language</h3>
                    <p className="text-blue-100">312 Courses</p>
                  </div>
                  <BookOpen className="h-8 w-8 text-indigo-400" />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose OPONMETA Section */}
      <FeatureShowcase 
        title="Why Choose OPONMETA?"
        subtitle="Experience comprehensive global learning with 24 innovative features spanning accessibility, technology, partnerships, and inclusive education for the future."
      />
      
      {/* Featured Courses Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Featured Courses</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover high-quality courses from verified African educators and global partners
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button size="lg" className="bg-white/10 backdrop-blur-md hover:bg-white/20 text-white border border-white/20" onClick={() => window.open('/courses', '_self')}>
              View All Courses
              <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <SuccessStoriesCarousel />

      {/* AI-Powered Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Meet AI - Video Calling Powered by AI Agents</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Experience the future of online learning with AI-powered video calls, real-time coaching, and personalized learning assistance.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71" 
                alt="AI Video Call Interface"
                className="w-full rounded-2xl shadow-2xl"
              />
            </div>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-600 rounded-full p-2">
                  <Play className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Real-time AI Coaching</h3>
                  <p className="text-muted-foreground">
                    Get instant feedback and guidance from AI agents trained for specific roles and subjects.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-green-600 rounded-full p-2">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Interactive Learning Sessions</h3>
                  <p className="text-muted-foreground">
                    Participate in live AI-powered sessions with language tutors, interview coaches, and subject experts.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-purple-600 rounded-full p-2">
                  <Star className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Personalized Career Plans</h3>
                  <p className="text-muted-foreground">
                    Answer a few questions and receive a customized Career Ready Plan tailored to your goals.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">FREE. All Features. FOREVER!</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Try our Forever FREE account for small teams with all premium features!
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="bg-white/10 backdrop-blur-md border-white/20">
              <CardContent className="p-8">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-white mb-2">FREE PLAN</h3>
                  <p className="text-blue-100 mb-6">Ideal for startups & micro-businesses</p>
                  <div className="text-5xl font-bold text-orange-400 mb-2">$0.00</div>
                  <p className="text-blue-100 mb-8">free forever</p>
                  
                  <div className="space-y-4 mb-8 text-left">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      <span className="text-white">All Features</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      <span className="text-white">10 Learners</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      <span className="text-white">Unlimited Courses</span>
                    </div>
                  </div>
                  
                  <Button size="lg" className="w-full bg-blue-600 text-white hover:bg-blue-700">
                    Get Started Free
                  </Button>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-white/10 backdrop-blur-md border-white/20">
              <CardContent className="p-8">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-white mb-2">ESSENTIALS</h3>
                  <p className="text-blue-100 mb-6">Ideal for established businesses</p>
                  <div className="text-5xl font-bold text-orange-400 mb-2">$1.99</div>
                  <p className="text-blue-100 mb-8">per active learner/month</p>
                  
                  <div className="space-y-4 mb-8 text-left">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      <span className="text-white">200+ Ready-to-Use Courses</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      <span className="text-white">10+ Learners</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      <span className="text-white">AI Assistance & Tracking</span>
                    </div>
                  </div>
                  
                  <Button size="lg" className="w-full bg-blue-600 text-white hover:bg-blue-700">
                    View All Plans
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center mt-12">
            <p className="text-blue-100">
              Got questions? <span className="text-white underline cursor-pointer">Schedule a demo and get all your questions answered.</span>
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <Card className="bg-white/10 backdrop-blur-md border-white/20">
            <CardContent className="p-12">
              <div className="grid md:grid-cols-4 gap-8 text-center">
                <div>
                  <div className="text-4xl font-bold text-white mb-2">50,000+</div>
                  <div className="text-cyan-100">Active Learners</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-white mb-2">1,200+</div>
                  <div className="text-cyan-100">Expert Instructors</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-white mb-2">5,000+</div>
                  <div className="text-cyan-100">Courses Available</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-white mb-2">54</div>
                  <div className="text-cyan-100">African Countries</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>


      {/* Create & Sell Online Courses Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Create & Sell Online Courses & Training</h2>
            <p className="text-xl text-gray-600">Sell your online courses easily with our eCommerce LMS</p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content - Media Screen */}
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl shadow-2xl overflow-hidden">
                <video 
                  className="w-full h-full object-cover" 
                  autoPlay 
                  muted 
                  loop
                  controls
                >
                  <source src="https://storage.googleapis.com/coursebox-video-file/prod-coursebox/courseVideoFileStorage/133197/eda47a8a-5dd4-49d4-971a-a52e046801a2.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>

            {/* Right Content - Features */}
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <span className="text-lg text-gray-700">Create online courses & training</span>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <span className="text-lg text-gray-700">Sell online courses & training</span>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <span className="text-lg text-gray-700">Make more sales in our store</span>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <span className="text-lg text-gray-700">Easy to set up & start selling</span>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-blue-600 text-white hover:bg-blue-700" onClick={() => window.open('/free-trial', '_self')}>
                  Get Started Free
                </Button>
                <Button size="lg" variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50" onClick={() => window.open('/get-demo', '_self')}>
                  Get a Demo →
                </Button>
              </div>
              
              <p className="text-sm text-gray-500">✓ No credit card required.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Videos Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Videos</h2>
            <p className="text-xl text-gray-600">Learn from our comprehensive video tutorials</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-all cursor-pointer hover:scale-105" onClick={() => alert('Opening video: How to Choose the Best Corporate Training Platform')}>
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158" 
                  alt="Corporate Training"
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <div className="absolute inset-0 bg-black/40 rounded-t-lg flex items-center justify-center hover:bg-black/30 transition-colors">
                  <div className="bg-blue-600 rounded-full p-3 hover:bg-blue-700 transition-colors">
                    <Play className="h-6 w-6 text-white" />
                  </div>
                </div>
                <div className="absolute bottom-2 right-2 bg-black/70 text-white px-2 py-1 rounded text-sm">
                  4:25
                </div>
              </div>
              <CardContent className="p-4">
                <h3 className="font-semibold text-gray-900 mb-2">How to Choose the Best Corporate Training Platform</h3>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-all cursor-pointer hover:scale-105" onClick={() => alert('Opening video: How to Set up Your Virtual Classroom')}>
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d" 
                  alt="Virtual Classroom"
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <div className="absolute inset-0 bg-black/40 rounded-t-lg flex items-center justify-center hover:bg-black/30 transition-colors">
                  <div className="bg-blue-600 rounded-full p-3 hover:bg-blue-700 transition-colors">
                    <Play className="h-6 w-6 text-white" />
                  </div>
                </div>
                <div className="absolute bottom-2 right-2 bg-black/70 text-white px-2 py-1 rounded text-sm">
                  6:58
                </div>
              </div>
              <CardContent className="p-4">
                <h3 className="font-semibold text-gray-900 mb-2">How to Set up Your Virtual Classroom</h3>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-all cursor-pointer hover:scale-105" onClick={() => alert('Opening video: How to Choose the Best LMS Software for Employee Training')}>
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f" 
                  alt="LMS Software"
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <div className="absolute inset-0 bg-black/40 rounded-t-lg flex items-center justify-center hover:bg-black/30 transition-colors">
                  <div className="bg-blue-600 rounded-full p-3 hover:bg-blue-700 transition-colors">
                    <Play className="h-6 w-6 text-white" />
                  </div>
                </div>
                <div className="absolute bottom-2 right-2 bg-black/70 text-white px-2 py-1 rounded text-sm">
                  1:53
                </div>
              </div>
              <CardContent className="p-4">
                <h3 className="font-semibold text-gray-900 mb-2">How to Choose the Best LMS Software for Employee Training</h3>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Development Process Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">We Are Experts at Training Course Development</h2>
            <p className="text-xl text-gray-600 mb-12">
              We've built hundreds of training courses and trained millions of learners, so we know how to do this.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="text-5xl font-bold text-orange-500 mb-2">100,000+</div>
              <div className="text-gray-600">Courses & tests created</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-orange-500 mb-2">4,000,000+</div>
              <div className="text-gray-600">Learners</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-orange-500 mb-2">100</div>
              <div className="text-gray-600">Year mission</div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button size="lg" className="bg-blue-600 text-white hover:bg-blue-700">
              Get a Quote
            </Button>
            <Button size="lg" variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
              Talk to Sales →
            </Button>
          </div>
          
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
            
            <div className="relative z-10">
              <h3 className="text-3xl font-bold text-gray-900 mb-4 text-center">
                Stages of the Custom Elearning Development Process
              </h3>
              <p className="text-gray-600 text-center mb-12 text-lg">
                The standard steps that our instructional designers follow are:
              </p>
              
              {/* Interactive Process Demo */}
              <div className="max-w-4xl mx-auto">
                {/* Progress Bar */}
                <div className="mb-12">
                  <div className="relative">
                    <div className="flex justify-between mb-2">
                      {[1, 2, 3, 4, 5, 6].map((step) => (
                        <div key={step} className="text-sm font-medium text-gray-500">
                          Step {step}
                        </div>
                      ))}
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-blue-500 to-indigo-600 h-2 rounded-full transition-all duration-1000 ease-out animate-pulse"
                        style={{ width: '100%' }}
                      ></div>
                    </div>
                  </div>
                </div>

                {/* Interactive Steps */}
                <div className="space-y-6">
                  {[
                    {
                      number: 1,
                      title: "You tell us what you need to teach and who your learners are",
                      icon: "💬",
                      color: "from-blue-500 to-blue-600",
                      bgColor: "bg-blue-50",
                      description: "Share your learning objectives, target audience, and specific requirements"
                    },
                    {
                      number: 2,
                      title: "We create a course outline and define the content assets to be included, such as videos, tutorials, handouts, worksheets, quizzes, etc.",
                      icon: "📋",
                      color: "from-green-500 to-green-600",
                      bgColor: "bg-green-50",
                      description: "Our team structures your content and selects optimal learning materials"
                    },
                    {
                      number: 3,
                      title: "Our team of Instructional Designers builds, designs, and edits your course",
                      icon: "🎨",
                      color: "from-purple-500 to-purple-600",
                      bgColor: "bg-purple-50",
                      description: "Expert designers craft engaging, pedagogically sound course content"
                    },
                    {
                      number: 4,
                      title: "We put your course into our online software",
                      icon: "⚙️",
                      color: "from-orange-500 to-orange-600",
                      bgColor: "bg-orange-50",
                      description: "Technical integration and platform setup for seamless delivery"
                    },
                    {
                      number: 5,
                      title: "You review the course & we work together to finalize it",
                      icon: "🔍",
                      color: "from-pink-500 to-pink-600",
                      bgColor: "bg-pink-50",
                      description: "Collaborative review process to ensure everything meets your expectations"
                    },
                    {
                      number: 6,
                      title: "We provide you with the complete course and show you how to share it with learners and monitor performance",
                      icon: "🚀",
                      color: "from-indigo-500 to-indigo-600",
                      bgColor: "bg-indigo-50",
                      description: "Launch your course with full training and analytics support"
                    }
                  ].map((step, index) => (
                    <div 
                      key={step.number}
                      className={`group cursor-pointer transition-all duration-500 hover:scale-105 animate-fade-in ${step.bgColor} rounded-xl p-6 shadow-sm hover:shadow-lg`}
                      style={{ animationDelay: `${index * 150}ms` }}
                      onClick={() => {
                        const element = document.getElementById(`step-${step.number}`);
                        if (element) {
                          element.scrollIntoView({ behavior: 'smooth' });
                        }
                      }}
                    >
                      <div className="flex items-start space-x-6">
                        {/* Step Number & Icon */}
                        <div className="flex-shrink-0">
                          <div className={`w-16 h-16 bg-gradient-to-r ${step.color} text-white rounded-full flex items-center justify-center font-bold text-lg shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                            <span className="text-2xl">{step.icon}</span>
                          </div>
                          <div className="text-center mt-2">
                            <span className="text-sm font-semibold text-gray-600">Step {step.number}</span>
                          </div>
                        </div>
                        
                        {/* Content */}
                        <div className="flex-1">
                          <h4 className="font-bold text-gray-900 mb-3 text-lg group-hover:text-blue-600 transition-colors duration-300">
                            {step.title}
                          </h4>
                          <p className="text-gray-600 text-sm leading-relaxed opacity-80 group-hover:opacity-100 transition-opacity duration-300">
                            {step.description}
                          </p>
                          
                          {/* Interactive Elements */}
                          <div className="mt-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                            <div className="flex items-center space-x-4">
                              <div className="flex items-center space-x-2">
                                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                                <span className="text-xs text-gray-500">Interactive Demo Available</span>
                              </div>
                              <button className="text-xs bg-white/50 px-3 py-1 rounded-full hover:bg-white/80 transition-colors">
                                Learn More →
                              </button>
                            </div>
                          </div>
                        </div>
                        
                        {/* Progress Indicator */}
                        <div className="flex-shrink-0">
                          <div className="w-1 h-20 bg-gray-200 rounded-full overflow-hidden">
                            <div 
                              className={`w-full bg-gradient-to-b ${step.color} transition-all duration-1000 ease-out`}
                              style={{ height: '100%', animationDelay: `${index * 200}ms` }}
                            ></div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Connection Line */}
                      {index < 5 && (
                        <div className="ml-8 mt-4">
                          <div className="w-px h-8 bg-gradient-to-b from-gray-300 to-transparent mx-auto"></div>
                          <div className="w-2 h-2 bg-gray-400 rounded-full mx-auto animate-bounce" style={{ animationDelay: `${index * 300}ms` }}></div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
                
                {/* Call to Action */}
                <div className="text-center mt-12 p-6 bg-white/70 backdrop-blur-sm rounded-xl border border-blue-200">
                  <h4 className="text-xl font-bold text-gray-900 mb-4">Ready to Start Your Custom Course?</h4>
                  <p className="text-gray-600 mb-6">Let our expert team guide you through this proven process</p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button 
                      className="px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
                      onClick={() => alert('Starting course development process...')}
                    >
                      🚀 Start Your Project
                    </button>
                    <button 
                      className="px-6 py-3 border-2 border-blue-600 text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-300"
                      onClick={() => alert('Scheduling consultation...')}
                    >
                      📅 Schedule Consultation
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Custom eLearning Solutions */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Custom Elearning Solutions</h2>
            <p className="text-xl text-gray-600 mb-4">
              Get all the necessary resources and tools for elearning in one place
            </p>
            <p className="text-lg text-gray-500 max-w-4xl mx-auto">
              Our comprehensive end-to-end platform provides everything you need to create, deliver, and manage world-class online learning experiences
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* Premium Course Library */}
            <div 
              className="cursor-pointer transition-all duration-300 hover:scale-105 hover:-translate-y-2 group"
              onClick={() => window.open('/course-library', '_blank')}
            >
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-100 rounded-lg p-3 mr-4">
                    <BookOpen className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">Premium Course Library</h3>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Browse a library of <strong>500+ premium courses</strong> on in-demand topics, fully customizable and ready-to-use. 
                  Topics include AI, Data Science, Digital Marketing, Leadership, and more.
                </p>
                <div className="mb-6">
                  <img 
                    src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6" 
                    alt="Course Library Interface"
                    className="w-full h-48 object-cover rounded-lg shadow-md transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="space-y-2 mb-6">
                  <div className="flex items-center text-sm text-gray-600">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                    500+ Professional Courses
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                    Fully Customizable Content
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                    Multi-Language Support
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                    Mobile-Optimized Learning
                  </div>
                </div>
                <div className="text-blue-600 font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center">
                  Explore Course Library 
                  <ChevronRight className="ml-2 h-4 w-4" />
                </div>
              </div>
            </div>
            
            {/* Virtual Classroom */}
            <div 
              className="cursor-pointer transition-all duration-300 hover:scale-105 hover:-translate-y-2 group"
              onClick={() => window.open('/dashboard/meetings', '_blank')}
            >
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
                <div className="flex items-center mb-4">
                  <div className="bg-purple-100 rounded-lg p-3 mr-4">
                    <Users className="h-8 w-8 text-purple-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 group-hover:text-purple-600 transition-colors">Virtual Classroom</h3>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Take charge of all online learning activities using our centralized and secure 
                  <strong> virtual classroom software</strong>. Support up to 1000 concurrent learners with HD video.
                </p>
                <div className="mb-6">
                  <img 
                    src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81" 
                    alt="Virtual Classroom Interface"
                    className="w-full h-48 object-cover rounded-lg shadow-md transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="space-y-2 mb-6">
                  <div className="flex items-center text-sm text-gray-600">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                    Live HD Video Streaming
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                    Interactive Whiteboard
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                    Screen Sharing & Recording
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                    Breakout Rooms Support
                  </div>
                </div>
                <div className="text-purple-600 font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center">
                  Access Virtual Classroom 
                  <ChevronRight className="ml-2 h-4 w-4" />
                </div>
              </div>
            </div>
            
            {/* Quizzes & Surveys */}
            <div 
              className="cursor-pointer transition-all duration-300 hover:scale-105 hover:-translate-y-2 group"
              onClick={() => alert('Opening Quiz Builder...')}
            >
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
                <div className="flex items-center mb-4">
                  <div className="bg-green-100 rounded-lg p-3 mr-4">
                    <Star className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 group-hover:text-green-600 transition-colors">Quizzes & Surveys</h3>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Assess knowledge retention through engaging quizzes with <strong>15+ question types</strong>. 
                  Create surveys for course feedback with advanced analytics and AI-powered insights.
                </p>
                <div className="mb-6">
                  <img 
                    src="https://images.unsplash.com/photo-1498050108023-c5249f4df085" 
                    alt="Quiz Interface"
                    className="w-full h-48 object-cover rounded-lg shadow-md transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="space-y-2 mb-6">
                  <div className="flex items-center text-sm text-gray-600">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                    15+ Interactive Question Types
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                    Real-time Analytics Dashboard
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                    Automated Grading System
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                    AI-Powered Question Bank
                  </div>
                </div>
                <div className="text-green-600 font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center">
                  Try Quiz Builder 
                  <ChevronRight className="ml-2 h-4 w-4" />
                </div>
              </div>
            </div>
            
            {/* Elearning Authoring Tool */}
            <div 
              className="cursor-pointer transition-all duration-300 hover:scale-105 hover:-translate-y-2 group"
              onClick={() => window.open('/dashboard/templates', '_blank')}
            >
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
                <div className="flex items-center mb-4">
                  <div className="bg-orange-100 rounded-lg p-3 mr-4">
                    <Globe className="h-8 w-8 text-orange-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 group-hover:text-orange-600 transition-colors">Elearning Authoring Tool</h3>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Take advantage of the world's easiest authoring tool. Develop delightful online courses and tests in minutes 
                  with our <strong>drag-and-drop interface</strong> and 100+ professional templates.
                </p>
                <div className="mb-6">
                  <img 
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f" 
                    alt="Authoring Tool Interface"
                    className="w-full h-48 object-cover rounded-lg shadow-md transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="space-y-2 mb-6">
                  <div className="flex items-center text-sm text-gray-600">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                    Drag-and-Drop Course Builder
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                    100+ Professional Templates
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                    SCORM & xAPI Compliance
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                    Multi-Media Support
                  </div>
                </div>
                <div className="text-orange-600 font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center">
                  Open Authoring Tool 
                  <ChevronRight className="ml-2 h-4 w-4" />
                </div>
              </div>
            </div>
          </div>

          {/* End-to-End Process Section */}
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 mb-16">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Complete End-to-End Learning Solution</h3>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                From content creation to learner engagement, our platform handles every aspect of your elearning journey
              </p>
            </div>
            
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="bg-blue-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">1</span>
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Create Content</h4>
                <p className="text-gray-600 text-sm">Use our authoring tools or select from premium course library</p>
              </div>
              
              <div className="text-center">
                <div className="bg-purple-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">2</span>
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Deliver Learning</h4>
                <p className="text-gray-600 text-sm">Host live sessions in virtual classrooms or self-paced courses</p>
              </div>
              
              <div className="text-center">
                <div className="bg-green-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">3</span>
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Assess Progress</h4>
                <p className="text-gray-600 text-sm">Track learning with quizzes, surveys, and detailed analytics</p>
              </div>
              
              <div className="text-center">
                <div className="bg-orange-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">4</span>
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Scale & Optimize</h4>
                <p className="text-gray-600 text-sm">Use AI insights to improve courses and expand your reach</p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Ready to Transform Your Learning Experience?</h3>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 text-white hover:bg-blue-700">
                Start Free Trial
              </Button>
              <Button size="lg" variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                Schedule Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Features</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center cursor-pointer hover:scale-105 transition-transform" onClick={() => alert('Learn more about Professional Course Design')}>
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 hover:bg-blue-200 transition-colors">
                <BookOpen className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Professional Course Design</h3>
              <p className="text-gray-600">
                Design or redesign eLearning courses with the help of industry experts who follow the best practices.
              </p>
            </div>
            
            <div className="text-center cursor-pointer hover:scale-105 transition-transform" onClick={() => alert('Learn more about Mobile-Ready features')}>
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 hover:bg-blue-200 transition-colors">
                <Globe className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Mobile-Ready</h3>
              <p className="text-gray-600">
                Deliver a single version of a course across multiple devices and platforms without any hindrances.
              </p>
            </div>
            
            <div className="text-center cursor-pointer hover:scale-105 transition-transform" onClick={() => alert('Learn more about Up-to-Date services')}>
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 hover:bg-blue-200 transition-colors">
                <Star className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Up-to-Date</h3>
              <p className="text-gray-600">
                Benefit from the services of our IDs who always remain current with the latest trends in eLearning.
              </p>
            </div>
            
            <div className="text-center cursor-pointer hover:scale-105 transition-transform" onClick={() => alert('Learn more about Curriculum Design')}>
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 hover:bg-blue-200 transition-colors">
                <BookOpen className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Curriculum Design</h3>
              <p className="text-gray-600">
                Match your learning needs with expected outcomes. Our instructional designers are skilled at choosing suitable topics, interactive media, and other essential elearning elements.
              </p>
            </div>
            
            <div className="text-center cursor-pointer hover:scale-105 transition-transform" onClick={() => alert('Learn more about Storyboarding services')}>
              <div className="bg-red-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 hover:bg-red-200 transition-colors">
                <Users className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Storyboarding</h3>
              <p className="text-gray-600">
                Get custom elearning storyboards that serve as a prototype for effective learning programs based on your target learners.
              </p>
            </div>
            
            <div className="text-center cursor-pointer hover:scale-105 transition-transform" onClick={() => alert('Learn more about End-to-End Service')}>
              <div className="bg-yellow-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 hover:bg-yellow-200 transition-colors">
                <Users className="h-8 w-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">End-to-End Service</h3>
              <p className="text-gray-600">
                Take advantage of our end-to-end ID services. We cover the entire process of an eLearning instructional designing service - from audience analysis to development and evaluation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Case Studies</h2>
            <p className="text-xl text-gray-600">
              Learn how leading brands changed the rules of online training with Global Learning.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="bg-blue-50 border-blue-200 cursor-pointer hover:shadow-lg hover:scale-105 transition-all" onClick={() => alert('View OLYMPIAD TESTER Case Study')}>
              <CardContent className="p-6">
                <div className="text-center">
                  <div className="bg-blue-600 text-white rounded-lg px-4 py-2 inline-block mb-4 hover:bg-blue-700 transition-colors">
                    OLYMPIAD TESTER
                  </div>
                  <p className="text-gray-700">
                    Olympiad Tester maintains its undisputed position with Global Learning tools
                  </p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-green-50 border-green-200 cursor-pointer hover:shadow-lg hover:scale-105 transition-all" onClick={() => alert('View Acer Case Study')}>
              <CardContent className="p-6">
                <div className="text-center">
                  <div className="bg-green-600 text-white rounded-lg px-4 py-2 inline-block mb-4 hover:bg-green-700 transition-colors">
                    acer
                  </div>
                  <p className="text-gray-700">
                    Acer created a solid system to train and certify its employees
                  </p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-yellow-50 border-yellow-200 cursor-pointer hover:shadow-lg hover:scale-105 transition-all" onClick={() => alert('View CDPH Case Study')}>
              <CardContent className="p-6">
                <div className="text-center">
                  <div className="bg-yellow-600 text-white rounded-lg px-4 py-2 inline-block mb-4 hover:bg-yellow-700 transition-colors">
                    CDPH
                  </div>
                  <p className="text-gray-700">
                    CDPH successfully trains its volunteers & residents using Global Learning
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center">
            <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
              View All Case Studies →
            </Button>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Empowering African Talent Through World-Class Education
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              We believe that quality education should be accessible to everyone, everywhere. Our platform connects African learners 
              with <span className="text-cyan-600">global experts</span> and <span className="text-cyan-600">industry leaders</span>, 
              providing skills that drive real career growth. From tech to business, we're building the future workforce through 
              innovative learning experiences designed for the modern professional.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <img 
              src="https://images.unsplash.com/photo-1494790108755-2616b612b898" 
              alt="Team member"
              className="w-full h-48 object-cover rounded-lg"
            />
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d" 
              alt="Team member"
              className="w-full h-48 object-cover rounded-lg"
            />
            <img 
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2" 
              alt="Team member"
              className="w-full h-48 object-cover rounded-lg"
            />
            <img 
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e" 
              alt="Team member"
              className="w-full h-48 object-cover rounded-lg"
            />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
          </div>
          
          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  What is instructional design in eLearning?
                </h3>
                <p className="text-gray-600">
                  Instructional design in eLearning is the organized process of designing and developing eLearning courses. 
                  Instructional designers analyze the learning needs of a target audience and design content to achieve specific 
                  learning objectives. The idea is to build engaging online courses for positive learning experiences.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  How long does it take to develop a custom course?
                </h3>
                <p className="text-gray-600">
                  The development timeline varies based on course complexity, content length, and requirements. 
                  Typically, a standard course takes 4-8 weeks from initial consultation to final delivery.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  What formats do you support for course content?
                </h3>
                <p className="text-gray-600">
                  We support various formats including videos, interactive presentations, documents, quizzes, 
                  assessments, and SCORM-compliant packages that work across different LMS platforms.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Future?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of learners who are advancing their careers with our world-class education platform
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-purple-900 hover:bg-gray-100">
              Start Learning Today
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              Become an Instructor
            </Button>
          </div>
        </div>
      </section>
      <PageNavigation />
      <Footer />
    </div>
  );
};

export default Index;
