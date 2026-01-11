import React from 'react';
import { Dumbbell } from 'lucide-react';
import { EXERCISE_DATA } from '../data/exercises';

const MuscleGroupNav = ({ isScrolled, activeCategory, onCategoryClick }) => (
    <div className={`sticky top-20 z-30 bg-white/95 backdrop-blur-md border-b border-gray-200 transition-all duration-300 shadow-sm ${isScrolled ? 'py-2' : 'py-4'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-2 md:pb-0">
                <span className="hidden md:flex items-center gap-2 text-sm font-bold text-[#9E182B] uppercase mr-4 whitespace-nowrap">
                    <Dumbbell size={16} /> Muscle Groups:
                </span>
                {EXERCISE_DATA.map((cat) => (
                    <button
                        key={cat.id}
                        onClick={() => onCategoryClick(cat.id)}
                        className={`px-5 py-2 rounded-full text-sm font-bold transition-all whitespace-nowrap ${activeCategory === cat.id
                            ? 'bg-[#9E182B] text-white shadow-md'
                            : 'bg-gray-100 text-[#555555] hover:bg-gray-200'
                            }`}
                    >
                        {cat.category}
                    </button>
                ))}
            </div>
        </div>
    </div>
);

export default MuscleGroupNav;
