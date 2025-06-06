import React, { useEffect } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { Card, CardContent } from '@/components/ui/card';
import { Building2 } from 'lucide-react';

const TrustedByCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true,
    dragFree: true,
    containScroll: 'trimSnaps',
    slidesToScroll: 1,
    align: 'start'
  });

  // Auto-scroll functionality
  useEffect(() => {
    if (!emblaApi) return;

    const autoScroll = setInterval(() => {
      emblaApi.scrollNext();
    }, 2000); // Scroll every 2 seconds

    return () => clearInterval(autoScroll);
  }, [emblaApi]);

  const companies = [
    { name: "Dangote Group", logo: "DG" },
    { name: "Glo Mobile", logo: "GLO" },
    { name: "MTN", logo: "MTN" },
    { name: "Vodafone", logo: "VF" },
    { name: "Digital Ventures", logo: "DV" },
    { name: "Smart Industries", logo: "SI" },
    { name: "Advanced Tech", logo: "AT" },
    { name: "Prime Solutions", logo: "PS" },
    { name: "Elite Networks", logo: "EN" },
    { name: "Next Gen Corp", logo: "NG" }
  ];

  return (
    <section className="py-16 px-4 bg-gradient-to-br from-blue-700 via-blue-800 to-indigo-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Trusted by Leading Companies</h2>
          <p className="text-xl text-blue-100">
            Join thousands of organizations advancing their teams with our platform
          </p>
        </div>
        
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-6">
            {/* Duplicate the companies array for seamless loop */}
            {[...companies, ...companies].map((company, index) => (
              <div key={index} className="flex-none w-64">
                <Card 
                  className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105 relative"
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
                  <CardContent className="p-6 relative z-10">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center shadow-lg">
                        <span className="text-white font-bold text-lg">{company.logo}</span>
                      </div>
                      <div>
                        <h3 className="text-white font-semibold text-lg drop-shadow-sm">{company.name}</h3>
                        <div className="flex items-center space-x-1 mt-1">
                          <Building2 className="h-4 w-4 text-blue-300" />
                          <span className="text-blue-100 text-sm font-medium">Enterprise Client</span>
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 pt-4 border-t border-white/20">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-blue-100 font-medium">Active Users</span>
                        <span className="text-white font-semibold drop-shadow-sm">{Math.floor(Math.random() * 5000) + 1000}+</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedByCarousel;