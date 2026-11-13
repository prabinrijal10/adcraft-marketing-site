import type { Metadata } from 'next';
import { Inter, Manrope } from 'next/font/google';
import './globals.css';
import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-display',
});

export const metadata: Metadata = {
  title: 'AdCraft Marketing | Facebook, Instagram & WhatsApp Ads',
  description:
    'AdCraft Marketing helps E-commerce, Real Estate and Service Businesses grow through strategic Facebook, Instagram and WhatsApp advertising.',
  keywords: [
    'AdCraft Marketing',
    'Meta Ads',
    'Facebook ads',
    'Instagram ads',
    'WhatsApp ads',
    'advertising agency',
    'digital marketing',
  ],
  openGraph: {
    title: 'AdCraft Marketing',
    description:
      'Strategic Advertising. Creative Thinking. Measurable Growth.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AdCraft Marketing',
    description: 'Strategic Advertising. Creative Thinking. Measurable Growth.',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${manrope.variable} bg-white text-brand-navy antialiased`}>
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
