import React from 'react';
import { NavLink } from 'react-router-dom';
import { BookOpen, Calendar, Star, Trophy, CreditCard, MessageCircle, Settings, Home, Bot, ShoppingBag, Plus, Users } from 'lucide-react';

const navItems = [
  { key: 'dashboard', label: 'Dashboard', icon: <Home />, to: '/student-portal' },
  { key: 'courses', label: 'My Courses', icon: <BookOpen />, to: '/student-portal/courses' },
  { key: 'marketplace', label: 'Course Marketplace', icon: <ShoppingBag />, to: '/student-portal/marketplace' },
  { key: 'bookings', label: 'Bookings', icon: <Calendar />, to: '/student-portal/bookings' },
  { key: 'progress', label: 'Progress', icon: <Star />, to: '/student-portal/progress' },
  { key: 'achievements', label: 'Achievements', icon: <Trophy />, to: '/student-portal/achievements' },
  { key: 'wallet', label: 'Wallet', icon: <CreditCard />, to: '/student-portal/wallet' },
  { key: 'social', label: 'Social', icon: <MessageCircle />, to: '/student-portal/social' },
  { key: 'companions', label: 'AI Companions', icon: <Bot />, to: '/companion' },
  { key: 'settings', label: 'Settings', icon: <Settings />, to: '/student-portal/settings' },
];

const instructorItems = [
  { key: 'create-course', label: 'Create Course', icon: <Plus />, to: '/dashboard/course-creator' },
  { key: 'ai-course-creator', label: 'AI Course Creator', icon: <Bot />, to: '/dashboard/ai-course-creator' },
  { key: 'vendor-dashboard', label: 'Vendor Dashboard', icon: <Users />, to: '/vendor/dashboard' },
  { key: 'become-instructor', label: 'Become Instructor', icon: <Users />, to: '/become-instructor' },
];

export default function Sidebar() {
  return (
    <aside className="bg-white min-h-screen w-64 flex flex-col shadow-lg border-r">
      <div className="p-6 font-bold text-xl">Student Portal</div>
      
      {/* Main Navigation */}
      <nav className="flex-1 mt-4">
        <div className="px-4 mb-4">
          <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Learning</h3>
        </div>
        {navItems.map(item => (
          <NavLink
            key={item.key}
            to={item.to}
            className={({ isActive }) =>
              `flex items-center gap-3 px-6 py-3 rounded-lg mb-2 transition-colors cursor-pointer text-base font-medium
              ${isActive ? 'bg-blue-600 text-white font-bold' : 'text-gray-900 hover:bg-blue-50 hover:text-blue-700'}`
            }
            end={item.to === '/student-portal'}
            title={item.label}
          >
            {item.icon}
            <span>{item.label}</span>
          </NavLink>
        ))}
      </nav>

      {/* Instructor Section */}
      <div className="border-t border-gray-200 pt-4">
        <div className="px-4 mb-4">
          <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Instructor Tools</h3>
        </div>
        {instructorItems.map(item => (
          <NavLink
            key={item.key}
            to={item.to}
            className={({ isActive }) =>
              `flex items-center gap-3 px-6 py-3 rounded-lg mb-2 transition-colors cursor-pointer text-base font-medium
              ${isActive ? 'bg-green-600 text-white font-bold' : 'text-gray-900 hover:bg-green-50 hover:text-green-700'}`
            }
            title={item.label}
          >
            {item.icon}
            <span>{item.label}</span>
          </NavLink>
        ))}
      </div>
    </aside>
  );
} 