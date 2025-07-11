import React, { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { useAppContext } from '@/context/AppContext';
import { 
  Mic, 
  MicOff, 
  Phone, 
  PhoneOff, 
  Volume2, 
  VolumeX, 
  Settings, 
  Bookmark,
  Clock,
  Users,
  Star,
  ArrowLeft,
  MessageCircle,
  FileText,
  Download,
  Share2
} from 'lucide-react';

// Enhanced companion data with full details
const COMPANIONS_DATA = {
  "1": {
    id: "1",
    name: "Alex the Project Manager",
    topic: "Project Management Fundamentals",
    subject: "business",
    description: "Master project management principles and methodologies",
    duration: 45,
    style: "formal",
    voice: "male",
    languages: ['en', 'es'],
    avatar: "🧑‍💼",
    expertise: "Project Management",
    rating: 4.8,
    sessions: 1247,
    personality: "Professional and structured, Alex helps you understand project management concepts through real-world examples and practical applications.",
    specialties: ["Agile Methodology", "Risk Management", "Team Leadership", "Stakeholder Communication"],
    sessionTopics: [
      "Introduction to Project Management",
      "Project Planning and Scheduling",
      "Risk Assessment and Mitigation",
      "Team Management and Communication",
      "Project Monitoring and Control"
    ]
  },
  "2": {
    id: "2",
    name: "Lina the Golf Coach",
    topic: "Golf Techniques & Strategy",
    subject: "sports",
    description: "Perfect your golf game with professional coaching",
    duration: 30,
    style: "casual",
    voice: "female",
    languages: ['en', 'fr'],
    avatar: "🏌️‍♀️",
    expertise: "Golf Coaching",
    rating: 4.9,
    sessions: 892,
    personality: "Enthusiastic and encouraging, Lina makes golf accessible to everyone while focusing on proper technique and mental game.",
    specialties: ["Swing Mechanics", "Course Strategy", "Mental Game", "Equipment Selection"],
    sessionTopics: [
      "Grip and Stance Fundamentals",
      "Swing Mechanics and Timing",
      "Course Management and Strategy",
      "Mental Preparation and Focus",
      "Equipment and Club Selection"
    ]
  },
  "3": {
    id: "3",
    name: "Ming the Mandarin Tutor",
    topic: "Chinese Language & Culture",
    subject: "language",
    description: "Learn Mandarin Chinese through interactive conversations",
    duration: 40,
    style: "casual",
    voice: "female",
    languages: ['zh', 'en'],
    avatar: "👩‍🏫",
    expertise: "Mandarin Chinese",
    rating: 4.7,
    sessions: 1563,
    personality: "Patient and culturally aware, Ming combines language learning with cultural insights to provide a comprehensive learning experience.",
    specialties: ["Conversational Chinese", "Business Chinese", "Cultural Context", "Pronunciation"],
    sessionTopics: [
      "Basic Greetings and Introductions",
      "Daily Conversations",
      "Business Chinese Phrases",
      "Chinese Culture and Customs",
      "Advanced Grammar and Vocabulary"
    ]
  },
  "4": {
    id: "4",
    name: "Neura the Brainy Explorer",
    topic: "Neural Networks & AI",
    subject: "science",
    description: "Explore the fascinating world of artificial intelligence",
    duration: 50,
    style: "formal",
    voice: "female",
    languages: ['en', 'de'],
    avatar: "🧠",
    expertise: "Artificial Intelligence",
    rating: 4.9,
    sessions: 2103,
    personality: "Curious and analytical, Neura breaks down complex AI concepts into understandable pieces while maintaining scientific accuracy.",
    specialties: ["Machine Learning", "Deep Learning", "Neural Networks", "AI Ethics"],
    sessionTopics: [
      "Introduction to Artificial Intelligence",
      "Machine Learning Fundamentals",
      "Neural Network Architecture",
      "Deep Learning Applications",
      "AI Ethics and Future Implications"
    ]
  },
  "5": {
    id: "5",
    name: "Codey the Logic Hacker",
    topic: "Programming Fundamentals",
    subject: "coding",
    description: "Master coding concepts with hands-on practice",
    duration: 45,
    style: "casual",
    voice: "male",
    languages: ['en', 'pt'],
    avatar: "💻",
    expertise: "Programming",
    rating: 4.8,
    sessions: 1876,
    personality: "Logical and systematic, Codey approaches programming with a problem-solving mindset and encourages hands-on learning.",
    specialties: ["Python", "JavaScript", "Web Development", "Algorithm Design"],
    sessionTopics: [
      "Programming Basics and Logic",
      "Variables and Data Types",
      "Control Structures and Loops",
      "Functions and Modularity",
      "Object-Oriented Programming"
    ]
  },
  "6": {
    id: "6",
    name: "Vita the Wellness Coach",
    topic: "Health & Nutrition",
    subject: "health",
    description: "Learn about wellness, nutrition, and healthy living",
    duration: 35,
    style: "casual",
    voice: "female",
    languages: ['en', 'it'],
    avatar: "💪",
    expertise: "Health & Wellness",
    rating: 4.6,
    sessions: 945,
    personality: "Supportive and holistic, Vita focuses on sustainable health practices and personalized wellness strategies.",
    specialties: ["Nutrition Science", "Fitness Planning", "Mental Health", "Lifestyle Medicine"],
    sessionTopics: [
      "Nutrition Fundamentals",
      "Meal Planning and Preparation",
      "Exercise and Fitness Basics",
      "Mental Health and Stress Management",
      "Sustainable Lifestyle Changes"
    ]
  }
};

const SUBJECT_COLORS = {
  business: "#FFB3BA",
  sports: "#FFD700",
  language: "#BDE7FF",
  science: "#E5D0FF",
  coding: "#FFC8E4",
  health: "#98FB98",
  mathematics: "#FFDA6E",
  history: "#FFECC8",
  economics: "#C8FFDF",
  technology: "#B8E6B8",
  arts: "#DDA0DD"
};

enum SessionStatus {
  IDLE = 'idle',
  CONNECTING = 'connecting',
  ACTIVE = 'active',
  PAUSED = 'paused',
  ENDED = 'ended'
}

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

const CompanionSession = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { language } = useAppContext();
  
  const [sessionStatus, setSessionStatus] = useState<SessionStatus>(SessionStatus.IDLE);
  const [isMuted, setIsMuted] = useState(false);
  const [isSpeakerMuted, setIsSpeakerMuted] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [sessionDuration, setSessionDuration] = useState(0);
  const [currentTopic, setCurrentTopic] = useState(0);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [sessionNotes, setSessionNotes] = useState('');
  
  // 1. Add state for voice, transcript, feedback, session history, and subscription
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState('');
  const [showHistory, setShowHistory] = useState(false);
  const [showUpgrade, setShowUpgrade] = useState(false);
  const [feedback, setFeedback] = useState<{[msgId:string]: 'up'|'down'|null}>({});
  const [feedbackComments, setFeedbackComments] = useState<{[msgId:string]: string}>({});
  const [sessionHistory, setSessionHistory] = useState<any[]>([
    { date: '2024-06-01', topic: 'Project Management', summary: 'Discussed Agile and risk.' },
    { date: '2024-06-02', topic: 'Neural Networks', summary: 'Explored deep learning basics.' }
  ]);
  const [bookmarksPanel, setBookmarksPanel] = useState(false);
  const [bookmarkedMessages, setBookmarkedMessages] = useState<string[]>([]);
  const [subscriptionTier, setSubscriptionTier] = useState<'free'|'pro'>('free');

  // 2. Voice recognition logic (Web Speech API)
  const recognitionRef = useRef<any>(null);
  useEffect(() => {
    if (!('webkitSpeechRecognition' in window || 'SpeechRecognition' in window)) return;
    const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    recognitionRef.current = new SpeechRecognition();
    recognitionRef.current.continuous = true;
    recognitionRef.current.interimResults = true;
    recognitionRef.current.lang = 'en-US';
    recognitionRef.current.onresult = (event: any) => {
      let interim = '';
      for (let i = event.resultIndex; i < event.results.length; ++i) {
        if (event.results[i].isFinal) {
          setTranscript(prev => prev + event.results[i][0].transcript + ' ');
        } else {
          interim += event.results[i][0].transcript;
        }
      }
      setTranscript(prev => prev.split(' [interim]')[0] + (interim ? ' [interim]' + interim : ''));
    };
    recognitionRef.current.onend = () => setIsListening(false);
  }, []);
  const startListening = () => {
    if (recognitionRef.current) {
      setTranscript('');
      recognitionRef.current.start();
      setIsListening(true);
    }
  };
  const stopListening = () => {
    if (recognitionRef.current) {
      recognitionRef.current.stop();
      setIsListening(false);
    }
  };
  const sendTranscript = () => {
    handleSendMessage(transcript.replace(/\s*\[interim\].*/, ''));
    setTranscript('');
    stopListening();
  };

  // 3. Text-to-Speech for assistant responses
  useEffect(() => {
    if (!window.speechSynthesis || isSpeakerMuted) return;
    const lastMsg = messages[messages.length-1];
    if (lastMsg && lastMsg.role === 'assistant') {
      const utter = new window.SpeechSynthesisUtterance(lastMsg.content);
      utter.lang = 'en-US';
      window.speechSynthesis.speak(utter);
    }
  }, [messages, isSpeakerMuted]);

  // 4. Feedback logic
  const handleFeedback = (msgId: string, type: 'up'|'down') => {
    setFeedback(fb => ({...fb, [msgId]: type}));
  };
  const handleFeedbackComment = (msgId: string, comment: string) => {
    setFeedbackComments(fc => ({...fc, [msgId]: comment}));
  };

  // 5. Bookmarks logic
  const toggleBookmarkMessage = (msgId: string) => {
    setBookmarkedMessages(bm => bm.includes(msgId) ? bm.filter(id => id !== msgId) : [...bm, msgId]);
  };

  // 6. Subscription lock logic
  const requirePro = (feature: string) => {
    if (subscriptionTier !== 'pro') {
      setShowUpgrade(true);
      return false;
    }
    return true;
  };

  const sessionTimerRef = useRef<NodeJS.Timeout | null>(null);
  const companion = COMPANIONS_DATA[id as keyof typeof COMPANIONS_DATA];

  useEffect(() => {
    if (!companion) {
      navigate('/companions');
      return;
    }

    // Initialize session with welcome message
    const welcomeMessage: Message = {
      id: 'welcome',
      role: 'assistant',
      content: `Hello! I'm ${companion.name}. I'm excited to help you learn about ${companion.topic}. What would you like to explore today?`,
      timestamp: new Date()
    };
    setMessages([welcomeMessage]);
  }, [companion, navigate]);

  useEffect(() => {
    if (sessionStatus === SessionStatus.ACTIVE) {
      sessionTimerRef.current = setInterval(() => {
        setSessionDuration(prev => prev + 1);
      }, 1000);
    } else {
      if (sessionTimerRef.current) {
        clearInterval(sessionTimerRef.current);
      }
    }

    return () => {
      if (sessionTimerRef.current) {
        clearInterval(sessionTimerRef.current);
      }
    };
  }, [sessionStatus]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const handleStartSession = async () => {
    setSessionStatus(SessionStatus.CONNECTING);
    
    // Simulate connection delay
    setTimeout(() => {
      setSessionStatus(SessionStatus.ACTIVE);
      
      // Add AI response
      const aiResponse: Message = {
        id: Date.now().toString(),
        role: 'assistant',
        content: `Great! Let's begin our session on ${companion.topic}. I'll guide you through the key concepts and answer any questions you have.`,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, aiResponse]);
    }, 2000);
  };

  const handleEndSession = () => {
    setSessionStatus(SessionStatus.ENDED);
    
    const endMessage: Message = {
      id: Date.now().toString(),
      role: 'assistant',
      content: `Thank you for our session! I hope you found our discussion about ${companion.topic} helpful. Feel free to return anytime for more learning.`,
      timestamp: new Date()
    };
    setMessages(prev => [...prev, endMessage]);
  };

  const handleSendMessage = (content: string) => {
    if (!content.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content,
      timestamp: new Date()
    };
    setMessages(prev => [...prev, userMessage]);

    // Simulate AI response
    setTimeout(() => {
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: `That's a great question! Let me explain how that relates to ${companion.topic}...`,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, aiResponse]);
    }, 1000);
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  const toggleSpeaker = () => {
    setIsSpeakerMuted(!isSpeakerMuted);
  };

  const toggleBookmark = () => {
    setIsBookmarked(!isBookmarked);
  };

  const nextTopic = () => {
    if (currentTopic < companion.sessionTopics.length - 1) {
      setCurrentTopic(currentTopic + 1);
    }
  };

  const previousTopic = () => {
    if (currentTopic > 0) {
      setCurrentTopic(currentTopic - 1);
    }
  };

  if (!companion) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-sky-400 via-blue-500 to-cyan-500 flex items-center justify-center">
        <div className="bg-white rounded-xl p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Companion Not Found</h2>
          <Button onClick={() => navigate('/companions')}>Back to Companions</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-400 via-blue-500 to-cyan-500 py-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button variant="ghost" onClick={() => navigate('/companions')}>
                <ArrowLeft className="w-5 h-5" />
              </Button>
              <div className="flex items-center gap-4">
                <div 
                  className="w-16 h-16 rounded-full flex items-center justify-center text-3xl"
                  style={{ backgroundColor: SUBJECT_COLORS[companion.subject] || '#E5E5E5' }}
                >
                  {companion.avatar}
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-gray-900">{companion.name}</h1>
                  <p className="text-gray-600">{companion.topic}</p>
                  <div className="flex items-center gap-4 mt-1 text-sm text-gray-500">
                    <span className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      {companion.rating}
                    </span>
                    <span className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      {companion.sessions.toLocaleString()} sessions
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {companion.duration} min
                    </span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <Button variant="ghost" onClick={toggleBookmark}>
                <Bookmark className={`w-5 h-5 ${isBookmarked ? 'fill-current text-yellow-500' : ''}`} />
              </Button>
              <Button variant="ghost" onClick={() => setShowSettings(!showSettings)}>
                <Settings className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Session Area */}
          <div className="lg:col-span-2">
            <Card className="p-6 h-[600px] flex flex-col">
              {/* Voice controls */}
              <div className="flex gap-2 mb-2">
                <Button onClick={isListening ? stopListening : startListening} variant={isListening ? 'destructive' : 'default'}>
                  {isListening ? <MicOff className="w-5 h-5" /> : <Mic className="w-5 h-5" />} {isListening ? 'Stop' : 'Speak'}
                </Button>
                {transcript && (
                  <div className="flex-1 flex items-center gap-2 bg-gray-100 rounded px-2">
                    <span className="text-gray-700">{transcript}</span>
                    <Button size="sm" onClick={sendTranscript}>Send</Button>
                  </div>
                )}
              </div>
              {/* Messages */}
              <div className="flex-1 overflow-y-auto space-y-4">
                {messages.map(msg => (
                  <div key={msg.id} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}> 
                    <div className={`rounded-lg px-4 py-2 max-w-[70%] ${msg.role === 'user' ? 'bg-blue-100 text-right' : 'bg-gray-100 text-left'}`}>
                      <div className="flex items-center gap-2">
                        {msg.role === 'assistant' && <span className="text-2xl">{companion.avatar}</span>}
                        <span>{msg.content}</span>
                        <Button size="icon" variant="ghost" onClick={()=>toggleBookmarkMessage(msg.id)}>
                          <Bookmark className={`w-4 h-4 ${bookmarkedMessages.includes(msg.id) ? 'fill-current text-yellow-500' : ''}`} />
                        </Button>
                      </div>
                      {/* Feedback for assistant messages */}
                      {msg.role === 'assistant' && (
                        <div className="flex gap-2 mt-1">
                          <Button size="icon" variant="ghost" onClick={()=>handleFeedback(msg.id, 'up')}>
                            <span className={feedback[msg.id]==='up' ? 'text-green-500' : ''}>👍</span>
                          </Button>
                          <Button size="icon" variant="ghost" onClick={()=>handleFeedback(msg.id, 'down')}>
                            <span className={feedback[msg.id]==='down' ? 'text-red-500' : ''}>👎</span>
                          </Button>
                          <input type="text" placeholder="Add comment..." className="border rounded px-2 py-1 text-xs" value={feedbackComments[msg.id]||''} onChange={e=>handleFeedbackComment(msg.id, e.target.value)} />
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
              {/* Message input */}
              <div className="mt-4 flex gap-2">
                <input type="text" className="flex-1 border rounded px-2 py-1" placeholder="Type your message..." onKeyDown={e=>{if(e.key==='Enter') handleSendMessage((e.target as HTMLInputElement).value);}} />
                <Button onClick={()=>requirePro('send') && handleSendMessage((document.querySelector('input[placeholder="Type your message..."]') as HTMLInputElement)?.value)}>Send</Button>
              </div>
            </Card>
          </div>

          {/* Sidebar: History & Bookmarks */}
          <div className="lg:col-span-1 flex flex-col gap-4">
            <Card className="p-4 flex-1">
              <div className="flex justify-between items-center mb-2">
                <span className="font-bold">Session History</span>
                <Button size="sm" variant="ghost" onClick={()=>setShowHistory(!showHistory)}>{showHistory ? 'Hide' : 'Show'}</Button>
              </div>
              {showHistory && (
                <ul className="text-xs space-y-2">
                  {sessionHistory.map((h,i)=>(
                    <li key={i} className="border-b pb-1">
                      <div className="font-semibold">{h.topic}</div>
                      <div>{h.summary}</div>
                      <div className="text-gray-400">{h.date}</div>
                    </li>
                  ))}
                </ul>
              )}
            </Card>
            <Card className="p-4 flex-1">
              <div className="flex justify-between items-center mb-2">
                <span className="font-bold">Bookmarks</span>
                <Button size="sm" variant="ghost" onClick={()=>setBookmarksPanel(!bookmarksPanel)}>{bookmarksPanel ? 'Hide' : 'Show'}</Button>
              </div>
              {bookmarksPanel && (
                <ul className="text-xs space-y-2">
                  {messages.filter(m=>bookmarkedMessages.includes(m.id)).map(m=>(
                    <li key={m.id} className="border-b pb-1">{m.content}</li>
                  ))}
                </ul>
              )}
            </Card>
          </div>
        </div>
      </div>
      {/* Subscription upgrade modal */}
      {showUpgrade && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-8 shadow-xl max-w-sm w-full text-center">
            <h2 className="text-xl font-bold mb-2">Upgrade to Pro</h2>
            <p className="mb-4">This feature is available for Pro subscribers. Unlock voice, analytics, and more!</p>
            <Button className="w-full mb-2" onClick={()=>{setSubscriptionTier('pro');setShowUpgrade(false);}}>Upgrade Now</Button>
            <Button className="w-full" variant="ghost" onClick={()=>setShowUpgrade(false)}>Cancel</Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CompanionSession; 