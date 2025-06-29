import React from 'react';
import { Metadata } from 'next';
import { getCategories, getTools } from '@/lib/supabase';
import { generateBreadcrumbSchema } from '@/lib/seo';
import { Navigation } from '@/components/navigation';
import { CategoriesPage } from '@/components/pages/categories-page';
import { StructuredDataComponent } from '@/components/seo/structured-data';
import { Breadcrumbs } from '@/components/seo/breadcrumbs';

export const metadata: Metadata = {
  title: 'AI Tool Categories - NSFW AI Tools Directory',
  description: 'Browse all AI tool categories. Find the perfect category for your needs from chatbots to image generators.',
  keywords: [
    'AI categories',
    'NSFW AI tools',
    'AI directory',
    'adult AI categories',
    'AI tool types'
  ],
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://nsfw-ai-tools.vercel.app/categories',
  },
  openGraph: {
    title: 'AI Tool Categories - NSFW AI Tools Directory',
    description: 'Browse all AI tool categories. Find the perfect category for your needs.',
    type: 'website',
    url: 'https://nsfw-ai-tools.vercel.app/categories',
    siteName: 'NSFW AI Tools Directory',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Tool Categories - NSFW AI Tools Directory',
    description: 'Browse all AI tool categories. Find the perfect category for your needs.',
  },
};

export const revalidate = 3600;

export default async function CategoriesPageRoute() {
  const [categories, allTools] = await Promise.all([
    getCategories(),
    getTools({ limit: 1000 })
  ]);

  // Count tools per category
  const categoriesWithCounts = categories.map(category => {
    const toolCount = allTools.filter(tool => tool.category === category.slug).length;
    return {
      ...category,
      toolCount
    };
  });

  // Generate structured data
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: 'https://nsfw-ai-tools.vercel.app' },
    { name: 'Categories', url: 'https://nsfw-ai-tools.vercel.app/categories' }
  ]);

  const breadcrumbItems = [
    { name: 'Categories', href: '/categories', current: true }
  ];

  return (
    <>
      <StructuredDataComponent data={breadcrumbSchema} />
      <div className="min-h-screen">
        <Navigation />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Breadcrumbs items={breadcrumbItems} className="mb-6" />
        </div>
        <CategoriesPage categories={categoriesWithCounts} />
      </div>
    </>
  );
}