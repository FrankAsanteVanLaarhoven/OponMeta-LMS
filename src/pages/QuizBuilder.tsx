import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  CheckCircle, 
  Clock, 
  BarChart3, 
  Users, 
  Brain, 
  Target, 
  PieChart,
  TrendingUp,
  FileText,
  Play,
  Plus,
  Settings,
  Eye,
  Download
} from "lucide-react";
import { useState } from "react";

const QuizBuilder = () => {
  const [activeTab, setActiveTab] = useState("builder");

  const questionTypes = [
    { type: "Multiple Choice", icon: CheckCircle, description: "Single or multiple correct answers" },
    { type: "True/False", icon: Target, description: "Simple binary questions" },
    { type: "Fill in the Blank", icon: FileText, description: "Text input responses" },
    { type: "Drag & Drop", icon: Brain, description: "Interactive matching exercises" },
    { type: "Rating Scale", icon: BarChart3, description: "Likert scale responses" },
    { type: "Image Selection", icon: Eye, description: "Visual question types" }
  ];

  const sampleQuizzes = [
    {
      id: 1,
      title: "JavaScript Fundamentals Assessment",
      questions: 15,
      timeLimit: "30 minutes",
      participants: 124,
      avgScore: 78,
      status: "Active",
      category: "Programming"
    },
    {
      id: 2,
      title: "Digital Marketing Knowledge Check",
      questions: 20,
      timeLimit: "45 minutes",
      participants: 89,
      avgScore: 82,
      status: "Draft",
      category: "Marketing"
    },
    {
      id: 3,
      title: "Customer Service Training Quiz",
      questions: 12,
      timeLimit: "20 minutes",
      participants: 156,
      avgScore: 85,
      status: "Completed",
      category: "Training"
    }
  ];

  const analyticsData = [
    { metric: "Total Quizzes", value: "47", change: "+12%" },
    { metric: "Total Responses", value: "2,349", change: "+8%" },
    { metric: "Average Score", value: "81%", change: "+3%" },
    { metric: "Completion Rate", value: "94%", change: "+5%" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-400 via-blue-500 to-cyan-500">
      
      {/* Header */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-white mb-6">Quiz & Survey Builder</h1>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Design interactive assessments with a variety of question types. Monitor progress with advanced analytics and AI-driven insights.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-[#11204a] text-white hover:bg-[#16203a] border-2 border-[#0a1834]">
              <Plus className="mr-2 h-5 w-5" />
              New Quiz
            </Button>
            <Button size="lg" variant="outline" className="border-[#11204a] text-[#11204a] hover:bg-[#11204a]/10">
              <Eye className="mr-2 h-5 w-5" />
              Preview Example
            </Button>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-8">
              <TabsTrigger value="builder">Quiz Builder</TabsTrigger>
              <TabsTrigger value="library">Quiz Library</TabsTrigger>
              <TabsTrigger value="analytics">Analytics</TabsTrigger>
              <TabsTrigger value="features">Features</TabsTrigger>
            </TabsList>

            <TabsContent value="builder" className="space-y-8">
              {/* Question Types */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Choose Question Type</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {questionTypes.map((type, index) => (
                    <Card key={index} className="hover:shadow-lg transition-all cursor-pointer hover:scale-105">
                      <CardContent className="p-6 text-center">
                        <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                          <type.icon className="h-8 w-8 text-green-600" />
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">{type.type}</h3>
                        <p className="text-gray-600 text-sm">{type.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Quiz Builder Interface */}
              <div className="bg-gray-50 rounded-lg p-8">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-bold text-gray-900">Quiz Builder Interface</h3>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      <Settings className="mr-2 h-4 w-4" />
                      Quiz Settings
                    </Button>
                    <Button variant="outline" size="sm">
                      <Eye className="mr-2 h-4 w-4" />
                      Preview Quiz
                    </Button>
                    <Button size="sm" className="bg-green-600 hover:bg-green-700">
                      <Play className="mr-2 h-4 w-4" />
                      Publish Quiz
                    </Button>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg p-6 border-2 border-dashed border-gray-300">
                  <div className="text-center py-12">
                    <Brain className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                    <h4 className="text-xl font-semibold text-gray-600 mb-2">Start Building Your Quiz</h4>
                    <p className="text-gray-500 mb-6">
                      Drag and drop question types or click to add new questions
                    </p>
                    <Button className="bg-[#11204a] text-white hover:bg-[#16203a] border-2 border-[#0a1834]">
                      Add Question
                    </Button>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="library" className="space-y-8">
              <div className="flex items-center justify-between">
                <h2 className="text-3xl font-bold text-gray-900">Quiz Library</h2>
                <Button className="bg-blue-600 hover:bg-blue-700">
                  <Plus className="mr-2 h-4 w-4" />
                  New Quiz
                </Button>
              </div>

              <div className="grid gap-6">
                {sampleQuizzes.map((quiz) => (
                  <Card key={quiz.id} className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <h3 className="text-xl font-semibold text-gray-900">{quiz.title}</h3>
                            <Badge className={
                              quiz.status === 'Active' ? 'bg-green-600' :
                              quiz.status === 'Draft' ? 'bg-yellow-600' :
                              'bg-gray-600'
                            }>
                              {quiz.status}
                            </Badge>
                            <Badge variant="outline">{quiz.category}</Badge>
                          </div>
                          <div className="flex items-center gap-6 text-sm text-gray-500">
                            <span className="flex items-center gap-1">
                              <FileText className="h-4 w-4" />
                              {quiz.questions} questions
                            </span>
                            <span className="flex items-center gap-1">
                              <Clock className="h-4 w-4" />
                              {quiz.timeLimit}
                            </span>
                            <span className="flex items-center gap-1">
                              <Users className="h-4 w-4" />
                              {quiz.participants} participants
                            </span>
                            <span className="flex items-center gap-1">
                              <BarChart3 className="h-4 w-4" />
                              {quiz.avgScore}% avg score
                            </span>
                          </div>
                        </div>
                        
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm">
                            <Eye className="mr-2 h-4 w-4" />
                            View
                          </Button>
                          <Button variant="outline" size="sm">
                            <Download className="mr-2 h-4 w-4" />
                            Export
                          </Button>
                          <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                            Edit
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="analytics" className="space-y-8">
              <h2 className="text-3xl font-bold text-gray-900">Analytics Dashboard</h2>
              
              {/* Key Metrics */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {analyticsData.map((data, index) => (
                  <Card key={index}>
                    <CardContent className="p-6 text-center">
                      <div className="text-2xl font-bold text-gray-900 mb-1">{data.value}</div>
                      <div className="text-sm text-gray-600 mb-2">{data.metric}</div>
                      <div className="flex items-center justify-center gap-1 text-green-600 text-sm">
                        <TrendingUp className="h-3 w-3" />
                        {data.change}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Charts Placeholder */}
              <div className="grid md:grid-cols-2 gap-8">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Quiz Performance Trends</h3>
                    <div className="bg-gray-100 rounded-lg h-64 flex items-center justify-center">
                      <div className="text-center text-gray-500">
                        <BarChart3 className="h-12 w-12 mx-auto mb-2" />
                        <p>Performance chart would appear here</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Question Type Distribution</h3>
                    <div className="bg-gray-100 rounded-lg h-64 flex items-center justify-center">
                      <div className="text-center text-gray-500">
                        <PieChart className="h-12 w-12 mx-auto mb-2" />
                        <p>Distribution chart would appear here</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="features" className="space-y-8">
              <h2 className="text-3xl font-bold text-gray-900">Powerful Features</h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 text-center">
                    <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                      <Brain className="h-8 w-8 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">AI-Powered Questions</h3>
                    <p className="text-gray-600">
                      Generate quiz questions automatically using AI based on your content and learning objectives.
                    </p>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 text-center">
                    <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                      <BarChart3 className="h-8 w-8 text-green-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Real-time Analytics</h3>
                    <p className="text-gray-600">
                      Track quiz performance, identify knowledge gaps, and measure learning progress in real-time.
                    </p>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 text-center">
                    <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                      <Target className="h-8 w-8 text-purple-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Adaptive Testing</h3>
                    <p className="text-gray-600">
                      Adjust question difficulty based on learner performance for personalized assessment experiences.
                    </p>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 text-center">
                    <div className="bg-orange-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                      <Clock className="h-8 w-8 text-orange-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Timed Assessments</h3>
                    <p className="text-gray-600">
                      Set time limits for entire quizzes or individual questions to create focused assessment experiences.
                    </p>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 text-center">
                    <div className="bg-red-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="h-8 w-8 text-red-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Auto-Grading</h3>
                    <p className="text-gray-600">
                      Automatically grade responses and provide instant feedback to learners with detailed explanations.
                    </p>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 text-center">
                    <div className="bg-cyan-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                      <Users className="h-8 w-8 text-cyan-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Collaborative Assessment</h3>
                    <p className="text-gray-600">
                      Enable peer review and group assessments for collaborative learning experiences.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-gradient-to-r from-green-600 to-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Create Engaging Assessments?
          </h2>
          <p className="text-xl text-green-100 mb-8">
            Start building interactive quizzes and surveys that enhance learning outcomes and engagement.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-green-900 hover:bg-gray-100">
              Start Building Now
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              View Examples
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default QuizBuilder;