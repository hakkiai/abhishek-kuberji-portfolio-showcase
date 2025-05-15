
import React from 'react';

interface AvatarPlaceholderProps {
  size?: number;
}

const AvatarPlaceholder: React.FC<AvatarPlaceholderProps> = ({ size = 100 }) => {
  return (
    <div 
      className="rounded-full bg-gray-200 flex items-center justify-center overflow-hidden animate-float"
      style={{ width: size, height: size }}
    >
      <svg width={size} height={size} viewBox="0 0 100 100">
        <circle cx="50" cy="35" r="22" fill="#333" />
        <rect x="20" y="70" width="60" height="30" rx="10" fill="#333" />
      </svg>
    </div>
  );
};

export default AvatarPlaceholder;
