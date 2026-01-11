import React from 'react';

const Hero = ({ onBrowseClick }) => (
    <div className="bg-[#333333] text-white py-12 sm:py-16 md:py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[#9E182B] opacity-10 skew-x-12 transform translate-x-1/4"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-2xl">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-poppins leading-tight mb-4 sm:mb-6">
                    Master Your <span className="text-[#F2AFBC]">Mechanics.</span>
                </h1>
                <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed mb-6 sm:mb-8">
                    "Private Training For People Who Hate Gyms, but still want to look like they go to one."
                    <br className="hidden sm:block" /><br className="hidden sm:block" />
                    <span className="block mt-3 sm:mt-0">Welcome to the vault. Search below to find detailed breakdowns of every lift in your program.</span>
                </p>
                <div className="flex gap-3 sm:gap-4">
                    <button onClick={onBrowseClick} className="bg-[#F2AFBC] text-[#9E182B] px-6 sm:px-8 py-2.5 sm:py-3 rounded font-bold hover:bg-white active:scale-95 transition-all text-sm sm:text-base">
                        Browse Library
                    </button>
                </div>
            </div>
        </div>
    </div>
);

export default Hero;
