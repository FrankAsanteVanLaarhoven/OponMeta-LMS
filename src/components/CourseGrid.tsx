import { Button } from "@/components/ui/button";
import CourseCard from "@/components/CourseCard";
import BauhausCourseCard from "@/components/BauhausCourseCard";
import { Course } from "@/data/coursesData";
import { useState } from "react";

interface CourseGridProps {
  courses: Course[];
  viewMode: "grid" | "list";
  onResetFilters: () => void;
  useBauhausCards?: boolean;
}

const CourseGrid = ({ courses, viewMode, onResetFilters, useBauhausCards = true }: CourseGridProps) => {
  const [bookmarkedCourses, setBookmarkedCourses] = useState<Set<number>>(new Set());

  const handleEnroll = (courseId: number) => {
    console.log(`Enrolling in course ${courseId}`);
    // Add enrollment logic here
  };

  const handleBookmark = (courseId: number) => {
    setBookmarkedCourses(prev => {
      const newSet = new Set(prev);
      if (newSet.has(courseId)) {
        newSet.delete(courseId);
      } else {
        newSet.add(courseId);
      }
      return newSet;
    });
    console.log(`Bookmarked course ${courseId}`);
  };

  const handleMoreOptions = (courseId: number) => {
    console.log(`More options for course ${courseId}`);
    // Add more options logic here
  };

  return (
    <section className="px-4 pb-20">
      <div className="max-w-7xl mx-auto">
        <div className="mb-6 text-foreground">
          Showing {courses.length} available courses
        </div>
        
        {useBauhausCards ? (
          <div className="w-full p-8 rounded-lg min-h-[300px] flex flex-wrap gap-6 items-center justify-center relative">
            {courses.map((course) => (
              <BauhausCourseCard
                key={course.id}
                course={course}
                onEnroll={handleEnroll}
                onBookmark={handleBookmark}
                onMoreOptions={handleMoreOptions}
              />
            ))}
          </div>
        ) : (
          <div className={`grid gap-8 ${viewMode === "grid" ? "md:grid-cols-2 lg:grid-cols-3" : "grid-cols-1 max-w-4xl"}`}>
            {courses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        )}
        
        {courses.length === 0 && (
          <div className="text-center py-16">
            <p className="text-xl text-muted-foreground">No courses match your search criteria.</p>
            <Button 
              className="mt-4 bg-primary text-primary-foreground hover:bg-primary/90"
              onClick={onResetFilters}
            >
              Clear Filters
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default CourseGrid;