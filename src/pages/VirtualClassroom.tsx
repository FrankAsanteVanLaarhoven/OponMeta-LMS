import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import PageNavigation from "@/components/PageNavigation";
import { 
  Video, 
  Users, 
  Monitor, 
  Mic, 
  Camera, 
  MessageSquare, 
  ScreenShare, 
  FileText, 
  Settings,
  Play,
  Pause,
  Volume2,
  Hand,
  Grid,
  Presentation
} from "lucide-react";
import Navigation from "@/components/Navigation";
import { useState } from "react";

const VirtualClassroom = () => {
  const [isInSession, setIsInSession] = useState(false);

  const features = [
    {
      icon: Video,
      title: "HD Video Streaming",
      description: "Crystal clear video quality with support for up to 1000 concurrent participants"
    },
    {
      icon: ScreenShare,
      title: "Screen Sharing",
      description: "Share your screen, applications, or specific windows with all participants"
    },
    {
      icon: Presentation,
      title: "Interactive Whiteboard",
      description: "Collaborate in real-time with drawing tools, shapes, and annotations"
    },
    {
      icon: MessageSquare,
      title: "Live Chat",
      description: "Engage with participants through public and private messaging"
    },
    {
      icon: Grid,
      title: "Breakout Rooms",
      description: "Split participants into smaller groups for focused discussions"
    },
    {
      icon: FileText,
      title: "Session Recording",
      description: "Record sessions for later review and distribution to attendees"
    }
  ];

  const upcomingSessions = [
    {
      id: 1,
      title: "Introduction to Data Science",
      instructor: "Dr. Sarah Chen",
      time: "10:00 AM - 11:30 AM",
      date: "Today",
      participants: 45,
      maxParticipants: 100,
      status: "live"
    },
    {
      id: 2,
      title: "Advanced JavaScript Concepts",
      instructor: "Mike Rodriguez",
      time: "2:00 PM - 4:00 PM",
      date: "Today",
      participants: 32,
      maxParticipants: 50,
      status: "upcoming"
    },
    {
      id: 3,
      title: "Digital Marketing Strategy",
      instructor: "Emma Thompson",
      time: "9:00 AM - 10:30 AM",
      date: "Tomorrow",
      participants: 28,
      maxParticipants: 75,
      status: "scheduled"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-400 via-blue-500 to-cyan-500">
      <Navigation />
      
      {/* Header */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-white mb-6">Virtual Classroom</h1>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Deliver engaging online learning experiences with our comprehensive virtual classroom platform. 
            Support live sessions, recordings, and interactive collaboration tools.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-purple-900 hover:bg-gray-100"
              onClick={() => setIsInSession(true)}
            >
              <Video className="mr-2 h-5 w-5" />
              Join Demo Session
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              Schedule Session
            </Button>
          </div>
        </div>
      </section>

      {/* Live Session Demo */}
      {isInSession && (
        <section className="py-12 px-4 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <Card className="bg-gray-900 border-gray-700">
              <CardContent className="p-0">
                {/* Video Area */}
                <div className="relative bg-black h-96 rounded-t-lg overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81" 
                    alt="Virtual Session"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                    <div className="text-center text-white">
                      <Play className="h-16 w-16 mx-auto mb-4" />
                      <p className="text-xl font-semibold">Live Demo Session</p>
                      <p className="text-gray-300">Introduction to AI and Machine Learning</p>
                    </div>
                  </div>
                  
                  {/* Participant Grid */}
                  <div className="absolute top-4 right-4 flex flex-col gap-2">
                    <div className="bg-gray-800 rounded-lg p-2 w-24 h-16">
                      <div className="bg-blue-600 rounded w-full h-full flex items-center justify-center">
                        <Users className="h-4 w-4 text-white" />
                      </div>
                    </div>
                    <div className="bg-gray-800 rounded-lg p-2 w-24 h-16">
                      <div className="bg-green-600 rounded w-full h-full flex items-center justify-center">
                        <Video className="h-4 w-4 text-white" />
                      </div>
                    </div>
                  </div>

                  {/* Live Indicator */}
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-red-600 text-white animate-pulse">
                      🔴 LIVE
                    </Badge>
                  </div>
                </div>

                {/* Controls */}
                <div className="bg-gray-800 p-4 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <Button size="sm" variant="ghost" className="text-white hover:bg-gray-700">
                      <Mic className="h-4 w-4" />
                    </Button>
                    <Button size="sm" variant="ghost" className="text-white hover:bg-gray-700">
                      <Camera className="h-4 w-4" />
                    </Button>
                    <Button size="sm" variant="ghost" className="text-white hover:bg-gray-700">
                      <ScreenShare className="h-4 w-4" />
                    </Button>
                    <Button size="sm" variant="ghost" className="text-white hover:bg-gray-700">
                      <Hand className="h-4 w-4" />
                    </Button>
                  </div>

                  <div className="text-white text-sm">
                    67 participants • 10:45 AM
                  </div>

                  <div className="flex items-center gap-4">
                    <Button size="sm" variant="ghost" className="text-white hover:bg-gray-700">
                      <MessageSquare className="h-4 w-4" />
                    </Button>
                    <Button size="sm" variant="ghost" className="text-white hover:bg-gray-700">
                      <Settings className="h-4 w-4" />
                    </Button>
                    <Button 
                      size="sm" 
                      variant="destructive"
                      onClick={() => setIsInSession(false)}
                    >
                      Leave
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      )}

      {/* Features */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Powerful Features</h2>
            <p className="text-xl text-gray-600">
              Everything you need for engaging virtual learning experiences
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="h-8 w-8 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Sessions */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Upcoming Sessions</h2>
            <p className="text-lg text-gray-600">Join live learning sessions or schedule your own</p>
          </div>

          <div className="grid gap-6">
            {upcomingSessions.map((session) => (
              <Card key={session.id} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-xl font-semibold text-gray-900">{session.title}</h3>
                        <Badge 
                          className={
                            session.status === 'live' ? 'bg-red-600 text-white' :
                            session.status === 'upcoming' ? 'bg-orange-600 text-white' :
                            'bg-gray-600 text-white'
                          }
                        >
                          {session.status === 'live' ? '🔴 Live' : 
                           session.status === 'upcoming' ? 'Starting Soon' : 'Scheduled'}
                        </Badge>
                      </div>
                      <p className="text-gray-600 mb-2">Instructor: {session.instructor}</p>
                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <span>{session.date} • {session.time}</span>
                        <span>{session.participants}/{session.maxParticipants} participants</span>
                      </div>
                    </div>
                    
                    <div className="flex gap-2">
                      {session.status === 'live' ? (
                        <Button className="bg-red-600 hover:bg-red-700 text-white">
                          Join Now
                        </Button>
                      ) : session.status === 'upcoming' ? (
                        <Button className="bg-orange-600 hover:bg-orange-700 text-white">
                          Join Session
                        </Button>
                      ) : (
                        <Button variant="outline">
                          View Details
                        </Button>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <Button className="bg-blue-600 text-white hover:bg-blue-700">
              Schedule New Session
            </Button>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-purple-600 mb-2">1000+</div>
              <div className="text-gray-600">Max Participants</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600 mb-2">99.9%</div>
              <div className="text-gray-600">Uptime</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600 mb-2">4K</div>
              <div className="text-gray-600">Video Quality</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600 mb-2">24/7</div>
              <div className="text-gray-600">Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Transform Your Online Learning?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Start hosting engaging virtual classroom sessions today with our comprehensive platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-purple-900 hover:bg-gray-100">
              Start Free Trial
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              Book Demo
            </Button>
          </div>
        </div>
      </section>
      <PageNavigation />
    </div>
  );
};

export default VirtualClassroom;