import React from 'react';
import { Metadata } from 'next';
import { getTools, getTags } from '@/lib/supabase';
import { generateHomeSEO, generateOrganizationSchema } from '@/lib/seo';
import { Navigation } from '@/components/navigation';
import { HomePage } from '@/components/pages/home-page';
import { StructuredDataComponent } from '@/components/seo/structured-data';

export const metadata: Metadata = generateHomeSEO();

export const revalidate = 3600;

export default async function RootPage() {
  try {
    const [initialTools, availableTags] = await Promise.all([
      getTools({ limit: 50, status: 'published' }),
      getTags()
    ]);

    // Generate structured data
    const organizationSchema = generateOrganizationSchema();

    return (
      <>
        <StructuredDataComponent data={organizationSchema} />
        <div className="min-h-screen">
          <Navigation />
          <HomePage 
            initialTools={initialTools} 
            availableTags={availableTags} 
          />
        </div>
      </>
    );
  } catch (error) {
    console.error('Error loading home page data:', error);
    
    return (
      <>
        <StructuredDataComponent data={generateOrganizationSchema()} />
        <div className="min-h-screen">
          <Navigation />
          <HomePage 
            initialTools={[]} 
            availableTags={[]} 
          />
        </div>
      </>
    );
  }
}