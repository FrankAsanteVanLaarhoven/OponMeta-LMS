export interface Lesson {
  id: string;
  title: string;
  content: string;
  multimedia?: string[];
}

export interface Quiz {
  id: string;
  title: string;
  questions: QuizQuestion[];
}

export interface QuizQuestion {
  id: string;
  question: string;
  answers: string[];
  correct: number[];
}

export interface Assignment {
  id: string;
  title: string;
  description: string;
  rubric?: string;
}

export interface CourseStructure {
  objectives: string[];
  lessons: number;
  topicsPerLesson: number;
  quizzesPerLesson: number;
  assignmentsPerLesson: number;
}

export interface Course {
  id: string;
  title: string;
  description: string;
  learnerProfile: string;
  structure: CourseStructure;
  lessons: Lesson[];
  quizzes: Quiz[];
  assignments: Assignment[];
  status: 'draft' | 'published';
  createdAt: string;
  updatedAt: string;
} 