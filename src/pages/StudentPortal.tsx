import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '@/components/Sidebar';
import { Bell, User } from 'lucide-react';

export default function StudentPortal() {
  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <Sidebar userType="student" />
      {/* Main content */}
      <div className="flex-1 flex flex-col">
        {/* Top bar */}
        <div className="sticky top-0 z-10 bg-white border-b flex items-center justify-between px-8 py-4 shadow-sm">
          <div className="font-extrabold text-2xl text-gray-900">Dashboard</div>
          <div className="flex items-center gap-4">
            <input type="text" placeholder="Search courses, tools, features" className="input input-bordered w-64" />
            <button className="relative"><Bell className="w-6 h-6" /><span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full" /></button>
            <button><User className="w-7 h-7" /></button>
          </div>
        </div>
        {/* Main content outlet */}
        <main className="flex-1">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

// Dashboard widgets moved to a separate component
import RecommendedForYou from '@/components/RecommendedForYou';
import { BookOpen, Trophy, CreditCard, Star } from 'lucide-react';

const studentStats = [
  { label: 'Enrolled Courses', value: 5, icon: <BookOpen className="w-5 h-5 text-blue-600" /> },
  { label: 'Certificates', value: 2, icon: <Trophy className="w-5 h-5 text-yellow-500" /> },
  { label: 'Credits', value: 120, icon: <CreditCard className="w-5 h-5 text-green-600" /> },
  { label: 'Progress', value: '68%', icon: <Star className="w-5 h-5 text-purple-600" /> },
];

export function StudentDashboard() {
  return (
    <div className="p-8 flex flex-col gap-8">
      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {studentStats.map(stat => (
          <div key={stat.label} className="bg-white rounded-xl shadow p-5 flex items-center gap-4 border border-gray-200">
            {stat.icon}
            <div>
              <div className="text-2xl font-extrabold text-gray-900">{stat.value}</div>
              <div className="text-gray-900 text-sm font-medium">{stat.label}</div>
            </div>
          </div>
        ))}
      </div>
      {/* Recommended for You */}
      <section>
        <div className="flex items-center justify-between mb-2">
          <h2 className="text-lg font-bold text-gray-900">Recommended for You</h2>
          <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">Personalized</span>
        </div>
        <RecommendedForYou />
      </section>
      {/* Progress/Activity */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center">
          <div className="text-4xl font-extrabold text-blue-700">68%</div>
          <div className="text-gray-900 mt-2 font-medium">Overall Progress</div>
        </div>
        <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center">
          <div className="text-2xl font-extrabold text-gray-900">0</div>
          <div className="text-gray-900 mt-2 font-medium">Pending Assignments</div>
        </div>
        <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center">
          <div className="text-2xl font-extrabold text-gray-900">0</div>
          <div className="text-gray-900 mt-2 font-medium">Completed Courses</div>
        </div>
      </div>
    </div>
  );
}