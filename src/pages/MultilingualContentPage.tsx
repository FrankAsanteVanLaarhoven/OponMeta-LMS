import React, { useState, useEffect } from 'react';
import { useParams, useSearchParams, Link } from 'react-router-dom';
import { useMultilingualContent, useContentStats } from '../hooks/useMultilingualContent';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Search, Globe, FileText, BookOpen, GraduationCap } from 'lucide-react';

interface MultilingualContentPageProps {
  language?: string;
  type?: 'page' | 'blog' | 'rto-qualification';
  slug?: string;
}

export default function MultilingualContentPage({ 
  language: propLanguage, 
  type: propType, 
  slug: propSlug 
}: MultilingualContentPageProps = {}) {
  const params = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  
  // Get parameters from URL or props
  const language = propLanguage || params.language || searchParams.get('lang') || 'en';
  const type = propType || params.type || searchParams.get('type') || undefined;
  const slug = propSlug || params.slug || searchParams.get('slug') || undefined;
  const search = searchParams.get('q') || '';

  const [selectedLanguage, setSelectedLanguage] = useState(language);
  const [selectedType, setSelectedType] = useState<'page' | 'blog' | 'rto-qualification' | undefined>(type as any);
  const [searchQuery, setSearchQuery] = useState(search);

  const stats = useContentStats();
  const { content, getAvailableLanguages, totalCount } = useMultilingualContent({
    language: selectedLanguage,
    type: selectedType,
    search: searchQuery || undefined,
    limit: 20
  });

  const availableLanguages = getAvailableLanguages();

  // Update URL when filters change
  useEffect(() => {
    const newSearchParams = new URLSearchParams();
    if (selectedLanguage) newSearchParams.set('lang', selectedLanguage);
    if (selectedType) newSearchParams.set('type', selectedType);
    if (searchQuery) newSearchParams.set('q', searchQuery);
    setSearchParams(newSearchParams);
  }, [selectedLanguage, selectedType, searchQuery, setSearchParams]);

  // Handle search
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setSearchQuery(searchQuery);
  };

  const getTypeIcon = (contentType: string) => {
    switch (contentType) {
      case 'page': return <FileText className="w-4 h-4" />;
      case 'blog': return <BookOpen className="w-4 h-4" />;
      case 'rto-qualification': return <GraduationCap className="w-4 h-4" />;
      default: return <FileText className="w-4 h-4" />;
    }
  };

  const getTypeColor = (contentType: string) => {
    switch (contentType) {
      case 'page': return 'bg-blue-100 text-blue-800';
      case 'blog': return 'bg-green-100 text-green-800';
      case 'rto-qualification': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto p-6">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Multilingual Content Library
          </h1>
          <p className="text-lg text-gray-600">
            Explore {stats.totalFiles} pieces of content across {stats.languages.length} languages
          </p>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-lg shadow-sm border p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* Language Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Language
              </label>
              <Select value={selectedLanguage} onValueChange={setSelectedLanguage}>
                <SelectTrigger>
                  <SelectValue placeholder="Select language" />
                </SelectTrigger>
                <SelectContent>
                  {availableLanguages.map((lang) => (
                    <SelectItem key={lang} value={lang}>
                      <div className="flex items-center gap-2">
                        <Globe className="w-4 h-4" />
                        {lang.toUpperCase()}
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Type Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Content Type
              </label>
              <Select value={selectedType || 'all'} onValueChange={(value) => setSelectedType(value === 'all' ? undefined : value as any)}>
                <SelectTrigger>
                  <SelectValue placeholder="All types" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All types</SelectItem>
                  <SelectItem value="page">Pages</SelectItem>
                  <SelectItem value="blog">Blog Posts</SelectItem>
                  <SelectItem value="rto-qualification">RTO Qualifications</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Search */}
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Search Content
              </label>
              <form onSubmit={handleSearch} className="flex gap-2">
                <Input
                  type="text"
                  placeholder="Search titles, descriptions, or content..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="flex-1"
                />
                <Button type="submit" size="sm">
                  <Search className="w-4 h-4" />
                </Button>
              </form>
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="mb-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-semibold text-gray-900">
              {searchQuery ? `Search Results for "${searchQuery}"` : 'Content'}
            </h2>
            <p className="text-sm text-gray-600">
              Showing {content.length} of {totalCount} results
            </p>
          </div>
        </div>

        {/* Content Grid */}
        {content.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {content.map((item) => (
              <Card key={item.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="text-lg line-clamp-2 mb-2">
                        {item.title}
                      </CardTitle>
                      <div className="flex items-center gap-2 mb-2">
                        <Badge className={getTypeColor(item.type)}>
                          <div className="flex items-center gap-1">
                            {getTypeIcon(item.type)}
                            {item.type.replace('-', ' ')}
                          </div>
                        </Badge>
                        <Badge variant="outline">
                          {item.language.toUpperCase()}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="line-clamp-3 mb-4">
                    {item.description || 'No description available'}
                  </CardDescription>
                  
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-gray-500">
                      {item.content.length > 100 ? 
                        `${Math.round(item.content.length / 100)} min read` : 
                        'Quick read'
                      }
                    </div>
                    <Link 
                      to={`/content/${item.language}/${item.type}/${item.slug}`}
                      className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                    >
                      Read More →
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <Search className="w-16 h-16 mx-auto" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              No content found
            </h3>
            <p className="text-gray-600">
              Try adjusting your search terms or filters
            </p>
          </div>
        )}
      </div>
    </div>
  );
} 