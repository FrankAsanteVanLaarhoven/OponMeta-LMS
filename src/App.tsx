import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense, lazy, useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';
import { AppProvider } from './context/AppContext';
import { UserProvider } from './context/UserContext';
import CompanionsLibrary from './pages/CompanionsLibrary';
import CompanionSession from './pages/CompanionSession';
import CompanionAnalytics from './pages/CompanionAnalytics';
import CompanionSettings from './pages/CompanionSettings';
import CompanionCreator from './pages/CompanionCreator';
import CompanionSubscriptionPage from './pages/CompanionSubscriptionPage';
import VendorSubscription from './pages/VendorSubscription';
import VendorDashboard from './pages/VendorDashboard';
import Navigation from './components/Navigation';
import RightAdPanel from './components/RightAdPanel';

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
const StudentPortal = lazy(() => import("./pages/StudentPortal"));
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

// Mock subscription state (replace with real auth/payment later)
const isCompanionSubscribed = () => {
  return localStorage.getItem('companionSubscribed') === 'true';
};

function RequireCompanionSubscription({ children }) {
  if (!isCompanionSubscribed()) {
    window.location.href = '/companion-subscribe';
    return null;
  }
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

function App() {
  const [adPanelVisible, setAdPanelVisible] = useState(true);
  const [userRole, setUserRole] = useState<'student' | 'instructor' | 'admin' | 'advertiser'>('student');

  return (
    <I18nextProvider i18n={i18n}>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
                      <AppProvider>
              <UserProvider>
                <div className="relative min-h-screen bg-gray-50">
                  <Navigation />
                  <RightAdPanel 
                    userRole={userRole}
                    isVisible={adPanelVisible}
                    onToggle={() => setAdPanelVisible(!adPanelVisible)}
                  />
                  <div className="flex">
                    <main className="flex-1">
                      <Toaster />
                      <Sonner />
                      
                      <Suspense fallback={<PageLoader />}>
                        <Routes>
                      <Route path="/" element={<Index />} />
                      <Route path="/courses" element={<Courses />} />
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
                      <Route path="/companion-subscribe" element={<CompanionSubscriptionPage />} />
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
                      <Route path="*" element={<NotFound />} />
                    </Routes>
                  </Suspense>
                        </main>
                      </div>
                  </div>
                </UserProvider>
              </AppProvider>
            </TooltipProvider>
          </QueryClientProvider>
        </I18nextProvider>
      );
    }

export default App;
