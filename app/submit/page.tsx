import React from 'react';
import { Metadata } from 'next';
import { Navigation } from '@/components/navigation';
import { SubmitToolPage } from '@/components/pages/submit-tool-page';

export const metadata: Metadata = {
  title: 'Submit Your AI Tool - NakedifyAI.com',
  description: 'Submit your AI tool to our directory. Get discovered by thousands of users looking for the best AI tools and services.',
  openGraph: {
    title: 'Submit Your AI Tool - NakedifyAI.com',
    description: 'Submit your AI tool to our directory and reach thousands of potential users.',
    type: 'website',
  },
};

export default function SubmitPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <SubmitToolPage />
    </div>
  );
}