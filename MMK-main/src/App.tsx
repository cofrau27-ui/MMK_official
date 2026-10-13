import React, { useEffect } from 'react';
import { CustomizerProvider, useCustomizer } from './context/CustomizerContext';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ClimatePage } from './pages/ClimatePage';
import { SmartFarmingPage } from './pages/SmartFarmingPage';
import { HowItWorksPage } from './pages/HowItWorksPage';
import { ImpactPage } from './pages/ImpactPage';
import { ContactPage } from './pages/ContactPage';
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage';

const PAGE_TITLES: Record<string, string> = {
  home: 'MMK | Smart Farming, Climate Intelligence & Agricultural Innovation',
  about: 'About MMK | Connecting Agriculture with Digital Innovation',
  climate: 'Climate Intelligence | Weather & Environmental Farming Insights — MMK',
  'smart-farming': 'Smart Farming AI | Artificial Intelligence for Modern Agriculture — MMK',
  'how-it-works': 'How It Works | 5-Step Agronomic Intelligence Process — MMK',
  impact: 'Agricultural Impact & Outcomes | Sustainable Resilient Farming — MMK',
  contact: 'Contact MMK | Connect with Our Agritech Advisory Team',
  privacy: 'Privacy Policy | Data Governance & Protection — MMK',
};

const AppContent: React.FC = () => {
  const { currentPage } = useCustomizer();

  // Dynamically update document title on navigation
  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.title = PAGE_TITLES[currentPage] || PAGE_TITLES.home;
    }
  }, [currentPage]);

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage />;
      case 'about':
        return <AboutPage />;
      case 'climate':
        return <ClimatePage />;
      case 'smart-farming':
        return <SmartFarmingPage />;
      case 'how-it-works':
        return <HowItWorksPage />;
      case 'impact':
        return <ImpactPage />;
      case 'contact':
        return <ContactPage />;
      case 'privacy':
        return <PrivacyPolicyPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F7F8F3] text-[#39453F] font-sans">
      {/* Global Responsive Navigation Header */}
      <Header />

      {/* Main Viewport Content */}
      <main className="flex-1 w-full" id="main-content">
        {renderCurrentPage()}
      </main>

      {/* Reusable Global Footer */}
      <Footer />
    </div>
  );
};

export default function App() {
  return (
    <CustomizerProvider>
      <AppContent />
    </CustomizerProvider>
  );
}
