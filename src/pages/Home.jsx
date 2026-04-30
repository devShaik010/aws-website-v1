import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { href } from 'react-router-dom';
import { Link } from 'react-router-dom';
import LightRays from '../components/LightRays/LightRays';

gsap.registerPlugin(ScrollTrigger);

function Home() {
  const heroRef = useRef(null);
  const contentRef = useRef(null);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  // Testimonials data
  const testimonials = [
    {
      quote: "Joining MJCET AWS Cloud Club was the best decision of my academic journey. The workshops on EC2 and S3 were incredibly hands-on. I learned more in 3 months than entire semester!",
      name: "Mohammed Zubair",
      role: "3rd Year CSE Student",
      company: "MJCET"
    },
    {
      quote: "The AWS certification bootcamp helped me clear my Cloud Practitioner exam. The study materials and mock tests were excellent. Now I'm preparing for Solutions Architect!",
      name: "Fatima Shaikh",
      role: "Final Year IT Student",
      company: "MJCET"
    },
    {
      quote: "I attended the serverless workshop last month and built my first Lambda function! The mentors explained everything so clearly. Can't wait for the next event.",
      name: "Abdul Rahman",
      role: "2nd Year ECE Student",
      company: "MJCET"
    },
    {
      quote: "The hackathon organized by the club was amazing! We built a complete web application using AWS services. Won 2nd prize and learned so much about cloud architecture.",
      name: "Ayesha Khan",
      role: "3rd Year CSE Student",
      company: "MJCET"
    },
    {
      quote: "From knowing nothing about cloud to getting an internship at a tech startup - all thanks to the practical training and project guidance from our club seniors.",
      name: "Syed Imran",
      role: "Final Year IT Student",
      company: "MJCET"
    },
    {
      quote: "The weekly study sessions helped me understand Docker and Kubernetes better. The peer learning environment is fantastic and everyone is so supportive!",
      name: "Arjun Reddy",
      role: "3rd Year CSE Student",
      company: "MJCET"
    },
    {
      quote: "Attended the industry expert session on DevOps. Got to learn about real-world AWS implementations and best practices. Such valuable insights for students like us!",
      name: "Zainab Hussain",
      role: "2nd Year IT Student",
      company: "MJCET"
    }
  ];

  useEffect(() => {
    // Auto-rotate testimonials
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  useEffect(() => {
    // GSAP Animations
    const ctx = gsap.context(() => {
      // Content entrance animation
      gsap.from(contentRef.current.children, {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: "power3.out",
        delay: 0.3
      });
    }, heroRef);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <>
      {/* Hero Section - Full Width */}
      <div ref={heroRef} className="relative h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white overflow-hidden flex items-center justify-center">
        {/* Inter Font Import */}
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
        
        {/* Light Rays Background */}
        <div className="absolute inset-0 z-0">
          <LightRays
            raysOrigin="top-center"
            raysColor="#60a5fa"
            raysSpeed={1.5}
            lightSpread={0.6}
            rayLength={2.5}
            fadeDistance={1.8}
            saturation={1.2}
            followMouse={true}
            mouseInfluence={0.1}
            noiseAmount={0.1}
            distortion={0.05}
          />
        </div>

        {/* Subtle Background Pattern - Reduced opacity since we have video */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-32 h-32 bg-white/5 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-white/5 rounded-full blur-lg animate-pulse delay-75"></div>
          <div className="absolute bottom-40 left-20 w-28 h-28 bg-white/5 rounded-full blur-lg animate-pulse delay-150"></div>
          <div className="absolute bottom-20 right-10 w-36 h-36 bg-white/5 rounded-full blur-xl animate-pulse delay-300"></div>
        </div>

        {/* Subtle Gradient Overlay for text readability (kept light so rays show through) */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-gray-900 pointer-events-none" />

        {/* Hero Content */}
        <div 
          ref={contentRef}
          className="relative z-10 text-center max-w-5xl mx-auto px-6 mt-24 md:mt-32"
          style={{
            textShadow: '0 2px 4px rgba(0,0,0,0.8), 0 0 20px rgba(0,0,0,0.6)'
          }}
        >
          {/* New Badge */}
          <div className="mb-6">
            <span className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white/80 text-sm font-medium rounded-full" style={{ fontFamily: 'Inter, sans-serif' }}>
              <span className="mr-2 px-2 py-0.5 bg-white text-black text-sm rounded-full font-semibold">New</span>
              Telangana's first cloud club
            </span>
          </div>

          {/* Main Title */}
          <div className="mb-6">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-3 leading-tight" style={{ fontFamily: 'Inter, sans-serif' }}>
              <span className="text-white">Welcome to </span>
              <span className="text-white/90">MJCET's</span>
            </h1>
            <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="text-white">AWS</span>
              <span className="text-white/90"> Cloud Club</span>
            </div>
          </div>

          {/* Subtitle */}
          <div className="mb-8">
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/60 font-light leading-relaxed max-w-3xl mx-auto" style={{ fontFamily: 'Inter, sans-serif' }}>
              Be a part of the cloud revolution now
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a className="group relative px-8 py-4 bg-white text-black font-medium rounded-lg transition-all duration-300 hover:scale-105 hover:bg-white/90 text-base" style={{ fontFamily: 'Inter, sans-serif' }} href="https://docs.google.com/forms/d/e/1FAIpQLSeFZHIXnUFz46NuwibriOUkL7rEjk-PQetA8X0z2o9TCQK4pA/viewform" target="_blank" rel="noopener noreferrer">
              <span className="relative z-10 flex items-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                </svg>
                Join Now
              </span>
            </a>

            <a className="group relative px-8 py-4 bg-transparent border border-white/20 hover:border-white/30 text-white font-medium rounded-lg transition-all duration-300 hover:scale-105 hover:bg-white/5 text-base" style={{ fontFamily: 'Inter, sans-serif' }} href="https://www.meetup.com/aws-cloud-club-mjcet/" target='_blank' >
              <span className="relative z-10 flex items-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Explore Events
                <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">→</span>
              </span>
            </a>
          </div>

          {/* Instagram follow link — compact, below the two CTAs */}
          <div className="mt-7 flex justify-center">
            <a
              href="https://www.instagram.com/awsclub.mjcet/"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 text-base text-white/60 hover:text-white transition-colors duration-300"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              <svg className="w-5 h-5 text-white/70 group-hover:text-white transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 2.163c3.204 0 3.584.012 4.849.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.849.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
              <span>Follow us on Instagram</span>
              <span className="h-px bg-white/30 group-hover:bg-white w-0 group-hover:w-4 transition-all duration-300" />
            </a>
          </div>
        </div>
      </div>

      {/* About Us Section */}
      <div className="relative py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Side - Image Showcase */}
            <div className="relative">
              {/* Main image — natural aspect at every breakpoint (no cropping). */}
              <div className="relative group">
                <div className="relative overflow-hidden rounded-2xl">
                  <img
                    src="/images/team-1.jpg"
                    alt="MJCET AWS Cloud Club Team"
                    className="w-full h-auto group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/20"></div>
                </div>
              </div>

              {/*
                Overlapping collage at every breakpoint, aspect ratios and resolution preserved
                (no object-cover, no fixed heights). Only widths and offsets vary:
                • Mobile — smaller widths, offsets pushed further up / further down so the side
                  images mostly sit above / below the main image.
                • Desktop (lg+) — original widths, offsets out at -top-24 / -bottom-24 so faces
                  in the main image stay clear.
              */}
              {/* Small image - top right */}
              <div className="absolute -top-12 -right-2 w-28 sm:w-36 lg:-top-16 lg:-right-4 lg:w-40 group">
                <div className="relative overflow-hidden rounded-xl">
                  <img
                    src="/images/team-2.jpg"
                    alt="Cloud Computing Workshop"
                    className="w-full h-auto group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/20"></div>
                </div>
              </div>

              {/* Medium image - bottom left */}
              <div className="absolute -bottom-12 -left-2 w-28 sm:w-36 lg:-bottom-24 lg:-left-6 lg:w-40 group">
                <div className="relative overflow-hidden rounded-xl">
                  <img
                    src="/images/team-3.jpg"
                    alt="Team Collaboration"
                    className="w-full h-auto group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/20"></div>
                </div>
              </div>
            </div>

            {/* Right Side - Content */}
            <div className="relative ">
              <div className="mb-6">
                <span className="text-white/60 text-sm font-medium tracking-wider uppercase mb-4 block" style={{ fontFamily: 'Inter, sans-serif' }}>
                  About Us
                </span>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Building Tomorrow's
                  <span className="block text-white/90">Cloud Experts</span>
                </h2>
              </div>

              <div className="space-y-6 text-white/70 leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
                <p className="text-lg">
                  MJCET AWS Cloud Club is where students transform into industry-ready cloud professionals. We focus on practical learning through hands-on workshops, real-world projects, and comprehensive certification guidance.
                </p>
                
                <p>
                  Our community-driven approach ensures every member receives personalized mentorship and career guidance. From AWS fundamentals to advanced architecture patterns, we cover the complete spectrum of cloud computing education.
                </p>

               <hr />
               <br />
              </div>

              <Link 
                  to="/about" // 2. Use 'to' instead of 'href' for internal routing
                  className="border border-white/20 hover:border-white/40 text-white font-medium py-3 px-8 rounded-lg transition-all duration-300 hover:bg-white/5" 
                  style={{ fontFamily: 'Inter, sans-serif' }} 
                >
                  Learn More About Us
                </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Student Community Day Promo Banner */}
      <div className="relative py-20 bg-black overflow-hidden">
        {/* Ambient glows */}
        <div className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full bg-violet-600/10 blur-[120px] pointer-events-none" />
        <div className="absolute -bottom-32 -right-32 w-[500px] h-[500px] rounded-full bg-fuchsia-500/10 blur-[120px] pointer-events-none" />

        <div className="max-w-6xl mx-auto px-6 relative">
          <div className="relative rounded-[2rem] overflow-hidden border border-violet-500/20 bg-gradient-to-br from-white/[0.04] to-white/[0.01] backdrop-blur-xl p-10 md:p-16">
            {/* Grid texture overlay */}
            <div
              className="absolute inset-0 opacity-[0.03] pointer-events-none"
              style={{
                backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
                backgroundSize: '28px 28px',
              }}
            />

            <div className="relative flex flex-col md:flex-row items-center md:items-start gap-10 md:gap-16">
              {/* Left content */}
              <div className="flex-1 text-center md:text-left">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-violet-500/30 bg-violet-500/10 mb-5">
                  <span className="w-2 h-2 rounded-full bg-violet-400 animate-pulse" />
                  <span className="text-violet-400 text-xs font-semibold tracking-wider uppercase" style={{ fontFamily: 'Inter, sans-serif' }}>Flagship Event · May 2026</span>
                </div>

                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight" style={{ fontFamily: 'Inter, sans-serif' }}>
                  AWS Student <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-violet-500 to-fuchsia-500">Community Day</span>
                </h2>

                <p className="text-white/60 text-base md:text-lg leading-relaxed mb-8 max-w-xl" style={{ fontFamily: 'Inter, sans-serif' }}>
                  A premier one-day, student-driven conference featuring keynotes, workshops, panel discussions, and networking — all under one roof at MJCET. 800+ attendees. Industry experts. Swag. And memories for a lifetime.
                </p>

                {/* Pricing pills */}
                <div className="flex flex-wrap gap-3 justify-center md:justify-start mb-8">
                  <span className="inline-flex items-center gap-1.5 px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm text-white/80 font-medium" style={{ fontFamily: 'Inter, sans-serif' }}>
                    <svg className="w-4 h-4 text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
                    Solo · ₹300
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-4 py-2 bg-violet-500/10 border border-violet-500/20 rounded-full text-sm text-violet-300 font-medium" style={{ fontFamily: 'Inter, sans-serif' }}>
                    <svg className="w-4 h-4 text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                    Squad (4) · ₹1000
                  </span>
                </div>

                {/* CTA */}
                <Link
                  to="/student-community-days"
                  className="group inline-flex items-center gap-3 px-7 py-3.5 rounded-full font-semibold text-black transition-all duration-300 hover:scale-105 active:scale-95 shadow-[0_0_30px_rgba(139,92,246,0.4)] hover:shadow-[0_0_60px_rgba(139,92,246,0.7)]"
                  style={{ background: 'linear-gradient(135deg, #a78bfa, #8b5cf6, #d946ef)', fontFamily: 'Inter, sans-serif' }}
                >
                  Explore SCD 2026
                  <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>

              {/* Right — stat cards */}
              <div className="grid grid-cols-2 gap-4 shrink-0 w-full md:w-auto">
                {[
                  { value: '800+', label: 'Attendees' },
                  { value: '3+', label: 'Session Tracks' },
                  { value: '1 Day', label: 'Packed Full' },
                  { value: 'June 2026', label: 'Coming Soon' },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="flex flex-col items-center justify-center text-center p-5 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-md min-w-[120px]"
                  >
                    <span className="text-2xl font-black text-white mb-1" style={{ fontFamily: 'Inter, sans-serif' }}>{stat.value}</span>
                    <span className="text-xs text-white/50 font-medium tracking-wide uppercase" style={{ fontFamily: 'Inter, sans-serif' }}>{stat.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Our Speciality Section */}
      <div className="relative py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="text-white/60 text-sm font-medium tracking-wider uppercase mb-4 block" style={{ fontFamily: 'Inter, sans-serif' }}>
              Our Speciality
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight" style={{ fontFamily: 'Inter, sans-serif' }}>
              Complete Solutions
              <span className="block text-white/90">for your Cloud Journey</span>
            </h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
              MJCET AWS Cloud Club provides comprehensive cloud education and certification guidance to help you master the latest AWS technologies and advance your career.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Service 1 - AWS Training */}
            <div className="group relative">
              <div className="text-center">
                {/* Image */}
                <div className="relative mb-6">
                  <div className="w-20 h-20 mx-auto rounded-full overflow-hidden group-hover:scale-110 transition-transform duration-300">
                    <img 
                      src="/images/AWS-Training.jpg" 
                      alt="AWS Training"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 "></div>
                  </div>
                </div>
                
                {/* Content */}
                <h3 className="text-xl font-bold text-white mb-4" style={{ fontFamily: 'Inter, sans-serif' }}>
                  AWS Training
                </h3>
                <p className="text-white/60 text-sm leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Comprehensive hands-on training covering AWS fundamentals, advanced services, and best practices for real-world implementation.
                </p>
                
                {/* Number */}
                <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 text-6xl font-bold text-white/5" style={{ fontFamily: 'Inter, sans-serif' }}>
                  01
                </div>
              </div>
            </div>

            {/* Service 2 - Certification Prep */}
            <div className="group relative">
              <div className="text-center">
                {/* Image */}
                <div className="relative mb-6">
                  <div className="w-20 h-20 mx-auto rounded-full overflow-hidden group-hover:scale-110 transition-transform duration-300">
                    <img 
                      src="/images/Certification-Prep.webp" 
                      alt="Certification Prep"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 "></div>
                  </div>
                </div>
                
                {/* Content */}
                <h3 className="text-xl font-bold text-white mb-4" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Certification Prep
                </h3>
                <p className="text-white/60 text-sm leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Structured preparation for AWS certifications including Cloud Practitioner, Solutions Architect, and Developer Associate levels.
                </p>
                
                {/* Number */}
                <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 text-6xl font-bold text-white/5" style={{ fontFamily: 'Inter, sans-serif' }}>
                  02
                </div>
              </div>
            </div>

            {/* Service 3 - Project Guidance */}
            <div className="group relative">
              <div className="text-center">
                {/* Image */}
                <div className="relative mb-6">
                  <div className="w-20 h-20 mx-auto rounded-full overflow-hidden group-hover:scale-110 transition-transform duration-300">
                    <img 
                      src="/images/Project-Guidance.png" 
                      alt="Project Guidance"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 "></div>
                  </div>
                </div>
                
                {/* Content */}
                <h3 className="text-xl font-bold text-white mb-4" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Project Guidance
                </h3>
                <p className="text-white/60 text-sm leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Real-world project mentorship for building scalable cloud applications, microservices, and serverless architectures.
                </p>
                
                {/* Number */}
                <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 text-6xl font-bold text-white/5" style={{ fontFamily: 'Inter, sans-serif' }}>
                  03
                </div>
              </div>
            </div>

            {/* Service 4 - Career Support */}
            <div className="group relative">
              <div className="text-center">
                {/* Image */}
                <div className="relative mb-6">
                  <div className="w-20 h-20 mx-auto rounded-full overflow-hidden group-hover:scale-110 transition-transform duration-300">
                    <img 
                      src="/images/Career-Support.png" 
                      alt="Career Support"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 "></div>
                  </div>
                </div>
                
                {/* Content */}
                <h3 className="text-xl font-bold text-white mb-4" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Career Support
                </h3>
                <p className="text-white/60 text-sm leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Industry connections, interview preparation, resume building, and placement assistance for cloud engineering roles.
                </p>
                
                {/* Number */}
                <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 text-6xl font-bold text-white/5" style={{ fontFamily: 'Inter, sans-serif' }}>
                  04
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="relative py-20 bg-gray-900">
        <div className="max-w-6xl mx-auto px-6">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="text-white/60 text-sm font-medium tracking-wider uppercase mb-4 block" style={{ fontFamily: 'Inter, sans-serif' }}>
              What Our Members Say
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight" style={{ fontFamily: 'Inter, sans-serif' }}>
              Success Stories
              <span className="block text-white/90">from Our Community</span>
            </h2>
          </div>

          {/* Testimonials Carousel */}
          <div className="relative">
            {/* Main Testimonial Display */}
            <div className="text-center min-h-[300px] flex items-center justify-center">
              <div className="max-w-4xl mx-auto">
                {/* Quote */}
                <div className="mb-8">
                  <svg className="w-16 h-16 text-white/20 mx-auto mb-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                  </svg>
                  <p className="text-xl md:text-2xl text-white/90 leading-relaxed font-light italic" style={{ fontFamily: 'Inter, sans-serif' }}>
                    "{testimonials[currentTestimonial].quote}"
                  </p>
                </div>

                {/* Author Info */}
                <div className="border-t border-white/10 pt-6">
                  <h4 className="text-lg font-semibold text-white mb-1" style={{ fontFamily: 'Inter, sans-serif' }}>
                    {testimonials[currentTestimonial].name}
                  </h4>
                  <p className="text-white/60 text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
                    {testimonials[currentTestimonial].role}
                  </p>
                  <p className="text-white/40 text-xs mt-1" style={{ fontFamily: 'Inter, sans-serif' }}>
                    {testimonials[currentTestimonial].company}
                  </p>
                </div>
              </div>
            </div>

            {/* Navigation Dots */}
            <div className="flex justify-center space-x-3 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentTestimonial 
                      ? 'bg-white' 
                      : 'bg-white/30 hover:bg-white/50'
                  }`}
                />
              ))}
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={() => setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all duration-300 group"
            >
              <svg className="w-6 h-6 text-white group-hover:text-white/90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              onClick={() => setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all duration-300 group"
            >
              <svg className="w-6 h-6 text-white group-hover:text-white/90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Multiple Quotes Display - Secondary */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            {[0, 1, 2].map((offset) => {
              const index = (currentTestimonial + offset) % testimonials.length;
              return (
                <div 
                  key={index}
                  className={`p-6 bg-black/30 border border-white/10 rounded-lg transition-all duration-500 ${
                    offset === 0 ? 'ring-1 ring-white/20' : 'opacity-70'
                  }`}
                >
                  <div className="mb-4">
                    <svg className="w-8 h-8 text-white/30 mb-3" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                    </svg>
                    <p className="text-white/80 text-sm leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
                      "{testimonials[index].quote.substring(0, 120)}..."
                    </p>
                  </div>
                  <div className="border-t border-white/10 pt-3">
                    <h5 className="text-white font-medium text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
                      {testimonials[index].name}
                    </h5>
                    <p className="text-white/50 text-xs" style={{ fontFamily: 'Inter, sans-serif' }}>
                      {testimonials[index].role}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  )
}

export default Home;


