import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { searchService, SearchResult, SearchOptions } from '../services/searchService';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { Skeleton } from '../components/ui/skeleton';
import { Search, Globe, FileText, BookOpen, GraduationCap, Clock, Tag, TrendingUp } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

export default function SearchResults() {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('q') || '';
  const language = searchParams.get('lang') || '';
  const type = searchParams.get('type') || '';

  const [results, setResults] = useState<SearchResult[]>([]);
  const [loading, setLoading] = useState(false);
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [popularSearches, setPopularSearches] = useState<string[]>([]);
  const [stats, setStats] = useState<any>(null);

  const [searchQuery, setSearchQuery] = useState(query);
  const [selectedLanguage, setSelectedLanguage] = useState(language);
  const [selectedType, setSelectedType] = useState(type);

  useEffect(() => {
    if (query) {
      performSearch();
    }
    loadSuggestions();
    loadPopularSearches();
    loadStats();
  }, [query, language, type]);

  const performSearch = async () => {
    if (!query.trim()) return;

    setLoading(true);
    try {
      const searchOptions: SearchOptions = {
        query,
        language: selectedLanguage || undefined,
        type: selectedType as any || undefined,
        limit: 50,
        includeContent: true
      };

      const searchResults = await searchService.search(searchOptions);
      setResults(searchResults);
    } catch (error) {
      console.error('Search error:', error);
    } finally {
      setLoading(false);
    }
  };

  const loadSuggestions = async () => {
    if (query) {
      const suggestions = await searchService.getSuggestions(query);
      setSuggestions(suggestions);
    }
  };

  const loadPopularSearches = async () => {
    const popular = await searchService.getPopularSearches();
    setPopularSearches(popular);
  };

  const loadStats = async () => {
    const searchStats = await searchService.getSearchStats();
    setStats(searchStats);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const newSearchParams = new URLSearchParams();
    newSearchParams.set('q', searchQuery);
    if (selectedLanguage) newSearchParams.set('lang', selectedLanguage);
    if (selectedType) newSearchParams.set('type', selectedType);
    setSearchParams(newSearchParams);
  };

  const handleSuggestionClick = (suggestion: string) => {
    setSearchQuery(suggestion);
    const newSearchParams = new URLSearchParams();
    newSearchParams.set('q', suggestion);
    if (selectedLanguage) newSearchParams.set('lang', selectedLanguage);
    if (selectedType) newSearchParams.set('type', selectedType);
    setSearchParams(newSearchParams);
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
    <>
      <Helmet>
        <title>{query ? `Search: ${query}` : 'Search'} | Our Platform</title>
        <meta name="description" content={`Search results for "${query}" across our multilingual content library`} />
      </Helmet>

      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto p-6">
          {/* Search Header */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-2">
              {query ? `Search Results for "${query}"` : 'Search Content'}
            </h1>
            {stats && (
              <p className="text-lg text-gray-600">
                Searching across {stats.totalContent} pieces of content in {stats.languages.length} languages
              </p>
            )}
          </div>

          {/* Search Form */}
          <div className="bg-white rounded-lg shadow-sm border p-6 mb-8">
            <form onSubmit={handleSearch} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                {/* Search Input */}
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Search Query
                  </label>
                  <div className="flex gap-2">
                    <Input
                      type="text"
                      placeholder="Search titles, descriptions, or content..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="flex-1"
                    />
                    <Button type="submit" disabled={loading}>
                      <Search className="w-4 h-4" />
                    </Button>
                  </div>
                </div>

                {/* Language Filter */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Language
                  </label>
                  <Select value={selectedLanguage || 'all'} onValueChange={(value) => setSelectedLanguage(value === 'all' ? undefined : value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="All languages" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All languages</SelectItem>
                      <SelectItem value="en">English</SelectItem>
                      <SelectItem value="de">German</SelectItem>
                      <SelectItem value="fr">French</SelectItem>
                      <SelectItem value="es">Spanish</SelectItem>
                      <SelectItem value="it">Italian</SelectItem>
                      <SelectItem value="pt">Portuguese</SelectItem>
                      <SelectItem value="zh">Chinese</SelectItem>
                      <SelectItem value="ja">Japanese</SelectItem>
                      <SelectItem value="ko">Korean</SelectItem>
                      <SelectItem value="nl">Dutch</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Type Filter */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Content Type
                  </label>
                  <Select value={selectedType || 'all'} onValueChange={(value) => setSelectedType(value === 'all' ? undefined : value)}>
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
              </div>
            </form>

            {/* Search Suggestions */}
            {suggestions.length > 0 && (
              <div className="mt-4 pt-4 border-t">
                <p className="text-sm text-gray-600 mb-2">Suggestions:</p>
                <div className="flex flex-wrap gap-2">
                  {suggestions.map((suggestion, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      size="sm"
                      onClick={() => handleSuggestionClick(suggestion)}
                      className="text-xs"
                    >
                      {suggestion}
                    </Button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Results */}
          {loading ? (
            <div className="space-y-6">
              {[...Array(6)].map((_, i) => (
                <Card key={i}>
                  <CardHeader>
                    <Skeleton className="h-6 w-3/4" />
                    <Skeleton className="h-4 w-1/2" />
                  </CardHeader>
                  <CardContent>
                    <Skeleton className="h-4 w-full mb-2" />
                    <Skeleton className="h-4 w-2/3" />
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : query ? (
            <div>
              {/* Results Header */}
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-semibold text-gray-900">
                  {results.length} results found
                </h2>
                {results.length > 0 && (
                  <p className="text-sm text-gray-600">
                    Sorted by relevance
                  </p>
                )}
              </div>

              {/* Results List */}
              {results.length > 0 ? (
                <div className="space-y-6">
                  {results.map((result) => (
                    <Card key={result.id} className="hover:shadow-lg transition-shadow">
                      <CardHeader>
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              <Badge className={getTypeColor(result.type)}>
                                <div className="flex items-center gap-1">
                                  {getTypeIcon(result.type)}
                                  {result.type.replace('-', ' ')}
                                </div>
                              </Badge>
                              <Badge variant="outline">
                                <div className="flex items-center gap-1">
                                  <Globe className="w-3 h-3" />
                                  {result.language.toUpperCase()}
                                </div>
                              </Badge>
                              {result.metadata?.readingTime && (
                                <div className="flex items-center gap-1 text-sm text-gray-500">
                                  <Clock className="w-3 h-3" />
                                  {result.metadata.readingTime}
                                </div>
                              )}
                            </div>
                            <CardTitle className="text-xl mb-2">
                              <Link 
                                to={result.url}
                                className="text-blue-600 hover:text-blue-800 hover:underline"
                              >
                                {result.title}
                              </Link>
                            </CardTitle>
                            <CardDescription className="text-base">
                              {result.description}
                            </CardDescription>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-700 mb-4">
                          {result.excerpt}
                        </p>
                        
                        {/* Tags */}
                        {result.metadata?.tags && result.metadata.tags.length > 0 && (
                          <div className="flex items-center gap-2 mb-4">
                            <Tag className="w-4 h-4 text-gray-400" />
                            <div className="flex flex-wrap gap-1">
                              {result.metadata.tags.map((tag, index) => (
                                <Badge key={index} variant="secondary" className="text-xs">
                                  {tag}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        )}

                        <div className="flex items-center justify-between">
                          <div className="text-sm text-gray-500">
                            Relevance: {Math.round(result.relevance * 10) / 10}
                          </div>
                          <Link 
                            to={result.url}
                            className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                          >
                            Read Full Content →
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
                    No results found for "{query}"
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Try adjusting your search terms or filters
                  </p>
                  
                  {/* Popular Searches */}
                  {popularSearches.length > 0 && (
                    <div>
                      <p className="text-sm text-gray-600 mb-3">Popular searches:</p>
                      <div className="flex flex-wrap justify-center gap-2">
                        {popularSearches.map((search, index) => (
                          <Button
                            key={index}
                            variant="outline"
                            size="sm"
                            onClick={() => handleSuggestionClick(search)}
                          >
                            <TrendingUp className="w-3 h-3 mr-1" />
                            {search}
                          </Button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          ) : (
            /* Empty State */
            <div className="text-center py-12">
              <div className="text-gray-400 mb-4">
                <Search className="w-16 h-16 mx-auto" />
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                Start searching
              </h3>
              <p className="text-gray-600 mb-6">
                Enter a search term to find content across our multilingual library
              </p>
              
              {/* Popular Searches */}
              {popularSearches.length > 0 && (
                <div>
                  <p className="text-sm text-gray-600 mb-3">Popular searches:</p>
                  <div className="flex flex-wrap justify-center gap-2">
                    {popularSearches.map((search, index) => (
                      <Button
                        key={index}
                        variant="outline"
                        size="sm"
                        onClick={() => handleSuggestionClick(search)}
                      >
                        <TrendingUp className="w-3 h-3 mr-1" />
                        {search}
                      </Button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );
} 