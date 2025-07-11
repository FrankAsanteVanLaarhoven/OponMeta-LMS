// Global Search Service for OponMeta Platform
// This service provides comprehensive search across all platform content

export interface SearchResult {
  id: string;
  title: string;
  description: string;
  type: 'course' | 'page' | 'feature' | 'tool' | 'companion' | 'instructor' | 'category';
  url: string;
  category?: string;
  tags?: string[];
  relevance: number;
  icon?: string;
}

export interface SearchIndex {
  [key: string]: SearchResult;
}

// Comprehensive search index covering all platform content
const searchIndex: SearchIndex = {
  // Courses
  'courses': {
    id: 'courses',
    title: 'Browse Courses',
    description: 'Explore thousands of free online courses across all categories',
    type: 'page',
    url: '/courses',
    category: 'Learning',
    tags: ['courses', 'learning', 'education', 'training'],
    relevance: 100
  },
  'course-library': {
    id: 'course-library',
    title: 'Course Library',
    description: 'Access our comprehensive library of courses and learning materials',
    type: 'page',
    url: '/course-library',
    category: 'Learning',
    tags: ['library', 'courses', 'materials', 'resources'],
    relevance: 95
  },
  'create-course': {
    id: 'create-course',
    title: 'Create Course',
    description: 'Build and publish your own courses on the OponMeta platform',
    type: 'page',
    url: '/create-course',
    category: 'Content Creation',
    tags: ['create', 'course', 'authoring', 'publish'],
    relevance: 90
  },

  // AI & Companions
  'ai-companion': {
    id: 'ai-companion',
    title: 'AI Learning Companion',
    description: 'Personalized AI tutor to enhance your learning experience',
    type: 'companion',
    url: '/companion',
    category: 'AI Tools',
    tags: ['ai', 'companion', 'tutor', 'personalized', 'learning'],
    relevance: 100
  },
  'meet-ai': {
    id: 'meet-ai',
    title: 'Meet AI',
    description: 'Discover our AI-powered learning tools and companions',
    type: 'page',
    url: '/meet-ai',
    category: 'AI Tools',
    tags: ['ai', 'meet', 'introduction', 'tools'],
    relevance: 95
  },

  // Portals & Dashboards
  'student-portal': {
    id: 'student-portal',
    title: 'Student Portal',
    description: 'Access your courses, progress, and learning dashboard',
    type: 'page',
    url: '/student-portal',
    category: 'Student Tools',
    tags: ['student', 'portal', 'dashboard', 'progress', 'courses'],
    relevance: 100
  },
  'dashboard': {
    id: 'dashboard',
    title: 'Dashboard',
    description: 'Main dashboard for managing your OponMeta account',
    type: 'page',
    url: '/dashboard',
    category: 'Account',
    tags: ['dashboard', 'account', 'overview', 'management'],
    relevance: 95
  },
  'vendor-portal': {
    id: 'vendor-portal',
    title: 'Vendor Portal',
    description: 'Manage your vendor account and course offerings',
    type: 'page',
    url: '/vendor-portal',
    category: 'Vendor Tools',
    tags: ['vendor', 'portal', 'management', 'courses'],
    relevance: 90
  },
  'advertiser-portal': {
    id: 'advertiser-portal',
    title: 'Advertiser Portal',
    description: 'Manage advertising campaigns and promotions',
    type: 'page',
    url: '/advertiser-portal',
    category: 'Advertising',
    tags: ['advertiser', 'portal', 'ads', 'campaigns'],
    relevance: 85
  },

  // Tools & Features
  'authoring-tool': {
    id: 'authoring-tool',
    title: 'Authoring Tool',
    description: 'Create interactive e-learning content with our drag-and-drop authoring tool',
    type: 'tool',
    url: '/authoring-tool',
    category: 'Content Creation',
    tags: ['authoring', 'tool', 'create', 'content', 'drag-drop'],
    relevance: 95
  },
  'quiz-builder': {
    id: 'quiz-builder',
    title: 'Quiz Builder',
    description: 'Create engaging quizzes and assessments for your courses',
    type: 'tool',
    url: '/quiz-builder',
    category: 'Content Creation',
    tags: ['quiz', 'builder', 'assessment', 'test'],
    relevance: 90
  },
  'plagiarism-checker': {
    id: 'plagiarism-checker',
    title: 'Plagiarism Checker',
    description: 'Premium AI-powered plagiarism detection tool',
    type: 'tool',
    url: '/plagiarism-checker',
    category: 'Writing Tools',
    tags: ['plagiarism', 'checker', 'ai', 'premium', 'detection'],
    relevance: 85
  },
  'grammar-checker': {
    id: 'grammar-checker',
    title: 'Grammar Checker',
    description: 'Free AI grammar and style checker',
    type: 'tool',
    url: '/grammar-checker',
    category: 'Writing Tools',
    tags: ['grammar', 'checker', 'ai', 'free', 'writing'],
    relevance: 85
  },

  // Booking & Scheduling
  'one-to-one-booking': {
    id: 'one-to-one-booking',
    title: '1:1 Booking',
    description: 'Schedule one-on-one sessions with instructors and mentors',
    type: 'page',
    url: '/one-to-one-booking',
    category: 'Scheduling',
    tags: ['booking', '1:1', 'sessions', 'mentors', 'instructors'],
    relevance: 90
  },

  // Subscription & Management
  'subscription-management': {
    id: 'subscription-management',
    title: 'Subscription Management',
    description: 'Manage your OponMeta subscription and billing',
    type: 'page',
    url: '/companion-subscribe',
    category: 'Account',
    tags: ['subscription', 'management', 'billing', 'account'],
    relevance: 85
  },

  // Information Pages
  'about': {
    id: 'about',
    title: 'About OponMeta',
    description: 'Learn about our mission to advance education worldwide',
    type: 'page',
    url: '/about',
    category: 'Company',
    tags: ['about', 'company', 'mission', 'story'],
    relevance: 80
  },
  'features': {
    id: 'features',
    title: 'Platform Features',
    description: 'Explore all the features and capabilities of OponMeta',
    type: 'page',
    url: '/features',
    category: 'Platform',
    tags: ['features', 'platform', 'capabilities', 'tools'],
    relevance: 85
  },
  'contact': {
    id: 'contact',
    title: 'Contact Us',
    description: 'Get in touch with our support team',
    type: 'page',
    url: '/contact',
    category: 'Support',
    tags: ['contact', 'support', 'help', 'inquiry'],
    relevance: 80
  },

  // Career & Development
  'career-guidance': {
    id: 'career-guidance',
    title: 'Career Guidance',
    description: 'Get personalized career advice and guidance',
    type: 'page',
    url: '/career-guidance',
    category: 'Career',
    tags: ['career', 'guidance', 'advice', 'development'],
    relevance: 85
  },

  // Vendors & Partners
  'vendors': {
    id: 'vendors',
    title: 'Vendor Partners',
    description: 'Explore our network of vendor partners and their offerings',
    type: 'page',
    url: '/vendors',
    category: 'Partners',
    tags: ['vendors', 'partners', 'network', 'offerings'],
    relevance: 85
  },
  'become-instructor': {
    id: 'become-instructor',
    title: 'Become Instructor',
    description: 'Join our platform as an instructor and share your knowledge',
    type: 'page',
    url: '/become-instructor',
    category: 'Instructors',
    tags: ['instructor', 'become', 'teach', 'share'],
    relevance: 90
  },

  // Course Categories
  'it-courses': {
    id: 'it-courses',
    title: 'IT Courses',
    description: 'Information Technology courses including programming, networking, and more',
    type: 'category',
    url: '/courses?category=it',
    category: 'Technology',
    tags: ['it', 'technology', 'programming', 'networking'],
    relevance: 90
  },
  'health-courses': {
    id: 'health-courses',
    title: 'Health Courses',
    description: 'Healthcare, nursing, and wellness courses',
    type: 'category',
    url: '/courses?category=health',
    category: 'Health',
    tags: ['health', 'healthcare', 'nursing', 'wellness'],
    relevance: 90
  },
  'business-courses': {
    id: 'business-courses',
    title: 'Business Courses',
    description: 'Business management, marketing, and entrepreneurship courses',
    type: 'category',
    url: '/courses?category=business',
    category: 'Business',
    tags: ['business', 'management', 'marketing', 'entrepreneurship'],
    relevance: 90
  },
  'language-courses': {
    id: 'language-courses',
    title: 'Language Courses',
    description: 'Learn new languages with our comprehensive language courses',
    type: 'category',
    url: '/courses?category=language',
    category: 'Language',
    tags: ['language', 'languages', 'learning', 'communication'],
    relevance: 90
  },

  // Additional Tools
  'virtual-classroom': {
    id: 'virtual-classroom',
    title: 'Virtual Classrooms',
    description: 'Join live virtual classrooms and interactive learning sessions',
    type: 'feature',
    url: '/virtual-classroom',
    category: 'Learning',
    tags: ['virtual', 'classroom', 'live', 'interactive'],
    relevance: 85
  },
  'certificate-generator': {
    id: 'certificate-generator',
    title: 'Certificate Generator',
    description: 'Generate and download completion certificates for your courses',
    type: 'tool',
    url: '/certificate-generator',
    category: 'Certification',
    tags: ['certificate', 'generator', 'download', 'completion'],
    relevance: 80
  },
  'analytics': {
    id: 'analytics',
    title: 'Analytics',
    description: 'Track your learning progress and performance analytics',
    type: 'page',
    url: '/dashboard/analytics',
    category: 'Analytics',
    tags: ['analytics', 'progress', 'performance', 'tracking'],
    relevance: 85
  }
};

