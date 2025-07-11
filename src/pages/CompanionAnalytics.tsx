import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { useAppContext } from '@/context/AppContext';
import { 
  ArrowLeft, 
  TrendingUp, 
  Users, 
  Clock, 
  Star, 
  BookOpen,
  BarChart3,
  PieChart,
  Activity,
  Target,
  Award,
  Calendar,
  Globe,
  Brain,
  MessageCircle
} from 'lucide-react';

// Mock analytics data
const ANALYTICS_DATA = {
  overview: {
    totalSessions: 1247,
    totalUsers: 892,
    averageRating: 4.8,
    totalDuration: 45678, // minutes
    activeCompanions: 6,
    languagesSupported: 10
  },
  topCompanions: [
    { name: 'Neura the Brainy Explorer', sessions: 2103, rating: 4.9, subject: 'science' },
    { name: 'Codey the Logic Hacker', sessions: 1876, rating: 4.8, subject: 'coding' },
    { name: 'Ming the Mandarin Tutor', sessions: 1563, rating: 4.7, subject: 'language' },
    { name: 'Alex the Project Manager', sessions: 1247, rating: 4.8, subject: 'business' },
    { name: 'Lina the Golf Coach', sessions: 892, rating: 4.9, subject: 'sports' },
    { name: 'Vita the Wellness Coach', sessions: 945, rating: 4.6, subject: 'health' }
  ],
  subjectStats: [
    { subject: 'science', sessions: 2103, users: 1567, avgRating: 4.9 },
    { subject: 'coding', sessions: 1876, users: 1342, avgRating: 4.8 },
    { subject: 'language', sessions: 1563, users: 1189, avgRating: 4.7 },
    { subject: 'business', sessions: 1247, users: 987, avgRating: 4.8 },
    { subject: 'sports', sessions: 892, users: 654, avgRating: 4.9 },
    { subject: 'health', sessions: 945, users: 723, avgRating: 4.6 }
  ],
  languageStats: [
    { language: 'en', sessions: 4567, percentage: 65 },
    { language: 'es', sessions: 1234, percentage: 18 },
    { language: 'zh', sessions: 567, percentage: 8 },
    { language: 'fr', sessions: 456, percentage: 7 },
    { language: 'de', sessions: 234, percentage: 3 }
  ],
  weeklyTrends: [
    { week: 'Week 1', sessions: 156, users: 89 },
    { week: 'Week 2', sessions: 234, users: 134 },
    { week: 'Week 3', sessions: 198, users: 112 },
    { week: 'Week 4', sessions: 267, users: 156 },
    { week: 'Week 5', sessions: 312, users: 189 },
    { week: 'Week 6', sessions: 289, users: 167 },
    { week: 'Week 7', sessions: 345, users: 201 }
  ],
  userEngagement: {
    averageSessionDuration: 32,
    completionRate: 87,
    returnRate: 73,
    satisfactionScore: 4.8
  }
};

const SUBJECT_COLORS = {
  science: "#E5D0FF",
  coding: "#FFC8E4",
  language: "#BDE7FF",
  business: "#FFB3BA",
  sports: "#FFD700",
  health: "#98FB98"
};

