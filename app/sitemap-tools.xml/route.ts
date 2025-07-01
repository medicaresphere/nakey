import { NextResponse } from 'next/server';
import { getTools } from '@/lib/supabase';

export async function GET() {
  const baseUrl = 'https://nakedifyai.com';
  
  try {
    const tools = await getTools({ limit: 1000, status: 'published' });
    
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${tools.map((tool) => `  <url>
    <loc>${baseUrl}/ai/${tool.slug}</loc>
    <lastmod>${new Date(tool.updated_at || tool.created_at).toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
    ${tool.screenshot_url ? `<image:image>
      <image:loc>${tool.screenshot_url}</image:loc>
      <image:title>${tool.name}</image:title>
      <image:caption>${tool.description}</image:caption>
    </image:image>` : ''}
  </url>`).join('\n')}
</urlset>`;

    return new NextResponse(sitemap, {
      headers: {
        'Content-Type': 'application/xml',
        'Cache-Control': 'public, max-age=3600, s-maxage=3600',
      },
    });
  } catch (error) {
    console.error('Error generating tools sitemap:', error);
    return new NextResponse('Error generating sitemap', { status: 500 });
  }
}