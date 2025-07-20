import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import * as THREE from 'three';

gsap.registerPlugin(ScrollTrigger);

function Home() {
  const heroRef = useRef(null);
  const canvasRef = useRef(null);
  const contentRef = useRef(null);
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    if (!canvasRef.current) return;

    // Three.js Setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ 
      canvas: canvasRef.current, 
      alpha: true,
      antialias: true 
    });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // Create one large torus (donut shape) as background element
    // Smaller size for mobile devices
    const isMobile = window.innerWidth < 768;
    const torusSize = isMobile ? 3.5 : 6;
    const geometry = new THREE.TorusGeometry(torusSize, 2, 12, 48);
    const material = new THREE.MeshBasicMaterial({ 
      color: 0x60a5fa,
      transparent: true,
      opacity: 0.15,
      wireframe: true
    });

    const torus = new THREE.Mesh(geometry, material);
    torus.position.set(0, 0, -12);
    scene.add(torus);

    // Add mouse movement interaction
    const handleMouseMove = (event) => {
      mouseRef.current.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouseRef.current.y = -(event.clientY / window.innerHeight) * 2 + 1;
    };

    window.addEventListener('mousemove', handleMouseMove);

    camera.position.z = 5;

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      
      // Base rotation
      torus.rotation.x += 0.005;
      torus.rotation.y += 0.008;
      torus.rotation.z += 0.003;
      
      // Mouse interaction - subtle movement
      torus.rotation.x += mouseRef.current.y * 0.02;
      torus.rotation.y += mouseRef.current.x * 0.02;

      renderer.render(scene, camera);
    };

    animate();

    // Handle resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
      
      // Update torus size based on screen size
      const isMobile = window.innerWidth < 768;
      const newTorusSize = isMobile ? 3.5 : 6;
      torus.geometry.dispose();
      torus.geometry = new THREE.TorusGeometry(newTorusSize, 2, 12, 48);
    };

    window.addEventListener('resize', handleResize);

    // GSAP Animations
    const ctx = gsap.context(() => {
      // Content entrance animation
      gsap.from(contentRef.current.children, {
        y: 80,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: "power3.out",
        delay: 0.3
      });

      // Parallax effect on scroll
      gsap.to(canvasRef.current, {
        y: -150,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        }
      });

    }, heroRef);

    return () => {
      ctx.revert();
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      renderer.dispose();
    };
  }, []);

  return (
    <div ref={heroRef} className="relative h-screen bg-black text-white overflow-hidden flex items-center justify-center">
      {/* Poppins Font Import */}
      <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      
      {/* Three.js Canvas Background */}
      <canvas 
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ zIndex: 1 }}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40" style={{ zIndex: 2 }} />

      {/* Hero Content */}
      <div 
        ref={contentRef}
        className="relative z-10 text-center max-w-5xl mx-auto px-6"
      >
        {/* Main Title */}
        <div className="mb-5">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black mb-2 bg-gradient-to-r from-white via-blue-100 to-blue-200 bg-clip-text text-transparent leading-[0.9]">
            AWS
          </h1>
          <div className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-blue-400 leading-[0.9]">
            Cloud Club
          </div>
        </div>

        {/* Subtitle */}
        <div className="mb-8">
          <p className="text-lg sm:text-xl lg:text-2xl text-white/80 font-light leading-relaxed max-w-3xl mx-auto" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Empowering the next generation of cloud innovators at{' '}
            <span className="text-blue-400 font-medium">MJCET</span>
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="group relative px-6 py-3 bg-gradient-to-r from-blue-600/90 to-blue-500/90 backdrop-blur-md border border-blue-400/30 text-white font-semibold rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25 overflow-hidden">
            <span className="relative z-10 flex items-center">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
              </svg>
              Join Community
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
          </button>
          
          <button className="group relative px-6 py-3 bg-white/10 backdrop-blur-md border border-white/30 hover:border-white/50 text-white font-semibold rounded-xl transition-all duration-300 hover:scale-105 hover:bg-white/15 overflow-hidden">
            <span className="relative z-10 flex items-center">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Explore Events
              <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">→</span>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Home;


