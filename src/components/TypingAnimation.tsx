
import React, { useState, useEffect } from 'react';

interface TypingAnimationProps {
  text1: string;
  text2: string;
  speed?: number;
}

const TypingAnimation = ({ text1, text2, speed = 100 }: TypingAnimationProps) => {
  const [displayText1, setDisplayText1] = useState('');
  const [displayText2, setDisplayText2] = useState('');
  const [isTypingFirstLine, setIsTypingFirstLine] = useState(true);
  
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
    <h2 className="text-3xl md:text-4xl font-bold mb-4">
      {displayText1}
      <br />
      {displayText2}
    </h2>
  );
};

export default TypingAnimation;
