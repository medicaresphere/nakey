import React from 'react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getToolBySlug, getAlternativeTools, incrementViews, getTools } from '@/lib/supabase';
import { Navigation } from '@/components/navigation';
import { ToolDetailPage } from '@/components/pages/tool-detail-page';

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  try {
    // Get all published tools to generate static params
    const tools = await getTools({ limit: 1000, status: 'published' });
    return tools.map((tool) => ({
      slug: tool.slug,
    }));
  } catch (error) {
    console.error('Error generating static params for tools:', error);
    // Return empty array as fallback
    return [];
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  try {
    const tool = await getToolBySlug(params.slug);
    
    return {
      title: `${tool.name} - NSFW AI Tool Review`,
      description: tool.description,
      openGraph: {
        title: `${tool.name} - NSFW AI Tool Review`,
        description: tool.description,
        type: 'website',
        images: tool.screenshot_url ? [{ url: tool.screenshot_url }] : [],
      },
      twitter: {
        card: 'summary_large_image',
        title: `${tool.name} - NSFW AI Tool Review`,
        description: tool.description,
        images: tool.screenshot_url ? [tool.screenshot_url] : [],
      },
    };
  } catch (error) {
    return {
      title: 'Tool Not Found',
      description: 'The requested AI tool could not be found.',
    };
  }
}

export const revalidate = 3600;

export default async function ToolDetailPageRoute({ params }: Props) {
  try {
    const tool = await getToolBySlug(params.slug);
    
    // Increment views in the background
    incrementViews(tool.id).catch(console.error);
    
    // Get alternative tools
    const alternativeTools = await getAlternativeTools(tool.alt_tools || []);

    return (
      <div className="min-h-screen">
        <Navigation />
        <ToolDetailPage tool={tool} alternativeTools={alternativeTools} />
      </div>
    );
  } catch (error) {
    notFound();
  }
}