// Search function with fuzzy matching and relevance scoring
export const searchContent = (query: string): SearchResult[] => {
  if (!query.trim()) return [];

  const searchTerm = query.toLowerCase().trim();
  const results: SearchResult[] = [];

  // Search through all indexed content
  Object.values(searchIndex).forEach(item => {
    let score = 0;
    const searchableText = `${item.title} ${item.description} ${item.tags?.join(' ') || ''} ${item.category || ''}`.toLowerCase();

    // Exact title match (highest priority)
    if (item.title.toLowerCase().includes(searchTerm)) {
      score += 100;
    }

    // Exact description match
    if (item.description.toLowerCase().includes(searchTerm)) {
      score += 50;
    }

    // Tag matches
    if (item.tags?.some(tag => tag.toLowerCase().includes(searchTerm))) {
      score += 30;
    }

    // Category match
    if (item.category?.toLowerCase().includes(searchTerm)) {
      score += 20;
    }

    // Partial word matches
    const words = searchTerm.split(' ');
    words.forEach(word => {
      if (searchableText.includes(word)) {
        score += 10;
      }
    });

    // Fuzzy matching for typos
    if (fuzzyMatch(searchableText, searchTerm)) {
      score += 5;
    }

    if (score > 0) {
      results.push({
        ...item,
        relevance: score + item.relevance
      });
    }
  });

  // Sort by relevance and return top results
  return results
    .sort((a, b) => b.relevance - a.relevance)
    .slice(0, 10);
};

