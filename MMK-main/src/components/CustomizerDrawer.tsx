import React, { useState } from 'react';
import { useCustomizer } from '../context/CustomizerContext';
import { X, RotateCcw, Check, Sliders, ExternalLink, Code } from 'lucide-react';

export const CustomizerDrawer: React.FC = () => {
  const { config, updateConfig, resetConfig, isEditorOpen, setIsEditorOpen } = useCustomizer();
  const [showJsonExport, setShowJsonExport] = useState(false);
  const [copied, setCopied] = useState(false);

  if (!isEditorOpen) return null;

  const handleCopyJson = () => {
    navigator.clipboard.writeText(JSON.stringify(config, null, 2));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <aside
      className="fixed inset-y-0 right-0 z-50 w-full sm:w-96 bg-white border-l border-[#CBD5E1] shadow-2xl flex flex-col animate-in slide-in-from-right duration-300"
      aria-label="Theme Customizer and Content Settings"
    >
      {/* Drawer Header */}
      <div className="p-4 bg-[#0B2E24] text-white flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Sliders className="w-5 h-5 text-[#B5D96A]" />
          <div>
            <h2 className="font-display font-bold text-sm">MMK Theme Editor</h2>
            <p className="text-[11px] text-[#B5D96A]">Elementor-Style Live Customizer</p>
          </div>
        </div>
        <button
          onClick={() => setIsEditorOpen(false)}
          className="p-1 rounded-md text-white/80 hover:text-white hover:bg-white/10 transition-colors focus:outline-none"
          aria-label="Close Customizer"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Drawer Content */}
      <div className="flex-1 overflow-y-auto p-5 space-y-6 text-sm text-[#39453F]">
        <div className="bg-[#F7F8F3] p-3 rounded-lg border border-[#E2E8F0] text-xs text-[#39453F]">
          <p className="font-semibold text-[#0B2E24] mb-1">Live Editing Enabled</p>
          <p className="leading-relaxed">
            Modify any hero text, video URL, poster image, or overlay opacity below. Changes apply
            instantly in real time and persist across page views.
          </p>
        </div>

        {/* Section: Hero Text */}
        <div className="space-y-3">
          <h3 className="font-display font-semibold text-xs tracking-wider uppercase text-[#0B2E24]">
            1. Hero Content & Copy
          </h3>

          <div>
            <label className="block text-xs font-medium text-neutral-600 mb-1">
              Eyebrow Kicker
            </label>
            <input
              type="text"
              value={config.heroEyebrow}
              onChange={(e) => updateConfig({ heroEyebrow: e.target.value })}
              className="w-full px-3 py-2 text-xs border border-neutral-300 rounded-md focus:border-[#176B45] focus:ring-1 focus:ring-[#176B45]"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-neutral-600 mb-1">
              Main Headline
            </label>
            <textarea
              rows={2}
              value={config.heroHeading}
              onChange={(e) => updateConfig({ heroHeading: e.target.value })}
              className="w-full px-3 py-2 text-xs border border-neutral-300 rounded-md focus:border-[#176B45] focus:ring-1 focus:ring-[#176B45]"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-neutral-600 mb-1">
              Supporting Description
            </label>
            <textarea
              rows={3}
              value={config.heroDescription}
              onChange={(e) => updateConfig({ heroDescription: e.target.value })}
              className="w-full px-3 py-2 text-xs border border-neutral-300 rounded-md focus:border-[#176B45] focus:ring-1 focus:ring-[#176B45]"
            />
          </div>

          <div className="grid grid-cols-2 gap-2">
            <div>
              <label className="block text-xs font-medium text-neutral-600 mb-1">
                Primary Button
              </label>
              <input
                type="text"
                value={config.primaryCtaText}
                onChange={(e) => updateConfig({ primaryCtaText: e.target.value })}
                className="w-full px-3 py-2 text-xs border border-neutral-300 rounded-md focus:border-[#176B45]"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-neutral-600 mb-1">
                Secondary Button
              </label>
              <input
                type="text"
                value={config.secondaryCtaText}
                onChange={(e) => updateConfig({ secondaryCtaText: e.target.value })}
                className="w-full px-3 py-2 text-xs border border-neutral-300 rounded-md focus:border-[#176B45]"
              />
            </div>
          </div>
        </div>

        {/* Section: Video & Media */}
        <div className="space-y-3 pt-3 border-t border-neutral-200">
          <h3 className="font-display font-semibold text-xs tracking-wider uppercase text-[#0B2E24]">
            2. Video & Visual Layer
          </h3>

          {/* Play Video Intro First Toggle */}
          <div className="p-3 bg-white rounded-lg border border-[#CBD5E1] space-y-1">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={config.playVideoFirst}
                onChange={(e) => updateConfig({ playVideoFirst: e.target.checked })}
                className="w-4 h-4 rounded text-[#176B45] accent-[#176B45]"
              />
              <span className="text-xs font-semibold text-[#0B2E24]">
                Play Video First Before Revealing Headings
              </span>
            </label>
            <p className="text-[11px] text-neutral-500 pl-6 leading-relaxed">
              When checked, visitors watch the full background video presentation before the hero
              headings animate into view.
            </p>
          </div>

          <div>
            <label className="block text-xs font-medium text-neutral-600 mb-1">
              Hero Video Source (.mp4)
            </label>
            <input
              type="text"
              value={config.videoUrl}
              onChange={(e) => updateConfig({ videoUrl: e.target.value })}
              className="w-full px-3 py-2 text-xs border border-neutral-300 rounded-md font-mono text-[11px]"
            />
            <p className="mt-1 text-[11px] leading-relaxed text-neutral-500">
              Add your MP4 to the project’s public/videos folder, then enter its path here (for example, /videos/my-farm-video.mp4).
              The hero player auto-plays silently, loops, and pauses while off screen.
            </p>
          </div>

          <div>
            <label className="block text-xs font-medium text-neutral-600 mb-1">
              Poster Fallback Image
            </label>
            <input
              type="text"
              value={config.posterImage}
              onChange={(e) => updateConfig({ posterImage: e.target.value })}
              className="w-full px-3 py-2 text-xs border border-neutral-300 rounded-md font-mono text-[11px]"
            />
          </div>

          <div>
            <div className="flex items-center justify-between text-xs font-medium text-neutral-600 mb-1">
              <span>Dark Overlay Opacity</span>
              <span className="font-mono text-[#176B45]">
                {Math.round(config.overlayOpacity * 100)}%
              </span>
            </div>
            <input
              type="range"
              min="0.2"
              max="0.95"
              step="0.02"
              value={config.overlayOpacity}
              onChange={(e) => updateConfig({ overlayOpacity: parseFloat(e.target.value) })}
              className="w-full accent-[#176B45]"
            />
          </div>
        </div>

        {/* Section: Organization Details */}
        <div className="space-y-3 pt-3 border-t border-neutral-200">
          <h3 className="font-display font-semibold text-xs tracking-wider uppercase text-[#0B2E24]">
            3. Contact & Brand Info
          </h3>

          <div>
            <label className="block text-xs font-medium text-neutral-600 mb-1">Inquiry Email</label>
            <input
              type="email"
              value={config.contactEmail}
              onChange={(e) => updateConfig({ contactEmail: e.target.value })}
              className="w-full px-3 py-2 text-xs border border-neutral-300 rounded-md font-mono"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-neutral-600 mb-1">Support Phone</label>
            <input
              type="text"
              value={config.contactPhone}
              onChange={(e) => updateConfig({ contactPhone: e.target.value })}
              className="w-full px-3 py-2 text-xs border border-neutral-300 rounded-md"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-neutral-600 mb-1">Office Location</label>
            <input
              type="text"
              value={config.officeLocation}
              onChange={(e) => updateConfig({ officeLocation: e.target.value })}
              className="w-full px-3 py-2 text-xs border border-neutral-300 rounded-md"
            />
          </div>
        </div>

        {/* JSON Export Drawer Toggle */}
        <div className="pt-3 border-t border-neutral-200">
          <button
            onClick={() => setShowJsonExport(!showJsonExport)}
            className="flex items-center gap-1.5 text-xs text-[#176B45] font-semibold hover:underline"
          >
            <Code className="w-3.5 h-3.5" />
            <span>{showJsonExport ? 'Hide Export JSON' : 'View Elementor / WP Config JSON'}</span>
          </button>

          {showJsonExport && (
            <div className="mt-2 p-3 bg-neutral-900 text-neutral-200 rounded-md text-[11px] font-mono overflow-x-auto relative">
              <pre>{JSON.stringify(config, null, 2)}</pre>
              <button
                onClick={handleCopyJson}
                className="mt-2 w-full flex items-center justify-center gap-1.5 py-1.5 text-xs font-sans font-medium bg-[#176B45] hover:bg-[#0B2E24] text-white rounded transition-colors"
              >
                {copied ? <Check className="w-3.5 h-3.5" /> : <ExternalLink className="w-3.5 h-3.5" />}
                <span>{copied ? 'Copied to Clipboard' : 'Copy Configuration'}</span>
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Drawer Footer Actions */}
      <div className="p-4 bg-[#F7F8F3] border-t border-neutral-200 flex items-center justify-between gap-3">
        <button
          onClick={resetConfig}
          className="flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-neutral-600 hover:text-neutral-900 hover:bg-neutral-200 rounded-md transition-colors"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>Reset Defaults</span>
        </button>

        <button
          onClick={() => setIsEditorOpen(false)}
          className="flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-[#176B45] hover:bg-[#0B2E24] rounded-md transition-colors"
        >
          <Check className="w-3.5 h-3.5" />
          <span>Apply & Close</span>
        </button>
      </div>
    </aside>
  );
};
