
import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import ProjectCard from '../components/ProjectCard';
import ContactSection from '../components/ContactSection';
import TypingAnimation from '../components/TypingAnimation';

const Index = () => {
  return (
    <div className="min-h-screen bg-cream">
      <Navbar />
      <Hero />
      
      {/* Black curved section with typing animation */}
      <div className="bg-black text-white rounded-t-[50%] pt-48 pb-16 px-6 md:px-10 mt-8">
        <div className="max-w-5xl mx-auto">
          <TypingAnimation 
            text1="I build things that look good"
            text2="and actually work."
            speed={80}
          />
        </div>
      </div>
      
      {/* Recent works section */}
      <div className="bg-cream py-16 px-6 md:px-10">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Recent works</h2>
          
          <ProjectCard
            title="Id cards generation system"
            description="Web design & development"
            year="2025"
            github="https://github.com/hakkiai/id-cards-galaxy"
            preview="https://id-cards-galaxy.vercel.app/"
          />
          
          <ProjectCard
            title="Academic dashboard" 
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
