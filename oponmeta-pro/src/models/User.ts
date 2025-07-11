export interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'instructor' | 'learner';
  createdAt: string;
  updatedAt: string;
} 