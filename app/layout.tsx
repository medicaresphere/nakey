import './globals.css';
import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import { Toaster } from '@/components/ui/sonner';
import { AgeVerificationProvider } from '@/components/providers/age-verification-provider';
import { ThemeProvider } from '@/components/providers/theme-provider';
import { Footer } from '@/components/footer';

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  preload: true,
});

export const metadata: Metadata = {
  metadataBase: new URL('https://nakedifyai.com'),
  title: {
    default: 'NakedifyAI.com - Best Adult AI Apps & Services',
    template: '%s | NakedifyAI.com'
  },
  description: 'Discover the best NSFW AI tools, adult chatbots, image generators, and more. Comprehensive directory of AI-powered adult services with reviews and comparisons.',
  keywords: ['NSFW AI', 'Adult AI Tools', 'AI Chatbots', 'AI Image Generator', 'Adult AI Services'],
  authors: [{ name: 'NakedifyAI.com' }],
  creator: 'NakedifyAI.com',
  publisher: 'NakedifyAI.com',
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
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://nakedifyai.com',
    siteName: 'NakedifyAI.com',
    title: 'NakedifyAI.com - Best Adult AI Apps & Services',
    description: 'Discover the best NSFW AI tools, adult chatbots, image generators, and more.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'NakedifyAI.com',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NakedifyAI.com - Best Adult AI Apps & Services',
    description: 'Discover the best NSFW AI tools, adult chatbots, image generators, and more.',
    images: ['/og-image.jpg'],
    creator: '@nakedifyai',
  },
  verification: {
    google: 'google-site-verification-code',
  },
  alternates: {
    canonical: 'https://nakedifyai.com',
  },
  other: {
    'mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'black-translucent',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#000000' },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://images.pexels.com" />
        
        {/* DNS prefetch for performance */}
        <link rel="dns-prefetch" href="https://qzjfqtuefrocvjrablmq.supabase.co" />
        
        {/* Favicon and app icons */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        
        {/* Robots meta tag */}
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        
        {/* Additional meta tags */}
        <meta name="format-detection" content="telephone=no" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <AgeVerificationProvider>
            <div className="min-h-screen flex flex-col">
              <main className="flex-1">
                {children}
              </main>
              <Footer />
            </div>
            <Toaster />
          </AgeVerificationProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}