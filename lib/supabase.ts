import { createClient } from '@supabase/supabase-js';
import { Database } from './database.types';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://qzjfqtuefrocvjrablmq.supabase.co';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF6amZxdHVlZnJvY3ZqcmFibG1xIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTA1MDE1MDksImV4cCI6MjA2NjA3NzUwOX0.3LL3j6W4cY0cwrfEYZdXLipXI8Ii2_LtJkKUAKUOsxE';

if (!supabaseUrl) {
  console.error('Missing NEXT_PUBLIC_SUPABASE_URL environment variable');
}

if (!supabaseAnonKey) {
  console.error('Missing NEXT_PUBLIC_SUPABASE_ANON_KEY environment variable');
}

export const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey, {
  auth: {
    persistSession: false,
    autoRefreshToken: false,
    detectSessionInUrl: false
  },
  global: {
    headers: {
      'X-Client-Info': 'nsfw-ai-tools-admin'
    }
  },
  db: {
    schema: 'public'
  }
});

export async function getTools(options?: {
  category?: string;
  isNsfw?: boolean;
  search?: string;
  tags?: string[];
  limit?: number;
  offset?: number;
  status?: string;
}) {
  let query = supabase
    .from('ai_tools')
    .select('*')
    .order('views', { ascending: false });

  if (options?.category) {
    query = query.eq('category', options.category);
  }

  if (typeof options?.isNsfw === 'boolean') {
    query = query.eq('is_nsfw', options.isNsfw);
  }

  if (options?.search) {
    query = query.or(`name.ilike.%${options.search}%,description.ilike.%${options.search}%`);
  }

  if (options?.tags && options.tags.length > 0) {
    query = query.overlaps('tags', options.tags);
  }

  if (options?.status) {
    query = query.eq('status', options.status);
  } else {
    // Default to published tools only
    query = query.eq('status', 'published');
  }

  if (options?.limit) {
    query = query.limit(options.limit);
  }

  if (options?.offset) {
    query = query.range(options.offset, options.offset + (options.limit || 10) - 1);
  }

  const { data, error } = await query;

  if (error) {
    console.error('Error fetching tools:', error);
    throw new Error(error.message);
  }

  return data || [];
}

export async function getToolBySlug(slug: string) {
  const { data, error } = await supabase
    .from('ai_tools')
    .select('*')
    .eq('slug', slug)
    .eq('status', 'published')
    .single();

  if (error) {
    console.error('Error fetching tool by slug:', error);
    throw new Error(error.message);
  }

  return data;
}

export async function incrementViews(toolId: string) {
  try {
    const { error } = await supabase.rpc('increment_views', { tool_id: toolId });
    
    if (error) {
      console.error('Error incrementing views:', error);
    }
  } catch (error) {
    console.error('Error calling increment_views function:', error);
  }
}

export async function getCategories() {
  const { data, error } = await supabase
    .from('categories')
    .select('*')
    .eq('is_active', true)
    .order('sort_order', { ascending: true });

  if (error) {
    console.error('Error fetching categories:', error);
    throw new Error(error.message);
  }

  return data || [];
}

export async function getTags() {
  const { data, error } = await supabase
    .from('tags')
    .select('*')
    .eq('is_active', true)
    .order('usage_count', { ascending: false });

  if (error) {
    console.error('Error fetching tags:', error);
    throw new Error(error.message);
  }

  return data?.map(tag => tag.name) || [];
}

export async function getCollections() {
  const { data, error } = await supabase
    .from('collections')
    .select('*')
    .eq('is_public', true)
    .order('sort_order', { ascending: true });

  if (error) {
    console.error('Error fetching collections:', error);
    throw new Error(error.message);
  }

  return data || [];
}

export async function getAlternativeTools(toolIds: string[]) {
  if (toolIds.length === 0) return [];

  const { data, error } = await supabase
    .from('ai_tools')
    .select('*')
    .in('id', toolIds)
    .eq('status', 'published');

  if (error) {
    console.error('Error fetching alternative tools:', error);
    throw new Error(error.message);
  }

  return data || [];
}

export async function getFeaturedTools(limit: number = 10) {
  const { data, error } = await supabase
    .from('ai_tools')
    .select('*')
    .eq('is_featured', true)
    .eq('status', 'published')
    .order('views', { ascending: false })
    .limit(limit);

  if (error) {
    console.error('Error fetching featured tools:', error);
    throw new Error(error.message);
  }

  return data || [];
}

export async function getToolsByCategory(categorySlug: string, limit?: number) {
  let query = supabase
    .from('ai_tools')
    .select('*')
    .eq('category', categorySlug)
    .eq('status', 'published')
    .order('views', { ascending: false });

  if (limit) {
    query = query.limit(limit);
  }

  const { data, error } = await query;

  if (error) {
    console.error('Error fetching tools by category:', error);
    throw new Error(error.message);
  }

  return data || [];
}

export async function searchTools(searchQuery: string, filters?: {
  category?: string;
  pricing?: string;
  tags?: string[];
  isNsfw?: boolean;
}) {
  let query = supabase
    .from('ai_tools')
    .select('*')
    .eq('status', 'published');

  // Add search conditions
  if (searchQuery) {
    query = query.or(`name.ilike.%${searchQuery}%,description.ilike.%${searchQuery}%,tags.cs.{${searchQuery}}`);
  }

  // Add filters
  if (filters?.category) {
    query = query.eq('category', filters.category);
  }

  if (filters?.pricing) {
    query = query.eq('pricing', filters.pricing);
  }

  if (filters?.tags && filters.tags.length > 0) {
    query = query.overlaps('tags', filters.tags);
  }

  if (typeof filters?.isNsfw === 'boolean') {
    query = query.eq('is_nsfw', filters.isNsfw);
  }

  query = query.order('views', { ascending: false });

  const { data, error } = await query;

  if (error) {
    console.error('Error searching tools:', error);
    throw new Error(error.message);
  }

  return data || [];
}