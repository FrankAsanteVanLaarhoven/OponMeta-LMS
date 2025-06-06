import Navigation from "@/components/Navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Globe, Users, Award, Heart, Target, Eye } from "lucide-react";
import PageNavigation from "@/components/PageNavigation";

const About = () => {
  const values = [
    {
      icon: Globe,
      title: "Global Excellence",
      description: "We celebrate and promote diverse expertise while connecting learners with comprehensive global knowledge networks and multilingual platforms."
    },
    {
      icon: Users,
      title: "Inclusive Innovation",
      description: "Quality education with AI-powered learning, Web3 integration, and emerging technologies should be accessible to everyone, regardless of location or background."
    },
    {
      icon: Award,
      title: "Future-Ready Quality",
      description: "We maintain the highest standards in course content, industry partnerships, blockchain certifications, and cutting-edge learning outcomes."
    },
    {
      icon: Heart,
      title: "Community & Collaboration",
      description: "Every course contributes to building stronger global communities through mentorship programs, professional networks, and sustainable development initiatives."
    }
  ];

  const team = [
    {
      name: "Dr. Amina Hassan",
      role: "Founder & CEO",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
      bio: "Former World Bank education specialist with 15+ years in African development"
    },
    {
      name: "James Ochieng",
      role: "Head of Technology",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
      bio: "Tech entrepreneur who built educational platforms reaching 2M+ students"
    },
    {
      name: "Sarah Kimani",
      role: "Head of Content",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
      bio: "Former university dean specializing in curriculum development and quality assurance"
    },
    {
      name: "Mohamed Al-Rashid",
      role: "Head of Partnerships",
      image: "https://images.unsplash.com/photo-1483058712412-4245e9b90334",
      bio: "International education consultant with extensive network across MENA and Africa"
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-700 via-blue-800 to-indigo-900">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
            Empowering Global Learning Through
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              {" "}OPONMETA
            </span>
          </h1>
          <p className="text-xl text-blue-100 leading-relaxed">
            OPONMETA was born from a vision to unlock global intellectual potential through comprehensive, 
            innovative, and inclusive education. We believe that when minds worldwide are equipped with 
            cutting-edge technology, multilingual accessibility, and industry partnerships, 
            we can solve humanity's greatest challenges and compete in the global digital economy.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12">
          <Card className="bg-white/10 backdrop-blur-md border-white/20">
            <CardContent className="p-8">
              <div className="flex items-center space-x-3 mb-6">
                <Target className="h-8 w-8 text-blue-400" />
                <h2 className="text-2xl font-bold text-white">Our Mission</h2>
              </div>
              <p className="text-blue-100 text-lg leading-relaxed">
                To democratize access to high-quality global education through multilingual platforms, 
                AI-powered learning, Web3 integration, industry partnerships, and inclusive programs 
                that empower learners, educators, and organizations worldwide with future-ready skills.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-md border-white/20">
            <CardContent className="p-8">
              <div className="flex items-center space-x-3 mb-6">
                <Eye className="h-8 w-8 text-purple-400" />
                <h2 className="text-2xl font-bold text-white">Our Vision</h2>
              </div>
              <p className="text-blue-100 text-lg leading-relaxed">
                A future where every learner globally has access to comprehensive, technology-enhanced 
                education, where diverse expertise is recognized and celebrated, and where innovative 
                learning solutions serve as the foundation for sustainable development and global collaboration.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Our Values</h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="bg-white/10 backdrop-blur-md border-white/20 text-center group hover:bg-white/15 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="inline-flex p-3 rounded-full bg-white/10 mb-4 group-hover:scale-110 transition-transform duration-300">
                    <value.icon className="h-8 w-8 text-blue-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-3">{value.title}</h3>
                  <p className="text-blue-100 text-sm leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <Card className="bg-white/10 backdrop-blur-md border-white/20">
            <CardContent className="p-12">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-white mb-4">Our Impact</h2>
                <p className="text-xl text-blue-100">Making comprehensive education accessible globally through innovative technology</p>
              </div>
              <div className="grid md:grid-cols-4 gap-8 text-center">
                <div>
                  <div className="text-4xl font-bold text-white mb-2">50,000+</div>
                  <div className="text-blue-100">Lives Transformed</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-white mb-2">54</div>
                  <div className="text-blue-100">Countries Reached</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-white mb-2">1,200+</div>
                  <div className="text-blue-100">Expert Instructors</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-white mb-2">89%</div>
                  <div className="text-blue-100">Career Advancement</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Meet Our Team</h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Passionate educators and technologists dedicated to transforming global education through innovation
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="bg-white/10 backdrop-blur-md border-white/20 text-center group hover:bg-white/15 transition-all duration-300">
                <CardContent className="p-6">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <h3 className="text-lg font-semibold text-white mb-1">{member.name}</h3>
                  <p className="text-blue-400 font-medium mb-3">{member.role}</p>
                  <p className="text-blue-100 text-sm leading-relaxed">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Join Our Mission
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Whether you're a learner, educator, or partner, there's a place for you in our community
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-purple-900 hover:bg-gray-100">
              Start Learning
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              Become an Instructor
            </Button>
          </div>
        </div>
      </section>
      <PageNavigation />
    </div>
  );
};

export default About;