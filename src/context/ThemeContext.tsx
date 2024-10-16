'use client';
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Theme = 'dark' | 'light';

interface ThemeContextType {
    theme: Theme;
    toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [theme, setTheme] = useState<Theme>('light'); // Tema padrão inicial é 'light'

    // useEffect para pegar o tema do localStorage apenas no lado do cliente
    useEffect(() => {
        if (typeof window !== 'undefined') { // Check to ensure we're on the client side
            const storedTheme = localStorage.getItem('theme') as Theme;
            if (storedTheme) {
                setTheme(storedTheme);
            }
        }
    }, []);

    // useEffect para salvar o tema no localStorage sempre que ele mudar
    useEffect(() => {
        if (typeof window !== 'undefined') { // Check to ensure we're on the client side
            localStorage.setItem('theme', theme);
        }
    }, [theme]);

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = (): ThemeContextType => {
    const context = useContext(ThemeContext);
    if (context === undefined) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
};