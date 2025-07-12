import React, { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Switch } from '@/components/ui/switch';
import { 
  ChevronLeft, 
  ChevronRight, 
  Play, 
  Pause, 
  Settings, 
  Plus, 
  Edit, 
  Trash2, 
  Upload, 
  Eye, 
  EyeOff,
  Target,
  Calendar,
  BarChart3,
  DollarSign,
  Users,
  Globe,
  Clock,
  Star,
  ExternalLink
} from 'lucide-react';

interface Ad {
  id: string;
  title: string;
  description: string;
  image: string;
  videoUrl?: string;
  link: string;
  cta: string;
  status: 'active' | 'paused' | 'draft' | 'scheduled';
  type: 'banner' | 'video' | 'carousel' | 'interactive';
  targetAudience: string[];
  schedule: {
    startDate: string;
    endDate: string;
    daysOfWeek: number[];
    timeSlots: string[];
  };
  metrics: {
    impressions: number;
    clicks: number;
    ctr: number;
    spend: number;
  };
  budget: {
    daily: number;
    total: number;
    spent: number;
  };
  priority: 'low' | 'medium' | 'high';
  createdAt: string;
  updatedAt: string;
}

interface AdPanelProps {
  userRole?: 'student' | 'instructor' | 'admin' | 'advertiser';
  isVisible?: boolean;
  onToggle?: () => void;
}

const MOCK_ADS: Ad[] = [
  {
    id: '1',
    title: 'Master Python Programming',
    description: 'Learn Python from scratch with our comprehensive course. Perfect for beginners!',
    image: 'https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=300&h=200&fit=crop',
    link: '/courses/python-bootcamp',
    cta: 'Start Learning',
    status: 'active',
    type: 'banner',
    targetAudience: ['technology', 'beginners'],
    schedule: {
      startDate: '2024-01-01',
      endDate: '2024-12-31',
      daysOfWeek: [1, 2, 3, 4, 5, 6, 7],
      timeSlots: ['09:00', '12:00', '15:00', '18:00']
    },
    metrics: {
      impressions: 15420,
      clicks: 1234,
      ctr: 8.0,
      spend: 456.78
    },
    budget: {
      daily: 50,
      total: 1000,
      spent: 456.78
    },
    priority: 'high',
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-01-15T12:00:00Z'
  },
  {
    id: '2',
    title: 'AI & Machine Learning Course',
    description: 'Dive into the future with our cutting-edge AI course. No prior experience needed!',
    image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=300&h=200&fit=crop',
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    link: '/courses/ai-machine-learning',
    cta: 'Watch Preview',
    status: 'active',
    type: 'video',
    targetAudience: ['technology', 'advanced'],
    schedule: {
      startDate: '2024-01-01',
      endDate: '2024-12-31',
      daysOfWeek: [1, 2, 3, 4, 5],
      timeSlots: ['10:00', '14:00', '19:00']
    },
    metrics: {
      impressions: 8920,
      clicks: 567,
      ctr: 6.4,
      spend: 234.56
    },
    budget: {
      daily: 30,
      total: 500,
      spent: 234.56
    },
    priority: 'medium',
    createdAt: '2024-01-05T00:00:00Z',
    updatedAt: '2024-01-10T15:30:00Z'
  },
  {
    id: '3',
    title: 'Business Strategy Masterclass',
    description: 'Transform your business with proven strategies from industry experts.',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=300&h=200&fit=crop',
    link: '/courses/business-strategy',
    cta: 'Learn More',
    status: 'scheduled',
    type: 'carousel',
    targetAudience: ['business', 'entrepreneurs'],
    schedule: {
      startDate: '2024-02-01',
      endDate: '2024-06-30',
      daysOfWeek: [1, 3, 5],
      timeSlots: ['11:00', '16:00']
    },
    metrics: {
      impressions: 0,
      clicks: 0,
      ctr: 0,
      spend: 0
    },
    budget: {
      daily: 25,
      total: 750,
      spent: 0
    },
    priority: 'low',
    createdAt: '2024-01-20T00:00:00Z',
    updatedAt: '2024-01-20T00:00:00Z'
  }
];

