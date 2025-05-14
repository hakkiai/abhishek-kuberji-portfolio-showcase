
import React, { useState, useEffect } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updateCursorPosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      if (
        e.target instanceof HTMLElement && 
        (e.target.tagName === 'A' || 
         e.target.tagName === 'BUTTON' || 
         e.target.closest('a') || 
         e.target.closest('button'))
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', updateCursorPosition);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', updateCursorPosition);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <div 
      className={`fixed w-8 h-8 rounded-full pointer-events-none z-50 mix-blend-difference transition-transform duration-150 ${
        isHovering ? 'scale-125 bg-white' : 'bg-black'
      }`}
      style={{ 
        left: `${position.x}px`, 
        top: `${position.y}px`, 
        transform: `translate(-50%, -50%) ${isHovering ? 'scale(1.25)' : ''}`,
      }}
    />
  );
};

export default CustomCursor;
