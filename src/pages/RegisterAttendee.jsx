import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { supabase } from '../supabaseClient';
import { initiatePayment, tiers } from '../razorpayHandler';
import QRCode from 'react-qr-code';

const RegisterAttendee = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    gender: '',
    phone: '',
    email: '',
    isMeetupMember: 'yes',
  });
  const [isStudent, setIsStudent] = useState('yes');
  const [hasJoinedCommunity, setHasJoinedCommunity] = useState('yes');
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(null);
  const [selectedTier, setSelectedTier] = useState(null);
  const [transactionId, setTransactionId] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!selectedTier) {
      setError('Please select a registration type.');
      return;
    }
    if (!transactionId || transactionId.trim() === '') {
      setError('Please enter your UPI Transaction ID after paying.');
      return;
    }

    setError(null);
    setLoading(true);

    const { error: dbError } = await supabase
      .from('attendees')
      .insert([{
        full_name: formData.fullName,
        gender: formData.gender,
        phone: formData.phone,
        email: formData.email,
        is_meetup_member: formData.isMeetupMember === 'yes',
        tier: selectedTier.id,
        amount_paid: selectedTier.price,
        payment_id: transactionId,
      }]);

    setLoading(false);

    if (dbError) {
      if (dbError.code === '23505') {
        setError('This email is already registered!');
      } else {
        setError('Registration failed. Please try again.');
      }
    } else {
      setSubmitted(true);
    }
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-[#0a0a0a] text-white pt-32 pb-24 font-sans flex items-center justify-center px-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-xl bg-[#111] border border-white/10 rounded-[2rem] p-8 md:p-12 shadow-2xl text-center"
        >
          <div className="inline-flex w-16 h-16 bg-violet-500/10 text-violet-500 rounded-2xl items-center justify-center mb-6 border border-violet-500/20">
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold mb-3">Success!</h2>
          <p className="text-gray-300">🎉 You're registered! See you at the event.</p>
        </motion.div>
      </div>
    );
  }

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

        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-300">Full Name</label>
            <input type="text" value={formData.fullName} onChange={(e) => setFormData({...formData, fullName: e.target.value})} className="w-full bg-[#1a1a1a] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-violet-500/50 focus:ring-1 focus:ring-violet-500/50 transition-all" placeholder="John Doe" />
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-300">Gender</label>
              <select value={formData.gender} onChange={(e) => setFormData({...formData, gender: e.target.value})} className="w-full bg-[#1a1a1a] border border-white/10 rounded-xl px-4 py-3 text-gray-300 focus:outline-none focus:border-violet-500/50 focus:ring-1 focus:ring-violet-500/50 transition-all appearance-none cursor-pointer">
                <option value="" disabled>Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
                <option value="prefer_not_to_say">Prefer not to say</option>
              </select>
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-300">Phone Number</label>
              <input type="tel" value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} className="w-full bg-[#1a1a1a] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-violet-500/50 focus:ring-1 focus:ring-violet-500/50 transition-all" placeholder="+91 9876543210" />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-300">Email Address</label>
            <input type="email" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} className="w-full bg-[#1a1a1a] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-violet-500/50 focus:ring-1 focus:ring-violet-500/50 transition-all" placeholder="john@example.com" />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-300">Have you joined our Meetup community yet?</label>
            <div className="flex gap-4 mt-2">
              <label className="flex items-center gap-2 cursor-pointer group">
                <div className={`w-5 h-5 rounded-full border flex items-center justify-center transition-all ${hasJoinedCommunity === 'yes' ? 'border-violet-500' : 'border-gray-500 group-hover:border-gray-400'}`}>
                  {hasJoinedCommunity === 'yes' && <div className="w-2.5 h-2.5 bg-violet-500 rounded-full" />}
                </div>
                <input type="radio" value="yes" checked={hasJoinedCommunity === 'yes'} onChange={() => {setHasJoinedCommunity('yes'); setFormData({...formData, isMeetupMember: 'yes'});}} className="hidden" />
                <span className="text-gray-300">Yes</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer group">
                <div className={`w-5 h-5 rounded-full border flex items-center justify-center transition-all ${hasJoinedCommunity === 'no' ? 'border-violet-500' : 'border-gray-500 group-hover:border-gray-400'}`}>
                  {hasJoinedCommunity === 'no' && <div className="w-2.5 h-2.5 bg-violet-500 rounded-full" />}
                </div>
                <input type="radio" value="no" checked={hasJoinedCommunity === 'no'} onChange={() => {setHasJoinedCommunity('no'); setFormData({...formData, isMeetupMember: 'no'});}} className="hidden" />
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

          <div className="flex flex-col gap-3 mt-4">
            <p className="text-sm text-gray-400">Select Registration Type</p>
            <div className="flex gap-4">
              {tiers.map((tier) => {
                const isSelected = selectedTier?.id === tier.id;
                return (
                  <button
                    key={tier.id}
                    type="button"
                    onClick={() => setSelectedTier(tier)}
                    className={`flex-1 border rounded-xl p-4 text-left transition-all duration-200 ${
                      isSelected
                        ? 'border-violet-500 bg-violet-500/10 text-violet-400'
                        : 'border-white/10 text-gray-400 hover:border-violet-500/50'
                    }`}
                  >
                    <p className="font-semibold text-white">{tier.label}</p>
                    <p className="text-xs text-gray-500">{tier.description}</p>
                    <p className="text-lg font-bold mt-1 text-violet-400">₹{tier.price}</p>
                  </button>
                );
              })}
            </div>
          </div>

          {error && (
            <div className="text-red-400 text-sm text-center">
              {error}
            </div>
          )}

          {selectedTier && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              className="mt-6 p-6 border border-violet-500/30 bg-violet-500/10 rounded-xl flex flex-col items-center justify-center space-y-4 overflow-hidden"
            >
              <p className="text-sm text-gray-300 text-center font-semibold mb-2">
                Scan via any UPI App (GPay, PhonePe, Paytm)<br />
                Amount: <span className="text-violet-400 font-bold text-lg">₹{selectedTier.price}</span>
              </p>
              <div className="bg-white p-4 rounded-2xl shadow-xl hover:scale-105 transition-transform">
                <QRCode
                  value={`upi://pay?pa=vahajrahman@ybl&pn=AWS%20Community%20Day&am=${selectedTier.price}&cu=INR`}
                  size={200}
                />
              </div>
              <div className="w-full space-y-2 mt-4">
                <label className="text-sm font-medium text-gray-300">UPI Transaction ID / UTR No.</label>
                <input
                  type="text"
                  value={transactionId}
                  onChange={(e) => setTransactionId(e.target.value)}
                  className="w-full bg-[#1a1a1a] border border-violet-500/50 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition-all text-center tracking-widest font-mono"
                  placeholder="e.g. 321456789012"
                />
              </div>
            </motion.div>
          )}

          <div className="pt-6">
            <button disabled={loading} className={`w-full bg-white text-black font-semibold py-4 rounded-xl transition-colors ${loading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-200'}`}>
              {loading ? 'Processing...' : 'Complete Registration'}
            </button>
            <p className="text-center text-xs text-gray-600 mt-4">By registering, you agree to our Terms of Service & Privacy Policy.</p>
          </div>
        </form>
      </motion.div>
    </div>
  );
};

export default RegisterAttendee;