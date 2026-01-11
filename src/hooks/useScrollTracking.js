import { useState, useEffect } from 'react';
import { EXERCISE_DATA } from '../data/exercises';

/**
 * Custom hook to track scroll position and update active category
 * @returns {Object} { isScrolled, activeCategory, setActiveCategory }
 */
export const useScrollTracking = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeCategory, setActiveCategory] = useState("legs");

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

  return { isScrolled, activeCategory, setActiveCategory };
};
