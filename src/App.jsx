import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { useState, useEffect, useRef } from 'react'
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
import PromoBar from './components/PromoBar/PromoBar.jsx'
import Gallery from '@pages/Gallery'
import StudentCommunityDays from '@pages/StudentCommunityDays'
import RegisterAttendee from '@pages/RegisterAttendee'
import RegisterSpeaker from '@pages/RegisterSpeaker'
import RegisterSponsor from '@pages/RegisterSponsor'

// Reset scroll to top on every route change (works with Lenis)
function ScrollToTop({ lenisRef }) {
  const { pathname } = useLocation();
  useEffect(() => {
    if (lenisRef.current) {
      lenisRef.current.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, lenisRef]);
  return null;
}

// Inner layout — lives under <Router> so it can use useLocation.
function Layout({ lenisRef }) {
  const { pathname } = useLocation();
  const showPromoBar = !pathname.startsWith('/student-community-days');

  return (
    <>
      <ScrollToTop lenisRef={lenisRef} />
      {showPromoBar && <PromoBar />}
      <div className="flex flex-col min-h-screen">
        <Navbar hasPromoBar={showPromoBar} />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/events" element={<Events />} />
            {/* <Route path="/achievements" element={<Achievements />} />
            <Route path="/playground" element={<Playground />} /> */}
            <Route path="/contact" element={<Contact />} />
            <Route path='/gallery' element={<Gallery/>}/>
            <Route path="/student-community-days" element={<StudentCommunityDays />} />
            <Route path="/student-community-days/register/attendee" element={<RegisterAttendee />} />
            <Route path="/student-community-days/register/speaker" element={<RegisterSpeaker />} />
            <Route path="/student-community-days/register/sponsor" element={<RegisterSponsor />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </>
  );
}

function App() {
  const lenisRef = useRef(null);

  // Initialize Lenis smooth scroll
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
    });
    lenisRef.current = lenis;

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  return (
    <Router>
      <Layout lenisRef={lenisRef} />
    </Router>
  )
}

export default App;