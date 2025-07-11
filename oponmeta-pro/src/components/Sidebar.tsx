import React from 'react';
import { 
  Home, 
  BookOpen, 
  Users, 
  BarChart3, 
  Settings, 
  Sparkles, 
  Plus, 
  Brain, 
  Video, 
  FileText,
  Target,
  Award,
  Globe,
  MessageSquare,
  Bot
} from 'lucide-react';

const Sidebar = () => (
  <aside className="h-screen w-64 bg-gradient-to-b from-indigo-900 to-indigo-700 text-white flex flex-col shadow-lg">
    <div className="flex items-center justify-center h-20 border-b border-indigo-800">
      <span className="text-2xl font-bold tracking-wide">OponMeta</span>
    </div>
    
    <nav className="flex-1 py-6 px-4 space-y-2">
      {/* Main Navigation */}
      <div className="mb-6">
        <h3 className="text-xs font-semibold text-indigo-300 uppercase tracking-wider mb-3 px-4">Main</h3>
        <a href="/dashboard" className="flex items-center py-2 px-4 rounded hover:bg-indigo-800 transition">
          <Home size={18} className="mr-3" />
          Dashboard
        </a>
        <a href="/courses" className="flex items-center py-2 px-4 rounded hover:bg-indigo-800 transition">
          <BookOpen size={18} className="mr-3" />
          Courses
        </a>
        <a href="/mini-courses" className="flex items-center py-2 px-4 rounded hover:bg-indigo-800 transition">
          <Target size={18} className="mr-3" />
          Mini-Courses
        </a>
        <a href="/rto-qualifications" className="flex items-center py-2 px-4 rounded hover:bg-indigo-800 transition">
          <Award size={18} className="mr-3" />
          RTO Qualifications
        </a>
      </div>

      {/* AI Learning Companions */}
      <div className="mb-6">
        <h3 className="text-xs font-semibold text-indigo-300 uppercase tracking-wider mb-3 px-4">AI Companions</h3>
        <a href="/companions" className="flex items-center py-2 px-4 rounded hover:bg-indigo-800 transition">
          <Bot size={18} className="mr-3" />
          Learning Companions
        </a>
      </div>

      {/* AI Creation Tools */}
      <div className="mb-6">
        <h3 className="text-xs font-semibold text-indigo-300 uppercase tracking-wider mb-3 px-4">AI Creation</h3>
        <a href="/dashboard/ai-course-creator" className="flex items-center py-2 px-4 rounded hover:bg-indigo-800 transition bg-indigo-800/50">
          <Sparkles size={18} className="mr-3" />
          AI Course Creator
        </a>
        <a href="/dashboard/ai-lesson-generator" className="flex items-center py-2 px-4 rounded hover:bg-indigo-800 transition">
          <Brain size={18} className="mr-3" />
          AI Lesson Generator
        </a>
        <a href="/dashboard/ai-quiz-generator" className="flex items-center py-2 px-4 rounded hover:bg-indigo-800 transition">
          <Target size={18} className="mr-3" />
          AI Quiz Generator
        </a>
        <a href="/dashboard/ai-video-generator" className="flex items-center py-2 px-4 rounded hover:bg-indigo-800 transition">
          <Video size={18} className="mr-3" />
          AI Video Generator
        </a>
        <a href="/dashboard/ai-assessment-generator" className="flex items-center py-2 px-4 rounded hover:bg-indigo-800 transition">
          <Award size={18} className="mr-3" />
          AI Assessment Generator
        </a>
      </div>

      {/* Content Management */}
      <div className="mb-6">
        <h3 className="text-xs font-semibold text-indigo-300 uppercase tracking-wider mb-3 px-4">Content</h3>
        <a href="/blog" className="flex items-center py-2 px-4 rounded hover:bg-indigo-800 transition">
          <Globe size={18} className="mr-3" />
          Blog
        </a>
        <a href="/pages" className="flex items-center py-2 px-4 rounded hover:bg-indigo-800 transition">
          <FileText size={18} className="mr-3" />
          Pages
        </a>
      </div>

      {/* Management */}
      <div className="mb-6">
        <h3 className="text-xs font-semibold text-indigo-300 uppercase tracking-wider mb-3 px-4">Management</h3>
        <a href="/users" className="flex items-center py-2 px-4 rounded hover:bg-indigo-800 transition">
          <Users size={18} className="mr-3" />
          Users
        </a>
        <a href="/reports" className="flex items-center py-2 px-4 rounded hover:bg-indigo-800 transition">
          <BarChart3 size={18} className="mr-3" />
          Reports
        </a>
        <a href="/settings" className="flex items-center py-2 px-4 rounded hover:bg-indigo-800 transition">
          <Settings size={18} className="mr-3" />
          Settings
        </a>
      </div>
    </nav>
  </aside>
);

export default Sidebar; 