import { useState } from 'react';
import { motion } from 'framer-motion';
import { supabase } from '../supabaseClient';

const RegisterSpeaker = () => {
  const [fullName, setFullName] = useState('');
  const [gender, setGender] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [linkedinUrl, setLinkedinUrl] = useState('');
  const [topic1, setTopic1] = useState('');
  const [topic2, setTopic2] = useState('');
  const [topic3, setTopic3] = useState('');
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(null);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    
    if (!fullName || !gender || !phone || !email || !linkedinUrl || !topic1 || !topic2 || !topic3) {
      setError('Please fill in all required fields.');
      return;
    }
    
    setLoading(true);
    
    try {
      const { error: insertError } = await supabase
        .from('speakers')
        .insert([{
          full_name: fullName,
          gender: gender,
          phone: phone,
          email: email,
          linkedin_url: linkedinUrl,
          topic_1: topic1,
          topic_2: topic2,
          topic_3: topic3
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
          className="w-full max-w-2xl bg-[#111] border border-white/10 rounded-[2rem] p-8 md:p-12 shadow-2xl text-center"
        >
          <div className="inline-flex w-16 h-16 bg-fuchsia-500/10 text-fuchsia-400 rounded-2xl items-center justify-center mb-6 border border-fuchsia-500/20">
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold mb-3">Submission Received!</h2>
          <p className="text-gray-300">✅ We will review your submission and contact you via email.</p>
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
        className="w-full max-w-2xl bg-[#111] border border-white/10 rounded-[2rem] p-8 md:p-12 shadow-2xl"
      >
        <div className="mb-10 text-center">
           <div className="inline-flex w-14 h-14 bg-fuchsia-500/10 text-fuchsia-400 rounded-2xl items-center justify-center mb-6 border border-fuchsia-500/20">
            <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
            </svg>
          </div>
          <h1 className="text-3xl font-bold mb-3">Call for Speakers</h1>
          <p className="text-gray-400">Submit your session proposal for Student Community Day.</p>
        </div>

        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-300">Full Name</label>
              <input type="text" value={fullName} onChange={(e) => setFullName(e.target.value)} className="w-full bg-[#1a1a1a] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-fuchsia-500/50 focus:ring-1 focus:ring-fuchsia-500/50 transition-all" placeholder="Jane Doe" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-300">Gender</label>
              <select value={gender} onChange={(e) => setGender(e.target.value)} className="w-full bg-[#1a1a1a] border border-white/10 rounded-xl px-4 py-3 text-gray-300 focus:outline-none focus:border-fuchsia-500/50 focus:ring-1 focus:ring-fuchsia-500/50 transition-all appearance-none cursor-pointer">
                <option value="" disabled>Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
                <option value="prefer_not_to_say">Prefer not to say</option>
              </select>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-300">Phone Number</label>
              <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} className="w-full bg-[#1a1a1a] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-fuchsia-500/50 focus:ring-1 focus:ring-fuchsia-500/50 transition-all" placeholder="+91 9876543210" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-300">Email Address</label>
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full bg-[#1a1a1a] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-fuchsia-500/50 focus:ring-1 focus:ring-fuchsia-500/50 transition-all" placeholder="speaker@example.com" />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-300">LinkedIn Profile</label>
            <input type="url" value={linkedinUrl} onChange={(e) => setLinkedinUrl(e.target.value)} className="w-full bg-[#1a1a1a] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-fuchsia-500/50 focus:ring-1 focus:ring-fuchsia-500/50 transition-all" placeholder="https://linkedin.com/in/username" />
          </div>

          <div className="pt-4 pb-2">
             <div className="bg-fuchsia-500/10 border border-fuchsia-500/20 rounded-xl p-4 flex gap-4">
                <svg className="w-6 h-6 text-fuchsia-400 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="text-sm text-fuchsia-200/90 leading-relaxed">
                   Please provide 3 topics you are most skilled at and would be interested in speaking about during the Student Community Day. This helps us curate the best sessions.
                </p>
             </div>
          </div>

          <div className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-300">Topic 1</label>
              <input type="text" value={topic1} onChange={(e) => setTopic1(e.target.value)} className="w-full bg-[#1a1a1a] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-fuchsia-500/50 focus:ring-1 focus:ring-fuchsia-500/50 transition-all" placeholder="e.g., Scaling Serverless Architectures" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-300">Topic 2</label>
              <input type="text" value={topic2} onChange={(e) => setTopic2(e.target.value)} className="w-full bg-[#1a1a1a] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-fuchsia-500/50 focus:ring-1 focus:ring-fuchsia-500/50 transition-all" placeholder="e.g., Cloud Security Best Practices" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-300">Topic 3</label>
              <input type="text" value={topic3} onChange={(e) => setTopic3(e.target.value)} className="w-full bg-[#1a1a1a] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-fuchsia-500/50 focus:ring-1 focus:ring-fuchsia-500/50 transition-all" placeholder="e.g., AI/ML with Amazon Bedrock" />
            </div>
          </div>

          {error && (
            <div className="text-red-400 text-sm text-center">
              {error}
            </div>
          )}

          <div className="pt-6">
            <button disabled={loading} className={`w-full bg-white text-black font-semibold py-4 rounded-xl transition-colors ${loading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-200'}`}>
              {loading ? 'Submitting...' : 'Submit Proposal'}
            </button>
            <p className="text-center text-xs text-gray-600 mt-4">We will review your submission and contact you via email.</p>
          </div>
        </form>
      </motion.div>
    </div>
  );
};


export default RegisterSpeaker;