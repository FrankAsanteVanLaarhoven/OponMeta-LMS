import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Calculator, Users, Clock, Shield, CheckCircle, Phone } from "lucide-react";

const GetQuote = () => {
  const pricingFeatures = [
    "Unlimited course access",
    "Custom branding & white-labeling", 
    "Advanced analytics & reporting",
    "API integrations",
    "Dedicated customer success manager",
    "24/7 priority support",
    "Custom training & onboarding",
    "SLA guarantees"
  ];

  const industries = [
    "Education & Training",
    "Corporate Learning", 
    "Healthcare",
    "Technology",
    "Finance & Banking",
    "Manufacturing",
    "Government",
    "Non-profit",
    "Other"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-400 via-blue-500 to-cyan-500">
      
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Request a Personalised Quote
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Share your organization's needs and we'll provide a tailored pricing plan to fit your goals and budget
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Quote Form */}
          <Card className="bg-white/10 backdrop-blur-md border-white/20">
            <CardContent className="p-8">
              <div className="flex items-center space-x-3 mb-6">
                <Calculator className="h-8 w-8 text-blue-400" />
                <h2 className="text-2xl font-bold text-white">Request Custom Pricing</h2>
              </div>
              
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
                  <Label htmlFor="phone" className="text-white">Phone Number</Label>
                  <Input 
                    id="phone"
                    type="tel"
                    className="mt-2 bg-white/10 border-white/20 text-white placeholder-gray-300"
                    placeholder="+1 (555) 123-4567"
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
                  <Label htmlFor="industry" className="text-white">Industry</Label>
                  <Select>
                    <SelectTrigger className="mt-2 bg-white/10 border-white/20 text-white">
                      <SelectValue placeholder="Select your industry" />
                    </SelectTrigger>
                    <SelectContent>
                      {industries.map((industry, index) => (
                        <SelectItem key={index} value={industry.toLowerCase().replace(/\s+/g, '-')}>
                          {industry}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="userCount" className="text-white">Number of Users *</Label>
                  <Select>
                    <SelectTrigger className="mt-2 bg-white/10 border-white/20 text-white">
                      <SelectValue placeholder="Select user count" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1-50">1-50 users</SelectItem>
                      <SelectItem value="51-200">51-200 users</SelectItem>
                      <SelectItem value="201-500">201-500 users</SelectItem>
                      <SelectItem value="501-1000">501-1000 users</SelectItem>
                      <SelectItem value="1000+">1000+ users</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label className="text-white mb-4 block">Required Features</Label>
                  <div className="space-y-3">
                    {["Custom Branding", "API Integration", "SSO/SAML", "Advanced Analytics", "Mobile App", "Offline Access"].map((feature, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <Checkbox id={`feature-${index}`} />
                        <Label htmlFor={`feature-${index}`} className="text-blue-100">{feature}</Label>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <Label htmlFor="timeline" className="text-white">Implementation Timeline</Label>
                  <Select>
                    <SelectTrigger className="mt-2 bg-white/10 border-white/20 text-white">
                      <SelectValue placeholder="When do you need this?" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="immediate">Immediately</SelectItem>
                      <SelectItem value="1-month">Within 1 month</SelectItem>
                      <SelectItem value="3-months">Within 3 months</SelectItem>
                      <SelectItem value="6-months">Within 6 months</SelectItem>
                      <SelectItem value="flexible">Flexible timeline</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="requirements" className="text-white">Additional Requirements</Label>
                  <Textarea 
                    id="requirements"
                    className="mt-2 bg-white/10 border-white/20 text-white placeholder-gray-300 min-h-[100px]"
                    placeholder="Tell us about any specific requirements, integrations, or customizations you need..."
                  />
                </div>

                <Button size="lg" className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white border-0">
                  Request My Quote
                </Button>
              </form>

              <p className="text-xs text-blue-200 mt-4 text-center">
                Our team will reach out within 24 hours with your tailored quote.
              </p>
            </CardContent>
          </Card>

          {/* Quote Benefits */}
          <div className="space-y-8">
            <Card className="bg-white/10 backdrop-blur-md border-white/20">
              <CardContent className="p-8">
                <div className="flex items-center space-x-3 mb-6">
                  <Users className="h-8 w-8 text-green-400" />
                  <h2 className="text-2xl font-bold text-white">Enterprise Features</h2>
                </div>
                <div className="space-y-4">
                  {pricingFeatures.map((feature, index) => (
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
                  <Clock className="h-8 w-8 text-blue-400" />
                  <h2 className="text-2xl font-bold text-white">What Happens Next?</h2>
                </div>
                <div className="space-y-4 text-blue-100">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-bold">1</div>
                    <div>
                      <p className="font-medium">We'll review your requirements</p>
                      <p className="text-sm text-blue-200">Our team analyzes your needs within 4 hours</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-bold">2</div>
                    <div>
                      <p className="font-medium">Custom proposal created</p>
                      <p className="text-sm text-blue-200">Tailored pricing and implementation plan</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-bold">3</div>
                    <div>
                      <p className="font-medium">Proposal discussion</p>
                      <p className="text-sm text-blue-200">30-minute call to review and refine</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-r from-green-600/20 to-blue-600/20 backdrop-blur-md border-white/20">
              <CardContent className="p-8 text-center">
                <Shield className="h-12 w-12 text-green-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-4">Need Help Faster?</h3>
                <p className="text-blue-100 mb-6">
                  Speak directly with our sales team for immediate assistance
                </p>
                <Button className="bg-white text-purple-900 hover:bg-gray-100">
                  <Phone className="h-4 w-4 mr-2" />
                  Call Sales Now
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetQuote;