import { icons } from './icons';

const { applePay, googlePay, amazon, mastercard, visa } = icons;

export const paymentMethods = [
  { icon: applePay, href: 'https://www.apple.com/apple-pay/' },
  { icon: googlePay, href: 'https://payments.google.com/payments/u/0/home' },
  { icon: visa, href: 'https://www.usa.visa.com' },
  { icon: mastercard, href: 'https://mastercard.com' },
  { icon: amazon, href: 'https://pay.amazon.com/' },
];
