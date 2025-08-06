import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Suspense, lazy, useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { I18nextProvider } from 'react-i18next';
import { HelmetProvider } from 'react-helmet-async';
import i18n from './i18n';
import { AppProvider } from './context/AppContext';
import { UserProvider } from './context/UserContext';
import FloatingNavigation from './components/FloatingNavigation';
import ResponsiveTest from './components/ResponsiveTest';
import CompanionsLibrary from './pages/CompanionsLibrary';
import CompanionSession from './pages/CompanionSession';
import CompanionAnalytics from './pages/CompanionAnalytics';
import CompanionSettings from './pages/CompanionSettings';
import CompanionCreator from './pages/CompanionCreator';
import CompanionSubscriptionPage from './pages/CompanionSubscriptionPage';
import AIVideoCalling from './pages/AIVideoCalling';
import CreatorsPortal from './pages/dashboard/CreatorsPortal';
import PaymentSuccess from './pages/PaymentSuccess';
import PaymentAnalytics from './pages/dashboard/PaymentAnalytics';
import VendorSubscription from './pages/VendorSubscription';
import VendorDashboard from './pages/VendorDashboard';
import Navigation from './components/Navigation';
import RightAdPanel from './components/RightAdPanel';
import GraduateCertificatesPage from './pages/graduate-certificates';
import CategoryPage from './pages/CategoryPage';
import CareerCategoryPage from './pages/CareerCategoryPage';
import CareerDetailPage from './pages/CareerDetailPage';
import Pricing from './pages/Pricing';
import MultilingualContentExample from './components/MultilingualContentExample';
import MultilingualContentPage from './pages/MultilingualContentPage';
import ContentDetailPage from './pages/ContentDetailPage';
import RTOCourseLibrary from './pages/RTOCourseLibrary';
import AnalyticsDashboard from './components/AnalyticsDashboard';
import SocialFeed from './components/SocialFeed';
import AdvancedFeaturesDemo from './pages/AdvancedFeaturesDemo';
import StudentPortal from './pages/StudentPortal';
import InstructorPortal from './pages/InstructorPortal';
import AdvancedFeatures from './pages/AdvancedFeatures';
import Settings from './pages/dashboard/Settings';
import CourseMarketplace from './pages/dashboard/CourseMarketplace';
import CourseAuthoringTool from '@/pages/CourseAuthoringTool';
import CourseAuthoringLanding from '@/pages/CourseAuthoringLanding';
import CourseWorkspace from '@/components/CourseWorkspace';
import Workshops from '@/pages/Workshops';
import Partners from '@/pages/Partners';
import Certification from '@/pages/Certification';

