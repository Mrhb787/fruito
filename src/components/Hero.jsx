import { useState } from 'react';
import bgImage from '@/assets/mainbg.jpg';

const Hero = () => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="relative w-full h-[20vh] min-h-[240px] bg-primary/20 rounded-b-[40px] overflow-hidden mb-4 shadow-xl">
      {/* Background Image with Blur */}
      <div
        className="absolute inset-0 bg-cover bg-center blur-[2px] scale-105"
        style={{ backgroundImage: `url(${bgImage})` }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/10 bg-gradient-to-b from-black/40 via-black/10 to-transparent"></div>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center pt-8 text-center z-10 px-8 w-full">
        <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-6 tracking-tight leading-tight drop-shadow-lg">
          Farm to Pocket. <br /> Freshness in a Tap.
        </h1>

        {/* Search Bar */}
        <div className="w-full max-w-md relative sm:max-w-lg">
          <div className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </div>
          <input
            type="text"
            placeholder="Search for 'Organic Oranges'..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full py-4 pl-14 pr-6 rounded-full bg-white text-gray-800 placeholder-gray-400 shadow-xl focus:outline-none focus:ring-4 focus:ring-secondary/30 transition-shadow text-lg font-medium"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
