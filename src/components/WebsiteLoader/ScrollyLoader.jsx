import React, { useEffect, useState } from 'react';
import { gsap } from 'gsap-trial';
import { ScrollSmoother } from 'gsap-trial/ScrollSmoother';
import { ScrollTrigger } from 'gsap-trial/ScrollTrigger';

gsap.registerPlugin(ScrollSmoother, ScrollTrigger);

const ScrollyLoader = ({ onLoadComplete }) => {
  const [isComplete, setIsComplete] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  
  const textSequence = ['AWS', 'Community', 'Builders', 'Network'];

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
        setTimeout(() => onLoadComplete(), 1000);
      }
    };
    
    requestAnimationFrame(updateProgress);

    const preventScroll = (e) => {
      e.preventDefault();
      e.stopPropagation();
      return false;
    };

    const events = ['scroll', 'wheel', 'mousewheel', 'DOMMouseScroll', 'touchmove', 'touchstart', 'touchend'];
    events.forEach(event => {
      document.addEventListener(event, preventScroll, { passive: false });
      window.addEventListener(event, preventScroll, { passive: false });
    });

    return () => {
      events.forEach(event => {
        document.removeEventListener(event, preventScroll);
        window.removeEventListener(event, preventScroll);
      });
    };
  }, [onLoadComplete]);

  useEffect(() => {
    const textInterval = setInterval(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % textSequence.length);
    }, 2000);

    return () => clearInterval(textInterval);
  }, []);

  useEffect(() => {
    gsap.config({ trialWarn: false });
    
    let smoother = null;
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
    
    try {
      if (ScrollSmoother?.create) {
        smoother = ScrollSmoother.create({
          wrapper: "#wrapper",
          content: "#content",
          smooth: 2,
          speed: 2,
          effects: true,
          normalizeScroll: false,
          ignoreMobileResize: true
        });
        
        const autoScroll = () => {
          if (smoother) {
            smoother.scrollTo("100%", true, "none");
            setTimeout(() => {
              smoother.scrollTo("0%", true, "none");
              autoScroll();
            }, 3000);
          }
        };
        autoScroll();
      } else {
        createAutoScroll();
      }

      return () => {
        smoother?.kill();
        autoScrollTl?.kill();
      };
    } catch (error) {
      createAutoScroll();
      return () => autoScrollTl?.kill();
    }
  }, []);

    const imageUrls = [
      "/src/components/WebsiteLoader/images/1.jpg",
      "/src/components/WebsiteLoader/images/2.jpeg", 
      "/src/components/WebsiteLoader/images/3.jpeg",
      "/src/components/WebsiteLoader/images/4.jpeg"
    ];

    const imageSpeeds = [0.8, 0.9, 1, 1.1];
    const gridAreas = [
      '1/1/6/8', '3/12/8/20', '9/5/13/15', '14/1/18/8',
      '16/12/20/19', '20/2/25/9', '22/11/24/20', '26/5/30/15',
      '31/1/36/8', '33/12/38/20', '39/5/43/15', '44/1/48/8',
      '46/12/50/19', '50/2/55/9', '52/11/54/20', '56/5/60/15'
    ];

  const textStyle = {
    position: 'fixed',
    top: '50vh',
    fontFamily: 'Bungee, sans-serif',
    fontWeight: 400,
    fontSize: '8vw',
    textAlign: 'center',
    width: '100%',
    transform: 'translateY(-100%)',
    pointerEvents: 'none'
  };

  const containerStyle = {
    position: 'fixed',
    inset: 0,
    zIndex: 50,
    margin: 0,
    backgroundColor: '#000000',
    color: 'white',
    overscrollBehavior: 'none',
    padding: 0,
    overflow: 'hidden',
    userSelect: 'none',
    pointerEvents: 'none',
    touchAction: 'none',
    WebkitUserSelect: 'none',
    MozUserSelect: 'none',
    msUserSelect: 'none',
    width: '100vw',
    height: '100vh'
  };

  return (
    <div style={containerStyle}>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Bungee&display=swap');
          
          @keyframes fadeInUp {
            0% {
              opacity: 0;
              transform: translateY(20px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
      </style>
      
      <div className="fixed top-8 right-8 z-20 text-white" style={{ pointerEvents: 'none' }}>
        <div className="text-right">
          <div className="text-sm font-mono opacity-70 mb-2">LOADING</div>
          <div className="text-2xl font-mono font-bold">{Math.round(progress)}%</div>
        </div>
      </div>

      <h1 style={{ ...textStyle, zIndex: -2, color: 'white', WebkitTextStrokeWidth: '1.5px', WebkitTextStrokeColor: 'white' }}>
        <span>AWS </span>
        <span 
          key={currentTextIndex}
          style={{
            display: 'inline-block',
            opacity: 0,
            transform: 'translateY(20px)',
            animation: 'fadeInUp 0.8s ease-out forwards'
          }}
        >
          {textSequence[currentTextIndex]}
        </span>
      </h1>
      
      <h1 aria-hidden="true" style={{ ...textStyle, zIndex: 2, color: 'transparent', WebkitTextStrokeWidth: '1.5px', WebkitTextStrokeColor: 'white' }}>
        <span>AWS </span>
        <span 
          key={`outline-${currentTextIndex}`}
          style={{
            display: 'inline-block',
            opacity: 0,
            transform: 'translateY(20px)',
            animation: 'fadeInUp 0.8s ease-out forwards'
          }}
        >
          {textSequence[currentTextIndex]}
        </span>
      </h1>
      
      <h1 aria-hidden="true" style={{ ...textStyle, zIndex: 2, mixBlendMode: 'screen', color: '#804691' }}>
        <span>AWS </span>
        <span 
          key={`filter-${currentTextIndex}`}
          style={{
            display: 'inline-block',
            opacity: 0,
            transform: 'translateY(20px)',
            animation: 'fadeInUp 0.8s ease-out forwards'
          }}
        >
          {textSequence[currentTextIndex]}
        </span>
      </h1>

      <div id="wrapper" style={{
        overflow: 'hidden',
        position: 'fixed',
        height: '100%',
        width: '100%',
        inset: 0,
        pointerEvents: 'none'
      }}>
        <section id="content" style={{
          overflow: 'hidden',
          width: '100%',
          height: '200vh',
          pointerEvents: 'none'
        }}>
          <section style={{
            paddingTop: '60vh',
            position: 'relative',
            width: '100%',
            maxWidth: '1200px',
            margin: '0 auto',
            minHeight: '300vh',
            height: '100%',
            display: 'grid',
            gridTemplateColumns: 'repeat(20, 2%)',
            gridTemplateRows: 'repeat(60, 1.5%)',
            justifyContent: 'center',
            justifyItems: 'center',
            alignItems: 'center',
            gap: '1%',
            zIndex: 1
          }}>
            {[...Array(16)].map((_, i) => (
              <img
                key={i}
                data-speed={imageSpeeds[i % 4]}
                src={imageUrls[i % 4]}
                alt=""
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  gridArea: gridAreas[i]
                }}
              />
            ))}
          </section>
        </section>
      </div>

      <div 
        className={`fixed inset-0 transition-opacity duration-1000 z-50 ${
          isComplete ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        style={{ backgroundColor: '#000000' }}
      />
    </div>
  );
};

export default ScrollyLoader;
