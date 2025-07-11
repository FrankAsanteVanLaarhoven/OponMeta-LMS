import React, { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { Search, Filter, SortAsc, SortDesc, BookOpen, Users, Briefcase, Zap, Star, Clock, TrendingUp } from 'lucide-react';
import { searchContent, SearchResult } from '@/services/searchService';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const SearchResults: React.FC = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const query = searchParams.get('q') || '';
  
  const [results, setResults] = useState<SearchResult[]>([]);
  const [filteredResults, setFilteredResults] = useState<SearchResult[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedType, setSelectedType] = useState<string>('all');
  const [sortBy, setSortBy] = useState<'relevance' | 'title' | 'type'>('relevance');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc');

  useEffect(() => {
    if (query) {
      setIsLoading(true);
      const searchResults = searchContent(query);
      setResults(searchResults);
      setFilteredResults(searchResults);
      setIsLoading(false);
    }
  }, [query]);

  useEffect(() => {
    let filtered = results;

    // Filter by type
    if (selectedType !== 'all') {
      filtered = filtered.filter(result => result.type === selectedType);
    }

    // Sort results
    filtered.sort((a, b) => {
      let comparison = 0;
      
      switch (sortBy) {
        case 'relevance':
          comparison = b.relevance - a.relevance;
          break;
        case 'title':
          comparison = a.title.localeCompare(b.title);
          break;
        case 'type':
          comparison = a.type.localeCompare(b.type);
          break;
      }

      return sortOrder === 'desc' ? -comparison : comparison;
    });

    setFilteredResults(filtered);
  }, [results, selectedType, sortBy, sortOrder]);

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'course':
        return <BookOpen className="w-5 h-5 text-blue-500" />;
      case 'page':
        return <Star className="w-5 h-5 text-purple-500" />;
      case 'tool':
        return <Zap className="w-5 h-5 text-orange-500" />;
      case 'companion':
        return <Users className="w-5 h-5 text-green-500" />;
      case 'category':
        return <Briefcase className="w-5 h-5 text-indigo-500" />;
      default:
        return <Star className="w-5 h-5 text-gray-500" />;
    }
  };

  const getTypeLabel = (type: string) => {
    switch (type) {
      case 'course':
        return 'Course';
      case 'page':
        return 'Page';
      case 'tool':
        return 'Tool';
      case 'companion':
        return 'AI Companion';
      case 'category':
        return 'Category';
      default:
        return type;
    }
  };

  const typeFilters = [
    { value: 'all', label: 'All Results' },
    { value: 'course', label: 'Courses' },
    { value: 'page', label: 'Pages' },
    { value: 'tool', label: 'Tools' },
    { value: 'companion', label: 'AI Companions' },
    { value: 'category', label: 'Categories' }
  ];

  const sortOptions = [
    { value: 'relevance', label: 'Relevance' },
    { value: 'title', label: 'Title' },
    { value: 'type', label: 'Type' }
  ];

  if (!query) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-sky-400 via-blue-500 to-indigo-600">
        <Navigation />
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-3xl font-bold text-white mb-4">Search</h1>
          <p className="text-white/80">Enter a search term to get started</p>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-400 via-blue-500 to-indigo-600">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        {/* Search Header */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
          <div className="flex items-center mb-4">
            <Search className="w-6 h-6 text-blue-500 mr-3" />
            <h1 className="text-2xl font-bold text-gray-900">
              Search Results for "{query}"
            </h1>
          </div>
          
          {isLoading ? (
            <div className="text-center py-8">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500 mx-auto"></div>
              <p className="mt-2 text-gray-600">Searching...</p>
            </div>
          ) : (
            <div className="flex items-center justify-between">
              <p className="text-gray-600">
                {filteredResults.length} result{filteredResults.length !== 1 ? 's' : ''} found
              </p>
              
              {/* Filters and Sort */}
              <div className="flex items-center space-x-4">
                {/* Type Filter */}
                <div className="flex items-center space-x-2">
                  <Filter className="w-4 h-4 text-gray-500" />
                  <select
                    value={selectedType}
                    onChange={(e) => setSelectedType(e.target.value)}
                    className="px-3 py-1 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    {typeFilters.map(filter => (
                      <option key={filter.value} value={filter.value}>
                        {filter.label}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Sort */}
                <div className="flex items-center space-x-2">
                  {sortOrder === 'asc' ? (
                    <SortAsc className="w-4 h-4 text-gray-500" />
                  ) : (
                    <SortDesc className="w-4 h-4 text-gray-500" />
                  )}
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value as any)}
                    className="px-3 py-1 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    {sortOptions.map(option => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')}
                    className="px-2"
                  >
                    {sortOrder === 'asc' ? '↑' : '↓'}
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Results */}
        {!isLoading && (
          <div className="space-y-4">
            {filteredResults.length > 0 ? (
              filteredResults.map((result) => (
                <Card key={result.id} className="hover:shadow-lg transition-shadow cursor-pointer">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        {getTypeIcon(result.type)}
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center space-x-2 mb-2">
                          <h3 className="text-lg font-semibold text-gray-900 hover:text-blue-600">
                            {result.title}
                          </h3>
                          <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                            {getTypeLabel(result.type)}
                          </span>
                          {result.category && (
                            <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                              {result.category}
                            </span>
                          )}
                        </div>
                        
                        <p className="text-gray-600 mb-3">
                          {result.description}
                        </p>
                        
                        {result.tags && result.tags.length > 0 && (
                          <div className="flex flex-wrap gap-1 mb-3">
                            {result.tags.slice(0, 5).map((tag, index) => (
                              <span
                                key={index}
                                className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-gray-100 text-gray-700"
                              >
                                {tag}
                              </span>
                            ))}
                            {result.tags.length > 5 && (
                              <span className="text-xs text-gray-500">
                                +{result.tags.length - 5} more
                              </span>
                            )}
                          </div>
                        )}
                        
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-4 text-sm text-gray-500">
                            <span>Relevance: {result.relevance}</span>
                          </div>
                          
                          <Button
                            onClick={() => navigate(result.url)}
                            className="bg-blue-600 hover:bg-blue-700 text-white"
                          >
                            View
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))
            ) : (
              <Card className="text-center py-12">
                <CardContent>
                  <Search className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 mb-2">
                    No results found for "{query}"
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Try different keywords or browse our categories
                  </p>
                  
                  <div className="flex flex-wrap justify-center gap-2">
                    <Button
                      onClick={() => navigate('/courses')}
                      variant="outline"
                      className="flex items-center space-x-2"
                    >
                      <BookOpen className="w-4 h-4" />
                      <span>Browse Courses</span>
                    </Button>
                    <Button
                      onClick={() => navigate('/companion')}
                      variant="outline"
                      className="flex items-center space-x-2"
                    >
                      <Users className="w-4 h-4" />
                      <span>AI Companion</span>
                    </Button>
                    <Button
                      onClick={() => navigate('/dashboard')}
                      variant="outline"
                      className="flex items-center space-x-2"
                    >
                      <Star className="w-4 h-4" />
                      <span>Dashboard</span>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        )}

        {/* Search Suggestions */}
        {!isLoading && filteredResults.length > 0 && (
          <div className="mt-8 bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Related Searches
            </h3>
            <div className="flex flex-wrap gap-2">
              {['AI Companion', 'Create Course', 'Student Portal', 'Dashboard', 'Authoring Tool'].map((suggestion) => (
                <Button
                  key={suggestion}
                  variant="outline"
                  size="sm"
                  onClick={() => navigate(`/search?q=${encodeURIComponent(suggestion)}`)}
                  className="flex items-center space-x-2"
                >
                  <Search className="w-3 h-3" />
                  <span>{suggestion}</span>
                </Button>
              ))}
            </div>
          </div>
        )}
      </div>
      
      <Footer />
    </div>
  );
};

export default SearchResults; 