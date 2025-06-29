/*
  # Fix SEO columns in ai_tools table

  1. New Columns (if they don't exist)
    - `seo_title` (text) - SEO optimized title for search engines
    - `seo_description` (text) - SEO meta description for search results

  2. Updates
    - Add SEO fields to existing ai_tools table if they don't exist
    - Update existing tools with basic SEO data where missing
    - Add favicon_url column if missing
*/

-- Add seo_title column if it doesn't exist
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'ai_tools' AND column_name = 'seo_title'
  ) THEN
    ALTER TABLE ai_tools ADD COLUMN seo_title text;
    RAISE NOTICE 'Added seo_title column to ai_tools table';
  ELSE
    RAISE NOTICE 'seo_title column already exists in ai_tools table';
  END IF;
END $$;

-- Add seo_description column if it doesn't exist
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'ai_tools' AND column_name = 'seo_description'
  ) THEN
    ALTER TABLE ai_tools ADD COLUMN seo_description text;
    RAISE NOTICE 'Added seo_description column to ai_tools table';
  ELSE
    RAISE NOTICE 'seo_description column already exists in ai_tools table';
  END IF;
END $$;

-- Add favicon_url column if it doesn't exist
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'ai_tools' AND column_name = 'favicon_url'
  ) THEN
    ALTER TABLE ai_tools ADD COLUMN favicon_url text;
    RAISE NOTICE 'Added favicon_url column to ai_tools table';
  ELSE
    RAISE NOTICE 'favicon_url column already exists in ai_tools table';
  END IF;
END $$;

-- Update existing tools with basic SEO data where missing
UPDATE ai_tools 
SET 
  seo_title = CASE 
    WHEN seo_title IS NULL OR seo_title = '' THEN
      CASE 
        WHEN LENGTH(name) <= 60 THEN name
        ELSE SUBSTRING(name FROM 1 FOR 57) || '...'
      END
    ELSE seo_title
  END,
  seo_description = CASE 
    WHEN seo_description IS NULL OR seo_description = '' THEN
      CASE 
        WHEN LENGTH(description) <= 160 THEN description
        ELSE SUBSTRING(description FROM 1 FOR 157) || '...'
      END
    ELSE seo_description
  END
WHERE seo_title IS NULL OR seo_title = '' OR seo_description IS NULL OR seo_description = '';

-- Create indexes for SEO fields if they don't exist
CREATE INDEX IF NOT EXISTS idx_ai_tools_seo_title ON ai_tools(seo_title);
CREATE INDEX IF NOT EXISTS idx_ai_tools_seo_description ON ai_tools(seo_description);

-- Verify the columns exist
DO $$
DECLARE
  seo_title_exists boolean;
  seo_description_exists boolean;
  favicon_url_exists boolean;
BEGIN
  SELECT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'ai_tools' AND column_name = 'seo_title'
  ) INTO seo_title_exists;
  
  SELECT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'ai_tools' AND column_name = 'seo_description'
  ) INTO seo_description_exists;
  
  SELECT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'ai_tools' AND column_name = 'favicon_url'
  ) INTO favicon_url_exists;
  
  IF seo_title_exists AND seo_description_exists AND favicon_url_exists THEN
    RAISE NOTICE 'SUCCESS: All required SEO columns exist in ai_tools table';
  ELSE
    RAISE EXCEPTION 'FAILED: Some columns are still missing. seo_title: %, seo_description: %, favicon_url: %', 
      seo_title_exists, seo_description_exists, favicon_url_exists;
  END IF;
END $$;