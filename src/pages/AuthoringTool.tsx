import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
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
import { useState } from "react";
import { useDrag, useDrop, DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
// Add for modal and toast
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { toast } from "@/components/ui/use-toast";

const ELEMENT_TYPE = 'COURSE_ELEMENT';

function DraggableElement({ element, onDragStart }) {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: ELEMENT_TYPE,
    item: { type: element.type },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));
  return (
    <div
      ref={drag}
      className={`flex items-center gap-3 p-2 rounded-lg hover:bg-gray-200 cursor-pointer transition-colors ${isDragging ? 'opacity-50' : ''}`}
      onMouseDown={onDragStart}
    >
      <element.icon className="h-5 w-5 text-gray-600" />
      <div>
        <div className="text-sm font-medium text-gray-900">{element.type}</div>
        <div className="text-xs text-gray-500">{element.description}</div>
      </div>
    </div>
  );
}

function Canvas({ elements, onDrop, onSelect, selectedId, onDelete, courseElements }) {
  const [{ isOver }, drop] = useDrop(() => ({
    accept: ELEMENT_TYPE,
    drop: (item, monitor) => {
      const offset = monitor.getClientOffset();
      onDrop(item, offset);
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  }));
  return (
    <div
      ref={drop}
      className={`h-96 flex items-center justify-center border-2 border-dashed border-gray-300 m-8 relative ${isOver ? 'bg-blue-50' : ''}`}
      style={{ overflow: 'auto' }}
    >
      {elements.length === 0 && (
        <div className="text-center">
          <Layers className="h-16 w-16 text-gray-400 mx-auto mb-4" />
          <h4 className="text-xl font-semibold text-gray-600 mb-2">Course Canvas</h4>
          <p className="text-gray-500 mb-4">
            Drag and drop elements from the left to design your course slide
          </p>
          <Button variant="outline">
            Select a Template
          </Button>
        </div>
      )}
      {elements.map((el, idx) => {
        const Icon = courseElements.find(e => e.type === el.type)?.icon;
        return (
          <div
            key={el.id}
            className={`absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 p-4 rounded shadow-lg bg-white border cursor-pointer ${selectedId === el.id ? 'ring-2 ring-blue-500' : ''}`}
            onClick={() => onSelect(el.id)}
            tabIndex={0}
            onKeyDown={e => { if (e.key === 'Delete') onDelete(el.id); }}
          >
            {Icon && <Icon className="h-8 w-8 mb-2 text-gray-700" />}
            <div className="text-sm font-semibold text-gray-700">{el.type}</div>
            <Button size="xs" variant="destructive" className="mt-2" onClick={() => onDelete(el.id)}>Delete</Button>
          </div>
        );
      })}
    </div>
  );
}

const AuthoringTool = () => {
  const [currentSlide, setCurrentSlide] = useState(1);
  const [isEditing, setIsEditing] = useState(false);
  // Per-slide elements: { [slideNumber]: [elements] }
  const [canvasElements, setCanvasElements] = useState({ 1: [] });
  const [selectedElementId, setSelectedElementId] = useState(null);
  const [showTemplateModal, setShowTemplateModal] = useState(false);
  const [slideBackgrounds, setSlideBackgrounds] = useState({ 1: 'white' });
  const [slideAnimations, setSlideAnimations] = useState({ 1: 'Fade In' });
  const [slideCount, setSlideCount] = useState(1);

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

  // Mock template element data
  const templateElements = {
    1: [
      { id: 1001, type: 'Text', content: 'Welcome to Corporate Training!' },
      { id: 1002, type: 'Image', content: 'https://images.unsplash.com/photo-1552664730-d307ca884978' },
    ],
    2: [
      { id: 2001, type: 'Video', content: 'Product Demo Video' },
      { id: 2002, type: 'Quiz', content: 'Quick Quiz' },
    ],
    3: [
      { id: 3001, type: 'Text', content: 'Step 1: Install the software' },
      { id: 3002, type: 'Image', content: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085' },
    ],
    4: [
      { id: 4001, type: 'Text', content: 'Safety First!' },
      { id: 4002, type: 'Quiz', content: 'Safety Quiz' },
    ],
  };

  // Handle drop for current slide
  const handleDrop = (item, offset) => {
    setCanvasElements((prev) => {
      const slideEls = prev[currentSlide] || [];
      return {
        ...prev,
        [currentSlide]: [
          ...slideEls,
          {
            id: Date.now(),
            type: item.type,
            content: `New ${item.type} element`,
          },
        ],
      };
    });
    toast({ title: `${item.type} added to slide ${currentSlide}` });
  };

  // Select element
  const handleSelect = (id) => setSelectedElementId(id);
  // Delete element
  const handleDelete = (id) => setCanvasElements((prev) => ({
    ...prev,
    [currentSlide]: (prev[currentSlide] || []).filter(el => el.id !== id)
  }));

  // Add new slide
  const handleAddSlide = () => {
    setSlideCount((c) => c + 1);
    setCanvasElements((prev) => ({ ...prev, [slideCount + 1]: [] }));
    setSlideBackgrounds((prev) => ({ ...prev, [slideCount + 1]: 'white' }));
    setSlideAnimations((prev) => ({ ...prev, [slideCount + 1]: 'Fade In' }));
    setCurrentSlide(slideCount + 1);
    toast({ title: `Slide ${slideCount + 1} added` });
  };

  // Change background
  const handleBackgroundChange = (color) => {
    setSlideBackgrounds((prev) => ({ ...prev, [currentSlide]: color }));
    toast({ title: `Background updated` });
  };
  // Change animation
  const handleAnimationChange = (anim) => {
    setSlideAnimations((prev) => ({ ...prev, [currentSlide]: anim }));
    toast({ title: `Animation set to ${anim}` });
  };

  // Handle template selection
  const handleTemplateSelect = (templateId) => {
    setCanvasElements((prev) => ({ ...prev, [currentSlide]: templateElements[templateId] || [] }));
    setShowTemplateModal(false);
    toast({ title: `Template loaded!` });
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="min-h-screen bg-[#0a1834]">
      
      {/* Header */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-white mb-6">Elearning Authoring Tool</h1>
          <p className="text-xl text-cyan-300 mb-8 max-w-3xl mx-auto">
            Build engaging online courses in minutes with our intuitive drag-and-drop platform. 
            Select from 100+ global templates and design impactful learning experiences for any audience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-[#11204a] text-white hover:bg-[#16203a] border-2 border-[#0a1834]"
              onClick={() => setIsEditing(true)}
            >
              <Layers className="mr-2 h-5 w-5" />
              Start Creating
            </Button>
            <Button size="lg" variant="outline" className="border-[#11204a] text-white hover:bg-[#11204a]/10">
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
                  <Badge variant="secondary">Slide {currentSlide} of {slideCount}</Badge>
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
                      <DraggableElement key={index} element={element} onDragStart={() => {}} />
                    ))}
                  </div>
                </div>
                {/* Canvas Area */}
                <div className="flex-1 bg-white">
                  <Canvas
                    elements={canvasElements[currentSlide] || []}
                    onDrop={handleDrop}
                    onSelect={handleSelect}
                    selectedId={selectedElementId}
                    onDelete={handleDelete}
                    courseElements={courseElements}
                  />
                  {/* Template Modal Trigger */}
                  {canvasElements[currentSlide]?.length === 0 && (
                    <Button variant="outline" className="mt-4 mx-auto block" onClick={() => setShowTemplateModal(true)}>
                      Select a Template
                    </Button>
                  )}
                </div>
                {/* Properties Panel */}
                <div className="w-64 bg-gray-50 border-l p-4">
                  <h4 className="font-semibold text-gray-900 mb-4">Properties</h4>
                  <div className="space-y-4">
                    <div>
                      <label className="text-sm font-medium text-gray-700">Background</label>
                      <div className="flex gap-2 mt-2">
                        <div className="w-8 h-8 bg-blue-500 rounded cursor-pointer" onClick={() => handleBackgroundChange('bg-blue-500')}></div>
                        <div className="w-8 h-8 bg-green-500 rounded cursor-pointer" onClick={() => handleBackgroundChange('bg-green-500')}></div>
                        <div className="w-8 h-8 bg-purple-500 rounded cursor-pointer" onClick={() => handleBackgroundChange('bg-purple-500')}></div>
                        <div className="w-8 h-8 bg-orange-500 rounded cursor-pointer" onClick={() => handleBackgroundChange('bg-orange-500')}></div>
                      </div>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-700">Animation</label>
                      <select className="w-full mt-2 p-2 border border-gray-300 rounded text-sm" value={slideAnimations[currentSlide] || 'Fade In'} onChange={e => handleAnimationChange(e.target.value)}>
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
                  {Array.from({ length: slideCount }, (_, i) => i + 1).map((slide) => (
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
                  <Button size="sm" variant="outline" className="ml-4" onClick={handleAddSlide}>
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </Card>
          </div>
          {/* Template Modal */}
          <Dialog open={showTemplateModal} onOpenChange={setShowTemplateModal}>
            <DialogContent className="max-w-2xl">
              <DialogHeader>
                <DialogTitle>Select a Course Template</DialogTitle>
              </DialogHeader>
              <div className="grid grid-cols-2 gap-4">
                {templates.map((template) => (
                  <Card key={template.id} className="hover:shadow-lg transition-all cursor-pointer hover:scale-105" onClick={() => handleTemplateSelect(template.id)}>
                    <div className="relative">
                      <img 
                        src={template.preview} 
                        alt={template.name}
                        className="w-full h-24 object-cover rounded-t-lg"
                      />
                      <div className="absolute top-2 right-2">
                        <Badge className="bg-orange-600 text-white">{template.category}</Badge>
                      </div>
                    </div>
                    <CardContent className="p-2">
                      <h3 className="font-semibold text-gray-900 mb-1 text-sm">{template.name}</h3>
                      <div className="flex items-center justify-between text-xs text-gray-500 mb-1">
                        <span>{template.slides} slides</span>
                        {template.interactive && (
                          <Badge variant="outline" className="text-xs">Interactive</Badge>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </DialogContent>
          </Dialog>
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
                  Jump-start your course creation with templates for every industry and audience
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
                        Use This Template
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
                  All the tools you need to create world-class elearning content
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
                  Share your courses anywhere with flexible export options
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
            Ready to Build Your First Global Course?
          </h2>
          <p className="text-xl text-orange-100 mb-8">
            Join educators and trainers worldwide using our authoring tool to create engaging, impactful learning experiences.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-orange-900 hover:bg-gray-100">
              Start Free Trial
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              Request a Demo
            </Button>
          </div>
        </div>
      </section>
    </div>
    </DndProvider>
  );
};

export default AuthoringTool;