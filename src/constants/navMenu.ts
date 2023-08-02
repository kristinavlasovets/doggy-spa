import { pathes } from './pathes';

const { home, info, spaServices, bookAppointment, blog, aboutUs, contactUs } = pathes;

export const headerNavMenu = [
  {
    name: 'Home.title',
    path: home,
  },
  {
    name: 'Info.title',
    path: info,
  },
  {
    name: 'SpaServices.title',
    path: spaServices,
  },
  {
    name: 'BookAppointment.title',
    path: bookAppointment,
  },
  {
    name: 'Blog.title',
    path: blog,
  },
  {
    name: 'AboutUs.title',
    path: aboutUs,
  },
  {
    name: 'ContactUs.title',
    path: contactUs,
  },
];

export const footerNavMenu = [
  {
    name: 'Home.title',
    path: '/',
  },
  {
    name: 'AboutUs.title',
    path: '/aboutUs',
  },
  {
    name: 'ContactUs.title',
    path: '/contactUs',
  },
  {
    name: 'FAQs.title',
    path: '/',
  },
  {
    name: 'HelpWithNavigation.title',
    path: '/',
  },
];

export const footerServiceMenu = [
  {
    name: 'Blog.title',
    path: '/blog',
  },
  {
    name: 'Cancellations.title',
    path: '/',
  },
  {
    name: 'TrackYourAnimal.title',
    path: '/',
  },
  {
    name: 'LuxeAnnualSpaDay.title',
    path: '/',
  },
  {
    name: 'PaymentOptions.title',
    path: '/',
  },
];

export const footerCopyrightCookieMenu = [
  {
    name: 'CookiePolicy.title',
    path: '/',
  },
  {
    name: 'CookiesSettings.title',
    path: '/',
  },
];

export const footerCopyrightTermsMenu = [
  {
    name: 'Terms.title',
    path: '/',
  },
  {
    name: 'Privacy.title',
    path: '/',
  },
  {
    name: 'Security.title',
    path: '/',
  },
];
