import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';

const teamMembers = [
  {
    name: 'Jane Doe',
    role: 'CEO & Founder',
    img: '/team1.jpg',
  },
  {
    name: 'Sarah Johnson',
    role: 'Lead Designer',
    img: '/team2.jpg',
  },
  {
    name: 'Michael Lee',
    role: 'Head of Engineering',
    img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d',
  },
  {
    name: 'Aisha Bello',
    role: 'AI Specialist',
    img: 'https://images.unsplash.com/photo-1511367461989-f85a21fda167',
  },
];

const carouselVariants = {
  animate: {
    x: [0, -100 * teamMembers.length],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: 'loop',
        duration: 16,
        ease: 'linear',
      },
    },
  },
};

const TeamCarousel = () => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start('animate');
  }, [controls]);

  return (
    <div className="overflow-x-hidden w-full">
      <motion.div
        className="flex gap-8"
        variants={carouselVariants}
        animate={controls}
        initial={{ x: 0 }}
        style={{ width: `${teamMembers.length * 320}px` }}
      >
        {teamMembers.map((member, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center bg-white rounded-lg shadow-lg p-6 min-w-[280px] max-w-xs mx-auto"
          >
            <img
              src={member.img}
              alt={member.name}
              className="w-40 h-40 object-cover rounded-full mb-4 border-4 border-blue-100"
            />
            <span className="font-semibold text-lg text-slate-900">{member.name}</span>
            <span className="text-blue-600 text-sm">{member.role}</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default TeamCarousel; 