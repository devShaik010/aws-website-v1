import { useState } from 'react';
import { motion } from 'framer-motion';

const CASHFREE_URL_INDIVIDUAL = 'https://payments.cashfree.com/forms/AWSCCMJCET';
const CASHFREE_URL_GROUP = 'https://payments.cashfree.com/forms/AWSCCMJCETBUNDLE';

const tiers = [
  {
    id: 'individual',
    label: 'Individual',
    price: 300,
    description: '1 person',
    cashfreeUrl: CASHFREE_URL_INDIVIDUAL,
  },
  {
    id: 'group',
    label: 'Group',
    price: 1000,
    description: 'Up to 4 people',
    cashfreeUrl: CASHFREE_URL_GROUP,
  },
];

const RegisterAttendee = () => {
  const [selectedTier, setSelectedTier] = useState(null);

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
          <h1 className="text-3xl font-bold mb-3">Student Community Day</h1>
          <p className="text-gray-400">Secure your pass for SCD 2026</p>
        </div>

        <div className="space-y-4">
          {tiers.map((tier) => {
            const isSelected = selectedTier?.id === tier.id;
            return (
              <a
                key={tier.id}
                href={tier.cashfreeUrl}
                target="_parent"
                onClick={() => setSelectedTier(tier)}
                className={`block w-full border rounded-2xl p-6 text-left transition-all duration-300 ${
                  isSelected
                    ? 'border-violet-500 bg-violet-500/10'
                    : 'border-white/10 bg-white/5 hover:border-violet-500/50 hover:bg-violet-500/5'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xl font-bold text-white">{tier.label}</p>
                    <p className="text-sm text-gray-400">{tier.description}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-violet-400">₹{tier.price}</p>
                    <p className="text-xs text-gray-500">Click to pay</p>
                  </div>
                </div>
              </a>
            );
          })}
        </div>

        <p className="text-center text-xs text-gray-500 mt-6">
          Click on a pass to proceed to payment via Cashfree
        </p>
      </motion.div>
    </div>
  );
};

export default RegisterAttendee;