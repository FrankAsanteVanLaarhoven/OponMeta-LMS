import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, BarChart3, Heart, CloudSun, Zap, Briefcase, Globe, Target, Music, Sparkles, Award, Wrench, Users, Truck, DollarSign, Laptop, UserCog, User, Megaphone } from 'lucide-react';
import CourseCard from '@/components/CourseCard';
import { coursesData } from '@/data/coursesData';

const COURSE_CATEGORIES = [
  { icon: <BookOpen className="w-6 h-6 text-blue-500" />, name: 'Technology and Digital Skills', slug: 'technology-and-digital-skills', count: 0 },
  { icon: <BarChart3 className="w-6 h-6 text-cyan-500" />, name: 'Data and Analytics', slug: 'data-and-analytics', count: 0 },
  { icon: <Heart className="w-6 h-6 text-green-500" />, name: 'Health and Healthcare Innovation', slug: 'health-and-healthcare-innovation', count: 0 },
  { icon: <CloudSun className="w-6 h-6 text-blue-400" />, name: 'Cleaning and Sanitation Services', slug: 'cleaning-and-sanitation-services', count: 0 },
  { icon: <CloudSun className="w-6 h-6 text-green-400" />, name: 'Environment and Sustainability', slug: 'environment-and-sustainability', count: 0 },
  { icon: <Zap className="w-6 h-6 text-lime-500" />, name: 'Engineering and Construction', slug: 'engineering-and-construction', count: 0 },
  { icon: <Briefcase className="w-6 h-6 text-purple-500" />, name: 'Business, Strategy and Innovation', slug: 'business-strategy-and-innovation', count: 0 },
  { icon: <Globe className="w-6 h-6 text-green-500" />, name: 'Agriculture and Food System', slug: 'agriculture-and-food-system', count: 0 },
  { icon: <Target className="w-6 h-6 text-orange-500" />, name: 'Professional Development and Leadership', slug: 'professional-development-and-leadership', count: 0 },
  { icon: <Music className="w-6 h-6 text-pink-500" />, name: 'Music and Sound Production', slug: 'music-and-sound-production', count: 0 },
  { icon: <Sparkles className="w-6 h-6 text-purple-400" />, name: 'Art Design and Creative Media', slug: 'art-design-and-creative-media', count: 0 },
  { icon: <Award className="w-6 h-6 text-yellow-400" />, name: 'Drama, Theatre and Performance', slug: 'drama-theatre-and-performance', count: 0 },
  { icon: <Award className="w-6 h-6 text-yellow-400" />, name: 'Hospitality, Tourism and Events', slug: 'hospitality-tourism-and-events', count: 0 },
  { icon: <Heart className="w-6 h-6 text-red-400" />, name: 'Sports, Fitness and Wellness', slug: 'sports-fitness-and-wellness', count: 0 },
  { icon: <Wrench className="w-6 h-6 text-gray-500" />, name: 'Vocational and Technical Training', slug: 'vocational-and-technical-training', count: 0 },
  { icon: <Users className="w-6 h-6 text-blue-400" />, name: 'Childhood Studies and Early Year Education', slug: 'childhood-studies-and-early-year-education', count: 0 },
  { icon: <Truck className="w-6 h-6 text-blue-300" />, name: 'Transport Services', slug: 'transport-services', count: 0 },
  { icon: <DollarSign className="w-6 h-6 text-green-700" />, name: 'Trade and Investment', slug: 'trade-and-investment', count: 0 },
  { icon: <Laptop className="w-6 h-6 text-blue-600" />, name: 'IT', slug: 'it', count: 1254 },
  { icon: <Heart className="w-6 h-6 text-green-600" />, name: 'Health', slug: 'health', count: 1005 },
  { icon: <Globe className="w-6 h-6 text-blue-500" />, name: 'Language', slug: 'language', count: 314 },
  { icon: <Briefcase className="w-6 h-6 text-purple-500" />, name: 'Business', slug: 'business', count: 1704 },
  { icon: <UserCog className="w-6 h-6 text-blue-700" />, name: 'Management', slug: 'management', count: 1033 },
  { icon: <User className="w-6 h-6 text-gray-700" />, name: 'Personal Development', slug: 'personal-development', count: 1300 },
  { icon: <Megaphone className="w-6 h-6 text-pink-600" />, name: 'Sales & Marketing', slug: 'sales-marketing', count: 433 },
  { icon: <Zap className="w-6 h-6 text-lime-500" />, name: 'Engineering & Construction', slug: 'engineering-construction', count: 806 },
  { icon: <BookOpen className="w-6 h-6 text-blue-500" />, name: 'Teaching & Academics', slug: 'teaching-academics', count: 1600 },
];

export default function CoursesPage() {
  return (
    <div className="flex max-w-7xl mx-auto py-12 px-4">
      {/* Sidebar */}
      <aside className="hidden lg:block w-64 pr-8 sticky top-24 self-start">
        <nav className="bg-white rounded-lg shadow p-4">
          <h3 className="text-lg font-bold mb-4">Categories</h3>
          <ul className="space-y-2">
            {COURSE_CATEGORIES.map((cat) => (
              <li key={cat.slug}>
                <Link to={`/category/${cat.slug}`} className="flex items-center gap-3 px-3 py-2 rounded hover:bg-cyan-50 transition-colors">
                  {cat.icon}
                  <span className="font-medium">{cat.name}</span>
                  <span className="ml-auto text-xs text-cyan-600">({cat.count} Courses)</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
      {/* Main Content */}
      <main className="flex-1">
        <h1 className="text-3xl font-bold mb-8 text-center">Browse Your Courses Now</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-12">
          {COURSE_CATEGORIES.map((cat) => (
            <Link key={cat.slug} to={`/category/${cat.slug}`} className="block bg-white rounded-lg shadow hover:shadow-lg transition-shadow p-6 text-center group">
              <div className="flex justify-center mb-4">{cat.icon}</div>
              <div className="text-lg font-semibold mb-1 group-hover:text-cyan-600 transition-colors">{cat.name}</div>
              <div className="text-sm text-cyan-600">({cat.count} Courses)</div>
            </Link>
          ))}
        </div>
        <h2 className="text-2xl font-bold mb-6 text-center">Featured Courses</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {coursesData.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </main>
    </div>
  );
}