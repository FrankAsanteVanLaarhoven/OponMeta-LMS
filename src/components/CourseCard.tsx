import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, Users, Clock, Play } from "lucide-react";
import { Course } from "@/data/coursesData";

interface CourseCardProps {
  course: Course;
}

const CourseCard = ({ course }: CourseCardProps) => {
  return (
    <Card className="bg-card/95 backdrop-blur-md border-border hover:bg-card transition-all duration-300 group overflow-hidden shadow-lg">
      <div className="relative">
        <img 
          src={course.image} 
          alt={course.title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-4 left-4">
          <Badge className="bg-primary text-primary-foreground">
            {course.category}
          </Badge>
        </div>
        <div className="absolute inset-0 bg-background/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <Button size="sm" className="bg-primary/80 backdrop-blur-md text-primary-foreground hover:bg-primary">
            <Play className="h-4 w-4 mr-2" />
            Preview
          </Button>
        </div>
      </div>
      
      <CardContent className="p-6">
        <div className="space-y-4">
          <div>
            <div className="flex items-start justify-between mb-2">
              <h3 className="text-lg font-semibold text-card-foreground line-clamp-2 group-hover:text-primary transition-colors flex-1">
                {course.title}
              </h3>
              {course.isBestseller && (
                <Badge className="bg-accent text-accent-foreground text-xs ml-2">
                  Bestseller
                </Badge>
              )}
            </div>
            <p className="text-muted-foreground text-sm">by {course.instructor}</p>
            <p className="text-muted-foreground text-sm mt-1 line-clamp-2">{course.description}</p>
          </div>

          {/* Course Stats */}
          <div className="grid grid-cols-2 gap-2 text-xs">
            <div className="flex items-center space-x-1 text-muted-foreground">
              <Clock className="h-3 w-3" />
              <span>{course.duration}</span>
            </div>
            <div className="flex items-center space-x-1 text-muted-foreground">
              <Play className="h-3 w-3" />
              <span>{course.lessonsCount} lessons</span>
            </div>
            <div className="flex items-center space-x-1 text-muted-foreground">
              <Users className="h-3 w-3" />
              <span>{course.students.toLocaleString()}</span>
            </div>
            <div className="text-muted-foreground">
              <Badge variant="outline" className="border-border text-muted-foreground text-xs">
                {course.level}
              </Badge>
            </div>
          </div>

          {/* Progress Bar (if user is enrolled) */}
          {course.progress !== undefined && (
            <div className="space-y-1">
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>Progress</span>
                <span>{course.progress}%</span>
              </div>
              <div className="w-full bg-muted rounded-full h-2">
                <div 
                  className="bg-primary h-2 rounded-full transition-all duration-300" 
                  style={{ width: `${course.progress}%` }}
                ></div>
              </div>
            </div>
          )}

          {/* Rating */}
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center space-x-1">
              <Star className="h-4 w-4 text-accent fill-current" />
              <span className="text-card-foreground font-medium">{course.rating}</span>
              <span className="text-muted-foreground">({course.students.toLocaleString()})</span>
            </div>
            <div className="text-xs text-muted-foreground">
              Updated {new Date(course.lastUpdated).toLocaleDateString()}
            </div>
          </div>
          
          {/* Price and Action */}
          <div className="flex items-center justify-between pt-2">
            <div className="flex flex-col">
              <div className="flex items-center space-x-2">
                <span className="text-2xl font-bold text-card-foreground">${course.price}</span>
                {course.originalPrice && (
                  <span className="text-sm text-muted-foreground line-through">${course.originalPrice}</span>
                )}
              </div>
              {course.originalPrice && (
                <span className="text-xs text-accent">
                  Save ${course.originalPrice - course.price}
                </span>
              )}
            </div>
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
              {course.progress !== undefined ? 'Continue' : 'Enroll Now'}
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CourseCard;