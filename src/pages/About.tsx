import React from 'react';
import { Target, Eye, Globe, Users, Award, Heart } from 'lucide-react';

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
    title: 'Every course contributes to building stronger global communities through mentorship programs, professional networks, and sustainable development initiatives.'
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

const About = () => (
  <div className="min-h-screen bg-white text-[#0a1834] dark:bg-[#0a1834] dark:text-white">
    {/* Hero Section */}
    <section className="py-16 px-4 bg-[#f0f4fa] dark:bg-[#0a1834] text-center">
      <h1 className="text-5xl lg:text-6xl font-bold text-[#0a1834] dark:text-white mb-6">
        Empowering Global Learning<br />
        Through <span className="bg-gradient-to-r from-cyan-300 to-cyan-500 bg-clip-text text-transparent">our platform</span>
      </h1>
    </section>

    {/* About Us, Mission, Vision (added section) */}
    <section className="py-12 px-4 bg-white dark:bg-[#16203a] text-[#0a1834] dark:text-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">About Us</h2>
        <p className="text-lg text-gray-700 mb-8 leading-relaxed">
          Through <span className="bg-gradient-to-r from-cyan-300 to-cyan-500 bg-clip-text text-transparent">our platform</span>
        </p>
        <p className="text-lg text-gray-700 mb-8 leading-relaxed">
          We are a global EdTech powerhouse pioneering the future of digital learning. We craft transformative experiences in professional development and technical education, equipping today's learners and tomorrow's leaders with cutting-edge skills and knowledge. From interactive learning modules to scalable learning platforms, we empower institutions and individuals to unlock their full potential—redefining what learning can achieve across borders and industries.
        </p>
        <p className="text-lg text-gray-700 mb-8 leading-relaxed">
          Our mission is to democratize access to world-class education through innovative technology and personalized learning experiences. By fostering a culture of excellence and innovation, we support professionals in unlocking their full potential and shaping the future of global industries.
        </p>
        <h3 className="text-2xl font-semibold mt-8 mb-2">Vision</h3>
        <p className="text-lg text-[#16203a] dark:text-cyan-300">
          To be the foremost global hub for professional developments and technical education, empowering individuals, businesses, and communities through world-class learning, knowledge-sharing, and industry partnerships.
        </p>
      </div>
    </section>

    {/* Mission & Vision */}
    <section className="py-16 px-4 bg-[#f0f4fa] dark:bg-[#0a1834]">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
        <div className="bg-white dark:bg-[#16203a] rounded-xl shadow p-8 flex flex-col items-center border border-[#e5e7eb] dark:border-[#22305a]">
          <Target className="h-10 w-10 text-cyan-600 dark:text-cyan-300 mb-4" />
          <p className="text-lg text-center text-[#16203a] dark:text-white">
            To democratize access to high-quality global education through multilingual platforms, AI-powered learning, Web3 integration, industry partnerships, and inclusive programs that empower learners, educators, and organizations worldwide with future-ready skills.
          </p>
        </div>
        <div className="bg-white dark:bg-[#16203a] rounded-xl shadow p-8 flex flex-col items-center border border-[#e5e7eb] dark:border-[#22305a]">
          <Eye className="h-10 w-10 text-cyan-600 dark:text-cyan-300 mb-4" />
          <p className="text-lg text-center text-[#16203a] dark:text-white">
            A future where every learner globally has access to comprehensive, technology-enhanced education, where diverse expertise is recognized and celebrated, and where innovative learning solutions serve as the foundation for sustainable development and global collaboration.
          </p>
        </div>
      </div>
    </section>

    {/* Principles/Values */}
    <section className="py-16 px-4 bg-white dark:bg-[#16203a]">
      <h2 className="text-2xl font-semibold text-center mb-10 text-[#0a1834] dark:text-white">The principles that guide everything we do</h2>
      <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8">
        {values.map((value, idx) => (
          <div key={idx} className="bg-[#f0f4fa] dark:bg-[#11204a] rounded-xl shadow p-6 flex flex-col items-center text-center border border-[#e5e7eb] dark:border-[#22305a]">
            <value.icon className="h-8 w-8 text-cyan-600 dark:text-cyan-300 mb-4" />
            <p className="text-base text-[#16203a] dark:text-white">{value.title}</p>
          </div>
        ))}
      </div>
    </section>

    {/* Impact Stats */}
    <section className="py-16 px-4 bg-[#f0f4fa] dark:bg-[#0a1834]">
      <h2 className="text-2xl font-semibold text-center mb-10 text-[#0a1834] dark:text-white">Making comprehensive education accessible globally through innovative technology</h2>
      <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        <div>
          <div className="text-4xl font-bold text-cyan-600 dark:text-cyan-300 mb-2">50,000+</div>
          <div className="text-[#16203a] dark:text-white text-sm">Lives Transformed</div>
        </div>
        <div>
          <div className="text-4xl font-bold text-cyan-600 dark:text-cyan-300 mb-2">54</div>
          <div className="text-[#16203a] dark:text-white text-sm">Countries Reached</div>
        </div>
        <div>
          <div className="text-4xl font-bold text-cyan-600 dark:text-cyan-300 mb-2">1,200+</div>
          <div className="text-[#16203a] dark:text-white text-sm">Expert Instructors</div>
        </div>
        <div>
          <div className="text-4xl font-bold text-cyan-600 dark:text-cyan-300 mb-2">89%</div>
          <div className="text-[#16203a] dark:text-white text-sm">Career Advancement</div>
        </div>
      </div>
    </section>

    {/* Team Section */}
    <section className="py-16 px-4 bg-white dark:bg-[#16203a]">
      <h2 className="text-2xl font-semibold text-center mb-10 text-[#0a1834] dark:text-white">Passionate educators and technologists dedicated to transforming global education through innovation</h2>
      <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8">
        {team.map((member, idx) => (
          <div key={idx} className="bg-[#f0f4fa] dark:bg-[#11204a] rounded-xl shadow p-6 flex flex-col items-center text-center border border-[#e5e7eb] dark:border-[#22305a]">
            <img src={member.image} alt={member.name} className="w-24 h-24 rounded-full object-cover mb-4" />
            <div className="font-semibold text-cyan-600 dark:text-cyan-300 mb-1">{member.name}</div>
            <div className="text-[#16203a] dark:text-white text-sm">{member.bio}</div>
          </div>
        ))}
      </div>
    </section>

    {/* Final CTA */}
    <section className="py-16 px-4 text-center bg-[#f0f4fa] dark:bg-[#0a1834]">
      <h2 className="text-2xl font-semibold mb-6 text-[#0a1834] dark:text-white">Whether you're a learner, educator, or partner, there's a place for you in our community</h2>
      <a href="/start-learning" className="text-xl text-cyan-600 dark:text-cyan-300 font-bold underline">Start Learning</a>
    </section>
  </div>
);

export default About;