import { Translation } from '@/app/i18n/client';

export interface LanguageProps {
  lng: keyof Translation;
}

export interface PageProps {
  params: LanguageProps;
}

export interface Dog {
  image_link: string;
  name: string;
  energy: number;
  min_life_expectancy: number;
  good_with_strangers: number;
  good_with_other_dogs: number;
}

export interface DogInfo {
  data: {
    getByBreed: [Dog];
  };
}
