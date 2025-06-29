import { NextResponse } from 'next/server';
import { getCategories } from '@/lib/supabase';

export async function GET() {
  const baseUrl = 'https://nsfw-ai-tools.vercel.app';
  
  try {
    const categories = await getCategories();
    
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${categories.map((category) => `  <url>
    <loc>${baseUrl}/category/${category.slug}</loc>
    <lastmod>${new Date(category.updated_at).toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`).join('\n')}
</urlset>`;

    return new NextResponse(sitemap, {
      headers: {
        'Content-Type': 'application/xml',
        'Cache-Control': 'public, max-age=3600, s-maxage=3600',
      },
    });
  } catch (error) {
    console.error('Error generating categories sitemap:', error);
    return new NextResponse('Error generating sitemap', { status: 500 });
  }
}