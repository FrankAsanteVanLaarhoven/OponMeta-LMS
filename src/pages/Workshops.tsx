import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Users, Clock, Star, BookOpen, Award, Target } from "lucide-react";

const Workshops = () => {
  const [activeTab, setActiveTab] = useState('upcoming');
  const [selectedCategory, setSelectedCategory] = useState('All Categories');
  const [selectedLevel, setSelectedLevel] = useState('All Levels');
  const [selectedLocation, setSelectedLocation] = useState('All Locations');

  const tabs = [
    { id: 'upcoming', label: 'Upcoming Workshops' },
    { id: 'my-workshops', label: 'My Workshops' },
    { id: 'past', label: 'Past Workshops' },
    { id: 'calendar', label: 'Calendar View' }
  ];

  const filters = [
    { label: 'All Categories', options: ['All Categories', 'AI & Machine Learning', 'Web Development', 'Data Science', 'Leadership', 'Design'] },
    { label: 'All Levels', options: ['All Levels', 'Beginner', 'Intermediate', 'Advanced'] },
    { label: 'All Locations', options: ['All Locations', 'Online', 'Hybrid', 'Campus'] }
  ];

  const workshops = [
    {
      id: 1,
      title: 'AI for Everyone',
      instructor: 'Sarah Chen',
      date: '04/2025',
      time: '2:00 PM - 4:00 PM',
      location: 'Online',
      enrolled: '2/50',
      description: 'Beginner-friendly workshop on the basics of artificial intelligence and its real-world applications.',
      level: 'Beginner',
      tags: ['Machine Learning Basics', 'AI Ethics', 'Real-world Applications'],
      price: '$9',
      rating: 4.8,
      reviews: 24
    },
    {
      id: 2,
      title: 'Full Stack Web Bootcamp',
      instructor: 'Mike Rodriguez',
      date: '05/05/2025',
      time: '10:00 AM - 6:00 PM',
      location: 'Hybrid (Online + Campus)',
      enrolled: '18/25',
      description: 'Build and deploy a web app from scratch in this intensive, hands-on lab.',
      level: 'Intermediate',
      tags: ['React', 'Node.js', 'Database Design', 'Deployment'],
      price: '$199',
      rating: 4.9,
      reviews: 156
    },
    {
      id: 3,
      title: 'Data Science Fundamentals',
      instructor: 'Dr. Emily Watson',
      date: '05/15/2025',
      time: '1:00 PM - 5:00 PM',
      location: 'Campus',
      enrolled: '12/30',
      description: 'Learn data analysis, visualization, and statistical modeling with real datasets.',
      level: 'Intermediate',
      tags: ['Python', 'Pandas', 'Matplotlib', 'Statistics'],
      price: '$149',
      rating: 4.7,
      reviews: 89
    }
  ];

  const benefits = [
    {
      icon: <Target className="w-8 h-8 text-blue-600" />,
      title: 'Project-Based Learning',
      description: 'Work on real-world projects and build your portfolio with hands-on experience.'
    },
    {
      icon: <BookOpen className="w-8 h-8 text-green-600" />,
      title: 'Expert Instructors',
      description: 'Learn from top professionals in AI, Web Development, Data Science, Leadership, and more.'
    },
    {
      icon: <Award className="w-8 h-8 text-purple-600" />,
      title: 'Certificates of Completion',
      description: 'Earn certificates to showcase your new skills and boost your resume.'
    }
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Beginner': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      case 'Intermediate': return 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200';
      case 'Advanced': return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-[#0a1834]">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-[#0a1834] dark:text-white mb-4">
              Hands-On Workshops for Real-World Skills
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Join live, interactive sessions led by industry experts. Our workshops are designed to give you practical, actionable skills in a collaborative environment.
            </p>
          </div>

          {/* Navigation Tabs */}
          <div className="flex justify-center mt-8 space-x-2">
            {tabs.map((tab) => (
              <Button
                key={tab.id}
                variant={activeTab === tab.id ? "default" : "outline"}
                onClick={() => setActiveTab(tab.id)}
                className={`${
                  activeTab === tab.id
                    ? 'bg-[#0a1834] text-white dark:bg-blue-600'
                    : 'bg-white text-[#0a1834] border-[#0a1834] dark:bg-gray-800 dark:text-white dark:border-gray-600'
                } hover:bg-[#0a1834] hover:text-white dark:hover:bg-blue-600`}
              >
                {tab.label}
              </Button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        {activeTab === 'upcoming' && (
          <>
            {/* Section Header */}
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-3xl font-bold text-[#0a1834] dark:text-white">
                Upcoming Workshops
              </h2>
            </div>

            {/* Filters */}
            <div className="flex flex-wrap gap-4 mb-8">
              {filters.map((filter, index) => (
                <div key={index} className="relative">
                  <select
                    className="appearance-none bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-2 pr-8 text-[#0a1834] dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={index === 0 ? selectedCategory : index === 1 ? selectedLevel : selectedLocation}
                    onChange={(e) => {
                      if (index === 0) setSelectedCategory(e.target.value);
                      else if (index === 1) setSelectedLevel(e.target.value);
                      else setSelectedLocation(e.target.value);
                    }}
                  >
                    {filter.options.map((option) => (
                      <option key={option} value={option}>{option}</option>
                    ))}
                  </select>
                </div>
              ))}
            </div>

            {/* Workshop Cards */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
              {workshops.map((workshop) => (
                <Card key={workshop.id} className="hover:shadow-lg transition-shadow border border-gray-200 dark:border-gray-700">
                  <CardHeader>
                    <div className="flex justify-between items-start mb-2">
                      <CardTitle className="text-lg font-semibold text-[#0a1834] dark:text-white">
                        {workshop.title}
                      </CardTitle>
                      <Badge className={getLevelColor(workshop.level)}>
                        {workshop.level}
                      </Badge>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                      Instructor: {workshop.instructor}
                    </p>
                    <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-2" />
                        {workshop.date} • {workshop.time}
                      </div>
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-2" />
                        {workshop.location}
                      </div>
                      <div className="flex items-center">
                        <Users className="w-4 h-4 mr-2" />
                        {workshop.enrolled} enrolled
                      </div>
                      <div className="flex items-center">
                        <Star className="w-4 h-4 mr-2 text-yellow-400" />
                        {workshop.rating} ({workshop.reviews} reviews)
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">
                      {workshop.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {workshop.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-2xl font-bold text-[#0a1834] dark:text-white">
                        {workshop.price}
                      </span>
                      <div className="space-x-2">
                        <Button variant="outline" size="sm">
                          Details
                        </Button>
                        <Button size="sm" className="bg-[#0a1834] text-white hover:bg-blue-700 dark:bg-blue-600">
                          Register
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </>
        )}

        {/* Platform Benefits */}
        <div className="bg-gray-50 dark:bg-gray-800/50 rounded-xl p-8">
          <h3 className="text-2xl font-bold text-[#0a1834] dark:text-white text-center mb-8">
            Why Choose Our Workshops?
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  {benefit.icon}
                </div>
                <h4 className="text-lg font-semibold text-[#0a1834] dark:text-white mb-2">
                  {benefit.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-300">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Workshops; 