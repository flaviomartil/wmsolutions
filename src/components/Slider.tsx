'use client';

import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptopCode, faProjectDiagram, faHeadset, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const Slider = () => {
    const [indiceAtual, setIndiceAtual] = useState(0);
    const itens = [
        {
            icone: faLaptopCode,
            titulo: 'Soluções de Software Sob Medida',
            descricao: 'Transforme suas ideias em realidade com nossa equipe experiente.'
        },
        {
            icone: faProjectDiagram,
            titulo: 'Desenvolvimento Ágil',
            descricao: 'Entregamos projetos com qualidade e rapidez.'
        },
        {
            icone: faHeadset,
            titulo: 'Suporte Contínuo',
            descricao: 'Nossa equipe está sempre disponível para ajudar.'
        }
    ];

    useEffect(() => {
        const intervalId = setInterval(() => {
            setIndiceAtual((indiceAtual + 1) % itens.length);
        }, 5000);

        return () => clearInterval(intervalId);
    }, [indiceAtual, itens.length]);

    const prevSlide = () => {
        setIndiceAtual((indiceAtual - 1 + itens.length) % itens.length);
    };

    const nextSlide = () => {
        setIndiceAtual((indiceAtual + 1) % itens.length);
    };

    return (
        <div className="relative w-full mt-2 h-64 md:h-80 lg:h-96 overflow-hidden rounded-lg shadow-lg bg-gradient-to-r from-[#070715] via-[#2a2a34] to-[#070715]">
            <div className="absolute inset-0 flex flex-col justify-center items-center text-white p-6 text-center bg-gradient-to-r from-[#070715] via-[#2a2a34] to-[#070715] bg-opacity-90">
                <FontAwesomeIcon icon={itens[indiceAtual].icone} size="3x" className="mb-4 text-white" />
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2 text-white">{itens[indiceAtual].titulo}</h1>
                <p className="text-sm md:text-base lg:text-lg text-white">{itens[indiceAtual].descricao}</p>
            </div>
            <button
                onClick={prevSlide}
                className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full focus:outline-none"
            >
                <FontAwesomeIcon icon={faChevronLeft} />
            </button>
            <button
                onClick={nextSlide}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full focus:outline-none"
            >
                <FontAwesomeIcon icon={faChevronRight} />
            </button>
        </div>
    );
};

export default Slider;