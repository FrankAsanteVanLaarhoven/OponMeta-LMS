import { useState } from "react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import CourseCard from "@/components/CourseCard";
import CourseFilters from "@/components/CourseFilters";
import { Grid, List } from "lucide-react";
import PageNavigation from "@/components/PageNavigation";
import Footer from "@/components/Footer";

const Courses = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 1000]);
  const [difficulty, setDifficulty] = useState("All");
  const [duration, setDuration] = useState("All");

  const courses = [
    {
      id: 1,
      title: "Digital Marketing Fundamentals",
      instructor: "Sarah Johnson",
      price: 299,
      originalPrice: 399,
      rating: 4.8,
      students: 1234,
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
      category: "Marketing",
      duration: "3-10 hours",
      level: "Beginner",
      lessonsCount: 18,
      description: "Master the fundamentals of digital marketing and grow your online presence",
      progress: 45,
      isBestseller: true,
      lastUpdated: "2024-02-20",
      language: "English",
      hasSubtitles: true
    },
    {
      id: 2,
      title: "Web Development Bootcamp",
      instructor: "Mike Chen",
      price: 499,
      originalPrice: 699,
      rating: 4.9,
      students: 2156,
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
      category: "Technology",
      duration: "20+ hours",
      level: "Intermediate",
      lessonsCount: 45,
      description: "Complete bootcamp covering HTML, CSS, JavaScript, React, and Node.js",
      isBestseller: true,
      lastUpdated: "2024-03-05",
      language: "English",
      hasSubtitles: true
    },
    {
      id: 3,
      title: "Business Strategy & Leadership",
      instructor: "Dr. Amara Okafor",
      price: 399,
      rating: 4.7,
      students: 892,
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
      category: "Business",
      duration: "11-20 hours",
      level: "Advanced",
      lessonsCount: 32,
      description: "Advanced strategies for business leadership and organizational development",
      lastUpdated: "2024-02-28",
      language: "English",
      hasSubtitles: true
    },
    {
      id: 4,
      title: "UI/UX Design Masterclass",
      instructor: "James Wilson",
      price: 349,
      originalPrice: 449,
      rating: 4.8,
      students: 1567,
      image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04",
      category: "Design",
      duration: "11-20 hours",
      level: "Intermediate",
      lessonsCount: 38,
      description: "Master modern UI/UX design principles and create stunning user experiences",
      isBestseller: false,
      lastUpdated: "2024-02-15",
      language: "English",
      hasSubtitles: true
    },
    {
      id: 5,
      title: "Data Science with Python",
      instructor: "Dr. Fatima Al-Rashid",
      price: 449,
      originalPrice: 599,
      rating: 4.9,
      students: 2034,
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
      category: "Technology",
      duration: "20+ hours",
      level: "Advanced",
      lessonsCount: 52,
      description: "Comprehensive data science course covering Python, machine learning, and analytics",
      isBestseller: true,
      lastUpdated: "2024-03-10",
      language: "English",
      hasSubtitles: true
    },
    {
      id: 6,
      title: "Public Health Management",
      instructor: "Dr. Kwame Asante",
      price: 279,
      rating: 4.6,
      students: 756,
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
      category: "Health",
      duration: "3-10 hours",
      level: "Beginner",
      lessonsCount: 22,
      description: "Essential principles of public health management and disease prevention",
      lastUpdated: "2024-01-25",
      language: "English",
      hasSubtitles: true
    },
    {
      id: 7,
      title: "Introduction to AI",
      instructor: "Prof. Alice Kimani",
      price: 199,
      rating: 4.5,
      students: 543,
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
      category: "Technology",
      duration: "0-2 hours",
      level: "Beginner",
      lessonsCount: 8,
      description: "Get started with artificial intelligence concepts and applications",
      lastUpdated: "2024-02-05",
      language: "English",
      hasSubtitles: true
    },
    {
      id: 8,
      title: "Advanced Photography",
      instructor: "John Smith",
      price: 159,
      rating: 4.7,
      students: 321,
      image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04",
      category: "Design",
      duration: "3-10 hours",
      level: "Advanced",
      lessonsCount: 15,
      description: "Advanced photography techniques for professional results",
      lastUpdated: "2024-01-30",
      language: "English",
      hasSubtitles: true
    }
  ];

  const filteredCourses = courses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.instructor.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.category.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || course.category === selectedCategory;
    const matchesPrice = course.price >= priceRange[0] && course.price <= priceRange[1];
    const matchesDifficulty = difficulty === "All" || course.level === difficulty;
    const matchesDuration = duration === "All" || course.duration === duration;
    
    return matchesSearch && matchesCategory && matchesPrice && matchesDifficulty && matchesDuration;
  });

  const handleResetFilters = () => {
    setSearchTerm("");
    setSelectedCategory("All");
    setPriceRange([0, 1000]);
    setDifficulty("All");
    setDuration("All");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-400 via-blue-500 to-cyan-500">
      <Navigation />
      
      {/* Header */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Explore Our Courses
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Discover thousands of courses from expert instructors across Africa and beyond
          </p>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="px-4 mb-8">
        <div className="max-w-7xl mx-auto">
          <CourseFilters
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            priceRange={priceRange}
            setPriceRange={setPriceRange}
            difficulty={difficulty}
            setDifficulty={setDifficulty}
            duration={duration}
            setDuration={setDuration}
            onReset={handleResetFilters}
          />
          
          {/* View Toggle */}
          <div className="flex justify-end mt-4">
            <div className="flex border border-white/20 rounded-md">
              <Button
                size="sm"
                variant={viewMode === "grid" ? "default" : "ghost"}
                className={viewMode === "grid" ? "bg-white text-purple-900" : "text-white hover:bg-white/10"}
                onClick={() => setViewMode("grid")}
              >
                <Grid className="h-4 w-4" />
              </Button>
              <Button
                size="sm"
                variant={viewMode === "list" ? "default" : "ghost"}
                className={viewMode === "list" ? "bg-white text-purple-900" : "text-white hover:bg-white/10"}
                onClick={() => setViewMode("list")}
              >
                <List className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Course Grid */}
      <section className="px-4 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="mb-6 text-white">
            Showing {filteredCourses.length} courses
          </div>
          
          <div className={`grid gap-8 ${viewMode === "grid" ? "md:grid-cols-2 lg:grid-cols-3" : "grid-cols-1 max-w-4xl"}`}>
            {filteredCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
          
          {filteredCourses.length === 0 && (
            <div className="text-center py-16">
              <p className="text-xl text-blue-100">No courses found matching your criteria.</p>
              <Button 
                className="mt-4 bg-white text-purple-900 hover:bg-gray-100"
                onClick={handleResetFilters}
              >
                Reset Filters
              </Button>
            </div>
          )}
        </div>
      </section>
      <PageNavigation />
      <Footer />
    </div>
  );
};

export default Courses;