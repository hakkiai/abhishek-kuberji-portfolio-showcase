
import React from 'react';

const Hero = () => {
  return (
    <div className="px-6 md:px-10 py-8 md:py-12">
      <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4">
        &lt;Abhishek Tripathi Kuberji /&gt;
      </h1>
      
      <div className="flex items-center mb-6">
        <div className="h-2 w-2 bg-green-500 rounded-full mr-2"></div>
        <span className="text-sm">Open to Work</span>
      </div>
      
      <div className="text-2xl md:text-3xl lg:text-4xl mb-8">
        <h2>
          Hello, I'm <span className="text-gray-400">Abhishek Tripathi Kuberji</span>
        </h2>
        <p>
          a <span className="text-gray-400">Frontend & UX engineer</span> focusing on <span className="text-gray-400">Digital Experiences</span> and Product Development that will increase <span className="text-gray-400">user engagement.</span>
        </p>
      </div>
    </div>
  );
};

export default Hero;
