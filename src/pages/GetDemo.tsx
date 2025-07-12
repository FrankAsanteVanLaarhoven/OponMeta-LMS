import Navigation from "@/components/Navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar, Clock, Users, Video, CheckCircle, ArrowRight } from "lucide-react";
import PageNavigation from "@/components/PageNavigation";

const GetDemo = () => {
  const demoFeatures = [
    "Live platform walkthrough",
    "AI-powered learning demonstration", 
    "Custom course creation tools",
    "Analytics and reporting dashboard",
    "Integration capabilities",
    "Q&A session with our experts"
  ];

  const timeSlots = [
    "9:00 AM - 10:00 AM",
    "11:00 AM - 12:00 PM", 
    "2:00 PM - 3:00 PM",
    "4:00 PM - 5:00 PM"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-400 via-blue-500 to-cyan-500">
      {/* Removed <Navigation /> to prevent double navbar */}
      
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Book Your Personalized Demo
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Experience OPONMETA in action with a demonstration tailored to your organization's unique needs
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Demo Info */}
          <div className="space-y-8">
            <Card className="bg-[#0a1834] border-4 border-[#11204a]">
              <CardContent className="p-8">
                <div className="flex items-center space-x-3 mb-6">
                  <Video className="h-8 w-8 text-cyan-300" />
                  <h2 className="text-2xl font-bold text-white">What You'll See</h2>
                </div>
                <div className="space-y-4">
                  {demoFeatures.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0" />
                      <span className="text-blue-100">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-[#0a1834] border-4 border-[#11204a]">
              <CardContent className="p-8">
                <div className="flex items-center space-x-3 mb-6">
                  <Clock className="h-8 w-8 text-purple-400" />
                  <h2 className="text-2xl font-bold text-white">Demo Details</h2>
                </div>
                <div className="space-y-4 text-blue-100">
                  <div className="flex items-center space-x-3">
                    <Calendar className="h-5 w-5 text-blue-400" />
                    <span>Duration: 30-45 minutes</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Video className="h-5 w-5 text-cyan-300" />
                    <span>Platform: Zoom/Teams/Google Meet</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Users className="h-5 w-5 text-blue-400" />
                    <span>Personalized to your use case</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-md border-white/20">
              <CardContent className="p-8 text-center">
                <h3 className="text-xl font-bold text-white mb-4">Ready to Get Started?</h3>
                <p className="text-blue-100 mb-6">
                  Discover why organizations worldwide trust our platform for their learning needs
                </p>
                <Button className="bg-white text-purple-900 hover:bg-gray-100">
                  <ArrowRight className="h-4 w-4 mr-2" />
                  Try Free for 14 Days
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Demo Booking Form */}
          <Card className="bg-white/10 backdrop-blur-md border-white/20">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-white mb-6">Book Your Demo</h2>
              
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName" className="text-white">First Name *</Label>
                    <Input 
                      id="firstName"
                      className="mt-2 bg-white/10 border-white/20 text-white placeholder-gray-300"
                      placeholder="John"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName" className="text-white">Last Name *</Label>
                    <Input 
                      id="lastName"
                      className="mt-2 bg-white/10 border-white/20 text-white placeholder-gray-300"
                      placeholder="Doe"
                      required
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="email" className="text-white">Work Email *</Label>
                  <Input 
                    id="email"
                    type="email"
                    className="mt-2 bg-white/10 border-white/20 text-white placeholder-gray-300"
                    placeholder="john@company.com"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="company" className="text-white">Company *</Label>
                  <Input 
                    id="company"
                    className="mt-2 bg-white/10 border-white/20 text-white placeholder-gray-300"
                    placeholder="Your Company Name"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="role" className="text-white">Job Title</Label>
                  <Input 
                    id="role"
                    className="mt-2 bg-white/10 border-white/20 text-white placeholder-gray-300"
                    placeholder="e.g., Learning & Development Manager"
                  />
                </div>

                <div>
                  <Label htmlFor="companySize" className="text-white">Company Size</Label>
                  <Select>
                    <SelectTrigger className="mt-2 bg-white/10 border-white/20 text-white">
                      <SelectValue placeholder="Select company size" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1-10">1-10 employees</SelectItem>
                      <SelectItem value="11-50">11-50 employees</SelectItem>
                      <SelectItem value="51-200">51-200 employees</SelectItem>
                      <SelectItem value="201-1000">201-1000 employees</SelectItem>
                      <SelectItem value="1000+">1000+ employees</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="preferredTime" className="text-white">Preferred Time Slot</Label>
                  <Select>
                    <SelectTrigger className="mt-2 bg-white/10 border-white/20 text-white">
                      <SelectValue placeholder="Select preferred time" />
                    </SelectTrigger>
                    <SelectContent>
                      {timeSlots.map((slot, index) => (
                        <SelectItem key={index} value={slot}>{slot}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="message" className="text-white">Tell us about your learning goals</Label>
                  <Textarea 
                    id="message"
                    className="mt-2 bg-white/10 border-white/20 text-white placeholder-gray-300 min-h-[100px]"
                    placeholder="What are you hoping to achieve with our platform?"
                  />
                </div>

                <Button size="lg" className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white border-0">
                  Book My Demo
                </Button>
              </form>

              <p className="text-xs text-blue-200 mt-4 text-center">
                By submitting this form, you agree to our Privacy Policy and Terms of Service.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
      <PageNavigation />
    </div>
  );
};

export default GetDemo;