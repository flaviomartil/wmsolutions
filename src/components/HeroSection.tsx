// src/components/HeroSection.tsx

import Slider from './Slider';
import React from 'react';
import { useTheme } from '../context/ThemeContext';

function HeroSection() {
    const { theme } = useTheme();

    return (
        <section
            id="home"
            className={`flex flex-col justify-center items-center py-12 shadow-lg mx-4 lg:mx-auto lg:w-3/4 lg:p-8 mt-32 mb-8 rounded-lg border ${
                theme === 'dark' ? 'dark-theme' : 'light-theme'
            } theme-background theme-border`}
        >
            <div className="container mx-auto px-4 text-center theme-text">
                <Slider />
            </div>
        </section>
    );
}

export default HeroSection;