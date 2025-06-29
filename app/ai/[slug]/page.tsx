import React from 'react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getToolBySlug, getAlternativeTools, incrementViews, getTools } from '@/lib/supabase';
import { generateToolSEO, generateToolSchema, generateBreadcrumbSchema } from '@/lib/seo';
import { Navigation } from '@/components/navigation';
import { ToolDetailPage } from '@/components/pages/tool-detail-page';
import { StructuredDataComponent } from '@/components/seo/structured-data';
import { Breadcrumbs } from '@/components/seo/breadcrumbs';

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  try {
    const tools = await getTools({ limit: 1000, status: 'published' });
    return tools.map((tool) => ({
      slug: tool.slug,
    }));
  } catch (error) {
    console.error('Error generating static params for tools:', error);
    return [];
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  try {
    const tool = await getToolBySlug(params.slug);
    return generateToolSEO(tool);
  } catch (error) {
    return {
      title: 'Tool Not Found',
      description: 'The requested AI tool could not be found.',
      robots: {
        index: false,
        follow: false,
      },
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

    // Generate structured data
    const toolSchema = generateToolSchema(tool);
    const breadcrumbSchema = generateBreadcrumbSchema([
      { name: 'Home', url: 'https://nsfw-ai-tools.vercel.app' },
      { name: 'AI Tools', url: 'https://nsfw-ai-tools.vercel.app' },
      { name: tool.category.replace('-', ' '), url: `https://nsfw-ai-tools.vercel.app/category/${tool.category}` },
      { name: tool.name, url: `https://nsfw-ai-tools.vercel.app/ai/${tool.slug}` }
    ]);

    const breadcrumbItems = [
      { name: 'AI Tools', href: '/' },
      { name: tool.category.replace('-', ' '), href: `/category/${tool.category}` },
      { name: tool.name, href: `/ai/${tool.slug}`, current: true }
    ];

    return (
      <>
        <StructuredDataComponent data={[toolSchema, breadcrumbSchema]} />
        <div className="min-h-screen">
          <Navigation />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <Breadcrumbs items={breadcrumbItems} className="mb-6" />
          </div>
          <ToolDetailPage tool={tool} alternativeTools={alternativeTools} />
        </div>
      </>
    );
  } catch (error) {
    notFound();
  }
}