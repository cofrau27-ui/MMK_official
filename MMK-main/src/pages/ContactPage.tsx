import React from 'react';
import { useCustomizer } from '../context/CustomizerContext';
import { ContactForm } from '../components/ContactForm';
import { Mail, Phone, MapPin, Clock, ShieldCheck, MessageSquare } from 'lucide-react';

export const ContactPage: React.FC = () => {
  const { config } = useCustomizer();

  return (
    <div className="w-full bg-[#F7F8F3]">
      {/* 10.1 Page Hero */}
      <section className="relative py-20 lg:py-24 bg-[#0B2E24] text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-semibold tracking-widest text-[#B5D96A] uppercase">
              Contact & Inquiries
            </span>
            <h1 className="font-display font-extrabold text-3xl sm:text-5xl text-white tracking-tight leading-tight">
              Connect with the MMK Team
            </h1>
            <p className="text-base sm:text-lg text-neutral-300 leading-relaxed">
              Have questions about our climate intelligence services, smart farming AI, or partnership
              opportunities? We are here to assist growers, agribusinesses, and institutional partners.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content: Info & Working Contact Form */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left Column: Contact Details & Office Information (5 cols) */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <span className="text-xs font-semibold tracking-wider text-[#176B45] uppercase">
                  Direct Inquiries
                </span>
                <h2 className="font-display font-bold text-2xl sm:text-3xl text-[#0B2E24] mt-1 mb-3">
                  Reach Our Agricultural Advisory Desk
                </h2>
                <p className="text-sm text-[#39453F] leading-relaxed">
                  Our specialists are ready to discuss your specific farming operations, regional
                  climate conditions, or technological integration requirements.
                </p>
              </div>

              {/* Contact Detail Cards */}
              <div className="space-y-4">
                <div className="bg-white p-5 rounded-xl border border-[#CBD5E1] shadow-sm flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#176B45]/10 text-[#176B45] flex items-center justify-center shrink-0 mt-0.5">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-display font-semibold text-sm text-[#0B2E24]">
                      General & Technical Inquiries
                    </h4>
                    <a
                      href={`mailto:${config.contactEmail}`}
                      className="text-sm text-[#176B45] hover:underline font-mono mt-0.5 block break-all"
                    >
                      {config.contactEmail}
                    </a>
                    <span className="text-[11px] text-neutral-500 block mt-1">
                      Response time: Within 24 business hours
                    </span>
                  </div>
                </div>

                <div className="bg-white p-5 rounded-xl border border-[#CBD5E1] shadow-sm flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#176B45]/10 text-[#176B45] flex items-center justify-center shrink-0 mt-0.5">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-display font-semibold text-sm text-[#0B2E24]">
                      Phone & Grower Helpline
                    </h4>
                    <p className="text-sm text-[#39453F] font-mono mt-0.5">
                      {config.contactPhone}
                    </p>
                    <span className="text-[11px] text-neutral-500 block mt-1">
                      Monday to Friday: 9:00 AM – 6:00 PM (PKT)
                    </span>
                  </div>
                </div>

                <div className="bg-white p-5 rounded-xl border border-[#CBD5E1] shadow-sm flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#176B45]/10 text-[#176B45] flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-display font-semibold text-sm text-[#0B2E24]">
                      Regional Agritech Operations
                    </h4>
                    <p className="text-sm text-[#39453F] mt-0.5 leading-snug">
                      {config.officeLocation}
                    </p>
                    <span className="text-[11px] text-neutral-500 block mt-1">
                      Field research trial stations across Punjab & Sindh
                    </span>
                  </div>
                </div>
              </div>

              {/* Data Confidentiality Box */}
              <div className="p-5 rounded-xl bg-[#0B2E24] text-white space-y-2">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-[#B5D96A]" />
                  <h4 className="font-display font-bold text-sm text-white">
                    Data Confidentiality Guarantee
                  </h4>
                </div>
                <p className="text-xs text-neutral-300 leading-relaxed">
                  Your farm coordinates, contact details, and inquiry specifics are strictly confidential.
                  We never monetize or disclose your information to third-party input marketers.
                </p>
              </div>
            </div>

            {/* Right Column: Working Contact Form (7 cols) */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
