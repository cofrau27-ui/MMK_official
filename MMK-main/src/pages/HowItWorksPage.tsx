import React from 'react';
import { useCustomizer } from '../context/CustomizerContext';
import { FAQAccordion, FAQItem } from '../components/FAQAccordion';
import {
  Compass,
  Database,
  Brain,
  CheckCircle,
  RefreshCw,
  ArrowRight,
  User,
  Calendar,
  CheckCircle2,
} from 'lucide-react';

const HOW_IT_WORKS_FAQS: FAQItem[] = [
  {
    question: 'How long does it take for a farm to get started on MMK?',
    answer:
      'Initial onboarding takes just a few minutes. A grower or farm manager specifies their location, field coordinates, crop varieties, and planting dates. The platform immediately connects localized historical soil profiles and microclimate forecast models.',
  },
  {
    question: 'Do I need expensive sensors installed in my fields to use MMK?',
    answer:
      'No. MMK is designed with a tiered architecture. You can get started immediately using satellite remote sensing, public meteorological stations, and regional agronomic data. When on-farm IoT sensors or weather stations are installed, they seamlessly plug into the existing field profile for higher local precision.',
  },
  {
    question: 'Can farm managers oversee multiple non-contiguous parcels?',
    answer:
      'Yes. MMK supports multi-plot and multi-region management, allowing agricultural enterprises and cooperative leaders to monitor distinct blocks, varieties, and irrigation sources across different geographic locations.',
  },
  {
    question: 'How is historical farm data secured?',
    answer:
      'All field parameters, yield logs, and inputs remain strictly confidential and belong to the respective grower. MMK adheres to strict agricultural data sovereignty principles and never sells farmer records to third-party brokers.',
  },
];

