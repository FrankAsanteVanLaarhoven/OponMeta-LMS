import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';
import { sampleCompanions, getSubjectColor, getSubjectIcon } from '../data/companionsData';
import { 
  Mic, 
  MicOff, 
  Phone, 
  PhoneOff, 
  Volume2, 
  VolumeX,
  MessageSquare,
  Clock,
  BookOpen,
  ArrowLeft,
  Settings,
  Heart
} from 'lucide-react';

const CompanionSession: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { language } = useAppContext();
  const [isConnected, setIsConnected] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [messages, setMessages] = useState<Array<{ role: 'user' | 'assistant'; content: string; timestamp: Date }>>([]);
  const [sessionDuration, setSessionDuration] = useState(0);
  const [isBookmarked, setIsBookmarked] = useState(false);

  // Find the companion data
  const companion = sampleCompanions.find(c => c.id === id);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isConnected) {
      interval = setInterval(() => {
        setSessionDuration(prev => prev + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isConnected]);

  useEffect(() => {
    if (companion) {
      // Add welcome message
      setMessages([{
        role: 'assistant',
        content: `Hello! I'm ${companion.name}. I'm here to help you learn about ${companion.topic}. Are you ready to start our learning session?`,
        timestamp: new Date()
      }]);
    }
  }, [companion]);

  const handleConnect = () => {
    setIsConnected(true);
    // Simulate AI response
    setTimeout(() => {
      setMessages(prev => [...prev, {
        role: 'assistant',
        content: 'Great! I can see we\'re connected. Let\'s begin our learning journey together. What would you like to explore first?',
        timestamp: new Date()
      }]);
    }, 1000);
  };

  const handleDisconnect = () => {
    setIsConnected(false);
    setSessionDuration(0);
  };

  const handleToggleMute = () => {
    setIsMuted(!isMuted);
  };

  const handleToggleBookmark = () => {
    setIsBookmarked(!isBookmarked);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  if (!companion) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-red-50 to-pink-50 flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4">🤖</div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Companion Not Found</h1>
          <p className="text-gray-600 mb-4">The learning companion you're looking for doesn't exist.</p>
          <button
            onClick={() => window.location.href = '/companions'}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors"
          >
            Back to Companions
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="max-w-6xl mx-auto p-6">
        {/* Header */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button
                onClick={() => window.location.href = '/companions'}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <ArrowLeft className="h-5 w-5" />
              </button>
              <div 
                className="w-12 h-12 rounded-lg flex items-center justify-center text-xl"
                style={{ backgroundColor: getSubjectColor(companion.subject) }}
              >
                {getSubjectIcon(companion.subject)}
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">{companion.name}</h1>
                <p className="text-gray-600">{companion.topic}</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <button
                onClick={handleToggleBookmark}
                className={`p-2 rounded-lg transition-colors ${
                  isBookmarked ? 'text-red-500 hover:bg-red-50' : 'text-gray-400 hover:bg-gray-100'
                }`}
              >
                <Heart className={`h-5 w-5 ${isBookmarked ? 'fill-current' : ''}`} />
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                <Settings className="h-5 w-5 text-gray-400" />
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Companion Avatar Section */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="text-center">
                <div 
                  className={`w-32 h-32 mx-auto rounded-full flex items-center justify-center text-4xl mb-4 transition-all duration-300 ${
                    isSpeaking ? 'animate-pulse' : ''
                  }`}
                  style={{ backgroundColor: getSubjectColor(companion.subject) }}
                >
                  {isSpeaking ? '🎤' : getSubjectIcon(companion.subject)}
                </div>
                <h2 className="text-xl font-bold text-gray-900 mb-2">{companion.name}</h2>
                <p className="text-gray-600 mb-4">{companion.description}</p>
                
                <div className="space-y-2 text-sm text-gray-500">
                  <div className="flex items-center justify-center gap-2">
                    <BookOpen className="h-4 w-4" />
                    <span className="capitalize">{companion.subject}</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <Clock className="h-4 w-4" />
                    <span>{companion.duration} min session</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <MessageSquare className="h-4 w-4" />
                    <span className="capitalize">{companion.voice} voice • {companion.style} style</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Main Session Area */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-lg p-6">
              {/* Session Controls */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-4">
                  <button
                    onClick={isConnected ? handleDisconnect : handleConnect}
                    className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-colors ${
                      isConnected 
                        ? 'bg-red-600 hover:bg-red-700 text-white' 
                        : 'bg-green-600 hover:bg-green-700 text-white'
                    }`}
                  >
                    {isConnected ? (
                      <>
                        <PhoneOff className="h-5 w-5" />
                        End Session
                      </>
                    ) : (
                      <>
                        <Phone className="h-5 w-5" />
                        Start Session
                      </>
                    )}
                  </button>
                  
                  {isConnected && (
                    <>
                      <button
                        onClick={handleToggleMute}
                        className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                          isMuted 
                            ? 'bg-red-100 text-red-700 hover:bg-red-200' 
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        }`}
                      >
                        {isMuted ? <MicOff className="h-4 w-4" /> : <Mic className="h-4 w-4" />}
                        {isMuted ? 'Unmute' : 'Mute'}
                      </button>
                      
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Clock className="h-4 w-4" />
                        <span>{formatTime(sessionDuration)}</span>
                      </div>
                    </>
                  )}
                </div>
                
                <div className="flex items-center gap-2">
                  <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                    <Volume2 className="h-5 w-5 text-gray-400" />
                  </button>
                </div>
              </div>

              {/* Messages */}
              <div className="h-96 overflow-y-auto border border-gray-200 rounded-lg p-4 mb-4">
                {messages.length === 0 ? (
                  <div className="text-center text-gray-500 py-8">
                    <MessageSquare className="h-12 w-12 mx-auto mb-4 text-gray-300" />
                    <p>Start a session to begin your learning conversation</p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {messages.map((message, index) => (
                      <div
                        key={index}
                        className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                      >
                        <div
                          className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                            message.role === 'user'
                              ? 'bg-blue-600 text-white'
                              : 'bg-gray-100 text-gray-900'
                          }`}
                        >
                          <p className="text-sm">{message.content}</p>
                          <p className={`text-xs mt-1 ${
                            message.role === 'user' ? 'text-blue-100' : 'text-gray-500'
                          }`}>
                            {message.timestamp.toLocaleTimeString()}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Connection Status */}
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-2">
                  <div className={`w-2 h-2 rounded-full ${
                    isConnected ? 'bg-green-500' : 'bg-gray-400'
                  }`} />
                  <span className={isConnected ? 'text-green-600' : 'text-gray-500'}>
                    {isConnected ? 'Connected' : 'Disconnected'}
                  </span>
                </div>
                
                {isConnected && (
                  <div className="flex items-center gap-4 text-gray-500">
                    <span>Session: {formatTime(sessionDuration)}</span>
                    <span>•</span>
                    <span>{messages.length} messages</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanionSession; 