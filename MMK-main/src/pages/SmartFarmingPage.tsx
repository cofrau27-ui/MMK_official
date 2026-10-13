import React from 'react';
import { useCustomizer } from '../context/CustomizerContext';
import { AIDecisionWorkflow } from '../components/AIDecisionWorkflow';
import {
  Brain,
  Cpu,
  Layers,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Sliders,
  ScanLine,
  HelpCircle,
} from 'lucide-react';

export const SmartFarmingPage: React.FC = () => {
  const { navigateTo } = useCustomizer();

  const capabilities = [
    {
      title: 'AI-Assisted Agricultural Guidance',
      desc: 'Contextual advisory algorithms that consider crop variety, sowing timeline, vegetative phase, and local microclimate.',
      icon: Brain,
    },
    {
      title: 'Data-Informed Crop Planning',
      desc: 'Simulating crop rotations and nutrient budgets to maximize returns while safeguarding long-term soil organic carbon.',
      icon: Layers,
    },
    {
      title: 'Agricultural Information Organization',
      desc: 'Unifying farm records, expense logs, fertilizer schedules, and harvest archives into a clean, searchable farm profile.',
      icon: Sliders,
    },
    {
      title: 'Future Sensor & Drone Integration',
      desc: 'Architected to ingest spectral indices (NDVI/NDRE), multi-spectral drone aerial surveys, and IoT soil probe telemetry when provisioned.',
      icon: ScanLine,
    },
  ];

  return (
    <div className="w-full bg-[#F7F8F3]">
      {/* 7.1 Hero Section */}
      <section className="relative py-20 lg:py-24 bg-[#0B2E24] text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-5">
              <span className="text-xs font-semibold tracking-widest text-[#B5D96A] uppercase">
                Smart Farming AI
              </span>
              <h1 className="font-display font-extrabold text-3xl sm:text-5xl text-white tracking-tight leading-tight">
                Bringing Intelligence to Everyday Farming
              </h1>
              <p className="text-base sm:text-lg text-neutral-300 leading-relaxed">
                Discover how artificial intelligence and data-assisted modeling can support
                agricultural planning—turning complex agronomy and climate signals into practical,
                step-by-step guidance.
              </p>
              <div className="pt-2">
                <button
                  onClick={() => {
                    const el = document.getElementById('ai-pipeline');
                    el?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-[#0B2E24] bg-[#B5D96A] hover:bg-[#a6cb5c] rounded-xl shadow-md transition-colors"
                >
                  <span>Explore AI Decision Pipeline</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/20 aspect-[4/3] bg-neutral-900">
              <img
                src="/src/assets/images/smart_farming_drone_sensor_1791900915322.jpg"
                alt="Agricultural drone flying above structured crop rows for smart precision farming"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 7.2 Problem Statement */}
      <section className="py-20 bg-white border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <span className="text-xs font-semibold tracking-wider text-[#176B45] uppercase">
              The Critical Challenge
            </span>
            <h2 className="font-display font-bold text-3xl text-[#0B2E24] tracking-tight mt-1 mb-3">
              Why Traditional Agricultural Planning Needs Modern Tools
            </h2>
            <p className="text-base text-neutral-600 leading-relaxed">
              Modern growers manage dozens of variables simultaneously—seed germination vigor, soil
              salinity, variable fertilizer rates, and water rotations—often relying solely on memory
              or unverified hearsay.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-7 rounded-xl bg-[#F7F8F3] border border-[#CBD5E1]">
              <span className="font-mono text-xs font-bold text-rose-700 bg-rose-50 px-2.5 py-1 rounded">
                CHALLENGE 01
              </span>
              <h3 className="font-display font-bold text-lg text-[#0B2E24] mt-3 mb-2">
                Information Asymmetry & Fragmented Advice
              </h3>
              <p className="text-xs sm:text-sm text-[#39453F] leading-relaxed">
                Farmers often receive contradictory guidance from input dealers, uncalibrated social
                media groups, or legacy almanacs that no longer match changing weather baselines.
              </p>
            </div>

            <div className="p-7 rounded-xl bg-[#F7F8F3] border border-[#CBD5E1]">
              <span className="font-mono text-xs font-bold text-amber-700 bg-amber-50 px-2.5 py-1 rounded">
                CHALLENGE 02
              </span>
              <h3 className="font-display font-bold text-lg text-[#0B2E24] mt-3 mb-2">
                Delayed Pest & Disease Interventions
              </h3>
              <p className="text-xs sm:text-sm text-[#39453F] leading-relaxed">
                By the time symptoms manifest across an entire 20-acre block, economic crop damage is
                already locked in. Early preventive predictive windows are routinely missed.
              </p>
            </div>

            <div className="p-7 rounded-xl bg-[#F7F8F3] border border-[#CBD5E1]">
              <span className="font-mono text-xs font-bold text-sky-700 bg-sky-50 px-2.5 py-1 rounded">
                CHALLENGE 03
              </span>
              <h3 className="font-display font-bold text-lg text-[#0B2E24] mt-3 mb-2">
                Over-Application of Chemical Inputs
              </h3>
              <p className="text-xs sm:text-sm text-[#39453F] leading-relaxed">
                Guesswork leads to blanket chemical overdosing, unnecessarily inflating cultivation
                costs while degrading soil biome fertility and contaminating local waterways.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7.3 Smart Farming Capabilities */}
      <section className="py-20 bg-[#F7F8F3] border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-semibold tracking-wider text-[#176B45] uppercase">
              Technology Architecture
            </span>
            <h2 className="font-display font-bold text-3xl text-[#0B2E24] tracking-tight mt-1 mb-3">
              Core Capabilities of the MMK AI Framework
            </h2>
            <p className="text-sm text-neutral-600">
              Designed to work harmoniously with human agronomic expertise, supporting decisions
              rather than replacing farmer judgment.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {capabilities.map((c, i) => {
              const Icon = c.icon;
              return (
                <div
                  key={i}
                  className="bg-white p-6 rounded-xl border border-[#CBD5E1] shadow-sm hover:border-[#176B45] transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#176B45]/10 text-[#176B45] flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-display font-bold text-base text-[#0B2E24] mb-2">
                    {c.title}
                  </h3>
                  <p className="text-xs text-[#39453F] leading-relaxed">
                    {c.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 7.4 & 7.5 Interactive Workflow Showcase */}
      <section id="ai-pipeline" className="py-20 bg-white border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <span className="text-xs font-semibold tracking-wider text-[#176B45] uppercase">
              Decision Support Lifecycle
            </span>
            <h2 className="font-display font-bold text-3xl text-[#0B2E24] tracking-tight mt-1 mb-2">
              The 5-Step Agronomic Intelligence Loop
            </h2>
            <p className="text-sm text-neutral-600">
              Every insight follows a rigorous verification chain: raw farmer inputs, verified data
              streams, algorithmic synthesis, plain-language guidance, and final human review.
            </p>
          </div>

          <AIDecisionWorkflow />
        </div>
      </section>

      {/* 7.6 Benefits Overview */}
      <section className="py-20 bg-[#F7F8F3] border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-semibold tracking-wider text-[#176B45] uppercase">
              Strategic Advantages
            </span>
            <h2 className="font-display font-bold text-3xl text-[#0B2E24] tracking-tight mt-1 mb-3">
              Tangible Value for Farming Operations
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl border border-[#CBD5E1]">
              <h4 className="font-display font-bold text-base text-[#0B2E24] mb-2">
                Organized Farm Records
              </h4>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Centralized history of sowing dates, treatments, fertilizer volumes, and yields for
                continuous multi-year calibration.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-[#CBD5E1]">
              <h4 className="font-display font-bold text-base text-[#0B2E24] mb-2">
                Workflow Efficiency
              </h4>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Eliminates uncertainty in scheduling field tasks, labor requirements, and machinery
                rental windows.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-[#CBD5E1]">
              <h4 className="font-display font-bold text-base text-[#0B2E24] mb-2">
                Resource Conservation
              </h4>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Reduces excessive fuel expenditures on tube wells and prevents redundant chemical
                applications.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-[#CBD5E1]">
              <h4 className="font-display font-bold text-base text-[#0B2E24] mb-2">
                Technology Adoption
              </h4>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Encourages digital literacy across agricultural communities through clean,
                approachable software interfaces.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7.7 CTA */}
      <section className="py-16 bg-[#0B2E24] text-white text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <h2 className="font-display font-bold text-2xl sm:text-3xl text-white">
            Discuss Smart Farming Solutions
          </h2>
          <p className="text-sm text-neutral-300 max-w-xl mx-auto">
            Connect with our agronomy and engineering teams to evaluate smart farming integration
            for your farms, agribusinesses, or cooperative networks.
          </p>
          <div className="pt-2">
            <button
              onClick={() => navigateTo('contact', '/contact/')}
              className="inline-flex items-center gap-2 px-7 py-3 text-sm font-semibold text-[#0B2E24] bg-[#B5D96A] hover:bg-[#a6cb5c] rounded-xl shadow-md transition-colors"
            >
              <span>Contact MMK Agritech Team</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
