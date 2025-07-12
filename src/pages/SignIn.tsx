import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Mail, Lock, Eye, EyeOff, Facebook, Twitter } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleSignIn = () => {
    // Redirect to dashboard after sign in
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen bg-white text-[#0a1834] dark:bg-[#0a1834] dark:text-white">
      
      <div className="flex items-center justify-center min-h-screen px-4 py-20">
        <Card className="w-full max-w-md bg-white dark:bg-[#16203a] border-[#e5e7eb] dark:border-[#22305a] shadow-xl">
          <CardContent className="p-8">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-[#0a1834] dark:text-white mb-2">Welcome Back</h1>
              <p className="text-[#16203a] dark:text-cyan-300">Sign in to access your personalized learning experience</p>
            </div>

            <form className="space-y-6">
              <div>
                <Label htmlFor="email" className="text-[#0a1834] dark:text-white">Email Address</Label>
                <div className="relative mt-2">
                  <Mail className="absolute left-3 top-3 h-4 w-4 text-[#22305a] dark:text-cyan-300" />
                  <Input 
                    id="email"
                    type="email"
                    className="pl-10 bg-white dark:bg-[#11204a] border-[#22305a] dark:border-[#22305a] text-[#0a1834] dark:text-white placeholder-[#22305a] dark:placeholder-cyan-200"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>
              
              <div>
                <Label htmlFor="password" className="text-[#0a1834] dark:text-white">Password</Label>
                <div className="relative mt-2">
                  <Lock className="absolute left-3 top-3 h-4 w-4 text-[#22305a] dark:text-cyan-300" />
                  <Input 
                    id="password"
                    type={showPassword ? "text" : "password"}
                    className="pl-10 pr-10 bg-white dark:bg-[#11204a] border-[#22305a] dark:border-[#22305a] text-[#0a1834] dark:text-white placeholder-[#22305a] dark:placeholder-cyan-200"
                    placeholder="Enter your password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-3 text-[#22305a] dark:text-cyan-300 hover:text-[#0a1834] dark:hover:text-white"
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <label className="flex items-center space-x-2">
                  <input type="checkbox" className="rounded" />
                  <span className="text-sm text-[#16203a] dark:text-cyan-300">Remember me</span>
                </label>
                <a href="#" className="text-sm text-[#22305a] dark:text-cyan-200 hover:text-[#0a1834] dark:hover:text-white">
                  Forgot your password?
                </a>
              </div>
              
              <Button 
                size="lg" 
                className="bg-[#11204a] text-white hover:bg-[#16203a] border-2 border-[#0a1834]"
                onClick={handleSignIn}
              >
                Sign In
              </Button>
            </form>

            <div className="mt-6">
              <Separator className="bg-[#e5e7eb] dark:bg-[#22305a]" />
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-[#e5e7eb] dark:border-[#22305a]" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white dark:bg-[#16203a] text-[#16203a] dark:text-cyan-300">Or continue with</span>
                </div>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-3">
              <Button 
                variant="outline" 
                className="border-[#22305a] dark:border-[#22305a] text-[#0a1834] dark:text-white hover:bg-[#f0f4fa] dark:hover:bg-[#11204a]"
                onClick={() => {
                  // Facebook OAuth URL - replace with your actual Facebook App ID
                  const facebookAuthUrl = `https://www.facebook.com/v18.0/dialog/oauth?client_id=YOUR_FACEBOOK_APP_ID&redirect_uri=${encodeURIComponent(window.location.origin + '/auth/facebook/callback')}&scope=email,public_profile&response_type=code`;
                  window.open(facebookAuthUrl, '_blank', 'width=500,height=600');
                }}
              >
                <Facebook className="h-4 w-4 mr-2" />
                Continue with Facebook
              </Button>
              <Button 
                variant="outline" 
                className="border-[#22305a] dark:border-[#22305a] text-[#0a1834] dark:text-white hover:bg-[#f0f4fa] dark:hover:bg-[#11204a]"
                onClick={() => {
                  // Twitter OAuth URL - replace with your actual Twitter App credentials
                  const twitterAuthUrl = `https://twitter.com/i/oauth2/authorize?response_type=code&client_id=YOUR_TWITTER_CLIENT_ID&redirect_uri=${encodeURIComponent(window.location.origin + '/auth/twitter/callback')}&scope=tweet.read%20users.read%20offline.access&state=state&code_challenge=challenge&code_challenge_method=plain`;
                  window.open(twitterAuthUrl, '_blank', 'width=500,height=600');
                }}
              >
                <Twitter className="h-4 w-4 mr-2" />
                Continue with Twitter
              </Button>
            </div>

            <div className="mt-6 text-center">
              <p className="text-gray-600 text-center">
                New to our platform?{' '}
                <a href="/signup" className="text-[#0a1834] dark:text-white font-medium hover:underline">
                  Create an account
                </a>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default SignIn;