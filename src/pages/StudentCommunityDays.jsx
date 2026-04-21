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

  // Speaker session formats
  const sessionTypes = [
    {
      title: 'KEYNOTE',
      desc: 'Set the tone for the day with a vision-shaping talk on cloud, AI, or what\'s next.',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
        </svg>
      ),
    },
    {
      title: 'WORKSHOP',
      desc: 'Roll up your sleeves — guide the community through a hands-on build session.',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
    },
    {
      title: 'LIGHTNING TALK',
      desc: 'Five minutes, one sharp idea. Fast, focused, and unforgettable.',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
    {
      title: 'PANEL DISCUSSION',
      desc: 'Join an expert lineup for a moderated debate on a topic you care about.',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    },
  ];

  // On-campus venues hosting the day
  const venues = [
    {
      name: 'Ghulam Ahmed Hall',
      tag: 'Main Stage',
      desc: 'Headline keynotes and plenary sessions. The day opens and closes on this stage.',
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
        </svg>
      ),
    },
    {
      name: 'Seminar Hall',
      tag: 'Parallel Sessions',
      desc: 'Panel discussions, lightning talks, and moderated conversations with industry guests.',
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    },
    {
      name: 'AI Lab',
      tag: 'Hands-on Workshops',
      desc: 'Roll-up-your-sleeves build sessions. Bring a laptop, leave having shipped something.',
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
          <rect x="4" y="4" width="16" height="16" rx="2" strokeLinejoin="round" />
          <rect x="9" y="9" width="6" height="6" strokeLinejoin="round" />
          <path strokeLinecap="round" d="M9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 14h3M1 9h3M1 14h3" />
        </svg>
      ),
    },
  ];

  // Sponsorship value propositions
  const sponsorshipPerks = [
    {
      title: 'Brand Awareness',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 110-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18c.253.962.584 1.892.985 2.783.247.55.06 1.21-.463 1.511l-.657.38c-.551.318-1.26.117-1.527-.461a20.845 20.845 0 01-1.44-4.282m3.102.069a18.03 18.03 0 01-.59-4.59c0-1.586.205-3.124.59-4.59m0 9.18a23.848 23.848 0 018.835 2.535M10.34 6.66a23.847 23.847 0 008.835-2.535m0 0A23.74 23.74 0 0018.795 3m.38 1.125a23.91 23.91 0 011.014 5.395m-1.014 8.855c-.118.38-.245.754-.38 1.125m.38-1.125a23.91 23.91 0 001.014-5.395m0-3.46c.495.413.811 1.035.811 1.73 0 .695-.316 1.317-.811 1.73m0-3.46a24.347 24.347 0 010 3.46" />
        </svg>
      ),
      items: [
        { highlight: 'Feature', text: ' your brand across reels, posts, and stories curated by our media team.' },
        { highlight: 'Publish', text: ' your company on the official SCD website.' },
        { highlight: 'Expose', text: ' your brand on flyers, posters, banners, t-shirts, and digital signage.' },
        { highlight: 'Introduce', text: ' your brand to all attendees at the opening ceremony.' },
      ],
    },
    {
      title: 'Audience Interaction',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      items: [
        { highlight: 'Meet', text: ' a talented, motivated audience from diverse technical backgrounds across Telangana.' },
        { highlight: 'Interact', text: ' with 800+ participants to share and promote your services and solutions.' },
        { highlight: 'Choose', text: ' top talent proficient in DevOps, AI, and cloud for internships and recruitment.' },
        { highlight: 'Highlight', text: ' your services with a dedicated BOOTH setup in the hall.' },
      ],
    },
  ];

  // What's included beyond sessions
  const perks = [
    {
      title: 'Tea & Coffee',
      desc: 'All-day refills',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 8h12v7a4 4 0 01-4 4H7a4 4 0 01-4-4V8zm12 1h2a3 3 0 010 6h-2M7 3v2m4-2v2" />
        </svg>
      ),
    },
    {
      title: 'Snacks',
      desc: 'Between sessions',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M4 10h16l-1.5 9a2 2 0 01-2 1.7h-9a2 2 0 01-2-1.7L4 10zm2-4a6 6 0 0112 0H6z" />
        </svg>
      ),
    },
    {
      title: 'Lunch',
      desc: 'Full buffet included',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 3v8a3 3 0 003 3v7M6 3v7M9 3v7m12-7v18m-3-9h3a0 0 0 000 0V5a2 2 0 00-2-2h-1v9z" />
        </svg>
      ),
    },
    {
      title: 'Swag Kit',
      desc: 'Tee, stickers & more',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 1010 8h2zM20 12v7a2 2 0 01-2 2H6a2 2 0 01-2-2v-7m16-4H4a1 1 0 00-1 1v2a1 1 0 001 1h16a1 1 0 001-1V9a1 1 0 00-1-1z" />
        </svg>
      ),
    },
    {
      title: 'Certificate',
      desc: 'AWS-branded',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      ),
    },
    {
      title: 'Networking',
      desc: 'Builders & recruiters',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    },
    {
      title: 'Photo-ops',
      desc: 'Capture the day',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
    },
    {
      title: 'Free Wi-Fi',
      desc: 'For all attendees',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
        </svg>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white pt-16 font-sans selection:bg-violet-500/30">

      {/* Hero Section */}
      <section className="relative px-6 md:px-12 lg:px-24 py-8 md:py-10 overflow-hidden">
        {/* Abstract background elements */}
        <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-violet-500/10 rounded-full blur-[120px] -z-10" />
        <div className="absolute bottom-1/4 right-0 w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-[150px] -z-10" />

        <div className="max-w-6xl mx-auto">
          <motion.div 
            initial="hidden" 
            animate="visible" 
            variants={staggerContainer}
            className="flex flex-col items-center text-center space-y-6"
          >
            <motion.div variants={fadeInUp} className="inline-block px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md">
              <span className="text-sm font-medium tracking-wide text-gray-300 uppercase">AWS Cloud Clubs MJCET Presents</span>
            </motion.div>
            
            <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[1.1]">
              Student <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-violet-500 to-fuchsia-500">Community</span> <br />
              Day 2026
            </motion.h1>
            
            <motion.p variants={fadeInUp} className="max-w-2xl text-lg md:text-xl text-gray-400 font-light leading-relaxed">
              A premier conference led by students, for students. Dive into the world of AWS, connect with industry leaders, and accelerate your cloud computing journey. Experience a day of transformative talks, hands-on workshops, and community building.
            </motion.p>
            
            <motion.div variants={fadeInUp} className="pt-2">
              <button 
                onClick={() => setIsModalOpen(true)}
                className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-black rounded-full font-semibold overflow-hidden transition-transform hover:scale-105 active:scale-95"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-violet-200 to-violet-100 opacity-0 group-hover:opacity-100 transition-opacity" />
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
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-bold mb-6 text-violet-400">About the Event</motion.h2>
            <motion.p variants={fadeInUp} className="text-gray-300 text-lg leading-relaxed mb-6">
              <span className="font-bold text-white">AWS Cloud Club MJCET</span> is a dynamic, student-led community supported by <span className="text-violet-400 font-semibold">Amazon Web Services (AWS)</span>. The AWS Student Community Day at MJCET will be held in <span className="font-bold text-white">May 2026</span>. Our mission is to empower students with the right skills, tools, and opportunities to explore the cloud, build innovative solutions, and collaborate with peers and industry leaders. We regularly host technical workshops, hackathons, and mentorship sessions to help students transform ideas into impactful projects.
            </motion.p>
            <motion.p variants={fadeInUp} className="text-gray-400 text-lg leading-relaxed">
              The <span className="text-violet-400 font-semibold">AWS Student Community Day (SCD)</span> is the flagship annual event of the AWS Cloud Club. It is a one-day, <span className="text-white font-medium">student-driven conference</span> designed to celebrate technology, innovation, and collaboration. Organized entirely by student leaders with guidance from AWS, SCD brings together cloud enthusiasts, developers, and industry experts to share knowledge, showcase real-world use cases, and inspire the next generation of builders.
            </motion.p>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="relative w-full aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden bg-white/5 border border-white/10 flex items-center justify-center group">
             {/* Beautiful group/event background image */}
             <div
               className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-700"
               style={{ backgroundImage: "url('/scd/About_the_Event_pic.jpeg')" }}
             />
             {/* Gradient overlay for text contrast and premium feel */}
             <div className="absolute inset-0 bg-gradient-to-tr from-[#0a0a0a] via-[#0a0a0a]/40 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-700" />
             {/* Subtle orange tint to match the brand */}
             <div className="absolute inset-0 bg-violet-500/10 mix-blend-overlay" />
          </motion.div>
        </div>
      </section>

      {/* What are SCDs — Info Callout */}
      <section className="px-6 md:px-12 lg:px-24 py-20 bg-[#0a0a0a]">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="relative rounded-[2rem] overflow-hidden border border-white/10 bg-gradient-to-br from-white/[0.04] to-white/[0.01] backdrop-blur-xl p-10 md:p-16"
          >
            {/* Ambient glows */}
            <div className="absolute -top-24 -right-24 w-80 h-80 bg-violet-500/10 rounded-full blur-[110px] pointer-events-none" />
            <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-fuchsia-500/10 rounded-full blur-[110px] pointer-events-none" />

            {/* Decorative quote mark */}
            <svg className="absolute top-6 right-8 w-24 h-24 text-violet-500/10 pointer-events-none" fill="currentColor" viewBox="0 0 32 32">
              <path d="M10,8H6A2,2 0 0,0 4,10V18A2,2 0 0,0 6,20H10L14,24V10A2,2 0 0,0 12,8H10M20,8H18A2,2 0 0,0 16,10V18A2,2 0 0,0 18,20H22L26,24V10A2,2 0 0,0 24,8H20Z" />
            </svg>

            <div className="relative">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-violet-500/30 bg-violet-500/10 mb-6">
                <span className="w-2 h-2 rounded-full bg-violet-400 animate-pulse" />
                <span className="text-violet-400 text-xs font-semibold tracking-wider uppercase">What are SCDs?</span>
              </div>

              <p className="text-xl md:text-2xl text-gray-200 font-light leading-relaxed mb-8">
                AWS Student Community Day (SCD) are <span className="text-white font-semibold">one-day, community-led conferences</span> where event logistics and content are <span className="text-violet-400 font-semibold">planned, sourced, and delivered by student community leaders.</span>
              </p>

              <p className="text-lg md:text-xl text-gray-400 font-light leading-relaxed border-l-2 border-violet-500/40 pl-6">
                While a standard Cloud Club event focuses on one topic, a Student Community Day features <span className="text-violet-400 font-bold">3+ topics, sessions, and speakers</span> to gather, educate, and celebrate with a wider array of audiences.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Call for Speakers Section */}
      <section className="px-6 md:px-12 lg:px-24 py-24 bg-black border-t border-white/5 relative overflow-hidden">
        {/* Page-matching orange/gold ambient glows */}
        <div className="absolute top-1/4 -right-20 w-[500px] h-[500px] bg-violet-500/[0.07] rounded-full blur-[150px] pointer-events-none" />
        <div className="absolute bottom-0 -left-20 w-[400px] h-[400px] bg-fuchsia-500/[0.05] rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-6xl mx-auto relative">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-violet-400/30 bg-violet-500/10 backdrop-blur-md mb-6">
              <svg className="w-4 h-4 text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
              </svg>
              <span className="text-violet-400 text-xs font-semibold tracking-wider uppercase">Call for Speakers</span>
            </motion.div>

            <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
              Got a story to tell? <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-violet-500 to-fuchsia-500">Take the stage.</span>
            </motion.h2>

            <motion.p variants={fadeInUp} className="text-gray-400 max-w-2xl mx-auto text-lg">
              We're looking for speakers, builders, and storytellers. Pick a format that fits you and share what you love with the community.
            </motion.p>
          </motion.div>

          {/* Session Type Cards */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-14">
            {sessionTypes.map((session, idx) => (
              <motion.div
                key={session.title}
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
                transition={{ delay: idx * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="group relative rounded-3xl overflow-hidden backdrop-blur-2xl bg-gradient-to-b from-white/[0.06] to-white/[0.01] border border-white/10 px-6 py-8 text-center transition-all duration-500 hover:border-violet-400/40 hover:-translate-y-1.5 hover:shadow-[0_20px_50px_-15px_rgba(139,92,246,0.4),inset_0_0_40px_rgba(139,92,246,0.06)]"
              >
                {/* Golden gradient wash on hover */}
                <div className="absolute inset-0 bg-gradient-to-b from-violet-400/0 via-transparent to-violet-500/0 group-hover:from-violet-400/[0.06] group-hover:to-violet-500/[0.08] transition-all duration-700 pointer-events-none" />

                {/* Grid texture */}
                <div
                  className="absolute inset-0 opacity-[0.03] pointer-events-none"
                  style={{
                    backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
                    backgroundSize: '24px 24px',
                  }}
                />

                {/* Icon — centered */}
                <div className="relative inline-flex mb-5">
                  <div className="relative w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center backdrop-blur-md transition-all duration-500 group-hover:border-violet-400/50 group-hover:scale-110">
                    <div className="relative text-white/70 group-hover:text-violet-300 transition-colors duration-500 z-10">
                      {session.icon}
                    </div>
                    {/* Inner golden gradient */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-violet-400/25 to-fuchsia-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                  {/* Halo */}
                  <div className="absolute -inset-2 rounded-2xl bg-violet-400/25 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
                </div>

                {/* Title */}
                <h3 className="relative text-sm font-bold tracking-[0.2em] text-white mb-3">
                  {session.title}
                </h3>

                {/* Symmetric golden divider */}
                <div className="relative mx-auto h-px w-10 bg-gradient-to-r from-transparent via-violet-400/50 to-transparent group-hover:via-violet-400 group-hover:w-16 transition-all duration-500 mb-4" />

                {/* Description */}
                <p className="relative text-[13px] text-gray-400 leading-relaxed">
                  {session.desc}
                </p>
              </motion.div>
            ))}
          </div>

          {/* CTA Button */}
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
            className="text-center"
          >
            <button
              onClick={() => navigate('/student-community-days/register/speaker')}
              className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full overflow-hidden font-semibold transition-all duration-500 hover:scale-105 active:scale-95 shadow-[0_0_30px_rgba(139,92,246,0.4)] hover:shadow-[0_0_60px_rgba(139,92,246,0.65)]"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-violet-400 via-violet-500 to-fuchsia-500" />
              <div className="absolute inset-0 bg-gradient-to-r from-violet-300 via-violet-400 to-fuchsia-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <span className="relative text-black">Submit a Speaker Proposal</span>
              <svg className="relative w-5 h-5 text-black transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
            <p className="text-gray-500 text-sm mt-4">All experience levels welcome · Applications reviewed on a rolling basis</p>
          </motion.div>
        </div>
      </section>

      {/* Call for Sponsors Section */}
      <section className="px-6 md:px-12 lg:px-24 py-24 bg-[#0a0a0a] border-t border-white/5 relative overflow-hidden">
        {/* Ambient glows — mirrored from Call for Speakers for continuity */}
        <div className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-violet-500/[0.07] rounded-full blur-[150px] pointer-events-none" />
        <div className="absolute bottom-0 -right-20 w-[400px] h-[400px] bg-fuchsia-500/[0.05] rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-6xl mx-auto relative">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-violet-400/30 bg-violet-500/10 backdrop-blur-md mb-6">
              <svg className="w-4 h-4 text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 3.077 3.397.493c.976.142 1.366 1.33.661 2.014l-2.458 2.395.58 3.383c.167.973-.854 1.72-1.732 1.259L12 13.187l-3.018 1.586c-.878.461-1.899-.286-1.732-1.259l.58-3.383-2.458-2.395c-.705-.684-.315-1.872.66-2.014l3.397-.493 1.52-3.077z" />
              </svg>
              <span className="text-violet-400 text-xs font-semibold tracking-wider uppercase">Call for Sponsors</span>
            </motion.div>

            <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-violet-500 to-fuchsia-500">Sponsor</span> the community.
            </motion.h2>

            <motion.p variants={fadeInUp} className="text-gray-400 max-w-2xl mx-auto text-lg">
              Put your brand in front of 800+ builders, future hires, and cloud-curious students across Telangana. Here's what your sponsorship unlocks.
            </motion.p>
          </motion.div>

          {/* Sponsorship value cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {sponsorshipPerks.map((perk, idx) => (
              <motion.div
                key={perk.title}
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
                transition={{ delay: idx * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="group relative rounded-3xl overflow-hidden backdrop-blur-2xl bg-gradient-to-b from-white/[0.06] to-white/[0.01] border border-white/10 p-8 transition-all duration-500 hover:border-violet-400/40 hover:-translate-y-1.5 hover:shadow-[0_20px_60px_-15px_rgba(139,92,246,0.35),inset_0_0_40px_rgba(139,92,246,0.05)]"
              >
                {/* Hover wash */}
                <div className="absolute inset-0 bg-gradient-to-b from-violet-400/0 to-fuchsia-500/0 group-hover:from-violet-400/[0.06] group-hover:to-fuchsia-500/[0.06] transition-all duration-700 pointer-events-none" />

                {/* Grid texture */}
                <div
                  className="absolute inset-0 opacity-[0.025] pointer-events-none"
                  style={{
                    backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
                    backgroundSize: '24px 24px',
                  }}
                />

                {/* Top row: icon + index */}
                <div className="relative flex items-start justify-between mb-6">
                  <div className="relative">
                    <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center backdrop-blur-md transition-all duration-500 group-hover:border-violet-400/40 group-hover:scale-110">
                      <div className="relative text-white/70 group-hover:text-violet-300 transition-colors duration-500 z-10">
                        {perk.icon}
                      </div>
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-violet-400/20 to-fuchsia-500/15 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>
                    <div className="absolute -inset-2 rounded-2xl bg-violet-400/25 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
                  </div>
                  <span className="font-mono text-[11px] tracking-widest text-white/25 group-hover:text-violet-400/60 transition-colors duration-500 mt-2">
                    0{idx + 1}
                  </span>
                </div>

                {/* Title */}
                <h3 className="relative text-xl md:text-2xl font-bold text-white mb-2">
                  {perk.title}
                </h3>

                {/* Divider */}
                <div className="relative h-px w-12 bg-gradient-to-r from-violet-400 to-fuchsia-400 mb-6" />

                {/* Bullet list */}
                <ul className="relative space-y-3">
                  {perk.items.map((item, itemIdx) => (
                    <li key={itemIdx} className="flex items-start gap-3 text-gray-400 text-sm leading-relaxed">
                      <svg className="w-4 h-4 text-violet-400 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>
                        <span className="text-violet-300 font-semibold">{item.highlight}</span>
                        {item.text}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
            className="text-center"
          >
            <button
              onClick={() => navigate('/student-community-days/register/sponsor')}
              className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full overflow-hidden font-semibold transition-all duration-500 hover:scale-105 active:scale-95 shadow-[0_0_30px_rgba(139,92,246,0.4)] hover:shadow-[0_0_60px_rgba(139,92,246,0.65)]"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-violet-400 via-violet-500 to-fuchsia-500" />
              <div className="absolute inset-0 bg-gradient-to-r from-violet-300 via-violet-400 to-fuchsia-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <span className="relative text-black">Become a Sponsor</span>
              <svg className="relative w-5 h-5 text-black transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
            <p className="text-gray-500 text-sm mt-4">Share a few quick details and our team will follow up with the full sponsorship deck</p>
          </motion.div>
        </div>
      </section>

      {/* Beyond the Sessions Section */}
      <section className="px-6 md:px-12 lg:px-24 py-24 bg-[#0a0a0a] border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.span variants={fadeInUp} className="text-violet-400 text-xs font-semibold tracking-wider uppercase mb-4 block">
              The Full Experience
            </motion.span>
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-bold mb-4">Beyond the Sessions</motion.h2>
            <motion.p variants={fadeInUp} className="text-gray-400 max-w-2xl mx-auto text-lg">
              Your ticket unlocks more than talks. Here's everything we're packing into the day.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {perks.map((perk, idx) => (
              <motion.div
                key={perk.title}
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
                transition={{ delay: idx * 0.05, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="group relative rounded-2xl backdrop-blur-xl bg-gradient-to-br from-white/[0.04] to-white/[0.01] border border-white/10 p-6 text-center overflow-hidden transition-all duration-500 hover:border-violet-400/30 hover:-translate-y-1"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-violet-400/0 to-violet-500/0 group-hover:from-violet-400/[0.07] group-hover:to-violet-500/0 transition-all duration-500 pointer-events-none" />

                <div className="relative w-12 h-12 mx-auto mb-4 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-violet-400/80 group-hover:text-violet-400 group-hover:border-violet-400/30 group-hover:bg-violet-400/10 transition-all duration-500">
                  {perk.icon}
                </div>
                <h4 className="relative text-sm font-semibold text-white mb-1">{perk.title}</h4>
                <p className="relative text-xs text-gray-500">{perk.desc}</p>
              </motion.div>
            ))}
          </div>

          <p className="text-center text-gray-500 text-sm mt-10 max-w-xl mx-auto">
            … and a few surprises we're saving for the day itself.
          </p>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="px-6 md:px-12 lg:px-24 py-24 bg-[#0a0a0a]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            {/* Early Bird Banner */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full border border-violet-500/30 bg-violet-500/10 backdrop-blur-md"
            >
              <svg className="w-4 h-4 text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-violet-400 text-xs font-bold uppercase tracking-[0.15em]">Early Bird · Limited Time</span>
            </motion.div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Tickets & Pricing</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Booking early? You save. These are our <span className="text-violet-400 font-medium">early bird prices</span> — a thank-you for backing us before the gates open.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Individual Pass */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="group relative p-[1px] rounded-[2rem] bg-gradient-to-b from-white/20 to-white/5 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative h-full bg-[#0f0f0f] rounded-[calc(2rem-1px)] p-10 flex flex-col">
                <EarlyBirdTicket />
                <span className="text-violet-400 text-sm font-semibold tracking-wider uppercase mb-2">Solo</span>
                <h3 className="text-3xl font-bold mb-4">Individual Pass</h3>
                <div className="flex items-baseline gap-2 mb-1">
                  <span className="text-5xl font-black">₹200</span>
                  <span className="text-gray-500">/person</span>
                </div>
                <div className="flex items-center gap-2 mb-8">
                  <span className="text-gray-500 line-through text-sm">₹300</span>
                  <span className="text-violet-400/80 text-xs">Save ₹100</span>
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
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="group relative p-[1px] rounded-[2rem] bg-gradient-to-b from-violet-500/50 to-violet-500/10 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-violet-500/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative h-full bg-[#120a1f] rounded-[calc(2rem-1px)] p-10 flex flex-col">
                <div className="absolute top-0 left-10 inline-block px-3 py-1 bg-violet-500 text-black text-xs font-bold rounded-b-lg">POPULAR</div>
                <EarlyBirdTicket />
                <span className="text-violet-400 text-sm font-semibold tracking-wider uppercase mb-2">Squad</span>
                <h3 className="text-3xl font-bold mb-4">Group Pass (4 People)</h3>
                <div className="flex items-baseline gap-2 mb-1 flex-wrap">
                  <span className="text-5xl font-black">₹600</span>
                  <span className="text-gray-500">/total</span>
                </div>
                <div className="flex items-center gap-2 mb-8 flex-wrap">
                  <span className="text-gray-500 line-through text-sm">₹800</span>
                  <span className="text-violet-400 text-xs bg-violet-500/10 px-2 py-0.5 rounded-md border border-violet-500/20 font-semibold">Save ₹200</span>
                </div>
                <ul className="space-y-4 mb-10 flex-grow text-gray-400">
                  <li className="flex gap-3 items-center text-gray-300"><CheckIcon color="text-violet-400"/> Everything in Individual Pass</li>
                  <li className="flex gap-3 items-center text-gray-300"><CheckIcon color="text-violet-400"/> Dedicated group seating</li>
                  <li className="flex gap-3 items-center text-gray-300"><CheckIcon color="text-violet-400"/> Exclusive squad photo-op</li>
                </ul>
                <button onClick={() => navigate('/student-community-days/register/attendee')} className="w-full py-4 rounded-xl bg-violet-500 hover:bg-violet-600 text-black transition-colors font-semibold">Get Group Pass</button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Speakers Section */}
      <section className="px-6 md:px-12 lg:px-24 py-24 bg-black border-y border-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Masterclass Speakers</h2>
            <p className="text-gray-400 max-w-xl mx-auto">Learn from AWS Heroes, Community Builders, and industry veterans.</p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
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
              <div
                className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-700"
                style={{ backgroundImage: "url('/scd/clg_location_pic.avif')" }}
              />
              
              <div className="absolute bottom-6 left-6 z-20">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-3">
                  <svg className="w-4 h-4 text-violet-400" fill="currentColor" viewBox="0 0 20 20">
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
                <div className="w-10 h-10 rounded-full bg-violet-500/10 flex items-center justify-center shrink-0 border border-violet-500/20">
                  <svg className="w-5 h-5 text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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

          {/* Event Spaces — venues hosting the sessions */}
          <div className="mt-20">
            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="text-center mb-12"
            >
              <motion.span variants={fadeInUp} className="text-violet-400 text-xs font-semibold tracking-[0.2em] uppercase mb-3 block">
                On The Day
              </motion.span>
              <motion.h3 variants={fadeInUp} className="text-2xl md:text-4xl font-bold mb-3">
                Event Spaces
              </motion.h3>
              <motion.p variants={fadeInUp} className="text-gray-400 max-w-xl mx-auto">
                Three rooms across campus, each tuned to the kind of session inside.
              </motion.p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5">
              {venues.map((venue, idx) => (
                <motion.div
                  key={venue.name}
                  initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
                  transition={{ delay: idx * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className={`group relative rounded-3xl overflow-hidden backdrop-blur-2xl bg-gradient-to-b from-white/[0.05] to-white/[0.01] border border-white/10 p-4 sm:p-6 md:p-7 transition-all duration-500 hover:border-violet-400/40 hover:-translate-y-1.5 hover:shadow-[0_20px_50px_-15px_rgba(139,92,246,0.35),inset_0_0_40px_rgba(139,92,246,0.04)] ${idx === 0 ? 'col-span-2 md:col-span-1' : 'col-span-1'}`}
                >
                  {/* Golden hover wash */}
                  <div className="absolute inset-0 bg-gradient-to-b from-violet-400/0 to-violet-500/0 group-hover:from-violet-400/[0.05] group-hover:to-violet-500/[0.08] transition-all duration-700 pointer-events-none" />

                  {/* Grid texture */}
                  <div
                    className="absolute inset-0 opacity-[0.025] pointer-events-none"
                    style={{
                      backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
                      backgroundSize: '24px 24px',
                    }}
                  />

                  {/* Top row: icon + index */}
                  <div className="relative flex items-start justify-between mb-4 sm:mb-6 md:mb-8">
                    <div className="relative">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center backdrop-blur-md transition-all duration-500 group-hover:border-violet-400/40 group-hover:scale-110">
                        <div className="relative text-white/70 group-hover:text-violet-300 transition-colors duration-500 z-10">
                          {venue.icon}
                        </div>
                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-violet-400/20 to-fuchsia-500/15 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      </div>
                      <div className="absolute -inset-2 rounded-2xl bg-violet-400/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
                    </div>
                    <span className="font-mono text-[10px] sm:text-[11px] tracking-widest text-white/25 group-hover:text-violet-400/60 transition-colors duration-500 mt-1 sm:mt-2">
                      0{idx + 1}
                    </span>
                  </div>

                  {/* Venue name */}
                  <h4 className="relative text-base sm:text-xl md:text-[1.35rem] font-bold text-white leading-tight mb-2 sm:mb-3">
                    {venue.name}
                  </h4>

                  {/* Tag line with decorative rule */}
                  <div className="relative flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                    <span className="text-[9px] sm:text-[10px] font-bold tracking-[0.12em] sm:tracking-[0.15em] text-violet-400 uppercase">
                      {venue.tag}
                    </span>
                    <span className="h-px flex-1 bg-gradient-to-r from-violet-400/40 via-white/5 to-transparent" />
                  </div>

                  {/* Description */}
                  <p className="relative text-[11px] sm:text-sm text-gray-400 leading-relaxed">
                    {venue.desc}
                  </p>
                </motion.div>
              ))}
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
                <p className="text-gray-400">How would you like to participate in the Student Community Day?</p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <button 
                  onClick={() => { setIsModalOpen(false); navigate('/student-community-days/register/attendee'); }}
                  className="group relative p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-violet-500/50 hover:bg-white/10 transition-all text-left flex flex-col h-full"
                >
                  <div className="w-12 h-12 bg-violet-500/20 text-violet-500 rounded-xl flex items-center justify-center mb-6 border border-violet-500/30">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h4 className="text-xl font-bold mb-2 text-white">Register as Attendee</h4>
                  <p className="text-gray-400 text-sm flex-grow mb-6">Experience the talks, workshops, network with peers, and get exclusive swags.</p>
                  <div className="flex items-center text-violet-400 text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity -translate-x-2 group-hover:translate-x-0 transform duration-300">
                    Proceed <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
                  </div>
                </button>

                <button 
                  onClick={() => { setIsModalOpen(false); navigate('/student-community-days/register/speaker'); }}
                  className="group relative p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-fuchsia-500/50 hover:bg-white/10 transition-all text-left flex flex-col h-full"
                >
                  <div className="w-12 h-12 bg-fuchsia-500/20 text-fuchsia-400 rounded-xl flex items-center justify-center mb-6 border border-fuchsia-500/30">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                    </svg>
                  </div>
                  <h4 className="text-xl font-bold mb-2 text-white">Call for Speakers</h4>
                  <p className="text-gray-400 text-sm flex-grow mb-6">Have a cloud story? Share your knowledge, projects, and architecture with the community.</p>
                  <div className="flex items-center text-fuchsia-400 text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity -translate-x-2 group-hover:translate-x-0 transform duration-300">
                    Submit Proposal <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
                  </div>
                </button>

                <button
                  onClick={() => { setIsModalOpen(false); navigate('/student-community-days/register/sponsor'); }}
                  className="group relative md:col-span-2 p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-violet-400/50 hover:bg-white/10 transition-all text-left flex flex-col sm:flex-row sm:items-center gap-6"
                >
                  <div className="w-12 h-12 shrink-0 bg-gradient-to-br from-violet-500/30 to-fuchsia-500/30 text-violet-300 rounded-xl flex items-center justify-center border border-violet-400/30">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 3.077 3.397.493c.976.142 1.366 1.33.661 2.014l-2.458 2.395.58 3.383c.167.973-.854 1.72-1.732 1.259L12 13.187l-3.018 1.586c-.878.461-1.899-.286-1.732-1.259l.58-3.383-2.458-2.395c-.705-.684-.315-1.872.66-2.014l3.397-.493 1.52-3.077z" />
                    </svg>
                  </div>
                  <div className="flex-grow">
                    <h4 className="text-xl font-bold mb-1 text-white">Become a Sponsor</h4>
                    <p className="text-gray-400 text-sm">Put your brand in front of 800+ builders and recruit from a curated pool of AWS talent.</p>
                  </div>
                  <div className="hidden sm:flex items-center text-violet-300 text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity -translate-x-2 group-hover:translate-x-0 transform duration-300 shrink-0">
                    Partner with us <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
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

// Decorative Early Bird ticket stub for pricing cards
const EarlyBirdTicket = () => (
  <div className="absolute top-4 right-4 rotate-[14deg] pointer-events-none select-none z-20">
    <div
      className="relative transition-transform duration-500 group-hover:rotate-[18deg] group-hover:scale-105"
      style={{ filter: 'drop-shadow(0 8px 18px rgba(139,92,246,0.5))' }}
    >
      <svg width="100" height="40" viewBox="0 0 100 40" className="block">
        <defs>
          <linearGradient id="earlyBirdGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#c4b5fd" />
            <stop offset="50%" stopColor="#8b5cf6" />
            <stop offset="100%" stopColor="#7c3aed" />
          </linearGradient>
        </defs>
        {/* Ticket body with notched side edges */}
        <path
          d="M 4 0 L 96 0 A 4 4 0 0 1 100 4 L 100 16 A 4 4 0 0 0 100 24 L 100 36 A 4 4 0 0 1 96 40 L 4 40 A 4 4 0 0 1 0 36 L 0 24 A 4 4 0 0 0 0 16 L 0 4 A 4 4 0 0 1 4 0 Z"
          fill="url(#earlyBirdGrad)"
        />
        {/* Top shine highlight */}
        <path
          d="M 4 0 L 96 0 A 4 4 0 0 1 100 4 L 100 10 L 0 10 L 0 4 A 4 4 0 0 1 4 0 Z"
          fill="rgba(255,255,255,0.2)"
        />
        {/* Perforated divider between body and stub */}
        <line x1="76" y1="6" x2="76" y2="34" stroke="rgba(0,0,0,0.35)" strokeWidth="1" strokeDasharray="2 2" />
      </svg>
      <div className="absolute inset-0 flex items-center">
        <div className="pl-3 flex-1">
          <div className="text-[9px] font-black text-black leading-[1] tracking-tight">EARLY</div>
          <div className="text-[9px] font-black text-black leading-[1] tracking-tight mt-1">BIRD</div>
        </div>
        <div className="flex items-center justify-center w-[24px] h-full">
          <svg className="w-3 h-3 text-black/60" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="9" />
            <path d="M12 7v5l3 2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
    </div>
  </div>
);

// Mini check icon component for pricing
const CheckIcon = ({ color = "text-white" }) => (
  <div className={cn("w-5 h-5 rounded-full bg-white/10 flex items-center justify-center shrink-0", color)}>
    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
    </svg>
  </div>
);

export default StudentCommunityDays;