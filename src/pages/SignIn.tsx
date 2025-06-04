import Navigation from "@/components/Navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Mail, Lock, Eye, EyeOff, Facebook, Twitter } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PageNavigation from "@/components/PageNavigation";
import Footer from "@/components/Footer";

const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleSignIn = () => {
    // Redirect to dashboard after sign in
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-400 via-blue-500 to-cyan-500">
      <Navigation />
      
      <div className="flex items-center justify-center min-h-screen px-4 py-20">
        <Card className="w-full max-w-md bg-white/10 backdrop-blur-md border-white/20">
          <CardContent className="p-8">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-white mb-2">Welcome Back</h1>
              <p className="text-blue-100">Sign in to continue your learning journey</p>
            </div>

            <form className="space-y-6">
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
                    placeholder="Enter your password"
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

              <div className="flex items-center justify-between">
                <label className="flex items-center space-x-2">
                  <input type="checkbox" className="rounded" />
                  <span className="text-sm text-blue-100">Remember me</span>
                </label>
                <a href="#" className="text-sm text-blue-200 hover:text-white">
                  Forgot password?
                </a>
              </div>
              
              <Button 
                size="lg" 
                className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white border-0"
                onClick={handleSignIn}
              >
                Sign In
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
                Don't have an account?{" "}
                <a href="/signup" className="text-white font-medium hover:underline">
                  Sign up
                </a>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
      <PageNavigation />
      <Footer />
    </div>
  );
};

export default SignIn;