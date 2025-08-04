import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  User, 
  Mail, 
  Phone, 
  Briefcase, 
  GraduationCap, 
  Globe, 
  Star, 
  Users, 
  DollarSign, 
  Video, 
  Award,
  CheckCircle,
  ArrowRight,
  Upload,
  FileText
} from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

const EXPERIENCE_LEVELS = [
  'Less than 1 year',
  '1-3 years',
  '3-5 years',
  '5-10 years',
  '10+ years'
];

const SUBJECT_AREAS = [
  'Technology and Digital Skills',
  'Data and Analytics',
  'Business and Strategy',
  'Health and Healthcare',
  'Design and Creative Media',
  'Education and Teaching',
  'Marketing and Sales',
  'Finance and Accounting',
  'Language and Communication',
  'Personal Development',
  'Engineering and Construction',
  'Agriculture and Food System',
  'Environment and Sustainability',
  'Sports and Fitness',
  'Hospitality and Tourism',
  'Transport and Logistics',
  'Opontainment',
  'Other'
];

const InstructorApplication = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    professionalTitle: '',
    yearsOfExperience: '',
    subjectArea: '',
    courseIdea: '',
    bio: '',
    linkedinProfile: '',
    website: '',
    portfolio: '',
    resume: null as File | null,
    sampleContent: null as File | null,
    agreeToTerms: false,
    agreeToRevenueShare: false,
  });

  const handleInputChange = (field: string, value: string | boolean | File | null) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleFileUpload = (field: 'resume' | 'sampleContent', event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] || null;
    handleInputChange(field, file);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.agreeToTerms || !formData.agreeToRevenueShare) {
      toast.error('Please agree to the terms and revenue share agreement');
      return;
    }

    if (!formData.firstName || !formData.lastName || !formData.email || !formData.professionalTitle || !formData.subjectArea || !formData.courseIdea) {
      toast.error('Please fill in all required fields');
      return;
    }

    setLoading(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Save application to localStorage
      const applications = JSON.parse(localStorage.getItem('instructor_applications') || '[]');
      const newApplication = {
        id: Date.now(),
        ...formData,
        status: 'pending',
        submittedAt: new Date().toISOString(),
      };
      applications.push(newApplication);
      localStorage.setItem('instructor_applications', JSON.stringify(applications));
      
      toast.success('Application submitted successfully! We\'ll review your application and get back to you within 5-7 business days.');
      navigate('/instructor-application-success');
    } catch (error) {
      console.error('Application error:', error);
      toast.error('Failed to submit application. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0a1834] py-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Share Your Knowledge Globally
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Inspire learners worldwide and grow your teaching career with our global platform
          </p>
          <Button 
            className="mt-6 bg-yellow-500 hover:bg-yellow-600 text-gray-900"
            onClick={() => navigate('/instructor-benefits')}
          >
            <Star className="w-5 h-5 mr-2" />
            Join 1,200+ Global Instructors
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Application Form */}
          <Card className="bg-white/10 backdrop-blur-md border-white/20">
            <CardHeader>
              <CardTitle className="text-white text-2xl">Apply to Teach</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-white mb-2 block">
                      First Name *
                    </label>
                    <Input
                      placeholder="First Name"
                      value={formData.firstName}
                      onChange={(e) => handleInputChange('firstName', e.target.value)}
                      className="bg-white/10 border-white/20 text-white placeholder-gray-300"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-white mb-2 block">
                      Last Name *
                    </label>
                    <Input
                      placeholder="Last Name"
                      value={formData.lastName}
                      onChange={(e) => handleInputChange('lastName', e.target.value)}
                      className="bg-white/10 border-white/20 text-white placeholder-gray-300"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium text-white mb-2 block">
                    Email Address *
                  </label>
                  <Input
                    type="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className="bg-white/10 border-white/20 text-white placeholder-gray-300"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-white mb-2 block">
                    Phone Number (optional)
                  </label>
                  <Input
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    className="bg-white/10 border-white/20 text-white placeholder-gray-300"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-white mb-2 block">
                    Professional Title *
                  </label>
                  <Input
                    placeholder="Your Professional Title"
                    value={formData.professionalTitle}
                    onChange={(e) => handleInputChange('professionalTitle', e.target.value)}
                    className="bg-white/10 border-white/20 text-white placeholder-gray-300"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-white mb-2 block">
                    Years of Experience *
                  </label>
                  <Select value={formData.yearsOfExperience} onValueChange={(value) => handleInputChange('yearsOfExperience', value)}>
                    <SelectTrigger className="bg-white/10 border-white/20 text-white">
                      <SelectValue placeholder="Select experience level" />
                    </SelectTrigger>
                    <SelectContent className="bg-gray-900 border-gray-700">
                      {EXPERIENCE_LEVELS.map((level) => (
                        <SelectItem key={level} value={level} className="text-white hover:bg-gray-800">
                          {level}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="text-sm font-medium text-white mb-2 block">
                    Subject Area *
                  </label>
                  <Select value={formData.subjectArea} onValueChange={(value) => handleInputChange('subjectArea', value)}>
                    <SelectTrigger className="bg-white/10 border-white/20 text-white">
                      <SelectValue placeholder="What would you like to teach?" />
                    </SelectTrigger>
                    <SelectContent className="bg-gray-900 border-gray-700">
                      {SUBJECT_AREAS.map((area) => (
                        <SelectItem key={area} value={area} className="text-white hover:bg-gray-800">
                          {area}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="text-sm font-medium text-white mb-2 block">
                    Course Idea *
                  </label>
                  <Textarea
                    placeholder="Describe your course idea in detail..."
                    value={formData.courseIdea}
                    onChange={(e) => handleInputChange('courseIdea', e.target.value)}
                    className="bg-white/10 border-white/20 text-white placeholder-gray-300 min-h-[100px]"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-white mb-2 block">
                    Professional Bio
                  </label>
                  <Textarea
                    placeholder="Tell us about your background, expertise, and teaching experience..."
                    value={formData.bio}
                    onChange={(e) => handleInputChange('bio', e.target.value)}
                    className="bg-white/10 border-white/20 text-white placeholder-gray-300 min-h-[100px]"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-white mb-2 block">
                      LinkedIn Profile
                    </label>
                    <Input
                      placeholder="https://linkedin.com/in/yourprofile"
                      value={formData.linkedinProfile}
                      onChange={(e) => handleInputChange('linkedinProfile', e.target.value)}
                      className="bg-white/10 border-white/20 text-white placeholder-gray-300"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-white mb-2 block">
                      Website (optional)
                    </label>
                    <Input
                      placeholder="https://yourwebsite.com"
                      value={formData.website}
                      onChange={(e) => handleInputChange('website', e.target.value)}
                      className="bg-white/10 border-white/20 text-white placeholder-gray-300"
                    />
                  </div>
                </div>

                {/* File Uploads */}
                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium text-white mb-2 block">
                      Resume/CV
                    </label>
                    <div className="border-2 border-dashed border-white/30 rounded-lg p-4 text-center">
                      <Upload className="w-8 h-8 text-white/60 mx-auto mb-2" />
                      <input
                        type="file"
                        accept=".pdf,.doc,.docx"
                        onChange={(e) => handleFileUpload('resume', e)}
                        className="hidden"
                        id="resume-upload"
                      />
                      <label htmlFor="resume-upload" className="text-white cursor-pointer">
                        {formData.resume ? formData.resume.name : 'Click to upload resume (PDF, DOC, DOCX)'}
                      </label>
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-white mb-2 block">
                      Sample Content (optional)
                    </label>
                    <div className="border-2 border-dashed border-white/30 rounded-lg p-4 text-center">
                      <FileText className="w-8 h-8 text-white/60 mx-auto mb-2" />
                      <input
                        type="file"
                        accept=".pdf,.doc,.docx,.ppt,.pptx,.mp4,.mov"
                        onChange={(e) => handleFileUpload('sampleContent', e)}
                        className="hidden"
                        id="content-upload"
                      />
                      <label htmlFor="content-upload" className="text-white cursor-pointer">
                        {formData.sampleContent ? formData.sampleContent.name : 'Upload sample content (PDF, DOC, PPT, Video)'}
                      </label>
                    </div>
                  </div>
                </div>

                {/* Agreements */}
                <div className="space-y-4">
                  <div className="flex items-start space-x-2">
                    <input
                      type="checkbox"
                      id="agree-terms"
                      checked={formData.agreeToTerms}
                      onChange={(e) => handleInputChange('agreeToTerms', e.target.checked)}
                      className="mt-1"
                    />
                    <label htmlFor="agree-terms" className="text-sm text-white">
                      I agree to the{' '}
                      <a href="/terms" className="text-blue-300 hover:underline">Terms of Service</a>
                      {' '}and{' '}
                      <a href="/privacy" className="text-blue-300 hover:underline">Privacy Policy</a>
                    </label>
                  </div>

                  <div className="flex items-start space-x-2">
                    <input
                      type="checkbox"
                      id="agree-revenue"
                      checked={formData.agreeToRevenueShare}
                      onChange={(e) => handleInputChange('agreeToRevenueShare', e.target.checked)}
                      className="mt-1"
                    />
                    <label htmlFor="agree-revenue" className="text-sm text-white">
                      I agree to the revenue sharing model (instructors keep up to 70% of course revenue)
                    </label>
                  </div>
                </div>

                <Button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 text-lg font-semibold"
                >
                  {loading ? (
                    <div className="flex items-center">
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Submitting Application...
                    </div>
                  ) : (
                    <div className="flex items-center justify-center">
                      Submit Application
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </div>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Benefits Section */}
          <div className="space-y-6">
            <Card className="bg-white/10 backdrop-blur-md border-white/20">
              <CardHeader>
                <CardTitle className="text-white text-2xl">Why Teach with Our Platform?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-blue-100 mb-6">
                  Empower learners everywhere and expand your impact as a global educator.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <DollarSign className="w-6 h-6 text-yellow-400 mt-1" />
                    <div>
                      <h3 className="text-white font-semibold">Earn Revenue</h3>
                      <p className="text-blue-100 text-sm">Keep up to 70% of your course revenue with our competitive instructor fee structure</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Globe className="w-6 h-6 text-green-400 mt-1" />
                    <div>
                      <h3 className="text-white font-semibold">Global Reach</h3>
                      <p className="text-blue-100 text-sm">Access millions of learners worldwide across 54 countries</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Video className="w-6 h-6 text-purple-400 mt-1" />
                    <div>
                      <h3 className="text-white font-semibold">Course Tools</h3>
                      <p className="text-blue-100 text-sm">Professional course creation tools with AI-powered assistance</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Award className="w-6 h-6 text-blue-400 mt-1" />
                    <div>
                      <h3 className="text-white font-semibold">Studio Access</h3>
                      <p className="text-blue-100 text-sm">Free access to our professional video recording studios</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Users className="w-6 h-6 text-pink-400 mt-1" />
                    <div>
                      <h3 className="text-white font-semibold">Marketing Support</h3>
                      <p className="text-blue-100 text-sm">Our team helps promote your courses to the right audience</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Star className="w-6 h-6 text-yellow-400 mt-1" />
                    <div>
                      <h3 className="text-white font-semibold">Recognition</h3>
                      <p className="text-blue-100 text-sm">Build your personal brand and become a recognized industry expert</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Requirements */}
            <Card className="bg-white/10 backdrop-blur-md border-white/20">
              <CardHeader>
                <CardTitle className="text-white text-xl">Requirements</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-blue-100 mb-4">
                  What you need to join our global instructor community:
                </p>
                
                <ul className="space-y-2">
                  <li className="flex items-center text-blue-100 text-sm">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    Professional expertise in your subject area
                  </li>
                  <li className="flex items-center text-blue-100 text-sm">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    Passion for teaching and helping others learn
                  </li>
                  <li className="flex items-center text-blue-100 text-sm">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    Ability to create engaging, high-quality content
                  </li>
                  <li className="flex items-center text-blue-100 text-sm">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    Commitment to student success and satisfaction
                  </li>
                  <li className="flex items-center text-blue-100 text-sm">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    Reliable internet connection and basic tech skills
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstructorApplication; 