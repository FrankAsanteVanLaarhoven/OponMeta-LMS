import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  TrendingUp, 
  Users, 
  BookOpen, 
  DollarSign, 
  Star, 
  BarChart3, 
  Settings, 
  Plus,
  Edit,
  Eye,
  Trash2,
  Upload,
  Download,
  Calendar,
  Target,
  Award
} from 'lucide-react';
import { VendorProfile, VendorAnalytics, VendorCourse } from '@/types/vendor';
import { getVendorPlanFeatures } from '@/data/vendorPlans';

// Mock data - replace with real API calls
const mockVendorProfile: VendorProfile = {
  id: '1',
  name: 'Dr. Sarah Johnson',
  email: 'sarah@example.com',
  company: 'Tech Education Pro',
  bio: 'Expert in software development and AI education with 10+ years of experience.',
  avatar: '/team1.jpg',
  website: 'https://techeducationpro.com',
  socialLinks: {
    linkedin: 'https://linkedin.com/in/sarahjohnson',
    twitter: 'https://twitter.com/sarahjohnson',
    youtube: 'https://youtube.com/@sarahjohnson'
  },
  specialties: ['JavaScript', 'React', 'AI/ML', 'Web Development'],
  experience: 10,
  rating: 4.8,
  totalStudents: 15420,
  totalCourses: 12,
  totalRevenue: 45600,
  joinDate: new Date('2023-01-15'),
  isVerified: true,
  subscription: {
    plan: 'professional',
    status: 'active',
    currentPeriodStart: new Date('2024-01-01'),
    currentPeriodEnd: new Date('2024-02-01'),
    cancelAtPeriodEnd: false,
    stripeCustomerId: 'cus_123456789',
    stripeSubscriptionId: 'sub_123456789'
  }
};

const mockAnalytics: VendorAnalytics = {
  totalRevenue: 45600,
  monthlyRevenue: 3800,
  totalStudents: 15420,
  activeStudents: 8920,
  totalCourses: 12,
  publishedCourses: 10,
  averageRating: 4.8,
  completionRate: 78,
  topPerformingCourses: [
    {
      id: '1',
      title: 'Complete React Masterclass',
      revenue: 12500,
      students: 3200,
      rating: 4.9
    },
    {
      id: '2',
      title: 'JavaScript Fundamentals',
      revenue: 8900,
      students: 2800,
      rating: 4.7
    },
    {
      id: '3',
      title: 'AI for Beginners',
      revenue: 7600,
      students: 2100,
      rating: 4.8
    }
  ],
  revenueByMonth: [
    { month: 'Jan', revenue: 3200 },
    { month: 'Feb', revenue: 3800 },
    { month: 'Mar', revenue: 4200 },
    { month: 'Apr', revenue: 3900 },
    { month: 'May', revenue: 4500 },
    { month: 'Jun', revenue: 4800 }
  ]
};

const mockCourses: VendorCourse[] = [
  {
    id: '1',
    title: 'Complete React Masterclass',
    description: 'Learn React from scratch to advanced concepts',
    thumbnail: '/course1.jpg',
    price: 99,
    status: 'published',
    category: 'Web Development',
    tags: ['React', 'JavaScript', 'Frontend'],
    students: 3200,
    rating: 4.9,
    revenue: 12500,
    createdAt: new Date('2023-03-15'),
    updatedAt: new Date('2024-01-10')
  },
  {
    id: '2',
    title: 'JavaScript Fundamentals',
    description: 'Master the basics of JavaScript programming',
    thumbnail: '/course2.jpg',
    price: 79,
    status: 'published',
    category: 'Programming',
    tags: ['JavaScript', 'ES6', 'Basics'],
    students: 2800,
    rating: 4.7,
    revenue: 8900,
    createdAt: new Date('2023-02-20'),
    updatedAt: new Date('2024-01-05')
  },
  {
    id: '3',
    title: 'AI for Beginners',
    description: 'Introduction to artificial intelligence concepts',
    thumbnail: '/course3.jpg',
    price: 129,
    status: 'published',
    category: 'AI/ML',
    tags: ['AI', 'Machine Learning', 'Python'],
    students: 2100,
    rating: 4.8,
    revenue: 7600,
    createdAt: new Date('2023-04-10'),
    updatedAt: new Date('2024-01-12')
  }
];

const VendorDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const planFeatures = getVendorPlanFeatures(mockVendorProfile.subscription.plan);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-100 text-green-800';
      case 'inactive': return 'bg-gray-100 text-gray-800';
      case 'cancelled': return 'bg-red-100 text-red-800';
      case 'past_due': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Vendor Dashboard</h1>
            <p className="text-gray-600 mt-2">
              Welcome back, {mockVendorProfile.name}! Here's your business overview.
            </p>
          </div>
          <div className="flex gap-3 mt-4 lg:mt-0">
            <Button variant="outline">
              <Settings className="w-4 h-4 mr-2" />
              Settings
            </Button>
            <Button>
              <Plus className="w-4 h-4 mr-2" />
              Create Course
            </Button>
          </div>
        </div>

        {/* Subscription Status */}
        <Card className="mb-8">
          <CardContent className="p-6">
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center">
              <div>
                <h3 className="text-lg font-semibold mb-2">Subscription Status</h3>
                <div className="flex items-center gap-4">
                  <Badge className={getStatusColor(mockVendorProfile.subscription.status)}>
                    {mockVendorProfile.subscription.status.toUpperCase()}
                  </Badge>
                  <span className="text-gray-600">
                    {planFeatures?.name} Plan
                  </span>
                </div>
                <p className="text-sm text-gray-500 mt-2">
                  Next billing: {mockVendorProfile.subscription.currentPeriodEnd.toLocaleDateString()}
                </p>
              </div>
              <Button variant="outline" className="mt-4 lg:mt-0">
                Manage Subscription
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Analytics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Total Revenue</p>
                  <p className="text-2xl font-bold text-gray-900">
                    ${mockAnalytics.totalRevenue.toLocaleString()}
                  </p>
                </div>
                <DollarSign className="w-8 h-8 text-green-500" />
              </div>
              <div className="flex items-center mt-2">
                <TrendingUp className="w-4 h-4 text-green-500 mr-1" />
                <span className="text-sm text-green-600">+12% from last month</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Total Students</p>
                  <p className="text-2xl font-bold text-gray-900">
                    {mockAnalytics.totalStudents.toLocaleString()}
                  </p>
                </div>
                <Users className="w-8 h-8 text-blue-500" />
              </div>
              <div className="flex items-center mt-2">
                <TrendingUp className="w-4 h-4 text-green-500 mr-1" />
                <span className="text-sm text-green-600">+8% from last month</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Published Courses</p>
                  <p className="text-2xl font-bold text-gray-900">
                    {mockAnalytics.publishedCourses}
                  </p>
                </div>
                <BookOpen className="w-8 h-8 text-purple-500" />
              </div>
              <div className="flex items-center mt-2">
                <span className="text-sm text-gray-600">
                  {mockAnalytics.totalCourses} total courses
                </span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Average Rating</p>
                  <p className="text-2xl font-bold text-gray-900">
                    {mockAnalytics.averageRating}
                  </p>
                </div>
                <Star className="w-8 h-8 text-yellow-500" />
              </div>
              <div className="flex items-center mt-2">
                <span className="text-sm text-gray-600">
                  {mockAnalytics.completionRate}% completion rate
                </span>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="courses">Courses</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
            <TabsTrigger value="earnings">Earnings</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            {/* Top Performing Courses */}
            <Card>
              <CardHeader>
                <CardTitle>Top Performing Courses</CardTitle>
                <CardDescription>
                  Your best-selling courses this month
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {mockAnalytics.topPerformingCourses.map((course, index) => (
                    <div key={course.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div className="flex items-center">
                        <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                          <span className="text-sm font-semibold text-blue-600">#{index + 1}</span>
                        </div>
                        <div>
                          <h4 className="font-semibold">{course.title}</h4>
                          <p className="text-sm text-gray-600">
                            {course.students.toLocaleString()} students • ${course.revenue.toLocaleString()} revenue
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <Star className="w-4 h-4 text-yellow-500 mr-1" />
                        <span className="text-sm font-semibold">{course.rating}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Recent Activity */}
            <Card>
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
                <CardDescription>
                  Latest updates and notifications
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center p-3 bg-green-50 rounded-lg">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                    <div>
                      <p className="font-medium">New student enrolled in "Complete React Masterclass"</p>
                      <p className="text-sm text-gray-600">2 minutes ago</p>
                    </div>
                  </div>
                  <div className="flex items-center p-3 bg-blue-50 rounded-lg">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    <div>
                      <p className="font-medium">Course "AI for Beginners" received a 5-star review</p>
                      <p className="text-sm text-gray-600">1 hour ago</p>
                    </div>
                  </div>
                  <div className="flex items-center p-3 bg-purple-50 rounded-lg">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                    <div>
                      <p className="font-medium">Monthly revenue target achieved</p>
                      <p className="text-sm text-gray-600">3 hours ago</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="courses" className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <div>
                    <CardTitle>My Courses</CardTitle>
                    <CardDescription>
                      Manage and track your course performance
                    </CardDescription>
                  </div>
                  <Button>
                    <Plus className="w-4 h-4 mr-2" />
                    Create New Course
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {mockCourses.map((course) => (
                    <div key={course.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center space-x-4">
                        <div className="w-16 h-12 bg-gray-200 rounded-lg flex items-center justify-center">
                          <BookOpen className="w-6 h-6 text-gray-500" />
                        </div>
                        <div>
                          <h4 className="font-semibold">{course.title}</h4>
                          <p className="text-sm text-gray-600">{course.description}</p>
                          <div className="flex items-center mt-1 space-x-4 text-sm text-gray-500">
                            <span>{course.students.toLocaleString()} students</span>
                            <span>${course.price}</span>
                            <span>{course.status}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Button variant="outline" size="sm">
                          <Eye className="w-4 h-4 mr-1" />
                          View
                        </Button>
                        <Button variant="outline" size="sm">
                          <Edit className="w-4 h-4 mr-1" />
                          Edit
                        </Button>
                        <Button variant="outline" size="sm">
                          <BarChart3 className="w-4 h-4 mr-1" />
                          Analytics
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="analytics" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Detailed Analytics</CardTitle>
                <CardDescription>
                  Deep insights into your course performance
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h4 className="font-semibold">Student Engagement</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span>Active Students</span>
                        <span className="font-semibold">{mockAnalytics.activeStudents.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Completion Rate</span>
                        <span className="font-semibold">{mockAnalytics.completionRate}%</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Average Rating</span>
                        <span className="font-semibold">{mockAnalytics.averageRating}/5</span>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <h4 className="font-semibold">Revenue Metrics</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span>Monthly Revenue</span>
                        <span className="font-semibold">${mockAnalytics.monthlyRevenue.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Total Revenue</span>
                        <span className="font-semibold">${mockAnalytics.totalRevenue.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Average Course Price</span>
                        <span className="font-semibold">$102</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="earnings" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Earnings Overview</CardTitle>
                <CardDescription>
                  Track your revenue and payment history
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {/* Monthly Revenue Chart Placeholder */}
                  <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <BarChart3 className="w-12 h-12 text-gray-400 mx-auto mb-2" />
                      <p className="text-gray-600">Revenue Chart</p>
                      <p className="text-sm text-gray-500">Monthly earnings visualization</p>
                    </div>
                  </div>

                  {/* Payment History */}
                  <div>
                    <h4 className="font-semibold mb-4">Recent Payments</h4>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                        <div>
                          <p className="font-medium">January 2024 Payout</p>
                          <p className="text-sm text-gray-600">Processed on Jan 31, 2024</p>
                        </div>
                        <div className="text-right">
                          <p className="font-semibold text-green-600">$3,800</p>
                          <p className="text-sm text-gray-600">Completed</p>
                        </div>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                        <div>
                          <p className="font-medium">December 2023 Payout</p>
                          <p className="text-sm text-gray-600">Processed on Dec 31, 2023</p>
                        </div>
                        <div className="text-right">
                          <p className="font-semibold text-green-600">$4,200</p>
                          <p className="text-sm text-gray-600">Completed</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default VendorDashboard; 