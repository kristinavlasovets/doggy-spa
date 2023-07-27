import { Translation } from '@/app/i18n/client';

export interface LanguageProps {
  lng: keyof Translation;
}

export interface PageProps {
  params: LanguageProps;
}

export interface Dog {
  data: {
    breed: {
      message: string;
      status: string;
    };
  };
}
