import React, { useState } from 'react';
import { useCustomizer } from '../context/CustomizerContext';
import { PageId } from '../types';
import { Menu, X, ArrowRight } from 'lucide-react';
import { MMKLogo } from './MMKLogo';

interface NavItem {
  id: PageId;
  label: string;
  path: string;
}

const NAV_ITEMS: NavItem[] = [
  { id: 'home', label: 'Home', path: '/' },
  { id: 'about', label: 'About MMK', path: '/about-mmk/' },
  { id: 'climate', label: 'Climate Intelligence', path: '/climate-intelligence/' },
  { id: 'smart-farming', label: 'Smart Farming AI', path: '/smart-farming-ai/' },
  { id: 'how-it-works', label: 'How It Works', path: '/how-it-works/' },
  { id: 'impact', label: 'Impact', path: '/impact/' },
  { id: 'contact', label: 'Contact', path: '/contact/' },
];

export const Header: React.FC = () => {
  const { currentPage, navigateTo } = useCustomizer();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (page: PageId, path: string) => {
    navigateTo(page, path);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md border-b border-[#E2E8F0] transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8 h-20">
          {/* Zone 1: Official Brand Badge & Wordmark */}
          <button
            onClick={() => handleNavClick('home', '/')}
            className="flex items-center gap-3 text-left group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#176B45] rounded-md p-1 -ml-1 shrink-0"
            aria-label="MMK Main Aur Mera Kissan Home"
          >
            {/* Official MMK Dr. Hanif Circular Logo Badge */}
            <MMKLogo size="md" className="group-hover:scale-105 transition-transform" />

            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="font-display font-extrabold text-xl tracking-tight text-[#0B2E24] leading-tight">
                  MMK
                </span>
                <span className="text-xs font-semibold text-[#176B45] tracking-wide">
                  · Dr. Hanif
                </span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="text-[11px] font-medium text-[#39453F] tracking-tight leading-none">
                  Main Aur Mera Kissan
                </span>
                <span aria-hidden="true" className="text-neutral-300 text-[10px]">·</span>
                <span lang="ur" dir="rtl" className="text-xs font-bold text-[#176B45] leading-none">
                  میں اور میرا کسان
                </span>
              </div>
            </div>
          </button>

          {/* Zone 2: Navigation Links (Clean text with hover indicators) */}
          <nav
            className="hidden lg:flex items-center gap-7 text-[14px] font-medium text-[#39453F]"
            aria-label="Main Navigation"
          >
            {NAV_ITEMS.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id, item.path)}
                  className={`relative py-2 transition-colors whitespace-nowrap shrink-0 hover:text-[#176B45] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#176B45] rounded ${
                    isActive ? 'text-[#176B45] font-semibold' : 'text-[#39453F]'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#176B45] rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Zone 3: Primary CTA */}
          <div className="flex items-center gap-3 shrink-0">
            {/* Primary CTA */}
            <button
              onClick={() => handleNavClick('climate', '/climate-intelligence/')}
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2.5 text-sm font-semibold text-white bg-[#176B45] hover:bg-[#0B2E24] active:bg-[#072119] rounded-lg shadow-sm hover:shadow transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#176B45] whitespace-nowrap"
            >
              <span>Explore Our Solutions</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            {/* Mobile Menu Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-[#0B2E24] hover:bg-[#F7F8F3] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#176B45]"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-[#E2E8F0] shadow-xl px-4 pt-3 pb-6 animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col space-y-2">
            {NAV_ITEMS.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id, item.path)}
                  className={`text-left px-3 py-2.5 rounded-lg text-base font-medium transition-colors ${
                    isActive
                      ? 'bg-[#176B45]/10 text-[#176B45] font-semibold'
                      : 'text-[#39453F] hover:bg-[#F7F8F3] hover:text-[#0B2E24]'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
            <div className="pt-3 border-t border-[#E2E8F0]">
              <button
                onClick={() => handleNavClick('climate', '/climate-intelligence/')}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 text-base font-semibold text-white bg-[#176B45] hover:bg-[#0B2E24] rounded-lg shadow-sm"
              >
                <span>Explore Our Solutions</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
