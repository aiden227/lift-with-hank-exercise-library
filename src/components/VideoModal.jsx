import { useEffect } from 'react';
import { Play, X, Info } from 'lucide-react';

/**
 * VideoModal component - displays exercise video and details in a modal
 * @param {Object} exercise - Exercise object with title, level, equipment, duration
 * @param {Function} onClose - Callback to close the modal
 */
export const VideoModal = ({ exercise, onClose }) => {
  useEffect(() => {
    // Prevent body scroll when modal is open (important for mobile)
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  if (!exercise) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      {/* Mobile: slide up from bottom, Desktop: centered modal */}
      <div className="bg-white w-full sm:w-[95%] sm:max-w-4xl sm:rounded-2xl rounded-t-3xl overflow-hidden shadow-2xl relative max-h-[95vh] sm:max-h-[90vh] flex flex-col animate-in slide-in-from-bottom sm:slide-in-from-bottom-0 duration-300">
        {/* Header - Sticky on mobile */}
        <div className="flex justify-between items-center p-4 sm:p-5 border-b border-gray-100 bg-white sticky top-0 z-10 flex-shrink-0">
          <h3 className="text-lg sm:text-xl font-bold text-[#9E182B] font-poppins pr-2 line-clamp-2">{exercise.title}</h3>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors flex-shrink-0"
            aria-label="Close modal"
          >
            <X size={24} className="text-gray-500" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="overflow-y-auto flex-1">
          {/* Video Placeholder */}
          <div className="aspect-video bg-black flex items-center justify-center relative group cursor-pointer">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1470&auto=format&fit=crop')] bg-cover bg-center opacity-60"></div>
            <button className="relative z-10 w-16 h-16 sm:w-20 sm:h-20 bg-[#9E182B] rounded-full flex items-center justify-center shadow-lg transform group-hover:scale-110 active:scale-95 transition-transform duration-300">
              <Play fill="white" className="text-white ml-1" size={28} />
            </button>
            <span className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 bg-black/70 text-white px-2 py-1 text-xs sm:text-sm rounded font-medium">
              {exercise.duration}
            </span>
          </div>

          {/* Content */}
          <div className="p-4 sm:p-6 md:p-8 bg-[#F9FAFA]">
            <div className="flex flex-wrap gap-2 sm:gap-3 mb-4 sm:mb-6">
              <span className="px-3 py-1 bg-[#F2AFBC]/30 text-[#9E182B] text-xs sm:text-sm font-semibold rounded-full border border-[#F2AFBC]">
                {exercise.level}
              </span>
              <span className="px-3 py-1 bg-gray-200 text-gray-700 text-xs sm:text-sm font-semibold rounded-full">
                {exercise.equipment}
              </span>
            </div>

            <div className="space-y-3 sm:space-y-4">
              <h4 className="text-base sm:text-lg font-bold text-[#333333]">Mechanics Breakdown</h4>
              <p className="text-sm sm:text-base text-[#555555] leading-relaxed">
                {exercise.mechanics || "Mechanics breakdown coming soon."}
              </p>

              <div className="mt-4 sm:mt-6 p-3 sm:p-4 bg-white rounded-xl border border-gray-200">
                <h5 className="text-xs sm:text-sm font-bold text-[#9E182B] uppercase tracking-wide mb-2 flex items-center gap-2">
                  <Info size={14} className="sm:w-4 sm:h-4" /> Hank's Pro Tip
                </h5>
                <p className="text-xs sm:text-sm text-gray-600 italic leading-relaxed">
                  "{exercise.proTip || "Keep training hard!"}"
                </p>
              </div>
            </div>
          </div>


        </div>
      </div>
    </div>
  );
};
