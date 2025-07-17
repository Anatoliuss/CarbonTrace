import type { Metadata } from 'next'
import { Inter, Inter_Tight, Roboto_Mono } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

const interTight = Inter_Tight({ 
  subsets: ['latin'],
  variable: '--font-inter-tight',
})

const robotoMono = Roboto_Mono({ 
  subsets: ['latin'],
  variable: '--font-roboto-mono',
})

export const metadata: Metadata = {
  title: 'CarbonTrace MENA - Generate UAE-compliant ESG reports in minutes',
  description: 'Bilingual, auditor-ready, built for Decree-Law 11/2024. CarbonTrace MENA helps businesses generate compliant ESG reports quickly and efficiently.',
  keywords: 'ESG, sustainability, UAE, compliance, carbon footprint, environmental reporting',
  authors: [{ name: 'CarbonTrace MENA' }],
  creator: 'CarbonTrace MENA',
  publisher: 'CarbonTrace MENA',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://carbontrace.mena'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'CarbonTrace MENA - Generate UAE-compliant ESG reports in minutes',
    description: 'Bilingual, auditor-ready, built for Decree-Law 11/2024.',
    url: 'https://carbontrace.mena',
    siteName: 'CarbonTrace MENA',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CarbonTrace MENA - Generate UAE-compliant ESG reports in minutes',
    description: 'Bilingual, auditor-ready, built for Decree-Law 11/2024.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${interTight.variable} ${robotoMono.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  )
} 