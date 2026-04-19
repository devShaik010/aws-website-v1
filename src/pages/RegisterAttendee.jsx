import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const RegisterAttendee = () => {
  const [isStudent, setIsStudent] = useState('yes');
  const [hasJoinedCommunity, setHasJoinedCommunity] = useState('yes');

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white pt-32 pb-24 font-sans flex items-center justify-center px-6">
      <motion.div 
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.6 }}
        className="w-full max-w-xl bg-[#111] border border-white/10 rounded-[2rem] p-8 md:p-12 shadow-2xl"
      >
        <div className="mb-10 text-center">
          <div className="inline-flex w-14 h-14 bg-violet-500/10 text-violet-500 rounded-2xl items-center justify-center mb-6 border border-violet-500/20">
            <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <h1 className="text-3xl font-bold mb-3">Attendee Registration</h1>
          <p className="text-gray-400">Secure your pass for Student Community Day.</p>
        </div>

        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-300">Full Name</label>
            <input type="text" className="w-full bg-[#1a1a1a] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-violet-500/50 focus:ring-1 focus:ring-violet-500/50 transition-all" placeholder="John Doe" />
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-300">Gender</label>
              <select className="w-full bg-[#1a1a1a] border border-white/10 rounded-xl px-4 py-3 text-gray-300 focus:outline-none focus:border-violet-500/50 focus:ring-1 focus:ring-violet-500/50 transition-all appearance-none cursor-pointer">
                <option value="" disabled selected>Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
                <option value="prefer_not_to_say">Prefer not to say</option>
              </select>
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-300">Phone Number</label>
              <input type="tel" className="w-full bg-[#1a1a1a] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-violet-500/50 focus:ring-1 focus:ring-violet-500/50 transition-all" placeholder="+91 9876543210" />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-300">Email Address</label>
            <input type="email" className="w-full bg-[#1a1a1a] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-violet-500/50 focus:ring-1 focus:ring-violet-500/50 transition-all" placeholder="john@example.com" />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-300">Have you joined our Meetup community yet?</label>
            <div className="flex gap-4 mt-2">
              <label className="flex items-center gap-2 cursor-pointer group">
                <div className={`w-5 h-5 rounded-full border flex items-center justify-center transition-all ${hasJoinedCommunity === 'yes' ? 'border-violet-500' : 'border-gray-500 group-hover:border-gray-400'}`}>
                  {hasJoinedCommunity === 'yes' && <div className="w-2.5 h-2.5 bg-violet-500 rounded-full" />}
                </div>
                <input type="radio" value="yes" checked={hasJoinedCommunity === 'yes'} onChange={() => setHasJoinedCommunity('yes')} className="hidden" />
                <span className="text-gray-300">Yes</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer group">
                <div className={`w-5 h-5 rounded-full border flex items-center justify-center transition-all ${hasJoinedCommunity === 'no' ? 'border-violet-500' : 'border-gray-500 group-hover:border-gray-400'}`}>
                  {hasJoinedCommunity === 'no' && <div className="w-2.5 h-2.5 bg-violet-500 rounded-full" />}
                </div>
                <input type="radio" value="no" checked={hasJoinedCommunity === 'no'} onChange={() => setHasJoinedCommunity('no')} className="hidden" />
                <span className="text-gray-300">No</span>
              </label>
            </div>
          </div>

          <AnimatePresence>
            {hasJoinedCommunity === 'no' && (
              <motion.div 
                initial={{ opacity: 0, height: 0, marginTop: 0 }}
                animate={{ opacity: 1, height: 'auto', marginTop: 24 }}
                exit={{ opacity: 0, height: 0, marginTop: 0 }}
                className="overflow-hidden"
              >
                <div className="bg-violet-500/10 border border-violet-500/20 rounded-xl p-4">
                  <p className="text-sm text-violet-200/90 leading-relaxed mb-3">
                    It is mandatory to RSVP to our Meetup event to confirm your slot. Please join the community and RSVP here:
                  </p>
                  <a 
                    href="https://www.meetup.com/aws-cloud-club-mjcet/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-violet-400 hover:text-violet-300 transition-colors"
                  >
                    Join Meetup Event
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-300">Are you a Student?</label>
            <div className="flex gap-4 mt-2">
              <label className="flex items-center gap-2 cursor-pointer group">
                <div className={`w-5 h-5 rounded-full border flex items-center justify-center transition-all ${isStudent === 'yes' ? 'border-violet-500' : 'border-gray-500 group-hover:border-gray-400'}`}>
                  {isStudent === 'yes' && <div className="w-2.5 h-2.5 bg-violet-500 rounded-full" />}
                </div>
                <input type="radio" name="isStudent" value="yes" checked={isStudent === 'yes'} onChange={() => setIsStudent('yes')} className="hidden" />
                <span className="text-gray-300">Yes</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer group">
                <div className={`w-5 h-5 rounded-full border flex items-center justify-center transition-all ${isStudent === 'no' ? 'border-violet-500' : 'border-gray-500 group-hover:border-gray-400'}`}>
                  {isStudent === 'no' && <div className="w-2.5 h-2.5 bg-violet-500 rounded-full" />}
                </div>
                <input type="radio" name="isStudent" value="no" checked={isStudent === 'no'} onChange={() => setIsStudent('no')} className="hidden" />
                <span className="text-gray-300">No</span>
              </label>
            </div>
          </div>

          <AnimatePresence>
            {isStudent === 'yes' && (
              <motion.div 
                initial={{ opacity: 0, height: 0, marginTop: 0 }}
                animate={{ opacity: 1, height: 'auto', marginTop: 24 }}
                exit={{ opacity: 0, height: 0, marginTop: 0 }}
                className="space-y-2 overflow-hidden"
              >
                <label className="text-sm font-medium text-gray-300">College / University</label>
                <input type="text" className="w-full bg-[#1a1a1a] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-violet-500/50 focus:ring-1 focus:ring-violet-500/50 transition-all" placeholder="Enter your institution name" />
              </motion.div>
            )}
          </AnimatePresence>

          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-300">Ticket Type</label>
            <select className="w-full bg-[#1a1a1a] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-violet-500/50 focus:ring-1 focus:ring-violet-500/50 transition-all appearance-none cursor-pointer">
              <option value="solo">Individual Pass (₹150)</option>
              <option value="group">Group Pass - 4 People (₹400)</option>
            </select>
          </div>

          <div className="pt-6">
            <button className="w-full bg-white hover:bg-gray-200 text-black font-semibold py-4 rounded-xl transition-colors">
              Continue to Payment
            </button>
            <p className="text-center text-xs text-gray-600 mt-4">By registering, you agree to our Terms of Service & Privacy Policy.</p>
          </div>
        </form>
      </motion.div>
    </div>
  );
};

export default RegisterAttendee;