import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const socialLinks = [
  { name: 'Meetup', url: 'https://www.meetup.com/aws-sbg-mjcet/', icon: 'M' },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/company/aws-cloud-club-mjcet/', icon: 'in' },
  { name: 'Instagram', url: 'https://www.instagram.com/awsclub.mjcet/', icon: 'I' },
];

const Footer = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [hoveredMember, setHoveredMember] = useState(null);

  const footerLinks = [
    { title: 'About', items: ['Our Mission', 'Team', 'Partners', 'Careers'] },
    { title: 'Resources', items: ['Documentation', 'Blog', 'Tutorials', 'Events'] },
    { title: 'Community', items: ['Discord', 'Forums', 'Meetups', 'Workshops'] },
  ];

  const governingBody = [
    { id: 1, name: 'Vahaj ur Rahman', designation: 'Captain', image: '/images/profiles/vahaj.png' },
    { id: 2, name: 'Zaid Ali Khan', designation: 'Vice Captain', image: '/images/profiles/zaid.jpg' },
    { id: 3, name: 'Nahid Sami', designation: 'Secretary', image: '/images/profiles/nahid.jpg' },
    { id: 4, name: 'Affah ullah shaik', designation: 'Treasurer', image: '/images/profiles/afham.jpg' },
    { id: 5, name: 'Sidra Aleem', designation: 'Chief Representative', image: '/images/profiles/sidra.jpg' },
    { id: 6, name: 'Saad Riyan', designation: 'Chief Coordinator', image: '/images/profiles/saad.png' },
    { id: 7, name: 'Musab Umayr', designation: 'Outreach Director', image: '/images/profiles/musab.jpg' },
    { id: 8, name: 'Shaik Abrar', designation: 'Technical Coordinator', image: '/images/profiles/abrar.jpg' },
  ];

  return (
    <footer className="relative mt-auto overflow-hidden" style={{ backgroundColor: '#08060d' }}>
      {/* Grid texture */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
          backgroundSize: '36px 36px',
        }}
      />

      {/* Top gradient border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-500/40 to-transparent" />

      <div className="relative container mx-auto px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-8 gap-10">
          {/* Logo and description */}
          <div className="md:col-span-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="relative inline-block"
            >
              <h2 className="text-2xl font-bold mb-4 text-white">AWS Community</h2>
              <div className="absolute -bottom-1 left-0 h-px w-full bg-gradient-to-r from-violet-500/60 via-fuchsia-500/40 to-transparent" />
            </motion.div>
            <p className="text-gray-400 mt-6 max-w-md leading-relaxed">
              Empowering developers to build, learn, and grow with AWS technologies through community events, workshops, and shared knowledge.
            </p>

            {/* Social links */}
            <div className="flex space-x-3 mt-6">
              {socialLinks.map((social, idx) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative h-10 w-10 flex items-center justify-center rounded-full bg-white/[0.05] border border-white/10 hover:border-violet-400/40 hover:bg-violet-500/10 transition-all duration-300"
                  onMouseEnter={() => setHoveredIndex(idx)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  whileHover={{ scale: 1.1 }}
                >
                  <span className="text-gray-300 text-xs font-medium">{social.icon}</span>
                  {hoveredIndex === idx && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      className="absolute -top-10 whitespace-nowrap text-xs bg-[#111] border border-white/10 px-3 py-1.5 rounded-lg text-gray-300 shadow-xl"
                    >
                      {social.name}
                      <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 h-px w-[80%] bg-gradient-to-r from-transparent via-violet-500/50 to-transparent" />
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
                  <h3 className="text-sm font-semibold mb-4 relative inline-block tracking-wider uppercase text-gray-200">
                    {section.title}
                    <div className="absolute -bottom-1 left-0 h-px w-full bg-gradient-to-r from-violet-500/50 to-transparent" />
                  </h3>
                  <ul className="space-y-2.5">
                    {section.items.map((item) => (
                      <li key={item}>
                        <Link to="https://www.meetup.com/aws-sbg-mjcet/" className="text-gray-500 hover:text-violet-400 text-sm transition-colors duration-300">
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

        {/* Governing Body Section */}
        <div className="mt-14 pt-8 border-t border-white/[0.06] flex flex-col items-center">
          <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-gray-500 mb-5">Governing Body</span>
          <div className="flex flex-wrap justify-center gap-2">
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
                      initial={{ opacity: 0, y: 12, scale: 0.8 }}
                      animate={{
                        opacity: 1,
                        y: 0,
                        scale: 1,
                        transition: { type: 'spring', stiffness: 300, damping: 20 },
                      }}
                      exit={{ opacity: 0, y: 12, scale: 0.8 }}
                      className="absolute -top-18 left-1/2 z-50 flex -translate-x-1/2 flex-col items-center justify-center rounded-xl bg-[#111] border border-white/10 px-4 py-2.5 text-xs shadow-2xl"
                    >
                      <div className="absolute inset-x-8 -bottom-px z-30 h-px w-[30%] bg-gradient-to-r from-transparent via-violet-500/50 to-transparent" />
                      <div className="relative z-30 text-sm font-bold text-white">{member.name}</div>
                      <div className="text-[11px] text-violet-400">{member.designation}</div>
                    </motion.div>
                  )}
                </AnimatePresence>
                <motion.img
                  whileHover={{ scale: 1.15, zIndex: 30 }}
                  height={40}
                  width={40}
                  src={member.image}
                  alt={member.name}
                  className="relative h-10 w-10 md:h-11 md:w-11 rounded-full border-2 border-white/10 group-hover:border-violet-400/50 object-cover object-top transition-all duration-300 group-hover:z-30"
                />
              </Link>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-white/[0.06] flex flex-col items-center">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} AWS Student Builder Group Mjcet. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
