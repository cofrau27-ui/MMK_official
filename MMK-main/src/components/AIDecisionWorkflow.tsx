import React, { useState } from 'react';
import { ArrowRight, Check, Sparkles, Database, Brain, UserCheck, Layers } from 'lucide-react';

interface Scenario {
  id: string;
  title: string;
  crop: string;
  step1Input: string;
  step2Data: string;
  step3Analysis: string;
  step4Insight: string;
  step5Decision: string;
}

const SCENARIOS: Scenario[] = [
  {
    id: 'nitrogen',
    title: 'Optimized Nitrogen Top-Dressing',
    crop: 'Wheat (40 Acres)',
    step1Input: 'Farmer enters crop sowing date (Nov 15), soil test baseline, and current canopy greenness index.',
    step2Data: 'Multi-spectral satellite imagery, historical yield curves, local root-zone soil temperature & rain forecasts.',
    step3Analysis: 'Machine learning agronomic model calculates nitrogen uptake rate vs impending rainfall window.',
    step4Insight: 'Apply 35 kg/acre Urea within the next 48 hours before 12mm rain to maximize uptake and eliminate leaching loss.',
    step5Decision: 'Farmer confirms scheduling with local fertilizer retailer; avoids applying during heavy runoff.',
  },
  {
    id: 'irrigation',
    title: 'Precision Irrigation Scheduling',
    crop: 'Cotton (60 Acres)',
    step1Input: 'Farmer reports first flower appearance and observed wilting during peak 2 PM sunlight.',
    step2Data: 'Field soil moisture sensor depth logs, 7-day evapotranspiration forecast, and canal water rotation schedule.',
    step3Analysis: 'Water balance model cross-references canal arrival timeline against root-zone depletion thresholds.',
    step4Insight: 'Prioritize Block B & C for canal irrigation on Wednesday night; conserve tube-well diesel energy on Block A.',
    step5Decision: 'Farmer aligns canal turn with labor crew, reducing tube-well pumping fuel expenses by ~22%.',
  },
  {
    id: 'pest',
    title: 'Targeted Pest Risk Warning',
    crop: 'Rice / Paddy (30 Acres)',
    step1Input: 'Scouting observation: minor whitefly and brown planthopper sightings in perimeter border rows.',
    step2Data: 'Regional pest trap count aggregates, prevailing wind vector maps, ambient relative humidity > 75%.',
    step3Analysis: 'Predictive epidemiological risk algorithm estimates secondary nymph emergence probability within 5 days.',
    step4Insight: 'Threshold is below economic injury level; spray not required yet. Monitor again in 72 hours at dawn.',
    step5Decision: 'Farmer avoids premature, costly broad-spectrum chemical application, preserving beneficial predator insects.',
  },
];

