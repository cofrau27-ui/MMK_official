import React, { useEffect, useRef } from 'react';
import { useCustomizer } from '../context/CustomizerContext';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { MMKLogo } from './MMKLogo';

export const HeroVideo: React.FC = () => {
  const { config, navigateTo } = useCustomizer();
  const heroVideoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = heroVideoRef.current;
    if (!video) return;

    const syncPlayback = (isVisible: boolean) => {
      if (isVisible && document.visibilityState === 'visible') {
        void video.play().catch(() => {
          // Autoplay may be blocked by browser policy; native controls remain available.
        });
      } else {
        video.pause();
      }
    };

    const observer = new IntersectionObserver(
      ([entry]) => syncPlayback(entry.isIntersecting),
      { threshold: 0.01 }
    );
    const handleVisibilityChange = () => {
      const bounds = video.getBoundingClientRect();
      const isOnScreen = bounds.top < window.innerHeight && bounds.bottom > 0;
      syncPlayback(document.visibilityState === 'visible' && isOnScreen);
    };

    observer.observe(video);
    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      observer.disconnect();
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      video.pause();
    };
  }, [config.videoUrl]);

  const handleScrollDown = () => {
    const nextSection = document.getElementById('intro-section');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      className="relative w-full overflow-hidden bg-[#0B2E24] min-h-[75vh] md:min-h-[85vh] lg:min-h-[90vh] flex items-center justify-center text-white"
      aria-label="MMK Agriculture Platform Hero"
    >
      {/* Background Image Layer (Fast, responsive, zero video overhead) */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <img
          src={config.posterImage}
          alt="Agricultural farmland with modern sustainable irrigation"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover scale-105"
        />

        {/* Dark Green Brand Scrim Overlay */}
        <div
          className="absolute inset-0 pointer-events-none transition-opacity duration-300"
          style={{
            backgroundColor: '#0B2E24',
            opacity: config.overlayOpacity,
          }}
        />

        {/* Gradient Scrim for WCAG AA Contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B2E24] via-black/35 to-black/60 pointer-events-none" />
      </div>

      {/* Hero Foreground Content */}
      <div className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-10 px-4 pb-24 pt-16 text-center sm:px-6 md:gap-12 md:pt-20 lg:grid-cols-2 lg:gap-14 lg:px-8 lg:py-20 lg:text-left">
        <div className="flex flex-col items-center lg:items-start">
        {/* Official MMK Dr. Hanif Logo Badge */}
        <div className="mb-6 flex flex-col items-center lg:flex-row lg:gap-4">
          <div className="p-1 rounded-full bg-white/20 backdrop-blur-md border border-white/40 shadow-2xl hover:scale-105 transition-transform duration-300">
            <MMKLogo size="xl" />
          </div>
          <div className="mt-3 text-center lg:text-left">
            <span className="font-display font-bold text-lg text-white">
              Main Aur Mera Kissan
            </span>
            <span className="text-xs text-[#B5D96A] font-semibold block">
              Dr. Hanif ·{' '}
              <span lang="ur" dir="rtl" className="text-sm font-bold">
                میں اور میرا کسان
              </span>
            </span>
          </div>
        </div>

        {/* Eyebrow kicker */}
        <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-[#B5D96A] sm:text-sm">
          {config.heroEyebrow}
        </p>

        {/* Main Display Headline */}
        <h1 className="mb-6 max-w-4xl font-display text-3xl font-extrabold leading-[1.12] tracking-tight text-white drop-shadow-md text-balance sm:text-5xl lg:text-5xl xl:text-6xl">
          {config.heroHeading}
        </h1>

        {/* Supporting description */}
        <p className="mb-10 max-w-3xl text-base font-normal leading-relaxed text-neutral-200 text-pretty sm:text-lg lg:max-w-xl lg:text-xl">
          {config.heroDescription}
        </p>

        {/* Action CTAs */}
        <div className="flex w-full flex-col items-center justify-center gap-4 sm:w-auto sm:flex-row lg:justify-start">
          {/* Primary CTA */}
          <button
            onClick={() => navigateTo('climate', '/climate-intelligence/')}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 text-base font-semibold text-[#0B2E24] bg-[#B5D96A] hover:bg-[#a6cb5c] active:bg-[#97bd4e] rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white whitespace-nowrap"
          >
            <span>{config.primaryCtaText}</span>
            <ArrowRight className="w-4 h-4 text-[#0B2E24]" />
          </button>

          {/* Secondary CTA */}
          <button
            onClick={() => navigateTo('about', '/about-mmk/')}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 text-base font-semibold text-white bg-white/10 hover:bg-white/20 active:bg-white/25 backdrop-blur-sm border border-white/25 rounded-xl transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B5D96A] whitespace-nowrap"
          >
            <span>{config.secondaryCtaText}</span>
          </button>
        </div>
        </div>

        {/* Upload-ready hero video slot: replace the configured MP4 URL with your own clip. */}
        <div className="mx-auto mt-2 w-full max-w-2xl overflow-hidden rounded-2xl border border-white/25 bg-black/30 p-2 shadow-2xl backdrop-blur-sm sm:p-3 lg:mt-0">
          <div className="mb-2 flex items-center justify-between px-1 text-left">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#B5D96A]">
              MMK in the field
            </span>
            <span className="text-[11px] font-medium text-white/70">Autoplay · Loop</span>
          </div>
          <video
            ref={heroVideoRef}
            src={config.videoUrl}
            poster={config.posterImage}
            autoPlay
            muted
            loop
            playsInline
            controls
            preload="metadata"
            aria-label="MMK agriculture video"
            className="aspect-video w-full rounded-xl bg-black object-cover"
          />
        </div>
      </div>

      {/* Subtle Scroll Indicator */}
      <button
        onClick={handleScrollDown}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1 text-neutral-300 hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B5D96A] rounded p-1"
        aria-label="Scroll to MMK Introduction"
      >
        <span className="text-[11px] tracking-widest uppercase font-medium text-neutral-400">
          Scroll Down
        </span>
        <ChevronDown className="w-4 h-4 animate-bounce text-[#B5D96A]" />
      </button>
    </section>
  );
};
