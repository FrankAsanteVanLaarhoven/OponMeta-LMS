import React, { useState } from 'react';
import { useAppContext } from '../context/AppContext';
import type { Course, Language } from '../../../src/types/content';
import { 
  Plus, 
  Search, 
  Filter, 
  Grid, 
  List, 
  BookOpen, 
  Clock, 
  Users, 
  Star,
  Globe,
  Sparkles,
  Edit,
  Trash2,
  Eye
} from 'lucide-react';

const Courses: React.FC = () => {
  const { language, courses } = useAppContext();
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState('title');

  // Filter and sort courses based on current language and search/filter criteria
  const filteredCourses = courses
    .filter(course => course.language === language)
    .filter(course => 
      course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.category.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter(course => filterCategory === 'all' || course.category === filterCategory)
    .sort((a, b) => {
      switch (sortBy) {
        case 'title':
          return a.title.localeCompare(b.title);
        case 'created':
          return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
        case 'updated':
          return new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime();
        case 'duration':
          return (a.metadata.estimatedHours || 0) - (b.metadata.estimatedHours || 0);
        default:
          return 0;
      }
    });

  const categories = ['all', ...Array.from(new Set(courses.map(c => c.category)))];

  const getLanguageLabel = (lang: Language) => {
    const labels: Record<Language, string> = {
      en: 'English',
      es: 'Español',
      de: 'Deutsch',
      fr: 'Français',
      it: 'Italiano',
      ja: '日本語',
      ko: '한국어',
      nl: 'Nederlands',
      pt: 'Português',
      zh: '中文',
    };
    return labels[lang] || lang;
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'beginner': return 'bg-green-100 text-green-800';
      case 'intermediate': return 'bg-yellow-100 text-yellow-800';
      case 'advanced': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Courses</h1>
              <p className="text-gray-600">
                Managing courses in {getLanguageLabel(language)} ({filteredCourses.length} courses)
              </p>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={() => window.location.href = '/dashboard/ai-course-creator'}
                className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-lg hover:from-purple-700 hover:to-indigo-700 transition-all"
              >
                <Sparkles className="h-4 w-4" />
                AI Create Course
              </button>
              <button
                onClick={() => window.location.href = '/courses/create'}
                className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-all"
              >
                <Plus className="h-4 w-4" />
                Create Course
              </button>
            </div>
          </div>

          {/* Search and Filters */}
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <input
                type="text"
                placeholder="Search courses..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              />
            </div>
            
            <div className="flex items-center gap-3">
              <select
                value={filterCategory}
                onChange={(e) => setFilterCategory(e.target.value)}
                className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              >
                {categories.map(category => (
                  <option key={category} value={category}>
                    {category === 'all' ? 'All Categories' : category.charAt(0).toUpperCase() + category.slice(1)}
                  </option>
                ))}
              </select>
              
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              >
                <option value="title">Sort by Title</option>
                <option value="created">Sort by Created Date</option>
                <option value="updated">Sort by Updated Date</option>
                <option value="duration">Sort by Duration</option>
              </select>
              
              <div className="flex border border-gray-300 rounded-lg">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 ${viewMode === 'grid' ? 'bg-indigo-100 text-indigo-600' : 'text-gray-500'}`}
                >
                  <Grid className="h-4 w-4" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 ${viewMode === 'list' ? 'bg-indigo-100 text-indigo-600' : 'text-gray-500'}`}
                >
                  <List className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Courses Grid/List */}
        {filteredCourses.length === 0 ? (
          <div className="text-center py-12">
            <BookOpen className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No courses found</h3>
            <p className="text-gray-600 mb-6">
              {searchTerm || filterCategory !== 'all' 
                ? 'Try adjusting your search or filter criteria.'
                : 'Get started by creating your first course.'
              }
            </p>
            <button
              onClick={() => window.location.href = '/dashboard/ai-course-creator'}
              className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
            >
              <Sparkles className="h-4 w-4" />
              Create with AI
            </button>
          </div>
        ) : viewMode === 'grid' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCourses.map((course) => (
              <div key={course.id} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <Globe className="h-4 w-4 text-gray-400" />
                      <span className="text-xs text-gray-500">{getLanguageLabel(course.language)}</span>
                    </div>
                    {course.category === 'ai-generated' && (
                      <Sparkles className="h-4 w-4 text-purple-500" />
                    )}
                  </div>
                  
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
                    {course.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {course.description}
                  </p>
                  
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span>{course.metadata.estimatedHours || 0}h</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="h-4 w-4" />
                      <span>{course.metadata.modules?.length || 0} modules</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between mb-4">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(course.metadata.difficulty)}`}>
                      {course.metadata.difficulty}
                    </span>
                    <span className="text-xs text-gray-500">
                      {new Date(course.createdAt).toLocaleDateString()}
                    </span>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <button className="flex-1 flex items-center justify-center gap-1 px-3 py-2 bg-indigo-50 text-indigo-600 rounded-md hover:bg-indigo-100 text-sm">
                      <Eye className="h-4 w-4" />
                      View
                    </button>
                    <button className="flex-1 flex items-center justify-center gap-1 px-3 py-2 bg-gray-50 text-gray-600 rounded-md hover:bg-gray-100 text-sm">
                      <Edit className="h-4 w-4" />
                      Edit
                    </button>
                    <button className="px-3 py-2 bg-red-50 text-red-600 rounded-md hover:bg-red-100 text-sm">
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Course</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Duration</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Difficulty</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Created</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {filteredCourses.map((course) => (
                    <tr key={course.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div>
                          <div className="flex items-center gap-2">
                            <h4 className="text-sm font-medium text-gray-900">{course.title}</h4>
                            {course.category === 'ai-generated' && (
                              <Sparkles className="h-4 w-4 text-purple-500" />
                            )}
                          </div>
                          <p className="text-sm text-gray-500 line-clamp-1">{course.description}</p>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {course.category}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {course.metadata.estimatedHours || 0}h
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(course.metadata.difficulty)}`}>
                          {course.metadata.difficulty}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          course.status === 'published' ? 'bg-green-100 text-green-800' :
                          course.status === 'draft' ? 'bg-yellow-100 text-yellow-800' :
                          'bg-gray-100 text-gray-800'
                        }`}>
                          {course.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {new Date(course.createdAt).toLocaleDateString()}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <div className="flex items-center gap-2">
                          <button className="text-indigo-600 hover:text-indigo-900">View</button>
                          <button className="text-gray-600 hover:text-gray-900">Edit</button>
                          <button className="text-red-600 hover:text-red-900">Delete</button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Courses; 