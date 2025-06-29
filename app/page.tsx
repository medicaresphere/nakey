import React from 'react';
import { Metadata } from 'next';
import { getTools, getTags } from '@/lib/supabase';
import { Navigation } from '@/components/navigation';
import { HomePage } from '@/components/pages/home-page';

export const metadata: Metadata = {
  title: 'NSFW AI Tools Directory - Best Adult AI Apps & Services',
  description: 'Discover the best NSFW AI tools, adult chatbots, image generators, and more. Comprehensive directory of AI-powered adult services with reviews and comparisons.',
  openGraph: {
    title: 'NSFW AI Tools Directory - Best Adult AI Apps & Services',
    description: 'Discover the best NSFW AI tools, adult chatbots, image generators, and more.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NSFW AI Tools Directory - Best Adult AI Apps & Services',
    description: 'Discover the best NSFW AI tools, adult chatbots, image generators, and more.',
  },
};

export const revalidate = 3600; // Revalidate every hour

export default async function RootPage() {
  try {
    // Fetch initial data for the home page
    const [initialTools, availableTags] = await Promise.all([
      getTools({ limit: 50, status: 'published' }),
      getTags()
    ]);

    return (
      <div className="min-h-screen">
        <Navigation />
        <HomePage 
          initialTools={initialTools} 
          availableTags={availableTags} 
        />
      </div>
    );
  } catch (error) {
    console.error('Error loading home page data:', error);
    
    // Fallback to empty data if there's an error
    return (
      <div className="min-h-screen">
        <Navigation />
        <HomePage 
          initialTools={[]} 
          availableTags={[]} 
        />
      </div>
    );
  }
}