// Simple fuzzy matching function
const fuzzyMatch = (text: string, query: string): boolean => {
  const queryChars = query.split('');
  let textIndex = 0;
  
  for (const char of queryChars) {
    const foundIndex = text.indexOf(char, textIndex);
    if (foundIndex === -1) return false;
    textIndex = foundIndex + 1;
  }
  
  return true;
};

// Get search suggestions based on partial input
export const getSearchSuggestions = (query: string): string[] => {
  if (!query.trim()) return [];

  const suggestions = new Set<string>();
  const searchTerm = query.toLowerCase().trim();

  Object.values(searchIndex).forEach(item => {
    // Add title suggestions
    if (item.title.toLowerCase().includes(searchTerm)) {
      suggestions.add(item.title);
    }

    // Add category suggestions
    if (item.category?.toLowerCase().includes(searchTerm)) {
      suggestions.add(item.category);
    }

    // Add tag suggestions
    item.tags?.forEach(tag => {
      if (tag.toLowerCase().includes(searchTerm)) {
        suggestions.add(tag);
      }
    });
  });

  return Array.from(suggestions).slice(0, 5);
};

// Get popular searches
export const getPopularSearches = (): string[] => {
  return [
    'AI Companion',
    'Create Course',
    'Student Portal',
    'Dashboard',
    'IT Courses',
    'Business Courses',
    'Health Courses',
    'Language Courses',
    'Authoring Tool',
    'Quiz Builder'
  ];
};

// Get recent searches (this would typically come from localStorage or user preferences)
export const getRecentSearches = (): string[] => {
  try {
    const recent = localStorage.getItem('oponmeta-recent-searches');
    return recent ? JSON.parse(recent) : [];
  } catch {
    return [];
  }
};

// Save search to recent searches
export const saveSearch = (query: string): void => {
  try {
    const recent = getRecentSearches();
    const updated = [query, ...recent.filter(q => q !== query)].slice(0, 10);
    localStorage.setItem('oponmeta-recent-searches', JSON.stringify(updated));
  } catch {
    // Ignore localStorage errors
  }
}; 