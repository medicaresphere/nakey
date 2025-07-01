import { NextResponse } from 'next/server';
import { getTags } from '@/lib/supabase';

export async function GET() {
  const baseUrl = 'https://nakedifyai.com';
  
  try {
    const tags = await getTags();
    
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${tags.map((tag) => `  <url>
    <loc>${baseUrl}/search?tag=${encodeURIComponent(tag)}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.6</priority>
  </url>`).join('\n')}
</urlset>`;

    return new NextResponse(sitemap, {
      headers: {
        'Content-Type': 'application/xml',
        'Cache-Control': 'public, max-age=3600, s-maxage=3600',
      },
    });
  } catch (error) {
    console.error('Error generating tags sitemap:', error);
    return new NextResponse('Error generating sitemap', { status: 500 });
  }
}