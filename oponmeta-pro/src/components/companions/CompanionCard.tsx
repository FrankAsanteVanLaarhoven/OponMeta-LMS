import React from 'react';
import { CompanionCardProps } from '../../types/companion';
import { getSubjectIcon } from '../../data/companionsData';
import { 
  Clock, 
  BookOpen, 
  Heart, 
  HeartOff,
  Play,
  User
} from 'lucide-react';

const CompanionCard: React.FC<CompanionCardProps> = ({
  id,
  name,
  subject,
  topic,
  description,
  duration,
  style,
  voice,
  color,
  isBookmarked = false,
  onBookmarkToggle
}) => {
  const handleBookmarkToggle = () => {
    if (onBookmarkToggle) {
      onBookmarkToggle(id);
    }
  };

  const handleStartSession = () => {
    // Navigate to companion session
    window.location.href = `/companions/${id}`;
  };

  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100">
      {/* Header with subject color */}
      <div 
        className="h-3 w-full" 
        style={{ backgroundColor: color }}
      />
      
      {/* Content */}
      <div className="p-6">
        {/* Subject and Bookmark */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <span className="text-2xl">{getSubjectIcon(subject)}</span>
            <span className="text-sm font-medium text-gray-600 capitalize">
              {subject}
            </span>
          </div>
          <button
            onClick={handleBookmarkToggle}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            {isBookmarked ? (
              <Heart className="h-5 w-5 text-red-500 fill-current" />
            ) : (
              <Heart className="h-5 w-5 text-gray-400 hover:text-red-500" />
            )}
          </button>
        </div>

        {/* Companion Name and Topic */}
        <div className="mb-4">
          <h3 className="text-xl font-bold text-gray-900 mb-2">
            {name}
          </h3>
          <p className="text-lg text-gray-700 font-medium">
            {topic}
          </p>
        </div>

        {/* Description */}
        <p className="text-gray-600 text-sm mb-4 line-clamp-3">
          {description}
        </p>

        {/* Details */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-4 text-sm text-gray-500">
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              <span>{duration} min</span>
            </div>
            <div className="flex items-center gap-1">
              <User className="h-4 w-4" />
              <span className="capitalize">{voice}</span>
            </div>
          </div>
          <div className="flex items-center gap-1">
            <BookOpen className="h-4 w-4 text-gray-400" />
            <span className="text-sm text-gray-500 capitalize">
              {style}
            </span>
          </div>
        </div>

        {/* Action Button */}
        <button
          onClick={handleStartSession}
          className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-medium py-3 px-4 rounded-lg transition-all duration-200 flex items-center justify-center gap-2"
        >
          <Play className="h-4 w-4" />
          Start Learning Session
        </button>
      </div>
    </div>
  );
};

export default CompanionCard; 