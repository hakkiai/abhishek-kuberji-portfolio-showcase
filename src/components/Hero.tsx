
import React from 'react';
import { ArrowRight } from 'lucide-react';

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
      <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight tracking-tight">
        &lt;Abhishek Tripathi Kuberji /&gt;
      </h1>
      
      <div className="flex items-center mb-8 hover-lift">
        <div className="h-3 w-3 bg-green-500 rounded-full mr-2"></div>
        <span className="text-sm font-medium">Open to Work</span>
      </div>
      
      <div className="text-xl md:text-2xl lg:text-3xl mb-12 leading-relaxed">
        <h2 className="mb-2">
          Hello, I'm <span className="text-gray-500 font-semibold">Abhishek Tripathi Kuberji</span>
        </h2>
        <p>
          a <span className="text-gray-500 font-semibold">Frontend & UX engineer</span> focusing on <span className="text-gray-500 font-semibold">Digital Experiences</span> and Product Development that will increase <span className="text-gray-500 font-semibold">user engagement.</span>
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
