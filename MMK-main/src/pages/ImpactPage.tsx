import React from 'react';
import { useCustomizer } from '../context/CustomizerContext';
import {
  ShieldAlert,
  Sprout,
  Users2,
  Scale,
  Handshake,
  ArrowRight,
  FileCheck2,
  CheckCircle2,
  AlertCircle,
} from 'lucide-react';

export const ImpactPage: React.FC = () => {
  const { navigateTo } = useCustomizer();

  const impactPillars = [
    {
      title: 'Climate Resilience',
      desc: 'Building actionable buffer strategies so smallholder and commercial producers can withstand anomalous droughts, unseasonal rainfall, and heat waves.',
      icon: ShieldAlert,
    },
    {
      title: 'Digital Inclusion',
      desc: 'Breaking technical and language barriers by providing simple, intuitive mobile-accessible agricultural intelligence directly to grassroots growers.',
      icon: Users2,
    },
    {
      title: 'Sustainable Agriculture',
      desc: 'Encouraging precision input management to reduce chemical runoff, conserve ground water tables, and preserve soil microbial biodiversity.',
      icon: Sprout,
    },
    {
      title: 'Informed Decision-Making',
      desc: 'Replacing generational guesswork with verified environmental and agronomic indicators, stabilizing agricultural household incomes.',
      icon: Scale,
    },
    {
      title: 'Community Collaboration',
      desc: 'Unifying growers, water users associations, researchers, and local cooperatives into a shared knowledge-sharing network.',
      icon: Handshake,
    },
  ];

  return (
    <div className="w-full bg-[#F7F8F3]">
      {/* 9.1 Hero Section */}
      <section className="relative py-20 lg:py-24 bg-[#0B2E24] text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-semibold tracking-widest text-[#B5D96A] uppercase">
              Impact & Outcomes
            </span>
            <h1 className="font-display font-extrabold text-3xl sm:text-5xl text-white tracking-tight leading-tight">
              Building a More Resilient Agricultural Future
            </h1>
            <p className="text-base sm:text-lg text-neutral-300 leading-relaxed">
              MMK's mission extends beyond software. We measure success by the tangible resilience,
              economic stability, and resource sustainability we foster in farming communities.
            </p>
          </div>
        </div>
      </section>

      {/* 9.2 Transparency Notice (Strict PRD Compliance) */}
      <section className="py-6 bg-white border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-4 rounded-xl bg-[#F7F8F3] border border-[#CBD5E1] flex items-start sm:items-center gap-3 text-xs text-neutral-700">
            <AlertCircle className="w-5 h-5 text-[#176B45] shrink-0 mt-0.5 sm:mt-0" />
            <p className="leading-relaxed">
              <strong className="text-[#0B2E24]">Transparency Commitment:</strong> In accordance with
              our strict scientific governance policy, numerical claims regarding yield improvements,
              participating acreage, and financial savings are only published when verified by
              independent agronomic audit partners. No speculative placeholders are displayed as real
              achievements.
            </p>
          </div>
        </div>
      </section>

      {/* 9.3 The 5 Core Impact Pillars */}
      <section className="py-20 bg-white border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-semibold tracking-wider text-[#176B45] uppercase">
              Theory of Change
            </span>
            <h2 className="font-display font-bold text-3xl text-[#0B2E24] tracking-tight mt-1 mb-3">
              Five Pillars of Long-Term Agricultural Impact
            </h2>
            <p className="text-sm text-neutral-600">
              How our technology and field interventions drive compounding sustainability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {impactPillars.map((p, i) => {
              const Icon = p.icon;
              return (
                <div
                  key={i}
                  className="bg-[#F7F8F3] p-7 rounded-2xl border border-[#CBD5E1] hover:border-[#176B45] transition-colors"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#176B45]/10 text-[#176B45] flex items-center justify-center mb-5">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-display font-bold text-lg text-[#0B2E24] mb-2">
                    {p.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#39453F] leading-relaxed">
                    {p.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 9.4 Impact Measurement Framework */}
      <section className="py-20 bg-[#F7F8F3] border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-semibold tracking-wider text-[#176B45] uppercase">
              Evaluation Methodology
            </span>
            <h2 className="font-display font-bold text-3xl text-[#0B2E24] tracking-tight mt-1 mb-3">
              Our Measurement & Verification Protocol
            </h2>
            <p className="text-sm text-neutral-600">
              When full deployment milestones are reached, project indicators are recorded against
              formal, documented standards.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl border border-[#CBD5E1]">
              <span className="text-xs font-mono font-bold text-[#176B45]">METRIC TRACK 01</span>
              <h4 className="font-display font-bold text-base text-[#0B2E24] mt-2 mb-1">
                Participating Growers
              </h4>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Total onboarded farmers by agro-ecological zone, landholding tier, and primary crop
                varieties cultivated.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-[#CBD5E1]">
              <span className="text-xs font-mono font-bold text-[#176B45]">METRIC TRACK 02</span>
              <h4 className="font-display font-bold text-base text-[#0B2E24] mt-2 mb-1">
                Advisory Adoption Rate
              </h4>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Percentage of weather and fertilizer recommendations reviewed and successfully enacted
                in the field during each season.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-[#CBD5E1]">
              <span className="text-xs font-mono font-bold text-[#176B45]">METRIC TRACK 03</span>
              <h4 className="font-display font-bold text-base text-[#0B2E24] mt-2 mb-1">
                Resource Input Savings
              </h4>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Measurable reductions in tube-well diesel pumping hours, canal water volume utilized,
                and avoided nitrogen leaching.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-[#CBD5E1]">
              <span className="text-xs font-mono font-bold text-[#176B45]">METRIC TRACK 04</span>
              <h4 className="font-display font-bold text-base text-[#0B2E24] mt-2 mb-1">
                Yield Quality & Resilience
              </h4>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Comparison of harvest yields and grain quality metrics between advised plots and
                historical regional benchmarks.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-[#CBD5E1]">
              <span className="text-xs font-mono font-bold text-[#176B45]">METRIC TRACK 05</span>
              <h4 className="font-display font-bold text-base text-[#0B2E24] mt-2 mb-1">
                Economic Grower Net Margin
              </h4>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Calculated return on investment per acre, factoring input expenditures against final
                market realization prices.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-[#CBD5E1]">
              <span className="text-xs font-mono font-bold text-[#176B45]">METRIC TRACK 06</span>
              <h4 className="font-display font-bold text-base text-[#0B2E24] mt-2 mb-1">
                Soil Health Indices
              </h4>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Post-harvest soil nutrient status, salinity markers, and organic matter retention
                trends documented year-over-year.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 9.5 Institutional Collaboration & Case Inquiries CTA */}
      <section className="py-16 bg-[#0B2E24] text-white text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <h2 className="font-display font-bold text-2xl sm:text-3xl text-white">
            Explore Partnership & Research Opportunities
          </h2>
          <p className="text-sm text-neutral-300 max-w-xl mx-auto">
            MMK welcomes collaboration with agricultural universities, development agencies, and
            agronomy research consortia to co-publish validated impact studies.
          </p>
          <div className="pt-2">
            <button
              onClick={() => navigateTo('contact', '/contact/')}
              className="inline-flex items-center gap-2 px-7 py-3 text-sm font-semibold text-[#0B2E24] bg-[#B5D96A] hover:bg-[#a6cb5c] rounded-xl shadow-md transition-colors"
            >
              <span>Partner with MMK</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
