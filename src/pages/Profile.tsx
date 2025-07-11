import React, { useState } from 'react';
import { 
  User, 
  Mail, 
  Phone, 
  MapPin, 
  Calendar, 
  Crown, 
  CreditCard, 
  Settings, 
  Bell, 
  Globe, 
  Palette, 
  Shield, 
  Download,
  Upload,
  Save,
  Edit,
  X
} from 'lucide-react';
import { useUser } from '../context/UserContext';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Badge } from '../components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { Switch } from '../components/ui/switch';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { useTranslation } from 'react-i18next';
import { stripeService, SUBSCRIPTION_PLANS } from '../services/stripeService';

const Profile: React.FC = () => {
  const { user, updateProfile, updatePreferences } = useUser();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [isEditing, setIsEditing] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: user?.name || '',
    email: user?.email || '',
    phone: '',
    location: '',
    bio: '',
  });

  if (!user) {
    navigate('/signin');
    return null;
  }

  const handleSave = async () => {
    setIsLoading(true);
    try {
      await updateProfile(formData);
      setIsEditing(false);
    } catch (error) {
      console.error('Failed to update profile:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleCancel = () => {
    setFormData({
      name: user.name,
      email: user.email,
      phone: '',
      location: '',
      bio: '',
    });
    setIsEditing(false);
  };

  const handlePreferenceChange = async (key: string, value: any) => {
    try {
      await updatePreferences({ [key]: value });
    } catch (error) {
      console.error('Failed to update preference:', error);
    }
  };

  const getSubscriptionPlan = () => {
    return SUBSCRIPTION_PLANS.find(plan => plan.id === user.subscription.plan);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Profile & Settings</h1>
          <p className="text-gray-600 dark:text-gray-400 mt-2">
            Manage your account settings, preferences, and subscription
          </p>
        </div>

        <Tabs defaultValue="profile" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="profile">Profile</TabsTrigger>
            <TabsTrigger value="preferences">Preferences</TabsTrigger>
            <TabsTrigger value="subscription">Subscription</TabsTrigger>
            <TabsTrigger value="billing">Billing</TabsTrigger>
          </TabsList>

          {/* Profile Tab */}
          <TabsContent value="profile" className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Personal Information</CardTitle>
                    <CardDescription>
                      Update your personal details and profile information
                    </CardDescription>
                  </div>
                  <Button
                    variant={isEditing ? "outline" : "default"}
                    onClick={() => setIsEditing(!isEditing)}
                  >
                    {isEditing ? <X size={16} className="mr-2" /> : <Edit size={16} className="mr-2" />}
                    {isEditing ? 'Cancel' : 'Edit'}
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Avatar Section */}
                <div className="flex items-center space-x-6">
                  <div className="relative">
                    <img
                      src={user.avatar || '/placeholder.svg'}
                      alt={user.name}
                      className="h-24 w-24 rounded-full object-cover border-4 border-white shadow-lg"
                    />
                    {isEditing && (
                      <Button
                        size="sm"
                        variant="outline"
                        className="absolute -bottom-2 -right-2 h-8 w-8 rounded-full p-0"
                      >
                        <Upload size={14} />
                      </Button>
                    )}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">{user.name}</h3>
                    <p className="text-gray-600 dark:text-gray-400">{user.email}</p>
                    <div className="flex items-center space-x-2 mt-2">
                      <Badge className={`${getSubscriptionPlan()?.id === 'pro' ? 'bg-blue-100 text-blue-800' : 'bg-gray-100 text-gray-800'}`}>
                        <Crown size={12} className="mr-1" />
                        {user.subscription.plan} Plan
                      </Badge>
                      <Badge variant="outline">
                        Member since {formatDate(user.createdAt)}
                      </Badge>
                    </div>
                  </div>
                </div>

                {/* Form Fields */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      disabled={!isEditing}
                      icon={<User size={16} />}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      disabled={!isEditing}
                      icon={<Mail size={16} />}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      disabled={!isEditing}
                      icon={<Phone size={16} />}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="location">Location</Label>
                    <Input
                      id="location"
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      disabled={!isEditing}
                      icon={<MapPin size={16} />}
                    />
                  </div>

                  <div className="space-y-2 md:col-span-2">
                    <Label htmlFor="bio">Bio</Label>
                    <textarea
                      id="bio"
                      value={formData.bio}
                      onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
                      disabled={!isEditing}
                      rows={4}
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-100 dark:disabled:bg-gray-800"
                      placeholder="Tell us about yourself..."
                    />
                  </div>
                </div>

                {isEditing && (
                  <div className="flex justify-end space-x-3">
                    <Button variant="outline" onClick={handleCancel}>
                      Cancel
                    </Button>
                    <Button onClick={handleSave} disabled={isLoading}>
                      {isLoading ? 'Saving...' : 'Save Changes'}
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          {/* Preferences Tab */}
          <TabsContent value="preferences" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Preferences</CardTitle>
                <CardDescription>
                  Customize your experience and notification settings
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Theme Settings */}
                <div className="space-y-4">
                  <h3 className="text-lg font-medium flex items-center">
                    <Palette size={20} className="mr-2" />
                    Appearance
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label>Theme</Label>
                      <Select
                        value={user.preferences.theme}
                        onValueChange={(value) => handlePreferenceChange('theme', value)}
                      >
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="light">Light</SelectItem>
                          <SelectItem value="dark">Dark</SelectItem>
                          <SelectItem value="system">System</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label>Language</Label>
                      <Select
                        value={user.preferences.language}
                        onValueChange={(value) => handlePreferenceChange('language', value)}
                      >
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="en">English</SelectItem>
                          <SelectItem value="es">Español</SelectItem>
                          <SelectItem value="fr">Français</SelectItem>
                          <SelectItem value="de">Deutsch</SelectItem>
                          <SelectItem value="zh">中文</SelectItem>
                          <SelectItem value="ja">日本語</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>

                {/* Notification Settings */}
                <div className="space-y-4">
                  <h3 className="text-lg font-medium flex items-center">
                    <Bell size={20} className="mr-2" />
                    Notifications
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <Label>Email Notifications</Label>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          Receive updates about your courses and account
                        </p>
                      </div>
                      <Switch
                        checked={user.preferences.notifications.email}
                        onCheckedChange={(checked) => 
                          handlePreferenceChange('notifications', { 
                            ...user.preferences.notifications, 
                            email: checked 
                          })
                        }
                      />
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <Label>Push Notifications</Label>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          Get notified about new features and updates
                        </p>
                      </div>
                      <Switch
                        checked={user.preferences.notifications.push}
                        onCheckedChange={(checked) => 
                          handlePreferenceChange('notifications', { 
                            ...user.preferences.notifications, 
                            push: checked 
                          })
                        }
                      />
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <Label>Marketing Communications</Label>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          Receive promotional emails and offers
                        </p>
                      </div>
                      <Switch
                        checked={user.preferences.notifications.marketing}
                        onCheckedChange={(checked) => 
                          handlePreferenceChange('notifications', { 
                            ...user.preferences.notifications, 
                            marketing: checked 
                          })
                        }
                      />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Subscription Tab */}
          <TabsContent value="subscription" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Subscription Management</CardTitle>
                <CardDescription>
                  View and manage your current subscription plan
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Current Plan */}
                <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 p-6 rounded-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-xl font-semibold flex items-center">
                        <Crown size={24} className="mr-2 text-blue-600" />
                        {getSubscriptionPlan()?.name} Plan
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 mt-1">
                        {stripeService.formatPrice(getSubscriptionPlan()?.price || 0)} per month
                      </p>
                      <p className="text-sm text-gray-500 mt-2">
                        Next billing date: {formatDate(user.subscription.currentPeriodEnd)}
                      </p>
                    </div>
                    <Badge className={`text-sm ${
                      user.subscription.status === 'active' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-red-100 text-red-800'
                    }`}>
                      {user.subscription.status}
                    </Badge>
                  </div>
                </div>

                {/* Plan Features */}
                <div>
                  <h4 className="font-medium mb-3">Plan Features</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {getSubscriptionPlan()?.features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <div className="h-2 w-2 bg-green-500 rounded-full"></div>
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-3">
                  <Button 
                    onClick={() => navigate('/subscription')}
                    className="flex-1"
                  >
                    <Crown size={16} className="mr-2" />
                    Upgrade Plan
                  </Button>
                  <Button 
                    variant="outline"
                    onClick={() => navigate('/subscription-settings')}
                  >
                    <Settings size={16} className="mr-2" />
                    Manage
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Billing Tab */}
          <TabsContent value="billing" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Billing & Payment</CardTitle>
                <CardDescription>
                  Manage your payment methods and view billing history
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Payment Method */}
                <div className="space-y-4">
                  <h3 className="text-lg font-medium flex items-center">
                    <CreditCard size={20} className="mr-2" />
                    Payment Method
                  </h3>
                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="h-8 w-12 bg-blue-600 rounded flex items-center justify-center">
                          <span className="text-white text-xs font-bold">VISA</span>
                        </div>
                        <div>
                          <p className="font-medium">•••• •••• •••• 4242</p>
                          <p className="text-sm text-gray-600 dark:text-gray-400">Expires 12/25</p>
                        </div>
                      </div>
                      <Button variant="outline" size="sm">
                        Update
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Billing History */}
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Billing History</h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                      <div>
                        <p className="font-medium">Pro Plan - Monthly</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          {formatDate(new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString())}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="font-medium">$79.00</p>
                        <Badge className="bg-green-100 text-green-800">Paid</Badge>
                      </div>
                    </div>
                    <div className="flex items-center justify-between p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                      <div>
                        <p className="font-medium">Pro Plan - Monthly</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          {formatDate(new Date(Date.now() - 60 * 24 * 60 * 60 * 1000).toISOString())}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="font-medium">$79.00</p>
                        <Badge className="bg-green-100 text-green-800">Paid</Badge>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-3">
                  <Button 
                    variant="outline"
                    onClick={() => navigate('/billing-portal')}
                    className="flex-1"
                  >
                    <Download size={16} className="mr-2" />
                    Download Invoices
                  </Button>
                  <Button 
                    variant="outline"
                    onClick={() => navigate('/payment-methods')}
                  >
                    <CreditCard size={16} className="mr-2" />
                    Payment Methods
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Profile; 