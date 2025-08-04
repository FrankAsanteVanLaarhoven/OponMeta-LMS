import React from 'react';
import { Target, Eye, Globe, Users, Award, Heart, Handshake, Building, Lightbulb, Calendar, TrendingUp } from 'lucide-react';

const values = [
  {
    icon: Globe,
    title: 'We celebrate and promote diverse expertise while connecting learners with comprehensive global knowledge networks and multilingual platforms.'
  },
  {
    icon: Users,
    title: 'Quality education with AI-powered learning, Web3 integration, and emerging technologies should be accessible to everyone, regardless of location or background.'
  },
  {
    icon: Award,
    title: 'We maintain the highest standards in course content, industry partnerships, blockchain certifications, and cutting-edge learning outcomes.'
  },
  {
    icon: Heart,
    title: 'Every course contributes to building stronger global communities through mentorship programmes, professional networks, and sustainable development initiatives.'
  }
];

const team = [
  {
    name: 'Founder & CEO',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158',
    bio: 'Former World Bank education specialist with 15+ years in African development'
  },
  {
    name: 'Head of Technology',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c',
    bio: 'Tech entrepreneur who built educational platforms reaching 2M+ students'
  },
  {
    name: 'Head of Content',
    image: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7',
    bio: 'Former university dean specializing in curriculum development and quality assurance'
  },
  {
    name: 'Head of Partnerships',
    image: 'https://images.unsplash.com/photo-1483058712412-4245e9b90334',
    bio: 'International education consultant with extensive network across MENA and Africa'
  }
];

const partners = [
  {
    icon: Building,
    title: 'Industry Collaborations',
    description: 'Partner with us to shape the future of work and learning through joint programs and research.'
  },
  {
    icon: Users,
    title: 'Internship Pipelines',
    description: 'Connect with top talent through our internship and job placement programs.'
  },
  {
    icon: Lightbulb,
    title: 'Innovation Labs',
    description: 'Collaborate on cutting-edge projects in our innovation labs and advisory boards.'
  }
];

const stats = [
  { number: '50,000+', label: 'Lives Transformed' },
  { number: '54', label: 'Countries Reached' },
  { number: '1,200+', label: 'Expert Instructors' },
  { number: '89%', label: 'Career Advancement' }
];

const About = () => (
  <div className="min-h-screen bg-white text-[#0a1834] dark:bg-[#0a1834] dark:text-white">
    {/* Hero Section */}
    <section className="py-16 px-4 bg-[#f0f4fa] dark:bg-[#0a1834] text-center">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-center mb-6">
          <div className="relative">
            <img src="/branding/logo.png" alt="OponMeta Logo" className="h-24 w-24" />
          </div>
        </div>
        <div className="space-y-4">
          <img src="/branding/new-logo.png" alt="OponMeta" className="h-8 w-auto mx-auto" />
          <p className="text-xl text-[#0a1834] dark:text-white">
            Empowering Global Learning
          </p>
        </div>
      </div>
    </section>

    {/* About Us Section */}
    <section id="about" className="py-16 px-4 bg-white dark:bg-[#0a1834]">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8 text-[#0a1834] dark:text-white">About Us</h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
          We are a global EdTech powerhouse pioneering the future of digital learning. We craft transformative experiences in professional development and technical education, equipping today's learners and tomorrow's leaders with cutting-edge skills and knowledge. From interactive learning modules to scalable learning platforms, we empower institutions and individuals to unlock their full potential—redefining what learning can achieve across borders and industries.
        </p>
        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
          Our mission is to democratise access to world-class education through innovative technology and personalised learning experiences. By fostering a culture of excellence and innovation, we support professionals in unlocking their full potential and shaping the future of global industries.
        </p>
      </div>
    </section>

    {/* Our Approach Section */}
    <section id="approach" className="py-16 px-4 bg-[#f0f4fa] dark:bg-[#16203a]">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8 text-[#0a1834] dark:text-yellow-400">Our Approach</h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
          OponMeta blends digital learning platforms, practical workshops, mentorship programmes, and industry collaborations to create an all-encompassing professional development ecosystem.
        </p>
        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
          Designed for accessibility, adaptability, and impact, OponMeta ensures professionals remain competitive, forward-thinking, and equipped to lead in a rapidly evolving world.
        </p>
      </div>
    </section>

    {/* Mission & Vision */}
    <section className="py-16 px-4 bg-white dark:bg-[#0a1834]">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
        <div id="mission" className="bg-white dark:bg-[#16203a] rounded-xl shadow p-8 flex flex-col items-center border border-[#e5e7eb] dark:border-[#22305a]">
          <Target className="h-10 w-10 text-cyan-600 dark:text-cyan-300 mb-4" />
          <h3 className="text-xl font-bold mb-4 text-[#0a1834] dark:text-white">Mission</h3>
          <p className="text-lg text-center text-[#16203a] dark:text-white">
            To democratise access to high-quality global education through multilingual platforms, AI-powered learning, Web3 integration, industry partnerships, and inclusive programmes that empower learners, educators, and organisations worldwide with future-ready skills.
          </p>
        </div>
        <div id="vision" className="bg-white dark:bg-[#16203a] rounded-xl shadow p-8 flex flex-col items-center border border-[#e5e7eb] dark:border-[#22305a]">
          <Eye className="h-10 w-10 text-cyan-600 dark:text-cyan-300 mb-4" />
          <h3 className="text-xl font-bold mb-4 text-[#0a1834] dark:text-white">Vision</h3>
          <p className="text-lg text-center text-[#16203a] dark:text-white">
            A future where every learner globally has access to comprehensive, technology-enhanced education, where diverse expertise is recognized and celebrated, and where innovative learning solutions serve as the foundation for sustainable development and global collaboration.
          </p>
        </div>
      </div>
    </section>

    {/* Stats Section */}
    <section className="py-16 px-4 bg-[#f0f4fa] dark:bg-[#16203a]">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-12 text-[#0a1834] dark:text-white">
          Making comprehensive education accessible globally through innovative technology
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl font-bold text-[#0a1834] dark:text-white mb-2">{stat.number}</div>
              <div className="text-gray-600 dark:text-gray-300">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Values Section */}
    <section className="py-16 px-4 bg-white dark:bg-[#0a1834]">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
          {values.map((value, idx) => (
            <div key={idx} className="bg-white dark:bg-[#16203a] rounded-xl shadow p-6 flex flex-col items-center text-center border border-[#e5e7eb] dark:border-[#22305a]">
              <value.icon className="h-8 w-8 text-[#0a1834] dark:text-white mb-4" />
              <p className="text-[#0a1834] dark:text-white">{value.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Team Section */}
    <section id="team" className="py-16 px-4 bg-[#f0f4fa] dark:bg-[#16203a]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-[#0a1834] dark:text-white">Our Team</h2>
        <div className="grid md:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <div key={index} className="bg-white dark:bg-[#0a1834] rounded-xl shadow p-6 flex flex-col items-center text-center border border-[#e5e7eb] dark:border-[#22305a]">
              <img 
                src={member.image} 
                alt={member.name}
                className="w-20 h-20 rounded-full object-cover mb-4"
              />
              <h3 className="text-lg font-bold mb-2 text-[#0a1834] dark:text-white">{member.name}</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default About;