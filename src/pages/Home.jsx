import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

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
      <div className="relative py-20 bg-black">
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
                      src="https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?q=80&w=200&auto=format&fit=crop" 
                      alt="AWS Training"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/30"></div>
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
                      src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?q=80&w=200&auto=format&fit=crop" 
                      alt="Certification Prep"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/30"></div>
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
                      src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=200&auto=format&fit=crop" 
                      alt="Project Guidance"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/30"></div>
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
                      src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=200&auto=format&fit=crop" 
                      alt="Career Support"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/30"></div>
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
      <div className="relative py-20 bg-gray-950">
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


