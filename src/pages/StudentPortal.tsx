import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Calendar, Clock, Play, Star, Trophy, Users, Settings, Share2, CheckCircle2, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import Navigation from "@/components/Navigation";
import PageNavigation from "@/components/PageNavigation";
import { Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const StudentPortal = () => {
  const [streak] = useState(0);
  const { toast } = useToast();
  const [settings, setSettings] = useState({
    emailNotifications: true,
    pushNotifications: false,
    publicProfile: true,
    courseUpdates: true,
    socialLinks: {
      facebook: "",
      twitter: "",
      linkedin: "",
      instagram: ""
    }
  });

  const markCourseComplete = () => {
    toast({
      title: "Course Completed! 🎉",
      description: "Congratulations on completing your course. Keep up the great work!",
    });
  };

  const shareCourse = (platform: string) => {
    const courseUrl = `${window.location.origin}/course-viewer/1`;
    const text = "Check out this amazing course I'm taking!";
    
    let shareUrl = "";
    switch(platform) {
      case 'facebook':
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(courseUrl)}`;
        break;
      case 'twitter':
        shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(courseUrl)}`;
        break;
      case 'linkedin':
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(courseUrl)}`;
        break;
    }
    
    if (shareUrl) {
      window.open(shareUrl, '_blank', 'width=600,height=400');
    }
    
    toast({
      title: "Shared!",
      description: `Course shared on ${platform}`,
    });
  };

  const learningPath = {
    id: 1,
    title: "HTML CSS Segment",
    description: "HTML and CSS are the building blocks of the web. HTML structures your content, while CSS styles it to look visually appealing. In this segment, you'll learn everything about HTML and CSS—from creating web pages to designing responsive layouts.",
    progress: 20,
    level: "BEGINNER LEVEL",
    lectures: 10,
    duration: "2 hrs",
    completed: false
  };

  const upcomingEvents = [
    {
      date: "Jun 30",
      title: "Ultimate React Native Course",
      time: "Mon | 8AM GMT",
      type: "Upcoming Elite Course"
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        <Tabs defaultValue="dashboard" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>
          
          <TabsContent value="dashboard" className="mt-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Left Column */}
              <div className="lg:col-span-2 space-y-6">
                {/* Streak Section */}
                <Card className="bg-card border-border">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-4">
                      <Trophy className="h-5 w-5 text-yellow-500" />
                      <span className="text-foreground">You're on <span className="text-yellow-500 font-bold">{streak} day</span> streak!</span>
                    </div>
                    
                    {/* Calendar Grid */}
                    <div className="mb-4">
                      <div className="grid grid-cols-7 gap-1 text-xs text-muted-foreground mb-2">
                        <div>M</div>
                        <div>W</div>
                        <div>F</div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                      </div>
                      
                      <div className="space-y-1">
                        <div className="text-xs text-muted-foreground mb-2">
                          <span className="inline-block w-12">Apr</span>
                          <span className="inline-block w-12">May</span>
                          <span className="inline-block w-12">Jun</span>
                          <span className="inline-block w-12">Jul</span>
                          <span className="inline-block w-12">Aug</span>
                        </div>
                        
                        {/* Calendar dots representing activity */}
                        {Array.from({ length: 3 }, (_, weekIndex) => (
                          <div key={weekIndex} className="flex gap-1">
                            {Array.from({ length: 15 }, (_, dayIndex) => (
                              <div
                                key={dayIndex}
                                className={`w-3 h-3 rounded-sm ${
                                  dayIndex === 10 && weekIndex === 1 
                                    ? 'bg-green-500' 
                                    : 'bg-muted'
                                }`}
                              />
                            ))}
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Upcoming Events */}
                <Card className="bg-card border-border">
                  <CardHeader>
                    <CardTitle className="text-foreground">Upcoming events</CardTitle>
                  </CardHeader>
                  <CardContent>
                    {upcomingEvents.map((event, index) => (
                      <div key={index} className="flex items-center gap-4 p-4 rounded-lg bg-muted/50">
                        <div className="text-center">
                          <div className="text-2xl font-bold text-foreground">{event.date.split(' ')[1]}</div>
                          <div className="text-xs text-muted-foreground">{event.date.split(' ')[0]}</div>
                        </div>
                        <div className="flex-1">
                          <Badge variant="outline" className="mb-2 text-xs">
                            {event.type}
                          </Badge>
                          <h3 className="font-semibold text-foreground">{event.title}</h3>
                          <div className="flex items-center gap-1 text-sm text-muted-foreground">
                            <Clock className="h-4 w-4" />
                            {event.time}
                          </div>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </div>

              {/* Right Column */}
              <div className="space-y-6">
                {/* Learning Path */}
                <Card className="bg-card border-border">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-foreground">Your learning path</CardTitle>
                      <Button variant="ghost" size="sm" className="text-primary">
                        Open in full view
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center text-primary-foreground text-sm font-bold">
                          01
                        </div>
                        <h3 className="font-semibold text-foreground">{learningPath.title}</h3>
                      </div>
                      
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {learningPath.description}
                      </p>
                      
                      <div className="flex gap-2">
                        <Badge variant="secondary" className="text-xs">
                          Starter
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          Workshop
                        </Badge>
                      </div>
                    </div>

                    {/* Course Card */}
                    <Card className="bg-muted/50 border-border">
                      <CardContent className="p-4">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
                            <div className="text-white text-sm font-bold">HTML</div>
                          </div>
                          <div className="flex-1">
                            <h4 className="font-semibold text-foreground">HTML & CSS Guide for Beginners : Creating a Sushi-Themed Website</h4>
                            <p className="text-xs text-muted-foreground">In this video tutorial, you will create a modern, fully responsive HTML & CSS website with animations!</p>
                          </div>
                        </div>
                        
                        <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                          <div className="flex items-center gap-1">
                            <Play className="h-3 w-3" />
                            {learningPath.lectures} lectures
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="h-3 w-3" />
                            {learningPath.duration}
                          </div>
                        </div>
                        
                        <div className="space-y-2">
                          <div className="flex justify-between items-center">
                            <span className="text-xs text-muted-foreground">Progress</span>
                            <span className="text-xs text-foreground">{learningPath.progress}/100%</span>
                          </div>
                          <Progress value={learningPath.progress} className="h-2" />
                        </div>
                        
                        <div className="flex items-center justify-between mt-3 gap-2">
                          <Badge variant="outline" className="text-xs">
                            {learningPath.level}
                          </Badge>
                          <div className="flex gap-2">
                            <Button 
                              size="sm" 
                              variant="outline"
                              onClick={markCourseComplete}
                              className="text-xs"
                            >
                              <CheckCircle2 className="h-3 w-3 mr-1" />
                              Complete
                            </Button>
                            <Link to="/course-viewer/1">
                              <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90 text-xs">
                                Continue →
                              </Button>
                            </Link>
                          </div>
                        </div>

                        {/* Share Course */}
                        <div className="flex items-center gap-2 mt-3 pt-3 border-t border-border">
                          <span className="text-xs text-muted-foreground">Share:</span>
                          <Button 
                            size="sm" 
                            variant="ghost" 
                            onClick={() => shareCourse('facebook')}
                            className="h-6 w-6 p-0"
                          >
                            <Facebook className="h-3 w-3" />
                          </Button>
                          <Button 
                            size="sm" 
                            variant="ghost" 
                            onClick={() => shareCourse('twitter')}
                            className="h-6 w-6 p-0"
                          >
                            <Twitter className="h-3 w-3" />
                          </Button>
                          <Button 
                            size="sm" 
                            variant="ghost" 
                            onClick={() => shareCourse('linkedin')}
                            className="h-6 w-6 p-0"
                          >
                            <Linkedin className="h-3 w-3" />
                          </Button>
                        </div>
                      </CardContent>
                    </Card>

                    {/* Mock Interview Card */}
                    <Card className="bg-muted/50 border-border">
                      <CardContent className="p-4">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                            <Users className="h-6 w-6 text-white" />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-semibold text-foreground">Test Your Knowledge with Mock Interview</h4>
                          </div>
                        </div>
                        
                        <div className="flex gap-2">
                          <Badge variant="secondary" className="text-xs">
                            Elite
                          </Badge>
                          <Badge variant="outline" className="text-xs">
                            Interview
                          </Badge>
                        </div>
                      </CardContent>
                    </Card>
                  </CardContent>
                </Card>

                {/* Elite Membership */}
                <Card className="bg-gradient-to-br from-yellow-900/20 to-orange-900/20 border-yellow-500/20">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-4">
                      <Trophy className="h-6 w-6 text-yellow-500" />
                      <div>
                        <h3 className="font-bold text-foreground">Take Your Learning to the Next Level with Elite Membership.</h3>
                      </div>
                    </div>
                    
                    <div className="space-y-3 mb-6">
                      <h4 className="text-primary font-semibold">Why Subscribe? What Makes Subscribing Worth It?</h4>
                      
                      <div className="space-y-2 text-sm text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <Star className="h-4 w-4 text-yellow-500" />
                          <span>Full access to personalized learning path tailored to your goals</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Star className="h-4 w-4 text-green-500" />
                          <span>Full Access to all elite premium courses and resources</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Star className="h-4 w-4 text-blue-500" />
                          <span>Hands-on coding challenges and quizzes to test your skills</span>
                        </div>
                      </div>
                    </div>
                    
                    <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                      Upgrade to Pro →
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="settings" className="mt-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Account Settings */}
              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Settings className="h-5 w-5" />
                    Account Settings
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <Label htmlFor="email-notifications">Email Notifications</Label>
                        <p className="text-sm text-muted-foreground">Receive course updates via email</p>
                      </div>
                      <Switch 
                        id="email-notifications"
                        checked={settings.emailNotifications}
                        onCheckedChange={(checked) => 
                          setSettings({...settings, emailNotifications: checked})
                        }
                      />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <Label htmlFor="push-notifications">Push Notifications</Label>
                        <p className="text-sm text-muted-foreground">Get notified about new courses</p>
                      </div>
                      <Switch 
                        id="push-notifications"
                        checked={settings.pushNotifications}
                        onCheckedChange={(checked) => 
                          setSettings({...settings, pushNotifications: checked})
                        }
                      />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <Label htmlFor="public-profile">Public Profile</Label>
                        <p className="text-sm text-muted-foreground">Allow others to see your progress</p>
                      </div>
                      <Switch 
                        id="public-profile"
                        checked={settings.publicProfile}
                        onCheckedChange={(checked) => 
                          setSettings({...settings, publicProfile: checked})
                        }
                      />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <Label htmlFor="course-updates">Course Updates</Label>
                        <p className="text-sm text-muted-foreground">Get notified when courses are updated</p>
                      </div>
                      <Switch 
                        id="course-updates"
                        checked={settings.courseUpdates}
                        onCheckedChange={(checked) => 
                          setSettings({...settings, courseUpdates: checked})
                        }
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Social Media Links */}
              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Share2 className="h-5 w-5" />
                    Social Media Links
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <Facebook className="h-5 w-5 text-blue-600" />
                      <div className="flex-1">
                        <Label htmlFor="facebook">Facebook</Label>
                        <Input 
                          id="facebook"
                          placeholder="https://facebook.com/username"
                          value={settings.socialLinks.facebook}
                          onChange={(e) => 
                            setSettings({
                              ...settings, 
                              socialLinks: {...settings.socialLinks, facebook: e.target.value}
                            })
                          }
                        />
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <Twitter className="h-5 w-5 text-blue-400" />
                      <div className="flex-1">
                        <Label htmlFor="twitter">Twitter</Label>
                        <Input 
                          id="twitter"
                          placeholder="https://twitter.com/username"
                          value={settings.socialLinks.twitter}
                          onChange={(e) => 
                            setSettings({
                              ...settings, 
                              socialLinks: {...settings.socialLinks, twitter: e.target.value}
                            })
                          }
                        />
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <Linkedin className="h-5 w-5 text-blue-700" />
                      <div className="flex-1">
                        <Label htmlFor="linkedin">LinkedIn</Label>
                        <Input 
                          id="linkedin"
                          placeholder="https://linkedin.com/in/username"
                          value={settings.socialLinks.linkedin}
                          onChange={(e) => 
                            setSettings({
                              ...settings, 
                              socialLinks: {...settings.socialLinks, linkedin: e.target.value}
                            })
                          }
                        />
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <Instagram className="h-5 w-5 text-pink-600" />
                      <div className="flex-1">
                        <Label htmlFor="instagram">Instagram</Label>
                        <Input 
                          id="instagram"
                          placeholder="https://instagram.com/username"
                          value={settings.socialLinks.instagram}
                          onChange={(e) => 
                            setSettings({
                              ...settings, 
                              socialLinks: {...settings.socialLinks, instagram: e.target.value}
                            })
                          }
                        />
                      </div>
                    </div>
                  </div>
                  
                  <Button 
                    className="w-full" 
                    onClick={() => 
                      toast({
                        title: "Settings Saved",
                        description: "Your social media links have been updated.",
                      })
                    }
                  >
                    Save Social Links
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
      
      <PageNavigation />
    </div>
  );
};

export default StudentPortal;