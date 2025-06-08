import Navigation from "@/components/Navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Clock, CheckCircle, Star, Shield, Users, Zap, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import PageNavigation from "@/components/PageNavigation";

const FreeTrial = () => {
  const navigate = useNavigate();

  const trialFeatures = [
    "Access to 100+ premium courses",
    "AI-powered learning recommendations", 
    "Progress tracking & analytics",
    "Mobile & offline access",
    "Community forums access",
    "Basic certifications",
    "Email support"
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Training Manager",
      company: "TechCorp",
      text: "Started our trial on Monday, had our entire team trained by Friday. The platform is intuitive and powerful.",
      rating: 5
    },
    {
      name: "Michael Chen", 
      role: "L&D Director",
      company: "Global Finance",
      text: "The 14-day trial gave us enough time to see real results. Our engagement rates increased by 300%.",
      rating: 5
    }
  ];

  const handleStartTrial = () => {
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-400 via-blue-500 to-cyan-500">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
            <Zap className="h-4 w-4 text-yellow-400" />
            <span className="text-white font-medium">No Payment Details Needed</span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Begin Your 14-Day Free Trial
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Discover the full capabilities of OPONMETA with unrestricted access to every feature. 
            Cancel anytime, no commitment required.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Trial Sign Up Form */}
          <Card className="bg-white/10 backdrop-blur-md border-white/20">
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <div className="inline-flex items-center space-x-2 bg-green-500/20 rounded-full px-4 py-2 mb-4">
                  <Clock className="h-4 w-4 text-green-400" />
                  <span className="text-green-300 font-medium">14 Days Free</span>
                </div>
                <h2 className="text-2xl font-bold text-white mb-2">Create Your Account</h2>
                <p className="text-blue-100">Sign up for immediate access to all features</p>
              </div>
              
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName" className="text-white">First Name</Label>
                    <Input 
                      id="firstName"
                      className="mt-2 bg-white/10 border-white/20 text-white placeholder-gray-300"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName" className="text-white">Last Name</Label>
                    <Input 
                      id="lastName"
                      className="mt-2 bg-white/10 border-white/20 text-white placeholder-gray-300"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="email" className="text-white">Work Email</Label>
                  <Input 
                    id="email"
                    type="email"
                    className="mt-2 bg-white/10 border-white/20 text-white placeholder-gray-300"
                    placeholder="john@company.com"
                  />
                </div>

                <div>
                  <Label htmlFor="company" className="text-white">Company</Label>
                  <Input 
                    id="company"
                    className="mt-2 bg-white/10 border-white/20 text-white placeholder-gray-300"
                    placeholder="Your Company Name"
                  />
                </div>

                <div>
                  <Label htmlFor="role" className="text-white">What best describes your role?</Label>
                  <Select>
                    <SelectTrigger className="mt-2 bg-white/10 border-white/20 text-white">
                      <SelectValue placeholder="Select your role" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="l&d">Learning & Development</SelectItem>
                      <SelectItem value="hr">Human Resources</SelectItem>
                      <SelectItem value="manager">Team Manager</SelectItem>
                      <SelectItem value="trainer">Corporate Trainer</SelectItem>
                      <SelectItem value="educator">Educator</SelectItem>
                      <SelectItem value="student">Student</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="teamSize" className="text-white">Team Size</Label>
                  <Select>
                    <SelectTrigger className="mt-2 bg-white/10 border-white/20 text-white">
                      <SelectValue placeholder="How many people will use this?" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="just-me">Just me</SelectItem>
                      <SelectItem value="2-10">2-10 people</SelectItem>
                      <SelectItem value="11-50">11-50 people</SelectItem>
                      <SelectItem value="51-200">51-200 people</SelectItem>
                      <SelectItem value="200+">200+ people</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Button 
                  size="lg" 
                  className="w-full bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white border-0"
                  onClick={handleStartTrial}
                >
                  Start Free Trial
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </form>

              <div className="mt-6 text-center space-y-2">
                <p className="text-sm text-blue-200">
                  ✓ No payment required • ✓ Cancel anytime • ✓ Unlimited access
                </p>
                <p className="text-xs text-blue-300">
                  By registering, you agree to our Terms of Service and Privacy Policy
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Trial Benefits */}
          <div className="space-y-8">
            <Card className="bg-white/10 backdrop-blur-md border-white/20">
              <CardContent className="p-8">
                <div className="flex items-center space-x-3 mb-6">
                  <Shield className="h-8 w-8 text-green-400" />
                  <h2 className="text-2xl font-bold text-white">What's Included</h2>
                </div>
                <div className="space-y-4">
                  {trialFeatures.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0" />
                      <span className="text-blue-100">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-md border-white/20">
              <CardContent className="p-8">
                <div className="flex items-center space-x-3 mb-6">
                  <Users className="h-8 w-8 text-blue-400" />
                  <h2 className="text-2xl font-bold text-white">What Others Say</h2>
                </div>
                <div className="space-y-6">
                  {testimonials.map((testimonial, index) => (
                    <div key={index} className="border-l-4 border-blue-400 pl-4">
                      <div className="flex items-center space-x-1 mb-2">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                        ))}
                      </div>
                      <p className="text-blue-100 mb-3">"{testimonial.text}"</p>
                      <div className="text-sm">
                        <p className="text-white font-medium">{testimonial.name}</p>
                        <p className="text-blue-200">{testimonial.role} at {testimonial.company}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-md border-white/20">
              <CardContent className="p-8 text-center">
                <h3 className="text-xl font-bold text-white mb-4">Need Enterprise Features?</h3>
                <p className="text-blue-100 mb-6">
                  Custom branding, SSO, advanced analytics, and dedicated support
                </p>
                <Button variant="outline" className="border-white/20 text-white hover:bg-white/10">
                  Contact Sales
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      <PageNavigation />
    </div>
  );
};

export default FreeTrial;