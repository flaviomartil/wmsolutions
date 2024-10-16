"use client";

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { useTheme } from '../context/ThemeContext'; // Certifique-se de importar o contexto do tema

function Footer() {
    const openInNewTab = (url: string) => {
        window.open(url, '_blank', 'noopener,noreferrer');
    };

    const { theme } = useTheme(); // Obtém o tema atual

    return (
        <footer className={`py-8 mt-12 transition-colors duration-300 ${theme === 'dark' ? 'footer-dark' : 'footer-light'}`}>
            <div className="container mx-auto text-center theme-text">
                <div className="flex justify-center space-x-6 mb-4">
                    <a
                        href="#"
                        onClick={(e) => { e.preventDefault(); openInNewTab('https://facebook.com/flaviomartil'); }}
                        className="hover:text-gray-400"
                    >
                        <FontAwesomeIcon icon={faFacebook} size="2x" />
                    </a>
                    <a
                        href="#"
                        onClick={(e) => { e.preventDefault(); openInNewTab('https://www.linkedin.com/in/flavio-martil/'); }}
                        className="hover:text-gray-400"
                    >
                        <FontAwesomeIcon icon={faLinkedin} size="2x" />
                    </a>
                    <a
                        href="#"
                        onClick={(e) => { e.preventDefault(); openInNewTab('https://www.instagram.com/flaviowmartil/'); }}
                        className="hover:text-gray-400"
                    >
                        <FontAwesomeIcon icon={faInstagram} size="2x" />
                    </a>
                </div>
                <p className="mb-2">
                    &copy; {new Date().getFullYear()} WmSolutions. Todos os direitos reservados.
                </p>
                <p>
                    Desenvolvido por <span className="font-semibold">WmSolutions Team</span>.
                </p>
            </div>
        </footer>
    );
}

export default Footer;