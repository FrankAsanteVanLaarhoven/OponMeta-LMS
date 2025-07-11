import { Companion } from '../types/companion';

export const subjects = [
  "mathematics",
  "language",
  "science",
  "history",
  "coding",
  "economics",
  "business",
  "technology",
  "health",
  "arts"
];

export const subjectsColors = {
  science: "#E5D0FF",
  mathematics: "#FFDA6E",
  language: "#BDE7FF",
  coding: "#FFC8E4",
  history: "#FFECC8",
  economics: "#C8FFDF",
  business: "#FFB3BA",
  technology: "#B8E6B8",
  health: "#FFD700",
  arts: "#DDA0DD"
};

export const voices = {
  male: { casual: "2BJW5coyhAzSr8STdHbE", formal: "c6SfcYrb2t09NHXiT80T" },
  female: { casual: "ZIlrSGI4jZqobxRKprJz", formal: "sarah" },
};

export const recentSessions: Companion[] = [
  {
    id: "1",
    subject: "science",
    name: "Neura the Brainy Explorer",
    topic: "Neural Network of the Brain",
    description: "Explore the fascinating world of neural networks and brain science",
    duration: 45,
    style: "casual",
    voice: "female"
  },
  {
    id: "2",
    subject: "mathematics",
    name: "Countsy the Number Wizard",
    topic: "Derivatives & Integrals",
    description: "Master calculus concepts with interactive problem solving",
    duration: 30,
    style: "formal",
    voice: "male"
  },
  {
    id: "3",
    subject: "language",
    name: "Verba the Vocabulary Builder",
    topic: "English Literature",
    description: "Enhance your language skills through classic literature",
    duration: 30,
    style: "casual",
    voice: "female"
  },
  {
    id: "4",
    subject: "coding",
    name: "Codey the Logic Hacker",
    topic: "Intro to If-Else Statements",
    description: "Learn programming fundamentals with hands-on coding",
    duration: 45,
    style: "casual",
    voice: "male"
  },
  {
    id: "5",
    subject: "history",
    name: "Memo, the Memory Keeper",
    topic: "World Wars: Causes & Consequences",
    description: "Journey through history to understand major world events",
    duration: 15,
    style: "formal",
    voice: "male"
  },
  {
    id: "6",
    subject: "economics",
    name: "The Market Maestro",
    topic: "The Basics of Supply & Demand",
    description: "Understand economic principles through real-world examples",
    duration: 10,
    style: "casual",
    voice: "female"
  },
  {
    id: "7",
    subject: "business",
    name: "Bizzy the Business Strategist",
    topic: "Strategic Management",
    description: "Learn business strategy and management principles",
    duration: 25,
    style: "formal",
    voice: "male"
  },
  {
    id: "8",
    subject: "technology",
    name: "Techy the Innovation Guide",
    topic: "Emerging Technologies",
    description: "Explore cutting-edge technologies and their applications",
    duration: 35,
    style: "casual",
    voice: "female"
  },
  {
    id: "9",
    subject: "health",
    name: "Vita the Wellness Coach",
    topic: "Nutrition and Fitness",
    description: "Learn about health, nutrition, and fitness fundamentals",
    duration: 20,
    style: "casual",
    voice: "female"
  },
  {
    id: "10",
    subject: "arts",
    name: "Arty the Creative Muse",
    topic: "Digital Art Fundamentals",
    description: "Discover your creative potential through digital art",
    duration: 40,
    style: "casual",
    voice: "male"
  }
];

export const sampleCompanions: Companion[] = [
  ...recentSessions,
  {
    id: "11",
    subject: "mathematics",
    name: "Algebro the Equation Solver",
    topic: "Linear Algebra",
    description: "Master linear algebra concepts and matrix operations",
    duration: 50,
    style: "formal",
    voice: "male"
  },
  {
    id: "12",
    subject: "science",
    name: "Chemy the Molecular Explorer",
    topic: "Organic Chemistry",
    description: "Dive into the world of organic chemistry and molecular structures",
    duration: 55,
    style: "formal",
    voice: "female"
  },
  {
    id: "13",
    subject: "coding",
    name: "Python the Snake Charmer",
    topic: "Python Programming",
    description: "Learn Python programming from basics to advanced concepts",
    duration: 60,
    style: "casual",
    voice: "male"
  },
  {
    id: "14",
    subject: "language",
    name: "Lingua the Polyglot",
    topic: "Spanish for Beginners",
    description: "Start your Spanish learning journey with interactive conversations",
    duration: 25,
    style: "casual",
    voice: "female"
  },
  {
    id: "15",
    subject: "history",
    name: "Chrono the Time Traveler",
    topic: "Ancient Civilizations",
    description: "Explore ancient civilizations and their contributions to humanity",
    duration: 45,
    style: "formal",
    voice: "male"
  }
];

export const getSubjectColor = (subject: string): string => {
  return subjectsColors[subject as keyof typeof subjectsColors] || "#E5E5E5";
};

export const getSubjectIcon = (subject: string): string => {
  const iconMap: Record<string, string> = {
    mathematics: "🧮",
    language: "📚",
    science: "🔬",
    history: "📜",
    coding: "💻",
    economics: "💰",
    business: "💼",
    technology: "⚡",
    health: "🏥",
    arts: "🎨"
  };
  return iconMap[subject] || "📖";
};

export const getSubjectDescription = (subject: string): string => {
  const descriptions: Record<string, string> = {
    mathematics: "Master mathematical concepts and problem-solving skills",
    language: "Enhance language skills and communication abilities",
    science: "Explore scientific principles and discoveries",
    history: "Journey through historical events and their significance",
    coding: "Learn programming and software development",
    economics: "Understand economic principles and market dynamics",
    business: "Develop business acumen and management skills",
    technology: "Stay updated with latest technological advancements",
    health: "Learn about health, wellness, and medical concepts",
    arts: "Express creativity through various art forms"
  };
  return descriptions[subject] || "Explore new topics and expand your knowledge";
}; 