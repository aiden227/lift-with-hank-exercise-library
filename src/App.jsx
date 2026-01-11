import React, { useState } from 'react';
import { useScrollTracking } from './hooks/useScrollTracking';
import { EXERCISE_DATA } from './data/exercises';
import Header from './components/Header';
import MobileMenu from './components/MobileMenu';
import Hero from './components/Hero';
import MuscleGroupNav from './components/MuscleGroupNav';
import ExerciseCard from './components/ExerciseCard';
import Footer from './components/Footer';
import LoginScreen from './components/LoginScreen';
import { VideoModal } from './components/VideoModal'; // Note: VideoModal uses named export
import { ArrowUp, Dumbbell } from 'lucide-react';

export default function App() {
    const { isScrolled, activeCategory, setActiveCategory } = useScrollTracking();
    const [selectedExercise, setSelectedExercise] = useState(null);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const [isAuthenticated, setIsAuthenticated] = useState(() => {
        if (typeof window !== 'undefined') {
            return localStorage.getItem('lift_auth') === 'true';
        }
        return false;
    });

    const handleLogin = (password, callback) => {
        if (password === 'letslift!!!') {
            localStorage.setItem('lift_auth', 'true');
            setIsAuthenticated(true);
            callback(true);
        } else {
            callback(false);
        }
    };

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

    if (!isAuthenticated) {
        return <LoginScreen onLogin={handleLogin} />;
    }

    return (
        <div className="min-h-screen bg-[#F9FAFA] font-sans selection:bg-[#F2AFBC] selection:text-[#9E182B]">
            <Header
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
                mobileMenuOpen={mobileMenuOpen}
                setMobileMenuOpen={setMobileMenuOpen}
            />

            <MobileMenu
                isOpen={mobileMenuOpen}
                onClose={() => setMobileMenuOpen(false)}
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
                onCategoryClick={scrollToSection}
            />

            <Hero onBrowseClick={() => scrollToSection('legs')} />

            <MuscleGroupNav
                isScrolled={isScrolled}
                activeCategory={activeCategory}
                onCategoryClick={scrollToSection}
            />

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

            <Footer />

            <button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className={`fixed bottom-8 right-8 bg-[#333333] text-white p-3 rounded-full shadow-lg hover:bg-[#9E182B] transition-all duration-300 z-40 ${isScrolled ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                aria-label="Scroll to top"
            >
                <ArrowUp size={24} />
            </button>

            {selectedExercise && (
                <VideoModal
                    exercise={selectedExercise}
                    onClose={() => setSelectedExercise(null)}
                />
            )}
        </div>
    );
}
