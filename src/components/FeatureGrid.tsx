import { Card, CardContent } from "@/components/ui/card";
import { 
  Users, Star, Play, Globe, Brain, Network, Building, TrendingUp, 
  Shield, Target, Handshake, Heart, BookOpen, DollarSign, Zap, MessageSquare 
} from "lucide-react";

interface Feature {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  iconColor: string;
  category: string;
}

interface FeatureGridProps {
  className?: string;
  cardClassName?: string;
  showCategories?: boolean;
}

const FeatureGrid = ({ className = "", cardClassName = "", showCategories = false }: FeatureGridProps) => {
  const features: Feature[] = [
    // Global Knowledge Accessibility
    {
      id: "multilingual-platforms",
      title: "Multilingual Digital Learning",
      description: "Access courses in multiple languages including English, Spanish, and Mandarin",
      icon: Globe,
      iconColor: "text-blue-400",
      category: "Global Knowledge Accessibility"
    },
    {
      id: "scholarships",
      title: "Scholarships & Free Materials",
      description: "Full scholarships and free learning materials for students from all backgrounds",
      icon: Heart,
      iconColor: "text-red-400",
      category: "Global Knowledge Accessibility"
    },
    
    // Innovation & Future-Ready Skills
    {
      id: "emerging-tech",
      title: "Emerging Technology Integration",
      description: "AI-powered courses and cutting-edge technology training modules",
      icon: Brain,
      iconColor: "text-purple-400",
      category: "Innovation & Future-Ready Skills"
    },
    {
      id: "workshops-hackathons",
      title: "Workshops & Hackathons",
      description: "24-hour coding challenges and hands-on workshops for practical learning",
      icon: Zap,
      iconColor: "text-yellow-400",
      category: "Innovation & Future-Ready Skills"
    },
    
    // Collaborative Learning Environment
    {
      id: "professional-networks",
      title: "Global Professional Networks",
      description: "Online forums connecting industry experts and learners worldwide",
      icon: Network,
      iconColor: "text-green-400",
      category: "Collaborative Learning Environment"
    },
    {
      id: "mentorship-programs",
      title: "Mentorship Programs",
      description: "Pairing students with experienced professionals for personalized guidance",
      icon: Users,
      iconColor: "text-indigo-400",
      category: "Collaborative Learning Environment"
    },
    
    // Industry-Relevant Training
    {
      id: "corporate-partnerships",
      title: "Corporate Training Partnerships",
      description: "Cybersecurity certifications and specialized programs with tech firms",
      icon: Building,
      iconColor: "text-gray-400",
      category: "Industry-Relevant Training"
    },
    {
      id: "hands-on-training",
      title: "Hands-On Training Programs",
      description: "Simulation-based training for manufacturing and other industries",
      icon: Target,
      iconColor: "text-orange-400",
      category: "Industry-Relevant Training"
    },
    
    // Professional Growth & Leadership Development
    {
      id: "leadership-courses",
      title: "Leadership & Management",
      description: "Executive MBA programs and comprehensive leadership development",
      icon: TrendingUp,
      iconColor: "text-cyan-400",
      category: "Professional Growth & Leadership Development"
    },
    {
      id: "career-coaching",
      title: "Career Coaching",
      description: "One-on-one coaching sessions and resume-building workshops",
      icon: MessageSquare,
      iconColor: "text-pink-400",
      category: "Professional Growth & Leadership Development"
    },
    
    // Networking & Global Partnerships
    {
      id: "university-alliances",
      title: "University & Corporate Alliances",
      description: "Joint research initiatives and partnerships with leading institutions",
      icon: Handshake,
      iconColor: "text-teal-400",
      category: "Networking & Global Partnerships"
    },
    {
      id: "international-conferences",
      title: "International Conferences",
      description: "Annual global summits and webinars on cutting-edge topics",
      icon: Globe,
      iconColor: "text-violet-400",
      category: "Networking & Global Partnerships"
    },
    
    // Inclusivity & Diversity in Learning
    {
      id: "accessible-education",
      title: "Accessible Education",
      description: "Scholarships for women in STEM and underrepresented groups",
      icon: Heart,
      iconColor: "text-rose-400",
      category: "Inclusivity & Diversity in Learning"
    },
    {
      id: "cultural-programs",
      title: "Culturally Tailored Programs",
      description: "Specialized training for different cultural contexts and regions",
      icon: Users,
      iconColor: "text-emerald-400",
      category: "Inclusivity & Diversity in Learning"
    },
    
    // Continuous Learning Culture
    {
      id: "lifelong-learning",
      title: "Lifelong Learning Programs",
      description: "Micro-credentialing and continuous professional development",
      icon: BookOpen,
      iconColor: "text-blue-500",
      category: "Continuous Learning Culture"
    },
    {
      id: "self-paced-learning",
      title: "Self-Paced Learning",
      description: "On-demand courses with flexible scheduling options",
      icon: Play,
      iconColor: "text-green-500",
      category: "Continuous Learning Culture"
    },
    
    // Digital Branding & Market Positioning
    {
      id: "content-marketing",
      title: "Content-Driven Marketing",
      description: "Thought leadership articles and industry trend analysis",
      icon: Star,
      iconColor: "text-yellow-500",
      category: "Digital Branding & Market Positioning"
    },
    {
      id: "influencer-collaborations",
      title: "Influencer Collaborations",
      description: "Partnerships with industry thought leaders and social media engagement",
      icon: Users,
      iconColor: "text-purple-500",
      category: "Digital Branding & Market Positioning"
    },
    
    // Monetization & Business Sustainability
    {
      id: "revenue-diversification",
      title: "Diversified Revenue Streams",
      description: "Subscription platforms and premium mentorship programs",
      icon: DollarSign,
      iconColor: "text-green-600",
      category: "Monetization & Business Sustainability"
    },
    {
      id: "sponsorship-opportunities",
      title: "Sponsorship Opportunities",
      description: "Co-branded initiatives with industry leaders and strategic partnerships",
      icon: Handshake,
      iconColor: "text-blue-600",
      category: "Monetization & Business Sustainability"
    },
    
    // Emerging Technology Integration
    {
      id: "web3-blockchain",
      title: "Web3 & Blockchain Solutions",
      description: "Tokenized learning models and blockchain-verified certifications",
      icon: Shield,
      iconColor: "text-indigo-600",
      category: "Emerging Technology Integration"
    },
    {
      id: "metaverse-engagement",
      title: "Metaverse Learning",
      description: "Virtual campuses for immersive learning experiences",
      icon: Brain,
      iconColor: "text-cyan-600",
      category: "Emerging Technology Integration"
    },
    
    // Community-Driven Marketing
    {
      id: "ambassador-programs",
      title: "Ambassador Programs",
      description: "Community-driven marketing and global brand representation",
      icon: Users,
      iconColor: "text-orange-600",
      category: "Community-Driven Marketing"
    },
    {
      id: "hybrid-conferences",
      title: "Hybrid Global Conferences",
      description: "Virtual and in-person events on industry trends and innovations",
      icon: Globe,
      iconColor: "text-teal-600",
      category: "Community-Driven Marketing"
    }
  ];

  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 gap-6 ${className}`}>
      {features.map((feature) => (
        <Card 
          key={feature.id}
          className={`bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/15 transition-all duration-300 group ${cardClassName}`}
        >
          <CardContent className="p-8">
            <div className="text-center space-y-4">
              <div className="inline-flex p-3 rounded-full bg-white/10 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className={`h-8 w-8 ${feature.iconColor}`} />
              </div>
              <h3 className="text-xl font-semibold text-white group-hover:text-blue-200 transition-colors">
                {feature.title}
              </h3>
              <p className="text-blue-100 leading-relaxed">
                {feature.description}
              </p>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default FeatureGrid;