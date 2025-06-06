import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { useLocation } from "react-router-dom";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <nav className="relative z-50 bg-white/10 backdrop-blur-md border-b border-white/20"  style={{background: "linear-gradient(to bottom right, rgb(29 78 216), rgb(30 64 175), rgb(67 56 202))"}}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img 
              src="/lovable-uploads/68565b99-d611-46e4-af99-07eeb06cb8cb.png"
              alt="OPONMETA Logo" 
              className="h-12 w-12 animate-spin-3d"
              style={{
                animation: 'spin3d 4s linear infinite',
                transformStyle: 'preserve-3d'
              }}
            />
            <div className="flex flex-col">
              <span className="text-xl font-bold bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-600 bg-clip-text text-transparent">OPONMETA</span>
              <span className="text-xs text-blue-200">GLOBAL LEARNING</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="/" className="text-white hover:text-blue-200 transition-colors">
              Home
            </a>
            <a href="/courses" className="text-white hover:text-blue-200 transition-colors">
              Courses
            </a>
            <a href="/vendors" className="text-white hover:text-blue-200 transition-colors">
              Vendors
            </a>
            <a href="/features" className="text-white hover:text-blue-200 transition-colors">
              Features
            </a>
            <a href="/meet-ai" className="text-white hover:text-blue-200 transition-colors">
              Meet AI
            </a>
            <a href="/about" className="text-white hover:text-blue-200 transition-colors">
              About
            </a>
            <a href="/contact" className="text-white hover:text-blue-200 transition-colors">
              Contact
            </a>
            <a href="/dashboard" className="text-white hover:text-blue-200 transition-colors">
              Dashboard
            </a>
            <a href="/student-portal" className="text-white hover:text-blue-200 transition-colors">
              Student Portal
            </a>
            <a href="/vendor-portal" className="text-white hover:text-blue-200 transition-colors">
              Vendor Portal
            </a>
          </div>

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" className="text-white hover:bg-white/10" onClick={() => window.location.href = '/signin'}>
              Sign In
            </Button>
            <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white border-0" onClick={() => window.location.href = '/signup'}>
              Sign Up
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-blue-200"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white/10 backdrop-blur-md rounded-lg mt-2">
              <a
                href="/"
                className="block px-3 py-2 text-white hover:text-blue-200 transition-colors"
              >
                Home
              </a>
              <a
                href="/courses"
                className="block px-3 py-2 text-white hover:text-blue-200 transition-colors"
              >
                Courses
              </a>
              <a
                href="/vendors"
                className="block px-3 py-2 text-white hover:text-blue-200 transition-colors"
              >
                Vendors
              </a>
              <a
                href="/features"
                className="block px-3 py-2 text-white hover:text-blue-200 transition-colors"
              >
                Features
              </a>
              <a
                href="/meet-ai"
                className="block px-3 py-2 text-white hover:text-blue-200 transition-colors"
              >
                Meet AI
              </a>
              <a
                href="/about"
                className="block px-3 py-2 text-white hover:text-blue-200 transition-colors"
              >
                About
              </a>
              <a
                href="/contact"
                className="block px-3 py-2 text-white hover:text-blue-200 transition-colors"
              >
                Contact
              </a>
              <a
                href="/dashboard"
                className="block px-3 py-2 text-white hover:text-blue-200 transition-colors"
              >
                Dashboard
              </a>
              <a
                href="/student-portal"
                className="block px-3 py-2 text-white hover:text-blue-200 transition-colors"
              >
                Student Portal
              </a>
              <a
                href="/vendor-portal"
                className="block px-3 py-2 text-white hover:text-blue-200 transition-colors"
              >
                Vendor Portal
              </a>
              <div className="pt-4 space-y-2">
                <Button variant="ghost" className="w-full text-white hover:bg-white/10">
                  Sign In
                </Button>
                <Button className="w-full bg-white text-purple-900 hover:bg-gray-100">
                  Sign Up
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;