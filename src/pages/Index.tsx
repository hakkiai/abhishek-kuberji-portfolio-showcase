
import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import ProjectCard from '../components/ProjectCard';
import ContactSection from '../components/ContactSection';
import TypingAnimation from '../components/TypingAnimation';

const Index = () => {
  // Add click animation to project cards
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const button = target.closest('button, a') as HTMLElement;
      
      if (button) {
        button.classList.add('animate-click');
        setTimeout(() => {
          button.classList.remove('animate-click');
        }, 400);
      }
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  return (
    <div className="min-h-screen bg-cream flex flex-col w-full">
      <Navbar />
      <Hero />
      
      {/* Black curved section with typing animation */}
      <div className="bg-black text-white rounded-t-[50%] pt-36 pb-24 px-6 md:px-12 lg:px-16 mt-12 w-full">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            I build things that look good and actually work.
          </h2>
        </div>
      </div>
      
      {/* Recent works section */}
      <div className="bg-cream py-24 px-6 md:px-12 lg:px-16 w-full">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold mb-12">Recent works</h2>
          
          <ProjectCard
            title="🚀 Astro Sassify Template"
            description="Web design & development"
            year="2025"
            github="https://github.com/hakkiai/id-cards-galaxy"
            preview="https://id-cards-galaxy.vercel.app/"
          />
          
          <ProjectCard
            title="🛁 Astro Zen Blog" 
            description="Web design & development"
            year="2024"
            github="https://github.com/hakkiai/stellar-performance-hub"
            preview="https://stellar-performance-hub.vercel.app/"
          />
        </div>
      </div>
      
      <ContactSection />
    </div>
  );
};

export default Index;
