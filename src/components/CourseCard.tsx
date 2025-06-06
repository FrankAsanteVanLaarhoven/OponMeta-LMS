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
    <Card className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/15 transition-all duration-300 group overflow-hidden">
      <div className="relative">
        <img 
          src={course.image} 
          alt={course.title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-4 left-4">
          <Badge className="bg-purple-500 text-white">
            {course.category}
          </Badge>
        </div>
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <Button size="sm" className="bg-white/20 backdrop-blur-md text-white hover:bg-white/30">
            <Play className="h-4 w-4 mr-2" />
            Preview
          </Button>
        </div>
      </div>
      
      <CardContent className="p-6">
        <div className="space-y-4">
          <div>
            <div className="flex items-start justify-between mb-2">
              <h3 className="text-lg font-semibold text-white line-clamp-2 group-hover:text-blue-200 transition-colors flex-1">
                {course.title}
              </h3>
              {course.isBestseller && (
                <Badge className="bg-orange-500 text-white text-xs ml-2">
                  Bestseller
                </Badge>
              )}
            </div>
            <p className="text-blue-100 text-sm">by {course.instructor}</p>
            <p className="text-blue-200 text-sm mt-1 line-clamp-2">{course.description}</p>
          </div>

          {/* Course Stats */}
          <div className="grid grid-cols-2 gap-2 text-xs">
            <div className="flex items-center space-x-1 text-blue-100">
              <Clock className="h-3 w-3" />
              <span>{course.duration}</span>
            </div>
            <div className="flex items-center space-x-1 text-blue-100">
              <Play className="h-3 w-3" />
              <span>{course.lessonsCount} lessons</span>
            </div>
            <div className="flex items-center space-x-1 text-blue-100">
              <Users className="h-3 w-3" />
              <span>{course.students.toLocaleString()}</span>
            </div>
            <div className="text-blue-100">
              <Badge variant="outline" className="border-blue-400 text-blue-200 text-xs">
                {course.level}
              </Badge>
            </div>
          </div>

          {/* Progress Bar (if user is enrolled) */}
          {course.progress !== undefined && (
            <div className="space-y-1">
              <div className="flex justify-between text-xs text-blue-100">
                <span>Progress</span>
                <span>{course.progress}%</span>
              </div>
              <div className="w-full bg-white/20 rounded-full h-2">
                <div 
                  className="bg-blue-400 h-2 rounded-full transition-all duration-300" 
                  style={{ width: `${course.progress}%` }}
                ></div>
              </div>
            </div>
          )}

          {/* Rating */}
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center space-x-1">
              <Star className="h-4 w-4 text-yellow-400 fill-current" />
              <span className="text-white font-medium">{course.rating}</span>
              <span className="text-blue-100">({course.students.toLocaleString()})</span>
            </div>
            <div className="text-xs text-blue-100">
              Updated {new Date(course.lastUpdated).toLocaleDateString()}
            </div>
          </div>
          
          {/* Price and Action */}
          <div className="flex items-center justify-between pt-2">
            <div className="flex flex-col">
              <div className="flex items-center space-x-2">
                <span className="text-2xl font-bold text-white">${course.price}</span>
                {course.originalPrice && (
                  <span className="text-sm text-blue-300 line-through">${course.originalPrice}</span>
                )}
              </div>
              {course.originalPrice && (
                <span className="text-xs text-green-400">
                  Save ${course.originalPrice - course.price}
                </span>
              )}
            </div>
            <Button className="bg-white text-purple-900 hover:bg-gray-100">
              {course.progress !== undefined ? 'Continue' : 'Enroll Now'}
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CourseCard;