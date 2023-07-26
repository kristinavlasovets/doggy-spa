import React, { ReactNode } from 'react';
import { dir } from 'i18next';

import Footer from '@/components/Footer';
import { LanguageContextProvider } from '@/context/LanguageContext';

import { languages } from '../i18n/settings';

export const metadata = {
  title: 'Modsen Doggy Spa',
  description: 'Book your doggy spa day',
};

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}

export default function RootLayout({
  children,
  params: { lng },
}: {
  children: ReactNode;
  params: { lng: 'ru' | 'en' };
}) {
  return (
    <html lang={lng} dir={dir(lng)}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cinzel+Decorative:wght@400;700&family=Cormorant:wght@400;500;600;700&family=Tangerine:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <LanguageContextProvider lng={lng}>
          <>
            {children}
            <Footer />
          </>
        </LanguageContextProvider>
      </body>
    </html>
  );
}
