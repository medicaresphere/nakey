import { AITool, Category } from './database.types';

export interface StructuredData {
  '@context': string;
  '@type': string;
  [key: string]: any;
}

export function generateToolSchema(tool: AITool): StructuredData {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: tool.name,
    description: tool.description,
    url: tool.url,
    applicationCategory: 'AI Tool',
    operatingSystem: ['Web', 'Android', 'iOS', 'Windows'],
    offers: {
      '@type': 'Offer',
      price: tool.pricing === 'free' ? '0' : '5.99',
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
      priceValidUntil: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toISOString().split('T')[0]
    },
    aggregateRating: tool.rating ? {
      '@type': 'AggregateRating',
      ratingValue: tool.rating,
      reviewCount: tool.review_count || 1,
      bestRating: 5,
      worstRating: 1
    } : undefined,
    screenshot: tool.screenshot_url,
    datePublished: tool.created_at,
    dateModified: tool.updated_at || tool.created_at,
    author: {
      '@type': 'Organization',
      name: 'NSFW AI Tools Directory'
    },
    publisher: {
      '@type': 'Organization',
      name: 'NSFW AI Tools Directory',
      logo: {
        '@type': 'ImageObject',
        url: 'https://nsfw-ai-tools.vercel.app/logo.png'
      }
    }
  };
}

export function generateBreadcrumbSchema(items: Array<{ name: string; url: string }>): StructuredData {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url
    }))
  };
}

export function generateOrganizationSchema(): StructuredData {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'NSFW AI Tools Directory',
    url: 'https://nsfw-ai-tools.vercel.app',
    logo: 'https://nsfw-ai-tools.vercel.app/logo.png',
    description: 'The most comprehensive directory of adult AI tools and services',
    sameAs: [
      'https://twitter.com/nsfwaitools',
      'https://github.com/nsfwaitools'
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Service',
      email: 'contact@nsfwaitools.com'
    }
  };
}

export function generateCategorySchema(category: Category, tools: AITool[]): StructuredData {
  return {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: `${category.name} AI Tools`,
    description: category.description,
    url: `https://nsfw-ai-tools.vercel.app/category/${category.slug}`,
    mainEntity: {
      '@type': 'ItemList',
      numberOfItems: tools.length,
      itemListElement: tools.map((tool, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        item: {
          '@type': 'SoftwareApplication',
          name: tool.name,
          url: `https://nsfw-ai-tools.vercel.app/ai/${tool.slug}`,
          description: tool.description
        }
      }))
    }
  };
}

export function generatePersonSchema(): StructuredData {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'NSFW AI Tools Team',
    jobTitle: 'AI Tools Curator',
    worksFor: {
      '@type': 'Organization',
      name: 'NSFW AI Tools Directory'
    },
    url: 'https://nsfw-ai-tools.vercel.app/about',
    sameAs: [
      'https://twitter.com/nsfwaitools'
    ]
  };
}