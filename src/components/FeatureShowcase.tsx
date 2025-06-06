import FeatureGrid from "./FeatureGrid";

interface FeatureShowcaseProps {
  title?: string;
  subtitle?: string;
  className?: string;
}

const FeatureShowcase = ({ 
  title = "Why Choose OPONMETA?",
  subtitle = "We're more than just an online learning platform. We're building the future of global education with comprehensive, innovative, and inclusive learning solutions.",
  className = ""
}: FeatureShowcaseProps) => {
  return (
    <section className={`py-20 px-4 ${className}`}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">{title}</h2>
          <p className="text-xl text-white font-semibold max-w-3xl mx-auto drop-shadow-lg">
            {subtitle}
          </p>
        </div>

        <FeatureGrid />
      </div>
    </section>
  );
};

export default FeatureShowcase;