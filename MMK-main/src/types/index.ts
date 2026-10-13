export type PageId =
  | 'home'
  | 'about'
  | 'climate'
  | 'smart-farming'
  | 'how-it-works'
  | 'impact'
  | 'contact'
  | 'privacy';

export interface SiteConfig {
  heroEyebrow: string;
  heroHeading: string;
  heroDescription: string;
  primaryCtaText: string;
  secondaryCtaText: string;
  videoUrl: string;
  posterImage: string;
  overlayOpacity: number; // 0.1 to 0.95
  brandName: string;
  logoImage: string;
  playVideoFirst: boolean;
  contactEmail: string;
  contactPhone: string;
  officeLocation: string;
}

export interface InquirySubmission {
  id: string;
  fullName: string;
  email: string;
  organization: string;
  inquiryType: string;
  subject: string;
  message: string;
  privacyConsent: boolean;
  submittedAt: string;
}
