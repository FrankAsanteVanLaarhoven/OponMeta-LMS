import { Button } from "@/components/ui/button";
import { Play, Star, Users } from "lucide-react";
import FeatureGrid from "./FeatureGrid";
import { useNavigate } from "react-router-dom";
import { memo, useCallback } from "react";
import { useTranslation } from "react-i18next";

const Hero = memo(() => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  
  return (
    <section className="relative py-20 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight drop-shadow-2xl">Unlock Your Potential with Global Learning</h1>
            <p className="text-2xl text-slate-800 font-bold mb-8 max-w-2xl drop-shadow-lg">
              Join a worldwide community and access high-quality courses for learners and professionals. Study flexibly, anytime, anywhere.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button size="lg" className="bg-white text-purple-900 hover:bg-gray-100" onClick={() => navigate("/free-trial")}>
                Start Your Free Trial
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10" onClick={() => navigate("/get-demo")}>
                <Play className="mr-2 h-5 w-5" />
                Request a Demo
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center justify-center lg:justify-start space-x-6">
              <div className="flex items-center space-x-2">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="w-8 h-8 rounded-full bg-gradient-to-r from-cyan-400 to-purple-400 border-2 border-white"
                    />
                  ))}
                </div>
                <span className="text-slate-900 font-bold drop-shadow-md">50,000+ learners worldwide</span>
              </div>
              <div className="flex items-center space-x-1">
                <Star className="h-5 w-5 text-yellow-400 fill-current" />
                <span className="text-slate-900 font-bold drop-shadow-md">4.9/5 global rating</span>
              </div>
            </div>
          </div>

          {/* Right Content - Video Showcase */}
          <div className="relative">
            <div className="relative group">
              {/* Video Placeholder */}
              <div className="w-full aspect-video bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl shadow-2xl overflow-hidden group-hover:scale-105 transition-transform duration-500">
                <video 
                  className="w-full h-full object-cover rounded-2xl" 
                  controls
                  preload="none"
                  controlsList="nodownload"
                  disablePictureInPicture
                  poster="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAwIiBoZWlnaHQ9IjQ1MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjMWYyOTM3Ii8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtc2l6ZT0iMThweCIgZmlsbD0iI2ZmZiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkVkdWNhdGlvbmFsIFZpZGVvPC90ZXh0Pjwvc3ZnPg=="
                >
                  <source src="https://storage.googleapis.com/coursebox-video-file/prod-coursebox/courseVideoFileStorage/133197/eda47a8a-5dd4-49d4-971a-a52e046801a2.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-900/20 to-cyan-900/20 rounded-2xl pointer-events-none"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

Hero.displayName = 'Hero';

export default Hero;