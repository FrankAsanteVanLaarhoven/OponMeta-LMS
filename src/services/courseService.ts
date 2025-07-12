import { Course } from '../types/course';

// Mock database for courses
let courses: Course[] = [
  {
    id: '1',
    title: 'Complete Web Development Bootcamp',
    description: 'Learn HTML, CSS, JavaScript, React, Node.js and become a full-stack developer',
    instructor: {
      id: 'instructor1',
      name: 'Dr. Angela Yu',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
      rating: 4.8,
      students: 125000
    },
    category: 'Programming',
    sector: 'Technology',
    language: 'English',
    level: 'Beginner',
    duration: 44,
    price: 89.99,
    originalPrice: 199.99,
    rating: 4.8,
    reviews: 12543,
    students: 125000,
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop',
    tags: ['Web Development', 'JavaScript', 'React', 'Node.js'],
    isFeatured: true,
    isNew: false,
    isBestseller: true,
    certificate: true,
    lastUpdated: '2024-01-15',
    lessons: 185,
    quizzes: 45,
    projects: 12,
    status: 'published',
    createdAt: '2023-12-01',
    updatedAt: '2024-01-15'
  },
  {
    id: '2',
    title: 'Data Science and Machine Learning',
    description: 'Master Python, pandas, numpy, scikit-learn and build ML models',
    instructor: {
      id: 'instructor2',
      name: 'Jose Portilla',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
      rating: 4.7,
      students: 89000
    },
    category: 'Data Science',
    sector: 'Technology',
    language: 'English',
    level: 'Intermediate',
    duration: 22,
    price: 94.99,
    originalPrice: 189.99,
    rating: 4.7,
    reviews: 8921,
    students: 89000,
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
    tags: ['Python', 'Machine Learning', 'Data Analysis', 'AI'],
    isFeatured: true,
    isNew: false,
    isBestseller: true,
    certificate: true,
    lastUpdated: '2024-01-10',
    lessons: 156,
    quizzes: 38,
    projects: 8,
    status: 'published',
    createdAt: '2023-11-15',
    updatedAt: '2024-01-10'
  }
];

// Mock database for student enrollments
let enrollments: { studentId: string; courseId: string; enrolledAt: string; progress: number }[] = [];

// Mock database for course purchases
let purchases: { studentId: string; courseId: string; purchasedAt: string; amount: number; status: string }[] = [];

export interface CreateCourseData {
  title: string;
  description: string;
  category: string;
  sector: string;
  language: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  duration: number;
  price: number;
  originalPrice?: number;
  image: string;
  tags: string[];
  certificate: boolean;
  lessons: number;
  quizzes: number;
  projects: number;
  instructorId: string;
  instructorName: string;
  instructorAvatar: string;
}

export interface CourseFilters {
  category?: string;
  sector?: string;
  language?: string;
  level?: string;
  priceRange?: [number, number];
  rating?: number;
  duration?: string;
  features?: string[];
  search?: string;
}

export interface CourseSort {
  field: 'popular' | 'rating' | 'newest' | 'price-low' | 'price-high';
  direction: 'asc' | 'desc';
}

class CourseService {
  // Create a new course
  async createCourse(courseData: CreateCourseData): Promise<Course> {
    const newCourse: Course = {
      id: Date.now().toString(),
      ...courseData,
      instructor: {
        id: courseData.instructorId,
        name: courseData.instructorName,
        avatar: courseData.instructorAvatar,
        rating: 0,
        students: 0
      },
      rating: 0,
      reviews: 0,
      students: 0,
      isFeatured: false,
      isNew: true,
      isBestseller: false,
      lastUpdated: new Date().toISOString().split('T')[0],
      status: 'draft',
      createdAt: new Date().toISOString().split('T')[0],
      updatedAt: new Date().toISOString().split('T')[0]
    };

    courses.push(newCourse);
    return newCourse;
  }

