import React from 'react';
import Sidebar from './components/Sidebar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import Dashboard from './pages/Dashboard';
import Courses from './pages/Courses';
import MiniCourses from './pages/MiniCourses';
import Users from './pages/Users';
import Reports from './pages/Reports';
import Settings from './pages/Settings';
import CourseCreate from './pages/CourseCreate';
import MiniCourseCreate from './pages/MiniCourseCreate';
import AICourseCreator from './pages/AICourseCreator';
import AILessonGenerator from './pages/AILessonGenerator';
import AIQuizGenerator from './pages/AIQuizGenerator';
import AIVideoGenerator from './pages/AIVideoGenerator';
import AIAssessmentGenerator from './pages/AIAssessmentGenerator';
import CompanionsLibrary from './pages/CompanionsLibrary';
import CompanionSession from './pages/CompanionSession';

function App() {
  return (
    <AppProvider>
      <Router>
        <div className="flex h-screen">
          <Sidebar />
          <main className="flex-1 bg-gray-50">
            <Routes>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/dashboard/ai-course-creator" element={<AICourseCreator />} />
              <Route path="/dashboard/ai-lesson-generator" element={<AILessonGenerator />} />
              <Route path="/dashboard/ai-quiz-generator" element={<AIQuizGenerator />} />
              <Route path="/dashboard/ai-video-generator" element={<AIVideoGenerator />} />
              <Route path="/dashboard/ai-assessment-generator" element={<AIAssessmentGenerator />} />
              <Route path="/companions" element={<CompanionsLibrary />} />
              <Route path="/companions/:id" element={<CompanionSession />} />
              <Route path="/courses" element={<Courses />} />
              <Route path="/courses/create" element={<CourseCreate />} />
              <Route path="/mini-courses" element={<MiniCourses />} />
              <Route path="/mini-courses/create" element={<MiniCourseCreate />} />
              <Route path="/rto-qualifications" element={<div className="p-6"><h1>RTO Qualifications</h1></div>} />
              <Route path="/blog" element={<div className="p-6"><h1>Blog</h1></div>} />
              <Route path="/pages" element={<div className="p-6"><h1>Pages</h1></div>} />
              <Route path="/users" element={<Users />} />
              <Route path="/reports" element={<Reports />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="*" element={<Dashboard />} />
            </Routes>
          </main>
        </div>
      </Router>
    </AppProvider>
  );
}

export default App;
