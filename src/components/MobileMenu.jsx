import React from 'react';
import { Search, X } from 'lucide-react';
import { EXERCISE_DATA } from '../data/exercises';

const MobileMenu = ({
    isOpen,
    onClose,
    searchQuery,
    setSearchQuery,
    onCategoryClick
}) => {
    if (!isOpen) return null;

    const handleSearchKeyDown = (e) => {
        if (e.key === 'Enter' && searchQuery.trim()) {
            onClose();
            // We'll let the parent handle the scrolling logic via useEffect or similar, 
            // but here we just needed to trigger the search action visually.
            // Actually, in the original code, it did logic here.
            // Refactoring note: The search logic was identifying the section and scrolling.
            // I'll replicate that logic here or lift it entirely. 
            // For now, let's keep the logic similar but maybe cleaner.

            // Find first matching category - recreating logic here is fine for now
            // or we could pass a 'onSearch' callback.
            // Let's stick closer to original behavior but encapsulated.
            setTimeout(() => {
                // Find first matching category
                const matchingData = EXERCISE_DATA.map(cat => ({
                    ...cat,
                    exercises: cat.exercises.filter(ex =>
                        ex.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                        ex.equipment.toLowerCase().includes(searchQuery.toLowerCase())
                    )
                })).filter(cat => cat.exercises.length > 0);

                if (matchingData[0]) {
                    onCategoryClick(matchingData[0].id);
                }
            }, 150);
        }
    };

    return (
        <div className="fixed inset-0 z-50 bg-white md:hidden pt-24 px-6 animate-in slide-in-from-top-10">
            <div className="flex justify-between items-center absolute top-4 left-6 right-6">
                <span className="font-bold text-xl">Menu</span>
                <button onClick={onClose} aria-label="Close menu"><X size={28} /></button>
            </div>
            <div className="space-y-6">
                <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={18} />
                    <input
                        type="text"
                        placeholder="Search exercise..."
                        className="pl-10 pr-10 py-3 bg-gray-100 rounded-lg text-[16px] w-full focus:outline-none focus:ring-2 focus:ring-[#9E182B] transition-all"
                        style={{ fontSize: '16px' }}
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        onKeyDown={handleSearchKeyDown}
                    />
                    {searchQuery && (
                        <button
                            onClick={() => setSearchQuery('')}
                            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors p-1"
                            aria-label="Clear search"
                        >
                            <X size={18} />
                        </button>
                    )}
                </div>
                <nav className="space-y-4">
                    {EXERCISE_DATA.map((cat) => (
                        <button
                            key={cat.id}
                            onClick={() => {
                                onCategoryClick(cat.id);
                                onClose();
                            }}
                            className="block w-full text-left text-lg font-medium text-[#555555] py-2 border-b border-gray-100"
                        >
                            {cat.category}
                        </button>
                    ))}
                </nav>
            </div>
        </div>
    );
};

export default MobileMenu;
