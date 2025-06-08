import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Clock, Users, Star, Play, Download, Filter, Search } from "lucide-react";
import Navigation from "@/components/Navigation";
import { useState } from "react";
import PageNavigation from "@/components/PageNavigation";

const CourseLibrary = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const categories = ["All", "Technology", "Business", "Marketing", "Design", "Leadership", "Data Science", "AI & ML"];

  const courses = [
    {
      id: 1,
      title: "Artificial Intelligence Fundamentals",
      category: "AI & ML",
      duration: "12 hours",
      students: 2456,
      rating: 4.9,
      level: "Beginner",
      price: "Premium",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995",
      description: "Complete introduction to AI concepts, machine learning, and practical applications",
      instructor: "Dr. Sarah Chen",
      lessons: 24,
      downloadable: true,
      certificate: true
    },
    {
      id: 2,
      title: "Data Science with Python",
      category: "Data Science",
      duration: "18 hours",
      students: 3421,
      rating: 4.8,
      level: "Intermediate",
      price: "Premium",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
      description: "Master data analysis, visualization, and machine learning with Python",
      instructor: "Prof. Michael Rodriguez",
      lessons: 36,
      downloadable: true,
      certificate: true
    },
    {
      id: 3,
      title: "Digital Marketing Strategy",
      category: "Marketing",
      duration: "8 hours",
      students: 1876,
      rating: 4.7,
      level: "Beginner",
      price: "Premium",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
      description: "Build comprehensive digital marketing campaigns that drive results",
      instructor: "Emma Thompson",
      lessons: 16,
      downloadable: true,
      certificate: true
    },
    {
      id: 4,
      title: "Leadership Excellence",
      category: "Leadership",
      duration: "10 hours",
      students: 2134,
      rating: 4.8,
      level: "Advanced",
      price: "Premium",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978",
      description: "Develop advanced leadership skills for modern organizations",
      instructor: "Dr. James Wilson",
      lessons: 20,
      downloadable: true,
      certificate: true
    },
    {
      id: 5,
      title: "UX/UI Design Mastery",
      category: "Design",
      duration: "15 hours",
      students: 1654,
      rating: 4.9,
      level: "Intermediate",
      price: "Premium",
      image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c",
      description: "Create exceptional user experiences with modern design principles",
      instructor: "Alex Johnson",
      lessons: 30,
      downloadable: true,
      certificate: true
    },
    {
      id: 6,
      title: "Business Analytics",
      category: "Business",
      duration: "14 hours",
      students: 1987,
      rating: 4.6,
      level: "Intermediate",
      price: "Premium",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
      description: "Transform data into actionable business insights and decisions",
      instructor: "Lisa Chen",
      lessons: 28,
      downloadable: true,
      certificate: true
    }
  ];

  const filteredCourses = courses.filter(course => {
    const matchesCategory = selectedCategory === "All" || course.category === selectedCategory;
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-400 via-blue-500 to-cyan-500">
      <Navigation />
      
      {/* Header */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-white mb-6">Premium Course Library</h1>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Explore our global library of 500+ premium courses designed by industry leaders. 
            All content is fully customizable and ready for learners worldwide.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-purple-900 hover:bg-gray-100">
              Start Your Free Trial
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              Book a Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-white mb-2">500+</div>
              <div className="text-blue-100">Premium Courses</div>
              <div className="text-xs text-blue-200">Global course selection</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-2">50+</div>
              <div className="text-blue-100">Expert Instructors</div>
              <div className="text-xs text-blue-200">International teaching team</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-2">25+</div>
              <div className="text-blue-100">Languages</div>
              <div className="text-xs text-blue-200">Multilingual access</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-2">100%</div>
              <div className="text-blue-100">Customizable</div>
              <div className="text-xs text-blue-200">Adaptable for any audience</div>
            </div>
          </div>
        </div>
      </section>

      {/* Filters and Search */}
      <section className="py-8 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-6 items-center">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search courses..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                aria-label="Search courses by title or description"
              />
            </div>

            {/* Category Filter */}
            <div className="flex items-center gap-2">
              <Filter className="h-5 w-5 text-gray-600" />
              <span className="text-sm font-medium text-gray-600">Category:</span>
              <span className="text-xs text-gray-400">Filter by subject area</span>
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                      selectedCategory === category
                        ? "bg-blue-600 text-white"
                        : "bg-gray-100 text-gray-600 hover:bg-gray-200"
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
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCourses.map((course) => (
              <Card key={course.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="relative">
                  <img 
                    src={course.image} 
                    alt={course.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-purple-600 text-white">{course.category}</Badge>
                  </div>
                  <div className="absolute top-4 right-4">
                    <Badge variant="outline" className="bg-white text-gray-900">{course.level}</Badge>
                  </div>
                  <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                    <Button className="bg-white text-purple-900 hover:bg-gray-100">
                      <Play className="mr-2 h-4 w-4" />
                      Preview Course
                    </Button>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{course.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{course.description}</p>
                  
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
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
                      <span className="font-medium">{course.rating}</span>
                    </div>
                    <div className="text-sm text-gray-600">by {course.instructor}</div>
                  </div>
                  
                  <div className="flex items-center gap-2 mb-4">
                    {course.downloadable && (
                      <Badge variant="secondary" className="text-xs">
                        <Download className="h-3 w-3 mr-1" />
                        Downloadable
                      </Badge>
                    )}
                    {course.certificate && (
                      <Badge variant="secondary" className="text-xs">
                        Certificate
                      </Badge>
                    )}
                  </div>
                  
                  <div className="flex gap-2">
                    <Button className="flex-1 bg-blue-600 text-white hover:bg-blue-700">
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

          {filteredCourses.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No courses found matching your criteria.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Build Your Custom Learning Program?
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
      <PageNavigation />
    </div>
  );
};

export default CourseLibrary;