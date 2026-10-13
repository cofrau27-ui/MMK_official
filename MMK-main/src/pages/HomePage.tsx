import React from 'react';
import { HeroVideo } from '../components/HeroVideo';
import { useCustomizer } from '../context/CustomizerContext';
import {
  ArrowRight,
  CloudRain,
  Cpu,
  Workflow,
  Search,
  BarChart3,
  CalendarCheck2,
  TrendingUp,
  ShieldCheck,
  CheckCircle,
} from 'lucide-react';

export const HomePage: React.FC = () => {
  const { navigateTo } = useCustomizer();

  return (
    <div className="w-full">
      {/* 4.1 Hero Section — Background Video */}
      <HeroVideo />

      {/* 4.2 Introduction Section: Agriculture Meets Innovation */}
      <section id="intro-section" className="py-20 lg:py-28 bg-[#F7F8F3] border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Column: Heading and Editorial Narrative */}
            <div className="space-y-6">
              <span className="text-xs font-semibold tracking-wider text-[#176B45] uppercase">
                About MMK Platform
              </span>

              <h2 className="font-display font-bold text-3xl sm:text-4xl text-[#0B2E24] tracking-tight leading-tight">
                Agriculture Meets Innovation
              </h2>

              <p className="text-base sm:text-lg text-[#39453F] leading-relaxed">
                MMK (Main Aur Mera Kissan) aims to connect agriculture with digital innovation
                through climate intelligence, smart farming concepts, and technology-driven
                insights. The platform focuses on helping agricultural stakeholders—from smallholder
                farmers to regional agribusinesses—make more informed, timely decisions.
              </p>

              <div className="pt-2 space-y-3">
                <div className="flex items-start gap-3 text-sm text-[#39453F]">
                  <CheckCircle className="w-5 h-5 text-[#176B45] shrink-0 mt-0.5" />
                  <span>Practical intelligence grounded in local crop seasons and soil conditions.</span>
                </div>
                <div className="flex items-start gap-3 text-sm text-[#39453F]">
                  <CheckCircle className="w-5 h-5 text-[#176B45] shrink-0 mt-0.5" />
                  <span>Human-centric digital tools designed for clarity, resilience, and ease of adoption.</span>
                </div>
                <div className="flex items-start gap-3 text-sm text-[#39453F]">
                  <CheckCircle className="w-5 h-5 text-[#176B45] shrink-0 mt-0.5" />
                  <span>Bridging historical agricultural wisdom with modern data-informed models.</span>
                </div>
              </div>

              <div className="pt-4">
                <button
                  onClick={() => navigateTo('about', '/about-mmk/')}
                  className="inline-flex items-center gap-2.5 px-6 py-3 text-sm font-semibold text-white bg-[#176B45] hover:bg-[#0B2E24] rounded-xl shadow-sm hover:shadow transition-colors"
                >
                  <span>Learn About MMK</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Right Column: High-Fidelity Agritech Photography Asset */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-[#CBD5E1] bg-white aspect-[4/3]">
                <img
                  src="/src/assets/images/about_agriculture_innovation_1791900915847.jpg"
                  alt="Agricultural specialist and farmer collaborating in a lush crop field"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-102"
                />
              </div>

              {/* Quiet Floating Trust Card */}
              <div className="absolute -bottom-6 -left-6 hidden sm:block bg-white p-4 rounded-xl shadow-lg border border-[#CBD5E1] max-w-xs">
                <p className="text-xs font-semibold text-[#0B2E24]">Built For Farming Communities</p>
                <p className="text-[11px] text-neutral-600 mt-0.5 leading-snug">
                  Designed alongside agronomy researchers and growers across diverse agro-ecological zones.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4.3 Services Overview: Solutions for a Smarter Agricultural Future */}
      <section className="py-20 lg:py-28 bg-white border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-semibold tracking-wider text-[#176B45] uppercase">
              Core Capabilities
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-[#0B2E24] tracking-tight mt-2 mb-4">
              Solutions for a Smarter Agricultural Future
            </h2>
            <p className="text-base text-neutral-600 leading-relaxed">
              Three integrated pillars delivering actionable environmental intelligence, digital
              advisory support, and a unified farming workflow.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 — Climate Intelligence */}
            <div className="bg-[#F7F8F3] rounded-2xl p-7 border border-[#CBD5E1] hover:border-[#176B45] transition-all duration-200 flex flex-col justify-between group">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#176B45]/15 text-[#176B45] flex items-center justify-center mb-6 group-hover:bg-[#176B45] group-hover:text-white transition-colors">
                  <CloudRain className="w-6 h-6" />
                </div>
                <h3 className="font-display font-bold text-xl text-[#0B2E24] mb-3">
                  Climate Intelligence
                </h3>
                <p className="text-sm text-[#39453F] leading-relaxed mb-6">
                  Agricultural planning ke liye climate-related information, microclimate weather
                  awareness, and decision-support concepts designed to mitigate seasonal risks.
                </p>
              </div>
              <button
                onClick={() => navigateTo('climate', '/climate-intelligence/')}
                className="inline-flex items-center gap-2 text-xs font-semibold text-[#176B45] hover:text-[#0B2E24] transition-colors pt-4 border-t border-[#E2E8F0]"
              >
                <span>Explore Climate Intelligence</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Card 2 — Smart Farming AI */}
            <div className="bg-[#F7F8F3] rounded-2xl p-7 border border-[#CBD5E1] hover:border-[#176B45] transition-all duration-200 flex flex-col justify-between group">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#176B45]/15 text-[#176B45] flex items-center justify-center mb-6 group-hover:bg-[#176B45] group-hover:text-white transition-colors">
                  <Cpu className="w-6 h-6" />
                </div>
                <h3 className="font-display font-bold text-xl text-[#0B2E24] mb-3">
                  Smart Farming AI
                </h3>
                <p className="text-sm text-[#39453F] leading-relaxed mb-6">
                  AI-assisted agricultural insights, data-driven crop planning, and decision tools
                  that interpret complex field variables into plain agronomic recommendations.
                </p>
              </div>
              <button
                onClick={() => navigateTo('smart-farming', '/smart-farming-ai/')}
                className="inline-flex items-center gap-2 text-xs font-semibold text-[#176B45] hover:text-[#0B2E24] transition-colors pt-4 border-t border-[#E2E8F0]"
              >
                <span>Discover Smart Farming AI</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Card 3 — Connected Agricultural Solutions */}
            <div className="bg-[#F7F8F3] rounded-2xl p-7 border border-[#CBD5E1] hover:border-[#176B45] transition-all duration-200 flex flex-col justify-between group">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#176B45]/15 text-[#176B45] flex items-center justify-center mb-6 group-hover:bg-[#176B45] group-hover:text-white transition-colors">
                  <Workflow className="w-6 h-6" />
                </div>
                <h3 className="font-display font-bold text-xl text-[#0B2E24] mb-3">
                  Connected Agricultural Solutions
                </h3>
                <p className="text-sm text-[#39453F] leading-relaxed mb-6">
                  Agricultural information aur digital tools ko ek connected user experience mein
                  organize karne ka concept, ensuring seamless communication across stakeholders.
                </p>
              </div>
              <button
                onClick={() => navigateTo('how-it-works', '/how-it-works/')}
                className="inline-flex items-center gap-2 text-xs font-semibold text-[#176B45] hover:text-[#0B2E24] transition-colors pt-4 border-t border-[#E2E8F0]"
              >
                <span>See How It Works</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 4.4 How It Works Preview: 4-Step Visual Workflow */}
      <section className="py-20 lg:py-28 bg-[#F7F8F3] border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div>
              <span className="text-xs font-semibold tracking-wider text-[#176B45] uppercase">
                Workflow Methodology
              </span>
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-[#0B2E24] tracking-tight mt-2">
                From Agricultural Data to Better Decisions
              </h2>
            </div>
            <button
              onClick={() => navigateTo('how-it-works', '/how-it-works/')}
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#176B45] hover:text-[#0B2E24] transition-colors whitespace-nowrap"
            >
              <span>Explore the Process</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Step 1 */}
            <div className="bg-white p-6 rounded-xl border border-[#CBD5E1] shadow-sm relative">
              <span className="font-mono text-2xl font-bold text-[#176B45]/40 block mb-3">
                01
              </span>
              <div className="flex items-center gap-2 mb-2">
                <Search className="w-4 h-4 text-[#176B45]" />
                <h3 className="font-display font-bold text-lg text-[#0B2E24]">Understand</h3>
              </div>
              <p className="text-xs text-[#39453F] leading-relaxed">
                Relevant agricultural information collect aur organize karna: crop variety, sowing
                calendar, and soil parameters.
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-white p-6 rounded-xl border border-[#CBD5E1] shadow-sm relative">
              <span className="font-mono text-2xl font-bold text-[#176B45]/40 block mb-3">
                02
              </span>
              <div className="flex items-center gap-2 mb-2">
                <BarChart3 className="w-4 h-4 text-[#176B45]" />
                <h3 className="font-display font-bold text-lg text-[#0B2E24]">Analyze</h3>
              </div>
              <p className="text-xs text-[#39453F] leading-relaxed">
                Available weather and environmental data ko meaningful, contextual insights mein
                convert karna.
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-white p-6 rounded-xl border border-[#CBD5E1] shadow-sm relative">
              <span className="font-mono text-2xl font-bold text-[#176B45]/40 block mb-3">
                03
              </span>
              <div className="flex items-center gap-2 mb-2">
                <CalendarCheck2 className="w-4 h-4 text-[#176B45]" />
                <h3 className="font-display font-bold text-lg text-[#0B2E24]">Plan</h3>
              </div>
              <p className="text-xs text-[#39453F] leading-relaxed">
                Insights ki madad se informed agricultural planning karna: irrigation windows, input
                timing, and harvest forecast.
              </p>
            </div>

            {/* Step 4 */}
            <div className="bg-white p-6 rounded-xl border border-[#CBD5E1] shadow-sm relative">
              <span className="font-mono text-2xl font-bold text-[#176B45]/40 block mb-3">
                04
              </span>
              <div className="flex items-center gap-2 mb-2">
                <TrendingUp className="w-4 h-4 text-[#176B45]" />
                <h3 className="font-display font-bold text-lg text-[#0B2E24]">Improve</h3>
              </div>
              <p className="text-xs text-[#39453F] leading-relaxed">
                Results ko evaluate karna, soil health protect karna, aur future seasonal decisions ko
                continuously refine karna.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4.5 Impact Preview: Building a More Resilient Agricultural Future */}
      <section className="py-20 lg:py-28 bg-white border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
            <div className="lg:col-span-1 space-y-4">
              <span className="text-xs font-semibold tracking-wider text-[#176B45] uppercase">
                Measurable Impact
              </span>
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-[#0B2E24] tracking-tight leading-tight">
                Building a More Resilient Agricultural Future
              </h2>
              <p className="text-sm text-neutral-600 leading-relaxed">
                MMK structures agricultural interventions across five core developmental pillars to
                foster long-term food security and grower resilience.
              </p>
              <div className="pt-2">
                <button
                  onClick={() => navigateTo('impact', '/impact/')}
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-[#176B45] bg-[#F7F8F3] hover:bg-[#EAECE4] border border-[#CBD5E1] rounded-lg transition-colors"
                >
                  <span>Explore Our Impact</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Pillars Grid */}
            <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 rounded-xl bg-[#F7F8F3] border border-[#CBD5E1]">
                <h4 className="font-display font-bold text-base text-[#0B2E24] mb-1.5">
                  Better-Informed Decisions
                </h4>
                <p className="text-xs text-neutral-600 leading-relaxed">
                  Eliminating guesswork in crop sowing, fertilizer split-dosing, and water management
                  via verifiable environmental indicators.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-[#F7F8F3] border border-[#CBD5E1]">
                <h4 className="font-display font-bold text-base text-[#0B2E24] mb-1.5">
                  Climate Awareness & Preparedness
                </h4>
                <p className="text-xs text-neutral-600 leading-relaxed">
                  Equipping farming communities with advance warning against erratic monsoons, heat
                  waves, and unseasonal rainfall.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-[#F7F8F3] border border-[#CBD5E1]">
                <h4 className="font-display font-bold text-base text-[#0B2E24] mb-1.5">
                  Digital Inclusion for Farmers
                </h4>
                <p className="text-xs text-neutral-600 leading-relaxed">
                  Ensuring agricultural innovations are accessible in regional languages and simple,
                  intuitive user interfaces.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-[#F7F8F3] border border-[#CBD5E1]">
                <h4 className="font-display font-bold text-base text-[#0B2E24] mb-1.5">
                  Sustainable Resource Management
                </h4>
                <p className="text-xs text-neutral-600 leading-relaxed">
                  Conserving ground water aquifers, curbing excessive chemical runoffs, and
                  nurturing fertile soil biology.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4.6 Final CTA Section */}
      <section className="py-20 lg:py-24 bg-[#0B2E24] text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="text-xs font-semibold tracking-widest text-[#B5D96A] uppercase">
            Collaborate With MMK
          </span>

          <h2 className="font-display font-bold text-3xl sm:text-5xl text-white tracking-tight leading-tight max-w-3xl mx-auto">
            Let's Build the Future of Agriculture Together
          </h2>

          <p className="text-base sm:text-lg text-neutral-300 max-w-2xl mx-auto leading-relaxed">
            Connect with MMK to explore agricultural technology, climate intelligence, and
            opportunities for collaboration across farming communities and institutions.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => navigateTo('contact', '/contact/')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 text-sm font-semibold text-[#0B2E24] bg-[#B5D96A] hover:bg-[#a6cb5c] rounded-xl shadow-lg transition-colors"
            >
              <span>Contact MMK</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => navigateTo('climate', '/climate-intelligence/')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 text-sm font-semibold text-white bg-white/10 hover:bg-white/20 border border-white/25 rounded-xl transition-colors"
            >
              <span>Explore Our Solutions</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
