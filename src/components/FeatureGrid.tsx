import { Card, CardContent } from "@/components/ui/card";
import { 
  Users, Star, Play, Globe, Brain, Network, Building, TrendingUp, 
  Shield, Target, Handshake, Heart, BookOpen, DollarSign, Zap, MessageSquare 
} from "lucide-react";
import { useTranslation } from 'react-i18next';

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

const features: Feature[] = [
  { id: "multilingual-platforms", title: "Multilingual Learning Experience", description: "Learn in your chosen language—English, Spanish, Mandarin, and more—for a seamless global education.", icon: Globe, iconColor: "text-blue-400", category: "Global Knowledge Accessibility" },
  { id: "scholarships", title: "Inclusive Scholarships & Free Resources", description: "Access scholarships and complimentary resources, empowering learners everywhere.", icon: Heart, iconColor: "text-red-400", category: "Global Knowledge Accessibility" },
  { id: "emerging-tech", title: "Next-Gen Technology Training", description: "Enhance your expertise with AI-powered and emerging technology courses, always current.", icon: Brain, iconColor: "text-purple-400", category: "Innovation & Future-Ready Skills" },
  { id: "workshops-hackathons", title: "Interactive Workshops & Hackathons", description: "Participate in hands-on workshops and challenges for practical experience.", icon: Zap, iconColor: "text-yellow-400", category: "Innovation & Future-Ready Skills" },
  { id: "professional-networks", title: "Global Professional Networks", description: "Engage with professionals and peers worldwide in dynamic learning communities.", icon: Network, iconColor: "text-green-400", category: "Collaborative Learning Environment" },
  { id: "mentorship-programmes", title: "Personalised Mentorship Programmes", description: "Grow faster with support from experienced mentors.", icon: Users, iconColor: "text-indigo-400", category: "Collaborative Learning Environment" },
  { id: "corporate-partnerships", title: "Industry Training Partnerships", description: "Earn certifications and join specialised programmes with top organisations.", icon: Building, iconColor: "text-gray-400", category: "Industry-Relevant Training" },
  { id: "hands-on-training", title: "Real-World Training Programmes", description: "Develop skills through real-world simulations and scenarios.", icon: Target, iconColor: "text-orange-400", category: "Industry-Relevant Training" },
  { id: "leadership-courses", title: "Leadership & Management Excellence", description: "Strengthen your leadership and management skills for career growth.", icon: TrendingUp, iconColor: "text-cyan-400", category: "Professional Growth & Leadership Development" },
  { id: "career-coaching", title: "Career Coaching & Guidance", description: "Get personalised coaching and support for your career journey.", icon: MessageSquare, iconColor: "text-pink-400", category: "Professional Growth & Leadership Development" },
  { id: "university-alliances", title: "University & Industry Alliances", description: "Partner with leading institutions for research and learning opportunities.", icon: Handshake, iconColor: "text-teal-400", category: "Networking & Global Partnerships" },
  { id: "international-conferences", title: "Global Conferences & Summits", description: "Join international events and webinars on the latest topics.", icon: Globe, iconColor: "text-violet-400", category: "Networking & Global Partnerships" },
  { id: "accessible-education", title: "Accessible Education for All", description: "Scholarships and support for underrepresented groups in all disciplines.", icon: Heart, iconColor: "text-rose-400", category: "Inclusivity & Diversity in Learning" },
  { id: "cultural-programmes", title: "Culturally Responsive Programmes", description: "Specialised training for diverse backgrounds and regions.", icon: Users, iconColor: "text-emerald-400", category: "Inclusivity & Diversity in Learning" },
  { id: "lifelong-learning", title: "Lifelong Learning Opportunities", description: "Earn micro-credentials and keep your skills up to date for life.", icon: BookOpen, iconColor: "text-blue-500", category: "Continuous Learning Culture" },
  { id: "self-paced-learning", title: "Flexible, Self-Paced Courses", description: "Learn at your own pace with flexible, on-demand courses.", icon: Play, iconColor: "text-green-500", category: "Continuous Learning Culture" },
  { id: "content-marketing", title: "Thought Leadership & Content Marketing", description: "Expand your brand with expert insights and industry content.", icon: Star, iconColor: "text-yellow-500", category: "Digital Branding & Market Positioning" },
  { id: "influencer-collaborations", title: "Influencer & Expert Collaborations", description: "Collaborate with industry leaders and grow your professional network.", icon: Users, iconColor: "text-purple-500", category: "Digital Branding & Market Positioning" },
  { id: "revenue-diversification", title: "Multiple Revenue Opportunities", description: "Discover subscriptions, premium mentorship, and more.", icon: DollarSign, iconColor: "text-green-600", category: "Monetization & Business Sustainability" },
  { id: "sponsorship-opportunities", title: "Strategic Sponsorships", description: "Work with industry leaders on impactful initiatives.", icon: Handshake, iconColor: "text-blue-600", category: "Monetization & Business Sustainability" },
  { id: "web3-blockchain", title: "Web3 & Blockchain Credentials", description: "Earn blockchain-based credentials and explore tokenized learning.", icon: Shield, iconColor: "text-indigo-600", category: "Emerging Technology Integration" },
  { id: "metaverse-engagement", title: "Immersive Metaverse Learning", description: "Experience immersive, virtual learning environments.", icon: Brain, iconColor: "text-cyan-600", category: "Emerging Technology Integration" },
  { id: "ambassador-programmes", title: "Global Ambassador Programmes", description: "Represent our brand and connect with a global community.", icon: Users, iconColor: "text-orange-600", category: "Community-Driven Marketing" },
  { id: "hybrid-conferences", title: "Hybrid Global Events", description: "Participate in virtual and in-person events on innovation and trends.", icon: Globe, iconColor: "text-teal-600", category: "Community-Driven Marketing" }
];

const FeatureGrid = ({ className = "", cardClassName = "", showCategories = false }: FeatureGridProps) => {
  const { t } = useTranslation();

  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 gap-6 ${className}`}>
      {features.map((feature) => (
        <Card 
          key={feature.id}
          className={`bg-card border-border shadow-lg hover:shadow-xl transition-all duration-300 group relative ${cardClassName}`}
          style={{
            boxShadow: '0 0 20px rgba(59, 130, 246, 0.3), 0 0 40px rgba(59, 130, 246, 0.1)',
          }}
        >
          <div 
            className="absolute inset-0 rounded-lg opacity-20 group-hover:opacity-30 transition-opacity duration-300"
            style={{
              background: 'radial-gradient(ellipse at center, rgba(59, 130, 246, 0.4) 0%, rgba(59, 130, 246, 0.1) 50%, transparent 100%)',
            }}
          />
          <CardContent className="p-8 relative z-10">
            <div className="text-center space-y-4">
              <div className="inline-flex p-3 rounded-full bg-primary/20 group-hover:scale-110 transition-transform duration-300 backdrop-blur-sm">
                <feature.icon className={`h-8 w-8 ${feature.iconColor}`} />
              </div>
              <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                {feature.title}
              </h3>
              <p className="text-foreground leading-relaxed font-semibold">
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