import React from 'react';
import { useCustomizer } from '../context/CustomizerContext';
import { Mail, Phone, MapPin, ArrowUpRight, ShieldCheck, Heart } from 'lucide-react';
import { MMKLogo } from './MMKLogo';

export const Footer: React.FC = () => {
  const { config, navigateTo } = useCustomizer();

  return (
    <footer className="bg-[#0B2E24] text-[#F7F8F3] border-t border-[#176B45]/40 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-white/10">
          {/* Column 1 & 2: Brand Lockup & Mission */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3.5">
              <MMKLogo size="md" className="border-white/30" />
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="font-display font-bold text-2xl text-white tracking-tight">
                    MMK
                  </span>
                  <span className="text-xs font-semibold text-[#B5D96A]">· Dr. Hanif</span>
                </div>
                <p className="text-xs font-medium text-[#B5D96A] uppercase tracking-wider">
                  Main Aur Mera Kissan
                </p>
                <p lang="ur" dir="rtl" className="text-xs font-bold text-white/90 mt-0.5">
                  میں اور میرا کسان
                </p>
              </div>
            </div>

            <p className="text-sm text-neutral-300 leading-relaxed max-w-sm">
              Empowering farmers and agricultural communities with modern climate intelligence,
              practical AI-driven insights, and connected solutions for a resilient, sustainable
              future.
            </p>

            <div className="pt-2">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium bg-[#176B45]/40 text-[#B5D96A] border border-[#176B45]">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Agricultural Innovation & Research Initiative</span>
              </span>
            </div>
          </div>

          {/* Column 3: Platform Navigation */}
          <div>
            <h3 className="font-display font-semibold text-white text-sm tracking-wider uppercase mb-4">
              Navigation
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  onClick={() => navigateTo('home', '/')}
                  className="text-neutral-300 hover:text-[#B5D96A] transition-colors focus:outline-none"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('about', '/about-mmk/')}
                  className="text-neutral-300 hover:text-[#B5D96A] transition-colors focus:outline-none"
                >
                  About MMK
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('how-it-works', '/how-it-works/')}
                  className="text-neutral-300 hover:text-[#B5D96A] transition-colors focus:outline-none"
                >
                  How It Works
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('impact', '/impact/')}
                  className="text-neutral-300 hover:text-[#B5D96A] transition-colors focus:outline-none"
                >
                  Impact & Outcomes
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('contact', '/contact/')}
                  className="text-neutral-300 hover:text-[#B5D96A] transition-colors focus:outline-none"
                >
                  Contact & Inquiries
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Core Agritech Solutions */}
          <div>
            <h3 className="font-display font-semibold text-white text-sm tracking-wider uppercase mb-4">
              Solutions
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  onClick={() => navigateTo('climate', '/climate-intelligence/')}
                  className="text-neutral-300 hover:text-[#B5D96A] transition-colors text-left focus:outline-none"
                >
                  Climate Intelligence
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('smart-farming', '/smart-farming-ai/')}
                  className="text-neutral-300 hover:text-[#B5D96A] transition-colors text-left focus:outline-none"
                >
                  Smart Farming AI
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('how-it-works', '/how-it-works/')}
                  className="text-neutral-300 hover:text-[#B5D96A] transition-colors text-left focus:outline-none"
                >
                  Connected Agricultural Flow
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('impact', '/impact/')}
                  className="text-neutral-300 hover:text-[#B5D96A] transition-colors text-left focus:outline-none"
                >
                  Sustainable Resource Framework
                </button>
              </li>
            </ul>
          </div>

          {/* Column 5: Contact Details */}
          <div>
            <h3 className="font-display font-semibold text-white text-sm tracking-wider uppercase mb-4">
              Get in Touch
            </h3>
            <ul className="space-y-3 text-sm text-neutral-300">
              <li className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-[#B5D96A] shrink-0 mt-0.5" />
                <a
                  href={`mailto:${config.contactEmail}`}
                  className="hover:text-[#B5D96A] transition-colors break-all"
                >
                  {config.contactEmail}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-[#B5D96A] shrink-0 mt-0.5" />
                <span>{config.contactPhone}</span>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#B5D96A] shrink-0 mt-0.5" />
                <span className="leading-snug">{config.officeLocation}</span>
              </li>
            </ul>

            <div className="mt-5 pt-4 border-t border-white/10">
              <button
                onClick={() => navigateTo('contact', '/contact/')}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#B5D96A] hover:text-white transition-colors"
              >
                <span>Submit an inquiry</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Sub-bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-400">
          <p>© {new Date().getFullYear()} MMK (Main Aur Mera Kissan). All rights reserved.</p>
          <div className="flex items-center gap-6">
            <button
              onClick={() => navigateTo('privacy', '/privacy-policy/')}
              className="hover:text-[#B5D96A] transition-colors"
            >
              Privacy Policy
            </button>
            <span aria-hidden="true" className="text-neutral-600">·</span>
            <span className="flex items-center gap-1 text-neutral-400">
              Built for resilient agriculture <Heart className="w-3 h-3 text-[#B5D96A]" />
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
