import React from 'react';
import mmkLogo from '../assets/images/mmk-logo.png';

interface MMKLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showSubtitle?: boolean;
}

const SIZE_MAP = {
  sm: 'w-10 h-10',
  md: 'w-12 h-12',
  lg: 'w-16 h-16',
  xl: 'w-24 h-24',
  '2xl': 'w-32 h-32',
};

export const MMKLogo: React.FC<MMKLogoProps> = ({
  className = '',
  size = 'md',
  showSubtitle = false,
}) => {
  const sizeClass = SIZE_MAP[size as keyof typeof SIZE_MAP] || SIZE_MAP.md;

  return (
    <div className={`inline-flex items-center gap-3 ${className}`}>
      <div className={`relative ${sizeClass} rounded-full overflow-hidden bg-white shadow-sm shrink-0 flex items-center justify-center border border-[#CBD5E1]/60`}>
        <img
          src={mmkLogo}
          alt="Main Aur Mera Kissan MMK Dr. Hanif"
          referrerPolicy="no-referrer"
          className="w-full h-full object-contain"
        />
      </div>

      {showSubtitle && (
        <div className="flex flex-col text-left">
          <div className="flex items-center gap-1.5">
            <span className="font-display font-extrabold text-lg text-[#0B2E24] leading-tight">
              MMK
            </span>
            <span className="text-xs font-semibold text-[#176B45]">· Dr. Hanif</span>
          </div>
          <span className="text-[11px] font-medium text-[#39453F] leading-tight">
            Main Aur Mera Kissan
          </span>
          <span lang="ur" dir="rtl" className="text-xs font-bold text-[#176B45] leading-tight mt-0.5">
            میں اور میرا کسان
          </span>
        </div>
      )}
    </div>
  );
};
