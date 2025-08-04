import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Clock, Users, Star, Play, Download, Filter, Search } from "lucide-react";
import LanguageSwitcher from "@/components/LanguageSwitcher";

const CourseLibrary = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [courses, setCourses] = useState<any[]>([]);
  const navigate = useNavigate();

  const categories = ["All", "Technology", "Business", "Marketing", "Design", "Leadership", "Data Science", "AI & ML"];

  useEffect(() => {
    fetch('/api/courses')
      .then(res => res.json())
      .then(data => setCourses(data));
  }, []);

  const filteredCourses = courses.filter(course => {
    const matchesCategory = selectedCategory === "All" || course.category === selectedCategory;
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-white text-[#0a1834] dark:bg-[#0a1834] dark:text-white">
      
      <div className="flex justify-end max-w-7xl mx-auto pt-4 pr-4">
        <LanguageSwitcher />
      </div>
      
      {/* Header */}
      <section className="py-20 px-4 bg-[#f0f4fa] dark:bg-[#11204a]">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-[#0a1834] dark:text-white mb-6">Premium Course Library</h1>
          <p className="text-xl text-[#16203a] dark:text-cyan-300 mb-8 max-w-3xl mx-auto">
            Explore our global library of 500+ premium courses designed by industry leaders. 
            All content is fully customizable and ready for learners worldwide.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-[#11204a] text-white hover:bg-[#16203a] border-2 border-[#0a1834]">
              Start Your Free Trial
            </Button>
            <Button size="lg" variant="outline" className="border-[#11204a] text-[#11204a] hover:bg-[#11204a]/10">
              Book a Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 px-4 bg-white dark:bg-[#16203a]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-[#0a1834] dark:text-white mb-2">500+</div>
              <div className="text-[#16203a] dark:text-cyan-300">Premium Courses</div>
              <div className="text-xs text-[#22305a] dark:text-cyan-200">Global course selection</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#0a1834] dark:text-white mb-2">50+</div>
              <div className="text-[#16203a] dark:text-cyan-300">Expert Instructors</div>
              <div className="text-xs text-[#22305a] dark:text-cyan-200">International teaching team</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#0a1834] dark:text-white mb-2">25+</div>
              <div className="text-[#16203a] dark:text-cyan-300">Languages</div>
              <div className="text-xs text-[#22305a] dark:text-cyan-200">Multilingual access</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#0a1834] dark:text-white mb-2">100%</div>
              <div className="text-[#16203a] dark:text-cyan-300">Customizable</div>
              <div className="text-xs text-[#22305a] dark:text-cyan-200">Adaptable for any audience</div>
            </div>
          </div>
        </div>
      </section>

      {/* Filters and Search */}
      <section className="py-8 px-4 bg-white dark:bg-[#16203a]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-6 items-center">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#22305a] dark:text-cyan-300 h-5 w-5" />
              <input
                type="text"
                placeholder="Search courses..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-[#22305a] dark:border-[#22305a] rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent bg-white dark:bg-[#11204a] text-[#0a1834] dark:text-white"
                aria-label="Search courses by title or description"
              />
            </div>

            {/* Category Filter */}
            <div className="flex items-center gap-2">
              <Filter className="h-5 w-5 text-[#16203a] dark:text-cyan-300" />
              <span className="text-sm font-medium text-[#16203a] dark:text-cyan-300">Category:</span>
              <span className="text-xs text-[#22305a] dark:text-cyan-200">Filter by subject area</span>
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                      selectedCategory === category
                        ? "bg-cyan-600 text-white"
                        : "bg-[#f0f4fa] dark:bg-[#11204a] text-[#16203a] dark:text-cyan-300 hover:bg-[#e5e7eb] dark:hover:bg-[#22305a]"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Grid */}
      <section className="py-16 px-4 bg-white dark:bg-[#16203a]">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCourses.length === 0 && (
              <div className="text-center py-12">
                <p className="text-[#22305a] dark:text-cyan-200 text-lg">No courses found matching your criteria.</p>
              </div>
            )}
            {filteredCourses.map((course) => (
              <Card key={course.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105 bg-white dark:bg-[#11204a] border-[#e5e7eb] dark:border-[#22305a]">
                <div className="relative">
                  <img 
                    src={course.image} 
                    alt={course.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-cyan-600 text-white">{course.category}</Badge>
                  </div>
                  <div className="absolute top-4 right-4">
                    <Badge variant="outline" className="bg-white dark:bg-[#16203a] text-[#0a1834] dark:text-white border-[#22305a]">{course.level}</Badge>
                  </div>
                  <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                    <Button className="bg-[#16203a] text-white hover:bg-[#22305a]" onClick={() => navigate(`/courses/${course.id}`)}>
                      <Play className="mr-2 h-4 w-4" />
                      View Course
                    </Button>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-[#0a1834] dark:text-white mb-2">{course.title}</h3>
                  <p className="text-[#16203a] dark:text-cyan-300 text-sm mb-4">{course.description}</p>
                  
                  <div className="flex items-center gap-4 text-sm text-[#22305a] dark:text-cyan-200 mb-4">
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {course.duration}
                    </div>
                    <div className="flex items-center gap-1">
                      <BookOpen className="h-4 w-4" />
                      {course.lessons} lessons
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="h-4 w-4" />
                      {course.students.toLocaleString()}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="font-medium text-[#0a1834] dark:text-white">{course.rating}</span>
                    </div>
                    <div className="text-sm text-[#22305a] dark:text-cyan-200">by {course.instructor}</div>
                  </div>
                  
                  <div className="flex items-center gap-2 mb-4">
                    {course.downloadable && (
                      <Badge variant="secondary" className="text-xs bg-[#f0f4fa] dark:bg-[#11204a] text-[#16203a] dark:text-cyan-300">
                        <Download className="h-3 w-3 mr-1" />
                        Downloadable
                      </Badge>
                    )}
                    {course.certificate && (
                      <Badge variant="secondary" className="text-xs bg-[#f0f4fa] dark:bg-[#11204a] text-[#16203a] dark:text-cyan-300">
                        Certificate
                      </Badge>
                    )}
                  </div>
                  
                  <div className="flex gap-2">
                    <Button className="flex-1 bg-cyan-600 text-white hover:bg-cyan-700">
                      Add to Library
                    </Button>
                    <Button variant="outline" size="sm">
                      Preview
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Build Your Custom Learning Programme?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Start with our premium course library and customize content to match your organization's needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-purple-900 hover:bg-gray-100">
              Start Free Trial
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              Contact Sales
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CourseLibrary;