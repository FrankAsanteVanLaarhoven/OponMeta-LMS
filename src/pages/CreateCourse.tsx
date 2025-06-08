import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Plus, Sparkles, Video, FileText, Users, BookOpen, Clock, Award } from "lucide-react";
import { useNavigate } from "react-router-dom";
import PageNavigation from "@/components/PageNavigation";
import Footer from "@/components/Footer";

const CreateCourse = () => {
  const navigate = useNavigate();

  const creationMethods = [
    {
      title: "Create from Scratch",
      description: "Design your course from the beginning with full creative freedom",
      icon: Plus,
      features: ["Custom curriculum design", "Upload your own content", "Set your own pace", "Full customization"],
      time: "2-4 weeks",
      difficulty: "Intermediate",
      route: "/authoring-tool"
    },
    {
      title: "Create with AI",
      description: "Accelerate course creation with our AI-powered assistant for professional results",
      icon: Sparkles,
      features: ["AI-generated content", "Smart course structure", "Auto-generated quizzes", "Content suggestions"],
      time: "1-2 weeks", 
      difficulty: "Beginner",
      route: "/meet-ai"
    }
  ];

  const courseTypes = [
    {
      icon: Video,
      title: "Video Courses",
      description: "Engage learners with recorded video lessons",
      popular: true
    },
    {
      icon: FileText,
      title: "Text-Based Courses", 
      description: "Deliver knowledge through written lessons and resources",
      popular: false
    },
    {
      icon: Users,
      title: "Interactive Workshops",
      description: "Facilitate real-time, interactive learning experiences",
      popular: true
    },
    {
      icon: BookOpen,
      title: "Certification Programs",
      description: "Guide learners through structured certification journeys",
      popular: false
    }
  ];

  const instructorBenefits = [
    {
      icon: Award,
      title: "Global Reach",
      description: "Connect with a diverse, international audience"
    },
    {
      icon: Clock,
      title: "Flexible Schedule",
      description: "Teach and create courses on your own schedule"
    },
    {
      icon: Users,
      title: "Community Support",
      description: "Be part of a supportive global instructor network"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-400 via-blue-500 to-cyan-500">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 py-20">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Build and Share Your Course
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
            Empower learners everywhere by sharing your expertise. Select your preferred creation method and begin building your course today.
          </p>
        </div>

        {/* Creation Methods */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {creationMethods.map((method, index) => (
            <Card key={index} className="bg-white/10 backdrop-blur-md border-white/20 group hover:bg-white/15 transition-all duration-300">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <method.icon className="h-16 w-16 text-purple-300 mx-auto mb-4" />
                  <h2 className="text-2xl font-bold text-white mb-3">{method.title}</h2>
                  <p className="text-blue-100 mb-4">{method.description}</p>
                  
                  <div className="flex justify-center space-x-4 mb-4">
                    <Badge variant="secondary" className="bg-white/20 text-white">
                      {method.time}
                    </Badge>
                    <Badge variant="secondary" className="bg-white/20 text-white">
                      {method.difficulty}
                    </Badge>
                  </div>
                </div>

                <div className="space-y-3 mb-8">
                  {method.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-blue-100">
                      <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button 
                  size="lg" 
                  className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white border-0"
                  onClick={() => navigate(method.route)}
                >
                  {method.title}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Course Types */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">What Type of Course Will You Create?</h2>
            <p className="text-blue-100 max-w-2xl mx-auto">
              Select the course format that best fits your teaching style and content
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {courseTypes.map((type, index) => (
              <Card key={index} className="bg-white/10 backdrop-blur-md border-white/20 group hover:bg-white/15 transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <type.icon className="h-12 w-12 text-blue-300 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-white mb-2 flex items-center justify-center">
                    {type.title}
                    {type.popular && (
                      <Badge className="ml-2 bg-yellow-500/20 text-yellow-300 text-xs">
                        Popular
                      </Badge>
                    )}
                  </h3>
                  <p className="text-blue-200 text-sm">{type.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Instructor Benefits */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Why Become an Instructor?</h2>
            <p className="text-blue-100 max-w-2xl mx-auto">
              Inspire learners and earn income by sharing your passion and expertise
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {instructorBenefits.map((benefit, index) => (
              <Card key={index} className="bg-white/10 backdrop-blur-md border-white/20 text-center">
                <CardContent className="p-8">
                  <benefit.icon className="h-12 w-12 text-green-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                  <p className="text-blue-200">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <Card className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-md border-white/20">
          <CardContent className="p-12 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Start Teaching?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Become part of a global community of instructors and start making a difference through education
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-purple-900 hover:bg-gray-100" onClick={() => navigate("/become-instructor")}>
                Join as Instructor
              </Button>
              <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10" onClick={() => navigate("/get-demo")}>
                Book a Demo
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      <PageNavigation />
      <Footer />
    </div>
  );
};

export default CreateCourse;