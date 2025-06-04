import Navigation from "@/components/Navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { User, Mail, Lock, Eye, EyeOff, Facebook, Twitter, CheckCircle } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PageNavigation from "@/components/PageNavigation";
import Footer from "@/components/Footer";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();

  const handleSignUp = () => {
    // Redirect to dashboard after sign up
    navigate("/dashboard");
  };

  const benefits = [
    "Access to 1000+ courses",
    "AI-powered learning paths",
    "Global certification",
    "24/7 expert support",
    "Mobile & offline access"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-400 via-blue-500 to-cyan-500">
      <Navigation />
      
      <div className="flex items-center justify-center min-h-screen px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl w-full">
          
          {/* Benefits Section */}
          <div className="hidden lg:flex flex-col justify-center">
            <div className="text-white">
              <h2 className="text-4xl font-bold mb-6">Join 50,000+ Global Learners</h2>
              <p className="text-xl text-blue-100 mb-8">
                Start your learning journey with OPONMETA and unlock your potential
              </p>
              
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-400" />
                    <span className="text-blue-100">{benefit}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 p-4 bg-white/10 rounded-lg backdrop-blur-sm">
                <p className="text-blue-100 text-sm">
                  ✓ No credit card required
                </p>
              </div>
            </div>
          </div>

          {/* Sign Up Form */}
          <Card className="bg-white/10 backdrop-blur-md border-white/20">
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <h1 className="text-3xl font-bold text-white mb-2">Create Account</h1>
                <p className="text-blue-100">Get started free - no credit card required</p>
              </div>

              <form className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName" className="text-white">First Name</Label>
                    <div className="relative mt-2">
                      <User className="absolute left-3 top-3 h-4 w-4 text-blue-300" />
                      <Input 
                        id="firstName"
                        className="pl-10 bg-white/10 border-white/20 text-white placeholder-gray-300"
                        placeholder="John"
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="lastName" className="text-white">Last Name</Label>
                    <div className="relative mt-2">
                      <User className="absolute left-3 top-3 h-4 w-4 text-blue-300" />
                      <Input 
                        id="lastName"
                        className="pl-10 bg-white/10 border-white/20 text-white placeholder-gray-300"
                        placeholder="Doe"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <Label htmlFor="email" className="text-white">Email Address</Label>
                  <div className="relative mt-2">
                    <Mail className="absolute left-3 top-3 h-4 w-4 text-blue-300" />
                    <Input 
                      id="email"
                      type="email"
                      className="pl-10 bg-white/10 border-white/20 text-white placeholder-gray-300"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="password" className="text-white">Password</Label>
                  <div className="relative mt-2">
                    <Lock className="absolute left-3 top-3 h-4 w-4 text-blue-300" />
                    <Input 
                      id="password"
                      type={showPassword ? "text" : "password"}
                      className="pl-10 pr-10 bg-white/10 border-white/20 text-white placeholder-gray-300"
                      placeholder="Create a strong password"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-3 text-blue-300 hover:text-white"
                    >
                      {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </button>
                  </div>
                </div>

                <div>
                  <Label htmlFor="confirmPassword" className="text-white">Confirm Password</Label>
                  <div className="relative mt-2">
                    <Lock className="absolute left-3 top-3 h-4 w-4 text-blue-300" />
                    <Input 
                      id="confirmPassword"
                      type={showConfirmPassword ? "text" : "password"}
                      className="pl-10 pr-10 bg-white/10 border-white/20 text-white placeholder-gray-300"
                      placeholder="Confirm your password"
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      className="absolute right-3 top-3 text-blue-300 hover:text-white"
                    >
                      {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </button>
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  <input type="checkbox" className="rounded" />
                  <span className="text-sm text-blue-100">
                    I agree to the <a href="#" className="text-white hover:underline">Terms of Service</a> and{" "}
                    <a href="#" className="text-white hover:underline">Privacy Policy</a>
                  </span>
                </div>
                
                <Button 
                  size="lg" 
                  className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white border-0"
                  onClick={handleSignUp}
                >
                  Get Started Free
                </Button>
              </form>

              <div className="mt-6">
                <Separator className="bg-white/20" />
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-white/20" />
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-transparent text-blue-100">Or continue with</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-3">
                <Button variant="outline" className="border-white/20 text-white hover:bg-white/10">
                  <Facebook className="h-4 w-4 mr-2" />
                  Facebook
                </Button>
                <Button variant="outline" className="border-white/20 text-white hover:bg-white/10">
                  <Twitter className="h-4 w-4 mr-2" />
                  Twitter
                </Button>
              </div>

              <div className="mt-6 text-center">
                <p className="text-blue-100">
                  Already have an account?{" "}
                  <a href="/signin" className="text-white font-medium hover:underline">
                    Sign in
                  </a>
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      <PageNavigation />
      <Footer />
    </div>
  );
};

export default SignUp;