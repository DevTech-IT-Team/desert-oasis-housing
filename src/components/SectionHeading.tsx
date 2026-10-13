import React from 'react';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  alignment?: 'center' | 'left';
  inverted?: boolean;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow,
  title,
  subtitle,
  alignment = 'center',
  inverted = false,
}) => {
  const isCenter = alignment === 'center';

  return (
    <div className={`max-w-3xl mb-14 ${isCenter ? 'mx-auto text-center' : 'text-left'}`}>
      {eyebrow && (
        <div className={`inline-flex items-center gap-2 px-3.5 py-1 mb-3.5 rounded-full text-xs font-semibold uppercase tracking-[0.18em] ${
          inverted 
            ? 'bg-[#8A1C36]/30 text-[#F7E8EB] border border-[#8A1C36]/50' 
            : 'bg-[#8A1C36]/10 text-[#8A1C36] border border-[#8A1C36]/25'
        }`}>
          <span className="w-1.5 h-1.5 rounded-full bg-[#8A1C36] inline-block animate-pulse"></span>
          {eyebrow}
        </div>
      )}

      <h2 className={`font-serif text-3xl sm:text-4xl lg:text-[2.6rem] leading-[1.18] tracking-tight ${
        inverted ? 'text-white' : 'text-[#14293A]'
      }`}>
        {title}
      </h2>

      {/* Decorative Burgundy Accent Bar */}
      <div className={`w-16 h-[2.5px] bg-[#8A1C36] my-4 rounded-full ${isCenter ? 'mx-auto' : ''}`} />

      {subtitle && (
        <p className={`text-base sm:text-lg leading-relaxed ${
          inverted ? 'text-white/80' : 'text-[#14293A]/80'
        }`}>
          {subtitle}
        </p>
      )}
    </div>
  );
};
