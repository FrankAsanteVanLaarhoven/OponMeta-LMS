import { Button } from "@/components/ui/button";
import CourseCard from "@/components/CourseCard";
import { Course } from "@/data/coursesData";

interface CourseGridProps {
  courses: Course[];
  viewMode: "grid" | "list";
  onResetFilters: () => void;
}

const CourseGrid = ({ courses, viewMode, onResetFilters }: CourseGridProps) => {
  return (
    <section className="px-4 pb-20">
      <div className="max-w-7xl mx-auto">
        <div className="mb-6 text-foreground">
          Showing {courses.length} available courses
        </div>
        
        <div className={`grid gap-8 ${viewMode === "grid" ? "md:grid-cols-2 lg:grid-cols-3" : "grid-cols-1 max-w-4xl"}`}>
          {courses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
        
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