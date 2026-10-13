import React from 'react';
import { useCustomizer } from '../context/CustomizerContext';
import {
  Sparkles,
  Eye,
  Target,
  Shield,
  Users,
  Sprout,
  Compass,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react';
import { MMKLogo } from '../components/MMKLogo';

export const AboutPage: React.FC = () => {
  const { navigateTo } = useCustomizer();

  const coreValues = [
    {
      title: 'Innovation',
      desc: 'Pioneering practical, science-backed technologies tailored specifically for smallholder and commercial agricultural conditions.',
      icon: Sparkles,
    },
    {
      title: 'Accessibility',
      desc: 'Ensuring complex agronomic data is simple to interpret, language-friendly, and usable on affordable mobile devices.',
      icon: Users,
    },
    {
      title: 'Sustainability',
      desc: 'Protecting natural water tables, safeguarding soil microbial health, and building resilient farm ecosystems for future generations.',
      icon: Sprout,
    },
    {
      title: 'Transparency',
      desc: 'Clear, unbiased recommendations without hidden commercial bias or inflated, unsubstantiated algorithmic claims.',
      icon: Shield,
    },
    {
      title: 'Collaboration',
      desc: 'Working closely with agricultural researchers, universities, extension workers, and regional grower collectives.',
      icon: Compass,
    },
    {
      title: 'Farmer-Focused Thinking',
      desc: 'Putting the grower at the center of every interface, decision loop, and tool we engineer.',
      icon: Target,
    },
  ];

  return (
    <div className="w-full bg-[#F7F8F3]">
      {/* 5.1 Page Hero */}
      <section className="relative py-20 lg:py-24 bg-[#0B2E24] text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <div className="flex items-center gap-4 mb-2">
              <MMKLogo size="lg" className="border-white/40" />
              <div>
                <span className="text-xs font-semibold tracking-widest text-[#B5D96A] uppercase block">
                  About MMK · Dr. Hanif
                </span>
                <span lang="ur" dir="rtl" className="text-sm font-bold text-white/90">
                  میں اور میرا کسان
                </span>
              </div>
            </div>
            <h1 className="font-display font-extrabold text-3xl sm:text-5xl text-white tracking-tight leading-tight">
              Connecting Agriculture with Innovation
            </h1>
            <p className="text-base sm:text-lg text-neutral-300 leading-relaxed">
              Main Aur Mera Kissan (MMK) bridges the gap between traditional agricultural wisdom
              and modern computational intelligence. We equip farming communities and agricultural
              enterprises with clear, practical guidance for an unpredictable climate.
            </p>
          </div>
        </div>

        {/* Decorative subtle texture overlay */}
        <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-gradient-to-l from-[#176B45]/20 to-transparent pointer-events-none" />
      </section>

      {/* 5.2 About MMK: Platform Narrative & Audiences */}
      <section className="py-20 bg-white border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="space-y-6">
              <span className="text-xs font-semibold tracking-wider text-[#176B45] uppercase">
                Platform Concept
              </span>
              <h2 className="font-display font-bold text-3xl text-[#0B2E24]">
                A Dedicated Agritech Ecosystem for Resilient Yields
              </h2>
              <p className="text-sm sm:text-base text-[#39453F] leading-relaxed">
                MMK was founded on the belief that farmers shouldn't have to navigate changing
                rainfall patterns, extreme temperatures, and resource limitations in the dark.
                By connecting microclimate analytics, soil moisture parameters, and AI-assisted crop
                guidance, MMK turns raw agricultural variables into intuitive, everyday decisions.
              </p>
              <p className="text-sm sm:text-base text-[#39453F] leading-relaxed">
                Whether determining the optimal hour for nitrogen top-dressing, scheduling canal
                irrigation turns, or assessing regional pest warnings, MMK puts real-world clarity
                directly into growers' hands.
              </p>
            </div>

            <div className="bg-[#F7F8F3] p-8 rounded-2xl border border-[#CBD5E1] space-y-5">
              <h3 className="font-display font-bold text-lg text-[#0B2E24]">
                Who We Serve Across the Agricultural Landscape:
              </h3>
              <ul className="space-y-3.5 text-xs sm:text-sm text-[#39453F]">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#176B45] shrink-0 mt-0.5" />
                  <span>
                    <strong>Smallholder & Progressive Farmers:</strong> Simple, timely guidance on
                    irrigation, inputs, and crop stage tracking.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#176B45] shrink-0 mt-0.5" />
                  <span>
                    <strong>Agribusinesses & Value Chains:</strong> Data-informed procurement
                    forecasting, crop health monitoring, and supply reliability.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#176B45] shrink-0 mt-0.5" />
                  <span>
                    <strong>Public & Development Organizations:</strong> Regional crop vulnerability
                    assessment, climate adaptation, and grower empowerment programs.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#176B45] shrink-0 mt-0.5" />
                  <span>
                    <strong>Research Institutions:</strong> Collaborative validation of agronomic
                    models across local agro-ecological conditions.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 5.3 & 5.4 Vision & Mission */}
      <section className="py-20 bg-[#F7F8F3] border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Vision */}
            <div className="bg-white p-8 sm:p-10 rounded-2xl border border-[#CBD5E1] shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#176B45]/15 text-[#176B45] flex items-center justify-center mb-6">
                  <Eye className="w-6 h-6" />
                </div>
                <span className="text-xs font-mono font-semibold text-[#176B45] uppercase tracking-wider">
                  Our Long-Term Horizon
                </span>
                <h3 className="font-display font-bold text-2xl text-[#0B2E24] mt-1 mb-4">
                  Our Vision
                </h3>
                <p className="text-base text-[#39453F] leading-relaxed">
                  A more informed, connected, and sustainable agricultural future where every grower
                  possesses the data and technological capability needed to thrive despite climate
                  challenges.
                </p>
              </div>
            </div>

            {/* Mission */}
            <div className="bg-white p-8 sm:p-10 rounded-2xl border border-[#CBD5E1] shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#176B45]/15 text-[#176B45] flex items-center justify-center mb-6">
                  <Target className="w-6 h-6" />
                </div>
                <span className="text-xs font-mono font-semibold text-[#176B45] uppercase tracking-wider">
                  Our Everyday Commitment
                </span>
                <h3 className="font-display font-bold text-2xl text-[#0B2E24] mt-1 mb-4">
                  Our Mission
                </h3>
                <p className="text-base text-[#39453F] leading-relaxed">
                  To support agricultural stakeholders with accessible digital solutions, climate
                  intelligence, and verified knowledge to make confident, sustainable, and timely
                  farming decisions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5.5 Core Values */}
      <section className="py-20 bg-white border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-semibold tracking-wider text-[#176B45] uppercase">
              Guiding Principles
            </span>
            <h2 className="font-display font-bold text-3xl text-[#0B2E24] tracking-tight mt-1 mb-3">
              Our Core Values
            </h2>
            <p className="text-sm text-neutral-600">
              The foundational ethical and agronomic commitments guiding every line of code, model,
              and partnership we build.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreValues.map((v, i) => {
              const Icon = v.icon;
              return (
                <div
                  key={i}
                  className="bg-[#F7F8F3] p-6 rounded-xl border border-[#CBD5E1] hover:border-[#176B45] transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#176B45]/10 text-[#176B45] flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-display font-bold text-lg text-[#0B2E24] mb-2">
                    {v.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#39453F] leading-relaxed">
                    {v.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5.6 Our Approach */}
      <section className="py-20 bg-[#F7F8F3] border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <span className="text-xs font-semibold tracking-wider text-[#176B45] uppercase">
              How We Deliver Value
            </span>
            <h2 className="font-display font-bold text-3xl text-[#0B2E24] tracking-tight mt-1">
              Our Agronomic Approach
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl border border-[#CBD5E1] shadow-sm">
              <span className="font-mono text-xl font-bold text-[#176B45]">01</span>
              <h4 className="font-display font-bold text-base text-[#0B2E24] mt-2 mb-1">
                Listen & Understand
              </h4>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Identifying genuine grower pain points, local crop calendars, and resource constraints.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-[#CBD5E1] shadow-sm">
              <span className="font-mono text-xl font-bold text-[#176B45]">02</span>
              <h4 className="font-display font-bold text-base text-[#0B2E24] mt-2 mb-1">
                Organize Intelligence
              </h4>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Aggregating satellite, ground-sensor, and meteorological data into verified formats.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-[#CBD5E1] shadow-sm">
              <span className="font-mono text-xl font-bold text-[#176B45]">03</span>
              <h4 className="font-display font-bold text-base text-[#0B2E24] mt-2 mb-1">
                Practical Application
              </h4>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Delivering actionable advice right when it counts—sowing, fertilization, and harvest.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-[#CBD5E1] shadow-sm">
              <span className="font-mono text-xl font-bold text-[#176B45]">04</span>
              <h4 className="font-display font-bold text-base text-[#0B2E24] mt-2 mb-1">
                Continuous Improvement
              </h4>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Gathering field feedback to calibrate recommendations and heighten seasonal accuracy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5.7 CTA Section */}
      <section className="py-16 bg-[#0B2E24] text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <h2 className="font-display font-bold text-2xl sm:text-3xl text-white">
            Discover What MMK Can Do for Your Community
          </h2>
          <p className="text-sm text-neutral-300 max-w-xl mx-auto">
            Explore our dedicated climate intelligence services and smart farming tools designed
            to foster agricultural resilience.
          </p>
          <div className="pt-2">
            <button
              onClick={() => navigateTo('climate', '/climate-intelligence/')}
              className="inline-flex items-center gap-2 px-7 py-3 text-sm font-semibold text-[#0B2E24] bg-[#B5D96A] hover:bg-[#a6cb5c] rounded-xl shadow-md transition-colors"
            >
              <span>Explore Our Solutions</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
