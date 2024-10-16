// src/components/TeamSection.tsx

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserTie, faUserNinja, faUserAstronaut } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

interface TeamMember {
    name: string;
    role: string;
    icon: IconDefinition;
    photo?: string; // url da foto
}
function TeamSection() {
    const { theme } = useTheme();

    const teamMembers: TeamMember[] = [
        {
            name: "Andrew Palmeira",
            role: "Comercial",
            icon: faUserTie,
            photo: "https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg?w=826&t=st=1729079812~exp=1729080412~hmac=b087bf6abffeb43fbfa1c6fbd4149bd6e2ae7d39e9b42fe957c8984293d7c6c9",
        },
        {
            name: "Victor Cit StanisLawski",
            role: "Desenvolvedor Back-end",
            icon: faUserNinja,
            photo: "https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg?w=826&t=st=1729079812~exp=1729080412~hmac=b087bf6abffeb43fbfa1c6fbd4149bd6e2ae7d39e9b42fe957c8984293d7c6c9"
            // sem foto fornecida
        },
        {
            name: "Flávio Wormstall Martil",
            role: "Lider Técnico",
            icon: faUserAstronaut,
            photo: "https://github.com/flaviomartil.png",
        },
    ];

    return (
        <section
            id="team"
            className={`flex flex-col justify-center items-center py-12 shadow-lg mx-4 lg:mx-auto lg:w-3/4 lg:p-8 mt-32 mb-8 rounded-lg border ${
                theme === 'dark' ? 'dark-theme' : 'light-theme'
            } theme-background theme-border`}
        >
            <div className="container mx-auto text-center theme-text">
                <h2 className="text-4xl font-bold mb-12 animate-fadeIn">Nosso Time</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {teamMembers.map((member) => (
                        <div
                            key={member.name}
                            className="bg-gray-800 bg-opacity-80 p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 transform hover:-translate-y-1 hover:scale-105"
                        >
                            <div className="mb-4">
                                {member.photo ? (
                                    <img
                                        src={member.photo}
                                        alt={member.name}
                                        className="w-24 h-24 rounded-full mx-auto"
                                    />
                                ) : (
                                    <FontAwesomeIcon icon={member.icon} size="4x" className="animate-bounce" />
                                )}
                            </div>
                            <h3 className="text-2xl font-bold mb-2">{member.name}</h3>
                            <p className="text-gray-300">{member.role}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default TeamSection;