// src/components/TestimonialsSection.tsx

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserTie, faUserCog, faUserCheck } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { useTheme } from '../context/ThemeContext';

function TestimonialsSection() {
    const { theme } = useTheme();

    const testimonials = [
        {
            name: "Ana Pereira",
            feedback: "A equipe da Agência transformou nossa visão em realidade. O software é robusto e intuitivo.",
            role: "CEO da Empresa X",
            icon: faUserTie,
        },
        {
            name: "Carlos Gomes",
            feedback: "Altamente recomendados! Suporte contínuo e atualizações constantes.",
            role: "CTO da Empresa Y",
            icon: faUserCog,
        },
        {
            name: "Fernanda Lima",
            feedback: "Profissionais excepcionais com entrega rápida e eficiente.",
            role: "Gerente de Projetos da Empresa Z",
            icon: faUserCheck,
        },
    ];

    return (
        <section
            id="testimonials"
            className={`flex flex-col justify-center items-center py-12 shadow-lg mx-4 lg:mx-auto lg:w-3/4 lg:p-8 mt-32 mb-8 rounded-lg border ${
                theme === 'dark' ? 'dark-theme' : 'light-theme'
            } theme-background theme-border`}
        >
            <div className="container mx-auto text-center theme-text">
                <h2 className="text-4xl font-bold mb-12 animate-fadeIn">Depoimentos</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial) => (
                        <div
                            key={testimonial.name}
                            className="bg-gray-800 bg-opacity-80 p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 transform hover:-translate-y-1 hover:scale-105"
                        >
                            <div className="mb-4">
                                <FontAwesomeIcon icon={testimonial.icon} size="4x" className="animate-bounce" />
                            </div>
                            <p className="italic text-lg mb-4">{`"${testimonial.feedback}"`}</p>
                            <p className="font-bold text-xl mb-2">{testimonial.name}</p>
                            <p>{testimonial.role}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default TestimonialsSection;