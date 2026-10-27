export type Language = 'en' | 'fr' | 'sw' | 'lg';

export interface ServiceItem {
  id: string;
  key: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  featured?: boolean;
  subskills: string[];
  metrics: { label: string; value: string };
  deliverables: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  category: 'web' | 'systems' | 'data' | 'all';
  categoryLabel: string;
  description: string;
  longDescription: string;
  tags: string[];
  githubUrl: string;
  liveDemoUrl?: string;
  featured?: boolean;
  highlights: string[];
  metrics: string;
  imageGradient: string;
}

export interface ChatMessage {
  id: string;
  sender: 'user' | 'assistant';
  text: string;
  timestamp: string;
  quickReplies?: string[];
  actionLink?: {
    text: string;
    href: string;
    isExternal?: boolean;
  };
}

export interface ContactFormData {
  fullName: string;
  email: string;
  serviceNeeded: string;
  message: string;
  budget?: string;
}
