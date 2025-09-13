import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function Home() {
  const heroRef = useRef(null);
  const contentRef = useRef(null);

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
        
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-32 h-32 bg-white/5 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-white/5 rounded-full blur-lg animate-pulse delay-75"></div>
          <div className="absolute bottom-40 left-20 w-28 h-28 bg-white/5 rounded-full blur-lg animate-pulse delay-150"></div>
          <div className="absolute bottom-20 right-10 w-36 h-36 bg-white/5 rounded-full blur-xl animate-pulse delay-300"></div>
        </div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/50" />

        {/* Hero Content */}
        <div 
          ref={contentRef}
          className="relative z-10 text-center max-w-4xl mx-auto px-6"
        >
          {/* New Badge */}
          <div className="mb-4">
            <span className="inline-flex items-center px-3 py-1.5 bg-white/10 backdrop-blur-sm border border-white/20 text-white/80 text-xs font-medium rounded-full" style={{ fontFamily: 'Inter, sans-serif' }}>
              <span className="mr-2 px-1.5 py-0.5 bg-white text-black text-xs rounded-full font-semibold">New</span>
              Telangana's first cloud club
            </span>
          </div>

          {/* Main Title */}
          <div className="mb-4">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 leading-tight" style={{ fontFamily: 'Inter, sans-serif' }}>
              <span className="text-white">Welcome to </span>
              <span className="text-white/90">MJCET's</span>
            </h1>
            <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-tight">
              <span className="text-white">AWS</span>
              <span className="text-white/90"> Cloud Club</span>
            </div>
          </div>

          {/* Subtitle */}
          <div className="mb-6">
            <p className="text-sm sm:text-base md:text-lg text-white/60 font-light leading-relaxed max-w-2xl mx-auto" style={{ fontFamily: 'Inter, sans-serif' }}>
              Be a part of the cloud revolution now
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
            <button className="group relative px-6 py-3 bg-white text-black font-medium rounded-lg transition-all duration-300 hover:scale-105 hover:bg-white/90 text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
              <span className="relative z-10 flex items-center">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                </svg>
                Join Now
              </span>
            </button>
            
            <button className="group relative px-6 py-3 bg-transparent border border-white/20 hover:border-white/30 text-white font-medium rounded-lg transition-all duration-300 hover:scale-105 hover:bg-white/5 text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
              <span className="relative z-10 flex items-center">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Explore Events
                <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">→</span>
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* About Us Section */}
      <div className="relative py-20 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Side - Image Showcase */}
            <div className="relative">
              {/* Main large image */}
              <div className="relative group">
                <div className="relative overflow-hidden rounded-2xl">
                  <img 
                    src="https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?q=80&w=800&auto=format&fit=crop" 
                    alt="AWS Workshop"
                    className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/20"></div>
                </div>
              </div>

              {/* Small image - top right */}
              <div className="absolute -top-8 -right-4 w-32 h-24 group">
                <div className="relative overflow-hidden rounded-xl">
                  <img 
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=400&auto=format&fit=crop" 
                    alt="Cloud Computing"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/20"></div>
                </div>
              </div>

              {/* Medium image - bottom left */}
              <div className="absolute -bottom-6 -left-6 w-40 h-32 group">
                <div className="relative overflow-hidden rounded-xl">
                  <img 
                    src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=400&auto=format&fit=crop" 
                    alt="Team Collaboration"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/20"></div>
                </div>
              </div>

              {/* Small accent image - middle right */}
              <div className="absolute top-1/2 -right-8 w-24 h-20 group">
                <div className="relative overflow-hidden rounded-lg">
                  <img 
                    src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?q=80&w=400&auto=format&fit=crop" 
                    alt="AWS Certification"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/20"></div>
                </div>
              </div>
            </div>

            {/* Right Side - Content */}
            <div className="relative">
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

              <button className="border border-white/20 hover:border-white/40 text-white font-medium py-3 px-8 rounded-lg transition-all duration-300 hover:bg-white/5" style={{ fontFamily: 'Inter, sans-serif' }}>
                Learn More About Us
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Our Speciality Section */}
      <div className="relative py-20 bg-gray-950">
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
                {/* Icon */}
                <div className="relative mb-6">
                  <div className="w-20 h-20 mx-auto bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
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
                <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 text-6xl font-bold text-white/10" style={{ fontFamily: 'Inter, sans-serif' }}>
                  01
                </div>
              </div>
            </div>

            {/* Service 2 - Certification Prep */}
            <div className="group relative">
              <div className="text-center">
                {/* Icon */}
                <div className="relative mb-6">
                  <div className="w-20 h-20 mx-auto bg-gradient-to-br from-green-500 to-teal-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
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
                <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 text-6xl font-bold text-white/10" style={{ fontFamily: 'Inter, sans-serif' }}>
                  02
                </div>
              </div>
            </div>

            {/* Service 3 - Project Guidance */}
            <div className="group relative">
              <div className="text-center">
                {/* Icon */}
                <div className="relative mb-6">
                  <div className="w-20 h-20 mx-auto bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
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
                <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 text-6xl font-bold text-white/10" style={{ fontFamily: 'Inter, sans-serif' }}>
                  03
                </div>
              </div>
            </div>

            {/* Service 4 - Career Support */}
            <div className="group relative">
              <div className="text-center">
                {/* Icon */}
                <div className="relative mb-6">
                  <div className="w-20 h-20 mx-auto bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
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
                <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 text-6xl font-bold text-white/10" style={{ fontFamily: 'Inter, sans-serif' }}>
                  04
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home;