  // Get all courses for marketplace
  async getCourses(filters?: CourseFilters, sort?: CourseSort): Promise<Course[]> {
    let filteredCourses = courses.filter(course => course.status === 'published');

    if (filters) {
      if (filters.search) {
        const searchLower = filters.search.toLowerCase();
        filteredCourses = filteredCourses.filter(course =>
          course.title.toLowerCase().includes(searchLower) ||
          course.description.toLowerCase().includes(searchLower) ||
          course.instructor.name.toLowerCase().includes(searchLower) ||
          course.tags.some(tag => tag.toLowerCase().includes(searchLower))
        );
      }

      if (filters.category && filters.category !== 'All Categories') {
        filteredCourses = filteredCourses.filter(course => course.category === filters.category);
      }

      if (filters.sector && filters.sector !== 'All Sectors') {
        filteredCourses = filteredCourses.filter(course => course.sector === filters.sector);
      }

      if (filters.language && filters.language !== 'All Languages') {
        filteredCourses = filteredCourses.filter(course => course.language === filters.language);
      }

      if (filters.level && filters.level !== 'All Levels') {
        filteredCourses = filteredCourses.filter(course => course.level === filters.level);
      }

      if (filters.priceRange) {
        filteredCourses = filteredCourses.filter(course =>
          course.price >= filters.priceRange![0] && course.price <= filters.priceRange![1]
        );
      }

      if (filters.rating && filters.rating > 0) {
        filteredCourses = filteredCourses.filter(course => course.rating >= filters.rating!);
      }

      if (filters.duration) {
        switch (filters.duration) {
          case '0-5':
            filteredCourses = filteredCourses.filter(course => course.duration <= 5);
            break;
          case '5-10':
            filteredCourses = filteredCourses.filter(course => course.duration > 5 && course.duration <= 10);
            break;
          case '10-20':
            filteredCourses = filteredCourses.filter(course => course.duration > 10 && course.duration <= 20);
            break;
          case '20+':
            filteredCourses = filteredCourses.filter(course => course.duration > 20);
            break;
        }
      }

      if (filters.features && filters.features.length > 0) {
        filteredCourses = filteredCourses.filter(course => {
          if (filters.features!.includes('Certificate') && !course.certificate) return false;
          if (filters.features!.includes('Quizzes') && course.quizzes === 0) return false;
          if (filters.features!.includes('Projects') && course.projects === 0) return false;
          return true;
        });
      }
    }

    // Sort courses
    if (sort) {
      switch (sort.field) {
        case 'popular':
          filteredCourses.sort((a, b) => b.students - a.students);
          break;
        case 'rating':
          filteredCourses.sort((a, b) => b.rating - a.rating);
          break;
        case 'newest':
          filteredCourses.sort((a, b) => new Date(b.lastUpdated).getTime() - new Date(a.lastUpdated).getTime());
          break;
        case 'price-low':
          filteredCourses.sort((a, b) => a.price - b.price);
          break;
        case 'price-high':
          filteredCourses.sort((a, b) => b.price - a.price);
          break;
      }
    } else {
      // Default sort by popularity
      filteredCourses.sort((a, b) => b.students - a.students);
    }

    return filteredCourses;
  }

  // Get featured courses for landing page
  async getFeaturedCourses(limit: number = 19): Promise<Course[]> {
    return courses
      .filter(course => course.status === 'published' && course.isFeatured)
      .sort((a, b) => b.students - a.students)
      .slice(0, limit);
  }

  // Get courses by instructor
  async getCoursesByInstructor(instructorId: string): Promise<Course[]> {
    return courses.filter(course => course.instructor.id === instructorId);
  }

  // Get course by ID
  async getCourseById(courseId: string): Promise<Course | null> {
    return courses.find(course => course.id === courseId) || null;
  }

  // Purchase a course
  async purchaseCourse(studentId: string, courseId: string, amount: number): Promise<boolean> {
    const course = courses.find(c => c.id === courseId);
    if (!course) return false;

    // Check if already purchased
    const existingPurchase = purchases.find(p => p.studentId === studentId && p.courseId === courseId);
    if (existingPurchase) return false;

    // Add purchase record
    purchases.push({
      studentId,
      courseId,
      purchasedAt: new Date().toISOString(),
      amount,
      status: 'completed'
    });

    // Add enrollment
    enrollments.push({
      studentId,
      courseId,
      enrolledAt: new Date().toISOString(),
      progress: 0
    });

    // Update course stats
    course.students += 1;
    course.instructor.students += 1;

    return true;
  }

