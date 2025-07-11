import React, { useState, useMemo } from 'react';
import { useAppContext } from '../context/AppContext';
import { sampleCompanions, getSubjectColor } from '../data/companionsData';
import CompanionCard from '../components/companions/CompanionCard';
import SearchInput from '../components/companions/SearchInput';
import SubjectFilter from '../components/companions/SubjectFilter';
import { 
  Brain, 
  Search, 
  Filter, 
  Grid, 
  List,
  BookOpen,
  Clock,
  Users,
  TrendingUp
} from 'lucide-react';

const CompanionsLibrary: React.FC = () => {
  const { language } = useAppContext();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSubject, setSelectedSubject] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [bookmarkedCompanions, setBookmarkedCompanions] = useState<string[]>([]);

  // Filter companions based on search and subject
  const filteredCompanions = useMemo(() => {
    return sampleCompanions.filter(companion => {
      const matchesSearch = searchQuery === '' || 
        companion.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        companion.topic.toLowerCase().includes(searchQuery.toLowerCase()) ||
        companion.description.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesSubject = selectedSubject === '' || companion.subject === selectedSubject;
      
      return matchesSearch && matchesSubject;
    });
  }, [searchQuery, selectedSubject]);

  const handleBookmarkToggle = (companionId: string) => {
    setBookmarkedCompanions(prev => 
      prev.includes(companionId) 
        ? prev.filter(id => id !== companionId)
        : [...prev, companionId]
    );
  };

  const stats = {
    total: sampleCompanions.length,
    subjects: new Set(sampleCompanions.map(c => c.subject)).size,
    totalDuration: sampleCompanions.reduce((sum, c) => sum + c.duration, 0),
    bookmarked: bookmarkedCompanions.length
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg">
              <Brain className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">AI Learning Companions</h1>
              <p className="text-gray-600">Interactive AI tutors for personalized learning experiences</p>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <div className="flex items-center gap-3">
                <BookOpen className="h-8 w-8 text-blue-500" />
                <div>
                  <p className="text-2xl font-bold text-gray-900">{stats.total}</p>
                  <p className="text-sm text-gray-600">Total Companions</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <div className="flex items-center gap-3">
                <Brain className="h-8 w-8 text-green-500" />
                <div>
                  <p className="text-2xl font-bold text-gray-900">{stats.subjects}</p>
                  <p className="text-sm text-gray-600">Subjects</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <div className="flex items-center gap-3">
                <Clock className="h-8 w-8 text-purple-500" />
                <div>
                  <p className="text-2xl font-bold text-gray-900">{stats.totalDuration}h</p>
                  <p className="text-sm text-gray-600">Total Content</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <div className="flex items-center gap-3">
                <TrendingUp className="h-8 w-8 text-orange-500" />
                <div>
                  <p className="text-2xl font-bold text-gray-900">{stats.bookmarked}</p>
                  <p className="text-sm text-gray-600">Bookmarked</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            <div className="flex items-center gap-4 flex-1">
              <SearchInput
                placeholder="Search companions by name, topic, or description..."
                onSearch={setSearchQuery}
                className="flex-1"
              />
              <SubjectFilter
                selectedSubject={selectedSubject}
                onSubjectChange={setSelectedSubject}
              />
            </div>
            
            <div className="flex items-center gap-2">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-lg transition-colors ${
                  viewMode === 'grid' 
                    ? 'bg-blue-100 text-blue-600' 
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                <Grid className="h-5 w-5" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-lg transition-colors ${
                  viewMode === 'list' 
                    ? 'bg-blue-100 text-blue-600' 
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                <List className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Active Filters */}
          {(searchQuery || selectedSubject) && (
            <div className="flex items-center gap-2 mt-4 pt-4 border-t border-gray-200">
              <span className="text-sm text-gray-600">Active filters:</span>
              {searchQuery && (
                <span className="inline-flex items-center gap-1 px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                  Search: "{searchQuery}"
                  <button
                    onClick={() => setSearchQuery('')}
                    className="ml-1 hover:text-blue-600"
                  >
                    ×
                  </button>
                </span>
              )}
              {selectedSubject && (
                <span className="inline-flex items-center gap-1 px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                  Subject: {selectedSubject}
                  <button
                    onClick={() => setSelectedSubject('')}
                    className="ml-1 hover:text-green-600"
                  >
                    ×
                  </button>
                </span>
              )}
            </div>
          )}
        </div>

        {/* Results */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold text-gray-900">
              {filteredCompanions.length} companion{filteredCompanions.length !== 1 ? 's' : ''} found
            </h2>
            {filteredCompanions.length > 0 && (
              <p className="text-sm text-gray-600">
                Showing {filteredCompanions.length} of {sampleCompanions.length} companions
              </p>
            )}
          </div>
        </div>

        {/* Companions Grid/List */}
        {viewMode === 'grid' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredCompanions.map((companion) => (
              <CompanionCard
                key={companion.id}
                {...companion}
                color={getSubjectColor(companion.subject)}
                isBookmarked={bookmarkedCompanions.includes(companion.id)}
                onBookmarkToggle={handleBookmarkToggle}
              />
            ))}
          </div>
        ) : (
          <div className="space-y-4">
            {filteredCompanions.map((companion) => (
              <div
                key={companion.id}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="flex items-center gap-6">
                  <div 
                    className="w-16 h-16 rounded-lg flex items-center justify-center text-2xl"
                    style={{ backgroundColor: getSubjectColor(companion.subject) }}
                  >
                    {companion.name.split(' ')[0].charAt(0)}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-1">
                      {companion.name}
                    </h3>
                    <p className="text-lg text-gray-700 mb-2">{companion.topic}</p>
                    <p className="text-gray-600 text-sm mb-3">{companion.description}</p>
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <span className="capitalize">{companion.subject}</span>
                      <span>•</span>
                      <span>{companion.duration} min</span>
                      <span>•</span>
                      <span className="capitalize">{companion.voice} voice</span>
                      <span>•</span>
                      <span className="capitalize">{companion.style} style</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => handleBookmarkToggle(companion.id)}
                      className={`p-2 rounded-lg transition-colors ${
                        bookmarkedCompanions.includes(companion.id)
                          ? 'text-red-500 hover:bg-red-50'
                          : 'text-gray-400 hover:bg-gray-100'
                      }`}
                    >
                      {bookmarkedCompanions.includes(companion.id) ? '❤️' : '🤍'}
                    </button>
                    <button
                      onClick={() => window.location.href = `/companions/${companion.id}`}
                      className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors"
                    >
                      Start Session
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Empty State */}
        {filteredCompanions.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 text-6xl mb-4">🤖</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No companions found</h3>
            <p className="text-gray-600 mb-6">
              Try adjusting your search terms or subject filter
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedSubject('');
              }}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors"
            >
              Clear All Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CompanionsLibrary; 