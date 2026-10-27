import { en } from './en';
import { fr } from './fr';
import { sw } from './sw';
import { lg } from './lg';
import { Language } from '../types';

export const translations = {
  en,
  fr,
  sw,
  lg,
};

export const languageMeta: Record<Language, { label: string; nativeName: string; flag: string; code: Language }> = {
  en: { label: 'English', nativeName: 'English', flag: '🇬🇧', code: 'en' },
  fr: { label: 'French', nativeName: 'Français', flag: '🇫🇷', code: 'fr' },
  sw: { label: 'Swahili', nativeName: 'Kiswahili', flag: '🇹🇿', code: 'sw' },
  lg: { label: 'Luganda', nativeName: 'Oluganda', flag: '🇺🇬', code: 'lg' },
};