const CompanionAnalytics = () => {
  const navigate = useNavigate();
  const { language } = useAppContext();
  const [timeRange, setTimeRange] = useState('7d');
  const [selectedSubject, setSelectedSubject] = useState('all');

  const formatNumber = (num: number) => {
    return new Intl.NumberFormat().format(num);
  };

  const formatDuration = (minutes: number) => {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return `${hours}h ${mins}m`;
  };

  const getSubjectColor = (subject: string) => {
    return SUBJECT_COLORS[subject as keyof typeof SUBJECT_COLORS] || '#E5E5E5';
  };

  const StatCard = ({ title, value, icon, subtitle, color = 'blue' }: any) => (
    <Card className="p-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-600">{title}</p>
          <p className="text-2xl font-bold text-gray-900">{value}</p>
          {subtitle && <p className="text-sm text-gray-500">{subtitle}</p>}
        </div>
        <div className={`p-3 rounded-lg bg-${color}-100`}>
          {icon}
        </div>
      </div>
    </Card>
  );

  const ProgressBar = ({ percentage, color }: { percentage: number; color: string }) => (
    <div className="w-full bg-gray-200 rounded-full h-2">
      <div 
        className="h-2 rounded-full transition-all duration-300"
        style={{ 
          width: `${percentage}%`, 
          backgroundColor: color 
        }}
      />
    </div>
  );

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
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Companion Analytics</h1>
                <p className="text-gray-600">Comprehensive insights into learning companion usage</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <select 
                value={timeRange} 
                onChange={(e) => setTimeRange(e.target.value)}
                className="border rounded-lg px-3 py-2"
              >
                <option value="7d">Last 7 days</option>
                <option value="30d">Last 30 days</option>
                <option value="90d">Last 90 days</option>
                <option value="1y">Last year</option>
              </select>
            </div>
          </div>
        </div>

        {/* Overview Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          <StatCard
            title="Total Sessions"
            value={formatNumber(ANALYTICS_DATA.overview.totalSessions)}
            icon={<MessageCircle className="w-6 h-6 text-blue-600" />}
            subtitle="All time"
            color="blue"
          />
          <StatCard
            title="Active Users"
            value={formatNumber(ANALYTICS_DATA.overview.totalUsers)}
            icon={<Users className="w-6 h-6 text-green-600" />}
            subtitle="Unique learners"
            color="green"
          />
          <StatCard
            title="Average Rating"
            value={ANALYTICS_DATA.overview.averageRating}
            icon={<Star className="w-6 h-6 text-yellow-600" />}
            subtitle="Out of 5 stars"
            color="yellow"
          />
          <StatCard
            title="Total Learning Time"
            value={formatDuration(ANALYTICS_DATA.overview.totalDuration)}
            icon={<Clock className="w-6 h-6 text-purple-600" />}
            subtitle="Cumulative"
            color="purple"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          {/* Top Companions */}
          <Card className="p-6 lg:col-span-2">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold">Top Performing Companions</h3>
              <BarChart3 className="w-5 h-5 text-gray-400" />
            </div>
            <div className="space-y-4">
              {ANALYTICS_DATA.topCompanions.map((companion, index) => (
                <div key={companion.name} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold text-white"
                         style={{ backgroundColor: getSubjectColor(companion.subject) }}>
                      {index + 1}
                    </div>
                    <div>
                      <p className="font-medium">{companion.name}</p>
                      <p className="text-sm text-gray-600">{formatNumber(companion.sessions)} sessions</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm font-medium">{companion.rating}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* User Engagement */}
          <Card className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold">User Engagement</h3>
              <Activity className="w-5 h-5 text-gray-400" />
            </div>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Session Duration</span>
                  <span>{ANALYTICS_DATA.userEngagement.averageSessionDuration} min</span>
                </div>
                <ProgressBar percentage={65} color="#3B82F6" />
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Completion Rate</span>
                  <span>{ANALYTICS_DATA.userEngagement.completionRate}%</span>
                </div>
                <ProgressBar percentage={87} color="#10B981" />
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Return Rate</span>
                  <span>{ANALYTICS_DATA.userEngagement.returnRate}%</span>
                </div>
                <ProgressBar percentage={73} color="#F59E0B" />
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Satisfaction</span>
                  <span>{ANALYTICS_DATA.userEngagement.satisfactionScore}/5</span>
                </div>
                <ProgressBar percentage={96} color="#8B5CF6" />
              </div>
            </div>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          {/* Subject Performance */}
          <Card className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold">Subject Performance</h3>
              <PieChart className="w-5 h-5 text-gray-400" />
            </div>
            <div className="space-y-3">
              {ANALYTICS_DATA.subjectStats.map((stat) => (
                <div key={stat.subject} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-4 h-4 rounded"
                         style={{ backgroundColor: getSubjectColor(stat.subject) }} />
                    <span className="font-medium capitalize">{stat.subject}</span>
                  </div>
                  <div className="flex items-center gap-4 text-sm">
                    <span>{formatNumber(stat.sessions)} sessions</span>
                    <div className="flex items-center gap-1">
                      <Star className="w-3 h-3 text-yellow-400 fill-current" />
                      <span>{stat.avgRating}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Language Distribution */}
          <Card className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold">Language Distribution</h3>
              <Globe className="w-5 h-5 text-gray-400" />
            </div>
            <div className="space-y-3">
              {ANALYTICS_DATA.languageStats.map((stat) => (
                <div key={stat.language} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="font-medium uppercase">{stat.language}</span>
                    <span className="text-sm text-gray-600">
                      {stat.language === 'en' && 'English'}
                      {stat.language === 'es' && 'Español'}
                      {stat.language === 'zh' && '中文'}
                      {stat.language === 'fr' && 'Français'}
                      {stat.language === 'de' && 'Deutsch'}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm">{formatNumber(stat.sessions)}</span>
                    <span className="text-sm text-gray-500">({stat.percentage}%)</span>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Weekly Trends */}
        <Card className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold">Weekly Trends</h3>
            <TrendingUp className="w-5 h-5 text-gray-400" />
          </div>
          <div className="grid grid-cols-7 gap-4">
            {ANALYTICS_DATA.weeklyTrends.map((week, index) => (
              <div key={week.week} className="text-center">
                <div className="bg-blue-100 rounded-lg p-3 mb-2">
                  <div className="text-lg font-bold text-blue-600">{week.sessions}</div>
                  <div className="text-xs text-blue-500">sessions</div>
                </div>
                <div className="text-xs text-gray-600">{week.week}</div>
              </div>
            ))}
          </div>
        </Card>

        {/* Insights */}
        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-4">Key Insights</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="flex items-start gap-3 p-3 bg-green-50 rounded-lg">
              <Target className="w-5 h-5 text-green-600 mt-0.5" />
              <div>
                <p className="font-medium text-green-800">High Engagement</p>
                <p className="text-sm text-green-600">87% completion rate shows strong user commitment</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg">
              <Brain className="w-5 h-5 text-blue-600 mt-0.5" />
              <div>
                <p className="font-medium text-blue-800">Science Dominance</p>
                <p className="text-sm text-blue-600">AI and science companions are most popular</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3 bg-purple-50 rounded-lg">
              <Award className="w-5 h-5 text-purple-600 mt-0.5" />
              <div>
                <p className="font-medium text-purple-800">Quality Content</p>
                <p className="text-sm text-purple-600">4.8 average rating indicates high satisfaction</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3 bg-yellow-50 rounded-lg">
              <Calendar className="w-5 h-5 text-yellow-600 mt-0.5" />
              <div>
                <p className="font-medium text-yellow-800">Growing Trend</p>
                <p className="text-sm text-yellow-600">Session count increasing week over week</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3 bg-indigo-50 rounded-lg">
              <Globe className="w-5 h-5 text-indigo-600 mt-0.5" />
              <div>
                <p className="font-medium text-indigo-800">Global Reach</p>
                <p className="text-sm text-indigo-600">10 languages supported, 65% English usage</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3 bg-pink-50 rounded-lg">
              <Users className="w-5 h-5 text-pink-600 mt-0.5" />
              <div>
                <p className="font-medium text-pink-800">User Retention</p>
                <p className="text-sm text-pink-600">73% return rate shows strong platform stickiness</p>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default CompanionAnalytics; 