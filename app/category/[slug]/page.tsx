import React from 'react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getTools, getCategories } from '@/lib/supabase';
import { generateCategorySEO, generateCategorySchema, generateBreadcrumbSchema } from '@/lib/seo';
import { Navigation } from '@/components/navigation';
import { CategoryPage } from '@/components/pages/category-page';
import { StructuredDataComponent } from '@/components/seo/structured-data';
import { Breadcrumbs } from '@/components/seo/breadcrumbs';

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  try {
    const categories = await getCategories();
    return categories.map((category) => ({
      slug: category.slug,
    }));
  } catch (error) {
    console.error('Error generating static params for categories:', error);
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
        robots: {
          index: false,
          follow: false,
        },
      };
    }

    const tools = await getTools({ category: params.slug, limit: 1000 });
    return generateCategorySEO(category, tools.length);
  } catch (error) {
    return {
      title: 'Category Not Found',
      description: 'The requested category could not be found.',
      robots: {
        index: false,
        follow: false,
      },
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

    // Generate structured data
    const categorySchema = generateCategorySchema(category, tools);
    const breadcrumbSchema = generateBreadcrumbSchema([
      { name: 'Home', url: 'https://nsfw-ai-tools.vercel.app' },
      { name: 'Categories', url: 'https://nsfw-ai-tools.vercel.app/categories' },
      { name: category.name, url: `https://nsfw-ai-tools.vercel.app/category/${category.slug}` }
    ]);

    const breadcrumbItems = [
      { name: 'Categories', href: '/categories' },
      { name: category.name, href: `/category/${category.slug}`, current: true }
    ];

    return (
      <>
        <StructuredDataComponent data={[categorySchema, breadcrumbSchema]} />
        <div className="min-h-screen">
          <Navigation />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <Breadcrumbs items={breadcrumbItems} className="mb-6" />
          </div>
          <CategoryPage category={category} tools={tools} />
        </div>
      </>
    );
  } catch (error) {
    console.error('Error loading category page:', error);
    notFound();
  }
}