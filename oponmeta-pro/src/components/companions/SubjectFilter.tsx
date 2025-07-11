import React from 'react';
import { subjects, getSubjectIcon, getSubjectColor } from '../../data/companionsData';
import { ChevronDown } from 'lucide-react';

interface SubjectFilterProps {
  selectedSubject?: string;
  onSubjectChange?: (subject: string) => void;
  className?: string;
}

const SubjectFilter: React.FC<SubjectFilterProps> = ({
  selectedSubject = "",
  onSubjectChange,
  className = ""
}) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const handleSubjectSelect = (subject: string) => {
    if (onSubjectChange) {
      onSubjectChange(subject === selectedSubject ? "" : subject);
    }
    setIsOpen(false);
  };

  const selectedSubjectData = selectedSubject ? {
    icon: getSubjectIcon(selectedSubject),
    color: getSubjectColor(selectedSubject),
    name: selectedSubject
  } : null;

  return (
    <div className={`relative ${className}`}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-3 px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors min-w-[200px]"
      >
        {selectedSubjectData ? (
          <>
            <div 
              className="w-6 h-6 rounded flex items-center justify-center text-sm"
              style={{ backgroundColor: selectedSubjectData.color }}
            >
              {selectedSubjectData.icon}
            </div>
            <span className="font-medium capitalize">
              {selectedSubjectData.name}
            </span>
          </>
        ) : (
          <>
            <div className="w-6 h-6 rounded bg-gray-100 flex items-center justify-center">
              📚
            </div>
            <span className="text-gray-500">All Subjects</span>
          </>
        )}
        <ChevronDown className={`ml-auto h-4 w-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-10 max-h-60 overflow-y-auto">
          <div className="p-2">
            <button
              onClick={() => handleSubjectSelect("")}
              className={`w-full flex items-center gap-3 px-3 py-2 rounded-md hover:bg-gray-100 transition-colors ${
                !selectedSubject ? 'bg-blue-50 text-blue-700' : 'text-gray-700'
              }`}
            >
              <div className="w-6 h-6 rounded bg-gray-100 flex items-center justify-center text-sm">
                📚
              </div>
              <span className="font-medium">All Subjects</span>
            </button>
            
            {subjects.map((subject) => (
              <button
                key={subject}
                onClick={() => handleSubjectSelect(subject)}
                className={`w-full flex items-center gap-3 px-3 py-2 rounded-md hover:bg-gray-100 transition-colors ${
                  selectedSubject === subject ? 'bg-blue-50 text-blue-700' : 'text-gray-700'
                }`}
              >
                <div 
                  className="w-6 h-6 rounded flex items-center justify-center text-sm"
                  style={{ backgroundColor: getSubjectColor(subject) }}
                >
                  {getSubjectIcon(subject)}
                </div>
                <span className="font-medium capitalize">
                  {subject}
                </span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default SubjectFilter; 