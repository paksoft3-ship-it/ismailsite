export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export interface SiteConfig {
  name: string;
  title: string;
  description: string;
  phone: string;
  whatsapp: string;
  email: string;
  address: string;
  workingHours: string;
  navigation: NavItem[];
  social: {
    facebook: string;
    instagram: string;
    twitter: string;
    youtube: string;
  };
  googleAds: {
    conversionId: string;
    phoneConversionLabel: string;
    whatsappConversionLabel: string;
    formConversionLabel: string;
  };
  gtmId: string;
  gaId: string;
}

export interface Service {
  id: string;
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  icon: string;
  metaTitle: string;
  metaDescription: string;
  heroTitle: string;
  heroDescription: string;
  content: string;
  features: string[];
  process: ProcessStep[];
  faq: FAQ[];
}

export interface City {
  id: string;
  slug: string;
  name: string;
  region: string;
  population: string;
  plateCode: string;
  districts: string[];
  advantages: string[];
  metaTitle: string;
  metaDescription: string;
  content: string;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: string;
  color: string;
}

export interface ProcessStep {
  id: string;
  step: number;
  title: string;
  description: string;
  icon: string;
}

export interface VehicleType {
  id: string;
  title: string;
  description: string;
  icon: string;
  color: string;
  slug: string;
}
