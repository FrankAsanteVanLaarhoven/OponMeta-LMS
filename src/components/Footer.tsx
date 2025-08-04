import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin, Users, CreditCard, BookOpen, Briefcase, Star, Globe, Target, TrendingUp, Award, Heart, Zap, Calendar, Eye, Building, Handshake, Lightbulb } from "lucide-react";
import { useTranslation } from 'react-i18next';
import SocialMediaLinks from './SocialMediaLinks';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-[#0a1834] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <a href="/" className="flex items-center space-x-2">
                <img src="/branding/logo.png" alt="OponMeta Symbol Logo" className="h-8 w-8 mr-2 animate-swivel" />
                <span className="text-xl font-bold bg-gradient-to-r from-yellow-400 via-amber-400 to-yellow-600 bg-clip-text text-transparent">OponMeta</span>
              </a>
            </div>
            <p className="text-cyan-100 text-sm">
              Empowering Global Learning
            </p>
            <p className="text-cyan-100 text-sm">
              We are a global EdTech powerhouse pioneering the future of digital learning. We craft transformative experiences in professional development and technical education, equipping today's learners and tomorrow's leaders with cutting-edge skills and knowledge.
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-center space-x-2">
                <Globe className="h-4 w-4 text-cyan-300" />
                <a href="https://oponmeta.com" target="_blank" rel="noopener noreferrer" className="text-cyan-100 hover:text-cyan-400 transition-colors">
                  oponmeta.com
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-cyan-300" />
                <a href="mailto:info@oponmeta.com" className="text-cyan-100 hover:text-cyan-400 transition-colors">
                  info@oponmeta.com
                </a>
              </div>
            </div>
          </div>

          {/* About & Values */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white flex items-center gap-2">
              <Target className="h-5 w-5 text-cyan-400" />
              About & Values
            </h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/about#mission" className="text-cyan-100 hover:text-cyan-400 transition-colors flex items-center gap-2">
                <Target className="h-3 w-3 text-cyan-300" />
                Mission
              </a></li>
              <li><a href="/about#vision" className="text-cyan-100 hover:text-cyan-400 transition-colors flex items-center gap-2">
                <Eye className="h-3 w-3 text-cyan-300" />
                Vision
              </a></li>
              <li><a href="/about#approach" className="text-cyan-100 hover:text-cyan-400 transition-colors flex items-center gap-2">
                <Lightbulb className="h-3 w-3 text-cyan-300" />
                Our Approach
              </a></li>
              <li><a href="/about#team" className="text-cyan-100 hover:text-cyan-400 transition-colors flex items-center gap-2">
                <Users className="h-3 w-3 text-cyan-300" />
                Our Team
              </a></li>
            </ul>
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
              <li><a href="/workshops" className="text-cyan-100 hover:text-cyan-400 transition-colors flex items-center gap-2">
                <Calendar className="h-3 w-3 text-cyan-300" />
                Workshops
              </a></li>
              <li><a href="/student-portal" className="text-cyan-100 hover:text-cyan-400 transition-colors flex items-center gap-2">
                <Users className="h-3 w-3 text-cyan-300" />
                Student Portal
              </a></li>
              <li><a href="/instructor-portal" className="text-cyan-100 hover:text-cyan-400 transition-colors flex items-center gap-2">
                <Briefcase className="h-3 w-3 text-cyan-300" />
                Instructor Portal
              </a></li>
              <li><a href="/pricing" className="text-cyan-100 hover:text-cyan-400 transition-colors flex items-center gap-2">
                <CreditCard className="h-3 w-3 text-cyan-300" />
                Pricing Plans
              </a></li>
            </ul>
          </div>

          {/* Community & Support */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white flex items-center gap-2">
              <Users className="h-5 w-5 text-cyan-400" />
              Community & Support
            </h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/community" className="text-cyan-100 hover:text-cyan-400 transition-colors flex items-center gap-2">
                <Users className="h-3 w-3 text-cyan-300" />
                Community Forums
              </a></li>
              <li><a href="/alumni" className="text-cyan-100 hover:text-cyan-400 transition-colors flex items-center gap-2">
                <Award className="h-3 w-3 text-cyan-300" />
                Alumni Network
              </a></li>
              <li><a href="/events" className="text-cyan-100 hover:text-cyan-400 transition-colors flex items-center gap-2">
                <Calendar className="h-3 w-3 text-cyan-300" />
                Events & Networking
              </a></li>
              <li><a href="/contact" className="text-cyan-100 hover:text-cyan-400 transition-colors flex items-center gap-2">
                <Mail className="h-3 w-3 text-cyan-300" />
                Contact Support
              </a></li>
            </ul>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="mt-8 pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <SocialMediaLinks />
            </div>
            <div className="text-sm text-gray-400">
              © 2025 OponMeta. All rights reserved.
            </div>
          </div>
        </div>

        {/* Legal Links */}
        <div className="mt-4 pt-4 border-t border-gray-700">
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400">
            <a href="/privacy" className="hover:text-cyan-400 transition-colors">Privacy Policy</a>
            <a href="/terms" className="hover:text-cyan-400 transition-colors">Terms of Service</a>
            <a href="/cookies" className="hover:text-cyan-400 transition-colors">Cookie Policy</a>
            <a href="/accessibility" className="hover:text-cyan-400 transition-colors">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;