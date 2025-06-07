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
      <section className="py-20 px-4 bg-gradient-to-br from-primary via-primary-foreground to-accent">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex justify-center mb-8">
            <img 
              src="/lovable-uploads/68565b99-d611-46e4-af99-07eeb06cb8cb.png" 
              alt="OPONMETA Logo" 
              className="h-16 w-auto"
            />
          </div>
           <h1 className="text-5xl font-bold text-slate-800 drop-shadow-lg mb-6">
             OPONMETA Features
           </h1>
           <p className="text-xl text-slate-700 max-w-4xl mx-auto mb-8 drop-shadow-md font-medium">
            Comprehensive global learning platform with cutting-edge technology, 
            inclusive education, and industry partnerships
          </p>
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {featureCategories.map((category) => (
              <Badge 
                key={category} 
                variant="secondary" 
                className="bg-card/90 text-card-foreground border-border backdrop-blur-sm hover:bg-card hover:shadow-md transition-all duration-200"
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
            <Card className="bg-card border-border hover:shadow-lg transition-all duration-300 group">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold text-card-foreground mb-4">Global Accessibility</h3>
                <p className="text-muted-foreground mb-4">
                  Multilingual platforms, scholarships, and inclusive education for all
                </p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Multiple language support</li>
                  <li>• Free learning materials</li>
                  <li>• Cultural adaptation</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-card border-border hover:shadow-lg transition-all duration-300 group">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold text-card-foreground mb-4">Future-Ready Technology</h3>
                <p className="text-muted-foreground mb-4">
                  AI-powered learning, Web3 integration, and metaverse experiences
                </p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• AI-powered courses</li>
                  <li>• Blockchain certifications</li>
                  <li>• Virtual campuses</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-card border-border hover:shadow-lg transition-all duration-300 group">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold text-card-foreground mb-4">Industry Partnerships</h3>
                <p className="text-muted-foreground mb-4">
                  Corporate training, university alliances, and professional networks
                </p>
                <ul className="text-sm text-muted-foreground space-y-1">
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