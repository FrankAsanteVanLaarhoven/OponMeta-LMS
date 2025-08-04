import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  CheckCircle, 
  Mail, 
  Clock, 
  Users, 
  BookOpen, 
  ArrowRight,
  Star
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const InstructorApplicationSuccess = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#0a1834] py-8">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center">
              <CheckCircle className="w-12 h-12 text-white" />
            </div>
          </div>
          
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Application Submitted Successfully!
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Thank you for your interest in becoming an instructor. We're excited to review your application and help you share your knowledge with learners worldwide.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* What Happens Next */}
          <Card className="bg-white/10 backdrop-blur-md border-white/20">
            <CardHeader>
              <CardTitle className="text-white text-2xl">What Happens Next?</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold text-sm">1</span>
                </div>
                <div>
                  <h3 className="text-white font-semibold">Application Review</h3>
                  <p className="text-blue-100 text-sm">Our team will review your application within 5-7 business days</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold text-sm">2</span>
                </div>
                <div>
                  <h3 className="text-white font-semibold">Email Notification</h3>
                  <p className="text-blue-100 text-sm">You'll receive an email with our decision and next steps</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold text-sm">3</span>
                </div>
                <div>
                  <h3 className="text-white font-semibold">Onboarding Process</h3>
                  <p className="text-blue-100 text-sm">If approved, we'll guide you through the instructor onboarding</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold text-sm">4</span>
                </div>
                <div>
                  <h3 className="text-white font-semibold">Start Creating</h3>
                  <p className="text-blue-100 text-sm">Begin creating your first course and reaching global learners</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Timeline */}
          <Card className="bg-white/10 backdrop-blur-md border-white/20">
            <CardHeader>
              <CardTitle className="text-white text-2xl">Timeline</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-yellow-400" />
                <div>
                  <h3 className="text-white font-semibold">5-7 Business Days</h3>
                  <p className="text-blue-100 text-sm">Application review period</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-green-400" />
                <div>
                  <h3 className="text-white font-semibold">Email Response</h3>
                  <p className="text-blue-100 text-sm">Detailed feedback and next steps</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Users className="w-5 h-5 text-purple-400" />
                <div>
                  <h3 className="text-white font-semibold">1-2 Weeks</h3>
                  <p className="text-blue-100 text-sm">Onboarding and setup process</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <BookOpen className="w-5 h-5 text-blue-400" />
                <div>
                  <h3 className="text-white font-semibold">Ready to Teach</h3>
                  <p className="text-blue-100 text-sm">Start creating and publishing courses</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Next Steps */}
        <Card className="bg-white/10 backdrop-blur-md border-white/20 mb-8">
          <CardHeader>
            <CardTitle className="text-white text-2xl">While You Wait</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-white font-semibold mb-2">Explore Our Platform</h3>
                <p className="text-blue-100 text-sm">Browse existing courses to understand our teaching standards and course structure</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-white font-semibold mb-2">Prepare Your Content</h3>
                <p className="text-blue-100 text-sm">Start planning your course outline, gathering materials, and preparing your teaching approach</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-white font-semibold mb-2">Join Our Community</h3>
                <p className="text-blue-100 text-sm">Connect with other instructors and stay updated on platform news and opportunities</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Action Buttons */}
        <div className="text-center space-y-4">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={() => navigate('/courses')}
              className="bg-blue-600 hover:bg-blue-700 text-white"
            >
              <BookOpen className="w-5 h-5 mr-2" />
              Explore Courses
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            
            <Button 
              onClick={() => navigate('/')}
              variant="outline"
              className="border-white/20 text-white hover:bg-white/10"
            >
              Return to Home
            </Button>
          </div>
          
          <p className="text-blue-100 text-sm">
            Have questions? Contact us at{' '}
            <a href="mailto:instructors@oponmeta.com" className="text-blue-300 hover:underline">
              instructors@oponmeta.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default InstructorApplicationSuccess; 