export const AIDecisionWorkflow: React.FC = () => {
  const [activeScenarioId, setActiveScenarioId] = useState<string>('nitrogen');
  const [activeStep, setActiveStep] = useState<number>(0);

  const scenario = SCENARIOS.find((s) => s.id === activeScenarioId) || SCENARIOS[0];

  const steps = [
    {
      num: '01',
      title: 'Farmer Input',
      desc: scenario.step1Input,
      icon: Layers,
      highlight: 'Field Parameters',
    },
    {
      num: '02',
      title: 'Available Data',
      desc: scenario.step2Data,
      icon: Database,
      highlight: 'Sensors & Weather',
    },
    {
      num: '03',
      title: 'AI Analysis',
      desc: scenario.step3Analysis,
      icon: Brain,
      highlight: 'Agronomic Models',
    },
    {
      num: '04',
      title: 'Suggested Insight',
      desc: scenario.step4Insight,
      icon: Sparkles,
      highlight: 'Actionable Guidance',
    },
    {
      num: '05',
      title: 'Human Review & Action',
      desc: scenario.step5Decision,
      icon: UserCheck,
      highlight: 'Farmer In Control',
    },
  ];

  return (
    <div className="bg-white rounded-2xl border border-[#CBD5E1] shadow-lg overflow-hidden">
      {/* Header and scenario switcher */}
      <div className="p-6 bg-[#0B2E24] text-white flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <span className="text-xs font-semibold text-[#B5D96A] uppercase tracking-wider block mb-1">
            Interactive Decision Support Pipeline
          </span>
          <h3 className="font-display font-bold text-xl text-white">
            How MMK Transforms Data into Actionable Agricultural Choices
          </h3>
        </div>

        {/* Scenario Selection Tabs */}
        <div className="flex flex-wrap items-center gap-1.5 p-1 bg-white/10 rounded-xl">
          {SCENARIOS.map((s) => (
            <button
              key={s.id}
              onClick={() => {
                setActiveScenarioId(s.id);
                setActiveStep(0);
              }}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap ${
                activeScenarioId === s.id
                  ? 'bg-[#B5D96A] text-[#0B2E24] font-semibold shadow-sm'
                  : 'text-neutral-200 hover:text-white hover:bg-white/10'
              }`}
            >
              {s.title}
            </button>
          ))}
        </div>
      </div>

      {/* Step Progress Stepper Bar */}
      <div className="px-6 py-4 bg-[#F7F8F3] border-b border-[#E2E8F0] overflow-x-auto">
        <div className="flex items-center min-w-[620px] justify-between">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            const isCurrent = activeStep === idx;
            const isCompleted = activeStep > idx;

            return (
              <React.Fragment key={step.num}>
                <button
                  onClick={() => setActiveStep(idx)}
                  className="flex items-center gap-2 text-left group focus:outline-none"
                >
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-semibold transition-all ${
                      isCurrent
                        ? 'bg-[#176B45] text-white ring-4 ring-[#176B45]/20'
                        : isCompleted
                        ? 'bg-[#0B2E24] text-[#B5D96A]'
                        : 'bg-white border border-[#CBD5E1] text-neutral-500 group-hover:border-neutral-400'
                    }`}
                  >
                    {isCompleted ? <Check className="w-4 h-4" /> : <Icon className="w-4 h-4" />}
                  </div>
                  <div>
                    <span className="block text-[10px] font-mono text-neutral-500 uppercase">
                      Step {step.num}
                    </span>
                    <span
                      className={`block text-xs font-semibold whitespace-nowrap ${
                        isCurrent ? 'text-[#176B45]' : 'text-[#39453F]'
                      }`}
                    >
                      {step.title}
                    </span>
                  </div>
                </button>

                {idx < steps.length - 1 && (
                  <div className="flex-1 mx-3 h-0.5 bg-neutral-200" />
                )}
              </React.Fragment>
            );
          })}
        </div>
      </div>

      {/* Active Step Content Spotlight */}
      <div className="p-6 md:p-8 grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
        <div className="md:col-span-2 space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-medium text-[#176B45] bg-[#176B45]/10 px-2.5 py-1 rounded-md">
            <span>STAGE {steps[activeStep].num} OF 05</span>
            <span aria-hidden="true">·</span>
            <span>{steps[activeStep].highlight}</span>
          </div>

          <h4 className="font-display font-bold text-2xl text-[#0B2E24]">
            {steps[activeStep].title}
          </h4>

          <p className="text-sm text-[#39453F] leading-relaxed">
            {steps[activeStep].desc}
          </p>

          <div className="pt-4 flex items-center gap-3">
            <button
              onClick={() => setActiveStep((prev) => Math.max(0, prev - 1))}
              disabled={activeStep === 0}
              className="px-4 py-2 text-xs font-semibold rounded-lg border border-[#CBD5E1] text-[#39453F] hover:bg-neutral-50 disabled:opacity-40 disabled:cursor-not-allowed"
            >
              Previous Step
            </button>
            <button
              onClick={() => setActiveStep((prev) => Math.min(steps.length - 1, prev + 1))}
              disabled={activeStep === steps.length - 1}
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold rounded-lg bg-[#176B45] text-white hover:bg-[#0B2E24] disabled:opacity-40 disabled:cursor-not-allowed"
            >
              <span>Next Step</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Context Sidebar */}
        <div className="bg-[#F7F8F3] p-5 rounded-xl border border-[#E2E8F0] space-y-3">
          <span className="text-[11px] font-semibold text-neutral-500 uppercase tracking-wider block">
            Selected Scenario Profile
          </span>
          <p className="font-display font-bold text-base text-[#0B2E24]">
            {scenario.title}
          </p>
          <div className="text-xs text-neutral-600 space-y-1.5">
            <div className="flex justify-between py-1 border-b border-neutral-200">
              <span>Target Crop:</span>
              <span className="font-semibold text-[#0B2E24]">{scenario.crop}</span>
            </div>
            <div className="flex justify-between py-1 border-b border-neutral-200">
              <span>Human in the loop:</span>
              <span className="font-semibold text-[#176B45]">Always Required</span>
            </div>
            <div className="flex justify-between py-1">
              <span>Data sovereignty:</span>
              <span className="font-semibold text-neutral-800">100% Farmer-Owned</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
