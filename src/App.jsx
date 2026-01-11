import React, { useState, useEffect } from 'react';
import { Play, X, ChevronRight, Search, Menu, Dumbbell, Info, ArrowUp } from 'lucide-react';

// --- Brand Colors & Config ---
// Maroon: #9E182B
// Pink: #F2AFBC
// Red: #D63637
// Dark Gray: #333333
// Off-White: #F9FAFA

const EXERCISE_DATA = [
    {
        category: "Legs",
        id: "legs",
        description: "Build a strong foundation. Focus on knee stability and hip drive.",
        exercises: [
            { id: 1, title: "Barbell Back Squat", level: "Compound", equipment: "Barbell", duration: "2:14", thumb: "SQ" },
            { id: 2, title: "Romanian Deadlift", level: "Intermediate", equipment: "Barbell", duration: "1:45", thumb: "RDL" },
            { id: 3, title: "Bulgarian Split Squat", level: "Advanced", equipment: "Dumbbells", duration: "3:10", thumb: "BSS" },
            { id: 4, title: "Leg Press", level: "Beginner", equipment: "Machine", duration: "1:20", thumb: "LP" },
            { id: 5, title: "Goblet Squat", level: "Beginner", equipment: "Dumbbell", duration: "1:55", thumb: "GS" },
        ]
    },
    {
        category: "Back",
        id: "back",
        description: "Develop a wide, thick back. Critical for posture and pulling strength.",
        exercises: [
            { id: 6, title: "Pull-Up Mechanics", level: "Advanced", equipment: "Bodyweight", duration: "4:05", thumb: "PU" },
            { id: 7, title: "Single Arm Row", level: "Intermediate", equipment: "Dumbbell", duration: "2:30", thumb: "SAR" },
            { id: 8, title: "Lat Pulldown", level: "Beginner", equipment: "Machine", duration: "1:50", thumb: "LPD" },
            { id: 9, title: "Face Pulls", level: "All Levels", equipment: "Cable", duration: "2:10", thumb: "FP" },
        ]
    },
    {
        category: "Chest",
        id: "chest",
        description: "Pushing mechanics. Keep shoulders retracted and drive through.",
        exercises: [
            { id: 10, title: "Barbell Bench Press", level: "Compound", equipment: "Barbell", duration: "3:30", thumb: "BP" },
            { id: 11, title: "Incline Dumbbell Press", level: "Intermediate", equipment: "Dumbbells", duration: "2:45", thumb: "IDP" },
            { id: 12, title: "Cable Fly", level: "Isolation", equipment: "Cable", duration: "1:30", thumb: "CF" },
        ]
    },
    {
        category: "Shoulders",
        id: "shoulders",
        description: "Complete shoulder health. Front, lateral, and rear deltoid work.",
        exercises: [
            { id: 13, title: "Overhead Press", level: "Compound", equipment: "Barbell", duration: "2:50", thumb: "OHP" },
            { id: 14, title: "Lateral Raise", level: "Isolation", equipment: "Dumbbells", duration: "1:40", thumb: "LR" },
            { id: 15, title: "Arnold Press", level: "Intermediate", equipment: "Dumbbells", duration: "2:15", thumb: "AP" },
        ]
    },
    {
        category: "Arms",
        id: "arms",
        description: "Biceps and Triceps isolation for functional arm strength.",
        exercises: [
            { id: 16, title: "Hammer Curls", level: "Beginner", equipment: "Dumbbells", duration: "1:15", thumb: "HC" },
            { id: 17, title: "Skullcrushers", level: "Intermediate", equipment: "EZ Bar", duration: "1:55", thumb: "SC" },
            { id: 18, title: "Tricep Pushdown", level: "Beginner", equipment: "Cable", duration: "1:10", thumb: "TP" },
        ]
    },
    {
        category: "Core",
        id: "core",
        description: "Stability and anti-rotation. Protect your spine.",
        exercises: [
            { id: 19, title: "Dead Bug", level: "Beginner", equipment: "Bodyweight", duration: "2:00", thumb: "DB" },
            { id: 20, title: "Plank Variations", level: "All Levels", equipment: "Bodyweight", duration: "3:15", thumb: "PV" },
            { id: 21, title: "Pallof Press", level: "Intermediate", equipment: "Cable", duration: "1:45", thumb: "PP" },
        ]
    }
];

// --- Components ---

