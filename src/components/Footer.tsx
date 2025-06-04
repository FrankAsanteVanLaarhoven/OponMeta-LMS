import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <img 
                src="/oponmeta-uploads/792e4b6a-d1ef-4fa3-a582-17350a146c08.png" 
                alt="OPONMETA Logo" 
                className="h-10 w-10"
              />
              <div className="flex flex-col">
                <span className="text-lg font-bold bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-600 bg-clip-text text-transparent">OPONMETA</span>
                <span className="text-xs text-blue-200">GLOBAL LEARNING</span>
              </div>
            </div>
            <p className="text-blue-100 text-sm">
              Empowering global learning through innovative AI-powered education technology and comprehensive training solutions.
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-blue-300" />
                <span className="text-blue-100">Global Headquarters</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-blue-300" />
                <span className="text-blue-100">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-blue-300" />
                <span className="text-blue-100">info@oponmeta.com</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Our Services</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/courses" className="text-blue-100 hover:text-white transition-colors">Online Courses</a></li>
              <li><a href="/virtual-classroom" className="text-blue-100 hover:text-white transition-colors">Virtual Classroom</a></li>
              <li><a href="/meet-ai" className="text-blue-100 hover:text-white transition-colors">AI Learning Assistant</a></li>
              <li><a href="/authoring-tool" className="text-blue-100 hover:text-white transition-colors">Content Authoring</a></li>
              <li><a href="/quiz-builder" className="text-blue-100 hover:text-white transition-colors">Quiz Builder</a></li>
              <li><a href="/course-library" className="text-blue-100 hover:text-white transition-colors">Course Library</a></li>
              <li><a href="/vendors" className="text-blue-100 hover:text-white transition-colors">Vendor Partners</a></li>
              <li><a href="/become-instructor" className="text-blue-100 hover:text-white transition-colors">Become Instructor</a></li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Company</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/about" className="text-blue-100 hover:text-white transition-colors">About Us</a></li>
              <li><a href="/case-studies" className="text-blue-100 hover:text-white transition-colors">Case Studies</a></li>
              <li><a href="/features" className="text-blue-100 hover:text-white transition-colors">Features</a></li>
              <li><a href="/get-demo" className="text-blue-100 hover:text-white transition-colors">Get Demo</a></li>
              <li><a href="/get-quote" className="text-blue-100 hover:text-white transition-colors">Get Quote</a></li>
              <li><a href="/free-trial" className="text-blue-100 hover:text-white transition-colors">Free Trial</a></li>
              <li><a href="/contact" className="text-blue-100 hover:text-white transition-colors">Contact Us</a></li>
              <li><a href="/start-learning" className="text-blue-100 hover:text-white transition-colors">Start Learning</a></li>
            </ul>
          </div>

          {/* Legal & Support */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Legal & Support</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/privacy-policy" className="text-blue-100 hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="/terms-of-service" className="text-blue-100 hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="/cookie-policy" className="text-blue-100 hover:text-white transition-colors">Cookie Policy</a></li>
              <li><a href="/refund-policy" className="text-blue-100 hover:text-white transition-colors">Refund Policy</a></li>
              <li><a href="/support" className="text-blue-100 hover:text-white transition-colors">Support Center</a></li>
              <li><a href="/help" className="text-blue-100 hover:text-white transition-colors">Help & FAQ</a></li>
              <li><a href="/accessibility" className="text-blue-100 hover:text-white transition-colors">Accessibility</a></li>
              <li><a href="/security" className="text-blue-100 hover:text-white transition-colors">Security</a></li>
            </ul>
          </div>
        </div>

        {/* Social Media & Newsletter */}
        <div className="mt-12 pt-8 border-t border-white/20">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            
            {/* Social Media */}
            <div className="flex items-center space-x-4">
              <span className="text-sm text-blue-100">Follow us:</span>
              <div className="flex space-x-3">
                <a href="#" className="text-blue-300 hover:text-white transition-colors">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="#" className="text-blue-300 hover:text-white transition-colors">
                  <Twitter className="h-5 w-5" />
                </a>
                <a href="#" className="text-blue-300 hover:text-white transition-colors">
                  <Linkedin className="h-5 w-5" />
                </a>
                <a href="#" className="text-blue-300 hover:text-white transition-colors">
                  <Instagram className="h-5 w-5" />
                </a>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="flex items-center space-x-2">
              <input 
                type="email" 
                placeholder="Subscribe to our newsletter"
                className="px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                id="newsletter-email"
              />
              <button 
                className="px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white rounded-lg text-sm transition-all"
                onClick={() => {
                  const email = document.getElementById('newsletter-email') as HTMLInputElement;
                  if (email.value) {
                    alert('Thank you for subscribing! We\'ll keep you updated with the latest courses and features.');
                    email.value = '';
                  }
                }}
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Copyright & Design Credit */}
        <div className="mt-8 pt-6 border-t border-white/20">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
            <div className="text-sm text-blue-100">
              © {new Date().getFullYear()} OPONMETA Global Learning. All rights reserved.
            </div>
            <div className="flex items-center space-x-4 text-sm text-blue-100">
              <span>Design by</span>
              <span className="font-semibold bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                FAVL
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;