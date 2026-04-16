import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

// Reusable utility for clean class merging
function cn(...inputs) {
  return twMerge(clsx(inputs));
}

const StudentCommunityDays = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  // Content configuration
  const speakers = [1, 2, 3, 4];
  const sponsors = [
    { name: 'AWS', isAnnounced: true, logo: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg' },
    { name: 'Sponsor 2', isAnnounced: false },
    { name: 'Sponsor 3', isAnnounced: false },
    { name: 'Sponsor 4', isAnnounced: false },
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white pt-24 font-sans selection:bg-orange-500/30">
      
      {/* Hero Section */}
      <section className="relative px-6 md:px-12 lg:px-24 py-20 overflow-hidden">
        {/* Abstract background elements */}
        <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-orange-500/10 rounded-full blur-[120px] -z-10" />
        <div className="absolute bottom-1/4 right-0 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[150px] -z-10" />

        <div className="max-w-6xl mx-auto">
          <motion.div 
            initial="hidden" 
            animate="visible" 
            variants={staggerContainer}
            className="flex flex-col items-center text-center space-y-8"
          >
            <motion.div variants={fadeInUp} className="inline-block px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md">
              <span className="text-sm font-medium tracking-wide text-gray-300 uppercase">AWS Cloud Clubs MJCET Presents</span>
            </motion.div>
            
            <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[1.1]">
              Student Community <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-orange-500 to-yellow-500">Days 2026</span>
            </motion.h1>
            
            <motion.p variants={fadeInUp} className="max-w-2xl text-lg md:text-xl text-gray-400 font-light leading-relaxed">
              A premier conference led by students, for students. Dive into the world of AWS, connect with industry leaders, and accelerate your cloud computing journey. Experience a day of transformative talks, hands-on workshops, and community building.
            </motion.p>
            
            <motion.div variants={fadeInUp} className="pt-4">
              <button 
                onClick={() => setIsModalOpen(true)}
                className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-black rounded-full font-semibold overflow-hidden transition-transform hover:scale-105 active:scale-95"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-orange-200 to-orange-100 opacity-0 group-hover:opacity-100 transition-opacity" />
                <span className="relative">Register Now</span>
                <svg className="relative w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="px-6 md:px-12 lg:px-24 py-24 pb-32 bg-black border-t border-white/5">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}>
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-bold mb-6 text-orange-400">About the Event</motion.h2>
            <motion.p variants={fadeInUp} className="text-gray-300 text-lg leading-relaxed mb-6">
              <span className="font-bold text-white">AWS Cloud Club MJCET</span> is a dynamic, student-led community supported by <span className="text-orange-400 font-semibold">Amazon Web Services (AWS)</span>. The AWS Student Community Day at MJCET will be held in <span className="font-bold text-white">May 2026</span>. Our mission is to empower students with the right skills, tools, and opportunities to explore the cloud, build innovative solutions, and collaborate with peers and industry leaders. We regularly host technical workshops, hackathons, and mentorship sessions to help students transform ideas into impactful projects.
            </motion.p>
            <motion.p variants={fadeInUp} className="text-gray-400 text-lg leading-relaxed">
              The <span className="text-orange-400 font-semibold">AWS Student Community Day (SCD)</span> is the flagship annual event of the AWS Cloud Club. It is a one-day, <span className="text-white font-medium">student-driven conference</span> designed to celebrate technology, innovation, and collaboration. Organized entirely by student leaders with guidance from AWS, SCD brings together cloud enthusiasts, developers, and industry experts to share knowledge, showcase real-world use cases, and inspire the next generation of builders.
            </motion.p>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="relative w-full aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden bg-white/5 border border-white/10 flex items-center justify-center group">
             {/* Beautiful group/event background image */}
             <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80')] bg-cover bg-center group-hover:scale-105 transition-transform duration-700" />
             {/* Gradient overlay for text contrast and premium feel */}
             <div className="absolute inset-0 bg-gradient-to-tr from-[#0a0a0a] via-[#0a0a0a]/40 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-700" />
             {/* Subtle orange tint to match the brand */}
             <div className="absolute inset-0 bg-orange-500/10 mix-blend-overlay" />
          </motion.div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="px-6 md:px-12 lg:px-24 py-24 bg-[#0a0a0a]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Tickets & Pricing</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Secure your spot. Choose the pass that fits you best.</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Individual Pass */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="group relative p-[1px] rounded-[2rem] bg-gradient-to-b from-white/20 to-white/5 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative h-full bg-[#0f0f0f] rounded-[calc(2rem-1px)] p-10 flex flex-col">
                <span className="text-orange-400 text-sm font-semibold tracking-wider uppercase mb-2">Solo</span>
                <h3 className="text-3xl font-bold mb-4">Individual Pass</h3>
                <div className="flex items-baseline gap-1 mb-8">
                  <span className="text-5xl font-black">₹150</span>
                  <span className="text-gray-500">/person</span>
                </div>
                <ul className="space-y-4 mb-10 flex-grow text-gray-400">
                  <li className="flex gap-3 items-center"><CheckIcon /> Full day access</li>
                  <li className="flex gap-3 items-center"><CheckIcon /> Swag kit & meals</li>
                  <li className="flex gap-3 items-center"><CheckIcon /> Networking sessions</li>
                </ul>
                <button onClick={() => navigate('/student-community-days/register/attendee')} className="w-full py-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-colors font-medium">Get Individual Pass</button>
              </div>
            </motion.div>

            {/* Group Pass */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="group relative p-[1px] rounded-[2rem] bg-gradient-to-b from-orange-500/50 to-orange-500/10 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative h-full bg-[#14100c] rounded-[calc(2rem-1px)] p-10 flex flex-col">
                <div className="absolute top-0 right-10 inline-block px-3 py-1 bg-orange-500 text-black text-xs font-bold rounded-b-lg">POPULAR</div>
                <span className="text-orange-400 text-sm font-semibold tracking-wider uppercase mb-2">Squad</span>
                <h3 className="text-3xl font-bold mb-4">Group Pass (4 People)</h3>
                <div className="flex items-baseline gap-1 mb-8">
                  <span className="text-5xl font-black">₹400</span>
                  <span className="text-gray-500">/total</span>
                  <span className="text-orange-400 text-sm ml-2 bg-orange-500/10 px-2 py-0.5 rounded-md border border-orange-500/20">Save ₹200</span>
                </div>
                <ul className="space-y-4 mb-10 flex-grow text-gray-400">
                  <li className="flex gap-3 items-center text-gray-300"><CheckIcon color="text-orange-400"/> Everything in Individual Pass</li>
                  <li className="flex gap-3 items-center text-gray-300"><CheckIcon color="text-orange-400"/> Dedicated group seating</li>
                  <li className="flex gap-3 items-center text-gray-300"><CheckIcon color="text-orange-400"/> Exclusive squad photo-op</li>
                </ul>
                <button onClick={() => navigate('/student-community-days/register/attendee')} className="w-full py-4 rounded-xl bg-orange-500 hover:bg-orange-600 text-black transition-colors font-semibold">Get Group Pass</button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Speakers Section */}
      <section className="px-6 md:px-12 lg:px-24 py-24 bg-black border-y border-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold mb-4">Masterclass Speakers</h2>
              <p className="text-gray-400 max-w-xl">Learn from AWS Heroes, Community Builders, and industry veterans.</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {speakers.map((id) => (
              <motion.div 
                key={id}
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
                className="relative aspect-[3/4] rounded-[2rem] overflow-hidden group border border-white/5 bg-white/5"
              >
                {/* Simulated blurred image base */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a1a] to-[#0a0a0a] blur-xl opacity-80 group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 backdrop-blur-2xl bg-black/40 flex flex-col items-center justify-center p-6 text-center z-10">
                  <div className="w-12 h-12 rounded-full border border-white/20 bg-white/10 mb-4 flex items-center justify-center backdrop-blur-md">
                     <svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                     </svg>
                  </div>
                  <h3 className="text-lg font-medium text-white/90">Mystery Guest</h3>
                  <p className="text-sm text-gray-500 mt-2 font-mono">Will be announced soon</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sponsors Section */}
      <section className="px-6 md:px-12 lg:px-24 py-24 bg-[#0a0a0a]">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Our Partners & Sponsors</h2>
          <p className="text-gray-400 mb-16 max-w-2xl mx-auto">Backed by the best in the industry to bring this experience to you.</p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {sponsors.map((sponsor, idx) => (
              <motion.div 
                key={idx}
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
                className="relative h-40 rounded-3xl border border-white/5 bg-white/[0.02] flex items-center justify-center overflow-hidden group"
              >
                {sponsor.isAnnounced ? (
                  <div className="relative z-10 flex flex-col items-center justify-center p-6 grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
                    <img src={sponsor.logo} alt="AWS" className="h-14 w-auto object-contain" />
                  </div>
                ) : (
                  <>
                    <div className="absolute inset-0 bg-white/5 blur-2xl group-hover:opacity-50 transition-opacity" />
                    <div className="absolute inset-0 backdrop-blur-xl bg-[#0a0a0a]/60 flex items-center justify-center z-10">
                      <span className="text-sm font-medium text-gray-500 tracking-wider">TBA</span>
                    </div>
                  </>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="px-6 md:px-12 lg:px-24 py-24 bg-black border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Venue & Location</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Join us at the heart of Hyderabad for an unforgettable experience.</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 rounded-[2rem] overflow-hidden bg-[#0f0f0f] border border-white/10 p-4">
            
            {/* Image Side */}
            <div className="relative h-[300px] lg:h-[450px] w-full rounded-2xl overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10" />
              {/* Optional graphic placeholder for college image */}
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80')] bg-cover bg-center group-hover:scale-105 transition-transform duration-700" />
              
              <div className="absolute bottom-6 left-6 z-20">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-3">
                  <svg className="w-4 h-4 text-orange-400" fill="currentColor" viewBox="0 0 20 20">
                     <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-xs font-semibold tracking-wide text-white uppercase">Main Campus</span>
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-1">Muffakham Jah College</h3>
                <p className="text-gray-300 text-sm max-w-sm">Engineering & Technology (MJCET)</p>
              </div>
            </div>

            {/* Map & Address Side */}
            <div className="flex flex-col h-full rounded-2xl overflow-hidden relative">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.1354394901962!2d78.43579247493522!3d17.409995183481!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9716fd9e81b3%3A0xcb1b51478c52086!2sMuffakham%20Jah%20College%20of%20Engineering%20%26%20Technology!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
                className="w-full flex-grow min-h-[250px] lg:min-h-0 filter invert-[90%] hue-rotate-180 opacity-80 transition-opacity hover:opacity-100" 
                style={{border: 0}} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
              <div className="bg-[#141414] p-6 border-t border-white/5 flex gap-4 items-start">
                <div className="w-10 h-10 rounded-full bg-orange-500/10 flex items-center justify-center shrink-0 border border-orange-500/20">
                  <svg className="w-5 h-5 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-white font-semibold text-lg mb-1">Getting Here</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Mount Pleasant, 8-2-249, Rd Number 3, Venkateshwara Hills, Banjara Hills, Hyderabad, Telangana 500082
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Registration Modal Popup */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center px-4"
          >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setIsModalOpen(false)} />
            
            {/* Modal Content */}
            <motion.div 
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ type: "spring", duration: 0.5, bounce: 0 }}
              className="relative w-full max-w-2xl bg-[#111] border border-white/10 rounded-3xl p-8 md:p-12 overflow-hidden shadow-2xl"
            >
              <button onClick={() => setIsModalOpen(false)} className="absolute top-6 right-6 p-2 rounded-full bg-white/5 hover:bg-white/10 text-gray-400 transition-colors">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <div className="text-center mb-10">
                <h3 className="text-3xl font-bold mb-3">Join the Event</h3>
                <p className="text-gray-400">How would you like to participate in the Student Community Days?</p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <button 
                  onClick={() => { setIsModalOpen(false); navigate('/student-community-days/register/attendee'); }}
                  className="group relative p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-orange-500/50 hover:bg-white/10 transition-all text-left flex flex-col h-full"
                >
                  <div className="w-12 h-12 bg-orange-500/20 text-orange-500 rounded-xl flex items-center justify-center mb-6 border border-orange-500/30">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h4 className="text-xl font-bold mb-2 text-white">Register as Attendee</h4>
                  <p className="text-gray-400 text-sm flex-grow mb-6">Experience the talks, workshops, network with peers, and get exclusive swags.</p>
                  <div className="flex items-center text-orange-400 text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity -translate-x-2 group-hover:translate-x-0 transform duration-300">
                    Proceed <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
                  </div>
                </button>

                <button 
                  onClick={() => { setIsModalOpen(false); navigate('/student-community-days/register/speaker'); }}
                  className="group relative p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-blue-500/50 hover:bg-white/10 transition-all text-left flex flex-col h-full"
                >
                  <div className="w-12 h-12 bg-blue-500/20 text-blue-400 rounded-xl flex items-center justify-center mb-6 border border-blue-500/30">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                    </svg>
                  </div>
                  <h4 className="text-xl font-bold mb-2 text-white">Call for Speakers</h4>
                  <p className="text-gray-400 text-sm flex-grow mb-6">Have a cloud story? Share your knowledge, projects, and architecture with the community.</p>
                  <div className="flex items-center text-blue-400 text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity -translate-x-2 group-hover:translate-x-0 transform duration-300">
                    Submit Proposal <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
                  </div>
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
};

// Mini check icon component for pricing
const CheckIcon = ({ color = "text-white" }) => (
  <div className={cn("w-5 h-5 rounded-full bg-white/10 flex items-center justify-center shrink-0", color)}>
    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
    </svg>
  </div>
);

export default StudentCommunityDays;