import { Button } from "@/components/ui/button";
import { Play, Star, Users } from "lucide-react";
import FeatureGrid from "./FeatureGrid";
import { useNavigate } from "react-router-dom";
import { memo, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { Typewriter } from 'react-simple-typewriter';

const Hero = memo(() => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  
  return (
    <section className="relative py-20 px-4 overflow-hidden bg-white text-[#0a1834] dark:bg-[#0a1834] dark:text-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-8">
          {/* Left Content - Text */}
          <div className="text-center lg:text-left p-0 m-0 flex-1">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight drop-shadow-2xl">
              Unlock Your Potential with{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-300 dark:from-cyan-300 dark:to-white to-cyan-600">
                <Typewriter
                  words={['Global Learning', 'AI-Powered Education', 'Future-Ready Skills', 'Next-Gen EdTech']}
                  loop={0}
                  cursor
                  cursorStyle="|"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={2000}
                />
              </span>
            </h1>
            <p className="text-2xl font-bold mb-8 max-w-2xl drop-shadow-lg text-[#0a1834] dark:text-white">
              OponMeta is redefining how the world learns. As a Global Edtech Powerhouse, we fuse innovation and accessibility to build scalable solutions in professional development and technical education. We don't just adapt to the future of work—we're shaping it.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button size="lg" className="bg-[#11204a] text-white hover:bg-[#16203a] dark:bg-white dark:text-[#0a1834] dark:hover:bg-gray-100" onClick={() => navigate("/free-trial")}>Start Your Free Trial</Button>
              <Button size="lg" variant="outline" className="border-[#11204a] text-[#11204a] hover:bg-[#11204a]/10 dark:border-white dark:text-white dark:hover:bg-white/10" onClick={() => navigate("/get-demo")}> <Play className="mr-2 h-5 w-5" /> Request a Demo</Button>
            </div>
            {/* Trust Indicators */}
            <div className="flex items-center justify-center lg:justify-start space-x-6">
              <div className="flex items-center space-x-2">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-8 h-8 rounded-full bg-[#16203a] dark:bg-cyan-300 border-2 border-white dark:border-[#0a1834]" />
                  ))}
                </div>
                <span className="font-bold drop-shadow-md text-[#0a1834] dark:text-white">50,000+ learners worldwide</span>
              </div>
              <div className="flex items-center space-x-1">
                <Star className="h-5 w-5 text-yellow-400 fill-current" />
                <span className="font-bold drop-shadow-md text-[#0a1834] dark:text-white">4.9/5 global rating</span>
              </div>
            </div>
          </div>

          {/* Right Content - Video Showcase */}
          <div className="flex justify-center lg:justify-end p-0 m-0 flex-shrink-0">
            <div className="relative group p-0 m-0">
              <div className="w-full max-w-sm aspect-[9/16] bg-[#0a1834] rounded-2xl shadow-2xl overflow-hidden group-hover:scale-105 transition-transform duration-500 border-4 border-[#11204a]">
                <video 
                  className="w-full h-full object-cover rounded-2xl" 
                  controls
                  poster="/branding/logo.png"
                >
                  <source src="/Quick Avatar Video.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

Hero.displayName = 'Hero';

export default Hero;