const VideoModal = ({ exercise, onClose }) => {
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
                                In this video, we break down the {exercise.title.toLowerCase()}. We'll focus on the setup,
                                the eccentric (lowering) phase, and the concentric (lifting) phase. Pay special attention
                                to the cue markers at 0:45 regarding spine neutrality.
                            </p>

                            <div className="mt-4 sm:mt-6 p-3 sm:p-4 bg-white rounded-xl border border-gray-200">
                                <h5 className="text-xs sm:text-sm font-bold text-[#9E182B] uppercase tracking-wide mb-2 flex items-center gap-2">
                                    <Info size={14} className="sm:w-4 sm:h-4" /> Hank's Pro Tip
                                </h5>
                                <p className="text-xs sm:text-sm text-gray-600 italic leading-relaxed">
                                    "Don't rush the movement. Control the weight, don't let the weight control you.
                                    Imagine you are pulling yourself down to the bar, rather than lowering it."
                                </p>
                            </div>
                        </div>

                        <div className="mt-6 sm:mt-8 flex justify-stretch sm:justify-end">
                            <button className="w-full sm:w-auto px-6 py-3 bg-[#9E182B] text-white font-bold text-sm sm:text-base rounded-lg hover:bg-[#851323] active:scale-95 transition-all shadow-md shadow-red-900/10">
                                Mark as Watched
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

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

export default function App() {
    const [activeCategory, setActiveCategory] = useState("legs");
    const [selectedExercise, setSelectedExercise] = useState(null);
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");

    // Handle scroll for sticky nav styling
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 100);

            // Auto-update active category based on scroll position
            const sections = EXERCISE_DATA.map(cat => document.getElementById(cat.id));
            const scrollPosition = window.scrollY + 200; // Offset for sticky header

            sections.forEach(section => {
                if (section && section.offsetTop <= scrollPosition && (section.offsetTop + section.offsetHeight) > scrollPosition) {
                    setActiveCategory(section.id);
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            const offset = 140; // Height of headers
            const bodyRect = document.body.getBoundingClientRect().top;
            const elementRect = element.getBoundingClientRect().top;
            const elementPosition = elementRect - bodyRect;
            const offsetPosition = elementPosition - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
            setActiveCategory(id);
            setMobileMenuOpen(false);
        }
    };

    const filteredData = EXERCISE_DATA.map(cat => ({
        ...cat,
        exercises: cat.exercises.filter(ex =>
            ex.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            ex.equipment.toLowerCase().includes(searchQuery.toLowerCase())
        )
    })).filter(cat => cat.exercises.length > 0);

    return (
        <div className="min-h-screen bg-[#F9FAFA] font-sans selection:bg-[#F2AFBC] selection:text-[#9E182B]">
            {/* --- Main Navigation Header --- */}
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
                    >
                        <Menu size={28} />
                    </button>
                </div>
            </header>

            {/* --- Mobile Menu --- */}
            {mobileMenuOpen && (
                <div className="fixed inset-0 z-50 bg-white md:hidden pt-24 px-6 animate-in slide-in-from-top-10">
                    <div className="flex justify-between items-center absolute top-4 left-6 right-6">
                        <span className="font-bold text-xl">Menu</span>
                        <button onClick={() => setMobileMenuOpen(false)}><X size={28} /></button>
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
                                onKeyDown={(e) => {
                                    if (e.key === 'Enter' && searchQuery.trim()) {
                                        // Close menu and show results when user presses Enter
                                        setMobileMenuOpen(false);
                                        // Small delay to let menu close, then scroll to content
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
                                                scrollToSection(matchingData[0].id);
                                            }
                                        }, 150);
                                    }
                                }}
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
                                    onClick={() => scrollToSection(cat.id)}
                                    className="block w-full text-left text-lg font-medium text-[#555555] py-2 border-b border-gray-100"
                                >
                                    {cat.category}
                                </button>
                            ))}
                        </nav>
                    </div>
                </div>
            )}

            {/* --- Hero Section --- */}
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
                            <button onClick={() => scrollToSection('legs')} className="bg-[#F2AFBC] text-[#9E182B] px-6 sm:px-8 py-2.5 sm:py-3 rounded font-bold hover:bg-white active:scale-95 transition-all text-sm sm:text-base">
                                Browse Library
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* --- Sticky Muscle Group Nav --- */}
            <div className={`sticky top-20 z-30 bg-white/95 backdrop-blur-md border-b border-gray-200 transition-all duration-300 shadow-sm ${isScrolled ? 'py-2' : 'py-4'}`}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-2 md:pb-0">
                        <span className="hidden md:flex items-center gap-2 text-sm font-bold text-[#9E182B] uppercase mr-4 whitespace-nowrap">
                            <Dumbbell size={16} /> Muscle Groups:
                        </span>
                        {EXERCISE_DATA.map((cat) => (
                            <button
                                key={cat.id}
                                onClick={() => scrollToSection(cat.id)}
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

            {/* --- Main Content --- */}
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-12 sm:space-y-20">

                {filteredData.length === 0 && (
                    <div className="text-center py-12 sm:py-20">
                        <Dumbbell size={40} className="sm:w-12 sm:h-12 mx-auto text-gray-300 mb-4" />
                        <h3 className="text-lg sm:text-xl font-bold text-gray-400">No exercises found</h3>
                        <p className="text-sm sm:text-base text-gray-400">Try adjusting your search terms.</p>
                    </div>
                )}

                {filteredData.map((category) => (
                    <section key={category.id} id={category.id} className="scroll-mt-48">
                        <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 sm:mb-8 pb-3 sm:pb-4 border-b border-gray-200">
                            <div>
                                <h2 className="text-2xl sm:text-3xl font-bold text-[#333333] font-poppins flex items-center gap-3">
                                    {category.category}
                                </h2>
                                <p className="text-sm sm:text-base text-[#555555] mt-2 max-w-xl">
                                    {category.description}
                                </p>
                            </div>
                            <div className="mt-2 md:mt-0 text-xs sm:text-sm font-semibold text-[#9E182B]">
                                {category.exercises.length} Video{category.exercises.length !== 1 ? 's' : ''}
                            </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
                            {category.exercises.map((exercise) => (
                                <ExerciseCard
                                    key={exercise.id}
                                    exercise={exercise}
                                    onSelect={setSelectedExercise}
                                />
                            ))}
                        </div>
                    </section>
                ))}

            </main>

            {/* --- Footer --- */}
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

            {/* --- Floating Action Button (Scroll to top) --- */}
            <button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className={`fixed bottom-8 right-8 bg-[#333333] text-white p-3 rounded-full shadow-lg hover:bg-[#9E182B] transition-all duration-300 z-40 ${isScrolled ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            >
                <ArrowUp size={24} />
            </button>

            {/* --- Video Modal --- */}
            {selectedExercise && (
                <VideoModal
                    exercise={selectedExercise}
                    onClose={() => setSelectedExercise(null)}
                />
            )}
        </div>
    );
}
