import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-white text-[#0a1834] dark:bg-[#0a1834] dark:text-white">
      
      <div className="flex items-center justify-center min-h-screen px-4 py-20">
        <div className="text-center max-w-2xl">
          <div className="text-8xl font-bold text-[#e5e7eb] dark:text-white/20 mb-8">404</div>
          <h1 className="text-4xl lg:text-5xl font-bold text-[#0a1834] dark:text-white mb-6">
            Sorry, We Couldn't Find That Page
          </h1>
          <p className="text-xl text-[#16203a] dark:text-cyan-300 mb-8">
            The page you requested could not be found or may have been moved.
            <br />
            <span className="text-sm opacity-75 text-[#22305a] dark:text-cyan-200">Attempted route: {location.pathname}</span>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-cyan-600 text-white hover:bg-cyan-700"
              onClick={() => navigate("/")}
            >
              <Home className="h-4 w-4 mr-2" />
              Return to Home
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-[#22305a] dark:border-[#22305a] text-[#0a1834] dark:text-white hover:bg-[#f0f4fa] dark:hover:bg-[#11204a]"
              onClick={() => navigate(-1)}
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Previous Page
            </Button>
          </div>
          
          <div className="mt-12 p-6 bg-[#f0f4fa] dark:bg-[#11204a] rounded-lg border border-[#e5e7eb] dark:border-[#22305a]">
            <h3 className="text-lg font-semibold text-[#0a1834] dark:text-white mb-4">Popular Pages</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
              <button 
                onClick={() => navigate("/courses")}
                className="text-[#22305a] dark:text-cyan-200 hover:text-[#0a1834] dark:hover:text-white transition-colors"
              >
                Explore Courses
              </button>
              <button 
                onClick={() => navigate("/about")}
                className="text-[#22305a] dark:text-cyan-200 hover:text-[#0a1834] dark:hover:text-white transition-colors"
              >
                Learn About Us
              </button>
              <button 
                onClick={() => navigate("/contact")}
                className="text-[#22305a] dark:text-cyan-200 hover:text-[#0a1834] dark:hover:text-white transition-colors"
              >
                Contact Support
              </button>
              <button 
                onClick={() => navigate("/signin")}
                className="text-[#22305a] dark:text-cyan-200 hover:text-[#0a1834] dark:hover:text-white transition-colors"
              >
                Sign In / Register
              </button>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default NotFound;
