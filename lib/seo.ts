import { Metadata } from 'next';
import { AITool, Category } from './database.types';

export interface SEOConfig {
  title: string;
  description: string;
  keywords?: string[];
  canonical?: string;
  openGraph?: {
    title: string;
    description: string;
    type: 'website' | 'article';
    images?: string[];
    url?: string;
  };
  twitter?: {
    card: 'summary' | 'summary_large_image';
    title: string;
    description: string;
    images?: string[];
  };
  robots?: {
    index?: boolean;
    follow?: boolean;
    noarchive?: boolean;
    nosnippet?: boolean;
    noimageindex?: boolean;
  };
  alternates?: {
    canonical?: string;
  };
}

export function generateHomeSEO(): Metadata {
  return {
    title: 'NakedifyAI.com - Best Adult AI Apps & Services',
    description: 'Discover the best NSFW AI tools, adult chatbots, image generators, and more. Comprehensive directory of AI-powered adult services with reviews and comparisons.',
    keywords: [
      'NSFW AI',
      'Adult AI Tools',
      'AI Chatbots',
      'AI Image Generator',
      'Adult AI Services',
      'AI Directory'
    ],
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    alternates: {
      canonical: 'https://nakedifyai.com',
    },
    openGraph: {
      title: 'NakedifyAI.com - Best Adult AI Apps & Services',
      description: 'Discover the best NSFW AI tools, adult chatbots, image generators, and more.',
      type: 'website',
      url: 'https://nakedifyai.com',
      siteName: 'NakedifyAI.com',
      images: [
        {
          url: '/og-image.jpg',
          width: 1200,
          height: 630,
          alt: 'NakedifyAI.com',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: 'NakedifyAI.com - Best Adult AI Apps & Services',
      description: 'Discover the best NSFW AI tools, adult chatbots, image generators, and more.',
      images: ['/og-image.jpg'],
    },
  };
}

export function generateToolSEO(tool: AITool): Metadata {
  const title = tool.seo_title || `${tool.name} - NSFW AI Tool Review`;
  const description = tool.seo_description || tool.description;
  const canonical = `https://nakedifyai.com/ai/${tool.slug}`;
  
  return {
    title,
    description,
    keywords: [
      tool.name,
      tool.category,
      'NSFW AI',
      'AI tools',
      tool.pricing,
      ...(tool.tags || [])
    ],
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    alternates: {
      canonical,
    },
    openGraph: {
      title,
      description,
      type: 'website',
      url: canonical,
      siteName: 'NakedifyAI.com',
      images: tool.screenshot_url ? [
        {
          url: tool.screenshot_url,
          width: 1200,
          height: 630,
          alt: tool.name,
        }
      ] : [],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: tool.screenshot_url ? [tool.screenshot_url] : [],
    },
  };
}

export function generateCategorySEO(category: Category, toolCount: number): Metadata {
  const title = `${category.name} AI Tools - NakedifyAI.com`;
  const description = category.description || `Discover the best ${category.name.toLowerCase()} AI tools and services. Browse our curated collection of ${toolCount} adult AI applications.`;
  const canonical = `https://nakedifyai.com/category/${category.slug}`;
  
  return {
    title,
    description,
    keywords: [
      category.name,
      'NSFW AI tools',
      'AI directory',
      'adult AI',
      category.slug
    ],
    robots: {
      index: true,
      follow: true,
    },
    alternates: {
      canonical,
    },
    openGraph: {
      title,
      description,
      type: 'website',
      url: canonical,
      siteName: 'NakedifyAI.com',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
  };
}

export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "NakedifyAI.com",
    "url": "https://nakedifyai.com",
    "description": "Comprehensive directory of NSFW AI tools, adult chatbots, image generators, and AI-powered adult services.",
    "sameAs": [],
    "logo": {
      "@type": "ImageObject",
      "url": "https://nakedifyai.com/logo.png"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "url": "https://nakedifyai.com/contact"
    }
  };
}

// Structured Data Functions
export function generateToolSchema(tool: AITool) {
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
      name: 'NakedifyAI.com'
    },
    publisher: {
      '@type': 'Organization',
      name: 'NakedifyAI.com',
      logo: {
        '@type': 'ImageObject',
        url: 'https://nakedifyai.com/logo.png'
      }
    }
  };
}

export function generateBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
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

export function generateCategorySchema(category: Category, tools: AITool[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: `${category.name} AI Tools`,
    description: category.description,
    url: `https://nakedifyai.com/category/${category.slug}`,
    mainEntity: {
      '@type': 'ItemList',
      numberOfItems: tools.length,
      itemListElement: tools.map((tool, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        item: {
          '@type': 'SoftwareApplication',
          name: tool.name,
          url: `https://nakedifyai.com/ai/${tool.slug}`,
          description: tool.description
        }
      }))
    }
  };
}