import FeatureShowcase from "@/components/FeatureShowcase";
import FeatureGrid from "@/components/FeatureGrid";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import PageNavigation from "@/components/PageNavigation";
import Footer from "@/components/Footer";

const Features = () => {
  const featureCategories = [
    "Global Knowledge Accessibility",
    "Innovation & Future-Ready Skills", 
    "Collaborative Learning Environment",
    "Industry-Relevant Training",
    "Professional Growth & Leadership Development",
    "Networking & Global Partnerships",
    "Inclusivity & Diversity in Learning",
    "Continuous Learning Culture",
    "Digital Branding & Market Positioning",
    "Monetization & Business Sustainability",
    "Emerging Technology Integration",
    "Community-Driven Marketing"
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-700 via-blue-800 to-indigo-900">
        <div className="max-w-7xl mx-auto text-center">
           <h1 className="text-5xl font-bold text-white mb-6">
             OPONMETA Features
           </h1>
           <p className="text-xl text-blue-100 max-w-4xl mx-auto mb-8">
            Comprehensive global learning platform with cutting-edge technology, 
            inclusive education, and industry partnerships
          </p>
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {featureCategories.map((category) => (
              <Badge 
                key={category} 
                variant="secondary" 
                className="bg-white/10 text-white border-white/20 hover:bg-white/20"
              >
                {category}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Main Feature Showcase */}
      <FeatureShowcase 
        title="Why Choose OPONMETA?"
        subtitle="We're building the future of global education with comprehensive features that empower learners, educators, and organizations worldwide."
      />
      
      {/* Feature Categories Overview */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Our Comprehensive Approach</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From multilingual accessibility to emerging technology integration, 
              OPONMETA covers every aspect of modern education
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card 
              className="bg-white/10 backdrop-blur-md border-white/20 relative"
              style={{
                boxShadow: '0 0 20px rgba(59, 130, 246, 0.3), 0 0 40px rgba(59, 130, 246, 0.1)',
              }}
            >
              <div 
                className="absolute inset-0 rounded-lg opacity-20 hover:opacity-30 transition-opacity duration-300"
                style={{
                  background: 'radial-gradient(ellipse at center, rgba(59, 130, 246, 0.4) 0%, rgba(59, 130, 246, 0.1) 50%, transparent 100%)',
                }}
              />
              <CardContent className="p-8 relative z-10">
                <h3 className="text-xl font-semibold text-white mb-4 drop-shadow-sm">Global Accessibility</h3>
                <p className="text-blue-100 mb-4 font-medium">
                  Multilingual platforms, scholarships, and inclusive education for all
                </p>
                <ul className="text-sm text-blue-200 space-y-1 font-medium">
                  <li>• Multiple language support</li>
                  <li>• Free learning materials</li>
                  <li>• Cultural adaptation</li>
                </ul>
              </CardContent>
            </Card>

            <Card 
              className="bg-white/10 backdrop-blur-md border-white/20 relative"
              style={{
                boxShadow: '0 0 20px rgba(59, 130, 246, 0.3), 0 0 40px rgba(59, 130, 246, 0.1)',
              }}
            >
              <div 
                className="absolute inset-0 rounded-lg opacity-20 hover:opacity-30 transition-opacity duration-300"
                style={{
                  background: 'radial-gradient(ellipse at center, rgba(59, 130, 246, 0.4) 0%, rgba(59, 130, 246, 0.1) 50%, transparent 100%)',
                }}
              />
              <CardContent className="p-8 relative z-10">
                <h3 className="text-xl font-semibold text-white mb-4 drop-shadow-sm">Future-Ready Technology</h3>
                <p className="text-blue-100 mb-4 font-medium">
                  AI-powered learning, Web3 integration, and metaverse experiences
                </p>
                <ul className="text-sm text-blue-200 space-y-1 font-medium">
                  <li>• AI-powered courses</li>
                  <li>• Blockchain certifications</li>
                  <li>• Virtual campuses</li>
                </ul>
              </CardContent>
            </Card>

            <Card 
              className="bg-white/10 backdrop-blur-md border-white/20 relative"
              style={{
                boxShadow: '0 0 20px rgba(59, 130, 246, 0.3), 0 0 40px rgba(59, 130, 246, 0.1)',
              }}
            >
              <div 
                className="absolute inset-0 rounded-lg opacity-20 hover:opacity-30 transition-opacity duration-300"
                style={{
                  background: 'radial-gradient(ellipse at center, rgba(59, 130, 246, 0.4) 0%, rgba(59, 130, 246, 0.1) 50%, transparent 100%)',
                }}
              />
              <CardContent className="p-8 relative z-10">
                <h3 className="text-xl font-semibold text-white mb-4 drop-shadow-sm">Industry Partnerships</h3>
                <p className="text-blue-100 mb-4 font-medium">
                  Corporate training, university alliances, and professional networks
                </p>
                <ul className="text-sm text-blue-200 space-y-1 font-medium">
                  <li>• Corporate certifications</li>
                  <li>• Research partnerships</li>
                  <li>• Global conferences</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* All Features Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Complete Feature Set</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Explore all 24 comprehensive features that make OPONMETA the leading global learning platform
            </p>
          </div>
          <FeatureGrid className="grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" />
        </div>
      </section>

      <PageNavigation />
      <Footer />
    </div>
  );
};

export default Features;