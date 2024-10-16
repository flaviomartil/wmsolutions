'use client';
import React from 'react';
import HeroSection from '../components/HeroSection';
import ProjectsSection from '../components/ProjectsSection';
import TestimonialsSection from '../components/TestimonialsSection';
import TeamSection from '../components/TeamSection';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";


const Page = () => (
    <div>
        <Navbar/>
        <HeroSection />
        <ProjectsSection />
        <TestimonialsSection />
        <TeamSection />
          <Footer/>
    </div>
);





export default Page;