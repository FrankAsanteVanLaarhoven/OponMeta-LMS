import React, { useEffect } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';

const SuccessStoriesCarousel = () => {
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
    }, 4000); // Scroll every 4 seconds

    return () => clearInterval(autoScroll);
  }, [emblaApi]);

  const successStories = [
    {
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab",
      alt: "Corporate building",
      title: "Acer created a solid system to train and certify its employees",
      description: "Global technology company streamlined employee training with our comprehensive platform."
    },
    {
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2",
      alt: "Healthcare professionals",
      title: "CDPH successfully trains its volunteers & residents using Global Learning",
      description: "Healthcare organization improved training efficiency for thousands of volunteers."
    },
    {
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c",
      alt: "Modern office building",
      title: "Thermo Fisher Scientific trains hundreds of global employees",
      description: "Scientific equipment leader enhanced global workforce development through our platform."
    },
    {
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43",
      alt: "Training session",
      title: "Microsoft enhanced global workforce skills with our platform",
      description: "Tech giant improved employee productivity through structured learning programs."
    },
    {
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978",
      alt: "Team collaboration",
      title: "Salesforce accelerated team development across 50+ countries",
      description: "CRM leader boosted employee engagement with personalized learning paths."
    },
    {
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
      alt: "Business meeting",
      title: "IBM transformed their L&D strategy with AI-powered learning",
      description: "Technology pioneer revolutionized corporate training with smart analytics."
    }
  ];

  return (
    <section className="py-20 px-4 bg-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Real Life Success Stories</h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Learn how leading brands leverage Global Learning for online training & learning
          </p>
        </div>
        
        <div className="overflow-hidden mb-12" ref={emblaRef}>
          <div className="flex gap-8">
            {/* Duplicate the stories array for seamless loop */}
            {[...successStories, ...successStories].map((story, index) => (
              <div key={index} className="flex-none w-80">
                <Card className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105">
                  <CardContent className="p-6">
                    <img 
                      src={story.image}
                      alt={story.alt}
                      className="w-full h-48 object-cover rounded-lg mb-4"
                    />
                    <h3 className="text-xl font-semibold text-white mb-3">
                      {story.title}
                    </h3>
                    <p className="text-blue-100">
                      {story.description}
                    </p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
        
        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-blue-600 text-white hover:bg-blue-700">
              Create a Course
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              View All Case Studies
              <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessStoriesCarousel;