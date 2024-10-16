// src/components/ProjectsSection.tsx

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faMobileAlt, faCloud } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { useTheme } from '../context/ThemeContext';

function ProjectsSection() {
    const { theme } = useTheme();

    const projects = [
        {
            name: 'Projeto Web',
            description: 'Desenvolvimento de um site responsivo.',
            icon: faCode,
        },
        {
            name: 'Aplicativo Móvel',
            description: 'Criação de um aplicativo móvel para Android e iOS.',
            icon: faMobileAlt,
        },
        {
            name: 'Solução em Nuvem',
            description: 'Implementação de infraestrutura em nuvem.',
            icon: faCloud,
        },
    ];

    return (
        <section
            id="projects"
            className={`flex flex-col justify-center items-center py-12 shadow-lg mx-4 lg:mx-auto lg:w-3/4 lg:p-8 mt-32 mb-8 rounded-lg border ${
                theme === 'dark' ? 'dark-theme' : 'light-theme'
            } theme-background theme-border`}
        >
            <div className="container mx-auto text-center theme-text">
                <h2 className="text-4xl font-bold mb-12 animate-fadeIn">Nossos Projetos</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {projects.map((project) => (
                        <div
                            key={project.name}
                            className="bg-gray-800 bg-opacity-80 p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 transform hover:-translate-y-1 hover:scale-105"
                        >
                            <div className="mb-4">
                                <FontAwesomeIcon icon={project.icon} size="4x" className="animate-bounce" />
                            </div>
                            <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
                            <p className="text-gray-300">{project.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default ProjectsSection;