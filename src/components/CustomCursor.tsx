
import React, { useState, useEffect } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updateCursorPosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
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
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div 
      className={`fixed w-6 h-6 rounded-full pointer-events-none z-50 transition-transform duration-150`}
      style={{ 
        left: `${position.x}px`, 
        top: `${position.y}px`, 
        transform: `translate(-50%, -50%) ${isHovering ? 'scale(1.5)' : ''}`,
        backgroundColor: isHovering ? '#fff' : '#000',
        mixBlendMode: isHovering ? 'difference' : 'normal',
        opacity: 1,
      }}
    />
  );
};

export default CustomCursor;
