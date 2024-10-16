"use client";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faProjectDiagram, faUsers, faComments, faPhone, faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const { theme, toggleTheme } = useTheme();

    useEffect(() => {
        const handleLinkClick = (event: MouseEvent) => {
            event.preventDefault();

            const target = event.target as HTMLAnchorElement;
            if (target && target.getAttribute('href')) {
                const targetId = target.getAttribute('href')!.substring(1);
                const targetElement = document.getElementById(targetId);

                if (targetElement) {
                    // Ajuste de deslocamento de 100 pixels (10 cm)
                    const offsetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - 100;

                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        };

        const navbarLinks = document.querySelectorAll('.nav-links a, .mobile-nav a') as NodeListOf<HTMLAnchorElement>;
        navbarLinks.forEach(link => link.addEventListener('click', handleLinkClick));

        return () => {
            navbarLinks.forEach(link => link.removeEventListener('click', handleLinkClick));
        };
    }, []);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const openWhatsApp = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        e.preventDefault();
        window.open("https://wa.me/5517997439573", "_blank", "noopener,noreferrer");
    };

    return (
        <nav id="navbar" className={`fixed w-full z-20 top-0 left-0 ${theme === 'dark' ? 'navbar-dark' : 'navbar-light'}`}>
            <div className="container mx-auto px-4 flex justify-between items-center py-4">
                <div className="text-2xl font-bold">
                    <a href="#home">WMSolutions</a>
                </div>
                <div className="hidden md:flex space-x-8 nav-links">
                    <a href="#home" className="hover:text-gray-300 flex flex-col items-center transition duration-200">
                        <FontAwesomeIcon icon={faHome} className="mb-1"/> Home
                    </a>
                    <a href="#projects" className="hover:text-gray-300 flex flex-col items-center transition duration-200">
                        <FontAwesomeIcon icon={faProjectDiagram} className="mb-1"/> Projetos
                    </a>
                    <a href="#team" className="hover:text-gray-300 flex flex-col items-center transition duration-200">
                        <FontAwesomeIcon icon={faUsers} className="mb-1"/> Time
                    </a>
                    <a href="#testimonials" className="hover:text-gray-300 flex flex-col items-center transition duration-200">
                        <FontAwesomeIcon icon={faComments} className="mb-1"/> Depoimentos
                    </a>
                    <a href="#" onClick={openWhatsApp} className="hover:text-gray-300 flex flex-col items-center transition duration-200">
                        <FontAwesomeIcon icon={faPhone} className="mb-1"/> Contato
                    </a>
                    <button onClick={toggleTheme} className="hover:text-gray-300 flex flex-col items-center transition duration-200">
                        <FontAwesomeIcon icon={theme === 'dark' ? faSun : faMoon} className="mb-1"/> {/* Alterna entre ícones */}
                    </button>
                </div>
                <button onClick={toggleMenu} className="md:hidden flex items-center focus:outline-none">
                    <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                        {isOpen ? (
                            <path fillRule="evenodd" clipRule="evenodd" d="M18.364 5.636a1 1 0 00-1.414-1.414L12 9.172 7.05 4.222a1 1 0 00-1.414 1.414L10.828 12l-5.192 5.192a1 1 0 001.414 1.414L12 14.828l4.95 4.95a1 1 0 001.414-1.414L13.172 12l5.192-5.192z"/>
                        ) : (
                            <path fillRule="evenodd" clipRule="evenodd" d="M4 5h16v2H4V5zm0 6h16v2H4v-2zm0 6h16v2H4v-2z"/>
                        )}
                    </svg>
                </button>
            </div>
            {isOpen && (
                <div className={`${theme === 'dark' ? 'navbar-dark' : 'navbar-light'} md:hidden mobile-nav`}>
                    <a href="#home" className="py-2 px-4 hover:text-gray-300 flex flex-col items-center border-b border-gray-700 transition duration-200" onClick={() => setIsOpen(false)}>
                        <FontAwesomeIcon icon={faHome} className="mb-1"/> Home
                    </a>
                    <a href="#projects" className="py-2 px-4 hover:text-gray-300 flex flex-col items-center border-b border-gray-700 transition duration-200" onClick={() => setIsOpen(false)}>
                        <FontAwesomeIcon icon={faProjectDiagram} className="mb-1"/> Projetos
                    </a>
                    <a href="#team" className="py-2 px-4 hover:text-gray-300 flex flex-col items-center border-b border-gray-700 transition duration-200" onClick={() => setIsOpen(false)}>
                        <FontAwesomeIcon icon={faUsers} className="mb-1"/> Time
                    </a>
                    <a href="#testimonials" className="py-2 px-4 hover:text-gray-300 flex flex-col items-center border-b border-gray-700 transition duration-200" onClick={() => setIsOpen(false)}>
                        <FontAwesomeIcon icon={faComments} className="mb-1"/> Depoimentos
                    </a>
                    <a href="https://wa.me/5517997439573" target="_blank" rel="noopener noreferrer" className="py-2 px-4 hover:text-gray-300 flex flex-col items-center border-b border-gray-700 transition duration-200" onClick={() => setIsOpen(false)}>
                        <FontAwesomeIcon icon={faPhone} className="mb-1"/> Contato
                    </a>
                    <button onClick={toggleTheme} className="py-2 px-4 hover:text-gray-300 flex flex-col items-center border-b border-gray-700 transition duration-200">
                        <FontAwesomeIcon icon={theme === 'dark' ? faSun : faMoon} className="mb-1"/> {/* Alterna entre ícones */}
                    </button>
                </div>
            )}
        </nav>
    );
}

export default Navbar;