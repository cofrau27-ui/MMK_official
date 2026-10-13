import React from 'react';
import { useCustomizer } from '../context/CustomizerContext';
import { FAQAccordion, FAQItem } from '../components/FAQAccordion';
import {
  CloudLightning,
  Droplets,
  ThermometerSun,
  ShieldCheck,
  CalendarDays,
  Gauge,
  ArrowRight,
  TrendingDown,
  Layers,
} from 'lucide-react';

const CLIMATE_FAQS: FAQItem[] = [
  {
    question: 'How does Climate Intelligence differ from standard consumer weather apps?',
    answer:
      'Standard weather apps only show generic city-level temperatures. MMK Climate Intelligence translates microclimate indicators—such as atmospheric evapotranspiration (ET₀), Growing Degree Days (GDD), and root-zone soil saturation—into actionable agricultural advice, advising whether to irrigate, spray, or wait.',
  },
  {
    question: 'How does MMK integrate data from agricultural sensors?',
    answer:
      'MMK is built with a multi-tiered architecture that aggregates satellite remote sensing, regional meteorological station datasets, and optional on-farm IoT microclimate probes provisioned during regional deployments.',
  },
  {
    question: 'Can Climate Intelligence help prevent pesticide wash-off?',
    answer:
      'Yes. By factoring in 48-hour barometric instability, local wind shear, and precipitation probability curves, our advisory models pinpoint safe, dry application windows so expensive inputs are not washed away by unseasonal rainfall.',
  },
  {
    question: 'How do smallholder farmers without smartphones receive these insights?',
    answer:
      'MMK is built with multi-channel accessibility in mind. In addition to our web and mobile portals, insights can be distributed via scheduled regional SMS advisories, automated voice broadcasts, and local agricultural cooperative coordinators.',
  },
];

