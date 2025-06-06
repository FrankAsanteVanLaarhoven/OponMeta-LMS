import { useState } from "react";
import Navigation from "@/components/Navigation";
import CourseFilters from "@/components/CourseFilters";
import PageNavigation from "@/components/PageNavigation";
import Footer from "@/components/Footer";
import CoursesHeader from "@/components/CoursesHeader";
import CourseViewToggle from "@/components/CourseViewToggle";
import CourseGrid from "@/components/CourseGrid";
import { coursesData } from "@/data/coursesData";
import { useCourseFilters } from "@/hooks/useCourseFilters";

const Courses = () => {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  
  const {
    searchTerm,
    setSearchTerm,
    selectedCategory,
    setSelectedCategory,
    priceRange,
    setPriceRange,
    difficulty,
    setDifficulty,
    duration,
    setDuration,
    filteredCourses,
    resetFilters
  } = useCourseFilters(coursesData);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      
      <CoursesHeader />

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
            onReset={resetFilters}
          />
          
          <CourseViewToggle viewMode={viewMode} setViewMode={setViewMode} />
        </div>
      </section>

      <CourseGrid 
        courses={filteredCourses} 
        viewMode={viewMode} 
        onResetFilters={resetFilters} 
      />
      
      <PageNavigation />
      <Footer />
    </div>
  );
};

export default Courses;