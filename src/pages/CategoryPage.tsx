import { useParams } from 'react-router-dom';
import React from 'react';

const categoryNames = {
  'technology-and-digital-skills': 'Technology and Digital Skills',
  'data-and-analytics': 'Data and Analytics',
  'health-and-healthcare-innovation': 'Health and Healthcare Innovation',
  'cleaning-and-sanitation-services': 'Cleaning and Sanitation Services',
  'environment-and-sustainability': 'Environment and Sustainability',
  'engineering-and-construction': 'Engineering and Construction',
  'business-strategy-and-innovation': 'Business, Strategy and Innovation',
  'agriculture-and-food-system': 'Agriculture and Food System',
  'professional-development-and-leadership': 'Professional Development and Leadership',
  'music-and-sound-production': 'Music and Sound Production',
  'art-design-and-creative-media': 'Art Design and Creative Media',
  'drama-theatre-and-performance': 'Drama, Theatre and Performance',
  'hospitality-tourism-and-events': 'Hospitality, Tourism and Events',
  'sports-fitness-and-wellness': 'Sports, Fitness and Wellness',
  'vocational-and-technical-training': 'Vocational and Technical Training',
  'childhood-studies-and-early-year-education': 'Childhood Studies and Early Year Education',
  'transport-services': 'Transport Services',
  'trade-and-investment': 'Trade and Investment',
  'it': 'IT',
  'health': 'Health',
  'language': 'Language',
  'business': 'Business',
  'management': 'Management',
  'personal-development': 'Personal Development',
  'sales-marketing': 'Sales & Marketing',
  'engineering-construction': 'Engineering & Construction',
  'teaching-academics': 'Teaching & Academics',
};

const unsplashImages = [
  'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80',
  'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80',
  'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80',
  'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
  'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80',
  'https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=crop&w=400&q=80',
  'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80',
  'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80',
];

function generateSampleCourses(categorySlug: string, count = 6) {
  const category = categoryNames[categorySlug] || 'Courses';
  return Array.from({ length: count }).map((_, idx) => ({
    title: `${category} Course ${idx + 1}`,
    description: `A comprehensive introduction to ${category.toLowerCase()}.`,
    duration: `${2 + idx % 3} - ${3 + idx % 3} hrs`,
    learners: `${Math.floor(Math.random() * 80000) + 1000}`,
    level: ['Beginner', 'Intermediate', 'Advanced'][idx % 3],
    image: unsplashImages[idx % unsplashImages.length],
    certificate: true,
  }));
}

export default function CategoryPage() {
  const { categorySlug, subcategorySlug } = useParams();
  const slug = subcategorySlug || categorySlug;
  const categoryName = categoryNames[slug as keyof typeof categoryNames] || 'Courses';
  const courses = generateSampleCourses(slug || '', 8);

  return (
    <div className="max-w-7xl mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-8 text-center">{categoryName}</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {courses.map((course, idx) => (
          <div key={idx} className="bg-white rounded-lg shadow p-4 flex flex-col">
            <img src={course.image} alt={course.title} className="rounded-md h-40 w-full object-cover mb-4" />
            <div className="flex-1">
              <h2 className="text-lg font-semibold mb-1">{course.title}</h2>
              <p className="text-sm text-gray-600 mb-2">{course.description}</p>
              <div className="flex items-center text-xs text-gray-500 mb-2">
                <span className="mr-2">{course.duration}</span>
                <span className="mr-2">|</span>
                <span className="mr-2">{course.learners} learners</span>
                <span className="mr-2">|</span>
                <span>{course.level} Level</span>
              </div>
              {course.certificate && (
                <span className="inline-block bg-green-100 text-green-700 text-xs px-2 py-1 rounded mb-2">Certificate</span>
              )}
            </div>
            <div className="mt-4 flex gap-2">
              <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-3 py-1 rounded">More Info</button>
              <button className="bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded">Start Learning</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 