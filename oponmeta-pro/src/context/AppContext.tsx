import React, { createContext, useContext, useState, type ReactNode, useEffect } from 'react';
import type {
  Course,
  MiniCourse,
  RTOQualification,
  BlogPost,
  Page,
  Language
} from '../../../src/types/content';

interface AppContextType {
  courses: Course[];
  setCourses: React.Dispatch<React.SetStateAction<Course[]>>;
  miniCourses: MiniCourse[];
  setMiniCourses: React.Dispatch<React.SetStateAction<MiniCourse[]>>;
  rtoQualifications: RTOQualification[];
  setRTOQualifications: React.Dispatch<React.SetStateAction<RTOQualification[]>>;
  blogPosts: BlogPost[];
  setBlogPosts: React.Dispatch<React.SetStateAction<BlogPost[]>>;
  pages: Page[];
  setPages: React.Dispatch<React.SetStateAction<Page[]>>;
  language: Language;
  setLanguage: React.Dispatch<React.SetStateAction<Language>>;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [courses, setCourses] = useState<Course[]>([]);
  const [miniCourses, setMiniCourses] = useState<MiniCourse[]>([]);
  const [rtoQualifications, setRTOQualifications] = useState<RTOQualification[]>([]);
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [pages, setPages] = useState<Page[]>([]);
  const [language, setLanguage] = useState<Language>('en');

  useEffect(() => {
    // Add sample data for demonstration
    const sampleCourses: Course[] = [
      {
        id: 'course-1',
        type: 'course',
        language: 'en',
        slug: 'introduction-to-ai',
        title: 'Introduction to Artificial Intelligence',
        description: 'Learn the fundamentals of AI and machine learning with practical examples and hands-on projects.',
        content: '',
        metadata: {
          targetAudience: 'Beginners interested in AI',
          duration: '20',
          difficulty: 'beginner',
          estimatedHours: 20,
          modules: [],
          prerequisites: [],
          learningOutcomes: []
        },
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        publishedAt: new Date().toISOString(),
        status: 'published',
        tags: ['AI', 'Machine Learning', 'Beginner'],
        category: 'technology',
        author: 'AI Assistant',
        featuredImage: '',
        seo: {
          title: 'Introduction to Artificial Intelligence',
          description: 'Learn the fundamentals of AI and machine learning',
          keywords: ['AI', 'Machine Learning', 'Beginner']
        },
        translations: {
          en: 'course-1',
          es: 'course-2',
          de: 'course-1',
          fr: 'course-1',
          it: 'course-1',
          ja: 'course-1',
          ko: 'course-1',
          nl: 'course-1',
          pt: 'course-1',
          zh: 'course-1'
        },
        level: 'beginner',
        duration: 1200, // 20 hours in minutes
        modules: [],
        learningObjectives: [
          'Understand the basic concepts of artificial intelligence',
          'Learn about different types of machine learning',
          'Apply AI concepts to real-world problems'
        ]
      },
      {
        id: 'course-2',
        type: 'course',
        language: 'es',
        slug: 'introduccion-a-la-ia',
        title: 'Introducción a la Inteligencia Artificial',
        description: 'Aprende los fundamentos de la IA y el aprendizaje automático con ejemplos prácticos y proyectos hands-on.',
        content: '',
        metadata: {
          targetAudience: 'Principiantes interesados en IA',
          duration: '20',
          difficulty: 'beginner',
          estimatedHours: 20,
          modules: [],
          prerequisites: [],
          learningOutcomes: []
        },
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        publishedAt: new Date().toISOString(),
        status: 'published',
        tags: ['IA', 'Aprendizaje Automático', 'Principiante'],
        category: 'tecnología',
        author: 'Asistente IA',
        featuredImage: '',
        seo: {
          title: 'Introducción a la Inteligencia Artificial',
          description: 'Aprende los fundamentos de la IA y el aprendizaje automático',
          keywords: ['IA', 'Aprendizaje Automático', 'Principiante']
        },
        translations: {
          en: 'course-1',
          es: 'course-2',
          de: 'course-1',
          fr: 'course-1',
          it: 'course-1',
          ja: 'course-1',
          ko: 'course-1',
          nl: 'course-1',
          pt: 'course-1',
          zh: 'course-1'
        },
        level: 'beginner',
        duration: 1200, // 20 hours in minutes
        modules: [],
        learningObjectives: [
          'Comprender los conceptos básicos de la inteligencia artificial',
          'Aprender sobre diferentes tipos de aprendizaje automático',
          'Aplicar conceptos de IA a problemas del mundo real'
        ]
      },
      {
        id: 'course-3',
        type: 'course',
        language: 'en',
        slug: 'advanced-web-development',
        title: 'Advanced Web Development',
        description: 'Master modern web development techniques including React, TypeScript, and advanced CSS.',
        content: '',
        metadata: {
          targetAudience: 'Intermediate developers',
          duration: '30',
          difficulty: 'intermediate',
          estimatedHours: 30,
          modules: [],
          prerequisites: [],
          learningOutcomes: []
        },
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        publishedAt: new Date().toISOString(),
        status: 'published',
        tags: ['Web Development', 'React', 'TypeScript'],
        category: 'programming',
        author: 'AI Assistant',
        featuredImage: '',
        seo: {
          title: 'Advanced Web Development',
          description: 'Master modern web development techniques',
          keywords: ['Web Development', 'React', 'TypeScript']
        },
        translations: {
          en: 'course-3',
          es: 'course-3',
          de: 'course-3',
          fr: 'course-3',
          it: 'course-3',
          ja: 'course-3',
          ko: 'course-3',
          nl: 'course-3',
          pt: 'course-3',
          zh: 'course-3'
        },
        level: 'intermediate',
        duration: 1800, // 30 hours in minutes
        modules: [],
        learningObjectives: [
          'Master React hooks and functional components',
          'Implement TypeScript in web applications',
          'Create responsive and accessible web interfaces'
        ]
      }
    ];

    setCourses(sampleCourses);
  }, [language]);

  return (
    <AppContext.Provider value={{ courses, setCourses, miniCourses, setMiniCourses, rtoQualifications, setRTOQualifications, blogPosts, setBlogPosts, pages, setPages, language, setLanguage }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) throw new Error('useAppContext must be used within AppProvider');
  return context;
}; 