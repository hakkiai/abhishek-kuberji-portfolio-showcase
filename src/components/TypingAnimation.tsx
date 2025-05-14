
import React, { useState, useEffect } from 'react';

interface TypingAnimationProps {
  text1: string;
  text2: string;
  speed?: number;
}

const TypingAnimation = ({ text1, text2, speed = 80 }: TypingAnimationProps) => {
  const [displayText1, setDisplayText1] = useState('');
  const [displayText2, setDisplayText2] = useState('');
  const [isTypingFirstLine, setIsTypingFirstLine] = useState(true);
  const [showCursor, setShowCursor] = useState(true);
  
  // Blinking cursor effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);
    
    return () => clearInterval(cursorInterval);
  }, []);
  
  // Typing effect
  useEffect(() => {
    if (isTypingFirstLine) {
      if (displayText1.length < text1.length) {
        const timeout = setTimeout(() => {
          setDisplayText1(text1.slice(0, displayText1.length + 1));
        }, speed);
        return () => clearTimeout(timeout);
      } else {
        setIsTypingFirstLine(false);
      }
    } else {
      if (displayText2.length < text2.length) {
        const timeout = setTimeout(() => {
          setDisplayText2(text2.slice(0, displayText2.length + 1));
        }, speed);
        return () => clearTimeout(timeout);
      }
    }
  }, [displayText1, displayText2, isTypingFirstLine, text1, text2, speed]);

  return (
    <div className="relative">
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
        <div className="flex items-center">
          <span>{displayText1}</span>
          {isTypingFirstLine && showCursor && (
            <span className="inline-block w-[3px] h-8 bg-white ml-1"></span>
          )}
        </div>
        <div className="flex items-center mt-2">
          <span>{displayText2}</span>
          {!isTypingFirstLine && showCursor && (
            <span className="inline-block w-[3px] h-8 bg-white ml-1"></span>
          )}
        </div>
      </h2>
    </div>
  );
};

export default TypingAnimation;
