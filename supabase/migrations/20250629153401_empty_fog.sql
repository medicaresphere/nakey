-- Add quick_description column to ai_tools table
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'ai_tools' AND column_name = 'quick_description'
  ) THEN
    ALTER TABLE ai_tools ADD COLUMN quick_description text;
    RAISE NOTICE 'Added quick_description column to ai_tools table';
  ELSE
    RAISE NOTICE 'quick_description column already exists in ai_tools table';
  END IF;
END $$;

-- Add quick_description column to tool_submissions table
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'tool_submissions' AND column_name = 'quick_description'
  ) THEN
    ALTER TABLE tool_submissions ADD COLUMN quick_description text;
    RAISE NOTICE 'Added quick_description column to tool_submissions table';
  ELSE
    RAISE NOTICE 'quick_description column already exists in tool_submissions table';
  END IF;
END $$;

-- Update existing tools with quick descriptions based on their descriptions
UPDATE ai_tools 
SET quick_description = CASE 
  WHEN LENGTH(description) <= 200 THEN description
  ELSE SUBSTRING(description FROM 1 FOR 197) || '...'
END
WHERE quick_description IS NULL;

-- Create index for quick_description
CREATE INDEX IF NOT EXISTS idx_ai_tools_quick_description ON ai_tools(quick_description);

-- Verify the columns exist
DO $$
DECLARE
  ai_tools_exists boolean;
  tool_submissions_exists boolean;
BEGIN
  SELECT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'ai_tools' AND column_name = 'quick_description'
  ) INTO ai_tools_exists;
  
  SELECT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'tool_submissions' AND column_name = 'quick_description'
  ) INTO tool_submissions_exists;
  
  IF ai_tools_exists AND tool_submissions_exists THEN
    RAISE NOTICE 'SUCCESS: quick_description columns added to both tables';
  ELSE
    RAISE EXCEPTION 'FAILED: Some columns are missing. ai_tools: %, tool_submissions: %', 
      ai_tools_exists, tool_submissions_exists;
  END IF;
END $$;