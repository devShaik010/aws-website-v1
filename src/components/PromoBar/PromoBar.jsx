import { Link } from 'react-router-dom';

const items = [
  'AWS Student Community Day 2026',
  'Limited Early Bird Tickets',
  'May 2026  ·  MJCET Hyderabad',
  'Keynotes · Workshops · Hands-on Labs',
  'Register Now',
];

// Duplicated for a seamless infinite loop (translateX -50% wraps on the second copy).
const loop = [...items, ...items];

const PromoBar = () => (
  <Link
    to="/student-community-days"
    className="promo-bar group fixed top-0 left-0 right-0 z-[4950] h-9 block overflow-hidden bg-black/85 backdrop-blur-md border-b border-orange-500/20 hover:border-orange-500/40 transition-colors duration-300"
  >
    {/* Soft warm vignette behind the marquee */}
    <div className="absolute inset-0 bg-gradient-to-r from-[#1a0a00] via-black to-[#1a0a00] opacity-90 pointer-events-none" />
    {/* Accent hairline on top and bottom */}
    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-500/70 to-transparent pointer-events-none" />

    <div className="relative h-full flex items-center">
      <div className="promo-marquee flex items-center whitespace-nowrap will-change-transform">
        {loop.map((item, idx) => (
          <span key={idx} className="flex items-center gap-4 px-5 shrink-0">
            <span className="w-1 h-1 rounded-full bg-orange-400 shadow-[0_0_8px_rgba(251,146,60,0.8)] shrink-0" />
            <span className="text-white/90 text-[11px] md:text-xs font-medium tracking-[0.18em] uppercase">
              {item}
            </span>
          </span>
        ))}
      </div>

      {/* Edge fades for premium feel */}
      <div className="absolute top-0 bottom-0 left-0 w-16 md:w-24 bg-gradient-to-r from-black to-transparent pointer-events-none z-10" />
      <div className="absolute top-0 bottom-0 right-0 w-16 md:w-24 bg-gradient-to-l from-black to-transparent pointer-events-none z-10" />
    </div>
  </Link>
);

export default PromoBar;
