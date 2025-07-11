import Navigation from "@/components/Navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Upload, DollarSign, Users, BookOpen, Star, TrendingUp, Video, Award, CheckCircle } from "lucide-react";
import PageNavigation from "@/components/PageNavigation";

const BecomeInstructor = () => {
  const benefits = [
    {
      icon: DollarSign,
      title: "Earn Revenue",
      description: "Keep up to 70% of your course revenue with our competitive instructor fee structure"
    },
    {
      icon: Users,
      title: "Global Reach", 
      description: "Access millions of learners worldwide across 54 countries"
    },
    {
      icon: BookOpen,
      title: "Course Tools",
      description: "Professional course creation tools with AI-powered assistance"
    },
    {
      icon: Video,
      title: "Studio Access",
      description: "Free access to our professional video recording studios"
    },
    {
      icon: TrendingUp,
      title: "Marketing Support",
      description: "Our team helps promote your courses to the right audience"
    },
    {
      icon: Award,
      title: "Recognition",
      description: "Build your personal brand and become a recognized industry expert"
    }
  ];

  const requirements = [
    "Expertise in your chosen subject area",
    "Ability to create engaging video content",
    "Commitment to student success",
    "Professional communication skills",
    "Access to recording equipment (we can help)",
    "Willingness to engage with student questions"
  ];

  const successStories = [
    {
      name: "Dr. Sarah Martinez",
      subject: "Data Science",
      students: 45000,
      revenue: "$180K",
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b47c"
    },
    {
      name: "James Chen",
      subject: "Web Development", 
      students: 32000,
      revenue: "$125K",
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e"
    },
    {
      name: "Maria Rodriguez",
      subject: "Digital Marketing",
      students: 28000,
      revenue: "$95K", 
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80"
    }
  ];

  const subjects = [
    "Technology & Programming",
    "Business & Marketing",
    "Design & Creative",
    "Health & Wellness",
    "Language Learning",
    "Academic Subjects",
    "Professional Development",
    "Personal Development",
    "Arts & Crafts",
    "Music & Audio",
    "Other"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-400 via-blue-500 to-cyan-500">
      {/* Removed <Navigation /> to prevent double navbar */}
      
      <div className="max-w-7xl mx-auto px-4 py-20">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Share Your Knowledge Globally
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-8">
            Inspire learners worldwide and grow your teaching career with OPONMETA's global platform
          </p>
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3">
            <Star className="h-5 w-5 text-yellow-400" />
            <span className="text-white font-medium">Join 1,200+ Global Instructors</span>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Application Form */}
          <Card className="bg-white/10 backdrop-blur-md border-white/20">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-white mb-6">Apply to Teach</h2>
              
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName" className="text-white">First Name *</Label>
                    <Input 
                      id="firstName"
                      className="mt-2 bg-white/10 border-white/20 text-white placeholder-gray-300"
                      placeholder="First Name"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName" className="text-white">Last Name *</Label>
                    <Input 
                      id="lastName"
                      className="mt-2 bg-white/10 border-white/20 text-white placeholder-gray-300"
                      placeholder="Last Name"
                      required
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="email" className="text-white">Email Address *</Label>
                  <Input 
                    id="email"
                    type="email"
                    className="mt-2 bg-white/10 border-white/20 text-white placeholder-gray-300"
                    placeholder="Email Address"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="phone" className="text-white">Phone Number</Label>
                  <Input 
                    id="phone"
                    type="tel"
                    className="mt-2 bg-white/10 border-white/20 text-white placeholder-gray-300"
                    placeholder="Phone Number (optional)"
                  />
                </div>

                <div>
                  <Label htmlFor="title" className="text-white">Professional Title *</Label>
                  <Input 
                    id="title"
                    className="mt-2 bg-white/10 border-white/20 text-white placeholder-gray-300"
                    placeholder="Your Professional Title"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="experience" className="text-white">Years of Experience *</Label>
                  <Select>
                    <SelectTrigger className="mt-2 bg-white/10 border-white/20 text-white">
                      <SelectValue placeholder="Select experience level" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1-2">1-2 years</SelectItem>
                      <SelectItem value="3-5">3-5 years</SelectItem>
                      <SelectItem value="6-10">6-10 years</SelectItem>
                      <SelectItem value="10+">10+ years</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="subject" className="text-white">Subject Area *</Label>
                  <Select>
                    <SelectTrigger className="mt-2 bg-white/10 border-white/20 text-white">
                      <SelectValue placeholder="What would you like to teach?" />
                    </SelectTrigger>
                    <SelectContent>
                      {subjects.map((subject, index) => (
                        <SelectItem key={index} value={subject.toLowerCase().replace(/\s+/g, '-')}>
                          {subject}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="courseIdea" className="text-white">Course Idea *</Label>
                  <Textarea 
                    id="courseIdea"
                    className="mt-2 bg-white/10 border-white/20 text-white placeholder-gray-300 min-h-[100px]"
                    placeholder="Describe your course idea and its global impact..."
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="experience-description" className="text-white">Teaching Experience</Label>
                  <Textarea 
                    id="experience-description"
                    className="mt-2 bg-white/10 border-white/20 text-white placeholder-gray-300 min-h-[100px]"
                    placeholder="Share your teaching, training, or mentoring experience (optional)"
                  />
                </div>

                <div>
                  <Label htmlFor="motivation" className="text-white">Why do you want to teach? *</Label>
                  <Textarea 
                    id="motivation"
                    className="mt-2 bg-white/10 border-white/20 text-white placeholder-gray-300 min-h-[100px]"
                    placeholder="What inspires you to teach and share your expertise globally?"
                    required
                  />
                </div>

                <div>
                  <Label className="text-white">Portfolio/Resume Upload</Label>
                  <div className="mt-2 border-2 border-dashed border-white/20 rounded-lg p-6 text-center">
                    <Upload className="h-8 w-8 text-blue-300 mx-auto mb-2" />
                    <p className="text-blue-100 mb-2">Upload your resume or teaching portfolio</p>
                    <p className="text-blue-200 text-sm">PDF, DOC, or DOCX up to 10MB</p>
                    <Button variant="outline" className="mt-3 border-white/20 text-white hover:bg-white/10">
                      Upload File
                    </Button>
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox id="terms" />
                  <Label htmlFor="terms" className="text-sm text-blue-100">
                    I agree to the <a href="#" className="text-white hover:underline">Instructor Terms</a> and{" "}
                    <a href="#" className="text-white hover:underline">Revenue Sharing Agreement</a>
                  </Label>
                </div>

                <Button size="lg" className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white border-0">
                  Submit My Application
                </Button>
              </form>

              <p className="text-xs text-blue-200 mt-4 text-center">
                Your application will be reviewed within 3-5 business days.
              </p>
            </CardContent>
          </Card>

          {/* Benefits & Info */}
          <div className="space-y-8">
            {/* Benefits */}
            <Card className="bg-white/10 backdrop-blur-md border-white/20">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-white mb-6">Why Teach with OPONMETA?</h2>
                <p className="text-blue-100 mb-4">Empower learners everywhere and expand your impact as a global educator.</p>
                <div className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="p-2 bg-white/10 rounded-lg">
                        <benefit.icon className="h-5 w-5 text-blue-400" />
                      </div>
                      <div>
                        <h4 className="text-white font-medium">{benefit.title}</h4>
                        <p className="text-blue-100 text-sm">{benefit.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Requirements */}
            <Card className="bg-white/10 backdrop-blur-md border-white/20">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-white mb-6">Requirements</h2>
                <p className="text-blue-100 mb-4">What you need to join our global instructor community</p>
                <div className="space-y-3">
                  {requirements.map((requirement, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0" />
                      <span className="text-blue-100">{requirement}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Success Stories */}
            <Card className="bg-white/10 backdrop-blur-md border-white/20">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-white mb-6">Instructor Success Stories</h2>
                <p className="text-blue-100 mb-4">See how instructors are making a difference worldwide</p>
                <div className="space-y-6">
                  {successStories.map((instructor, index) => (
                    <div key={index} className="flex items-center space-x-4">
                      <img 
                        src={instructor.image}
                        alt={instructor.name}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div className="flex-1">
                        <h4 className="text-white font-medium">{instructor.name}</h4>
                        <p className="text-blue-200 text-sm">{instructor.subject}</p>
                        <div className="flex items-center space-x-4 text-xs text-blue-100 mt-1">
                          <span>{instructor.students.toLocaleString()} students</span>
                          <span>{instructor.revenue} earned</span>
                          <div className="flex items-center">
                            <Star className="h-3 w-3 text-yellow-400 fill-current mr-1" />
                            <span>{instructor.rating}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      <PageNavigation />
    </div>
  );
};

export default BecomeInstructor;