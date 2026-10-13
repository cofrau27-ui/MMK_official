import React, { useState } from 'react';
import { useCustomizer } from '../context/CustomizerContext';
import {
  ArrowLeft,
  Mail,
  Phone,
  MapPin,
  Shield,
  Trash2,
  CheckCircle2,
  X,
  ExternalLink,
} from 'lucide-react';
import { MMKLogo } from '../components/MMKLogo';

export const PrivacyPolicyPage: React.FC = () => {
  const { navigateTo } = useCustomizer();
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [deletePhone, setDeletePhone] = useState('');
  const [deleteReason, setDeleteReason] = useState('');
  const [deleteSubmitted, setDeleteSubmitted] = useState(false);

  const handleDeleteRequest = (e: React.FormEvent) => {
    e.preventDefault();
    if (!deletePhone.trim()) return;
    setDeleteSubmitted(true);
    setTimeout(() => {
      // simulate submission
    }, 500);
  };

  return (
    <div className="w-full bg-[#F7F8F3] py-12 sm:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Navigation Breadcrumb / Back button */}
        <div className="mb-6">
          <button
            onClick={() => navigateTo('home', '/')}
            className="inline-flex items-center gap-2 text-xs font-semibold text-[#176B45] hover:text-[#0B2E24] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Home</span>
          </button>
        </div>

        {/* Main Document Card */}
        <article className="bg-white rounded-2xl border border-[#CBD5E1] shadow-md p-6 sm:p-12 space-y-10 text-[#39453F]">
          {/* Header Brand Lockup */}
          <header className="border-b border-[#E2E8F0] pb-8 text-center sm:text-left">
            <div className="flex flex-col sm:flex-row items-center sm:items-start justify-between gap-4">
              <div className="flex items-center gap-3.5">
                <MMKLogo size="xl" />
                <div>
                  <h1 className="font-display font-extrabold text-2xl text-[#0B2E24] tracking-tight leading-tight">
                    Main Aur Mera Kissan
                  </h1>
                  <p className="text-xs font-semibold text-[#176B45] tracking-wide mt-0.5">
                    MMK · Dr. Hanif
                  </p>
                </div>
              </div>

              {/* Urdu Brand Callout */}
              <div className="text-right sm:text-right">
                <span
                  lang="ur"
                  dir="rtl"
                  className="font-display font-bold text-2xl sm:text-3xl text-[#0B2E24] tracking-normal"
                >
                  میں اور میرا کسان
                </span>
                <span className="block text-[11px] text-neutral-500 font-mono mt-0.5">
                  com.mmk.kisaan
                </span>
              </div>
            </div>

            {/* Document Title Banner */}
            <div className="mt-8 pt-6 border-t border-[#F1F5F9] space-y-2">
              <div className="flex flex-wrap items-center gap-2 text-xs text-neutral-500">
                <span className="font-semibold text-[#176B45]">Google Play</span>
                <span aria-hidden="true">·</span>
                <span>User data &amp; privacy</span>
                <span aria-hidden="true">·</span>
                <span>Last Updated: June 24, 2026</span>
              </div>
              <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-[#0B2E24] tracking-tight">
                Privacy Policy — Main Aur Mera Kissan (MMK)
              </h2>
              <p className="text-sm text-neutral-600 leading-relaxed">
                This Privacy Policy applies to the Google Play app{' '}
                <strong>Main Aur Mera Kissan (MMK)</strong> — package{' '}
                <code className="text-xs font-mono bg-neutral-100 px-1.5 py-0.5 rounded text-[#0B2E24]">
                  com.mmk.kisaan
                </code>
                . It explains how we collect, use, share, and protect your information.
              </p>
            </div>
          </header>

          {/* Metadata Specification Grid */}
          <section className="bg-[#F7F8F3] p-5 sm:p-6 rounded-xl border border-[#CBD5E1] space-y-3 text-xs sm:text-sm">
            <h3 className="font-display font-bold text-sm text-[#0B2E24] uppercase tracking-wider mb-2">
              Application &amp; Publisher Registry
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
              <div>
                <span className="text-neutral-500 block">App name (Google Play listing):</span>
                <strong className="text-[#0B2E24]">Main Aur Mera Kissan</strong>
              </div>
              <div>
                <span className="text-neutral-500 block">Also known as:</span>
                <span className="text-[#0B2E24]">
                  Main Aur Mera Kissan (MMK) · MMK · Dr. Hanif ·{' '}
                  <span lang="ur" dir="rtl" className="font-semibold">
                    میں اور میرا کسان
                  </span>
                </span>
              </div>
              <div>
                <span className="text-neutral-500 block">Package name:</span>
                <code className="font-mono text-[#176B45] font-semibold">com.mmk.kisaan</code>
              </div>
              <div>
                <span className="text-neutral-500 block">Publisher / legal entity:</span>
                <strong className="text-[#0B2E24]">
                  FEWSEC Climate Intelligence Agency
                </strong>{' '}
                <span className="text-neutral-600">
                  (operating the Main Aur Mera Kissan / MMK service)
                </span>
              </div>
            </div>
          </section>

          {/* Preamble */}
          <section className="space-y-3 text-sm leading-relaxed">
            <p>
              Main Aur Mera Kissan (MMK) (“Main Aur Mera Kissan”, “MMK”, “we”, “our”, or “us”) is a
              mobile application that provides agricultural advisory services to farmers in
              Pakistan. This Privacy Policy explains how we collect, use, share, and protect your
              information when you use the Main Aur Mera Kissan (MMK) mobile application and related
              services.
            </p>
            <p>
              By using Main Aur Mera Kissan (MMK), you agree to the collection and use of information
              in accordance with this Privacy Policy.
            </p>
          </section>

          {/* 1. Information We Collect */}
          <section className="space-y-4 pt-4 border-t border-[#E2E8F0]">
            <h3 className="font-display font-bold text-lg sm:text-xl text-[#0B2E24]">
              1. Information We Collect
            </h3>
            <p className="text-sm leading-relaxed">
              We may collect the following information when you register for or use the Main Aur Mera
              Kissan (MMK) application:
            </p>
            <ul className="space-y-2.5 text-xs sm:text-sm pl-2">
              <li className="flex items-start gap-2">
                <span className="text-[#176B45] font-bold">·</span>
                <div>
                  <strong>Phone Number:</strong> Used for account registration, login, OTP
                  verification, and account identification.
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#176B45] font-bold">·</span>
                <div>
                  <strong>Name:</strong> Used to personalize your experience and advisory content.
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#176B45] font-bold">·</span>
                <div>
                  <strong>Location Information:</strong> Precise location information, including
                  GPS coordinates, used to determine your agricultural region and provide
                  location-specific advisory content.
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#176B45] font-bold">·</span>
                <div>
                  <strong>Crop Information:</strong> Crop type, crop area, and other farming-related
                  information provided by you.
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#176B45] font-bold">·</span>
                <div>
                  <strong>Subscription and Payment Information:</strong> Payment reference,
                  subscription status, payment confirmation, and related billing records.
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#176B45] font-bold">·</span>
                <div>
                  <strong>Device and Application Information:</strong> App version, device type,
                  operating system, and basic usage information needed to operate, maintain, and
                  improve the application.
                </div>
              </li>
            </ul>

            {/* Location Permission Callout */}
            <div className="bg-[#F7F8F3] p-4 rounded-xl border border-[#CBD5E1] space-y-2 text-xs sm:text-sm">
              <h4 className="font-display font-bold text-[#0B2E24]">Location Permission</h4>
              <p className="leading-relaxed">
                Main Aur Mera Kissan (MMK) requires access to your device’s precise location to
                determine your agricultural region and provide location-based agricultural
                recommendations. Location information is collected when you choose to share your
                location through the application.
              </p>
              <p className="leading-relaxed text-neutral-600">
                If location permission is denied or disabled, some features of the application,
                including region-specific content and personalized recommendations, may not be
                available.
              </p>
            </div>
          </section>

          {/* 2. How We Use Your Information */}
          <section className="space-y-4 pt-4 border-t border-[#E2E8F0]">
            <h3 className="font-display font-bold text-lg sm:text-xl text-[#0B2E24]">
              2. How We Use Your Information
            </h3>
            <p className="text-sm leading-relaxed">
              We use your information for the following purposes:
            </p>
            <ul className="space-y-2 text-xs sm:text-sm list-disc pl-5">
              <li>To create, verify, and manage your Main Aur Mera Kissan (MMK) account.</li>
              <li>To authenticate users through OTP-based login.</li>
              <li>To provide agricultural advisory content based on your location and crop information.</li>
              <li>To personalize recommendations and user experience.</li>
              <li>To manage subscriptions, payments, and billing records.</li>
              <li>To send service-related messages, notifications, updates, and support responses.</li>
              <li>To improve application performance, reliability, and user support.</li>
              <li>To prevent misuse, fraud, unauthorized access, or security issues.</li>
              <li>To comply with legal and regulatory requirements.</li>
            </ul>
            <p className="text-sm font-semibold text-[#176B45] pt-1">
              We do not sell your personal information, and we do not use your personal information
              for third-party advertising.
            </p>
          </section>

          {/* 3. Information Sharing */}
          <section className="space-y-4 pt-4 border-t border-[#E2E8F0]">
            <h3 className="font-display font-bold text-lg sm:text-xl text-[#0B2E24]">
              3. Information Sharing
            </h3>
            <p className="text-sm leading-relaxed">
              We may share limited information with trusted service providers only when necessary to
              operate the Main Aur Mera Kissan (MMK) service, including:
            </p>
            <ul className="space-y-2 text-xs sm:text-sm pl-2">
              <li className="flex items-start gap-2">
                <span className="text-[#176B45] font-bold">·</span>
                <div>
                  <strong>SMS Service Providers:</strong> To send OTP verification codes and service
                  messages.
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#176B45] font-bold">·</span>
                <div>
                  <strong>Payment Service Providers:</strong> To process subscriptions, payment
                  references, and payment confirmations.
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#176B45] font-bold">·</span>
                <div>
                  <strong>Location and Mapping Service Providers:</strong> To determine location-based
                  regional information.
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#176B45] font-bold">·</span>
                <div>
                  <strong>Cloud Hosting and Infrastructure Providers:</strong> To host, operate,
                  secure, and maintain the MMK platform.
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#176B45] font-bold">·</span>
                <div>
                  <strong>Legal Authorities:</strong> Where disclosure is required by applicable
                  law, court order, or government authority.
                </div>
              </li>
            </ul>
            <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
              These service providers are only permitted to use information as needed to provide
              services to Main Aur Mera Kissan (MMK) and are not allowed to use it for unrelated
              purposes.
            </p>
          </section>

          {/* 4. Data Retention */}
          <section className="space-y-3 pt-4 border-t border-[#E2E8F0]">
            <h3 className="font-display font-bold text-lg sm:text-xl text-[#0B2E24]">
              4. Data Retention
            </h3>
            <p className="text-sm leading-relaxed">
              We retain personal information for as long as necessary to provide our services, manage
              your account, comply with legal obligations, resolve disputes, prevent fraud, and
              maintain business records.
            </p>
            <p className="text-sm leading-relaxed">
              When you request account deletion, we will delete or anonymize your personal
              information unless retention is required by applicable law, financial record
              requirements, fraud prevention, dispute resolution, or other legitimate business
              purposes.
            </p>
          </section>

          {/* 5. Account Deletion */}
          <section className="space-y-3 pt-4 border-t border-[#E2E8F0]">
            <h3 className="font-display font-bold text-lg sm:text-xl text-[#0B2E24]">
              5. Account Deletion
            </h3>
            <p className="text-sm leading-relaxed">
              You may request deletion of your Main Aur Mera Kissan (MMK) account and associated
              personal information by contacting support using the contact details below, or by using
              our dedicated account deletion page:{' '}
              <button
                onClick={() => setShowDeleteModal(true)}
                className="text-[#176B45] font-semibold underline hover:text-[#0B2E24] inline-flex items-center gap-1"
              >
                <span>Delete Account — Main Aur Mera Kissan (MMK)</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </button>
              .
            </p>
            <p className="text-sm leading-relaxed">
              If an account deletion option is available inside the application, you may also use
              that feature. After verifying your request, we will delete or anonymize your personal
              information within a reasonable time (typically within 7 business days), except where we
              are required or permitted to retain certain information by law.
            </p>
          </section>

          {/* 6. Your Rights */}
          <section className="space-y-3 pt-4 border-t border-[#E2E8F0]">
            <h3 className="font-display font-bold text-lg sm:text-xl text-[#0B2E24]">
              6. Your Rights
            </h3>
            <p className="text-sm leading-relaxed">You may contact us to:</p>
            <ul className="space-y-1.5 text-xs sm:text-sm list-disc pl-5">
              <li>Request access to the personal information we hold about you.</li>
              <li>Request correction of inaccurate or incomplete information.</li>
              <li>Request deletion of your account and personal information.</li>
              <li>Withdraw consent where processing is based on consent.</li>
              <li>Raise any privacy-related question or complaint.</li>
            </ul>
          </section>

          {/* 7. Data Security */}
          <section className="space-y-3 pt-4 border-t border-[#E2E8F0]">
            <h3 className="font-display font-bold text-lg sm:text-xl text-[#0B2E24]">
              7. Data Security
            </h3>
            <p className="text-sm leading-relaxed">
              We use reasonable technical, administrative, and organizational safeguards to protect
              personal information from unauthorized access, loss, misuse, disclosure, alteration, or
              destruction.
            </p>
            <p className="text-sm leading-relaxed text-neutral-600">
              However, no method of electronic transmission or storage is completely secure. We cannot
              guarantee absolute security of information transmitted through or stored by the
              application.
            </p>
          </section>

          {/* 8. Children's Privacy */}
          <section className="space-y-3 pt-4 border-t border-[#E2E8F0]">
            <h3 className="font-display font-bold text-lg sm:text-xl text-[#0B2E24]">
              8. Children's Privacy
            </h3>
            <p className="text-sm leading-relaxed">
              Main Aur Mera Kissan (MMK) is intended for adult farmers and agricultural users. We do
              not knowingly collect personal information from individuals under the age of 18. If you
              believe a minor has provided personal information through the app, please contact us
              and we will take appropriate action.
            </p>
          </section>

          {/* 9. International or Third-Party Processing */}
          <section className="space-y-3 pt-4 border-t border-[#E2E8F0]">
            <h3 className="font-display font-bold text-lg sm:text-xl text-[#0B2E24]">
              9. International or Third-Party Processing
            </h3>
            <p className="text-sm leading-relaxed">
              Some service providers used by Main Aur Mera Kissan (MMK) may process or store
              information on servers located in Pakistan or other countries. We take reasonable steps
              to ensure that such processing is handled securely and in accordance with this Privacy
              Policy.
            </p>
          </section>

          {/* 10. Changes to This Privacy Policy */}
          <section className="space-y-3 pt-4 border-t border-[#E2E8F0]">
            <h3 className="font-display font-bold text-lg sm:text-xl text-[#0B2E24]">
              10. Changes to This Privacy Policy
            </h3>
            <p className="text-sm leading-relaxed">
              We may update this Privacy Policy from time to time. Any updates will be posted in the
              application or on this page with a revised “Last Updated” date. Continued use of Main
              Aur Mera Kissan (MMK) after changes means you accept the updated policy.
            </p>
          </section>

          {/* 11. Governing Law */}
          <section className="space-y-3 pt-4 border-t border-[#E2E8F0]">
            <h3 className="font-display font-bold text-lg sm:text-xl text-[#0B2E24]">
              11. Governing Law
            </h3>
            <p className="text-sm leading-relaxed">
              This Privacy Policy is governed by the laws of the Islamic Republic of Pakistan. Any
              dispute arising from or relating to this Privacy Policy shall be subject to the
              jurisdiction of the competent courts of Pakistan.
            </p>
          </section>

          {/* 12. Contact Us */}
          <section className="space-y-4 pt-4 border-t border-[#E2E8F0]">
            <h3 className="font-display font-bold text-lg sm:text-xl text-[#0B2E24]">
              12. Contact Us
            </h3>
            <p className="text-sm leading-relaxed">
              If you have questions, requests, or complaints regarding this Privacy Policy or your
              personal information for Main Aur Mera Kissan (MMK), please contact us:
            </p>

            <div className="bg-[#F7F8F3] p-5 sm:p-6 rounded-xl border border-[#CBD5E1] space-y-3 text-xs sm:text-sm">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <span className="text-neutral-500 block">App:</span>
                  <strong className="text-[#0B2E24]">Main Aur Mera Kissan (MMK) · Dr. Hanif</strong>
                </div>
                <div>
                  <span className="text-neutral-500 block">Package:</span>
                  <code className="font-mono text-[#176B45] font-semibold">com.mmk.kisaan</code>
                </div>
                <div>
                  <span className="text-neutral-500 block">Publisher:</span>
                  <strong className="text-[#0B2E24]">FEWSEC Climate Intelligence Agency</strong>
                </div>
                <div>
                  <span className="text-neutral-500 block">Email:</span>
                  <a
                    href="mailto:support@mmkisan.com"
                    className="font-mono text-[#176B45] font-semibold hover:underline"
                  >
                    support@mmkisan.com
                  </a>
                </div>
                <div>
                  <span className="text-neutral-500 block">Phone:</span>
                  <a
                    href="tel:+923344645425"
                    className="font-mono text-[#0B2E24] hover:underline"
                  >
                    +92-334-4645425
                  </a>
                </div>
                <div>
                  <span className="text-neutral-500 block">Address:</span>
                  <span className="text-[#0B2E24]">Office 12, 13, 14 NASTP Old Airport, Islamabad</span>
                </div>
              </div>
            </div>

            <p className="text-xs text-neutral-500 italic">
              This Privacy Policy is provided for the Google Play listing of Main Aur Mera Kissan.
            </p>
          </section>

          {/* Footer Card Lockup */}
          <footer className="border-t border-[#E2E8F0] pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <div className="flex items-center gap-3">
              <MMKLogo size="md" />
              <div>
                <p className="font-display font-bold text-sm text-[#0B2E24]">
                  Main Aur Mera Kissan (MMK)
                </p>
                <p className="text-xs text-[#176B45]">Empowering Pakistan’s farmers</p>
              </div>
            </div>

            <div className="text-xs text-neutral-500">
              © 2026 Main Aur Mera Kissan · Privacy Policy
            </div>
          </footer>
        </article>
      </div>

      {/* Dedicated Account Deletion Modal (Section 5 fulfillment) */}
      {showDeleteModal && (
        <div
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200"
          role="dialog"
          aria-modal="true"
          aria-labelledby="delete-account-title"
        >
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 sm:p-8 border border-neutral-200 shadow-2xl relative space-y-5">
            <button
              onClick={() => {
                setShowDeleteModal(false);
                setDeleteSubmitted(false);
              }}
              className="absolute top-4 right-4 p-2 text-neutral-400 hover:text-neutral-700 rounded-lg focus:outline-none"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>

            {deleteSubmitted ? (
              <div className="text-center py-6 space-y-4">
                <div className="w-14 h-14 rounded-full bg-[#176B45]/15 text-[#176B45] mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-display font-bold text-xl text-[#0B2E24]">
                  Account Deletion Request Received
                </h3>
                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                  Your deletion request for phone number{' '}
                  <strong className="font-mono text-[#0B2E24]">{deletePhone}</strong> has been logged.
                  Our team at FEWSEC / MMK will verify and permanently delete or anonymize your
                  associated records within 7 business days in accordance with Section 5.
                </p>
                <button
                  onClick={() => {
                    setShowDeleteModal(false);
                    setDeleteSubmitted(false);
                    setDeletePhone('');
                    setDeleteReason('');
                  }}
                  className="px-6 py-2.5 text-xs font-semibold bg-[#176B45] text-white rounded-lg hover:bg-[#0B2E24] transition-colors"
                >
                  Close Confirmation
                </button>
              </div>
            ) : (
              <form onSubmit={handleDeleteRequest} className="space-y-4">
                <div className="flex items-center gap-3 text-rose-700">
                  <div className="w-10 h-10 rounded-xl bg-rose-50 flex items-center justify-center shrink-0">
                    <Trash2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 id="delete-account-title" className="font-display font-bold text-lg text-[#0B2E24]">
                      Delete Account — Main Aur Mera Kissan (MMK)
                    </h3>
                    <p className="text-xs text-neutral-500">Google Play Package: com.mmk.kisaan</p>
                  </div>
                </div>

                <p className="text-xs text-neutral-600 leading-relaxed">
                  Per Section 5 of this Privacy Policy, farmers may request complete removal of their
                  account and associated crop records. After verification, data is deleted or
                  anonymized within 7 business days.
                </p>

                <div>
                  <label htmlFor="delete-phone" className="block text-xs font-semibold text-[#0B2E24] mb-1">
                    Registered Mobile Number <span className="text-rose-600">*</span>
                  </label>
                  <input
                    id="delete-phone"
                    type="tel"
                    required
                    value={deletePhone}
                    onChange={(e) => setDeletePhone(e.target.value)}
                    placeholder="e.g. 0300 1234567 / +92 334 4645425"
                    className="w-full px-3 py-2 text-sm border border-neutral-300 rounded-lg focus:outline-none focus:border-[#176B45] font-mono"
                  />
                </div>

                <div>
                  <label htmlFor="delete-reason" className="block text-xs font-semibold text-[#0B2E24] mb-1">
                    Reason for Deletion <span className="text-neutral-400 font-normal">(Optional)</span>
                  </label>
                  <textarea
                    id="delete-reason"
                    rows={2}
                    value={deleteReason}
                    onChange={(e) => setDeleteReason(e.target.value)}
                    placeholder="Optional feedback..."
                    className="w-full px-3 py-2 text-sm border border-neutral-300 rounded-lg focus:outline-none focus:border-[#176B45]"
                  />
                </div>

                <div className="p-3 bg-amber-50 rounded-lg border border-amber-200 text-[11px] text-amber-800 leading-relaxed">
                  You can also email your deletion request directly to{' '}
                  <a
                    href="mailto:support@mmkisan.com?subject=Account%20Deletion%20Request%20-%20com.mmk.kisaan"
                    className="font-mono underline font-semibold"
                  >
                    support@mmkisan.com
                  </a>
                  .
                </div>

                <div className="flex items-center justify-end gap-3 pt-2">
                  <button
                    type="button"
                    onClick={() => setShowDeleteModal(false)}
                    className="px-4 py-2 text-xs font-medium text-neutral-600 hover:bg-neutral-100 rounded-lg"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-2 text-xs font-semibold text-white bg-rose-700 hover:bg-rose-800 rounded-lg transition-colors"
                  >
                    Submit Deletion Request
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
