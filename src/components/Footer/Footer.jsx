import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const socialLinks = [
  { name: 'Twitter', url: 'https://twitter.com/awscommunity', icon: '𝕏' },
  { name: 'LinkedIn', url: 'https://linkedin.com/company/aws', icon: 'in' },
  { name: 'GitHub', url: 'https://github.com/aws', icon: '⎇' },
  { name: 'YouTube', url: 'https://youtube.com/aws', icon: '▶' },
];

const Footer = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [hoveredMember, setHoveredMember] = useState(null);
  
  const footerLinks = [
    { title: 'About', items: ['Our Mission', 'Team', 'Partners', 'Careers'] },
    { title: 'Resources', items: ['Documentation', 'Blog', 'Tutorials', 'Events'] },
    { title: 'Community', items: ['Discord', 'Forums', 'Meetups', 'Workshops'] },
  ];

  // Team members data
  const governingBody = [
    { id: 1, name: 'John Smith', designation: 'President', image: 'https://randomuser.me/api/portraits/men/1.jpg', profile: '/team/john-smith' },
    { id: 2, name: 'Sarah Johnson', designation: 'Vice President', image: 'https://randomuser.me/api/portraits/women/1.jpg', profile: '/team/sarah-johnson' },
    { id: 3, name: 'Michael Wong', designation: 'Secretary', image: 'https://randomuser.me/api/portraits/men/2.jpg', profile: '/team/michael-wong' },
    { id: 4, name: 'Emily Chen', designation: 'Treasurer', image: 'https://randomuser.me/api/portraits/women/2.jpg', profile: '/team/emily-chen' },
    { id: 5, name: 'David Kumar', designation: 'Event Director', image: 'https://randomuser.me/api/portraits/men/3.jpg', profile: '/team/david-kumar' },
    { id: 6, name: 'Lisa Patel', designation: 'Community Lead', image: 'https://randomuser.me/api/portraits/women/3.jpg', profile: '/team/lisa-patel' },
  ];

  return (
    <footer className="bg-black/90 backdrop-blur-sm text-white py-12 mt-auto">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-8 gap-8">
          {/* Logo and description */}
          <div className="md:col-span-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <h2 className="text-2xl font-bold mb-4">AWS Community</h2>
              <div className="absolute -bottom-1 left-0 h-px w-[60%] bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
            </motion.div>
            <p className="text-gray-300 mt-6 max-w-md">
              Empowering developers to build, learn, and grow with AWS technologies through community events, workshops, and shared knowledge.
            </p>
            
            {/* Social links */}
            <div className="flex space-x-4 mt-6">
              {socialLinks.map((social, idx) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative h-10 w-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
                  onMouseEnter={() => setHoveredIndex(idx)}
                  onMouseLeave={() => setHoveredIndex(null)}

                  whileHover={{ scale: 1.1 }}
                >
                  {social.icon}
                  {hoveredIndex === idx && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute -top-10 whitespace-nowrap text-xs bg-black px-3 py-1 rounded-md"
                    >
                      {social.name}
                      <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 h-px w-[80%] bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
                    </motion.div>
                  )}
                </motion.a>
              ))}
            </div>
          </div>
          
          {/* Footer links */}
          <div className="md:col-span-4">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {footerLinks.map((section) => (
                <div key={section.title}>
                  <h3 className="text-lg font-semibold mb-3 relative inline-block">
                    {section.title}
                    <div className="absolute -bottom-1 left-0 h-px w-full bg-gradient-to-r from-blue-500 to-transparent" />
                  </h3>
                  <ul className="space-y-2">
                    {section.items.map((item) => (
                      <li key={item}>
                        <Link to="#" className="text-gray-400 hover:text-white transition-colors">
                          {item}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
           {/* Governing Body Section - Moved below the footer content */}
        <div className="mt-12 pt-6 flex flex-col items-center">
          <div className="flex flex-wrap justify-center gap-2 mt-4">
            {governingBody.map((member) => (
              <Link
                to={member.profile}
                key={member.id}
                className="group relative"
                onMouseEnter={() => setHoveredMember(member.id)}
                onMouseLeave={() => setHoveredMember(null)}
              >
                <AnimatePresence>
                  {hoveredMember === member.id && (
                    <motion.div
                      initial={{ opacity: 0, y: 20, scale: 0.6 }}
                      animate={{
                        opacity: 1,
                        y: 0,
                        scale: 1,
                        transition: {
                          type: "spring",
                          stiffness: 260,
                          damping: 10,
                        },
                      }}
                      exit={{ opacity: 0, y: 20, scale: 0.6 }}
                      className="absolute -top-16 left-1/2 z-50 flex -translate-x-1/2 flex-col items-center justify-center rounded-md bg-black px-4 py-2 text-xs shadow-xl"
                    >
                      <div className="absolute inset-x-10 -bottom-px z-30 h-px w-[20%] bg-gradient-to-r from-transparent via-emerald-500 to-transparent" />
                      <div className="absolute -bottom-px left-10 z-30 h-px w-[40%] bg-gradient-to-r from-transparent via-sky-500 to-transparent" />
                      <div className="relative z-30 text-base font-bold text-white">
                        {member.name}
                      </div>
                      <div className="text-xs text-white">{member.designation}</div>
                    </motion.div>
                  )}
                </AnimatePresence>
                <motion.img
                  whileHover={{ scale: 1.1, zIndex: 30 }}
                  height={40}
                  width={40}
                  src={member.image}
                  alt={member.name}
                  className="relative h-10 w-10 md:h-12 md:w-12 rounded-full border-2 border-white object-cover object-top transition duration-300 group-hover:z-30"
                />
              </Link>
            ))}
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} AWS Community. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-gray-400 hover:text-white text-sm transition-colors">
              Terms of Service
            </Link>
            <Link to="/contact" className="text-gray-400 hover:text-white text-sm transition-colors">
              Contact
            </Link>
          </div>
        </div>
        
     
      </div>
    </footer>
  );
};



export default Footer;
