
import React, { useState } from 'react';
import { Button } from '../components/ui/button';
import { toast } from "../hooks/use-toast";

const ContactSection = () => {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("abhishektripathikuberji@gmail.com");
    setCopied(true);
    toast({
      title: "Email copied!",
      description: "Email address copied to clipboard",
    });
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-darkGreen text-white py-16 px-6 md:px-10">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8">
          Every connection starts with a simple "Hello!"
        </h2>
        <Button 
          className="bg-white text-darkGreen hover:bg-gray-100 rounded-full px-6 py-2 font-medium"
          asChild
        >
          <a href="mailto:abhishektripathikuberji@gmail.com">Get in touch</a>
        </Button>
        
        <div className="border-t border-white/30 mt-12 pt-6 flex flex-col md:flex-row justify-between">
          <div>
            <p className="text-sm mb-3">&lt;Abhishek Tripathi Kuberji /&gt;</p>
            <div className="flex items-center mb-4">
              <p className="text-sm">abhishektripathikuberji@gmail.com</p>
              <button 
                onClick={copyEmail} 
                className="text-xs ml-2 underline hover:text-gray-200 transition"
              >
                {copied ? "(copied)" : "(click to copy)"}
              </button>
            </div>
          </div>
          <div className="flex flex-col md:flex-row md:items-start gap-6 mt-6 md:mt-0">
            <div className="flex flex-col gap-2">
              <a href="https://github.com/hakkiai" target="_blank" rel="noopener noreferrer" className="text-sm hover:underline">GitHub</a>
              <a href="https://www.linkedin.com/in/abhishek-tripathi-kuberji-a33502224/" target="_blank" rel="noopener noreferrer" className="text-sm hover:underline">LinkedIn</a>
            </div>
            <div className="flex flex-col gap-2">
              <a href="/" className="text-sm hover:underline">Work</a>
              <a href="/" className="text-sm hover:underline">Blog</a>
              <a href="/" className="text-sm hover:underline">Contact</a>
            </div>
          </div>
        </div>
        <p className="text-sm mt-8 text-center md:text-right">©2025 Abhishek Tripathi Kuberji. All rights reserved.</p>
      </div>
    </div>
  );
};

export default ContactSection;
