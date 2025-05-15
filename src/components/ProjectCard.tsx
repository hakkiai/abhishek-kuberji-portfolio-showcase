
import React from 'react';

interface ProjectCardProps {
  title: string;
  description: string;
  year: string;
  github: string;
  preview: string;
}

const ProjectCard = ({ title, description, year, github, preview }: ProjectCardProps) => {
  return (
    <div className="bg-black text-white rounded-3xl p-6 mb-8 hover:transform hover:scale-[1.01] transition-all duration-300">
      <h3 className="text-2xl font-bold mb-2">{title}</h3>
      <p className="text-sm mb-1 opacity-70">{description} - {year}</p>
      <p className="text-sm mb-6 opacity-70">stars: 20+</p>
      <div className="flex gap-2">
        <a 
          href={preview} 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-gray-300 text-black px-6 py-2 rounded-full text-sm font-medium"
        >
          Preview
        </a>
        <a 
          href={github} 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-gray-300 text-black px-6 py-2 rounded-full text-sm font-medium"
        >
          GitHub
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