// Lazy load all page components for better performance
const Index = lazy(() => import("./pages/Index"));
const Courses = lazy(() => import("./pages/Courses"));
const Vendors = lazy(() => import("./pages/Vendors"));
const Features = lazy(() => import("./pages/Features"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const ContactForm = lazy(() => import("./pages/ContactForm"));
const MeetAI = lazy(() => import("./pages/MeetAI"));
const NotFound = lazy(() => import("./pages/NotFound"));
const Dashboard = lazy(() => import("./pages/Dashboard"));
const Overview = lazy(() => import("./pages/dashboard/Overview"));
const CoursesManagement = lazy(() => import("./pages/dashboard/CoursesManagement"));
const Enrollments = lazy(() => import("./pages/dashboard/Enrollments"));
const Revenue = lazy(() => import("./pages/dashboard/Revenue"));
const Analytics = lazy(() => import("./pages/dashboard/Analytics"));
const Collaboration = lazy(() => import("./pages/dashboard/Collaboration"));
const Recommendations = lazy(() => import("./pages/dashboard/Recommendations"));
const DashboardSettings = lazy(() => import("./pages/dashboard/DashboardSettings"));
const CourseCreatorDashboard = lazy(() => import("./pages/dashboard/CourseCreatorDashboard"));
const WhiteboardPage = lazy(() => import("./pages/dashboard/Whiteboard"));
const UserManagement = lazy(() => import("./pages/dashboard/UserManagement"));
const Meetings = lazy(() => import("./pages/dashboard/Meetings"));
const Documents = lazy(() => import("./pages/dashboard/Documents"));
const Forums = lazy(() => import("./pages/dashboard/Forums"));
const Library = lazy(() => import("./pages/dashboard/Library"));
const Templates = lazy(() => import("./pages/dashboard/Templates"));
const CourseLibrary = lazy(() => import("./pages/CourseLibrary"));
const VirtualClassroom = lazy(() => import("./pages/VirtualClassroom"));
const QuizBuilder = lazy(() => import("./pages/QuizBuilder"));
const AuthoringTool = lazy(() => import("./pages/AuthoringTool"));
const SignIn = lazy(() => import("./pages/SignIn"));
const SignUp = lazy(() => import("./pages/SignUp"));
const Profile = lazy(() => import("./pages/Profile"));
const GetDemo = lazy(() => import("./pages/GetDemo"));
const GetQuote = lazy(() => import("./pages/GetQuote"));
const FreeTrial = lazy(() => import("./pages/FreeTrial"));
const CaseStudies = lazy(() => import("./pages/CaseStudies"));
const StartLearning = lazy(() => import("./pages/StartLearning"));
const BecomeInstructor = lazy(() => import("./pages/BecomeInstructor"));
const CareerGuidance = lazy(() => import("./pages/CareerGuidance"));
const CreateCourse = lazy(() => import("./pages/CreateCourse"));
const CourseViewer = lazy(() => import("./pages/CourseViewer"));
const VendorPortal = lazy(() => import("./pages/VendorPortal"));
const CourseManagement = lazy(() => import("./pages/CourseManagement"));
const AdvertiserPortal = lazy(() => import("./pages/AdvertiserPortal"));
const AICourseCreator = lazy(() => import("./pages/dashboard/AICourseCreator"));
const AILessonGenerator = lazy(() => import("./pages/dashboard/AILessonGenerator"));
const AIQuizGenerator = lazy(() => import("./pages/dashboard/AIQuizGenerator"));
const AIVideoGenerator = lazy(() => import("./pages/dashboard/AIVideoGenerator"));
const AIAssessmentGenerator = lazy(() => import("./pages/dashboard/AIAssessmentGenerator"));
const InteractiveContentDesigner = lazy(() => import("./pages/dashboard/InteractiveContentDesigner"));
const ChatbotTrainer = lazy(() => import("./pages/dashboard/ChatbotTrainer"));
const WhiteLabelBranding = lazy(() => import("./pages/dashboard/WhiteLabelBranding"));
const SCORMExport = lazy(() => import("./pages/dashboard/SCORMExport"));
const VendorSubscriptionPage = lazy(() => import('./pages/VendorSubscription'));
const VendorDashboardPage = lazy(() => import('./pages/VendorDashboard'));
const PlagiarismChecker = lazy(() => import('./components/PlagiarismChecker'));
const GrammarChecker = lazy(() => import('./components/GrammarChecker'));
const OneToOneBooking = lazy(() => import('./pages/OneToOneBooking'));
const SearchResults = lazy(() => import('./pages/SearchResults'));
const InstructorApplication = lazy(() => import('./pages/InstructorApplication'));
const InstructorApplicationSuccess = lazy(() => import('./pages/InstructorApplicationSuccess'));
const InstructorManagement = lazy(() => import('./pages/dashboard/InstructorManagement'));
const InstructorOnboarding = lazy(() => import('./pages/dashboard/InstructorOnboarding'));


// Student portal subpages
const StudentCourses = () => {
  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  
  // Mock enrolled courses data
  const enrolledCourses = [
    {
      id: 1,
      title: "Advanced React Development",
      instructor: "Sarah Johnson",
      progress: 75,
      status: "in-progress",
      lastAccessed: "2 days ago",
      totalLessons: 24,
      completedLessons: 18,
      thumbnail: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400",
      category: "Programming",
      rating: 4.8,
      certificate: false
    },
    {
      id: 2,
      title: "UI/UX Design Fundamentals",
      instructor: "Mike Chen",
      progress: 100,
      status: "completed",
      lastAccessed: "1 week ago",
      totalLessons: 16,
      completedLessons: 16,
      thumbnail: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400",
      category: "Design",
      rating: 4.9,
      certificate: true
    },
    {
      id: 3,
      title: "Data Science Essentials",
      instructor: "Dr. Emily Rodriguez",
      progress: 0,
      status: "not-started",
      lastAccessed: "Never",
      totalLessons: 32,
      completedLessons: 0,
      thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400",
      category: "Data Science",
      rating: 4.7,
      certificate: false
    },
    {
      id: 4,
      title: "Digital Marketing Mastery",
      instructor: "Alex Thompson",
      progress: 45,
      status: "in-progress",
      lastAccessed: "Yesterday",
      totalLessons: 20,
      completedLessons: 9,
      thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400",
      category: "Marketing",
      rating: 4.6,
      certificate: false
    }
  ];

  const filteredCourses = enrolledCourses.filter(course => {
    const matchesFilter = filter === 'all' || course.status === filter;
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.instructor.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const getStatusColor = (status) => {
    switch (status) {
      case 'completed': return 'bg-green-100 text-green-800';
      case 'in-progress': return 'bg-blue-100 text-blue-800';
      case 'not-started': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusText = (status) => {
    switch (status) {
      case 'completed': return 'Completed';
      case 'in-progress': return 'In Progress';
      case 'not-started': return 'Not Started';
      default: return 'Unknown';
    }
  };

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">My Courses</h1>
        <p className="text-gray-600">Track your learning progress and continue where you left off</p>
      </div>

      {/* Filters and Search */}
      <div className="flex flex-col sm:flex-row gap-4 mb-8">
        <div className="flex-1">
          <input
            type="text"
            placeholder="Search courses or instructors..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        <div className="flex gap-2">
          {['all', 'in-progress', 'completed', 'not-started'].map((status) => (
            <button
              key={status}
              onClick={() => setFilter(status)}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                filter === status
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {status === 'all' ? 'All' : status === 'in-progress' ? 'In Progress' : status === 'completed' ? 'Completed' : 'Not Started'}
            </button>
          ))}
        </div>
      </div>

      {/* Course Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCourses.map((course) => (
          <div key={course.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
            {/* Course Image */}
            <div className="relative h-48 bg-gray-200">
              <img
                src={course.thumbnail}
                alt={course.title}
                className="w-full h-full object-cover"
              />
              {course.certificate && (
                <div className="absolute top-3 right-3 bg-yellow-400 text-yellow-900 px-2 py-1 rounded-full text-xs font-bold">
                  Certificate Available
                </div>
              )}
              <div className="absolute bottom-3 left-3">
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(course.status)}`}>
                  {getStatusText(course.status)}
                </span>
              </div>
            </div>

            {/* Course Content */}
            <div className="p-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-500">{course.category}</span>
                <div className="flex items-center">
                  <span className="text-yellow-400">★</span>
                  <span className="text-sm text-gray-600 ml-1">{course.rating}</span>
                </div>
              </div>
              
              <h3 className="text-lg font-bold text-gray-900 mb-2">{course.title}</h3>
              <p className="text-sm text-gray-600 mb-4">by {course.instructor}</p>

              {/* Progress Bar */}
              <div className="mb-4">
                <div className="flex justify-between text-sm text-gray-600 mb-1">
                  <span>Progress</span>
                  <span>{course.progress}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${course.progress}%` }}
                  ></div>
                </div>
                <p className="text-xs text-gray-500 mt-1">
                  {course.completedLessons} of {course.totalLessons} lessons completed
                </p>
              </div>

              {/* Last Accessed */}
              <p className="text-xs text-gray-500 mb-4">
                Last accessed: {course.lastAccessed}
              </p>

              {/* Actions */}
              <div className="flex gap-2">
                {course.status === 'completed' ? (
                  <>
                    <button className="flex-1 bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-green-700 transition-colors">
                      View Certificate
                    </button>
                    <button className="flex-1 bg-gray-100 text-gray-700 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-200 transition-colors">
                      Review
                    </button>
                  </>
                ) : course.status === 'in-progress' ? (
                  <>
                    <button className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors">
                      Continue Learning
                    </button>
                    <button className="flex-1 bg-gray-100 text-gray-700 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-200 transition-colors">
                      View Progress
                    </button>
                  </>
                ) : (
                  <button className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors">
                    Start Learning
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredCourses.length === 0 && (
        <div className="text-center py-12">
          <div className="text-gray-400 text-6xl mb-4">📚</div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">No courses found</h3>
          <p className="text-gray-600">Try adjusting your search or filter criteria</p>
        </div>
      )}
    </div>
  );
};

const StudentBookings = () => {
  const [activeTab, setActiveTab] = useState('upcoming');
  const [showBookingForm, setShowBookingForm] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());
  
  // Mock data for bookings
  const upcomingSessions = [
    {
      id: 1,
      title: "React Advanced Concepts",
      instructor: "Sarah Johnson",
      date: "2024-01-15",
      time: "14:00",
      duration: 60,
      type: "1-on-1",
      status: "confirmed",
      meetingLink: "https://meet.google.com/abc-defg-hij",
      notes: "Focus on hooks and state management"
    },
    {
      id: 2,
      title: "UI/UX Design Review",
      instructor: "Mike Chen",
      date: "2024-01-18",
      time: "10:00",
      duration: 45,
      type: "group",
      status: "confirmed",
      meetingLink: "https://zoom.us/j/123456789",
      notes: "Portfolio review session"
    },
    {
      id: 3,
      title: "Data Science Consultation",
      instructor: "Dr. Emily Rodriguez",
      date: "2024-01-20",
      time: "16:30",
      duration: 90,
      type: "1-on-1",
      status: "pending",
      meetingLink: null,
      notes: "Project guidance and code review"
    }
  ];

  const pastSessions = [
    {
      id: 4,
      title: "JavaScript Fundamentals",
      instructor: "Alex Thompson",
      date: "2024-01-10",
      time: "15:00",
      duration: 60,
      type: "1-on-1",
      status: "completed",
      rating: 5,
      notes: "Great session on async/await",
      feedback: "Excellent explanation of promises and async programming"
    },
    {
      id: 5,
      title: "Design System Workshop",
      instructor: "Mike Chen",
      date: "2024-01-08",
      time: "11:00",
      duration: 120,
      type: "group",
      status: "completed",
      rating: 4,
      notes: "Learned about component libraries",
      feedback: "Very informative workshop on design systems"
    }
  ];

  const instructors = [
    { id: 1, name: "Sarah Johnson", subject: "Programming", rating: 4.9, available: true },
    { id: 2, name: "Mike Chen", subject: "Design", rating: 4.8, available: true },
    { id: 3, name: "Dr. Emily Rodriguez", subject: "Data Science", rating: 4.7, available: true },
    { id: 4, name: "Alex Thompson", subject: "Marketing", rating: 4.6, available: false }
  ];

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const formatTime = (timeString) => {
    const [hours, minutes] = timeString.split(':');
    const hour = parseInt(hours);
    const ampm = hour >= 12 ? 'PM' : 'AM';
    const displayHour = hour % 12 || 12;
    return `${displayHour}:${minutes} ${ampm}`;
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'confirmed': return 'bg-green-100 text-green-800';
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'completed': return 'bg-blue-100 text-blue-800';
      case 'cancelled': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getTypeColor = (type) => {
    return type === '1-on-1' ? 'bg-purple-100 text-purple-800' : 'bg-orange-100 text-orange-800';
  };

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Bookings</h1>
          <p className="text-gray-600">Manage your learning sessions and schedule new ones</p>
        </div>
        <button
          onClick={() => setShowBookingForm(true)}
          className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center gap-2"
        >
          <span>+</span>
          Book New Session
        </button>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-gray-200 mb-8">
        {[
          { key: 'upcoming', label: 'Upcoming Sessions', count: upcomingSessions.length },
          { key: 'past', label: 'Past Sessions', count: pastSessions.length }
        ].map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={`px-6 py-3 font-medium border-b-2 transition-colors ${
              activeTab === tab.key
                ? 'border-blue-600 text-blue-600'
                : 'border-transparent text-gray-500 hover:text-gray-700'
            }`}
          >
            {tab.label}
            <span className="ml-2 bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-xs">
              {tab.count}
            </span>
          </button>
        ))}
      </div>

      {/* Sessions List */}
      <div className="space-y-6">
        {(activeTab === 'upcoming' ? upcomingSessions : pastSessions).map((session) => (
          <div key={session.id} className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <h3 className="text-xl font-bold text-gray-900">{session.title}</h3>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(session.status)}`}>
                    {session.status.charAt(0).toUpperCase() + session.status.slice(1)}
                  </span>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getTypeColor(session.type)}`}>
                    {session.type}
                  </span>
                </div>
                
                <div className="flex items-center gap-6 text-sm text-gray-600 mb-4">
                  <div className="flex items-center gap-1">
                    <span>👨‍🏫</span>
                    <span>{session.instructor}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span>📅</span>
                    <span>{formatDate(session.date)}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span>🕒</span>
                    <span>{formatTime(session.time)} ({session.duration} min)</span>
                  </div>
                </div>

                {session.notes && (
                  <p className="text-gray-700 mb-4 bg-gray-50 p-3 rounded-lg">
                    <strong>Notes:</strong> {session.notes}
                  </p>
                )}

                {activeTab === 'past' && session.feedback && (
                  <p className="text-gray-700 mb-4 bg-blue-50 p-3 rounded-lg">
                    <strong>Your Feedback:</strong> {session.feedback}
                  </p>
                )}

                <div className="flex gap-3">
                  {session.meetingLink && (
                    <a
                      href={session.meetingLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-green-700 transition-colors"
                    >
                      Join Meeting
                    </a>
                  )}
                  
                  {activeTab === 'upcoming' && session.status === 'confirmed' && (
                    <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors">
                      Reschedule
                    </button>
                  )}
                  
                  {activeTab === 'upcoming' && (
                    <button className="bg-red-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-red-700 transition-colors">
                      Cancel
                    </button>
                  )}
                  
                  {activeTab === 'past' && (
                    <button className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-200 transition-colors">
                      View Recording
                    </button>
                  )}
                </div>
              </div>

              {activeTab === 'past' && session.rating && (
                <div className="flex items-center gap-1">
                  <span className="text-yellow-400">★</span>
                  <span className="text-sm text-gray-600">{session.rating}/5</span>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Booking Form Modal */}
      {showBookingForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-8 max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900">Book New Session</h2>
              <button
                onClick={() => setShowBookingForm(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                ✕
              </button>
            </div>

            <form className="space-y-6">
              {/* Instructor Selection */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Select Instructor
                </label>
                <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                  <option value="">Choose an instructor...</option>
                  {instructors.filter(i => i.available).map(instructor => (
                    <option key={instructor.id} value={instructor.id}>
                      {instructor.name} - {instructor.subject} (★{instructor.rating})
                    </option>
                  ))}
                </select>
              </div>

              {/* Session Type */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Session Type
                </label>
                <div className="flex gap-4">
                  <label className="flex items-center">
                    <input type="radio" name="type" value="1-on-1" className="mr-2" />
                    <span>1-on-1 Session</span>
                  </label>
                  <label className="flex items-center">
                    <input type="radio" name="type" value="group" className="mr-2" />
                    <span>Group Session</span>
                  </label>
                </div>
              </div>

              {/* Date and Time */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Date
                  </label>
                  <input
                    type="date"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Time
                  </label>
                  <input
                    type="time"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>

              {/* Duration */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Duration
                </label>
                <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                  <option value="30">30 minutes</option>
                  <option value="45">45 minutes</option>
                  <option value="60">1 hour</option>
                  <option value="90">1.5 hours</option>
                  <option value="120">2 hours</option>
                </select>
              </div>

              {/* Notes */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Session Notes
                </label>
                <textarea
                  rows={3}
                  placeholder="What would you like to focus on in this session?"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                ></textarea>
              </div>

              {/* Actions */}
              <div className="flex gap-3 pt-4">
                <button
                  type="button"
                  onClick={() => setShowBookingForm(false)}
                  className="flex-1 bg-gray-100 text-gray-700 px-4 py-2 rounded-lg font-medium hover:bg-gray-200 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors"
                >
                  Book Session
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Empty State */}
      {(activeTab === 'upcoming' ? upcomingSessions : pastSessions).length === 0 && (
        <div className="text-center py-12">
          <div className="text-gray-400 text-6xl mb-4">📅</div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            No {activeTab === 'upcoming' ? 'upcoming' : 'past'} sessions
          </h3>
          <p className="text-gray-600 mb-6">
            {activeTab === 'upcoming' 
              ? "You don't have any upcoming sessions scheduled."
              : "You haven't completed any sessions yet."
            }
          </p>
          {activeTab === 'upcoming' && (
            <button
              onClick={() => setShowBookingForm(true)}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
            >
              Book Your First Session
            </button>
          )}
        </div>
      )}
    </div>
  );
};

const StudentProgress = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('month');
  
  // Mock progress data
  const progressData = {
    overallProgress: 68,
    totalCourses: 12,
    completedCourses: 8,
    totalHours: 156,
    thisWeek: 12,
    lastWeek: 18,
    streak: 7,
    averageScore: 87,
    certificates: 5,
    skills: [
      { name: "React", level: 85, color: "#61DAFB" },
      { name: "JavaScript", level: 92, color: "#F7DF1E" },
      { name: "UI/UX Design", level: 78, color: "#FF6B6B" },
      { name: "Data Science", level: 45, color: "#4ECDC4" },
      { name: "Digital Marketing", level: 67, color: "#45B7D1" }
    ],
    weeklyProgress: [
      { week: "Week 1", hours: 15, courses: 2 },
      { week: "Week 2", hours: 18, courses: 3 },
      { week: "Week 3", hours: 12, courses: 1 },
      { week: "Week 4", hours: 20, courses: 4 },
      { week: "Week 5", hours: 16, courses: 2 },
      { week: "Week 6", hours: 14, courses: 3 },
      { week: "Week 7", hours: 19, courses: 2 },
      { week: "Week 8", hours: 22, courses: 4 }
    ],
    recentAchievements: [
      { title: "React Master", description: "Completed Advanced React course", date: "2024-01-12", icon: "⚛️" },
      { title: "Design Pro", description: "Finished UI/UX Fundamentals", date: "2024-01-08", icon: "🎨" },
      { title: "JavaScript Expert", description: "Scored 95% on JS assessment", date: "2024-01-05", icon: "📜" },
      { title: "Learning Streak", description: "7 days of consistent learning", date: "2024-01-03", icon: "🔥" }
    ],
    upcomingMilestones: [
      { title: "Data Science Certificate", progress: 75, target: 100, description: "Complete 3 more modules" },
      { title: "Marketing Specialist", progress: 60, target: 100, description: "Finish 2 remaining courses" },
      { title: "Full Stack Developer", progress: 45, target: 100, description: "Complete backend courses" }
    ]
  };

  const getProgressColor = (percentage) => {
    if (percentage >= 80) return 'text-green-600';
    if (percentage >= 60) return 'text-blue-600';
    if (percentage >= 40) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getProgressBarColor = (percentage) => {
    if (percentage >= 80) return 'bg-green-500';
    if (percentage >= 60) return 'bg-blue-500';
    if (percentage >= 40) return 'bg-yellow-500';
    return 'bg-red-500';
  };

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Learning Progress</h1>
        <p className="text-gray-600">Track your learning journey and celebrate your achievements</p>
      </div>

      {/* Period Selector */}
      <div className="flex gap-2 mb-8">
        {['week', 'month', 'quarter', 'year'].map((period) => (
          <button
            key={period}
            onClick={() => setSelectedPeriod(period)}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              selectedPeriod === period
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {period.charAt(0).toUpperCase() + period.slice(1)}
          </button>
        ))}
      </div>

      {/* Overview Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Overall Progress</p>
              <p className={`text-3xl font-bold ${getProgressColor(progressData.overallProgress)}`}>
                {progressData.overallProgress}%
              </p>
            </div>
            <div className="text-4xl">📈</div>
          </div>
          <div className="mt-4">
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className={`h-2 rounded-full ${getProgressBarColor(progressData.overallProgress)}`}
                style={{ width: `${progressData.overallProgress}%` }}
              ></div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Total Hours</p>
              <p className="text-3xl font-bold text-blue-600">{progressData.totalHours}h</p>
            </div>
            <div className="text-4xl">⏱️</div>
          </div>
          <p className="text-sm text-gray-500 mt-2">This week: {progressData.thisWeek}h</p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Learning Streak</p>
              <p className="text-3xl font-bold text-orange-600">{progressData.streak} days</p>
            </div>
            <div className="text-4xl">🔥</div>
          </div>
          <p className="text-sm text-gray-500 mt-2">Keep it up!</p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Average Score</p>
              <p className="text-3xl font-bold text-green-600">{progressData.averageScore}%</p>
            </div>
            <div className="text-4xl">🎯</div>
          </div>
          <p className="text-sm text-gray-500 mt-2">Excellent performance!</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Skills Progress */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Skill Development</h2>
          <div className="space-y-4">
            {progressData.skills.map((skill) => (
              <div key={skill.name}>
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium text-gray-900">{skill.name}</span>
                  <span className={`font-bold ${getProgressColor(skill.level)}`}>{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div
                    className="h-3 rounded-full transition-all duration-300"
                    style={{ 
                      width: `${skill.level}%`,
                      backgroundColor: skill.color
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Achievements */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Recent Achievements</h2>
          <div className="space-y-4">
            {progressData.recentAchievements.map((achievement, index) => (
              <div key={index} className="flex items-center gap-4 p-3 bg-gray-50 rounded-lg">
                <div className="text-2xl">{achievement.icon}</div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900">{achievement.title}</h3>
                  <p className="text-sm text-gray-600">{achievement.description}</p>
                  <p className="text-xs text-gray-500">{achievement.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Upcoming Milestones */}
      <div className="mt-8 bg-white rounded-xl shadow-lg p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-6">Upcoming Milestones</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {progressData.upcomingMilestones.map((milestone, index) => (
            <div key={index} className="border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">{milestone.title}</h3>
              <p className="text-sm text-gray-600 mb-3">{milestone.description}</p>
              <div className="mb-2">
                <div className="flex justify-between text-sm text-gray-600 mb-1">
                  <span>Progress</span>
                  <span>{milestone.progress}/{milestone.target}</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className={`h-2 rounded-full ${getProgressBarColor(milestone.progress)}`}
                    style={{ width: `${(milestone.progress / milestone.target) * 100}%` }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Weekly Progress Chart */}
      <div className="mt-8 bg-white rounded-xl shadow-lg p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-6">Weekly Learning Activity</h2>
        <div className="grid grid-cols-8 gap-2">
          {progressData.weeklyProgress.map((week, index) => (
            <div key={index} className="text-center">
              <div className="text-xs text-gray-600 mb-2">{week.week}</div>
              <div className="bg-blue-100 rounded-lg p-2 mb-1">
                <div className="text-sm font-bold text-blue-600">{week.hours}h</div>
                <div className="text-xs text-gray-500">{week.courses} courses</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Course Completion Summary */}
      <div className="mt-8 bg-white rounded-xl shadow-lg p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-6">Course Completion Summary</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center p-4 bg-green-50 rounded-lg">
            <div className="text-3xl font-bold text-green-600">{progressData.completedCourses}</div>
            <div className="text-sm text-gray-600">Completed Courses</div>
          </div>
          <div className="text-center p-4 bg-blue-50 rounded-lg">
            <div className="text-3xl font-bold text-blue-600">{progressData.totalCourses - progressData.completedCourses}</div>
            <div className="text-sm text-gray-600">In Progress</div>
          </div>
          <div className="text-center p-4 bg-yellow-50 rounded-lg">
            <div className="text-3xl font-bold text-yellow-600">{progressData.certificates}</div>
            <div className="text-sm text-gray-600">Certificates Earned</div>
          </div>
        </div>
      </div>
    </div>
  );
};
const StudentAchievements = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  
  // Mock achievements data
  const achievements = {
    badges: [
      {
        id: 1,
        name: "React Master",
        description: "Complete Advanced React Development course with 90%+ score",
        icon: "⚛️",
        category: "programming",
        earned: true,
        date: "2024-01-12",
        rarity: "rare",
        points: 500
      },
      {
        id: 2,
        name: "Design Pro",
        description: "Finish UI/UX Design Fundamentals with distinction",
        icon: "🎨",
        category: "design",
        earned: true,
        date: "2024-01-08",
        rarity: "rare",
        points: 400
      },
      {
        id: 3,
        name: "JavaScript Expert",
        description: "Score 95% or higher on JavaScript assessment",
        icon: "📜",
        category: "programming",
        earned: true,
        date: "2024-01-05",
        rarity: "epic",
        points: 750
      },
      {
        id: 4,
        name: "Learning Streak",
        description: "Maintain 7 consecutive days of learning",
        icon: "🔥",
        category: "motivation",
        earned: true,
        date: "2024-01-03",
        rarity: "common",
        points: 200
      },
      {
        id: 5,
        name: "Data Scientist",
        description: "Complete Data Science Essentials course",
        icon: "📊",
        category: "data",
        earned: false,
        date: null,
        rarity: "rare",
        points: 600
      },
      {
        id: 6,
        name: "Marketing Guru",
        description: "Finish Digital Marketing Mastery course",
        icon: "📈",
        category: "marketing",
        earned: false,
        date: null,
        rarity: "rare",
        points: 450
      }
    ],
    certificates: [
      {
        id: 1,
        name: "Advanced React Development",
        instructor: "Sarah Johnson",
        issueDate: "2024-01-12",
        certificateId: "CERT-REACT-001",
        downloadUrl: "#",
        verified: true,
        score: 92
      },
      {
        id: 2,
        name: "UI/UX Design Fundamentals",
        instructor: "Mike Chen",
        issueDate: "2024-01-08",
        certificateId: "CERT-DESIGN-001",
        downloadUrl: "#",
        verified: true,
        score: 89
      },
      {
        id: 3,
        name: "JavaScript Programming",
        instructor: "Alex Thompson",
        issueDate: "2024-01-05",
        certificateId: "CERT-JS-001",
        downloadUrl: "#",
        verified: true,
        score: 95
      }
    ],
    milestones: [
      {
        id: 1,
        name: "First Course Completed",
        description: "Complete your first course on the platform",
        icon: "🎓",
        earned: true,
        date: "2024-01-05",
        points: 100
      },
      {
        id: 2,
        name: "5 Courses Completed",
        description: "Complete 5 courses on the platform",
        icon: "🏆",
        earned: true,
        date: "2024-01-08",
        points: 250
      },
      {
        id: 3,
        name: "10 Courses Completed",
        description: "Complete 10 courses on the platform",
        icon: "👑",
        earned: false,
        date: null,
        points: 500
      },
      {
        id: 4,
        name: "100 Hours of Learning",
        description: "Spend 100 hours learning on the platform",
        icon: "⏰",
        earned: true,
        date: "2024-01-10",
        points: 300
      }
    ],
    leaderboard: [
      { rank: 1, name: "You", points: 1850, avatar: "👤" },
      { rank: 2, name: "Sarah M.", points: 1720, avatar: "👤" },
      { rank: 3, name: "Mike R.", points: 1650, avatar: "👤" },
      { rank: 4, name: "Alex K.", points: 1580, avatar: "👤" },
      { rank: 5, name: "Emily L.", points: 1520, avatar: "👤" }
    ]
  };

  const categories = [
    { key: 'all', name: 'All', count: achievements.badges.length },
    { key: 'programming', name: 'Programming', count: achievements.badges.filter(b => b.category === 'programming').length },
    { key: 'design', name: 'Design', count: achievements.badges.filter(b => b.category === 'design').length },
    { key: 'data', name: 'Data Science', count: achievements.badges.filter(b => b.category === 'data').length },
    { key: 'marketing', name: 'Marketing', count: achievements.badges.filter(b => b.category === 'marketing').length },
    { key: 'motivation', name: 'Motivation', count: achievements.badges.filter(b => b.category === 'motivation').length }
  ];

  const getRarityColor = (rarity) => {
    switch (rarity) {
      case 'common': return 'bg-gray-100 text-gray-800';
      case 'rare': return 'bg-blue-100 text-blue-800';
      case 'epic': return 'bg-purple-100 text-purple-800';
      case 'legendary': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getRarityBorder = (rarity) => {
    switch (rarity) {
      case 'common': return 'border-gray-200';
      case 'rare': return 'border-blue-200';
      case 'epic': return 'border-purple-200';
      case 'legendary': return 'border-yellow-200';
      default: return 'border-gray-200';
    }
  };

  const filteredBadges = selectedCategory === 'all' 
    ? achievements.badges 
    : achievements.badges.filter(badge => badge.category === selectedCategory);

  const earnedBadges = achievements.badges.filter(badge => badge.earned);
  const totalPoints = earnedBadges.reduce((sum, badge) => sum + badge.points, 0);

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Achievements & Certificates</h1>
        <p className="text-gray-600">Celebrate your learning milestones and showcase your skills</p>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-xl shadow-lg p-6 text-center">
          <div className="text-3xl font-bold text-blue-600">{earnedBadges.length}</div>
          <div className="text-sm text-gray-600">Badges Earned</div>
        </div>
        <div className="bg-white rounded-xl shadow-lg p-6 text-center">
          <div className="text-3xl font-bold text-green-600">{achievements.certificates.length}</div>
          <div className="text-sm text-gray-600">Certificates</div>
        </div>
        <div className="bg-white rounded-xl shadow-lg p-6 text-center">
          <div className="text-3xl font-bold text-purple-600">{totalPoints}</div>
          <div className="text-sm text-gray-600">Total Points</div>
        </div>
        <div className="bg-white rounded-xl shadow-lg p-6 text-center">
          <div className="text-3xl font-bold text-orange-600">{achievements.milestones.filter(m => m.earned).length}</div>
          <div className="text-sm text-gray-600">Milestones</div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Badges Section */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold text-gray-900">Badges</h2>
              <div className="flex gap-2">
                {categories.map((category) => (
                  <button
                    key={category.key}
                    onClick={() => setSelectedCategory(category.key)}
                    className={`px-3 py-1 rounded-lg text-sm font-medium transition-colors ${
                      selectedCategory === category.key
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {category.name} ({category.count})
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {filteredBadges.map((badge) => (
                <div
                  key={badge.id}
                  className={`border-2 rounded-lg p-4 transition-all ${
                    badge.earned 
                      ? `${getRarityBorder(badge.rarity)} bg-white` 
                      : 'border-gray-200 bg-gray-50 opacity-60'
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <div className={`text-3xl ${badge.earned ? '' : 'grayscale'}`}>
                      {badge.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className={`font-semibold ${badge.earned ? 'text-gray-900' : 'text-gray-500'}`}>
                          {badge.name}
                        </h3>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getRarityColor(badge.rarity)}`}>
                          {badge.rarity}
                        </span>
                      </div>
                      <p className={`text-sm mb-2 ${badge.earned ? 'text-gray-600' : 'text-gray-400'}`}>
                        {badge.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-gray-500">
                          {badge.earned ? `Earned ${badge.date}` : 'Not earned yet'}
                        </span>
                        <span className="text-sm font-medium text-blue-600">
                          {badge.points} pts
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Leaderboard */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Leaderboard</h2>
          <div className="space-y-3">
            {achievements.leaderboard.map((player) => (
              <div
                key={player.rank}
                className={`flex items-center gap-3 p-3 rounded-lg ${
                  player.rank === 1 ? 'bg-yellow-50 border border-yellow-200' : 'bg-gray-50'
                }`}
              >
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                  player.rank === 1 ? 'bg-yellow-400 text-yellow-900' :
                  player.rank === 2 ? 'bg-gray-300 text-gray-700' :
                  player.rank === 3 ? 'bg-orange-300 text-orange-800' :
                  'bg-gray-200 text-gray-600'
                }`}>
                  {player.rank}
                </div>
                <div className="text-2xl">{player.avatar}</div>
                <div className="flex-1">
                  <div className="font-medium text-gray-900">{player.name}</div>
                  <div className="text-sm text-gray-500">{player.points} points</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Certificates Section */}
      <div className="mt-8 bg-white rounded-xl shadow-lg p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-6">Certificates</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.certificates.map((cert) => (
            <div key={cert.id} className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-between mb-4">
                <div className="text-3xl">🎓</div>
                <div className="flex items-center gap-1">
                  <span className="text-green-500">✓</span>
                  <span className="text-xs text-gray-500">Verified</span>
                </div>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">{cert.name}</h3>
              <p className="text-sm text-gray-600 mb-3">by {cert.instructor}</p>
              <div className="space-y-2 mb-4">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Score:</span>
                  <span className="font-medium text-green-600">{cert.score}%</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Issued:</span>
                  <span className="font-medium">{cert.issueDate}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">ID:</span>
                  <span className="font-mono text-xs">{cert.certificateId}</span>
                </div>
              </div>
              <button className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors">
                Download Certificate
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Milestones Section */}
      <div className="mt-8 bg-white rounded-xl shadow-lg p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-6">Learning Milestones</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {achievements.milestones.map((milestone) => (
            <div
              key={milestone.id}
              className={`border-2 rounded-lg p-4 text-center ${
                milestone.earned 
                  ? 'border-green-200 bg-green-50' 
                  : 'border-gray-200 bg-gray-50'
              }`}
            >
              <div className={`text-4xl mb-3 ${milestone.earned ? '' : 'grayscale opacity-50'}`}>
                {milestone.icon}
              </div>
              <h3 className={`font-semibold mb-2 ${milestone.earned ? 'text-gray-900' : 'text-gray-500'}`}>
                {milestone.name}
              </h3>
              <p className={`text-sm mb-3 ${milestone.earned ? 'text-gray-600' : 'text-gray-400'}`}>
                {milestone.description}
              </p>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-blue-600">
                  {milestone.points} pts
                </span>
                <span className="text-xs text-gray-500">
                  {milestone.earned ? milestone.date : 'In Progress'}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const StudentWallet = () => {
  const [activeTab, setActiveTab] = useState('overview');
  
  // Mock wallet data
  const walletData = {
    balance: 1250,
    currency: "USD",
    credits: 85,
    subscription: {
      plan: "Premium",
      status: "active",
      nextBilling: "2024-02-15",
      amount: 29.99,
      features: ["Unlimited courses", "1-on-1 sessions", "Certificates", "Priority support"]
    },
    transactions: [
      {
        id: 1,
        type: "credit",
        amount: 500,
        description: "Course purchase - Advanced React Development",
        date: "2024-01-12",
        status: "completed",
        category: "course"
      },
      {
        id: 2,
        type: "debit",
        amount: -29.99,
        description: "Premium subscription renewal",
        date: "2024-01-15",
        status: "completed",
        category: "subscription"
      },
      {
        id: 3,
        type: "credit",
        amount: 200,
        description: "Referral bonus - Sarah M.",
        date: "2024-01-10",
        status: "completed",
        category: "bonus"
      },
      {
        id: 4,
        type: "debit",
        amount: -150,
        description: "1-on-1 session booking",
        date: "2024-01-08",
        status: "completed",
        category: "booking"
      },
      {
        id: 5,
        type: "credit",
        amount: 1000,
        description: "Account top-up",
        date: "2024-01-05",
        status: "completed",
        category: "topup"
      }
    ],
    paymentMethods: [
      {
        id: 1,
        type: "card",
        last4: "4242",
        brand: "Visa",
        expiry: "12/25",
        isDefault: true
      },
      {
        id: 2,
        type: "card",
        last4: "8888",
        brand: "Mastercard",
        expiry: "08/26",
        isDefault: false
      },
      {
        id: 3,
        type: "paypal",
        email: "user@example.com",
        isDefault: false
      }
    ],
    upcomingCharges: [
      {
        id: 1,
        description: "Premium subscription",
        amount: 29.99,
        date: "2024-02-15",
        type: "subscription"
      }
    ]
  };

  const getTransactionIcon = (category) => {
    switch (category) {
      case 'course': return '📚';
      case 'subscription': return '💳';
      case 'booking': return '📅';
      case 'bonus': return '🎁';
      case 'topup': return '💰';
      default: return '💸';
    }
  };

  const getTransactionColor = (type) => {
    return type === 'credit' ? 'text-green-600' : 'text-red-600';
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'completed': return 'bg-green-100 text-green-800';
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'failed': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: walletData.currency
    }).format(amount);
  };

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Wallet</h1>
        <p className="text-gray-600">Manage your credits, payments, and subscriptions</p>
      </div>

      {/* Balance Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Available Balance</p>
              <p className="text-3xl font-bold text-green-600">{formatCurrency(walletData.balance)}</p>
            </div>
            <div className="text-4xl">💰</div>
          </div>
          <button className="w-full mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors">
            Add Funds
          </button>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Learning Credits</p>
              <p className="text-3xl font-bold text-blue-600">{walletData.credits}</p>
            </div>
            <div className="text-4xl">🎯</div>
          </div>
          <p className="text-sm text-gray-500 mt-2">Use for premium features</p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Subscription</p>
              <p className="text-xl font-bold text-purple-600">{walletData.subscription.plan}</p>
            </div>
            <div className="text-4xl">⭐</div>
          </div>
          <p className="text-sm text-gray-500 mt-2">Next billing: {walletData.subscription.nextBilling}</p>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-gray-200 mb-8">
        {[
          { key: 'overview', label: 'Overview' },
          { key: 'transactions', label: 'Transactions' },
          { key: 'payment-methods', label: 'Payment Methods' },
          { key: 'subscription', label: 'Subscription' }
        ].map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={`px-6 py-3 font-medium border-b-2 transition-colors ${
              activeTab === tab.key
                ? 'border-blue-600 text-blue-600'
                : 'border-transparent text-gray-500 hover:text-gray-700'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      {activeTab === 'overview' && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Recent Transactions */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Recent Transactions</h2>
            <div className="space-y-4">
              {walletData.transactions.slice(0, 5).map((transaction) => (
                <div key={transaction.id} className="flex items-center gap-4 p-3 bg-gray-50 rounded-lg">
                  <div className="text-2xl">{getTransactionIcon(transaction.category)}</div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="font-medium text-gray-900">{transaction.description}</p>
                        <p className="text-sm text-gray-500">{transaction.date}</p>
                      </div>
                      <div className="text-right">
                        <p className={`font-bold ${getTransactionColor(transaction.type)}`}>
                          {transaction.type === 'credit' ? '+' : ''}{formatCurrency(transaction.amount)}
                        </p>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(transaction.status)}`}>
                          {transaction.status}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <button className="w-full mt-4 text-blue-600 font-medium hover:text-blue-700">
              View All Transactions →
            </button>
          </div>

          {/* Subscription Details */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Subscription Details</h2>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Plan:</span>
                <span className="font-semibold text-gray-900">{walletData.subscription.plan}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Status:</span>
                <span className="px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                  {walletData.subscription.status}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Amount:</span>
                <span className="font-semibold text-gray-900">{formatCurrency(walletData.subscription.amount)}/month</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Next Billing:</span>
                <span className="font-semibold">{walletData.subscription.nextBilling}</span>
              </div>
            </div>
            
            <div className="mt-6">
              <h3 className="font-semibold text-gray-900 mb-3">Features Included:</h3>
              <ul className="space-y-2">
                {walletData.subscription.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-2 text-sm text-gray-600">
                    <span className="text-green-500">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6 flex gap-3">
              <button className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors">
                Manage Subscription
              </button>
              <button className="flex-1 bg-gray-100 text-gray-700 px-4 py-2 rounded-lg font-medium hover:bg-gray-200 transition-colors">
                Change Plan
              </button>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'transactions' && (
        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold text-gray-900">Transaction History</h2>
            <div className="flex gap-2">
              <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                <option value="">All Categories</option>
                <option value="course">Courses</option>
                <option value="subscription">Subscriptions</option>
                <option value="booking">Bookings</option>
                <option value="bonus">Bonuses</option>
                <option value="topup">Top-ups</option>
              </select>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors">
                Export
              </button>
            </div>
          </div>

          <div className="space-y-4">
            {walletData.transactions.map((transaction) => (
              <div key={transaction.id} className="flex items-center gap-4 p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                <div className="text-2xl">{getTransactionIcon(transaction.category)}</div>
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="font-medium text-gray-900">{transaction.description}</p>
                      <p className="text-sm text-gray-500">{transaction.date}</p>
                    </div>
                    <div className="text-right">
                      <p className={`font-bold text-lg ${getTransactionColor(transaction.type)}`}>
                        {transaction.type === 'credit' ? '+' : ''}{formatCurrency(transaction.amount)}
                      </p>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(transaction.status)}`}>
                        {transaction.status}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {activeTab === 'payment-methods' && (
        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold text-gray-900">Payment Methods</h2>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors">
              Add Payment Method
            </button>
          </div>

          <div className="space-y-4">
            {walletData.paymentMethods.map((method) => (
              <div key={method.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                <div className="flex items-center gap-4">
                  <div className="text-2xl">
                    {method.type === 'card' ? '💳' : '📧'}
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">
                      {method.type === 'card' 
                        ? `${method.brand} •••• ${method.last4}`
                        : method.email
                      }
                    </p>
                    {method.type === 'card' && (
                      <p className="text-sm text-gray-500">Expires {method.expiry}</p>
                    )}
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  {method.isDefault && (
                    <span className="px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                      Default
                    </span>
                  )}
                  <button className="text-gray-400 hover:text-gray-600">
                    Edit
                  </button>
                  <button className="text-red-400 hover:text-red-600">
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {activeTab === 'subscription' && (
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Subscription Management</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Current Plan</h3>
              <div className="border border-gray-200 rounded-lg p-6">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-xl font-bold text-gray-900">{walletData.subscription.plan}</h4>
                  <span className="px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                    Active
                  </span>
                </div>
                <p className="text-3xl font-bold text-gray-900 mb-4">
                  {formatCurrency(walletData.subscription.amount)}<span className="text-lg text-gray-500">/month</span>
                </p>
                <ul className="space-y-2 mb-6">
                  {walletData.subscription.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2 text-sm text-gray-600">
                      <span className="text-green-500">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="flex gap-3">
                  <button className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors">
                    Upgrade Plan
                  </button>
                  <button className="flex-1 bg-gray-100 text-gray-700 px-4 py-2 rounded-lg font-medium hover:bg-gray-200 transition-colors">
                    Cancel
                  </button>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Billing Information</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                  <span className="text-gray-600">Next Billing Date:</span>
                  <span className="font-semibold">{walletData.subscription.nextBilling}</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                  <span className="text-gray-600">Billing Cycle:</span>
                  <span className="font-semibold">Monthly</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                  <span className="text-gray-600">Payment Method:</span>
                  <span className="font-semibold">Visa •••• 4242</span>
                </div>
              </div>

              <div className="mt-6">
                <h3 className="font-semibold text-gray-900 mb-4">Upcoming Charges</h3>
                <div className="space-y-3">
                  {walletData.upcomingCharges.map((charge) => (
                    <div key={charge.id} className="flex justify-between items-center p-3 bg-yellow-50 rounded-lg">
                      <div>
                        <p className="font-medium text-gray-900">{charge.description}</p>
                        <p className="text-sm text-gray-500">{charge.date}</p>
                      </div>
                      <span className="font-bold text-gray-900">{formatCurrency(charge.amount)}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

import Social from './pages/dashboard/Social';

const StudentSocial = () => <Social />;
const StudentSettings = () => <Settings />;

// Mock subscription state (replace with real auth/payment later)
const isCompanionSubscribed = () => {
  return localStorage.getItem('companionSubscribed') === 'true';
};

function RequireCompanionSubscription({ children }) {
  // Temporarily disable subscription requirement for testing
  // if (!isCompanionSubscribed()) {
  //   window.location.href = '/companion-subscribe';
  //   return null;
  // }
  return children;
}

// Loading component for suspense fallback
const PageLoader = () => (
  <div className="min-h-screen bg-background text-foreground flex items-center justify-center">
    <div className="space-y-4 w-full max-w-md mx-auto p-6">
      <Skeleton className="h-8 w-3/4 bg-muted" />
      <Skeleton className="h-4 w-full bg-muted" />
      <Skeleton className="h-4 w-2/3 bg-muted" />
      <div className="space-y-2">
        <Skeleton className="h-12 w-full bg-muted" />
        <Skeleton className="h-12 w-full bg-muted" />
      </div>
    </div>
  </div>
);

// Optimize QueryClient for better performance
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // 5 minutes
      gcTime: 10 * 60 * 1000, // 10 minutes (formerly cacheTime)
      retry: 1,
      refetchOnWindowFocus: false,
    },
  },
});

const StudentMarketplace = () => <CourseMarketplace />;

function App() {
  const [adPanelVisible, setAdPanelVisible] = useState(false);
  const [userRole, setUserRole] = useState<'student' | 'instructor' | 'admin' | 'advertiser'>('student');

  return (
    <HelmetProvider>
      <I18nextProvider i18n={i18n}>
        <QueryClientProvider client={queryClient}>
          <TooltipProvider>
            <AppProvider>
              <UserProvider>
                <div className="relative min-h-screen app-container">
                  <Navigation />
                  <RightAdPanel 
                    userRole={userRole}
                    isVisible={adPanelVisible}
                    onToggle={() => setAdPanelVisible(!adPanelVisible)}
                  />
                  <main className={`w-full flex-1 transition-all duration-300 ${adPanelVisible ? 'lg:mr-80' : ''}`}>
                      <ResponsiveTest />
                      <Toaster />
                      <Sonner />
                      <FloatingNavigation />
                      
                      <Suspense fallback={<PageLoader />}>
                        <Routes>
                      <Route path="/" element={<Index />} />
                      <Route path="/courses" element={<Courses />} />
                      <Route path="/courses/:courseId" element={<Courses />} />
                      <Route path="/vendors" element={<Vendors />} />
                      <Route path="/features" element={<Features />} />
                      <Route path="/about" element={<About />} />
                      <Route path="/contact" element={<Contact />} />
                      <Route path="/contact-form" element={<ContactForm />} />
                      <Route path="/dashboard" element={<Dashboard />}>
                        <Route index element={
                          <Suspense fallback={<PageLoader />}>
                            <Overview />
                          </Suspense>
                        } />
                        <Route path="courses" element={
                          <Suspense fallback={<PageLoader />}>
                            <CoursesManagement />
                          </Suspense>
                        } />
                        <Route path="enrollments" element={
                          <Suspense fallback={<PageLoader />}>
                            <Enrollments />
                          </Suspense>
                        } />
                        <Route path="revenue" element={
                          <Suspense fallback={<PageLoader />}>
                            <Revenue />
                          </Suspense>
                        } />
                        <Route path="analytics" element={
                          <Suspense fallback={<PageLoader />}>
                            <Analytics />
                          </Suspense>
                        } />
                        <Route path="collaboration" element={
                          <Suspense fallback={<PageLoader />}>
                            <Collaboration />
                          </Suspense>
                        } />
                        <Route path="whiteboard" element={
                          <Suspense fallback={<PageLoader />}>
                            <WhiteboardPage />
                          </Suspense>
                        } />
                        <Route path="meetings" element={
                          <Suspense fallback={<PageLoader />}>
                            <Meetings />
                          </Suspense>
                        } />
                        <Route path="documents" element={
                          <Suspense fallback={<PageLoader />}>
                            <Documents />
                          </Suspense>
                        } />
                        <Route path="forums" element={
                          <Suspense fallback={<PageLoader />}>
                            <Forums />
                          </Suspense>
                        } />
                        <Route path="users" element={
                          <Suspense fallback={<PageLoader />}>
                            <UserManagement />
                          </Suspense>
                        } />
                        <Route path="library" element={
                          <Suspense fallback={<PageLoader />}>
                            <Library />
                          </Suspense>
                        } />
                        <Route path="templates" element={
                          <Suspense fallback={<PageLoader />}>
                            <Templates />
                          </Suspense>
                        } />
                        <Route path="ai-course-creator" element={
                          <Suspense fallback={<PageLoader />}>
                            <AICourseCreator />
                          </Suspense>
                        } />
                        <Route path="recommendations" element={
                          <Suspense fallback={<PageLoader />}>
                            <Recommendations />
                          </Suspense>
                        } />
                                              <Route path="settings" element={
                        <Suspense fallback={<PageLoader />}>
                          <DashboardSettings />
                        </Suspense>
                      } />
                      <Route path="course-creator" element={
                        <Suspense fallback={<PageLoader />}>
                          <CourseCreatorDashboard />
                        </Suspense>
                      } />
                      </Route>
                      <Route path="/dashboard/ai-lesson-generator" element={<AILessonGenerator />} />
                      <Route path="/dashboard/ai-quiz-generator" element={<AIQuizGenerator />} />
                      <Route path="/dashboard/ai-video-generator" element={<AIVideoGenerator />} />
                                      <Route path="/dashboard/ai-assessment-generator" element={<AIAssessmentGenerator />} />
                <Route path="/dashboard/interactive-content-designer" element={<InteractiveContentDesigner />} />
                <Route path="/dashboard/chatbot-trainer" element={<ChatbotTrainer />} />
                <Route path="/dashboard/white-label-branding" element={<WhiteLabelBranding />} />
                <Route path="/dashboard/scorm-export" element={<SCORMExport />} />
                <Route path="/dashboard/instructor-management" element={<InstructorManagement />} />
                <Route path="/dashboard/instructor-onboarding" element={<InstructorOnboarding />} />
                
                      <Route path="/companion" element={
                        <RequireCompanionSubscription>
                          <CompanionsLibrary />
                        </RequireCompanionSubscription>
                      } />
                      <Route path="/companion/session/:id" element={
                        <RequireCompanionSubscription>
                          <CompanionSession />
                        </RequireCompanionSubscription>
                      } />
                      <Route path="/companion/analytics" element={
                        <RequireCompanionSubscription>
                          <CompanionAnalytics />
                        </RequireCompanionSubscription>
                      } />
                      <Route path="/companion/settings" element={
                        <RequireCompanionSubscription>
                          <CompanionSettings />
                        </RequireCompanionSubscription>
                      } />
                      <Route path="/companion/create" element={
                        <RequireCompanionSubscription>
                          <CompanionCreator />
                        </RequireCompanionSubscription>
                      } />
                      <Route path="/companions" element={<Navigate to="/companion" replace />} />
                      <Route path="/companions/create" element={<Navigate to="/companion/create" replace />} />
                      <Route path="/companion-subscribe" element={<CompanionSubscriptionPage />} />
        <Route path="/ai-video-calling" element={<AIVideoCalling />} />
                        <Route path="/creators-portal" element={<CreatorsPortal />} />
                <Route path="/payment-success" element={<PaymentSuccess />} />
                <Route path="/dashboard/payment-analytics" element={<PaymentAnalytics />} />
                      <Route path="/meet-ai" element={<MeetAI />} />
                      <Route path="/course-library" element={<CourseLibrary />} />
                      <Route path="/virtual-classroom" element={<VirtualClassroom />} />
                      <Route path="/quiz-builder" element={<QuizBuilder />} />
                      <Route path="/authoring-tool" element={<AuthoringTool />} />
                      <Route path="/signin" element={<SignIn />} />
                      <Route path="/signup" element={<SignUp />} />
                      <Route path="/profile" element={<Profile />} />
                      <Route path="/get-demo" element={<GetDemo />} />
                      <Route path="/get-quote" element={<GetQuote />} />
                      <Route path="/free-trial" element={<FreeTrial />} />
                      <Route path="/case-studies" element={<CaseStudies />} />
                      <Route path="/start-learning" element={<StartLearning />} />
                      <Route path="/become-instructor" element={<BecomeInstructor />} />
                      <Route path="/career-guidance" element={<CareerGuidance />} />
                      <Route path="/create-course" element={<CreateCourse />} />
                      <Route path="/student-portal" element={<StudentPortal />} />
                      <Route path="/student-portal/:tab" element={<StudentPortal />} />
                      <Route path="/instructor-portal" element={<InstructorPortal />} />
                      <Route path="/instructor-portal/:tab" element={<InstructorPortal />} />
                      <Route path="/advanced-features" element={<AdvancedFeatures />} />
                      <Route path="/course-viewer/:courseId" element={<CourseViewer />} />
                      <Route path="/vendor-portal" element={<VendorPortal />} />
                      <Route path="/advertiser-portal" element={<AdvertiserPortal />} />
                      <Route path="/course-management/:courseId" element={<CourseManagement />} />
                      {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                      <Route path="/vendor/subscription" element={
                        <Suspense fallback={<PageLoader />}>
                          <VendorSubscriptionPage />
                        </Suspense>
                      } />
                      <Route path="/vendor/dashboard" element={
                        <Suspense fallback={<PageLoader />}>
                          <VendorDashboardPage />
                        </Suspense>
                      } />
                      <Route path="/pricing" element={<Pricing />} />
                      <Route path="/plagiarism-checker" element={
                        <Suspense fallback={<PageLoader />}>
                          <PlagiarismChecker />
                        </Suspense>
                      } />
                      <Route path="/grammar-checker" element={
                        <Suspense fallback={<PageLoader />}>
                          <GrammarChecker />
                        </Suspense>
                      } />
                      <Route path="/one-to-one-booking" element={
                        <Suspense fallback={<PageLoader />}>
                          <OneToOneBooking />
                        </Suspense>
                      } />
                      <Route path="/search" element={
                        <Suspense fallback={<PageLoader />}>
                          <SearchResults />
                        </Suspense>
                      } />
                      <Route path="/instructor-application" element={
                        <Suspense fallback={<PageLoader />}>
                          <InstructorApplication />
                        </Suspense>
                      } />
                      <Route path="/instructor-application-success" element={
                        <Suspense fallback={<PageLoader />}>
                          <InstructorApplicationSuccess />
                        </Suspense>
                      } />
                      <Route path="/graduate-certificates" element={<GraduateCertificatesPage />} />
                      <Route path="/category/:categorySlug" element={<CategoryPage />} />
                      <Route path="/careers/:categorySlug" element={<CareerCategoryPage />} />
                      <Route path="/careers/:categorySlug/:careerSlug" element={<CareerDetailPage />} />
                      <Route path="/content/:language/:type/:slug" element={<ContentDetailPage />} />
                      <Route path="/multilingual-content-example" element={<MultilingualContentExample />} />
                      <Route path="/multilingual-content" element={<MultilingualContentPage />} />
                      <Route path="/multilingual-content/:id" element={<ContentDetailPage />} />
                      <Route path="/rto-course-library" element={<RTOCourseLibrary />} />
                      <Route path="/rto-courses" element={<RTOCourseLibrary />} />
                      
                      {/* Advanced Analytics and Social Features */}
                      <Route path="/analytics-dashboard" element={
                        <Suspense fallback={<PageLoader />}>
                          <AnalyticsDashboard />
                        </Suspense>
                      } />
                      <Route path="/social-feed" element={
                        <Suspense fallback={<PageLoader />}>
                          <SocialFeed />
                        </Suspense>
                      } />
                      <Route path="/social-feed/:userId" element={
                        <Suspense fallback={<PageLoader />}>
                          <SocialFeed />
                        </Suspense>
                      } />
                      <Route path="/advanced-features-demo" element={
                        <Suspense fallback={<PageLoader />}>
                          <AdvancedFeaturesDemo />
                        </Suspense>
                      } />
                      
                      <Route path="/course-authoring" element={<CourseAuthoringLanding />} />
                      <Route path="/course-authoring/editor" element={<CourseAuthoringTool />} />
                      <Route path="/course/:courseId/workspace" element={<CourseWorkspace />} />
                      <Route path="/course-workspace/:courseId" element={<CourseWorkspace />} />
                      <Route path="/workshops" element={<Workshops />} />
                      <Route path="/partners" element={<Partners />} />
                      <Route path="/certification" element={<Certification />} />
                      <Route path="*" element={<NotFound />} />
                    </Routes>
                  </Suspense>
                </main>
              </div>
            </UserProvider>
          </AppProvider>
        </TooltipProvider>
      </QueryClientProvider>
    </I18nextProvider>
  </HelmetProvider>
    );
  }

export default App;