export const ClimatePage: React.FC = () => {
  const { navigateTo } = useCustomizer();

  const useCases = [
    {
      title: 'Weather-Aware Sowing Windows',
      desc: 'Pinpointing optimum soil temperature and moisture thresholds before putting high-value seed in the ground.',
      icon: CalendarDays,
    },
    {
      title: 'Smart Irrigation Scheduling',
      desc: 'Balancing canal rotation with atmospheric water demand to eliminate over-irrigation and conserve fuel pumping costs.',
      icon: Droplets,
    },
    {
      title: 'Heatwave & Frost Preparedness',
      desc: 'Early alert notifications enabling protective soil moisture buffering before sudden temperature anomalies occur.',
      icon: ThermometerSun,
    },
    {
      title: 'Optimal Spray Windows',
      desc: 'Evaluating humidity and wind drift before pesticide or fertilizer application to ensure peak absorption efficiency.',
      icon: Gauge,
    },
  ];

  return (
    <div className="w-full bg-[#F7F8F3]">
      {/* 6.1 Hero with Climate Visual */}
      <section className="relative py-20 lg:py-24 bg-[#0B2E24] text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-5">
              <span className="text-xs font-semibold tracking-widest text-[#B5D96A] uppercase">
                Climate Intelligence Pillar
              </span>
              <h1 className="font-display font-extrabold text-3xl sm:text-5xl text-white tracking-tight leading-tight">
                Weather & Environmental Intelligence for Modern Agriculture
              </h1>
              <p className="text-base sm:text-lg text-neutral-300 leading-relaxed">
                Transform unpredictable atmospheric shifts into actionable field clarity. MMK
                empowers growers to anticipate climatic risks, conserve valuable water, and safeguard
                crop yields.
              </p>
              <div className="pt-2">
                <button
                  onClick={() => {
                    const el = document.getElementById('climate-use-cases');
                    el?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-[#0B2E24] bg-[#B5D96A] hover:bg-[#a6cb5c] rounded-xl shadow-md transition-colors"
                >
                  <span>Explore Agricultural Solutions</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/20 aspect-[4/3] bg-neutral-900">
              <img
                src="/src/assets/images/climate_intelligence_field_1791900916646.jpg"
                alt="Agricultural weather monitoring station in green crop field under open sky"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 6.2 & 6.3 Challenges & Context */}
      <section className="py-20 bg-white border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-semibold tracking-wider text-[#176B45] uppercase">
              The Agricultural Dilemma
            </span>
            <h2 className="font-display font-bold text-3xl text-[#0B2E24] tracking-tight mt-1 mb-4">
              Farming in an Era of Accelerated Climatic Volatility
            </h2>
            <p className="text-base text-neutral-600 leading-relaxed">
              Traditional seasonal calendars are no longer sufficient. Farmers face erratic monsoon
              timing, untimely hail, flash heat spikes, and depleting groundwater reservoirs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#F7F8F3] p-7 rounded-xl border border-[#CBD5E1]">
              <div className="w-10 h-10 rounded-lg bg-rose-100 text-rose-700 flex items-center justify-center mb-4">
                <CloudLightning className="w-5 h-5" />
              </div>
              <h3 className="font-display font-bold text-lg text-[#0B2E24] mb-2">
                Unpredictable Weather Events
              </h3>
              <p className="text-xs sm:text-sm text-[#39453F] leading-relaxed">
                Sudden downpours immediately following nitrogen fertilizer application wash nutrients
                into runoff, costing growers significant financial investment and diminishing crop uptake.
              </p>
            </div>

            <div className="bg-[#F7F8F3] p-7 rounded-xl border border-[#CBD5E1]">
              <div className="w-10 h-10 rounded-lg bg-amber-100 text-amber-700 flex items-center justify-center mb-4">
                <ThermometerSun className="w-5 h-5" />
              </div>
              <h3 className="font-display font-bold text-lg text-[#0B2E24] mb-2">
                Terminal Heat Stress
              </h3>
              <p className="text-xs sm:text-sm text-[#39453F] leading-relaxed">
                Premature March heatwaves force wheat grain to desiccate before complete grain filling,
                reducing overall yield potential by up to 20% when unmitigated.
              </p>
            </div>

            <div className="bg-[#F7F8F3] p-7 rounded-xl border border-[#CBD5E1]">
              <div className="w-10 h-10 rounded-lg bg-sky-100 text-sky-700 flex items-center justify-center mb-4">
                <Droplets className="w-5 h-5" />
              </div>
              <h3 className="font-display font-bold text-lg text-[#0B2E24] mb-2">
                Groundwater & Energy Strain
              </h3>
              <p className="text-xs sm:text-sm text-[#39453F] leading-relaxed">
                Inflexible canal warabandi (turns) combined with blind tube-well diesel pumping
                depletes regional aquifers without matching the crop’s actual transpiration needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6.7 Potential Use Cases */}
      <section id="climate-use-cases" className="py-20 bg-white border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-semibold tracking-wider text-[#176B45] uppercase">
              Field Implementation
            </span>
            <h2 className="font-display font-bold text-3xl text-[#0B2E24] tracking-tight mt-1 mb-3">
              Practical Agricultural Use Cases
            </h2>
            <p className="text-sm text-neutral-600">
              How climate intelligence integrates directly into seasonal farming practices.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {useCases.map((uc, i) => {
              const Icon = uc.icon;
              return (
                <div
                  key={i}
                  className="p-6 rounded-xl bg-[#F7F8F3] border border-[#CBD5E1] hover:border-[#176B45] transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#176B45]/10 text-[#176B45] flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-display font-bold text-base text-[#0B2E24] mb-2">
                    {uc.title}
                  </h3>
                  <p className="text-xs text-[#39453F] leading-relaxed">
                    {uc.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6.8 FAQs */}
      <section className="py-20 bg-[#F7F8F3] border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FAQAccordion items={CLIMATE_FAQS} />
        </div>
      </section>

      {/* 6.9 Contact CTA */}
      <section className="py-16 bg-[#0B2E24] text-white text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <h2 className="font-display font-bold text-2xl sm:text-3xl text-white">
            Discuss Climate Intelligence Solutions
          </h2>
          <p className="text-sm text-neutral-300 max-w-xl mx-auto">
            Ready to explore custom meteorological modeling or pilot smart climate monitoring on your
            agricultural estate?
          </p>
          <div className="pt-2">
            <button
              onClick={() => navigateTo('contact', '/contact/')}
              className="inline-flex items-center gap-2 px-7 py-3 text-sm font-semibold text-[#0B2E24] bg-[#B5D96A] hover:bg-[#a6cb5c] rounded-xl shadow-md transition-colors"
            >
              <span>Contact MMK Specialists</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
