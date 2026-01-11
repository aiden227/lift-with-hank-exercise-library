import React from 'react';
import { Search, X, Menu } from 'lucide-react';

const Header = ({ searchQuery, setSearchQuery, mobileMenuOpen, setMobileMenuOpen }) => (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-40 h-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between">
            <div className="flex items-center gap-2 group cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                <div className="w-10 h-10 bg-[#9E182B] rounded-lg flex items-center justify-center transform group-hover:rotate-6 transition-transform">
                    <span className="text-white font-black text-xl italic">H</span>
                </div>
                <div className="flex flex-col">
                    <span className="font-bold text-[#333333] text-lg leading-none tracking-tight">LIFT WITH HANK</span>
                    <span className="text-[10px] text-[#9E182B] font-bold tracking-widest uppercase">Exercise Library</span>
                </div>
            </div>

            <div className="hidden md:flex items-center gap-6">
                <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={18} />
                    <input
                        type="text"
                        placeholder="Search exercise..."
                        className="pl-10 pr-10 py-2 bg-gray-100 rounded-full text-sm text-[#333333] focus:outline-none focus:ring-2 focus:ring-[#9E182B] transition-all w-64"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    {searchQuery && (
                        <button
                            onClick={() => setSearchQuery('')}
                            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                            aria-label="Clear search"
                        >
                            <X size={16} />
                        </button>
                    )}
                </div>
                <button className="bg-[#9E182B] text-white px-6 py-2.5 rounded-full font-bold text-sm hover:bg-[#851323] transition-colors shadow-lg shadow-[#9E182B]/20">
                    GET STARTED
                </button>
            </div>

            <button
                className="md:hidden p-2 text-[#333333]"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle mobile menu"
            >
                <Menu size={28} />
            </button>
        </div>
    </header>
);

export default Header;
