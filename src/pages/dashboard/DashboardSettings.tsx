import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Switch } from "@/components/ui/switch";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Palette, User, Upload, Shield, Bell, Settings, Download, BarChart3 } from "lucide-react";

const DashboardSettings = () => {
  const [brandingData, setBrandingData] = useState({
    vendorName: "My Awesome Courses Inc.",
    vendorDescription: "",
    primaryColor: "#3b82f6",
  });

  const [accountData, setAccountData] = useState({
    email: "vendor@example.com",
    currentPassword: "",
    newPassword: "",
  });

  const [apiSettings, setApiSettings] = useState({
    apiKey: "gcp_live_sk_123456789",
    webhookUrl: "https://mysite.com/webhook",
    rateLimitEnabled: true,
  });

  const [notificationSettings, setNotificationSettings] = useState({
    emailNotifications: true,
    pushNotifications: false,
    weeklyReports: true,
    marketingEmails: false,
  });

  const [securitySettings, setSecuritySettings] = useState({
    twoFactorAuth: false,
    loginAlerts: true,
    apiAccessLog: true,
  });

  const handleBrandingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Updating branding:", brandingData);
  };

  const handleAccountSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Updating account:", accountData);
  };

  const handleApiSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Updating API settings:", apiSettings);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-blue-600">Platform Settings</h1>
        <div className="flex space-x-2">
          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" />
            Export Settings
          </Button>
          <Button variant="outline">
            <BarChart3 className="mr-2 h-4 w-4" />
            Usage Analytics
          </Button>
        </div>
      </div>

      <Tabs defaultValue="branding" className="space-y-6">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="branding">Branding</TabsTrigger>
          <TabsTrigger value="account">Account</TabsTrigger>
          <TabsTrigger value="api">API & Integrations</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
          <TabsTrigger value="security">Security</TabsTrigger>
        </TabsList>

        <TabsContent value="branding">
          <Card>
            <CardHeader>
              <div className="flex items-center space-x-3">
                <Palette className="h-6 w-6 text-blue-600" />
                <CardTitle>Branding & Customization</CardTitle>
              </div>
              <p className="text-gray-600">
                Personalize your vendor space. These settings control how your courses and profile appear to students.
              </p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleBrandingSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="vendorName">Vendor Name</Label>
                    <Input
                      id="vendorName"
                      value={brandingData.vendorName}
                      onChange={(e) => setBrandingData({ ...brandingData, vendorName: e.target.value })}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="vendorLogo">Vendor Logo</Label>
                    <div className="flex items-center space-x-2">
                      <Button variant="outline" type="button">
                        <Upload className="mr-2 h-4 w-4" />
                        Browse...
                      </Button>
                      <span className="text-sm text-gray-500">No file selected.</span>
                    </div>
                    <p className="text-xs text-gray-500">Recommended size: 200×200px, PNG or JPG.</p>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="vendorDescription">Vendor Description</Label>
                  <Textarea
                    id="vendorDescription"
                    placeholder="Tell students about your institution or brand..."
                    value={brandingData.vendorDescription}
                    onChange={(e) => setBrandingData({ ...brandingData, vendorDescription: e.target.value })}
                    rows={4}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label>Primary Theme Color</Label>
                    <div className="flex items-center space-x-3">
                      <div
                        className="w-12 h-12 rounded-full border-2 border-gray-300 shadow-sm"
                        style={{ backgroundColor: brandingData.primaryColor }}
                      />
                      <input
                        type="color"
                        value={brandingData.primaryColor}
                        onChange={(e) => setBrandingData({ ...brandingData, primaryColor: e.target.value })}
                        className="w-16 h-12 rounded border-2 border-gray-300 cursor-pointer bg-transparent"
                        title="Select your brand color"
                      />
                      <div className="flex flex-col">
                        <span className="text-sm font-medium">{brandingData.primaryColor}</span>
                        <span className="text-xs text-gray-500">Click to customize</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label>Course Display Style</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select style" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="grid">Grid Layout</SelectItem>
                        <SelectItem value="list">List Layout</SelectItem>
                        <SelectItem value="carousel">Carousel Style</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <Separator />

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Custom CSS</h3>
                  <Textarea
                    placeholder="Add custom CSS to further customize your vendor space..."
                    rows={6}
                    className="font-mono text-sm"
                  />
                </div>

                <Button type="submit" className="bg-blue-600 hover:bg-blue-700">
                  Save Branding Settings
                </Button>
              </form>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="account">
          <Card>
            <CardHeader>
              <div className="flex items-center space-x-3">
                <User className="h-6 w-6 text-blue-600" />
                <CardTitle>Account Management</CardTitle>
              </div>
              <p className="text-gray-600">
                Manage your account details, password, and profile information.
              </p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleAccountSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      type="email"
                      value={accountData.email}
                      onChange={(e) => setAccountData({ ...accountData, email: e.target.value })}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="timezone">Timezone</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select timezone" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="utc">UTC</SelectItem>
                        <SelectItem value="est">Eastern Time</SelectItem>
                        <SelectItem value="pst">Pacific Time</SelectItem>
                        <SelectItem value="cet">Central European Time</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="currentPassword">Current Password</Label>
                  <Input
                    id="currentPassword"
                    type="password"
                    value={accountData.currentPassword}
                    onChange={(e) => setAccountData({ ...accountData, currentPassword: e.target.value })}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="newPassword">New Password</Label>
                  <Input
                    id="newPassword"
                    type="password"
                    value={accountData.newPassword}
                    onChange={(e) => setAccountData({ ...accountData, newPassword: e.target.value })}
                  />
                  <p className="text-xs text-gray-500">
                    Password must be at least 8 characters with uppercase, lowercase, and numbers.
                  </p>
                </div>

                <Separator />

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Account Status</h3>
                  <div className="flex items-center space-x-4">
                    <Badge variant="default">Premium Account</Badge>
                    <Badge variant="secondary">Verified</Badge>
                    <Badge variant="outline">API Access Enabled</Badge>
                  </div>
                </div>

                <Button type="submit" className="bg-blue-600 hover:bg-blue-700">
                  Update Account
                </Button>
              </form>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="api">
          <Card>
            <CardHeader>
              <div className="flex items-center space-x-3">
                <Settings className="h-6 w-6 text-blue-600" />
                <CardTitle>API & Integrations</CardTitle>
              </div>
              <p className="text-gray-600">
                Manage API keys, webhooks, and third-party integrations.
              </p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleApiSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="apiKey">API Key</Label>
                  <div className="flex space-x-2">
                    <Input
                      id="apiKey"
                      type="password"
                      value={apiSettings.apiKey}
                      onChange={(e) => setApiSettings({ ...apiSettings, apiKey: e.target.value })}
                      readOnly
                    />
                    <Button type="button" variant="outline">Regenerate</Button>
                    <Button type="button" variant="outline">Copy</Button>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="webhookUrl">Webhook URL</Label>
                  <Input
                    id="webhookUrl"
                    type="url"
                    value={apiSettings.webhookUrl}
                    onChange={(e) => setApiSettings({ ...apiSettings, webhookUrl: e.target.value })}
                    placeholder="https://yoursite.com/webhook"
                  />
                </div>

                <div className="flex items-center space-x-2">
                  <Switch
                    checked={apiSettings.rateLimitEnabled}
                    onCheckedChange={(checked) => setApiSettings({ ...apiSettings, rateLimitEnabled: checked })}
                  />
                  <Label>Enable Rate Limiting (1000 requests/hour)</Label>
                </div>

                <Separator />

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Third-party Integrations</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Card>
                      <CardContent className="p-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <h4 className="font-medium">Zoom Integration</h4>
                            <p className="text-sm text-gray-500">Video conferencing</p>
                          </div>
                          <Switch />
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardContent className="p-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <h4 className="font-medium">Slack Integration</h4>
                            <p className="text-sm text-gray-500">Team communication</p>
                          </div>
                          <Switch />
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardContent className="p-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <h4 className="font-medium">Google Drive</h4>
                            <p className="text-sm text-gray-500">File storage</p>
                          </div>
                          <Switch defaultChecked />
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardContent className="p-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <h4 className="font-medium">Analytics Tools</h4>
                            <p className="text-sm text-gray-500">Google Analytics, Mixpanel</p>
                          </div>
                          <Switch />
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                <Button type="submit" className="bg-blue-600 hover:bg-blue-700">
                  Save API Settings
                </Button>
              </form>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="notifications">
          <Card>
            <CardHeader>
              <div className="flex items-center space-x-3">
                <Bell className="h-6 w-6 text-blue-600" />
                <CardTitle>Notification Preferences</CardTitle>
              </div>
              <p className="text-gray-600">
                Control how and when you receive notifications about your courses and students.
              </p>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Email Notifications</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <Label>Course Enrollments</Label>
                      <p className="text-sm text-gray-500">Get notified when students enroll in your courses</p>
                    </div>
                    <Switch
                      checked={notificationSettings.emailNotifications}
                      onCheckedChange={(checked) => setNotificationSettings({ ...notificationSettings, emailNotifications: checked })}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <Label>Weekly Reports</Label>
                      <p className="text-sm text-gray-500">Receive weekly performance summaries</p>
                    </div>
                    <Switch
                      checked={notificationSettings.weeklyReports}
                      onCheckedChange={(checked) => setNotificationSettings({ ...notificationSettings, weeklyReports: checked })}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <Label>Marketing Emails</Label>
                      <p className="text-sm text-gray-500">Platform updates and promotional content</p>
                    </div>
                    <Switch
                      checked={notificationSettings.marketingEmails}
                      onCheckedChange={(checked) => setNotificationSettings({ ...notificationSettings, marketingEmails: checked })}
                    />
                  </div>
                </div>
              </div>

              <Separator />

              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Push Notifications</h3>
                <div className="flex items-center justify-between">
                  <div>
                    <Label>Browser Notifications</Label>
                    <p className="text-sm text-gray-500">Real-time alerts in your browser</p>
                  </div>
                  <Switch
                    checked={notificationSettings.pushNotifications}
                    onCheckedChange={(checked) => setNotificationSettings({ ...notificationSettings, pushNotifications: checked })}
                  />
                </div>
              </div>

              <Button className="bg-blue-600 hover:bg-blue-700">
                Save Notification Settings
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="security">
          <Card>
            <CardHeader>
              <div className="flex items-center space-x-3">
                <Shield className="h-6 w-6 text-blue-600" />
                <CardTitle>Security Settings</CardTitle>
              </div>
              <p className="text-gray-600">
                Protect your account with advanced security features.
              </p>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <Label>Two-Factor Authentication</Label>
                    <p className="text-sm text-gray-500">Add an extra layer of security to your account</p>
                  </div>
                  <Switch
                    checked={securitySettings.twoFactorAuth}
                    onCheckedChange={(checked) => setSecuritySettings({ ...securitySettings, twoFactorAuth: checked })}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <Label>Login Alerts</Label>
                    <p className="text-sm text-gray-500">Get notified of new login attempts</p>
                  </div>
                  <Switch
                    checked={securitySettings.loginAlerts}
                    onCheckedChange={(checked) => setSecuritySettings({ ...securitySettings, loginAlerts: checked })}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <Label>API Access Logging</Label>
                    <p className="text-sm text-gray-500">Log all API access attempts</p>
                  </div>
                  <Switch
                    checked={securitySettings.apiAccessLog}
                    onCheckedChange={(checked) => setSecuritySettings({ ...securitySettings, apiAccessLog: checked })}
                  />
                </div>
              </div>

              <Separator />

              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Active Sessions</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 border rounded">
                    <div>
                      <p className="font-medium">Current Session</p>
                      <p className="text-sm text-gray-500">Chrome on Windows • Nigeria</p>
                    </div>
                    <Badge variant="default">Active</Badge>
                  </div>

                  <div className="flex items-center justify-between p-3 border rounded">
                    <div>
                      <p className="font-medium">Mobile App</p>
                      <p className="text-sm text-gray-500">iOS App • Last active 2 hours ago</p>
                    </div>
                    <Button variant="outline" size="sm">Revoke</Button>
                  </div>
                </div>
              </div>

              <Button className="bg-blue-600 hover:bg-blue-700">
                Save Security Settings
              </Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default DashboardSettings;