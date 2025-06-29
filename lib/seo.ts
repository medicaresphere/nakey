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

export function generateToolSEO(tool: AITool): Metadata {
  const title = tool.seo_title || `${tool.name} - NSFW AI Tool Review`;
  const description = tool.seo_description || tool.description;
  const canonical = `https://nsfw-ai-tools.vercel.app/ai/${tool.slug}`;
  
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
      siteName: 'NSFW AI Tools Directory',
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
  const title = `${category.name} AI Tools - NSFW AI Directory`;
  const description = category.description || `Discover the best ${category.name.toLowerCase()} AI tools and services. Browse our curated collection of ${toolCount} adult AI applications.`;
  const canonical = `https://nsfw-ai-tools.vercel.app/category/${category.slug}`;
  
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
      siteName: 'NSFW AI Tools Directory',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
  };
}

export function generateHomeSEO(): Metadata {
  return {
    title: 'NSFW AI Tools Directory - Best Adult AI Apps & Services',
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
      canonical: 'https://nsfw-ai-tools.vercel.app',
    },
    openGraph: {
      title: 'NSFW AI Tools Directory - Best Adult AI Apps & Services',
      description: 'Discover the best NSFW AI tools, adult chatbots, image generators, and more.',
      type: 'website',
      url: 'https://nsfw-ai-tools.vercel.app',
      siteName: 'NSFW AI Tools Directory',
      images: [
        {
          url: '/og-image.jpg',
          width: 1200,
          height: 630,
          alt: 'NSFW AI Tools Directory',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: 'NSFW AI Tools Directory - Best Adult AI Apps & Services',
      description: 'Discover the best NSFW AI tools, adult chatbots, image generators, and more.',
      images: ['/og-image.jpg'],
    },
  };
}