export const HowItWorksPage: React.FC = () => {
  const { navigateTo } = useCustomizer();

  const workflowSteps = [
    {
      num: '01',
      title: 'Discover Agricultural Needs',
      tagline: 'Field Registration & Baseline Parameters',
      desc: 'Define field boundaries, soil characteristics, crop varieties, target planting dates, and water source availability.',
      icon: Compass,
    },
    {
      num: '02',
      title: 'Access Relevant Information',
      tagline: 'Data Ingestion & Atmospheric Synthesis',
      desc: 'MMK aggregates hyper-local weather parameters, solar radiation indices, soil moisture estimates, and historical regional pest trends.',
      icon: Database,
    },
    {
      num: '03',
      title: 'Review Available Insights',
      tagline: 'Translating Data into Practical Guidance',
      desc: 'Agronomic models evaluate risks, identifying upcoming rain windows, optimum fertilizer split timings, and heat stress advisories.',
      icon: Brain,
    },
    {
      num: '04',
      title: 'Make Informed Decisions',
      tagline: 'Actionable Field Execution',
      desc: 'The grower reviews concise recommendations, coordinates farm labor, aligns canal water turns, and executes timely interventions.',
      icon: CheckCircle,
    },
    {
      num: '05',
      title: 'Evaluate & Continuously Improve',
      tagline: 'Post-Harvest Calibration & Soil Feedback',
      desc: 'Harvest outcomes, input efficiencies, and soil status are documented to calibrate recommendations for subsequent crop seasons.',
      icon: RefreshCw,
    },
  ];

  return (
    <div className="w-full bg-[#F7F8F3]">
      {/* 8.1 Hero Section */}
      <section className="relative py-20 lg:py-24 bg-[#0B2E24] text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-semibold tracking-widest text-[#B5D96A] uppercase">
              How It Works
            </span>
            <h1 className="font-display font-extrabold text-3xl sm:text-5xl text-white tracking-tight leading-tight">
              A Transparent, 5-Step Path to Informed Agriculture
            </h1>
            <p className="text-base sm:text-lg text-neutral-300 leading-relaxed">
              Explore how MMK streamlines agricultural complexity—from seasonal baseline discovery
              and environmental data synthesis to practical human-in-the-loop decisions.
            </p>
          </div>
        </div>
      </section>

      {/* 8.2 The 5-Step Workflow */}
      <section className="py-20 bg-white border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-semibold tracking-wider text-[#176B45] uppercase">
              The Implementation Journey
            </span>
            <h2 className="font-display font-bold text-3xl text-[#0B2E24] tracking-tight mt-1 mb-3">
              Step-by-Step Platform Workflow
            </h2>
            <p className="text-sm text-neutral-600">
              Clear, manageable stages designed to integrate effortlessly into ongoing field routines.
            </p>
          </div>

          <div className="space-y-6 max-w-4xl mx-auto">
            {workflowSteps.map((step) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.num}
                  className="bg-[#F7F8F3] p-6 sm:p-8 rounded-2xl border border-[#CBD5E1] hover:border-[#176B45] transition-all flex flex-col sm:flex-row items-start gap-6 group"
                >
                  <div className="w-14 h-14 rounded-2xl bg-[#0B2E24] text-[#B5D96A] flex flex-col items-center justify-center shrink-0 shadow-sm group-hover:scale-105 transition-transform">
                    <span className="font-mono text-xs font-bold leading-none opacity-80">STEP</span>
                    <span className="font-mono text-base font-extrabold leading-none">{step.num}</span>
                  </div>

                  <div className="space-y-2 flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="font-display font-bold text-xl text-[#0B2E24]">
                        {step.title}
                      </h3>
                      <span aria-hidden="true" className="text-neutral-400 hidden sm:inline">·</span>
                      <span className="text-xs font-semibold text-[#176B45]">
                        {step.tagline}
                      </span>
                    </div>

                    <p className="text-sm text-[#39453F] leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 8.7 Example User Journey: Malik Farms Walkthrough */}
      <section className="py-20 bg-[#F7F8F3] border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-semibold tracking-wider text-[#176B45] uppercase">
              Illustrative User Journey
            </span>
            <h2 className="font-display font-bold text-3xl text-[#0B2E24] tracking-tight mt-1 mb-3">
              In the Field: A Season with Malik Agri Farm
            </h2>
            <p className="text-sm text-neutral-600">
              Walk through how an agricultural grower leverages MMK across a single cropping cycle.
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-[#CBD5E1] shadow-md p-6 sm:p-10 space-y-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-neutral-200 gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#176B45]/15 text-[#176B45] flex items-center justify-center font-display font-bold">
                  M
                </div>
                <div>
                  <h4 className="font-display font-bold text-base text-[#0B2E24]">
                    Malik Agri Farm (38 Acres)
                  </h4>
                  <p className="text-xs text-neutral-500">
                    Sahiwal Agro-Ecological Belt · Wheat & Cotton Rotation
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 text-xs">
                <span className="px-3 py-1 bg-[#F7F8F3] rounded-md font-mono text-neutral-700 border border-neutral-200">
                  Rabi Season
                </span>
                <span className="px-3 py-1 bg-[#176B45]/10 text-[#176B45] rounded-md font-semibold">
                  Verified Case Flow
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-[#39453F]">
              <div className="p-4 bg-[#F7F8F3] rounded-xl border border-neutral-200 space-y-2">
                <span className="font-mono font-semibold text-[#176B45] block">PHASE 1: PRE-SOWING</span>
                <h5 className="font-bold text-sm text-[#0B2E24]">Optimized Sowing Date</h5>
                <p className="leading-relaxed text-neutral-600">
                  Rather than sowing on a fixed calendar date, MMK advised delaying planting by 6 days
                  to avoid a late unseasonal monsoon shower, preserving seed germination rates.
                </p>
              </div>

              <div className="p-4 bg-[#F7F8F3] rounded-xl border border-neutral-200 space-y-2">
                <span className="font-mono font-semibold text-[#176B45] block">PHASE 2: TILLERING</span>
                <h5 className="font-bold text-sm text-[#0B2E24]">Synchronized Irrigation</h5>
                <p className="leading-relaxed text-neutral-600">
                  Soil moisture models cross-referenced canal water rotations, saving 2 full cycles of
                  expensive tube-well diesel pumping and preserving crucial root oxygenation.
                </p>
              </div>

              <div className="p-4 bg-[#F7F8F3] rounded-xl border border-neutral-200 space-y-2">
                <span className="font-mono font-semibold text-[#176B45] block">PHASE 3: GRAIN FILLING</span>
                <h5 className="font-bold text-sm text-[#0B2E24]">Terminal Heat Mitigation</h5>
                <p className="leading-relaxed text-neutral-600">
                  Advance notice of a sudden 4-day spike above 34°C prompted light evening irrigation,
                  mitigating grain shrinkage and safeguarding kernel weight at harvest.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8.8 FAQs Accordion */}
      <section className="py-20 bg-white border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FAQAccordion items={HOW_IT_WORKS_FAQS} />
        </div>
      </section>

      {/* 8.9 Contact CTA */}
      <section className="py-16 bg-[#0B2E24] text-white text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <h2 className="font-display font-bold text-2xl sm:text-3xl text-white">
            Ready to Streamline Your Agricultural Decisions?
          </h2>
          <p className="text-sm text-neutral-300 max-w-xl mx-auto">
            Get in touch with the MMK team to schedule a technical walkthrough or discuss customized
            pilot programs for your farming community.
          </p>
          <div className="pt-2">
            <button
              onClick={() => navigateTo('contact', '/contact/')}
              className="inline-flex items-center gap-2 px-7 py-3 text-sm font-semibold text-[#0B2E24] bg-[#B5D96A] hover:bg-[#a6cb5c] rounded-xl shadow-md transition-colors"
            >
              <span>Contact MMK</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
