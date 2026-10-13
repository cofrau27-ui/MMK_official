import React, { createContext, useContext, useState, useEffect } from 'react';
import { SiteConfig, PageId } from '../types';
import mmkLogo from '../assets/images/mmk-logo.png';
import mmkHeroVideo from '../../../mmk-website/assets/videos/MMK Video.mp4';

// Initial default configuration per PRD specifications
export const DEFAULT_CONFIG: SiteConfig = {
  heroEyebrow: 'THE FUTURE OF FARMING STARTS HERE',
  heroHeading: 'Smarter Farming. Stronger Communities. A Sustainable Future.',
  heroDescription:
    'MMK brings together agricultural innovation, climate intelligence and AI-powered solutions to help build a more informed, resilient and sustainable farming future.',
  primaryCtaText: 'Explore Our Solutions',
  secondaryCtaText: 'Discover MMK',
  // Smooth looping agricultural video
  videoUrl: mmkHeroVideo,
  posterImage: '/src/assets/images/hero_agriculture_poster_1791900914953.jpg',
  overlayOpacity: 0.72,
  brandName: 'MMK',
  logoImage: mmkLogo,
  playVideoFirst: true,
  contactEmail: 'support@mmkisan.com',
  contactPhone: '+92-334-4645425',
  officeLocation: 'Office 12, 13, 14 NASTP Old Airport, Islamabad',
};

interface CustomizerContextType {
  config: SiteConfig;
  updateConfig: (patch: Partial<SiteConfig>) => void;
  resetConfig: () => void;
  isEditorOpen: boolean;
  setIsEditorOpen: (open: boolean) => void;
  currentPage: PageId;
  navigateTo: (page: PageId, path?: string) => void;
}

const CustomizerContext = createContext<CustomizerContextType | undefined>(undefined);

const PATH_MAP: Record<PageId, string> = {
  home: '/',
  about: '/about-mmk/',
  climate: '/climate-intelligence/',
  'smart-farming': '/smart-farming-ai/',
  'how-it-works': '/how-it-works/',
  impact: '/impact/',
  contact: '/contact/',
  privacy: '/privacy-policy/',
};

export const CustomizerProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [config, setConfig] = useState<SiteConfig>(() => {
    try {
      const saved = localStorage.getItem('mmk_site_config');
      if (saved) {
        return { ...DEFAULT_CONFIG, ...JSON.parse(saved) };
      }
    } catch {
      // fallback
    }
    return DEFAULT_CONFIG;
  });

  const [isEditorOpen, setIsEditorOpen] = useState(false);

  // Parse initial page from window.location.pathname
  const resolvePageFromPath = (path: string): PageId => {
    const normalized = path.toLowerCase().replace(/\/+$/, '') || '/';
    if (normalized === '/' || normalized === '') return 'home';
    if (normalized.includes('about')) return 'about';
    if (normalized.includes('climate')) return 'climate';
    if (normalized.includes('smart-farming')) return 'smart-farming';
    if (normalized.includes('how-it-works')) return 'how-it-works';
    if (normalized.includes('impact')) return 'impact';
    if (normalized.includes('contact')) return 'contact';
    if (normalized.includes('privacy')) return 'privacy';
    return 'home';
  };

  const [currentPage, setCurrentPage] = useState<PageId>(() =>
    typeof window !== 'undefined' ? resolvePageFromPath(window.location.pathname) : 'home'
  );

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPage(resolvePageFromPath(window.location.pathname));
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigateTo = (page: PageId, customPath?: string) => {
    setCurrentPage(page);
    const targetPath = customPath || PATH_MAP[page] || '/';
    if (window.location.pathname !== targetPath) {
      window.history.pushState({}, '', targetPath);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const updateConfig = (patch: Partial<SiteConfig>) => {
    setConfig((prev) => {
      const updated = { ...prev, ...patch };
      try {
        localStorage.setItem('mmk_site_config', JSON.stringify(updated));
      } catch {
        // ignore
      }
      return updated;
    });
  };

  const resetConfig = () => {
    setConfig(DEFAULT_CONFIG);
    try {
      localStorage.removeItem('mmk_site_config');
    } catch {
      // ignore
    }
  };

  return (
    <CustomizerContext.Provider
      value={{
        config,
        updateConfig,
        resetConfig,
        isEditorOpen,
        setIsEditorOpen,
        currentPage,
        navigateTo,
      }}
    >
      {children}
    </CustomizerContext.Provider>
  );
};

export const useCustomizer = () => {
  const context = useContext(CustomizerContext);
  if (!context) {
    throw new Error('useCustomizer must be used within a CustomizerProvider');
  }
  return context;
};
