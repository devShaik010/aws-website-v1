import { useState } from 'react';
import { motion } from 'framer-motion';
import { supabase } from '../supabaseClient';

const RegisterSponsor = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [organization, setOrganization] = useState('');
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(null);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    
    if (!fullName || !email || !phone || !organization) {
      setError('Please fill in all required fields.');
      return;
    }
    
    setLoading(true);
    
    try {
      const { error: insertError } = await supabase
        .from('sponsors')
        .insert([{
          full_name: fullName,
          email: email,
          phone: phone,
          organization: organization
        }]);
      
      if (insertError) {
        if (insertError.code === '23505') {
          setError('This email is already registered!');
        } else {
          setError('Something went wrong. Please try again.');
        }
      } else {
        setSubmitted(true);
      }
    } catch (err) {
      setError('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
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
          <div className="inline-flex w-16 h-16 bg-gradient-to-br from-violet-500/20 to-fuchsia-500/20 rounded-2xl items-center justify-center mb-6 border border-violet-400/30">
            <svg className="w-8 h-8 text-violet-300" fill="currentColor" viewBox="0 0 24 24">
              <path d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 3.077 3.397.493c.976.142 1.366 1.33.661 2.014l-2.458 2.395.58 3.383c.167.973-.854 1.72-1.732 1.259L12 13.187l-3.018 1.586c-.878.461-1.899-.286-1.732-1.259l.58-3.383-2.458-2.395c-.705-.684-.315-1.872.66-2.014l3.397-.493 1.52-3.077z" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold mb-3">Thank You!</h2>
          <p className="text-gray-300">🚀 Our team will reach out within 48 hours with the full sponsorship deck.</p>
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
          <div className="inline-flex w-14 h-14 bg-gradient-to-br from-violet-500/20 to-fuchsia-500/20 text-violet-300 rounded-2xl items-center justify-center mb-6 border border-violet-400/30">
            <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
              <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 3.077 3.397.493c.976.142 1.366 1.33.661 2.014l-2.458 2.395.58 3.383c.167.973-.854 1.72-1.732 1.259L12 13.187l-3.018 1.586c-.878.461-1.899-.286-1.732-1.259l.58-3.383-2.458-2.395c-.705-.684-.315-1.872.66-2.014l3.397-.493 1.52-3.077z" />
            </svg>
          </div>
          <h1 className="text-3xl font-bold mb-3">Become a Sponsor</h1>
          <p className="text-gray-400">Share a few quick details and our team will follow up with the full sponsorship deck for SCD 2026.</p>
        </div>

        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-300">Full Name</label>
            <input type="text" value={fullName} onChange={(e) => setFullName(e.target.value)} className="w-full bg-[#1a1a1a] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-violet-500/50 focus:ring-1 focus:ring-violet-500/50 transition-all" placeholder="Jane Doe" />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-300">Email Address</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full bg-[#1a1a1a] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-violet-500/50 focus:ring-1 focus:ring-violet-500/50 transition-all" placeholder="jane@company.com" />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-300">Phone Number</label>
            <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} className="w-full bg-[#1a1a1a] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-violet-500/50 focus:ring-1 focus:ring-violet-500/50 transition-all" placeholder="+91 9876543210" />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-300">Organization / Company Name</label>
            <input type="text" value={organization} onChange={(e) => setOrganization(e.target.value)} className="w-full bg-[#1a1a1a] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-violet-500/50 focus:ring-1 focus:ring-violet-500/50 transition-all" placeholder="Acme Cloud Labs" />
          </div>

          {error && (
            <div className="text-red-400 text-sm text-center">
              {error}
            </div>
          )}

          <div className="pt-6">
            <button disabled={loading} className={`group relative w-full inline-flex items-center justify-center gap-3 py-4 rounded-xl overflow-hidden font-semibold transition-all duration-500 active:scale-[0.99] ${loading ? 'opacity-50 cursor-not-allowed' : 'hover:scale-[1.02] shadow-[0_0_30px_rgba(139,92,246,0.35)] hover:shadow-[0_0_50px_rgba(139,92,246,0.55)]'}`}>
              <div className="absolute inset-0 bg-gradient-to-r from-violet-400 via-violet-500 to-fuchsia-500" />
              <div className="absolute inset-0 bg-gradient-to-r from-violet-300 via-violet-400 to-fuchsia-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <span className="relative text-black">{loading ? 'Submitting...' : 'Submit Inquiry'}</span>
              <svg className="relative w-5 h-5 text-black transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
            <p className="text-center text-xs text-gray-600 mt-4">Our team will reach out within 48 hours with the full sponsorship deck.</p>
          </div>
        </form>
      </motion.div>
    </div>
  );
};

export default RegisterSponsor;
