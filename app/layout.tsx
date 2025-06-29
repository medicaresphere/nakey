import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Toaster } from '@/components/ui/sonner';
import { AgeVerificationProvider } from '@/components/providers/age-verification-provider';
import { ThemeProvider } from '@/components/providers/theme-provider';
import { Footer } from '@/components/footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: 'NSFW AI Tools Directory - Best Adult AI Apps & Services',
    template: '%s | NSFW AI Tools Directory'
  },
  description: 'Discover the best NSFW AI tools, adult chatbots, image generators, and more. Comprehensive directory of AI-powered adult services with reviews and comparisons.',
  keywords: ['NSFW AI', 'Adult AI Tools', 'AI Chatbots', 'AI Image Generator', 'Adult AI Services'],
  authors: [{ name: 'NSFW AI Tools Directory' }],
  creator: 'NSFW AI Tools Directory',
  publisher: 'NSFW AI Tools Directory',
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
    url: 'https://nsfw-ai-tools.vercel.app',
    siteName: 'NSFW AI Tools Directory',
    title: 'NSFW AI Tools Directory - Best Adult AI Apps & Services',
    description: 'Discover the best NSFW AI tools, adult chatbots, image generators, and more.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'NSFW AI Tools Directory',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NSFW AI Tools Directory - Best Adult AI Apps & Services',
    description: 'Discover the best NSFW AI tools, adult chatbots, image generators, and more.',
    images: ['/og-image.jpg'],
  },
  verification: {
    google: 'google-site-verification-code',
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
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