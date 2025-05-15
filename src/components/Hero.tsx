
import React from 'react';
import { ArrowRight } from 'lucide-react';
import TypingAnimation from './TypingAnimation';
import AvatarPlaceholder from './AvatarPlaceholder';

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
    <div className="px-6 md:px-12 lg:px-16 py-24 md:py-32 w-full">
      <div className="mb-8">
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold">
          &lt;Abhishek Tripathi Kuberji /&gt;
        </h1>
      </div>
      
      <div className="flex items-center mb-10">
        <div className="bg-white px-6 py-2 rounded-full flex items-center">
          <div className="h-3 w-3 bg-green-500 rounded-full mr-3 animate-pulse"></div>
          <span className="text-gray-500 font-medium">Open to Work</span>
        </div>
      </div>
      
      <div className="flex items-start gap-4 mb-6">
        <div className="flex-1">
          <h2 className="text-4xl font-bold mb-6">
            Hello, I'm <span className="text-codeBlue font-bold">Abhishek Tripathi Kuberji</span>
          </h2>
          
          <p className="text-2xl mb-8">
            a <span className="text-codeBlue font-bold">Frontend & UX engineer</span> focusing on <span className="text-codeBlue font-bold">Digital Experiences</span> and <span className="font-bold text-black">Product Development</span> that will increase <span className="text-codeBlue font-bold">user engagement.</span>
          </p>
        </div>
        
        <div className="mt-2">
          <AvatarPlaceholder size={100} />
        </div>
      </div>

      <button 
        onClick={handleScroll}
        className="flex items-center gap-2 font-medium"
        aria-label="Scroll down to see more"
      >
        <span>See my work</span>
        <ArrowRight size={20} />
      </button>
    </div>
  );
};

export default Hero;
