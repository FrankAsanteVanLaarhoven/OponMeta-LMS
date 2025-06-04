import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import PageNavigation from "@/components/PageNavigation";
import { 
  Layers, 
  Palette, 
  Video, 
  Image, 
  FileText, 
  Mic, 
  MousePointer,
  Smartphone,
  Monitor,
  Download,
  Upload,
  Play,
  Pause,
  RotateCcw,
  Save,
  Share2,
  Eye,
  Settings,
  Grid,
  Type,
  Square,
  Plus
} from "lucide-react";
import Navigation from "@/components/Navigation";
import { useState } from "react";

const AuthoringTool = () => {
  const [currentSlide, setCurrentSlide] = useState(1);
  const [isEditing, setIsEditing] = useState(false);

  const templates = [
    {
      id: 1,
      name: "Corporate Training",
      category: "Business",
      preview: "https://images.unsplash.com/photo-1552664730-d307ca884978",
      slides: 12,
      interactive: true
    },
    {
      id: 2,
      name: "Product Demo",
      category: "Marketing",
      preview: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
      slides: 8,
      interactive: true
    },
    {
      id: 3,
      name: "Technical Tutorial",
      category: "Education",
      preview: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
      slides: 15,
      interactive: false
    },
    {
      id: 4,
      name: "Safety Training",
      category: "Compliance",
      preview: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
      slides: 10,
      interactive: true
    }
  ];

  const courseElements = [
    { type: "Text", icon: Type, description: "Add text blocks and headings" },
    { type: "Image", icon: Image, description: "Insert images and graphics" },
    { type: "Video", icon: Video, description: "Embed video content" },
    { type: "Audio", icon: Mic, description: "Add audio narration" },
    { type: "Quiz", icon: FileText, description: "Interactive assessments" },
    { type: "Button", icon: MousePointer, description: "Navigation buttons" },
    { type: "Shape", icon: Square, description: "Geometric shapes" },
    { type: "Layout", icon: Grid, description: "Layout containers" }
  ];

  const features = [
    {
      title: "Drag-and-Drop Interface",
      description: "Intuitive course building with simple drag-and-drop functionality",
      icon: MousePointer
    },
    {
      title: "Responsive Design",
      description: "Courses automatically adapt to all devices and screen sizes",
      icon: Smartphone
    },
    {
      title: "SCORM Compliance",
      description: "Export courses compatible with all major LMS platforms",
      icon: Download
    },
    {
      title: "Interactive Elements",
      description: "Add quizzes, simulations, and interactive scenarios",
      icon: Play
    },
    {
      title: "Multi-Media Support",
      description: "Seamlessly integrate videos, audio, images, and animations",
      icon: Video
    },
    {
      title: "Real-time Preview",
      description: "See exactly how your course will look while building",
      icon: Eye
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-400 via-blue-500 to-cyan-500">
      <Navigation />
      
      {/* Header */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-white mb-6">Elearning Authoring Tool</h1>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Create stunning online courses in minutes with our drag-and-drop interface. 
            Choose from 100+ professional templates and build engaging learning experiences.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-purple-900 hover:bg-gray-100"
              onClick={() => setIsEditing(true)}
            >
              <Layers className="mr-2 h-5 w-5" />
              Start Creating
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              <Play className="mr-2 h-5 w-5" />
              Watch Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Course Editor Interface */}
      {isEditing && (
        <section className="py-8 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <Card className="shadow-2xl">
              <div className="bg-gray-800 p-4 flex items-center justify-between text-white">
                <div className="flex items-center gap-4">
                  <h3 className="text-lg font-semibold">Course Editor</h3>
                  <Badge variant="secondary">Slide {currentSlide} of 8</Badge>
                </div>
                <div className="flex items-center gap-2">
                  <Button size="sm" variant="ghost" className="text-white hover:bg-gray-700">
                    <RotateCcw className="h-4 w-4" />
                  </Button>
                  <Button size="sm" variant="ghost" className="text-white hover:bg-gray-700">
                    <Eye className="h-4 w-4" />
                  </Button>
                  <Button size="sm" variant="ghost" className="text-white hover:bg-gray-700">
                    <Save className="h-4 w-4" />
                  </Button>
                  <Button size="sm" variant="ghost" className="text-white hover:bg-gray-700">
                    <Share2 className="h-4 w-4" />
                  </Button>
                  <Button 
                    size="sm" 
                    variant="destructive"
                    onClick={() => setIsEditing(false)}
                  >
                    Close
                  </Button>
                </div>
              </div>

              <div className="flex">
                {/* Element Toolbar */}
                <div className="w-64 bg-gray-50 border-r p-4">
                  <h4 className="font-semibold text-gray-900 mb-4">Course Elements</h4>
                  <div className="space-y-2">
                    {courseElements.map((element, index) => (
                      <div 
                        key={index}
                        className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-200 cursor-pointer transition-colors"
                      >
                        <element.icon className="h-5 w-5 text-gray-600" />
                        <div>
                          <div className="text-sm font-medium text-gray-900">{element.type}</div>
                          <div className="text-xs text-gray-500">{element.description}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Canvas Area */}
                <div className="flex-1 bg-white">
                  <div className="h-96 flex items-center justify-center border-2 border-dashed border-gray-300 m-8">
                    <div className="text-center">
                      <Layers className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                      <h4 className="text-xl font-semibold text-gray-600 mb-2">Course Canvas</h4>
                      <p className="text-gray-500 mb-4">
                        Drag elements from the left panel to build your course slide
                      </p>
                      <Button variant="outline">
                        Choose Template
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Properties Panel */}
                <div className="w-64 bg-gray-50 border-l p-4">
                  <h4 className="font-semibold text-gray-900 mb-4">Properties</h4>
                  <div className="space-y-4">
                    <div>
                      <label className="text-sm font-medium text-gray-700">Background</label>
                      <div className="flex gap-2 mt-2">
                        <div className="w-8 h-8 bg-blue-500 rounded cursor-pointer"></div>
                        <div className="w-8 h-8 bg-green-500 rounded cursor-pointer"></div>
                        <div className="w-8 h-8 bg-purple-500 rounded cursor-pointer"></div>
                        <div className="w-8 h-8 bg-orange-500 rounded cursor-pointer"></div>
                      </div>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-700">Animation</label>
                      <select className="w-full mt-2 p-2 border border-gray-300 rounded text-sm">
                        <option>Fade In</option>
                        <option>Slide Left</option>
                        <option>Zoom In</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>

              {/* Timeline */}
              <div className="bg-gray-100 p-4 border-t">
                <div className="flex items-center gap-2">
                  {[1, 2, 3, 4, 5, 6, 7, 8].map((slide) => (
                    <div
                      key={slide}
                      onClick={() => setCurrentSlide(slide)}
                      className={`w-12 h-8 rounded border-2 cursor-pointer flex items-center justify-center text-xs font-medium ${
                        currentSlide === slide
                          ? 'border-blue-500 bg-blue-100 text-blue-700'
                          : 'border-gray-300 bg-white text-gray-600 hover:border-gray-400'
                      }`}
                    >
                      {slide}
                    </div>
                  ))}
                  <Button size="sm" variant="outline" className="ml-4">
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </section>
      )}

      {/* Templates Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <Tabs defaultValue="templates" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="templates">Templates</TabsTrigger>
              <TabsTrigger value="features">Features</TabsTrigger>
              <TabsTrigger value="export">Export Options</TabsTrigger>
            </TabsList>

            <TabsContent value="templates">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">100+ Professional Templates</h2>
                <p className="text-lg text-gray-600">
                  Jump-start your course creation with industry-specific templates
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {templates.map((template) => (
                  <Card key={template.id} className="hover:shadow-lg transition-all cursor-pointer hover:scale-105">
                    <div className="relative">
                      <img 
                        src={template.preview} 
                        alt={template.name}
                        className="w-full h-32 object-cover rounded-t-lg"
                      />
                      <div className="absolute top-2 right-2">
                        <Badge className="bg-orange-600 text-white">{template.category}</Badge>
                      </div>
                    </div>
                    <CardContent className="p-4">
                      <h3 className="font-semibold text-gray-900 mb-2">{template.name}</h3>
                      <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
                        <span>{template.slides} slides</span>
                        {template.interactive && (
                          <Badge variant="outline" className="text-xs">Interactive</Badge>
                        )}
                      </div>
                      <Button className="w-full bg-orange-600 hover:bg-orange-700">
                        Use Template
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="features">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Powerful Authoring Features</h2>
                <p className="text-lg text-gray-600">
                  Everything you need to create professional elearning content
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {features.map((feature, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-6 text-center">
                      <div className="bg-orange-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                        <feature.icon className="h-8 w-8 text-orange-600" />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                      <p className="text-gray-600">{feature.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="export">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Export & Deployment Options</h2>
                <p className="text-lg text-gray-600">
                  Deploy your courses anywhere with multiple export formats
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <Card className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                      <Download className="h-8 w-8 text-blue-600" />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">SCORM 1.2/2004</h3>
                    <p className="text-gray-600 text-sm">Industry standard for LMS compatibility</p>
                  </CardContent>
                </Card>

                <Card className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                      <Monitor className="h-8 w-8 text-green-600" />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">HTML5</h3>
                    <p className="text-gray-600 text-sm">Web-ready courses for any browser</p>
                  </CardContent>
                </Card>

                <Card className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                      <Smartphone className="h-8 w-8 text-purple-600" />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">Mobile App</h3>
                    <p className="text-gray-600 text-sm">Native mobile learning experiences</p>
                  </CardContent>
                </Card>

                <Card className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="bg-orange-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                      <FileText className="h-8 w-8 text-orange-600" />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">xAPI (Tin Can)</h3>
                    <p className="text-gray-600 text-sm">Advanced tracking and analytics</p>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-gradient-to-r from-orange-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Create Your First Course?
          </h2>
          <p className="text-xl text-orange-100 mb-8">
            Join thousands of educators and trainers using our authoring tool to create engaging learning experiences.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-orange-900 hover:bg-gray-100">
              Start Free Trial
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              Request Demo
            </Button>
          </div>
        </div>
      </section>
      <PageNavigation />
    </div>
  );
};

export default AuthoringTool;