import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Upload, 
  Play, 
  Pause,
  Settings,
  Save,
  Eye,
  Plus,
  Trash2,
  Edit,
  FileVideo,
  FileText,
  Image as ImageIcon,
  Download
} from "lucide-react";

const CourseManagement = () => {
  const [courseTitle, setCourseTitle] = useState("Advanced React Development");
  const [courseDescription, setCourseDescription] = useState("Learn advanced React patterns and best practices");

  const courseModules = [
    {
      id: 1,
      title: "Introduction to Advanced React",
      type: "video",
      duration: "15:30",
      status: "published",
      uploadDate: "2024-01-15"
    },
    {
      id: 2,
      title: "React Hooks Deep Dive",
      type: "video", 
      duration: "22:45",
      status: "published",
      uploadDate: "2024-01-16"
    },
    {
      id: 3,
      title: "Performance Optimization",
      type: "video",
      duration: "18:20",
      status: "draft",
      uploadDate: "2024-01-17"
    },
    {
      id: 4,
      title: "Course Resources",
      type: "document",
      duration: null,
      status: "published",
      uploadDate: "2024-01-15"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-slate-900">
      {/* Header */}
      <div className="bg-white/10 backdrop-blur-md border-b border-white/20 p-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-white">Course Management</h1>
            <p className="text-blue-200 mt-1">Edit and manage your course content</p>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="outline" className="border-white/20 text-white hover:bg-white/10">
              <Eye className="h-4 w-4 mr-2" />
              Preview Course
            </Button>
            <Button className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white">
              <Save className="h-4 w-4 mr-2" />
              Save Changes
            </Button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto p-6">
        <Tabs defaultValue="content" className="space-y-6">
          <TabsList className="bg-white/10 backdrop-blur-md border border-white/20">
            <TabsTrigger value="content" className="data-[state=active]:bg-white data-[state=active]:text-slate-800">
              Course Content
            </TabsTrigger>
            <TabsTrigger value="details" className="data-[state=active]:bg-white data-[state=active]:text-slate-800">
              Course Details
            </TabsTrigger>
            <TabsTrigger value="settings" className="data-[state=active]:bg-white data-[state=active]:text-slate-800">
              Settings
            </TabsTrigger>
          </TabsList>

          {/* Content Tab */}
          <TabsContent value="content" className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-white">Course Modules</h2>
              <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white">
                <Plus className="h-4 w-4 mr-2" />
                Add New Module
              </Button>
            </div>

            <div className="space-y-4">
              {courseModules.map((module, index) => (
                <Card key={module.id} className="bg-white/10 backdrop-blur-md border-white/20">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center">
                        {module.type === "video" ? (
                          <FileVideo className="h-6 w-6 text-blue-300" />
                        ) : module.type === "document" ? (
                          <FileText className="h-6 w-6 text-blue-300" />
                        ) : (
                          <ImageIcon className="h-6 w-6 text-blue-300" />
                        )}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="font-semibold text-white">{module.title}</h3>
                          <Badge 
                            variant={module.status === "published" ? "default" : "secondary"}
                            className={module.status === "published" ? "bg-green-600 text-white" : "bg-yellow-600 text-white"}
                          >
                            {module.status}
                          </Badge>
                        </div>
                        <div className="flex items-center gap-4 text-sm text-blue-200">
                          <span>Module {index + 1}</span>
                          {module.duration && <span>Duration: {module.duration}</span>}
                          <span>Uploaded: {module.uploadDate}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        {module.type === "video" && (
                          <Button size="sm" variant="ghost" className="text-white hover:bg-white/10">
                            <Play className="h-4 w-4" />
                          </Button>
                        )}
                        <Button size="sm" variant="ghost" className="text-white hover:bg-white/10">
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button size="sm" variant="ghost" className="text-white hover:bg-white/10">
                          <Download className="h-4 w-4" />
                        </Button>
                        <Button size="sm" variant="ghost" className="text-white hover:bg-white/10">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Upload Section */}
            <Card className="bg-white/10 backdrop-blur-md border-white/20 border-dashed">
              <CardContent className="p-8 text-center">
                <Upload className="h-16 w-16 text-blue-300 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Upload New Content</h3>
                <p className="text-blue-200 mb-4">Drag and drop your video files, documents, or images here</p>
                <div className="flex items-center gap-4 justify-center">
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                    <FileVideo className="h-4 w-4 mr-2" />
                    Upload Video
                  </Button>
                  <Button variant="outline" className="border-white/20 text-white hover:bg-white/10">
                    <FileText className="h-4 w-4 mr-2" />
                    Upload Document
                  </Button>
                  <Button variant="outline" className="border-white/20 text-white hover:bg-white/10">
                    <ImageIcon className="h-4 w-4 mr-2" />
                    Upload Image
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Details Tab */}
          <TabsContent value="details" className="space-y-6">
            <Card className="bg-white/10 backdrop-blur-md border-white/20">
              <CardHeader>
                <CardTitle className="text-white">Course Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-blue-200">Course Title</label>
                  <Input 
                    value={courseTitle}
                    onChange={(e) => setCourseTitle(e.target.value)}
                    className="bg-white/10 border-white/20 text-white placeholder:text-blue-200"
                  />
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-blue-200">Course Description</label>
                  <Textarea 
                    value={courseDescription}
                    onChange={(e) => setCourseDescription(e.target.value)}
                    className="bg-white/10 border-white/20 text-white placeholder:text-blue-200 min-h-[120px]"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-blue-200">Course Category</label>
                    <Input 
                      placeholder="e.g., Programming, Design"
                      className="bg-white/10 border-white/20 text-white placeholder:text-blue-200"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-blue-200">Course Level</label>
                    <Input 
                      placeholder="e.g., Beginner, Intermediate, Advanced"
                      className="bg-white/10 border-white/20 text-white placeholder:text-blue-200"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-blue-200">Course Price ($)</label>
                    <Input 
                      type="number"
                      placeholder="0.00"
                      className="bg-white/10 border-white/20 text-white placeholder:text-blue-200"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-blue-200">Estimated Duration</label>
                    <Input 
                      placeholder="e.g., 4 weeks, 20 hours"
                      className="bg-white/10 border-white/20 text-white placeholder:text-blue-200"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Settings Tab */}
          <TabsContent value="settings" className="space-y-6">
            <Card className="bg-white/10 backdrop-blur-md border-white/20">
              <CardHeader>
                <CardTitle className="text-white">Course Settings</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium text-white">Course Visibility</h4>
                      <p className="text-sm text-blue-200">Make your course visible to students</p>
                    </div>
                    <Badge className="bg-green-600 text-white">Published</Badge>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium text-white">Enrollment</h4>
                      <p className="text-sm text-blue-200">Allow new student enrollments</p>
                    </div>
                    <Badge className="bg-blue-600 text-white">Open</Badge>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium text-white">Certificate</h4>
                      <p className="text-sm text-blue-200">Issue certificates upon completion</p>
                    </div>
                    <Badge className="bg-purple-600 text-white">Enabled</Badge>
                  </div>
                </div>

                <div className="pt-4 border-t border-white/20">
                  <Button variant="outline" className="border-red-500 text-red-400 hover:bg-red-500/10">
                    <Trash2 className="h-4 w-4 mr-2" />
                    Delete Course
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

export default CourseManagement;