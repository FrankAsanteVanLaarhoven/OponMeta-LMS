import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin, Users, CreditCard, BookOpen, Briefcase, Star, Globe, Target, TrendingUp, Award, Heart, Zap, Calendar } from "lucide-react";
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-[#0a1834] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <a href="/">
                <img 
                  src="/logo.png" 
                  alt="OponMeta Logo" 
                  className="h-10 w-10 animate-swivel"
                />
              </a>
              <div className="flex flex-col">
                <span className="text-lg font-bold text-white">OPONMETA</span>
                <span className="text-xs text-cyan-300">Global Learning Platform</span>
              </div>
            </div>
            <p className="text-cyan-100 text-sm">
              Advancing education worldwide with innovative, AI-powered learning and training solutions for everyone.
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-center space-x-2">
                <Globe className="h-4 w-4 text-cyan-300" />
                <a href="https://example.com" target="_blank" rel="noopener noreferrer" className="text-cyan-100 hover:text-cyan-400 transition-colors">
                  example.com
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-cyan-300" />
                <span className="text-cyan-100">Global Headquarters</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-cyan-300" />
                <span className="text-cyan-100">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-cyan-300" />
                <span className="text-cyan-100">+2348055254643</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-cyan-300" />
                <a href="mailto:contact@example.com" className="text-cyan-100 hover:text-cyan-400 transition-colors">
                  contact@example.com
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-cyan-300" />
                <a href="mailto:support@example.com" className="text-cyan-100 hover:text-cyan-400 transition-colors">
                  support@example.com
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-cyan-300" />
                <a href="mailto:partnerships@example.com" className="text-cyan-100 hover:text-cyan-400 transition-colors">
                  partnerships@example.com
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-cyan-300" />
                <a href="mailto:careers@example.com" className="text-cyan-100 hover:text-cyan-400 transition-colors">
                  careers@example.com
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-cyan-300" />
                <a href="mailto:admin@example.com" className="text-cyan-100 hover:text-cyan-400 transition-colors">
                  admin@example.com
                </a>
              </div>
            </div>
          </div>

          {/* Learning & Platform */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white flex items-center gap-2">
              <BookOpen className="h-5 w-5 text-cyan-400" />
              Learning & Platform
            </h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/courses" className="text-cyan-100 hover:text-cyan-400 transition-colors flex items-center gap-2">
                <BookOpen className="h-3 w-3 text-cyan-300" />
                Browse Courses
              </a></li>
              <li><a href="/student-portal" className="text-cyan-100 hover:text-cyan-400 transition-colors flex items-center gap-2">
                <Users className="h-3 w-3 text-cyan-300" />
                Student Portal
              </a></li>
              <li><a href="/one-to-one-booking" className="text-cyan-100 hover:text-cyan-400 transition-colors flex items-center gap-2">
                <Calendar className="h-3 w-3 text-cyan-300" />
                1:1 Booking
              </a></li>
              <li><a href="/companion-subscribe" className="text-cyan-100 hover:text-cyan-400 transition-colors flex items-center gap-2">
                <CreditCard className="h-3 w-3 text-cyan-300" />
                Subscription Management
              </a></li>
              <li><a href="/companion" className="text-cyan-100 hover:text-cyan-400 transition-colors flex items-center gap-2">
                <Star className="h-3 w-3 text-cyan-300" />
                AI Learning Companion
              </a></li>
              <li><a href="/virtual-classroom" className="text-cyan-100 hover:text-cyan-400 transition-colors flex items-center gap-2">
                <Globe className="h-3 w-3 text-cyan-300" />
                Virtual Classrooms
              </a></li>
              <li><a href="/course-library" className="text-cyan-100 hover:text-cyan-400 transition-colors flex items-center gap-2">
                <BookOpen className="h-3 w-3 text-cyan-300" />
                Course Library
              </a></li>
              <li><a href="/quiz-builder" className="text-cyan-100 hover:text-cyan-400 transition-colors flex items-center gap-2">
                <Target className="h-3 w-3 text-cyan-300" />
                Quiz Builder
              </a></li>
              <li><a href="/authoring-tool" className="text-cyan-100 hover:text-cyan-400 transition-colors flex items-center gap-2">
                <Zap className="h-3 w-3 text-cyan-300" />
                Authoring Tool
              </a></li>
            </ul>
          </div>

          {/* Business & Partners */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white flex items-center gap-2">
              <Briefcase className="h-5 w-5 text-green-400" />
              Business & Partners
            </h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/vendors" className="text-cyan-100 hover:text-cyan-400 transition-colors flex items-center gap-2">
                <TrendingUp className="h-3 w-3 text-cyan-300" />
                Vendor Partners
              </a></li>
              <li><a href="/vendor-portal" className="text-cyan-100 hover:text-cyan-400 transition-colors flex items-center gap-2">
                <Briefcase className="h-3 w-3 text-cyan-300" />
                Vendor Portal
              </a></li>
              <li><a href="/advertiser-portal" className="text-cyan-100 hover:text-cyan-400 transition-colors flex items-center gap-2">
                <Award className="h-3 w-3 text-cyan-300" />
                Advertiser Portal
              </a></li>
              <li><a href="/become-instructor" className="text-cyan-100 hover:text-cyan-400 transition-colors flex items-center gap-2">
                <Users className="h-3 w-3 text-cyan-300" />
                Become Instructor
              </a></li>
              <li><a href="/create-course" className="text-cyan-100 hover:text-cyan-400 transition-colors flex items-center gap-2">
                <BookOpen className="h-3 w-3 text-cyan-300" />
                Create Course
              </a></li>
              <li><a href="/dashboard" className="text-cyan-100 hover:text-cyan-400 transition-colors flex items-center gap-2">
                <Star className="h-3 w-3 text-cyan-300" />
                Dashboard
              </a></li>
              <li><a href="/get-demo" className="text-cyan-100 hover:text-cyan-400 transition-colors flex items-center gap-2">
                <Heart className="h-3 w-3 text-cyan-300" />
                Request Demo
              </a></li>
              <li><a href="/get-quote" className="text-cyan-100 hover:text-cyan-400 transition-colors flex items-center gap-2">
                <Target className="h-3 w-3 text-cyan-300" />
                Get Quote
              </a></li>
            </ul>
          </div>

          {/* Support & Resources */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white flex items-center gap-2">
              <Heart className="h-5 w-5 text-pink-400" />
              Support & Resources
            </h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/about" className="text-cyan-100 hover:text-cyan-400 transition-colors flex items-center gap-2">
                <Star className="h-3 w-3 text-cyan-300" />
                About OponMeta
              </a></li>
              <li><a href="/features" className="text-cyan-100 hover:text-cyan-400 transition-colors flex items-center gap-2">
                <Zap className="h-3 w-3 text-cyan-300" />
                Platform Features
              </a></li>
              <li><a href="/case-studies" className="text-cyan-100 hover:text-cyan-400 transition-colors flex items-center gap-2">
                <Award className="h-3 w-3 text-cyan-300" />
                Case Studies
              </a></li>
              <li><a href="/career-guidance" className="text-cyan-100 hover:text-cyan-400 transition-colors flex items-center gap-2">
                <Target className="h-3 w-3 text-cyan-300" />
                Career Guidance
              </a></li>
              <li><a href="/start-learning" className="text-cyan-100 hover:text-cyan-400 transition-colors flex items-center gap-2">
                <BookOpen className="h-3 w-3 text-cyan-300" />
                Start Learning
              </a></li>
              <li><a href="/contact" className="text-cyan-100 hover:text-cyan-400 transition-colors flex items-center gap-2">
                <Mail className="h-3 w-3 text-cyan-300" />
                Contact Support
              </a></li>
              <li><a href="/help-center" className="text-cyan-100 hover:text-cyan-400 transition-colors flex items-center gap-2">
                <Heart className="h-3 w-3 text-cyan-300" />
                Help Center
              </a></li>
              <li><a href="/faq" className="text-cyan-100 hover:text-cyan-400 transition-colors flex items-center gap-2">
                <Target className="h-3 w-3 text-cyan-300" />
                FAQ
              </a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-4">
              <span className="text-sm text-cyan-100">© 2024 OponMeta. All rights reserved.</span>
              <a href="/privacy" className="text-sm text-cyan-100 hover:text-cyan-400 transition-colors">Privacy Policy</a>
              <a href="/terms" className="text-sm text-cyan-100 hover:text-cyan-400 transition-colors">Terms of Service</a>
            </div>
            
            <div className="flex items-center space-x-4">
              <span className="text-sm text-cyan-100">Follow us:</span>
              <a href="#" className="text-cyan-100 hover:text-cyan-400 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-cyan-100 hover:text-cyan-400 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-cyan-100 hover:text-cyan-400 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-cyan-100 hover:text-cyan-400 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;