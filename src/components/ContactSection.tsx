
import React from 'react';
import { Button } from '../components/ui/button';

const ContactSection = () => {
  return (
    <div className="bg-darkGreen text-white py-16 px-6 md:px-10">
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8">
        Every connection starts with a simple "Hello!"
      </h2>
      <Button 
        className="bg-white text-darkGreen hover:bg-gray-100 rounded-full px-6 py-2 font-medium"
        asChild
      >
        <a href="mailto:abhishektripathikuberji@gmail.com">Get in touch</a>
      </Button>
      <div className="border-t border-white/30 mt-12 pt-4 flex flex-col md:flex-row justify-between">
        <div>
          <p className="text-sm">&lt;Abhishek Tripathi /&gt;</p>
          <div className="flex items-center my-2">
            <p className="text-sm">abhishektripathikuberji@gmail.com</p>
            <span className="text-xs ml-2 cursor-pointer">(click to copy)</span>
          </div>
        </div>
        <div className="flex flex-col md:flex-row md:items-center space-y-2 md:space-y-0 md:space-x-6 mt-4 md:mt-0">
          <div className="flex flex-col">
            <a href="https://github.com/hakkiai" target="_blank" rel="noopener noreferrer" className="text-sm">GitHub</a>
            <a href="https://www.linkedin.com/in/abhishek-tripathi-kuberji-a33502224/" target="_blank" rel="noopener noreferrer" className="text-sm">LinkedIn</a>
          </div>
          <div className="flex flex-col">
            <a href="/" className="text-sm">Work</a>
            <a href="/" className="text-sm">Blog</a>
            <a href="/" className="text-sm">Contact</a>
          </div>
        </div>
      </div>
      <p className="text-sm mt-8 text-center md:text-right">©2025 Abhishek Tripathi. All rights reserved.</p>
    </div>
  );
};

export default ContactSection;
