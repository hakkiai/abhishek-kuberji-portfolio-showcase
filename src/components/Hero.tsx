
import React from 'react';
import { ArrowRight } from 'lucide-react';
import TypingAnimation from './TypingAnimation';

const Hero = () => {
  const handleScroll = (e: React.MouseEvent) => {
    e.currentTarget.classList.add('animate-click');
    setTimeout(() => {
      e.currentTarget.classList.remove('animate-click');
      window.scrollTo({
        top: window.innerHeight,
        behavior: 'smooth'
      });
    }, 400);
  };

  return (
    <div className="px-6 md:px-12 lg:px-16 py-24 md:py-32 max-w-7xl mx-auto">
      <div className="mb-6">
        <TypingAnimation 
          text1="&lt;Abhishek Tripathi Kuberji /&gt;" 
          text2="" 
          speed={60}
          loopLimit={3}
        />
      </div>
      
      <div className="flex items-center mb-8">
        <div className="flex items-center bg-white px-3 py-1 rounded-full hover-lift">
          <div className="h-3 w-3 bg-green-500 rounded-full mr-2 animate-pulse"></div>
          <span className="text-sm font-medium text-black">Open to Work</span>
        </div>
      </div>
      
      <div className="text-xl md:text-2xl lg:text-3xl mb-12 leading-relaxed">
        <h2 className="mb-2">
          Hello, I'm <span className="text-gray-500 font-bold hover-lift inline-block">Abhishek Tripathi Kuberji</span>
        </h2>
        <p>
          a <span className="text-gray-500 font-bold hover-lift inline-block">Frontend & UX engineer</span> focusing on <span className="text-gray-500 font-bold hover-lift inline-block">Digital Experiences</span> and Product Development that will increase <span className="text-gray-500 font-bold hover-lift inline-block">user engagement.</span>
        </p>
      </div>

      <button 
        onClick={handleScroll}
        className="flex items-center gap-2 hover-lift"
        aria-label="Scroll down to see more"
      >
        <span className="font-medium">See my work</span>
        <ArrowRight className="animate-float" size={20} />
      </button>
    </div>
  );
};

export default Hero;
