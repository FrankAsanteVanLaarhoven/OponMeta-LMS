import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, Users, Globe, Star, ChevronRight, Play, CreditCard, Music, Video, Edit3 } from "lucide-react";
import Hero from "@/components/Hero";
import CourseCard from "@/components/CourseCard";
import Footer from "@/components/Footer";
import { OpontainmentDemo } from "@/components/OpontainmentDemo";

import TrustedByCarousel from "@/components/TrustedByCarousel";
import SuccessStoriesCarousel from "@/components/SuccessStoriesCarousel";
import TeamCarousel from "@/components/TeamCarousel";
import { useTranslation } from 'react-i18next';
import { LampContainer } from "@/components/ui/lamp";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import SocialMediaLinks from "@/components/SocialMediaLinks";

const Index = () => {
  const { t } = useTranslation();

  // Animation variants for section titles
  const titleVariants = {
    hidden: { 
      opacity: 0, 
      y: -50,
      scale: 0.95
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  // Custom hook for scroll-triggered animations
  const useScrollAnimation = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { 
      once: true, 
      margin: "-100px 0px -100px 0px",
      amount: 0.3
    });
    return { ref, isInView };
  };

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
    <div className="min-h-screen bg-white text-[#0a1834] dark:bg-[#0a1834] dark:text-white">
      <Hero />


      {/* AI Learning Companion Featured Section */}
      <section className="py-16 section-full-width bg-white dark:bg-[#0a1834]">
        <div className="container-fluid">
          <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-8 bg-[#f5f7fa] dark:bg-[#16203a] rounded-3xl shadow-xl p-8 md:p-12 border border-[#22305a] dark:border-[#22305a]">
          <div className="flex-1">
            {(() => {
              const { ref, isInView } = useScrollAnimation();
              return (
                <motion.h2 
                  ref={ref}
                  variants={titleVariants}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  className="text-3xl md:text-4xl font-bold text-[#0a1834] dark:text-white mb-4"
                >
                  Meet Your AI Learning Companion
                </motion.h2>
              );
            })()}
            <p className="text-lg text-[#22305a] dark:text-slate-200 mb-6">Personalised, voice-driven, and always available—your AI Companion helps you learn at your pace, track your progress, and get instant feedback. Unlock interactive sessions, bookmarking, session history, and more!</p>
            <ul className="text-[#22305a] dark:text-slate-200 mb-6 space-y-2">
              <li>• Real-time voice-driven lessons</li>
              <li>• Personalised learning paths</li>
              <li>• Progress tracking & session history</li>
              <li>• Feedback, quizzes, and interactive chat</li>
              <li>• Available on all devices</li>
            </ul>
            <Button size="lg" className="bg-[#0a1834] text-white hover:bg-[#11204a] font-bold shadow-lg dark:bg-slate-100 dark:text-[#0a1834] dark:hover:bg-slate-200" onClick={() => window.open('/companion', '_self')}>
              Try Now
            </Button>
          </div>
          <div className="flex-1 flex justify-center items-center">
            <div className="flex items-center space-x-4">
              <img src="/branding/logo.png" alt="OponMeta Symbol Logo" className="h-40 w-40 animate-swivel" />
              <span className="text-6xl font-bold bg-gradient-to-r from-yellow-400 via-amber-400 to-yellow-600 bg-clip-text text-transparent">OponMeta</span>
            </div>
          </div>
        </div>
      </section>
      

      
      {/* Trusted By Carousel */}
      <TrustedByCarousel />
      
      {/* Career Advancement Section */}
      <section className="py-20 section-full-width bg-[#0a1834]">
        <div className="container-fluid">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">Advance Your Career with In-Demand Skills</h2>
            <p className="text-xl text-blue-100 font-bold mb-8 max-w-3xl mx-auto">
              Grow your expertise in analytics, healthcare, design, management, and more—anytime, anywhere in the world.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button size="lg" className="bg-slate-800 text-white hover:bg-slate-700" onClick={() => window.open('/career-guidance', '_self')}>
                Explore New Career Paths
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10" onClick={() => window.open('/career-guidance', '_self')}>
                Advance in My Current Role
              </Button>
            </div>
            
            {/* Course Categories */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              <div className="text-center">
                <div className="text-2xl font-bold text-white">Featured Courses</div>
                <div className="text-xs text-blue-100">Top picks for global learners</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">Diploma Programmes</div>
                <div className="text-xs text-blue-100">Accredited learning tracks</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">Professional Certificates</div>
                <div className="text-xs text-blue-100">Industry-recognized credentials</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">Latest Courses</div>
                <div className="text-xs text-blue-100">Recently added programmes</div>
              </div>
            </div>
            
            <Button size="lg" className="bg-[#16203a] text-white hover:bg-[#22305a]" onClick={() => window.open('/courses', '_self')}>
              Browse All Courses
            </Button>
          </div>
        </div>
      </section>

      {/* Course Statistics Section */}
      <section className="py-20 section-full-width bg-[#0a1834]">
        <div className="container-fluid">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Access 5,500+ Free Online Courses</h2>
              <p className="text-xl text-blue-100">Learn from Global Experts</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <Card className="bg-[#16203a] border-[#22305a] text-center">
                <CardContent className="p-8">
                  <div className="text-4xl font-bold text-white mb-2">10 Million+</div>
                  <div className="text-blue-100">Learners</div>
                </CardContent>
              </Card>
              <Card className="bg-[#16203a] border-[#22305a] text-center">
                <CardContent className="p-8">
                  <div className="text-4xl font-bold text-white mb-2">193</div>
                  <div className="text-blue-100">Countries Represented</div>
                  <div className="text-xs text-blue-200">Worldwide reach</div>
                </CardContent>
              </Card>
              <Card className="bg-[#16203a] border-[#22305a] text-center">
                <CardContent className="p-8">
                  <div className="text-4xl font-bold text-white mb-2">5,500+</div>
                  <div className="text-blue-100">Free Learning Programmes</div>
                  <div className="text-xs text-blue-200">No-cost access</div>
                </CardContent>
              </Card>
            </div>
            
            {/* Course Categories Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/15 transition-all cursor-pointer hover:scale-105 hover:shadow-xl" onClick={() => window.open('/courses?category=it', '_blank')}>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">Information Technology</h3>
                      <p className="text-blue-100">1,246 Programmes</p>
                    </div>
                    <BookOpen className="h-8 w-8 text-blue-400" />
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/15 transition-all cursor-pointer hover:scale-105 hover:shadow-xl" onClick={() => window.open('/courses?category=business', '_blank')}>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">Business & Leadership</h3>
                      <p className="text-blue-100">1,025 Programmes</p>
                    </div>
                    <BookOpen className="h-8 w-8 text-green-400" />
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/15 transition-all cursor-pointer hover:scale-105 hover:shadow-xl" onClick={() => window.open('/courses?category=teaching', '_blank')}>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">Education & Teaching</h3>
                      <p className="text-blue-100">1,588 Programmes</p>
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
                      <p className="text-blue-100">1,292 Programmes</p>
                    </div>
                    <BookOpen className="h-8 w-8 text-yellow-400" />
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/15 transition-all cursor-pointer hover:scale-105 hover:shadow-xl" onClick={() => window.open('/courses?category=health', '_blank')}>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">Health & Wellness</h3>
                      <p className="text-blue-100">991 Programmes</p>
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
                      <p className="text-blue-100">798 Programmes</p>
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
                      <p className="text-blue-100">432 Programmes</p>
                    </div>
                    <BookOpen className="h-8 w-8 text-cyan-400" />
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/15 transition-all cursor-pointer hover:scale-105 hover:shadow-xl" onClick={() => window.open('/courses?category=language', '_blank')}>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">Languages</h3>
                                        <p className="text-blue-100">312 Programmes</p>
                    </div>
                    <BookOpen className="h-8 w-8 text-indigo-400" />
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/15 transition-all cursor-pointer hover:scale-105 hover:shadow-xl" onClick={() => window.open('/courses?category=opontainment', '_blank')}>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">Opontainment</h3>
                      <p className="text-blue-100">156 Programmes</p>
                    </div>
                    <Music className="h-8 w-8 text-purple-400" />
                  </div>
                </CardContent>
              </Card>
          </div>
        </div>
      </section>

      {/* Opontainment Section */}
      <section className="py-20 px-4 bg-[#0a1834]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            {(() => {
              const { ref, isInView } = useScrollAnimation();
              return (
                <motion.h2 
                  ref={ref}
                  variants={titleVariants}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight"
                >
                  Opontainment - Creative Media & Entertainment
                </motion.h2>
              );
            })()}
            <p className="text-xl text-white max-w-3xl mx-auto leading-relaxed">
              Discover the art of film-making, music production, and creative storytelling. Learn from industry professionals and create stunning visual and audio content.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            {/* Left Section - Educational Programs */}
            <div className="space-y-8">
              <div className="flex items-center space-x-4 p-4 rounded-lg bg-[#11204a] border border-[#1e3a8a] hover:bg-[#16203a] transition-all duration-300">
                <div className="bg-purple-600 rounded-lg p-3 shadow-lg">
                  <Video className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-1">Film Production</h3>
                  <p className="text-white opacity-90">Master cinematography, editing, and storytelling techniques</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4 p-4 rounded-lg bg-[#11204a] border border-[#1e3a8a] hover:bg-[#16203a] transition-all duration-300">
                <div className="bg-blue-600 rounded-lg p-3 shadow-lg">
                  <Music className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-1">Music Production</h3>
                  <p className="text-white opacity-90">Create professional music and sound effects</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4 p-4 rounded-lg bg-[#11204a] border border-[#1e3a8a] hover:bg-[#16203a] transition-all duration-300">
                <div className="bg-indigo-600 rounded-lg p-3 shadow-lg">
                  <Edit3 className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-1">Screenwriting</h3>
                  <p className="text-white opacity-90">Learn story structure and character development</p>
                </div>
              </div>
              
              <Button 
                size="lg" 
                className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 text-lg font-semibold rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105" 
                onClick={() => window.open('/courses?category=opontainment', '_self')}
              >
                Explore Opontainment
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
            
            {/* Right Section - Creative Services Grid */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-white mb-6 text-center">Creative Services</h3>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { name: 'Merch', bg: 'bg-[#11204a]' },
                  { name: 'Interactive', bg: 'bg-[#11204a]' },
                  { name: 'Posters', bg: 'bg-[#11204a]' },
                  { name: 'Web Design', bg: 'bg-[#11204a]' },
                  { name: 'Logo', bg: 'bg-[#11204a]' },
                  { name: 'Animation', bg: 'bg-[#11204a]' },
                  { name: 'Communication', bg: 'bg-[#11204a]' },
                  { name: 'Art Direction', bg: 'bg-[#11204a]' },
                  { name: 'Product Video', bg: 'bg-[#11204a]' }
                ].map((service, index) => (
                  <div 
                    key={index}
                    className={`${service.bg} border border-[#1e3a8a] rounded-lg p-4 text-center hover:bg-[#16203a] transition-all duration-300 cursor-pointer group`}
                  >
                    <span className="text-white font-medium text-sm italic group-hover:text-purple-300 transition-colors duration-300">
                      {service.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      
      {/* Featured Courses Section */}
      <section className="py-20 section-full-width bg-[#0a1834]">
        <div className="container-fluid">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              {(() => {
                const { ref, isInView } = useScrollAnimation();
                return (
                  <motion.h2 
                    ref={ref}
                    variants={titleVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="text-4xl font-bold text-white mb-4"
                  >
                    Featured Learning Opportunities
                  </motion.h2>
                );
              })()}
              <p className="text-xl text-blue-100 max-w-2xl mx-auto">
                Explore top-rated programmes from trusted educators and international partners.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredCourses.map((course) => (
                <CourseCard key={course.id} course={course} />
              ))}
            </div>
            
            <div className="text-center mt-12">
              <Button size="lg" className="bg-white/10 backdrop-blur-md hover:bg-white/20 text-white border border-white/20" onClick={() => window.open('/courses', '_self')}>
                See All Programmes
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <SuccessStoriesCarousel />


      {/* AI-Powered Features Section */}
      <section className="py-20 section-full-width bg-[#0a1834]">
        <div className="container-fluid">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              {(() => {
                const { ref, isInView } = useScrollAnimation();
                return (
                  <motion.h2 
                    ref={ref}
                    variants={titleVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="text-4xl font-bold text-white mb-4"
                  >
                    Meet Our AI – Your Intelligent Learning Assistant
                  </motion.h2>
                );
              })()}
              <p className="text-xl text-gray-300 font-bold max-w-3xl mx-auto">
                Experience next-generation online learning with AI-powered video, instant coaching, and personalised support.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <img 
                  src="https://tse2.mm.bing.net/th?id=OIP.b2TGJlmxEdjYI39ZFNzPKwHaHa&pid=Api&P=0&h=180" 
                  alt="AI-Powered Learning"
                  className="w-full rounded-2xl shadow-2xl transition-all duration-500 hover:scale-110 hover:shadow-4xl hover:brightness-110 cursor-pointer transform hover:-translate-y-4 hover:rotate-1 hover:z-10 relative"
                  loading="lazy"
                />
              </div>
              <div className="space-y-10">
                <div className="mb-6">
                  <h2 className="text-3xl font-bold text-white mb-2">AI-Powered Learning Support</h2>
                  <p className="text-cyan-300 text-lg max-w-2xl">Unlock your full potential with instant AI coaching, live expert sessions, and personalised career roadmaps—all designed to accelerate your learning journey.</p>
                </div>
                <div className="space-y-8">
                  <div className="flex items-start space-x-4">
                    <div className="bg-cyan-300 rounded-full p-2">
                      <Play className="h-6 w-6 text-[#0a1834]" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-1">Instant AI Coaching</h3>
                      <p className="text-cyan-200 text-base font-medium">Get real-time feedback and guidance from AI agents tailored to your unique learning needs. Progress faster with actionable insights and support, anytime.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="bg-green-400 rounded-full p-2">
                      <Users className="h-6 w-6 text-[#0a1834]" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-1">Live Interactive Sessions</h3>
                      <p className="text-cyan-200 text-base font-medium">Join live sessions with AI-powered tutors, career coaches, and global experts. Collaborate, ask questions, and get personalised advice in real time.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="bg-purple-400 rounded-full p-2">
                      <Star className="h-6 w-6 text-[#0a1834]" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-1">Personalised Career Roadmaps</h3>
                      <p className="text-cyan-200 text-base font-medium">Answer a few questions and receive a step-by-step, personalised roadmap to achieve your learning and career goals—crafted just for you by AI.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 bg-[#0a1834]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">FREE. All Features. FOREVER!</h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Enjoy a free account for small teams, with access to all premium features—forever!
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="bg-white/10 backdrop-blur-md border-white/20">
              <CardContent className="p-8">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-white mb-2">FREE PLAN</h3>
                  <p className="text-blue-100 mb-6">Great for individuals and small teams</p>
                  <div className="text-5xl font-bold text-orange-400 mb-2">$0.00</div>
                  <p className="text-blue-100 mb-8">free forever</p>
                  
                  <div className="space-y-4 mb-8 text-left">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      <span className="text-white">All Features</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      <span className="text-white">Up to 10 Learners</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      <span className="text-white">Unlimited Courses</span>
                    </div>
                  </div>
                  
                  <Button size="lg" className="w-full bg-blue-600 text-white hover:bg-blue-700">
                    Start Free
                  </Button>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-white/10 backdrop-blur-md border-white/20">
              <CardContent className="p-8">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-white mb-2">ESSENTIALS</h3>
                  <p className="text-blue-100 mb-6">Best for growing organizations</p>
                  <div className="text-5xl font-bold text-orange-400 mb-2">$1.99</div>
                  <p className="text-blue-100 mb-8">per active learner/month</p>
                  
                  <div className="space-y-4 mb-8 text-left">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      <span className="text-white">AI-Powered Support & Progress Tracking</span>
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
              Have questions? <span className="text-white underline cursor-pointer">Book a demo for personalised support.</span>
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 bg-[#0a1834]">
        <div className="max-w-7xl mx-auto">
          <Card className="bg-white/10 backdrop-blur-md border-white/20">
            <CardContent className="p-12">
              <div className="grid md:grid-cols-4 gap-8 text-center">
                <div>
                  <div className="text-4xl font-bold text-white mb-2">50,000+</div>
                  <div className="text-white font-semibold">Active Learners</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-white mb-2">1,200+</div>
                  <div className="text-white font-semibold">Expert Educators</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-white mb-2">5,000+</div>
                  <div className="text-white font-semibold">Learning Programmes</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-white mb-2">54</div>
                  <div className="text-white font-semibold">Countries Served</div>
                  <div className="text-xs text-blue-200">Worldwide reach</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>


      {/* Create & Sell Online Courses Section */}
      <section className="py-20 px-4 bg-[#0a1834]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Create & Monetize Online Courses</h2>
            <p className="text-xl text-gray-300">Easily create and sell your online courses with our global eLearning platform</p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content - Media Screen */}
            <div className="relative">
              <div className="w-full h-96 bg-[#0a1834] border-4 border-[#11204a] rounded-2xl shadow-2xl overflow-hidden relative">
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
                
                {/* Overlay to cover the light blue bar */}
                <div className="absolute top-0 left-0 w-1/2 h-full bg-[#0a1834] z-10 flex items-center justify-center">
                  <img 
                    src="/branding/oponmeta-logo.png" 
                    alt="OponMeta Logo" 
                    className="w-32 h-20 object-contain"
                  />
                </div>
              </div>
            </div>

            {/* Right Content - Features */}
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <span className="text-lg text-white">Design and deliver online courses & training</span>
                  <span className="text-xs text-gray-300">Flexible authoring tools</span>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <span className="text-lg text-white">Monetize your online courses & training</span>
                  <span className="text-xs text-gray-300">Global marketplace access</span>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <span className="text-lg text-white">Grow your audience in our marketplace</span>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <span className="text-lg text-white">Quick setup—start selling in minutes</span>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 w-full max-w-md mx-auto">
                <Button size="lg" className="bg-blue-600 text-white hover:bg-blue-700 w-full sm:w-auto" onClick={() => window.open('/signin', '_self')}>
                  Get Started Free
                </Button>
                <Button size="lg" variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50 w-full sm:w-auto" onClick={() => window.open('/get-demo', '_self')}>
                  Get a Demo →
                </Button>
              </div>
              
              <p className="text-sm text-gray-300">✓ No credit card required.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Videos Section */}
      <section className="py-20 px-4 bg-[#0a1834]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            {(() => {
              const { ref, isInView } = useScrollAnimation();
              return (
                <motion.h2 
                  ref={ref}
                  variants={titleVariants}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  className="text-4xl font-bold text-white mb-6"
                >
                  Video Tutorials
                </motion.h2>
              );
            })()}
            <p className="text-xl text-gray-300">Learn from our expert-led video guides</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-all cursor-pointer hover:scale-105" onClick={() => alert('Opening video: How to Choose the Best Corporate Training Platform')}>
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158" 
                  alt="Corporate Training"
                  className="w-full h-48 object-cover rounded-t-lg"
                  loading="lazy"
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
                <h3 className="font-semibold text-white mb-2">How to Choose the Best Corporate Training Platform</h3>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-all cursor-pointer hover:scale-105" onClick={() => alert('Opening video: How to Set up Your Virtual Classroom')}>
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1584697964192-860eee694d7b" 
                  alt="Virtual Classroom"
                  className="w-full h-48 object-cover rounded-t-lg"
                  loading="lazy"
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
                <h3 className="font-semibold text-white mb-2">How to Set Up Your Virtual Classroom</h3>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-all cursor-pointer hover:scale-105" onClick={() => alert('Opening video: How to Choose the Best LMS for Employee Training')}>
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1518081461904-9be7c1e48c31" 
                  alt="LMS Software"
                  className="w-full h-48 object-cover rounded-t-lg"
                  loading="lazy"
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
                <h3 className="font-semibold text-white mb-2">How to Choose the Best LMS for Employee Training</h3>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Development Process Section */}
      <section className="py-20 px-4 bg-[#0a1834]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            {(() => {
              const { ref, isInView } = useScrollAnimation();
              return (
                <motion.h2 
                  ref={ref}
                  variants={titleVariants}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  className="text-4xl font-bold text-white mb-6"
                >
                  We Are Experts in Course Development
                </motion.h2>
              );
            })()}
            <p className="text-xl text-gray-300 mb-12">
              With hundreds of courses built and millions of learners trained, we know how to deliver impactful education.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="text-5xl font-bold text-orange-500 mb-2">100,000+</div>
              <div className="text-white">Courses & Assessments Created</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-orange-500 mb-2">4,000,000+</div>
              <div className="text-white">Global Learners</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-orange-500 mb-2">100</div>
              <div className="text-white">Year Vision</div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 w-full max-w-md mx-auto">
            <Button size="lg" className="bg-blue-600 text-white hover:bg-blue-700 w-full sm:w-auto">
              Get a Quote
            </Button>
            <Button size="lg" variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50 w-full sm:w-auto">
              Talk to Sales →
            </Button>
          </div>
          
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-4 sm:p-8 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
            
            <div className="relative z-10">
              {(() => {
                const { ref, isInView } = useScrollAnimation();
                return (
                  <motion.h3 
                    ref={ref}
                    variants={titleVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2 sm:mb-4 text-center"
                  >
                    Steps in Our Custom eLearning Development Process
                  </motion.h3>
                );
              })()}
              <p className="text-gray-700 text-center mb-6 sm:mb-12 text-base sm:text-lg">
                Our instructional design team follows these proven steps:
              </p>
              
              {/* Interactive Process Demo */}
              <div className="max-w-4xl mx-auto">
                {/* Progress Bar */}
                <div className="mb-8 sm:mb-12">
                  <div className="relative overflow-x-auto">
                    <div className="flex justify-between min-w-[600px] sm:min-w-0 mb-2 px-2 sm:px-0">
                      {[1, 2, 3, 4, 5, 6].map((step) => (
                        <div key={step} className="text-xs sm:text-sm font-medium text-gray-300 whitespace-nowrap">
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
                <div className="space-y-4 sm:space-y-6">
                  {[
                    {
                      number: 1,
                      title: "Share your learning goals and audience",
                      icon: "💬",
                      color: "from-blue-500 to-blue-600",
                      bgColor: "bg-blue-50",
                      description: "Share your learning objectives, target audience, and specific requirements"
                    },
                    {
                      number: 2,
                      title: "We design a course outline and select the best content assets (videos, tutorials, handouts, quizzes, etc.)",
                      icon: "📋",
                      color: "from-green-500 to-green-600",
                      bgColor: "bg-green-50",
                      description: "Our team structures your content and selects optimal learning materials"
                    },
                    {
                      number: 3,
                      title: "Our instructional designers build, design, and refine your course",
                      icon: "🎨",
                      color: "from-purple-500 to-purple-600",
                      bgColor: "bg-purple-50",
                      description: "Expert designers craft engaging, pedagogically sound course content"
                    },
                    {
                      number: 4,
                      title: "We integrate your course into our online platform",
                      icon: "⚙️",
                      color: "from-orange-500 to-orange-600",
                      bgColor: "bg-orange-50",
                      description: "Technical integration and platform setup for seamless delivery"
                    },
                    {
                      number: 5,
                      title: "You review the course and we finalize it together",
                      icon: "🔍",
                      color: "from-pink-500 to-pink-600",
                      bgColor: "bg-pink-50",
                      description: "Collaborative review process to ensure everything meets your expectations"
                    },
                    {
                      number: 6,
                      title: "We deliver your course and show you how to launch and track results",
                      icon: "🚀",
                      color: "from-indigo-500 to-indigo-600",
                      bgColor: "bg-indigo-50",
                      description: "Launch your course with full training and analytics support"
                    }
                  ].map((step, index) => (
                    <div 
                      key={step.number}
                      className={`group cursor-pointer transition-all duration-500 hover:scale-105 animate-fade-in ${step.bgColor} rounded-xl p-4 sm:p-6 shadow-sm hover:shadow-lg`}
                      style={{ animationDelay: `${index * 150}ms` }}
                      onClick={() => {
                        const element = document.getElementById(`step-${step.number}`);
                        if (element) {
                          element.scrollIntoView({ behavior: 'smooth' });
                        }
                      }}
                    >
                      <div className="flex flex-col xs:flex-row items-start xs:items-center space-y-4 xs:space-y-0 xs:space-x-6">
                        {/* Step Number & Icon */}
                        <div className="flex-shrink-0 flex flex-col items-center">
                          <div className={`w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r ${step.color} text-white rounded-full flex items-center justify-center font-bold text-base sm:text-lg shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                            <span className="text-xl sm:text-2xl">{step.icon}</span>
                          </div>
                          <div className="text-center mt-2">
                            <span className="text-xs sm:text-sm font-semibold text-gray-700">Step {step.number}</span>
                          </div>
                        </div>
                        
                        {/* Content */}
                        <div className="flex-1">
                          <h4 className="font-bold text-gray-900 mb-2 sm:mb-3 text-base sm:text-lg group-hover:text-blue-600 transition-colors duration-300">
                            {step.title}
                          </h4>
                          <p className="text-gray-700 text-xs sm:text-sm leading-relaxed opacity-80 group-hover:opacity-100 transition-opacity duration-300">
                            {step.description}
                          </p>
                          
                          {/* Interactive Elements */}
                          <div className="mt-3 sm:mt-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                            <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-4">
                              <div className="flex items-center space-x-2">
                                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                                <span className="text-xs text-gray-600">Interactive Demo Available</span>
                              </div>
                              <button className="text-xs bg-white/50 px-3 py-1 rounded-full hover:bg-white/80 transition-colors">
                                Learn More →
                              </button>
                            </div>
                          </div>
                        </div>
                        
                        {/* Progress Indicator */}
                        <div className="flex-shrink-0 hidden xs:block">
                          <div className="w-1 h-12 sm:h-20 bg-gray-200 rounded-full overflow-hidden">
                            <div 
                              className={`w-full bg-gradient-to-b ${step.color} transition-all duration-1000 ease-out`}
                              style={{ height: '100%', animationDelay: `${index * 200}ms` }}
                            ></div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Connection Line */}
                      {index < 5 && (
                        <div className="ml-8 mt-4 hidden xs:block">
                          <div className="w-px h-8 bg-gradient-to-b from-gray-300 to-transparent mx-auto"></div>
                          <div className="w-2 h-2 bg-gray-400 rounded-full mx-auto animate-bounce" style={{ animationDelay: `${index * 300}ms` }}></div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
                
                {/* Call to Action */}
                <div className="text-center mt-8 sm:mt-12 p-4 sm:p-6 bg-white/70 backdrop-blur-sm rounded-xl border border-blue-200">
                  <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-4">Ready to Build Your Custom Course?</h4>
                                      <p className="text-gray-700 mb-4 sm:mb-6 text-sm sm:text-base">Let our experts guide you through a proven, effective process.</p>
                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                    <button 
                      className="px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105 shadow-lg w-full sm:w-auto"
                      onClick={() => alert('Starting course development process...')}
                    >
                      🚀 Launch Your Project
                    </button>
                    <button 
                      className="px-4 sm:px-6 py-2 sm:py-3 border-2 border-blue-600 text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-300 w-full sm:w-auto"
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
      <section className="py-20 px-4 bg-[#0a1834]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            {(() => {
              const { ref, isInView } = useScrollAnimation();
              return (
                <motion.h2 
                  ref={ref}
                  variants={titleVariants}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  className="text-4xl font-bold text-white mb-6"
                >
                  Custom eLearning Solutions
                </motion.h2>
              );
            })()}
            <p className="text-xl text-gray-300 mb-4">
              Access all the resources and tools you need for world-class eLearning in one place.
            </p>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto">
              Our all-in-one platform empowers you to create, deliver, and manage exceptional online learning experiences.
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
                  <h3 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">Premium Learning Library</h3>
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Browse a library of <strong>500+ premium programmes</strong> on in-demand topics, fully customizable and ready to use. 
                  Topics include AI, Data Science, Digital Marketing, Leadership, and more.
                </p>
                <div className="mb-6">
                  <img 
                    src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6" 
                    alt="Course Library Interface"
                    className="w-full h-48 object-cover rounded-lg shadow-md transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="space-y-2 mb-6">
                  <div className="flex items-center text-sm text-gray-700">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                    500+ Professional Programmes
                  </div>
                  <div className="flex items-center text-sm text-gray-700">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                    Fully Customizable Content
                  </div>
                  <div className="flex items-center text-sm text-gray-700">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                    Multi-Language Support
                  </div>
                  <div className="flex items-center text-sm text-gray-700">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                    Mobile-Optimised Learning
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
                  <h3 className="text-2xl font-bold text-gray-900 group-hover:text-purple-600 transition-colors">Virtual Classrooms</h3>
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Take charge of all online learning activities using our centralized and secure 
                  <strong> virtual classroom platform</strong>. Support up to 1000 concurrent learners with HD video.
                </p>
                <div className="mb-6">
                  <img 
                    src="https://images.unsplash.com/photo-1513258496099-48168024aec0" 
                    alt="Virtual Classroom Interface"
                    className="w-full h-48 object-cover rounded-lg shadow-md transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="space-y-2 mb-6">
                  <div className="flex items-center text-sm text-gray-700">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                    Live HD Video Streaming
                  </div>
                  <div className="flex items-center text-sm text-gray-700">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                    Interactive Whiteboard
                  </div>
                  <div className="flex items-center text-sm text-gray-700">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                    Screen Sharing & Recording
                  </div>
                  <div className="flex items-center text-sm text-gray-700">
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
                  <h3 className="text-2xl font-bold text-gray-900 group-hover:text-green-600 transition-colors">Quizzes & Feedback</h3>
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Assess knowledge retention through engaging quizzes with <strong>15+ interactive question types</strong>. 
                  Create feedback surveys with advanced analytics and AI-powered insights.
                </p>
                <div className="mb-6">
                  <img 
                    src="https://images.unsplash.com/photo-1503676382389-4809596d5290" 
                    alt="Quiz Interface"
                    className="w-full h-48 object-cover rounded-lg shadow-md transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="space-y-2 mb-6">
                  <div className="flex items-center text-sm text-gray-700">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                    15+ Interactive Question Types
                  </div>
                  <div className="flex items-center text-sm text-gray-700">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                    Real-time Analytics Dashboard
                  </div>
                  <div className="flex items-center text-sm text-gray-700">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                    Automated Grading System
                  </div>
                  <div className="flex items-center text-sm text-gray-700">
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
                  <h3 className="text-2xl font-bold text-gray-900 group-hover:text-orange-600 transition-colors">eLearning Authoring Suite</h3>
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Take advantage of the world's easiest authoring suite. Develop engaging online programmes and assessments in minutes 
                  with our <strong>drag-and-drop interface</strong> and 100+ professional templates.
                </p>
                <div className="mb-6">
                  <img 
                    src="https://images.unsplash.com/photo-1519389950473-47ba0277781c" 
                    alt="Authoring Tool Interface"
                    className="w-full h-48 object-cover rounded-lg shadow-md transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="space-y-2 mb-6">
                  <div className="flex items-center text-sm text-gray-700">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                    Drag-and-Drop Course Builder
                  </div>
                  <div className="flex items-center text-sm text-gray-700">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                    100+ Professional Templates
                  </div>
                  <div className="flex items-center text-sm text-gray-700">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                    SCORM & xAPI Compliance
                  </div>
                  <div className="flex items-center text-sm text-gray-700">
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
              {(() => {
                const { ref, isInView } = useScrollAnimation();
                return (
                  <motion.h3 
                    ref={ref}
                    variants={titleVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="text-3xl font-bold text-gray-900 mb-4"
                  >
                    Comprehensive End-to-End Learning Platform
                  </motion.h3>
                );
              })()}
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                From content creation to learner engagement, our platform supports every step of your eLearning journey.
              </p>
            </div>
            
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="bg-blue-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">1</span>
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Create Engaging Content</h4>
                <p className="text-gray-700 text-sm">Use our authoring suite or select from the premium learning library</p>
              </div>
              
              <div className="text-center">
                <div className="bg-purple-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">2</span>
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Deliver Seamless Learning</h4>
                                  <p className="text-gray-700 text-sm">Host live sessions in virtual classrooms or offer self-paced programmes</p>
              </div>
              
              <div className="text-center">
                <div className="bg-green-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">3</span>
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Assess & Analyze Progress</h4>
                <p className="text-gray-700 text-sm">Track learning with quizzes, feedback, and advanced analytics</p>
              </div>
              
              <div className="text-center">
                <div className="bg-orange-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">4</span>
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Scale & Optimize Globally</h4>
                                  <p className="text-gray-700 text-sm">Leverage AI insights to enhance programmes and expand your reach</p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            {(() => {
              const { ref, isInView } = useScrollAnimation();
              return (
                <motion.h3 
                  ref={ref}
                  variants={titleVariants}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  className="text-2xl font-bold text-white mb-6"
                >
                  Ready to Elevate Your Learning Experience?
                </motion.h3>
              );
            })()}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 text-white hover:bg-blue-700" onClick={() => window.open('/signin', '_self')}>
                Begin Free Trial
              </Button>
              <Button size="lg" variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50" onClick={() => window.open('/get-demo', '_self')}>
                Book a Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-[#0a1834]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            {(() => {
              const { ref, isInView } = useScrollAnimation();
              return (
                <motion.h2 
                  ref={ref}
                  variants={titleVariants}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  className="text-4xl font-bold text-white mb-6"
                >
                  Platform Features
                </motion.h2>
              );
            })()}
          </div>
          
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center cursor-pointer hover:scale-105 transition-transform" onClick={() => alert('Learn more about Expert Course Design')}>
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 hover:bg-blue-200 transition-colors">
                <BookOpen className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Expert Course Design</h3>
              <p className="text-gray-300">
                Design or update eLearning programmes with guidance from industry experts who follow global best practices.
              </p>
            </div>
            
            <div className="text-center cursor-pointer hover:scale-105 transition-transform" onClick={() => alert('Learn more about Mobile-Optimized features')}>
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 hover:bg-blue-200 transition-colors">
                <Globe className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Mobile-Optimised</h3>
              <p className="text-gray-300">
                Deliver a single version of a programme across all devices and platforms, hassle-free.
              </p>
            </div>
            
            <div className="text-center cursor-pointer hover:scale-105 transition-transform" onClick={() => alert('Learn more about Up-to-Date services')}>
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 hover:bg-blue-200 transition-colors">
                <Star className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Always Up-to-Date</h3>
              <p className="text-gray-300">
                Benefit from our team's commitment to staying current with the latest eLearning trends.
              </p>
            </div>
            
            <div className="text-center cursor-pointer hover:scale-105 transition-transform" onClick={() => alert('Learn more about Curriculum Design')}>
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 hover:bg-blue-200 transition-colors">
                <BookOpen className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Curriculum Development</h3>
              <p className="text-gray-300">
                Align your learning needs with desired outcomes. Our designers select the best topics, media, and interactive elements for your audience.
              </p>
            </div>
            
            <div className="text-center cursor-pointer hover:scale-105 transition-transform" onClick={() => alert('Learn more about Storyboarding services')}>
              <div className="bg-red-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 hover:bg-red-200 transition-colors">
                <Users className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Storyboarding Services</h3>
              <p className="text-gray-300">
                Receive custom storyboards that serve as blueprints for effective learning programmes tailored to your learners.
              </p>
            </div>
            
            <div className="text-center cursor-pointer hover:scale-105 transition-transform" onClick={() => alert('Learn more about Full-Service Delivery')}>
              <div className="bg-yellow-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 hover:bg-yellow-200 transition-colors">
                <Users className="h-8 w-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Full-Service Delivery</h3>
              <p className="text-gray-300">
                Take advantage of our end-to-end instructional design services—from audience analysis to development and evaluation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-20 px-4 bg-[#0a1834]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            {(() => {
              const { ref, isInView } = useScrollAnimation();
              return (
                <motion.h2 
                  ref={ref}
                  variants={titleVariants}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  className="text-4xl font-bold text-white mb-6"
                >
                  Success Stories
                </motion.h2>
              );
            })()}
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="bg-blue-50 border-blue-200 cursor-pointer hover:shadow-lg hover:scale-105 transition-all" onClick={() => alert('View OLYMPIAD TESTER Case Study')}>
              <CardContent className="p-6">
                <div className="text-center">
                  <div className="bg-blue-600 text-white rounded-lg px-4 py-2 inline-block mb-4 hover:bg-blue-700 transition-colors">
                    OLYMPIAD TESTER
                  </div>
                  <p className="text-gray-700">
                    Olympiad Tester leads the way with our global learning tools
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
                    Acer empowers its workforce with innovative training
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
                    CDPH elevates volunteer and resident training worldwide
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

      {/* Team Section - Carousel */}
      <section className="py-20 px-4 bg-[#0a1834]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white">Our Global Team</h3>
          </div>
          <TeamCarousel />
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-[#0a1834]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            {(() => {
              const { ref, isInView } = useScrollAnimation();
              return (
                <motion.h2 
                  ref={ref}
                  variants={titleVariants}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  className="text-4xl font-bold text-white mb-6"
                >
                  Common Questions
                </motion.h2>
              );
            })()}
          </div>
          
          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-white mb-3">
                  What is instructional design for online learning?
                </h3>
                <p className="text-gray-300 font-bold">
                  Instructional design for online learning is the structured process of creating and developing digital courses. 
                  Instructional designers assess the needs of learners and design content to achieve clear learning outcomes. The goal is to build engaging, effective online learning experiences.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-white mb-3">
                  How long does it take to build a custom online course?
                </h3>
                <p className="text-gray-300 font-bold">
                  The timeline depends on course complexity, content length, and requirements. 
                  Typically, a standard course takes 4–8 weeks from initial consultation to launch.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-white mb-3">
                  What content formats are supported?
                </h3>
                <p className="text-gray-300 font-bold">
                  We support a wide range of formats including videos, interactive presentations, documents, quizzes, 
                  assessments, and SCORM-compliant packages for compatibility with any LMS.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Student Portal & Subscription CTA Section */}
      <section className="py-20 px-4 bg-[#0a1834]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            {(() => {
              const { ref, isInView } = useScrollAnimation();
              return (
                <motion.h2 
                  ref={ref}
                  variants={titleVariants}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  className="text-4xl font-bold text-white mb-4"
                >
                  Access Your Learning Hub
                </motion.h2>
              );
            })()}
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Manage your learning journey, track progress, and unlock premium features with our comprehensive student portal and subscription management.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Student Portal Card */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-8 hover:bg-white/15 transition-all cursor-pointer" onClick={() => window.open('/student-portal', '_self')}>
              <div className="flex items-center mb-6">
                <div className="bg-green-500 rounded-lg p-3 mr-4">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Student Portal</h3>
              </div>
              <p className="text-blue-100 mb-6">
                Access your personalised dashboard, track course progress, manage certificates, and connect with your learning community.
              </p>
              <div className="space-y-2 mb-6">
                <div className="flex items-center text-sm text-blue-200">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                  Course Progress Tracking
                </div>
                <div className="flex items-center text-sm text-blue-200">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                  Certificate Management
                </div>
                <div className="flex items-center text-sm text-blue-200">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                  Learning Analytics
                </div>
                <div className="flex items-center text-sm text-blue-200">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                  Community Features
                </div>
              </div>
              <Button size="lg" className="w-full bg-green-600 text-white hover:bg-green-700">
                Access Student Portal
              </Button>
            </div>
            
            {/* Subscription Management Card */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-8 hover:bg-white/15 transition-all cursor-pointer" onClick={() => window.open('/companion-subscribe', '_self')}>
              <div className="flex items-center mb-6">
                <div className="bg-pink-500 rounded-lg p-3 mr-4">
                  <CreditCard className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">Subscription Management</h3>
              </div>
              <p className="text-blue-100 mb-6">
                Upgrade your learning experience with AI companions, premium features, and advanced analytics. Manage your subscription with ease.
              </p>
              <div className="space-y-2 mb-6">
                <div className="flex items-center text-sm text-blue-200">
                  <div className="w-2 h-2 bg-pink-400 rounded-full mr-3"></div>
                  AI Learning Companions
                </div>
                <div className="flex items-center text-sm text-blue-200">
                  <div className="w-2 h-2 bg-pink-400 rounded-full mr-3"></div>
                  Premium Course Access
                </div>
                <div className="flex items-center text-sm text-blue-200">
                  <div className="w-2 h-2 bg-pink-400 rounded-full mr-3"></div>
                  Advanced Analytics
                </div>
                <div className="flex items-center text-sm text-blue-200">
                  <div className="w-2 h-2 bg-pink-400 rounded-full mr-3"></div>
                  Priority Support
                </div>
              </div>
              <Button size="lg" className="w-full bg-pink-600 text-white hover:bg-pink-700">
                Manage Subscription
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            ref={useScrollAnimation().ref}
            initial="hidden"
            animate={useScrollAnimation().isInView ? "visible" : "hidden"}
            variants={titleVariants}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Connect With OponMeta
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Follow us on social media for the latest updates, educational content, and community engagement.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <SocialMediaLinks variant="default" showLabels={true} />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-center mt-12"
          >
            <p className="text-gray-600 mb-4">
              Stay updated with the latest in AI-powered education
            </p>
            <div className="flex justify-center space-x-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">50K+</div>
                <div className="text-sm text-gray-600">Followers</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600">100+</div>
                <div className="text-sm text-gray-600">Daily Posts</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">24/7</div>
                <div className="text-sm text-gray-600">Community Support</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Lamp Section */}
      <LampContainer>
        <motion.h1
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
          className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl dark:from-cyan-300 dark:to-white"
        >
          Ready to Shape Your Future?<br />
          <span className="block text-2xl md:text-4xl font-normal text-[#0a1834] dark:text-white drop-shadow-lg mt-4">
            Join thousands of learners advancing their careers with our global education platform.
          </span>
        </motion.h1>
        <div className="mt-10 flex justify-center">
          <Button size="lg" className="bg-[#0a1834] text-white font-bold shadow-lg hover:bg-[#11204a] px-8 py-4 text-xl dark:bg-white dark:text-[#0a1834] dark:hover:bg-slate-200" onClick={() => window.open('/signin', '_self')}>
            Start Learning Now
          </Button>
        </div>
      </LampContainer>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
