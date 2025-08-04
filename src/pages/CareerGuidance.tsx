import Navigation from "@/components/Navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Target, TrendingUp, Users, BookOpen, Award, Briefcase, GraduationCap } from "lucide-react";
import { useNavigate, Link } from "react-router-dom";
import PageNavigation from "@/components/PageNavigation";
import Footer from "@/components/Footer";

const CareerGuidance = () => {
  const navigate = useNavigate();

  const careerPaths = [
    {
      title: "Technology & Programming",
      courses: 45,
      avgSalary: "$95,000",
      growth: "+15%",
      popular: ["Python", "React", "Data Science", "AI/ML"],
      icon: "💻"
    },
    {
      title: "Digital Marketing",
      courses: 32,
      avgSalary: "$65,000", 
      growth: "+12%",
      popular: ["SEO", "Social Media", "Analytics", "Content"],
      icon: "📈"
    },
    {
      title: "Data Analytics",
      courses: 28,
      avgSalary: "$85,000",
      growth: "+18%",
      popular: ["SQL", "Python", "Tableau", "Statistics"],
      icon: "📊"
    },
    {
      title: "Design & UX",
      courses: 35,
      avgSalary: "$75,000",
      growth: "+8%",
      popular: ["Figma", "Adobe", "User Research", "Prototyping"],
      icon: "🎨"
    }
  ];

  const upskillAreas = [
    {
      title: "Leadership & Management",
      description: "Advance your career with leadership skills",
      courses: 25,
      duration: "3-6 months",
      icon: Briefcase
    },
    {
      title: "Technical Skills Update",
      description: "Stay current with latest technologies",
      courses: 40,
      duration: "2-4 months", 
      icon: BookOpen
    },
    {
      title: "Industry Certifications",
      description: "Get certified in your field",
      courses: 30,
      duration: "1-3 months",
      icon: Award
    },
    {
      title: "Soft Skills Development",
      description: "Communication, teamwork, and more",
      courses: 20,
      duration: "1-2 months",
      icon: Users
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-400 via-blue-500 to-cyan-500">
      {/* Removed <Navigation /> to prevent double navbar */}
      
      <div className="max-w-7xl mx-auto px-4 py-20">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Start Your Global Career Journey
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
            Whether you want to launch a new career or advance in your current role, we'll help you find the right learning path for your global ambitions.
          </p>
        </div>

        {/* Career Choice Section */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* New Career */}
          <Card className="bg-white/10 backdrop-blur-md border-white/20 group hover:bg-white/15 transition-all duration-300">
            <CardContent className="p-8">
              <div className="text-center">
                <Target className="h-16 w-16 text-purple-300 mx-auto mb-6" />
                <h2 className="text-2xl font-bold text-white mb-4">Find a New Career</h2>
                <p className="text-blue-100 mb-8">
                  Explore global career opportunities and discover the path that matches your skills and aspirations
                </p>
                
                <div className="grid grid-cols-2 gap-4 mb-8">
                  {careerPaths.map((path, index) => (
                    <div key={index} className="text-center p-4 bg-white/5 rounded-lg">
                      <div className="text-2xl mb-2">{path.icon}</div>
                      <h3 className="text-white font-semibold text-sm mb-1">{path.title}</h3>
                      <p className="text-blue-200 text-xs">{path.courses} courses</p>
                      <Badge variant="secondary" className="bg-green-500/20 text-green-300 text-xs mt-1">
                        {path.growth} growth
                      </Badge>
                    </div>
                  ))}
                </div>

                <Button 
                  size="lg" 
                  className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white border-0"
                  onClick={() => navigate("/courses")}
                >
                  Explore Global Career Paths
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Upskill Current Career */}
          <Card className="bg-white/10 backdrop-blur-md border-white/20 group hover:bg-white/15 transition-all duration-300">
            <CardContent className="p-8">
              <div className="text-center">
                <TrendingUp className="h-16 w-16 text-green-300 mx-auto mb-6" />
                <h2 className="text-2xl font-bold text-white mb-4">Upskill in Your Current Career</h2>
                <p className="text-blue-100 mb-8">
                  Advance your career with new skills, certifications, and expertise to reach your goals faster
                </p>

                <div className="space-y-4 mb-8">
                  {upskillAreas.map((area, index) => (
                    <div key={index} className="flex items-center p-4 bg-white/5 rounded-lg text-left">
                      <area.icon className="h-8 w-8 text-blue-300 mr-4" />
                      <div className="flex-1">
                        <h3 className="text-white font-semibold mb-1">{area.title}</h3>
                        <p className="text-blue-200 text-sm mb-1">{area.description}</p>
                        <div className="flex space-x-4 text-xs text-blue-300">
                          <span>{area.courses} courses</span>
                          <span>{area.duration}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <Button 
                  size="lg" 
                  className="w-full bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white border-0"
                  onClick={() => navigate("/courses")}
                >
                  Start Global Upskilling
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Career Assessment CTA */}
        <Card className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-md border-white/20 mb-16">
          <CardContent className="p-12 text-center">
            <GraduationCap className="h-16 w-16 text-yellow-300 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-white mb-4">Not Sure Which Path to Choose?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Take our personalised assessment to discover the best learning path for your global career goals
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-purple-900 hover:bg-gray-100">
                Take Career Assessment
              </Button>
              <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10" onClick={() => navigate("/get-demo")}>
                Book a Consultation
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Add a section with links to each career category page */}
        <div className="bg-white rounded-lg shadow p-6 mb-12">
          <h2 className="text-2xl font-bold mb-4 text-center">Explore Career Categories</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <Link to="/careers/leadership-and-management" className="block p-4 bg-blue-50 rounded hover:bg-blue-100 text-center font-semibold">Leadership and Management</Link>
            <Link to="/careers/mentorship-career-readiness" className="block p-4 bg-blue-50 rounded hover:bg-blue-100 text-center font-semibold">Mentorship & Career Readiness</Link>
            <Link to="/careers/specialised-industry-tracks" className="block p-4 bg-blue-50 rounded hover:bg-blue-100 text-center font-semibold">Specialised Industry Tracks</Link>
            <Link to="/careers/real-estate-and-estate-management" className="block p-4 bg-blue-50 rounded hover:bg-blue-100 text-center font-semibold">Real Estate and Estate Management</Link>
            <Link to="/careers/public-safety-and-emergency-services" className="block p-4 bg-blue-50 rounded hover:bg-blue-100 text-center font-semibold">Public Safety and Emergency Services</Link>
            <Link to="/careers/social-care-and-community-support" className="block p-4 bg-blue-50 rounded hover:bg-blue-100 text-center font-semibold">Social Care and Community Support</Link>
            <Link to="/careers/health-science" className="block p-4 bg-blue-50 rounded hover:bg-blue-100 text-center font-semibold">Health Science</Link>
            <Link to="/careers/finance" className="block p-4 bg-blue-50 rounded hover:bg-blue-100 text-center font-semibold">Finance</Link>
            <Link to="/careers/information-technology" className="block p-4 bg-blue-50 rounded hover:bg-blue-100 text-center font-semibold">Information Technology</Link>
            <Link to="/careers/education-training" className="block p-4 bg-blue-50 rounded hover:bg-blue-100 text-center font-semibold">Education & Training</Link>
            <Link to="/careers/business-management-administration" className="block p-4 bg-blue-50 rounded hover:bg-blue-100 text-center font-semibold">Business Management & Administration</Link>
            <Link to="/careers/marketing-sales-service" className="block p-4 bg-blue-50 rounded hover:bg-blue-100 text-center font-semibold">Marketing, Sales, & Service</Link>
            <Link to="/careers/agriculture-food-natural-resources" className="block p-4 bg-blue-50 rounded hover:bg-blue-100 text-center font-semibold">Agriculture, Food, & Natural Resources</Link>
            <Link to="/careers/hospitality-tourism" className="block p-4 bg-blue-50 rounded hover:bg-blue-100 text-center font-semibold">Hospitality & Tourism</Link>
          </div>
        </div>
      </div>

      <PageNavigation />
      <Footer />
    </div>
  );
};

export default CareerGuidance;