import { Lesson, Quiz, Assignment } from './Course';

export interface MiniCourse {
  id: string;
  title: string;
  description: string;
  collectionId?: string;
  lessons: Lesson[];
  quizzes: Quiz[];
  assignments: Assignment[];
  status: 'draft' | 'published';
  createdAt: string;
  updatedAt: string;
} 