const RightAdPanel: React.FC<AdPanelProps> = ({ 
  userRole = 'student', 
  isVisible = true, 
  onToggle 
}) => {
  const [ads, setAds] = useState<Ad[]>(MOCK_ADS);
  const [currentAdIndex, setCurrentAdIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [showAdminPanel, setShowAdminPanel] = useState(false);
  const [editingAd, setEditingAd] = useState<Ad | null>(null);
  const [isCreatingAd, setIsCreatingAd] = useState(false);
  const carouselRef = useRef<NodeJS.Timeout | null>(null);

  const isAdminOrAdvertiser = userRole === 'admin' || userRole === 'advertiser';

  // Auto-rotate carousel
  useEffect(() => {
    if (isPlaying && ads.length > 1) {
      carouselRef.current = setInterval(() => {
        setCurrentAdIndex((prev) => (prev + 1) % ads.length);
      }, 5000);
    }

    return () => {
      if (carouselRef.current) {
        clearInterval(carouselRef.current);
      }
    };
  }, [isPlaying, ads.length]);

  const handlePrevious = () => {
    setCurrentAdIndex((prev) => (prev - 1 + ads.length) % ads.length);
  };

  const handleNext = () => {
    setCurrentAdIndex((prev) => (prev + 1) % ads.length);
  };

  const handleAdClick = (ad: Ad) => {
    // Track click
    console.log(`Ad clicked: ${ad.title}`);
    // In real implementation, this would call analytics API
    window.open(ad.link, '_blank');
  };

  const getStatusColor = (status: Ad['status']) => {
    switch (status) {
      case 'active': return 'bg-green-500';
      case 'paused': return 'bg-yellow-500';
      case 'draft': return 'bg-gray-500';
      case 'scheduled': return 'bg-blue-500';
      default: return 'bg-gray-500';
    }
  };

  const getPriorityColor = (priority: Ad['priority']) => {
    switch (priority) {
      case 'high': return 'bg-red-500';
      case 'medium': return 'bg-yellow-500';
      case 'low': return 'bg-green-500';
      default: return 'bg-gray-500';
    }
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(amount);
  };

  const formatNumber = (num: number) => {
    return new Intl.NumberFormat('en-US').format(num);
  };

  if (!isVisible) {
    return (
      <div className="fixed right-4 top-20 z-40">
        <Button
          onClick={onToggle}
          variant="outline"
          size="sm"
          className="bg-white shadow-lg"
        >
          <Eye className="w-4 h-4 mr-2" />
          Show Ads
        </Button>
      </div>
    );
  }

  return (
    <div className="fixed right-4 top-20 w-56 z-40 mt-32">
      <Card className="shadow-lg border-2 border-[#11204a] min-h-[600px] h-full flex flex-col justify-between p-6 bg-[#16203a]">
        <CardHeader className="mb-4">
          <CardTitle className="text-lg font-bold text-cyan-300">Sponsored</CardTitle>
        </CardHeader>
        <CardContent className="flex-1 flex flex-col gap-8 overflow-y-auto text-white">
          {/* Ad carousel or stacked ads go here, with extra spacing */}
          <div className="flex flex-col gap-8">
            {/* Carousel Controls */}
            {ads.length > 1 && (
              <div className="flex items-center justify-between px-4 py-2 bg-[#11204a]">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={handlePrevious}
                  className="p-1 text-cyan-300 hover:bg-[#0a1834]"
                >
                  <ChevronLeft className="w-4 h-4" />
                </Button>
                
                <div className="flex items-center space-x-2">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="p-1 text-cyan-300 hover:bg-[#0a1834]"
                  >
                    {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                  </Button>
                  <span className="text-xs text-cyan-300">
                    {currentAdIndex + 1} / {ads.length}
                  </span>
                </div>

                <Button
                  variant="ghost"
                  size="sm"
                  onClick={handleNext}
                  className="p-1 text-cyan-300 hover:bg-[#0a1834]"
                >
                  <ChevronRight className="w-4 h-4" />
                </Button>
              </div>
            )}

            {/* Current Ad Display */}
            {ads.length > 0 && (
              <div className="p-4">
                <div 
                  className="relative cursor-pointer group"
                  onClick={() => handleAdClick(ads[currentAdIndex])}
                >
                  {/* Ad Image */}
                  <div className="relative overflow-hidden rounded-lg mb-3">
                    <img
                      src={ads[currentAdIndex].image}
                      alt={ads[currentAdIndex].title}
                      className="w-full h-40 object-cover transition-transform group-hover:scale-105"
                    />
                    
                    {/* Video Play Button */}
                    {ads[currentAdIndex].videoUrl && (
                      <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity">
                        <div className="bg-white/90 rounded-full p-3">
                          <Play className="w-6 h-6 text-gray-800 fill-current" />
                        </div>
                      </div>
                    )}

                    {/* Status Badge */}
                    <div className="absolute top-2 right-2">
                      <Badge 
                        variant="secondary" 
                        className={`text-xs ${getStatusColor(ads[currentAdIndex].status)}`}
                      >
                        {ads[currentAdIndex].status}
                      </Badge>
                    </div>
                  </div>

                  {/* Ad Content */}
                  <div className="space-y-2">
                    <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                      {ads[currentAdIndex].title}
                    </h3>
                    <p className="text-sm text-gray-600 line-clamp-2">
                      {ads[currentAdIndex].description}
                    </p>
                    
                    {/* Metrics (Admin/Advertiser only) */}
                    {isAdminOrAdvertiser && (
                      <div className="grid grid-cols-2 gap-2 text-xs text-gray-500 pt-2 border-t">
                        <div className="flex items-center">
                          <Eye className="w-3 h-3 mr-1" />
                          {formatNumber(ads[currentAdIndex].metrics.impressions)}
                        </div>
                        <div className="flex items-center">
                          <BarChart3 className="w-3 h-3 mr-1" />
                          {ads[currentAdIndex].metrics.ctr.toFixed(1)}% CTR
                        </div>
                      </div>
                    )}

                    {/* CTA Button */}
                    <Button 
                      className="w-full mt-3 bg-blue-600 hover:bg-blue-700"
                      size="sm"
                    >
                      {ads[currentAdIndex].cta}
                      <ExternalLink className="w-3 h-3 ml-1" />
                    </Button>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Admin Panel */}
          {showAdminPanel && isAdminOrAdvertiser && (
            <div className="border-t border-gray-200 p-4 bg-gray-50">
              <div className="flex items-center justify-between mb-4">
                <h4 className="font-semibold text-gray-900">Ad Management</h4>
                <Button
                  size="sm"
                  onClick={() => setIsCreatingAd(true)}
                  className="bg-green-600 hover:bg-green-700"
                >
                  <Plus className="w-4 h-4 mr-1" />
                  New Ad
                </Button>
              </div>

              <div className="space-y-3 max-h-60 overflow-y-auto">
                {ads.map((ad) => (
                  <div key={ad.id} className="flex items-center space-x-3 p-2 bg-white rounded border">
                    <img
                      src={ad.image}
                      alt={ad.title}
                      className="w-12 h-8 object-cover rounded"
                    />
                    <div className="flex-1 min-w-0">
                      <h5 className="text-sm font-medium text-gray-900 truncate">
                        {ad.title}
                      </h5>
                      <div className="flex items-center space-x-2 mt-1">
                        <Badge 
                          variant="secondary" 
                          className={`text-xs ${getStatusColor(ad.status)}`}
                        >
                          {ad.status}
                        </Badge>
                        <Badge 
                          variant="secondary" 
                          className={`text-xs ${getPriorityColor(ad.priority)}`}
                        >
                          {ad.priority}
                        </Badge>
                      </div>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => setEditingAd(ad)}
                        className="p-1"
                      >
                        <Edit className="w-3 h-3" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => {
                          setAds(ads.filter(a => a.id !== ad.id));
                        }}
                        className="p-1 text-red-500 hover:text-red-700"
                      >
                        <Trash2 className="w-3 h-3" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-2 mt-4 pt-4 border-t">
                <div className="text-center">
                  <div className="text-lg font-semibold text-blue-600">
                    {ads.filter(ad => ad.status === 'active').length}
                  </div>
                  <div className="text-xs text-gray-500">Active</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-semibold text-green-600">
                    {formatCurrency(ads.reduce((sum, ad) => sum + ad.metrics.spend, 0))}
                  </div>
                  <div className="text-xs text-gray-500">Total Spend</div>
                </div>
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Ad Creation/Edit Modal */}
      {(isCreatingAd || editingAd) && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <Card className="w-96 max-h-[90vh] overflow-y-auto">
            <CardHeader>
              <CardTitle>
                {isCreatingAd ? 'Create New Ad' : 'Edit Ad'}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="text-sm font-medium">Title</label>
                <Input 
                  placeholder="Ad title"
                  defaultValue={editingAd?.title}
                />
              </div>
              
              <div>
                <label className="text-sm font-medium">Description</label>
                <Textarea 
                  placeholder="Ad description"
                  defaultValue={editingAd?.description}
                />
              </div>

              <div>
                <label className="text-sm font-medium">Image URL</label>
                <Input 
                  placeholder="https://example.com/image.jpg"
                  defaultValue={editingAd?.image}
                />
              </div>

              <div>
                <label className="text-sm font-medium">Link</label>
                <Input 
                  placeholder="https://example.com"
                  defaultValue={editingAd?.link}
                />
              </div>

              <div>
                <label className="text-sm font-medium">Call to Action</label>
                <Input 
                  placeholder="Learn More"
                  defaultValue={editingAd?.cta}
                />
              </div>

              <div>
                <label className="text-sm font-medium">Status</label>
                <Select defaultValue={editingAd?.status || 'draft'}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="draft">Draft</SelectItem>
                    <SelectItem value="scheduled">Scheduled</SelectItem>
                    <SelectItem value="active">Active</SelectItem>
                    <SelectItem value="paused">Paused</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="text-sm font-medium">Priority</label>
                <Select defaultValue={editingAd?.priority || 'medium'}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="low">Low</SelectItem>
                    <SelectItem value="medium">Medium</SelectItem>
                    <SelectItem value="high">High</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex items-center space-x-2">
                <Switch id="auto-rotate" defaultChecked />
                <label htmlFor="auto-rotate" className="text-sm">
                  Auto-rotate in carousel
                </label>
              </div>

              <div className="flex space-x-2 pt-4">
                <Button
                  variant="outline"
                  onClick={() => {
                    setIsCreatingAd(false);
                    setEditingAd(null);
                  }}
                  className="flex-1"
                >
                  Cancel
                </Button>
                <Button className="flex-1">
                  {isCreatingAd ? 'Create Ad' : 'Save Changes'}
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
};

export default RightAdPanel; 