  // Get enrolled courses for a student
  async getEnrolledCourses(studentId: string): Promise<Course[]> {
    const enrolledCourseIds = enrollments
      .filter(enrollment => enrollment.studentId === studentId)
      .map(enrollment => enrollment.courseId);

    return courses.filter(course => enrolledCourseIds.includes(course.id));
  }

  // Get course progress for a student
  async getCourseProgress(studentId: string, courseId: string): Promise<number> {
    const enrollment = enrollments.find(e => e.studentId === studentId && e.courseId === courseId);
    return enrollment ? enrollment.progress : 0;
  }

  // Update course progress
  async updateCourseProgress(studentId: string, courseId: string, progress: number): Promise<void> {
    const enrollment = enrollments.find(e => e.studentId === studentId && e.courseId === courseId);
    if (enrollment) {
      enrollment.progress = Math.min(100, Math.max(0, progress));
    }
  }

  // Publish a course
  async publishCourse(courseId: string): Promise<boolean> {
    const course = courses.find(c => c.id === courseId);
    if (!course) return false;

    course.status = 'published';
    course.updatedAt = new Date().toISOString().split('T')[0];
    return true;
  }

  // Update course
  async updateCourse(courseId: string, updates: Partial<Course>): Promise<Course | null> {
    const courseIndex = courses.findIndex(c => c.id === courseId);
    if (courseIndex === -1) return null;

    courses[courseIndex] = {
      ...courses[courseIndex],
      ...updates,
      updatedAt: new Date().toISOString().split('T')[0]
    };

    return courses[courseIndex];
  }

  // Delete course
  async deleteCourse(courseId: string): Promise<boolean> {
    const courseIndex = courses.findIndex(c => c.id === courseId);
    if (courseIndex === -1) return false;

    courses.splice(courseIndex, 1);
    return true;
  }

  // Get course categories
  async getCategories(): Promise<string[]> {
    return [...new Set(courses.map(course => course.category))];
  }

  // Get course sectors
  async getSectors(): Promise<string[]> {
    return [...new Set(courses.map(course => course.sector))];
  }

  // Get course languages
  async getLanguages(): Promise<string[]> {
    return [...new Set(courses.map(course => course.language))];
  }

  // Add course review
  async addReview(courseId: string, studentId: string, rating: number, review: string): Promise<boolean> {
    const course = courses.find(c => c.id === courseId);
    if (!course) return false;

    // Update course rating (simplified calculation)
    const currentTotal = course.rating * course.reviews;
    course.reviews += 1;
    course.rating = (currentTotal + rating) / course.reviews;

    return true;
  }

  // Get trending courses
  async getTrendingCourses(limit: number = 10): Promise<Course[]> {
    return courses
      .filter(course => course.status === 'published')
      .sort((a, b) => {
        // Simple trending algorithm based on recent enrollments and ratings
        const aScore = (a.students * 0.7) + (a.rating * 1000 * 0.3);
        const bScore = (b.students * 0.7) + (b.rating * 1000 * 0.3);
        return bScore - aScore;
      })
      .slice(0, limit);
  }

  // Search courses
  async searchCourses(query: string, limit: number = 20): Promise<Course[]> {
    const searchLower = query.toLowerCase();
    return courses
      .filter(course => 
        course.status === 'published' &&
        (course.title.toLowerCase().includes(searchLower) ||
         course.description.toLowerCase().includes(searchLower) ||
         course.instructor.name.toLowerCase().includes(searchLower) ||
         course.tags.some(tag => tag.toLowerCase().includes(searchLower)))
      )
      .slice(0, limit);
  }
}

export const courseService = new CourseService();
export default courseService; 