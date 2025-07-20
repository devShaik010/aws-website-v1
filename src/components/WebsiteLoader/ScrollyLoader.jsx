import React, { useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register standard plugins
gsap.registerPlugin(ScrollTrigger);

const ScrollyLoader = ({ onLoadComplete }) => {
  const [isComplete, setIsComplete] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const textSequence = ['MJCET', 'CLUB', 'Community', 'Builders'];

  useEffect(() => {
    const startTime = Date.now();
    const duration = 6000;
    const updateProgress = () => {
      const elapsed = Date.now() - startTime;
      const currentProgress = Math.min((elapsed / duration) * 100, 100);
      setProgress(currentProgress);
      if (currentProgress < 100) {
        requestAnimationFrame(updateProgress);
      } else {
        setIsComplete(true);
        setTimeout(() => onLoadComplete(), 600);
      }
    };
    requestAnimationFrame(updateProgress);
    // Accessibility: trap scroll and focus
    document.body.setAttribute('aria-busy', 'true');
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.removeAttribute('aria-busy');
      document.body.style.overflow = 'auto';
    };
  }, [onLoadComplete]);

  useEffect(() => {
    const textInterval = setInterval(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % textSequence.length);
    }, 1800);
    return () => clearInterval(textInterval);
  }, []);

  useEffect(() => {
    let autoScrollTl = null;
    const createAutoScroll = () => {
      const contentElement = document.getElementById('content');
      if (contentElement) {
        autoScrollTl = gsap.timeline({ repeat: -1, ease: "none" });
        autoScrollTl.to(contentElement, {
          y: "-100%",
          duration: 6,
          ease: "none"
        });
      }
    };
    createAutoScroll();
    return () => {
      autoScrollTl?.kill();
    };
  }, []);

  // Use public folder for images for production reliability
  const imageUrls = [
    "/images/1.jpg",
    "/images/2.jpeg",
    "/images/3.jpeg",
    "/images/4.jpeg"
  ];
  const imageSpeeds = [0.8, 0.9, 1, 1.1];
  const gridAreas = [
    '1/1/6/8', '3/12/8/20', '9/5/13/15', '14/1/18/8',
    '16/12/20/19', '20/2/25/9', '22/11/24/20', '26/5/30/15',
    '31/1/36/8', '33/12/38/20', '39/5/43/15', '44/1/48/8',
    '46/12/50/19', '50/2/55/9', '52/11/54/20', '56/5/60/15'
  ];

  // Responsive and accessible styles
  const spinnerContainerStyle = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    zIndex: 30,
    width: 'auto',
    pointerEvents: 'none',
  };
  const spinnerStyle = {
    width: '72px',
    height: '72px',
    display: 'block',
    marginBottom: '1.2em',
  };
  const ringStyle = {
    animation: 'ringSpin 2s linear infinite',
    transformOrigin: 'center',
    stroke: 'white',
    strokeLinecap: 'round',
    strokeDasharray: '80 20',
  };
  const subtitleStyle = {
    fontFamily: 'Inter, Arial, sans-serif',
    fontWeight: 500,
    fontSize: 'clamp(0.9rem, 1.8vw, 1.2rem)',
    color: 'white',
    letterSpacing: '0.05em',
    textAlign: 'center',
    background: 'transparent',
    padding: '0.2em 0',
    marginTop: '0.8em',
    userSelect: 'none',
    opacity: 0.9,
  };
  const containerStyle = {
    position: 'fixed',
    inset: 0,
    zIndex: 50,
    margin: 0,
    backgroundColor: '#000',
    color: 'white',
    overscrollBehavior: 'none',
    padding: 0,
    overflow: 'hidden',
    userSelect: 'none',
    pointerEvents: 'none',
    touchAction: 'none',
    width: '100vw',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  };

  return (
    <div style={containerStyle} aria-label="Loading" role="status">
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@500;700&display=swap');
          @keyframes ringSpin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
          @keyframes imageFadeScale {
            0% { opacity: 0; transform: scale(0.95); }
            100% { opacity: 1; transform: scale(1); }
          }
        `}
      </style>
      {/* Overlay for better text visibility */}
      <div style={{
        position: 'fixed',
        inset: 0,
        background: 'linear-gradient(180deg, #000 60%, rgba(0,0,0,0.7) 100%)',
        zIndex: 10,
        pointerEvents: 'none',
        opacity: 0.85
      }} />
      {/* Progress indicator */}
      <div className="fixed top-8 right-8 z-20 text-white" style={{ pointerEvents: 'none' }}>
        <div className="text-right">
          <div className="text-sm font-mono opacity-70 mb-2" aria-live="polite">LOADING</div>
          <div className="text-2xl font-mono font-bold" aria-live="polite">{Math.round(progress)}%</div>
        </div>
      </div>
      {/* Modern spinner and subtitle text - centered, animated, blue theme */}
      <div style={spinnerContainerStyle}>
        <svg style={spinnerStyle} viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="25" cy="25" r="20" stroke="white" strokeWidth="3" style={ringStyle} fill="none" />
        </svg>
        <div style={subtitleStyle}>
          AWS <span style={{ color: 'rgba(255,255,255,0.8)', fontWeight: 600 }}>{textSequence[currentTextIndex]}</span>
        </div>
      </div>
      {/* Netflix-style background gallery */}
      <div id="wrapper" style={{
        position: 'fixed',
        height: '100vh',
        width: '100vw',
        inset: 0,
        pointerEvents: 'none',
        zIndex: 5,
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gridTemplateRows: 'repeat(4, 1fr)',
        gap: '4px',
        padding: '4px'
      }}>
        {[...Array(16)].map((_, i) => (
          <img
            key={i}
            src={imageUrls[i % 4]}
            alt={`Background visual ${i+1}`}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              borderRadius: '4px',
              background: '#111',
              opacity: 0.6,
            }}
            loading="lazy"
            draggable={false}
          />
        ))}
      </div>
      {/* Fade out overlay when complete */}
      <div 
        className={`fixed inset-0 transition-opacity duration-1000 z-50 ${
          isComplete ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        style={{ backgroundColor: '#000000' }}
        aria-hidden={!isComplete}
      />
    </div>
  );
};

export default ScrollyLoader;
