import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import { Skeleton } from "@/components/ui/skeleton";

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
const GetDemo = lazy(() => import("./pages/GetDemo"));
const GetQuote = lazy(() => import("./pages/GetQuote"));
const FreeTrial = lazy(() => import("./pages/FreeTrial"));
const CaseStudies = lazy(() => import("./pages/CaseStudies"));
const StartLearning = lazy(() => import("./pages/StartLearning"));
const BecomeInstructor = lazy(() => import("./pages/BecomeInstructor"));
const CareerGuidance = lazy(() => import("./pages/CareerGuidance"));
const CreateCourse = lazy(() => import("./pages/CreateCourse"));

// Loading component for suspense fallback
const PageLoader = () => (
  <div className="min-h-screen bg-gradient-to-br from-sky-400 via-blue-500 to-cyan-500 flex items-center justify-center">
    <div className="space-y-4 w-full max-w-md mx-auto p-6">
      <Skeleton className="h-8 w-3/4 bg-white/20" />
      <Skeleton className="h-4 w-full bg-white/20" />
      <Skeleton className="h-4 w-2/3 bg-white/20" />
      <div className="space-y-2">
        <Skeleton className="h-12 w-full bg-white/20" />
        <Skeleton className="h-12 w-full bg-white/20" />
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

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
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
            </Route>
            <Route path="/meet-ai" element={<MeetAI />} />
            <Route path="/course-library" element={<CourseLibrary />} />
            <Route path="/virtual-classroom" element={<VirtualClassroom />} />
            <Route path="/quiz-builder" element={<QuizBuilder />} />
            <Route path="/authoring-tool" element={<AuthoringTool />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/get-demo" element={<GetDemo />} />
            <Route path="/get-quote" element={<GetQuote />} />
            <Route path="/free-trial" element={<FreeTrial />} />
            <Route path="/case-studies" element={<CaseStudies />} />
            <Route path="/start-learning" element={<StartLearning />} />
            <Route path="/become-instructor" element={<BecomeInstructor />} />
            <Route path="/career-guidance" element={<CareerGuidance />} />
            <Route path="/create-course" element={<CreateCourse />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
