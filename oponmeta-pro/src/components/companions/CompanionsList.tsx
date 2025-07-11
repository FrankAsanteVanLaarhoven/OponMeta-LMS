import React from 'react';
import { CompanionsListProps } from '../../types/companion';
import { getSubjectIcon, getSubjectColor } from '../../data/companionsData';
import { Clock, Play } from 'lucide-react';

const CompanionsList: React.FC<CompanionsListProps> = ({ 
  title, 
  companions = [], 
  classNames = '' 
}) => {
  const handleStartSession = (companionId: string) => {
    window.location.href = `/companions/${companionId}`;
  };

  return (
    <div className={`bg-white rounded-xl shadow-lg p-6 ${classNames}`}>
      <h2 className="text-2xl font-bold text-gray-900 mb-6">{title}</h2>
      
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="text-left py-3 px-4 font-semibold text-gray-700">Learning Companion</th>
              <th className="text-left py-3 px-4 font-semibold text-gray-700">Subject</th>
              <th className="text-right py-3 px-4 font-semibold text-gray-700">Duration</th>
              <th className="text-center py-3 px-4 font-semibold text-gray-700">Action</th>
            </tr>
          </thead>
          <tbody>
            {companions.map((companion) => (
              <tr 
                key={companion.id} 
                className="border-b border-gray-100 hover:bg-gray-50 transition-colors"
              >
                <td className="py-4 px-4">
                  <div className="flex items-center gap-4">
                    <div 
                      className="w-12 h-12 rounded-lg flex items-center justify-center text-xl"
                      style={{ backgroundColor: getSubjectColor(companion.subject) }}
                    >
                      {getSubjectIcon(companion.subject)}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 text-lg">
                        {companion.name}
                      </h3>
                      <p className="text-gray-600">{companion.topic}</p>
                    </div>
                  </div>
                </td>
                <td className="py-4 px-4">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-800 capitalize">
                    {companion.subject}
                  </span>
                </td>
                <td className="py-4 px-4 text-right">
                  <div className="flex items-center justify-end gap-2">
                    <Clock className="h-4 w-4 text-gray-400" />
                    <span className="font-medium text-gray-700">
                      {companion.duration} min
                    </span>
                  </div>
                </td>
                <td className="py-4 px-4 text-center">
                  <button
                    onClick={() => handleStartSession(companion.id)}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
                  >
                    <Play className="h-4 w-4" />
                    Start
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      {companions.length === 0 && (
        <div className="text-center py-8">
          <div className="text-gray-400 text-6xl mb-4">🤖</div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">No companions found</h3>
          <p className="text-gray-600">Try adjusting your search or filters</p>
        </div>
      )}
    </div>
  );
};

export default CompanionsList; 