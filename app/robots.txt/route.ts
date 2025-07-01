import { NextResponse } from 'next/server';

export function GET() {
  const robotsTxt = `User-agent: *
Allow: /

# Disallow admin and API routes
Disallow: /admindeepak
Disallow: /api/
Disallow: /submit

# Allow specific crawlers
User-agent: Googlebot
Allow: /
Crawl-delay: 1

User-agent: Bingbot
Allow: /
Crawl-delay: 1

# Sitemap locations
Sitemap: https://nakedifyai.com/sitemap.xml
Sitemap: https://nakedifyai.com/sitemap-tools.xml
Sitemap: https://nakedifyai.com/sitemap-categories.xml
Sitemap: https://nakedifyai.com/sitemap-tags.xml

# Host
Host: https://nakedifyai.com
`;

  return new NextResponse(robotsTxt, {
    headers: {
      'Content-Type': 'text/plain',
      'Cache-Control': 'public, max-age=86400',
    },
  });
}