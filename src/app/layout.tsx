// FILE: src/app/layout.tsx
import type { Metadata } from 'next';
import { Inter, Inter_Tight, Roboto_Mono } from 'next/font/google';
import './globals.css';
import BackBar from '@/components/BackBar'

/* ------------- Google Fonts ------------- */
const inter       = Inter({ subsets: ['latin'], variable: '--font-inter' });
const interTight  = Inter_Tight({ subsets: ['latin'], variable: '--font-inter-tight' });
const robotoMono  = Roboto_Mono({ subsets: ['latin'],  variable: '--font-roboto-mono' });

/* ------------- Metadata ------------- */
export const metadata: Metadata = {
  title:       'CarbonTrace MENA – Generate UAE‑compliant ESG reports in minutes',
  description: 'Bilingual, auditor‑ready, built for Decree‑Law 11/2024. CarbonTrace MENA helps businesses generate compliant ESG reports quickly and efficiently.',
  keywords:    'ESG, sustainability, UAE, compliance, carbon footprint, environmental reporting',
  metadataBase: new URL('https://carbontracemena.com'),
  alternates:   { canonical: '/' },

  openGraph: {
    title:       'CarbonTrace MENA – Generate UAE‑compliant ESG reports in minutes',
    description: 'Bilingual, auditor‑ready, built for Decree‑Law 11/2024.',
    url:         'https://carbontracemena.com',
    siteName:    'CarbonTrace MENA',
    locale:      'en_US',
    type:        'website',
    images: [
      { url: '/og-cover.png', width: 1200, height: 630, alt: 'CarbonTrace MENA Open Graph Cover' }
    ],
  },

  twitter: {
    card:        'summary_large_image',
    title:       'CarbonTrace MENA – Generate UAE‑compliant ESG reports in minutes',
    description: 'Bilingual, auditor‑ready, built for Decree‑Law 11/2024.',
    images:      ['/og-cover.png'],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1, 'max-video-preview': -1 },
  },

  icons: [
    { rel: 'icon', url: '/favicon.svg',            type: 'image/svg+xml' },

    { rel: 'icon', url: '/favicon-32x32.png',      sizes: '32x32', type: 'image/png' },
    { rel: 'icon', url: '/favicon-16x16.png',      sizes: '16x16', type: 'image/png' },
    { rel: 'shortcut icon', url: '/favicon.ico',   type: 'image/x-icon' },
    { rel: 'apple-touch-icon', url: '/apple-touch-icon.png', sizes: '180x180' },
  ],

  manifest: '/site.webmanifest',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${interTight.variable} ${robotoMono.variable}`}>
      <head>
  {/* Uncomment when you’re ready to enable Plausible analytics */}
  {/* <script defer data-domain="carbontracemena.com" src="https://plausible.io/js/script.js"></script> */}
</head>


      <body className={`${inter.className} antialiased`}>
        <div className="min-h-screen flex flex-col">
          <BackBar />
          <div className="flex-1">{children}</div>
        </div>
      </body>
    </html>
  );
}
