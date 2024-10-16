'use client';
import React from 'react';
import { useTheme, ThemeProvider } from '../context/ThemeContext';

interface ThemeManagerProps {
    children: React.ReactNode;
}

const ThemeManager: React.FC<ThemeManagerProps> = ({ children }) => {
    const { theme } = useTheme();

    return (
        <body className={`${theme === 'dark' ? 'dark-theme' : 'light-theme'} antialiased`}>
        {children}
        </body>
    );
}

const ThemeManagerWrapper: React.FC<ThemeManagerProps> = ({ children }) => {
    return (
        <ThemeProvider>
            <ThemeManager>
                {children}
            </ThemeManager>
        </ThemeProvider>
    );
}

export default ThemeManagerWrapper;