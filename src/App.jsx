import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Lenis from 'lenis'
import './App.css'
import Navbar from './components/Navbar/Navbar.jsx'
import Footer from './components/Footer/Footer.jsx'
import Home from '@pages/Home'
import About from '@pages/About'
import Events from '@pages/Events'
import Achievements from '@pages/Achivements'
import Contact from '@pages/Contact'
import Playground from '@pages/Playground'
import ScrollyLoader from './components/WebsiteLoader/ScrollyLoader'

function App() {
  const [loading, setLoading] = useState(true);
  
  // Function to handle when loader completes
  const handleLoadComplete = () => {
    setLoading(false);
  };

  // Initialize Lenis smooth scroll
  useEffect(() => {
    if (!loading) {
      const lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smooth: true,
      });

      function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }

      requestAnimationFrame(raf);

      return () => {
        lenis.destroy();
      };
    }
  }, [loading]);

  // Optional: Prevent scrolling when loader is active
  useEffect(() => {
    if (loading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [loading]);

  return (
    <>
      {loading ? (
        <ScrollyLoader onLoadComplete={handleLoadComplete} />
      ) : (
        <Router>
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/events" element={<Events />} />
                <Route path="/achievements" element={<Achievements />} />
                <Route path="/playground" element={<Playground />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      )}
    </>
  )
}

export default App;