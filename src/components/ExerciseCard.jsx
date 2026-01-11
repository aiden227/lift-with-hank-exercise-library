import React from 'react';
import { Play, ChevronRight } from 'lucide-react';

const ExerciseCard = ({ exercise, onSelect }) => (
    <div
        onClick={() => onSelect(exercise)}
        className="group bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl hover:border-[#F2AFBC] active:scale-[0.98] transition-all duration-300 cursor-pointer flex flex-col h-full"
    >
        {/* Thumbnail */}
        <div className="relative aspect-[16/9] bg-gray-100 overflow-hidden">
            {/* Abstract Gradient Placeholder for Thumbnail */}
            <div className={`absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 group-hover:scale-105 transition-transform duration-700`}></div>
            <div className="absolute inset-0 flex items-center justify-center opacity-30 text-white font-black text-3xl sm:text-4xl tracking-tighter">
                {exercise.thumb}
            </div>

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white/90 rounded-full flex items-center justify-center opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 shadow-lg">
                    <Play fill="#9E182B" className="text-[#9E182B] ml-1" size={20} />
                </div>
            </div>

            <span className="absolute bottom-2 right-2 bg-black/60 backdrop-blur-md text-white text-xs font-bold px-2 py-1 rounded">
                {exercise.duration}
            </span>
        </div>

        {/* Content */}
        <div className="p-4 sm:p-5 flex-1 flex flex-col">
            <div className="flex justify-between items-start mb-2">
                <h3 className="font-bold text-sm sm:text-base text-[#333333] group-hover:text-[#9E182B] transition-colors line-clamp-2">
                    {exercise.title}
                </h3>
            </div>

            <div className="flex flex-wrap gap-2 mt-1 mb-3 sm:mb-4">
                <span className="text-xs font-medium text-gray-500 bg-gray-100 px-2 py-1 rounded">
                    {exercise.equipment}
                </span>
            </div>

            <div className="mt-auto pt-3 sm:pt-4 border-t border-gray-50 flex items-center text-[#9E182B] text-xs sm:text-sm font-semibold group-hover:translate-x-1 transition-transform duration-300">
                Watch Tutorial <ChevronRight size={16} />
            </div>
        </div>
    </div>
);

export default ExerciseCard;
