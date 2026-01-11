import React from 'react';

const Footer = () => (
    <footer className="bg-[#333333] text-white py-16 mt-20 border-t-4 border-[#9E182B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                <div>
                    <div className="flex items-center gap-2 mb-6">
                        <div className="w-8 h-8 bg-white rounded flex items-center justify-center">
                            <span className="text-[#9E182B] font-black text-lg italic">H</span>
                        </div>
                        <span className="font-bold text-lg">LIFT WITH HANK</span>
                    </div>
                    <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
                        Empowering you to lift correctly, safely, and effectively. No gym intimidation, just pure results.
                    </p>
                </div>

                <div>
                    <h4 className="font-bold text-lg mb-6 text-[#F2AFBC]">Quick Links</h4>
                    <ul className="space-y-3 text-sm text-gray-300">
                        <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">Programs</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">About Hank</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-bold text-lg mb-6 text-[#F2AFBC]">Stay Updated</h4>
                    <p className="text-gray-400 text-sm mb-4">Get the latest form tips delivered to your inbox.</p>
                    <div className="flex gap-2">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="bg-gray-800 border border-gray-700 rounded px-4 py-2 text-sm text-white focus:outline-none focus:border-[#9E182B] w-full"
                        />
                        <button className="bg-[#9E182B] px-4 py-2 rounded text-sm font-bold hover:bg-[#851323] transition-colors">
                            JOIN
                        </button>
                    </div>
                </div>
            </div>

            <div className="border-t border-gray-800 mt-12 pt-8 text-center text-xs text-gray-500 flex flex-col md:flex-row justify-between items-center">
                <p>&copy; {new Date().getFullYear()} Lift with Hank. All rights reserved.</p>
                <div className="flex gap-4 mt-4 md:mt-0">
                    <a href="#" className="hover:text-white">Privacy Policy</a>
                    <a href="#" className="hover:text-white">Terms of Service</a>
                </div>
            </div>
        </div>
    </footer>
);

export default Footer;
