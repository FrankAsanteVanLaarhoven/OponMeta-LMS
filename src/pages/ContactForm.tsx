import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Phone, Mail, MessageCircle } from "lucide-react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    countryCode: "+91",
    phoneNumber: "",
    whatsappNumber: ""
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-pink-800 to-orange-600 flex items-center justify-center p-4">
      {/* Background Circles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-yellow-400 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-orange-400 rounded-full opacity-15 blur-3xl"></div>
      </div>

      <div className="relative max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="text-white space-y-6">
          <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
            Bring Your Vision to
            <span className="bg-gradient-to-r from-pink-400 to-orange-400 bg-clip-text text-transparent">
              Life
            </span>
          </h1>
          
          <p className="text-xl text-gray-200 leading-relaxed">
            Share your idea and our team will connect with you to discuss your goals and provide a personalized estimate.
          </p>

          {/* Customer Service Image */}
          <div className="flex items-center space-x-4 mt-8">
            <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-orange-500 rounded-full flex items-center justify-center">
              <Phone className="h-8 w-8 text-white" />
            </div>
            <div>
              <p className="text-lg font-semibold">24/7 Customer Support</p>
              <p className="text-gray-300">Here to help you succeed, wherever you are</p>
            </div>
          </div>
        </div>

        {/* Right Form */}
        <div className="relative">
          {/* Navigation Dots */}
          <div className="absolute -top-6 right-0 flex space-x-2">
            <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
              1
            </div>
            <div className="w-8 h-8 bg-gray-400 rounded-full flex items-center justify-center text-white text-sm">
              2
            </div>
          </div>

          {/* Tab Headers */}
          <div className="flex mb-6">
            <button className="flex-1 py-3 px-4 bg-red-500 text-white font-medium rounded-tl-lg">
              Contact Information
            </button>
            <button className="flex-1 py-3 px-4 bg-pink-500 text-white font-medium rounded-tr-lg">
              Add-Ons Information
            </button>
          </div>

          <Card className="bg-white/10 backdrop-blur-md border-white/20 shadow-2xl">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Full Name */}
                <div>
                  <Input
                    placeholder="Your Full Name"
                    value={formData.fullName}
                    onChange={(e) => handleInputChange("fullName", e.target.value)}
                    className="h-14 bg-white/90 border-0 placeholder-gray-500 text-gray-900 text-lg rounded-lg"
                  />
                </div>

                {/* Email Address */}
                <div>
                  <Input
                    type="email"
                    placeholder="Your Email Address"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    className="h-14 bg-white/90 border-0 placeholder-gray-500 text-gray-900 text-lg rounded-lg"
                  />
                </div>

                {/* Phone Number with Country Code */}
                <div className="flex space-x-3">
                  <div className="flex items-center bg-white/90 rounded-lg px-3 min-w-[100px]">
                    <img 
                      src="https://flagcdn.com/w20/in.png" 
                      alt="India" 
                      className="w-5 h-4 mr-2"
                    />
                    <Select value={formData.countryCode} onValueChange={(value) => handleInputChange("countryCode", value)}>
                      <SelectTrigger className="border-0 bg-transparent text-gray-900">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="+91">+91</SelectItem>
                        <SelectItem value="+1">+1</SelectItem>
                        <SelectItem value="+44">+44</SelectItem>
                        <SelectItem value="+234">+234</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <Input
                    placeholder="Your Phone Number"
                    value={formData.phoneNumber}
                    onChange={(e) => handleInputChange("phoneNumber", e.target.value)}
                    className="h-14 bg-white/90 border-0 placeholder-gray-500 text-gray-900 text-lg rounded-lg flex-1"
                  />
                </div>

                {/* WhatsApp Number */}
                <div className="flex space-x-3">
                  <div className="flex items-center bg-white/90 rounded-lg px-3 min-w-[80px] justify-center">
                    <MessageCircle className="h-6 w-6 text-green-500" />
                  </div>
                  <Input
                    placeholder="Your WhatsApp Number (optional)"
                    value={formData.whatsappNumber}
                    onChange={(e) => handleInputChange("whatsappNumber", e.target.value)}
                    className="h-14 bg-white/90 border-0 placeholder-gray-500 text-gray-900 text-lg rounded-lg flex-1"
                  />
                </div>

                {/* Submit Button */}
                <Button 
                  type="submit"
                  className="w-full h-14 bg-gradient-to-r from-pink-500 to-orange-500 hover:from-pink-600 hover:to-orange-600 text-white font-bold text-lg rounded-lg shadow-lg transform transition-all duration-200 hover:scale-105"
                >
                  Get My Personalized Add-Ons
                </Button>

                {/* Privacy Notice */}
                <p className="text-center text-sm text-gray-300">
                  Your data is kept confidential and your <span className="text-blue-300 underline cursor-pointer">privacy</span> is our highest priority.
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="absolute bottom-0 left-0 right-0 bg-black/20 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-4 py-8">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Follow Us */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Follow Us for the
                <span className="bg-gradient-to-r from-pink-400 to-orange-400 bg-clip-text text-transparent">
                  Latest Updates
                </span>
              </h3>
              <div className="flex space-x-4">
                <a
                  href="https://facebook.com/oponmeta"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                  aria-label="Facebook"
                >
                  F
                </a>
                <a
                  href="https://twitter.com/oponmeta"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                  aria-label="Twitter"
                >
                  T
                </a>
                <a
                  href="https://youtube.com/@oponmeta"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                  aria-label="YouTube"
                >
                  Y
                </a>
                <a
                  href="https://instagram.com/oponmeta"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                  aria-label="Instagram"
                >
                  I
                </a>
                <a
                  href="https://linkedin.com/company/oponmeta"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                  aria-label="LinkedIn"
                >
                  L
                </a>
                <a
                  href="https://behance.net/oponmeta"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                  aria-label="Behance"
                >
                  B
                </a>
              </div>
            </div>

            {/* Connect With Us */}
            <div className="text-right">
              <h3 className="text-2xl font-bold text-white mb-4">
                Connect
                <span className="bg-gradient-to-r from-pink-400 to-orange-400 bg-clip-text text-transparent">
                  With Us
                </span>
              </h3>
              <div className="space-y-2 text-white">
                <div className="flex items-center justify-end space-x-2">
                  <span>+ 91 8925923818</span>
                  <Phone className="h-4 w-4" />
                </div>
                <div className="flex items-center justify-end space-x-2">
                  <span>+ 91 8925923818</span>
                  <MessageCircle className="h-4 w-4" />
                </div>
                <div className="flex items-center justify-end space-x-2">
                  <span>Osiz_Technology</span>
                  <span>📧</span>
                </div>
                <div className="flex items-center justify-end space-x-2">
                  <span>salesteam@osiztechnologies.com</span>
                  <Mail className="h-4 w-4" />
                </div>
                <div className="flex items-center justify-end space-x-2">
                  <span className="text-pink-400">Job/Careers : hr@osiztechnologies.com</span>
                  <span>💼</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* AI Chat Widget */}
      <div className="fixed bottom-6 right-6">
        <div className="bg-blue-600 text-white px-6 py-3 rounded-full shadow-lg">
          <p className="text-sm">
            Hi! I'm your AI assistant. How can I help you today?
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;