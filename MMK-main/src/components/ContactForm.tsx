import React, { useState } from 'react';
import { InquirySubmission } from '../types';
import { useCustomizer } from '../context/CustomizerContext';
import { CheckCircle2, AlertCircle, Send, Check, MailCheck } from 'lucide-react';

export const ContactForm: React.FC = () => {
  const { config } = useCustomizer();

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    organization: '',
    inquiryType: 'General Inquiry',
    subject: '',
    message: '',
    privacyConsent: false,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionSuccess, setSubmissionSuccess] = useState<InquirySubmission | null>(null);

  const validate = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Please enter your full name.';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Please enter your email address.';
    } else if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = 'Please provide a valid email address (e.g. name@domain.com).';
    }

    if (!formData.inquiryType) {
      newErrors.inquiryType = 'Please select an inquiry category.';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Please enter a subject.';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please provide your message or inquiry details.';
    } else if (formData.message.trim().length < 15) {
      newErrors.message = 'Message must be at least 15 characters long.';
    }

    if (!formData.privacyConsent) {
      newErrors.privacyConsent = 'You must acknowledge the privacy consent to submit.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);

    // Simulate reliable server processing and admin notification dispatch
    setTimeout(() => {
      const submission: InquirySubmission = {
        id: `MMK-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`,
        fullName: formData.fullName.trim(),
        email: formData.email.trim(),
        organization: formData.organization.trim(),
        inquiryType: formData.inquiryType,
        subject: formData.subject.trim(),
        message: formData.message.trim(),
        privacyConsent: formData.privacyConsent,
        submittedAt: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };

      try {
        const existing = JSON.parse(localStorage.getItem('mmk_inquiries') || '[]');
        localStorage.setItem('mmk_inquiries', JSON.stringify([submission, ...existing]));
      } catch {
        // ignore
      }

      setIsSubmitting(false);
      setSubmissionSuccess(submission);
      setFormData({
        fullName: '',
        email: '',
        organization: '',
        inquiryType: 'General Inquiry',
        subject: '',
        message: '',
        privacyConsent: false,
      });
      setErrors({});
    }, 700);
  };

  return (
    <div className="bg-white rounded-2xl border border-[#CBD5E1] shadow-xl p-6 sm:p-10">
      {submissionSuccess ? (
        <div className="text-center py-8 space-y-5 animate-in zoom-in-95 duration-300">
          <div className="w-16 h-16 rounded-full bg-[#176B45]/15 text-[#176B45] mx-auto flex items-center justify-center">
            <CheckCircle2 className="w-10 h-10" />
          </div>

          <div>
            <span className="text-xs font-mono font-semibold text-[#176B45] tracking-widest uppercase">
              Inquiry Dispatched Successfully
            </span>
            <h3 className="font-display font-bold text-2xl text-[#0B2E24] mt-1">
              Thank You, {submissionSuccess.fullName}
            </h3>
            <p className="text-sm text-neutral-600 max-w-md mx-auto mt-2 leading-relaxed">
              Your inquiry has been logged with reference number{' '}
              <strong className="font-mono text-[#0B2E24]">{submissionSuccess.id}</strong>. A
              notification has been sent to{' '}
              <span className="font-mono text-[#176B45]">{config.contactEmail}</span>. Our agricultural
              advisory team will review your inquiry within 24 business hours.
            </p>
          </div>

          <div className="p-4 bg-[#F7F8F3] rounded-xl border border-[#E2E8F0] max-w-md mx-auto text-left text-xs text-neutral-700 space-y-1.5">
            <div className="flex justify-between">
              <span className="text-neutral-500">Inquiry Category:</span>
              <span className="font-medium">{submissionSuccess.inquiryType}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-neutral-500">Contact Email:</span>
              <span className="font-medium font-mono">{submissionSuccess.email}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-neutral-500">Subject:</span>
              <span className="font-medium truncate max-w-[240px]">{submissionSuccess.subject}</span>
            </div>
          </div>

          <button
            onClick={() => setSubmissionSuccess(null)}
            className="inline-flex items-center gap-2 px-6 py-2.5 text-xs font-semibold text-[#0B2E24] bg-[#F7F8F3] hover:bg-[#EAECE4] border border-[#CBD5E1] rounded-lg transition-colors"
          >
            Submit Another Inquiry
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} noValidate className="space-y-6">
          <div className="border-b border-[#E2E8F0] pb-4">
            <h3 className="font-display font-bold text-xl sm:text-2xl text-[#0B2E24]">
              Send an Inquiry to MMK
            </h3>
            <p className="text-xs sm:text-sm text-neutral-600 mt-1">
              Connect with our agricultural specialists, explore collaboration, or request a
              discussion on climate intelligence and smart farming solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {/* Full Name */}
            <div>
              <label htmlFor="fullName" className="block text-xs font-semibold text-[#0B2E24] mb-1.5">
                Full Name <span className="text-rose-600">*</span>
              </label>
              <input
                id="fullName"
                type="text"
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                placeholder="e.g. Dr. Tariq Mahmood / Ahmed Raza"
                className={`w-full px-3.5 py-2.5 text-sm rounded-lg border bg-white focus:outline-none focus:ring-2 ${
                  errors.fullName
                    ? 'border-rose-400 focus:ring-rose-200'
                    : 'border-[#CBD5E1] focus:border-[#176B45] focus:ring-[#176B45]/20'
                }`}
              />
              {errors.fullName && (
                <p className="mt-1 text-xs text-rose-600 flex items-center gap-1">
                  <AlertCircle className="w-3.5 h-3.5" /> {errors.fullName}
                </p>
              )}
            </div>

            {/* Email Address */}
            <div>
              <label htmlFor="email" className="block text-xs font-semibold text-[#0B2E24] mb-1.5">
                Email Address <span className="text-rose-600">*</span>
              </label>
              <input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="e.g. tariq@agri-corp.pk"
                className={`w-full px-3.5 py-2.5 text-sm rounded-lg border bg-white focus:outline-none focus:ring-2 ${
                  errors.email
                    ? 'border-rose-400 focus:ring-rose-200'
                    : 'border-[#CBD5E1] focus:border-[#176B45] focus:ring-[#176B45]/20'
                }`}
              />
              {errors.email && (
                <p className="mt-1 text-xs text-rose-600 flex items-center gap-1">
                  <AlertCircle className="w-3.5 h-3.5" /> {errors.email}
                </p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {/* Organization */}
            <div>
              <label htmlFor="organization" className="block text-xs font-semibold text-[#0B2E24] mb-1.5">
                Organization / Farm Estate <span className="text-neutral-400 font-normal">(Optional)</span>
              </label>
              <input
                id="organization"
                type="text"
                value={formData.organization}
                onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                placeholder="e.g. Sindh Agro Consortium / Malik Agri Farm"
                className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-[#CBD5E1] bg-white focus:outline-none focus:border-[#176B45] focus:ring-2 focus:ring-[#176B45]/20"
              />
            </div>

            {/* Inquiry Type */}
            <div>
              <label htmlFor="inquiryType" className="block text-xs font-semibold text-[#0B2E24] mb-1.5">
                Inquiry Type <span className="text-rose-600">*</span>
              </label>
              <select
                id="inquiryType"
                value={formData.inquiryType}
                onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-[#CBD5E1] bg-white focus:outline-none focus:border-[#176B45] focus:ring-2 focus:ring-[#176B45]/20 text-[#39453F]"
              >
                <option value="General Inquiry">General Inquiry</option>
                <option value="Climate Intelligence">Climate Intelligence Services</option>
                <option value="Smart Farming AI">Smart Farming AI</option>
                <option value="Partnership">Partnership & Institutional Collaboration</option>
                <option value="Technical Support">Technical Support</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </div>

          {/* Subject */}
          <div>
            <label htmlFor="subject" className="block text-xs font-semibold text-[#0B2E24] mb-1.5">
              Subject <span className="text-rose-600">*</span>
            </label>
            <input
              id="subject"
              type="text"
              value={formData.subject}
              onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
              placeholder="e.g. Demonstration request for regional irrigation planning"
              className={`w-full px-3.5 py-2.5 text-sm rounded-lg border bg-white focus:outline-none focus:ring-2 ${
                errors.subject
                  ? 'border-rose-400 focus:ring-rose-200'
                  : 'border-[#CBD5E1] focus:border-[#176B45] focus:ring-[#176B45]/20'
              }`}
            />
            {errors.subject && (
              <p className="mt-1 text-xs text-rose-600 flex items-center gap-1">
                <AlertCircle className="w-3.5 h-3.5" /> {errors.subject}
              </p>
            )}
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className="block text-xs font-semibold text-[#0B2E24] mb-1.5">
              Message / Inquiry Details <span className="text-rose-600">*</span>
            </label>
            <textarea
              id="message"
              rows={4}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="Please describe your agricultural operations, specific requirements, or the collaboration topic you would like to discuss with the MMK team..."
              className={`w-full px-3.5 py-2.5 text-sm rounded-lg border bg-white focus:outline-none focus:ring-2 ${
                errors.message
                  ? 'border-rose-400 focus:ring-rose-200'
                  : 'border-[#CBD5E1] focus:border-[#176B45] focus:ring-[#176B45]/20'
              }`}
            />
            {errors.message && (
              <p className="mt-1 text-xs text-rose-600 flex items-center gap-1">
                <AlertCircle className="w-3.5 h-3.5" /> {errors.message}
              </p>
            )}
          </div>

          {/* Privacy Consent Checkbox */}
          <div className="pt-1">
            <label className="flex items-start gap-3 cursor-pointer select-none">
              <input
                type="checkbox"
                checked={formData.privacyConsent}
                onChange={(e) => setFormData({ ...formData, privacyConsent: e.target.checked })}
                className="mt-1 w-4 h-4 rounded text-[#176B45] focus:ring-[#176B45] border-neutral-300 accent-[#176B45]"
              />
              <span className="text-xs text-neutral-600 leading-relaxed">
                I agree to allow MMK (Main Aur Mera Kissan) to process my inquiry details in
                accordance with the{' '}
                <span className="text-[#176B45] font-semibold underline">Privacy Policy</span>.
                We respect your data and do not share contact information with unauthorized parties.
              </span>
            </label>
            {errors.privacyConsent && (
              <p className="mt-1 text-xs text-rose-600 flex items-center gap-1">
                <AlertCircle className="w-3.5 h-3.5" /> {errors.privacyConsent}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <div className="pt-2">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 text-sm font-semibold text-white bg-[#176B45] hover:bg-[#0B2E24] active:bg-[#072119] rounded-xl shadow hover:shadow-md transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus-visible:ring-2 focus-visible:ring-[#176B45]"
            >
              {isSubmitting ? (
                <>
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  <span>Transmitting Inquiry...</span>
                </>
              ) : (
                <>
                  <span>Submit Inquiry to MMK</span>
                  <Send className="w-4 h-4" />
                </>
              )}
            </button>
          </div>
        </form>
      )}
    </div>
  );
};
