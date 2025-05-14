
import React from 'react';
import { Button } from '../components/ui/button';

interface ProjectCardProps {
  title: string;
  description: string;
  year: string;
  github: string;
  preview: string;
}

const ProjectCard = ({ title, description, year, github, preview }: ProjectCardProps) => {
  return (
    <div className="bg-black text-white rounded-xl p-6 mb-4">
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-sm mb-1">{description} - {year}</p>
      <p className="text-sm mb-4">stars: 20+</p>
      <div className="flex gap-2">
        <Button 
          variant="outline" 
          className="bg-transparent text-white border border-white rounded-full px-4 py-2 text-sm"
          asChild
        >
          <a href={preview} target="_blank" rel="noopener noreferrer">
            Preview
          </a>
        </Button>
        <Button 
          variant="outline"
          className="bg-transparent text-white border border-white rounded-full px-4 py-2 text-sm"
          asChild
        >
          <a href={github} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        </Button>
      </div>
    </div>
  );
};

export default ProjectCard;
