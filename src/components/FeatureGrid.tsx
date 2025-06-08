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

const rawFeatures: Omit<Feature, 'title' | 'description'> & { titleKey: string, descriptionKey: string }[] = [
  { id: "multilingual-platforms", titleKey: "featureGrid.multilingualDigitalLearning.title", descriptionKey: "featureGrid.multilingualDigitalLearning.description", icon: Globe, iconColor: "text-blue-400", category: "Global Knowledge Accessibility" },
  { id: "scholarships", titleKey: "featureGrid.scholarships.title", descriptionKey: "featureGrid.scholarships.description", icon: Heart, iconColor: "text-red-400", category: "Global Knowledge Accessibility" },
  { id: "emerging-tech", titleKey: "featureGrid.emergingTech.title", descriptionKey: "featureGrid.emergingTech.description", icon: Brain, iconColor: "text-purple-400", category: "Innovation & Future-Ready Skills" },
  { id: "workshops-hackathons", titleKey: "featureGrid.workshopsHackathons.title", descriptionKey: "featureGrid.workshopsHackathons.description", icon: Zap, iconColor: "text-yellow-400", category: "Innovation & Future-Ready Skills" },
  { id: "professional-networks", titleKey: "featureGrid.professionalNetworks.title", descriptionKey: "featureGrid.professionalNetworks.description", icon: Network, iconColor: "text-green-400", category: "Collaborative Learning Environment" },
  { id: "mentorship-programs", titleKey: "featureGrid.mentorshipPrograms.title", descriptionKey: "featureGrid.mentorshipPrograms.description", icon: Users, iconColor: "text-indigo-400", category: "Collaborative Learning Environment" },
  { id: "corporate-partnerships", titleKey: "featureGrid.corporatePartnerships.title", descriptionKey: "featureGrid.corporatePartnerships.description", icon: Building, iconColor: "text-gray-400", category: "Industry-Relevant Training" },
  { id: "hands-on-training", titleKey: "featureGrid.handsOnTraining.title", descriptionKey: "featureGrid.handsOnTraining.description", icon: Target, iconColor: "text-orange-400", category: "Industry-Relevant Training" },
  { id: "leadership-courses", titleKey: "featureGrid.leadershipCourses.title", descriptionKey: "featureGrid.leadershipCourses.description", icon: TrendingUp, iconColor: "text-cyan-400", category: "Professional Growth & Leadership Development" },
  { id: "career-coaching", titleKey: "featureGrid.careerCoaching.title", descriptionKey: "featureGrid.careerCoaching.description", icon: MessageSquare, iconColor: "text-pink-400", category: "Professional Growth & Leadership Development" },
  { id: "university-alliances", titleKey: "featureGrid.universityAlliances.title", descriptionKey: "featureGrid.universityAlliances.description", icon: Handshake, iconColor: "text-teal-400", category: "Networking & Global Partnerships" },
  { id: "international-conferences", titleKey: "featureGrid.internationalConferences.title", descriptionKey: "featureGrid.internationalConferences.description", icon: Globe, iconColor: "text-violet-400", category: "Networking & Global Partnerships" },
  { id: "accessible-education", titleKey: "featureGrid.accessibleEducation.title", descriptionKey: "featureGrid.accessibleEducation.description", icon: Heart, iconColor: "text-rose-400", category: "Inclusivity & Diversity in Learning" },
  { id: "cultural-programs", titleKey: "featureGrid.culturalPrograms.title", descriptionKey: "featureGrid.culturalPrograms.description", icon: Users, iconColor: "text-emerald-400", category: "Inclusivity & Diversity in Learning" },
  { id: "lifelong-learning", titleKey: "featureGrid.lifelongLearning.title", descriptionKey: "featureGrid.lifelongLearning.description", icon: BookOpen, iconColor: "text-blue-500", category: "Continuous Learning Culture" },
  { id: "self-paced-learning", titleKey: "featureGrid.selfPacedLearning.title", descriptionKey: "featureGrid.selfPacedLearning.description", icon: Play, iconColor: "text-green-500", category: "Continuous Learning Culture" },
  { id: "content-marketing", titleKey: "featureGrid.contentMarketing.title", descriptionKey: "featureGrid.contentMarketing.description", icon: Star, iconColor: "text-yellow-500", category: "Digital Branding & Market Positioning" },
  { id: "influencer-collaborations", titleKey: "featureGrid.influencerCollaborations.title", descriptionKey: "featureGrid.influencerCollaborations.description", icon: Users, iconColor: "text-purple-500", category: "Digital Branding & Market Positioning" },
  { id: "revenue-diversification", titleKey: "featureGrid.revenueDiversification.title", descriptionKey: "featureGrid.revenueDiversification.description", icon: DollarSign, iconColor: "text-green-600", category: "Monetization & Business Sustainability" },
  { id: "sponsorship-opportunities", titleKey: "featureGrid.sponsorshipOpportunities.title", descriptionKey: "featureGrid.sponsorshipOpportunities.description", icon: Handshake, iconColor: "text-blue-600", category: "Monetization & Business Sustainability" },
  { id: "web3-blockchain", titleKey: "featureGrid.web3Blockchain.title", descriptionKey: "featureGrid.web3Blockchain.description", icon: Shield, iconColor: "text-indigo-600", category: "Emerging Technology Integration" },
  { id: "metaverse-engagement", titleKey: "featureGrid.metaverseEngagement.title", descriptionKey: "featureGrid.metaverseEngagement.description", icon: Brain, iconColor: "text-cyan-600", category: "Emerging Technology Integration" },
  { id: "ambassador-programs", titleKey: "featureGrid.ambassadorPrograms.title", descriptionKey: "featureGrid.ambassadorPrograms.description", icon: Users, iconColor: "text-orange-600", category: "Community-Driven Marketing" },
  { id: "hybrid-conferences", titleKey: "featureGrid.hybridConferences.title", descriptionKey: "featureGrid.hybridConferences.description", icon: Globe, iconColor: "text-teal-600", category: "Community-Driven Marketing" }
];

const FeatureGrid = ({ className = "", cardClassName = "", showCategories = false }: FeatureGridProps) => {
  const { t } = useTranslation();
  const features = rawFeatures.map(f => ({ ...f, title: t(f.titleKey), description: t(f.descriptionKey) }));

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