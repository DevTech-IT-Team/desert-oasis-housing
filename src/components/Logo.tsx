import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'header' | 'footer';
}

export const Logo: React.FC<LogoProps> = ({ className = 'h-12', variant = 'header' }) => {
  if (variant === 'footer') {
    return (
      <div className={`flex items-center ${className}`}>
        <img
          src="/images/logo/dessert-oasis-footer.png"
          alt="Desert Oasis Housing"
          className="h-auto max-h-20 w-auto max-w-full object-contain"
        />
      </div>
    );
  }

  return (
    <div className={`flex items-center select-none ${className}`}>
      <img
        src="/images/logo/dessert-oasis.png"
        alt="Desert Oasis Housing"
        className="h-12 sm:h-14 w-auto object-contain"
      />
    </div>
  );
};
