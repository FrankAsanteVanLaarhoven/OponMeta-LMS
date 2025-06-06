export interface Course {
  id: number;
  title: string;
  instructor: string;
  price: number;
  originalPrice?: number;
  rating: number;
  students: number;
  image: string;
  category: string;
  duration: string;
  level: string;
  lessonsCount: number;
  description: string;
  progress?: number;
  isBestseller?: boolean;
  lastUpdated: string;
  language: string;
  hasSubtitles: boolean;
}

export const coursesData: Course[] = [
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