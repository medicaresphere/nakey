import React from 'react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getTools, getCategories } from '@/lib/supabase';
import { Navigation } from '@/components/navigation';
import { CategoryPage } from '@/components/pages/category-page';

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  try {
    // Get all active categories to generate static params
    const categories = await getCategories();
    return categories.map((category) => ({
      slug: category.slug,
    }));
  } catch (error) {
    console.error('Error generating static params for categories:', error);
    // Return empty array as fallback
    return [];
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  try {
    const categories = await getCategories();
    const category = categories.find(cat => cat.slug === params.slug);
    
    if (!category) {
      return {
        title: 'Category Not Found',
        description: 'The requested category could not be found.',
      };
    }

    return {
      title: `${category.name} AI Tools - NSFW AI Directory`,
      description: category.description || `Discover the best ${category.name.toLowerCase()} AI tools and services. Browse our curated collection of adult AI applications.`,
      openGraph: {
        title: `${category.name} AI Tools - NSFW AI Directory`,
        description: category.description || `Discover the best ${category.name.toLowerCase()} AI tools and services.`,
        type: 'website',
      },
    };
  } catch (error) {
    return {
      title: 'Category Not Found',
      description: 'The requested category could not be found.',
    };
  }
}

export const revalidate = 3600;

export default async function CategoryPageRoute({ params }: Props) {
  try {
    const [categories, tools] = await Promise.all([
      getCategories(),
      getTools({ category: params.slug, limit: 100 })
    ]);

    const category = categories.find(cat => cat.slug === params.slug);
    
    if (!category) {
      notFound();
    }

    return (
      <div className="min-h-screen">
        <Navigation />
        <CategoryPage category={category} tools={tools} />
      </div>
    );
  } catch (error) {
    console.error('Error loading category page:', error);
    notFound();
  }
}