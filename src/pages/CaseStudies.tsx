import Navigation from "@/components/Navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Users, Clock, Award, ArrowRight, Download, ExternalLink } from "lucide-react";
import PageNavigation from "@/components/PageNavigation";

const CaseStudies = () => {
  const caseStudies = [
    {
      company: "TechGlobal Corp",
      industry: "Technology",
      challenge: "Scaling technical training for 2,000+ remote developers",
      solution: "AI-powered learning paths with hands-on coding labs",
      results: {
        engagement: "+340%",
        completion: "89%",
        timeToCompetency: "-60%",
        satisfaction: "4.8/5"
      },
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c",
      testimonial: "OPONMETA transformed how we train our global development teams. The AI recommendations are spot-on.",
      speaker: "Sarah Chen, Head of Engineering"
    },
    {
      company: "HealthFirst Medical",
      industry: "Healthcare",
      challenge: "Mandatory compliance training for 5,000+ healthcare workers",
      solution: "Mobile-first learning with offline capabilities and micro-learning modules",
      results: {
        engagement: "+250%",
        completion: "96%",
        timeToCompetency: "-45%",
        satisfaction: "4.9/5"
      },
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56",
      testimonial: "The mobile platform allowed our staff to learn during breaks. Compliance rates reached an all-time high.",
      speaker: "Dr. Michael Rodriguez, Chief Medical Officer"
    },
    {
      company: "Global Finance Bank",
      industry: "Financial Services",
      challenge: "Onboarding new employees across 25 countries",
      solution: "Multilingual courses with cultural adaptation and virtual mentoring",
      results: {
        engagement: "+180%",
        completion: "92%",
        timeToCompetency: "-50%",
        satisfaction: "4.7/5"
      },
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d",
      testimonial: "The localization features made global onboarding seamless. New hires are productive 50% faster.",
      speaker: "Maria Santos, Global Head of HR"
    },
    {
      company: "EduTech University",
      industry: "Education",
      challenge: "Hybrid learning for 15,000+ students during pandemic",
      solution: "Virtual classrooms with AI tutoring and collaborative tools",
      results: {
        engagement: "+200%",
        completion: "88%",
        timeToCompetency: "-30%",
        satisfaction: "4.6/5"
      },
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1",
      testimonial: "Students stayed engaged despite remote learning. The AI tutoring made personalized education scalable.",
      speaker: "Prof. James Wilson, Dean of Digital Learning"
    }
  ];

  const industries = [
    { name: "Technology", count: 45, icon: "💻" },
    { name: "Healthcare", count: 38, icon: "🏥" },
    { name: "Finance", count: 32, icon: "🏦" },
    { name: "Education", count: 28, icon: "🎓" },
    { name: "Manufacturing", count: 24, icon: "🏭" },
    { name: "Retail", count: 19, icon: "🛍️" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-400 via-blue-500 to-cyan-500">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Global Success Stories
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Discover how organizations around the world are transforming learning and development with OPONMETA
          </p>
        </div>

        {/* Industry Stats */}
        <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4 mb-16">
          {industries.map((industry, index) => (
            <Card key={index} className="bg-white/10 backdrop-blur-md border-white/20 text-center">
              <CardContent className="p-4">
                <div className="text-2xl mb-2">{industry.icon}</div>
                <div className="text-lg font-bold text-white">{industry.count}</div>
                <div className="text-sm text-blue-100">{industry.name}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Case Studies */}
        <div className="space-y-12">
          {caseStudies.map((study, index) => (
            <Card key={index} className="bg-white/10 backdrop-blur-md border-white/20">
              <CardContent className="p-0">
                <div className="grid lg:grid-cols-2 gap-0">
                  {/* Image */}
                  <div className="relative h-64 lg:h-auto">
                    <img 
                      src={study.image}
                      alt={study.company}
                      className="w-full h-full object-cover rounded-l-lg"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent" />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-white/20 text-white border-white/30">
                        {study.industry}
                      </Badge>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-white mb-4">{study.company}</h3>
                    
                    <div className="space-y-4 mb-6">
                      <div>
                        <h4 className="text-lg font-semibold text-blue-200 mb-2">Challenge</h4>
                        <p className="text-blue-100">{study.challenge}</p>
                      </div>
                      
                      <div>
                        <h4 className="text-lg font-semibold text-blue-200 mb-2">Solution</h4>
                        <p className="text-blue-100">{study.solution}</p>
                      </div>
                    </div>

                    {/* Results */}
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-green-400">{study.results.engagement}</div>
                        <div className="text-sm text-blue-200">Engagement</div>
                        <div className="text-xs text-blue-300">Learner participation</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-green-400">{study.results.completion}</div>
                        <div className="text-sm text-blue-200">Completion</div>
                        <div className="text-xs text-blue-300">Course completion rate</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-green-400">{study.results.timeToCompetency}</div>
                        <div className="text-sm text-blue-200">Time to Competency</div>
                        <div className="text-xs text-blue-300">Faster skill mastery</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-green-400">{study.results.satisfaction}</div>
                        <div className="text-sm text-blue-200">Satisfaction</div>
                        <div className="text-xs text-blue-300">User satisfaction</div>
                      </div>
                    </div>

                    {/* Testimonial */}
                    <div className="bg-white/5 rounded-lg p-4 mb-6">
                      <p className="text-blue-100 italic mb-2">"{study.testimonial}"</p>
                      <p className="text-blue-200 font-medium">- {study.speaker}</p>
                    </div>

                    {/* Actions */}
                    <div className="flex space-x-3">
                      <Button size="sm" className="bg-white text-purple-900 hover:bg-gray-100">
                        <Download className="h-4 w-4 mr-2" />
                        Download PDF
                      </Button>
                      <Button size="sm" variant="outline" className="border-white/20 text-white hover:bg-white/10">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        View Details
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20">
          <Card className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-md border-white/20">
            <CardContent className="p-12 text-center">
              <h2 className="text-3xl font-bold text-white mb-4">Ready to Write Your Success Story?</h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Join global industry leaders and see what OPONMETA can do for your organization
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-white text-purple-900 hover:bg-gray-100">
                  <ArrowRight className="h-4 w-4 mr-2" />
                  Start Your Free Trial
                </Button>
                <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10">
                  Book a Demo
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      <PageNavigation />
    </div>
  );
};

export default CaseStudies;