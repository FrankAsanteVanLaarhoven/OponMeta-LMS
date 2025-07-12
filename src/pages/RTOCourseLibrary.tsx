import React, { useState, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { Search, Filter, BookOpen, Clock, Users, Star } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { multilingualContentService } from '@/utils/multilingualContent';
import { ExtractedContent } from '@/types/content';

const RTOCourseLibrary: React.FC = () => {
  const { t } = useTranslation();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState<string>('all');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  // Get all RTO courses
  const allRTOCourses = useMemo(() => {
    return multilingualContentService.getAllContent().filter(
      content => content.type === 'rto-qualification'
    );
  }, []);

  // Filter courses based on search and filters
  const filteredCourses = useMemo(() => {
    return allRTOCourses.filter(course => {
      const matchesSearch = searchQuery === '' || 
        course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.excerpt?.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesLanguage = selectedLanguage === 'all' || course.language === selectedLanguage;
      
      // For category, we'll use the first tag or a default category
      const courseCategory = course.tags?.[0] || 'general';
      const matchesCategory = selectedCategory === 'all' || courseCategory === selectedCategory;
      
      return matchesSearch && matchesLanguage && matchesCategory;
    });
  }, [allRTOCourses, searchQuery, selectedLanguage, selectedCategory]);

  // Get unique categories from tags
  const categories = useMemo(() => {
    const allTags = allRTOCourses.flatMap(course => course.tags || []);
    return ['all', ...Array.from(new Set(allTags))];
  }, [allRTOCourses]);

  // Get unique languages
  const languages = useMemo(() => {
    const allLanguages = allRTOCourses.map(course => course.language);
    return ['all', ...Array.from(new Set(allLanguages))];
  }, [allRTOCourses]);

  const getLanguageName = (code: string) => {
    const languageNames: Record<string, string> = {
      'en': 'English',
      'de': 'German',
      'fr': 'French',
      'es': 'Spanish',
      'it': 'Italian',
      'pt': 'Portuguese',
      'nl': 'Dutch',
      'ja': 'Japanese',
      'ko': 'Korean',
      'zh': 'Chinese',
      'ar': 'Arabic'
    };
    return languageNames[code] || code;
  };

  const getCategoryName = (category: string) => {
    if (category === 'all') return 'All Categories';
    return category.charAt(0).toUpperCase() + category.slice(1);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            RTO Course Library
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover comprehensive Registered Training Organization (RTO) courses and qualifications. 
            Find nationally recognized training programs for vocational education and compliance.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="Search RTO courses..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>

            {/* Language Filter */}
            <Select value={selectedLanguage} onValueChange={setSelectedLanguage}>
              <SelectTrigger>
                <SelectValue placeholder="All Languages" />
              </SelectTrigger>
              <SelectContent>
                {languages.map(lang => (
                  <SelectItem key={lang} value={lang}>
                    {lang === 'all' ? 'All Languages' : getLanguageName(lang)}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            {/* Category Filter */}
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger>
                <SelectValue placeholder="All Categories" />
              </SelectTrigger>
              <SelectContent>
                {categories.map(category => (
                  <SelectItem key={category} value={category}>
                    {getCategoryName(category)}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            {/* Clear Filters */}
            <Button
              variant="outline"
              onClick={() => {
                setSearchQuery('');
                setSelectedLanguage('all');
                setSelectedCategory('all');
              }}
              className="w-full"
            >
              Clear Filters
            </Button>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-gray-600">
            Showing {filteredCourses.length} of {allRTOCourses.length} RTO courses
          </p>
        </div>

        {/* Course Grid */}
        {filteredCourses.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCourses.map((course) => (
              <RTOCourseCard key={course.id} course={course} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <BookOpen className="mx-auto h-12 w-12 text-gray-400 mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No courses found</h3>
            <p className="text-gray-600">
              Try adjusting your search criteria or filters to find RTO courses.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

// RTO Course Card Component
interface RTOCourseCardProps {
  course: ExtractedContent;
}

const RTOCourseCard: React.FC<RTOCourseCardProps> = ({ course }) => {
  const getLanguageName = (code: string) => {
    const languageNames: Record<string, string> = {
      'en': 'English',
      'de': 'German',
      'fr': 'French',
      'es': 'Spanish',
      'it': 'Italian',
      'pt': 'Portuguese',
      'nl': 'Dutch',
      'ja': 'Japanese',
      'ko': 'Korean',
      'zh': 'Chinese',
      'ar': 'Arabic'
    };
    return languageNames[code] || code;
  };

  const getReadingTime = (content: string) => {
    const wordsPerMinute = 200;
    const wordCount = content.split(/\s+/).length;
    const minutes = Math.ceil(wordCount / wordsPerMinute);
    return `${minutes} min read`;
  };

  return (
    <Card className="h-full hover:shadow-lg transition-shadow duration-300 cursor-pointer group">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <CardTitle className="text-lg font-semibold line-clamp-2 group-hover:text-blue-600 transition-colors">
              {course.title}
            </CardTitle>
            <CardDescription className="mt-2 line-clamp-2">
              {course.excerpt}
            </CardDescription>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="pt-0">
        {/* Tags */}
        {course.tags && course.tags.length > 0 && (
          <div className="flex flex-wrap gap-1 mb-3">
            {course.tags.slice(0, 3).map((tag, index) => (
              <Badge key={index} variant="secondary" className="text-xs">
                {tag}
              </Badge>
            ))}
            {course.tags.length > 3 && (
              <Badge variant="outline" className="text-xs">
                +{course.tags.length - 3} more
              </Badge>
            )}
          </div>
        )}

        {/* Course Details */}
        <div className="space-y-2 text-sm text-gray-600">
          <div className="flex items-center gap-2">
            <Users className="h-4 w-4" />
            <span>RTO Qualification</span>
          </div>
          
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4" />
            <span>{getReadingTime(course.content || '')}</span>
          </div>
          
          <div className="flex items-center gap-2">
            <Star className="h-4 w-4" />
            <span>{getLanguageName(course.language)}</span>
          </div>
        </div>

        {/* Action Button */}
        <Button 
          className="w-full mt-4" 
          onClick={() => {
            window.location.href = `/content/${course.language}/${course.type}/${course.slug}`;
          }}
        >
          View Course Details
        </Button>
      </CardContent>
    </Card>
  );
};

export default RTOCourseLibrary; 