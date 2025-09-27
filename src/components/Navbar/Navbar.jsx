import React, { useState } from "react";
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "../../lib/utils";

const membershipFormLink = "https://docs.google.com/forms/d/e/1FAIpQLSeFZHIXnUFz46NuwibriOUkL7rEjk-PQetA8X0z2o9TCQK4pA/viewform";

// Navigation items
const navItems = [
  { name: "Home", link: "/" },
  { name: "About", link: "/about" },
  { name: "Events", link: "/events" },
  { name: "Achievements", link: "/achievements" },
  { name: "Playground", link: "/playground" },
  { name: "Contact", link: "/contact" },
];

const socialLinks = [
  { name: "Instagram", link: "#" },
  { name: "X", link: "#" },
  { name: "LinkedIn", link: "#" },
  { name: "Github", link: "#" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.style.overflow = isMenuOpen ? 'auto' : 'hidden';
  };

  // Desktop navigation remains unchanged
  return (
    <>
      {/* Desktop Navigation */}
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className={cn(
          "hidden md:flex max-w-fit fixed top-3 inset-x-0 mx-auto border border-transparent dark:border-white/[0.2] rounded-full dark:bg-black bg-white/70 backdrop-blur-md shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] pr-2 pl-8 py-2 items-center justify-center space-x-4"
        )}
      >
        {navItems.map((navItem, idx) => (
          <Link
            key={`link-desktop-${idx}`}
            to={navItem.link}
            className={cn(
              "relative items-center flex space-x-1 text-neutral-600 hover:text-neutral-500 dark:text-neutral-50 dark:hover:text-neutral-300 group",
              location.pathname === navItem.link && "text-blue-600 dark:text-blue-400"
            )}
          >
            <span className="text-sm">{navItem.name}</span>
            <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-gradient-to-r from-transparent via-blue-500 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
          </Link>
        ))}
        <a
          href={membershipFormLink}
          target="_blank"
          rel="noopener noreferrer"
          className="border text-sm font-medium relative border-neutral-200 dark:border-white/[0.2] text-black dark:text-white px-4 py-2 rounded-full hover:bg-white/10 transition-colors"
        >
          <span>Membership</span>
          <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent h-px" />
        </a>
      </motion.div>

      {/* Mobile Navigation Button */}
      <div className="md:hidden fixed top-0 right-0 z-[5000] p-4">
        <button 
          onClick={toggleMenu}
          className="p-2 rounded-full bg-black text-white hover:bg-gray-800 focus:outline-none"
          aria-label="Toggle menu"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {!isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            )}
          </svg>
        </button>
      </div>

      {/* Full-screen Slide-in Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="fixed inset-0 w-full bg-white z-[5000] flex flex-col h-full"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            <div className="flex justify-end p-4">
              <button
                onClick={toggleMenu}
                className="p-2 rounded-full bg-black text-white"
                aria-label="Close menu"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <div className="flex-1 flex flex-col justify-center items-center pt-10 px-6">
              {/* Main navigation links */}
              {navItems.map((navItem, idx) => (
                <motion.div
                  key={`link-mobile-${idx}`}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="mb-5"
                >
                  <Link
                    to={navItem.link}
                    className={cn(
                      "block py-2 text-3xl font-normal transition-colors",
                      location.pathname === navItem.link 
                        ? "text-gray-900" 
                        : "text-gray-500 hover:text-gray-700"
                    )}
                    onClick={toggleMenu}
                  >
                    {navItem.name}
                  </Link>
                </motion.div>
              ))}
              
              {/* Book a Call button with circle arrow */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navItems.length * 0.1 }}
                className="mt-8"
              >
                <a 
                  href={membershipFormLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center py-1 text-2xl font-normal text-gray-500 hover:text-gray-700"
                  onClick={toggleMenu}
                >
                  Membership
                  <motion.div 
                    className="ml-2 h-8 w-8 rounded-full bg-gray-300 flex items-center justify-center"
                    whileHover={{ x: 5 }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 transform rotate-45" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clipRule="evenodd" />
                    </svg>
                  </motion.div>
                </a>
              </motion.div>
            </div>
            
            {/* Social Links */}
            <div className="px-6 py-4 flex justify-center">
              <div className="flex space-x-6 text-sm text-gray-500">
                {socialLinks.map((social, idx) => (
                  <motion.a
                    key={`social-${idx}`}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + idx * 0.05 }}
                    className="hover:text-gray-700"
                  >
                    {social.name}
                  </motion.a>
                ))}
              </div>
            </div>
            
            {/* Stats footer */}
            <div className="px-6 pb-8 text-xs text-gray-400 flex justify-between">
              <div className="flex items-center space-x-2">
                <span className="h-5 w-5 rounded-full border border-gray-400 flex items-center justify-center">
                  ◎
                </span>
                <span>AWS Community</span>
              </div>
              <span>© {new Date().getFullYear()}</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;