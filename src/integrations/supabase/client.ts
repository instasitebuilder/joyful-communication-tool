// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://fonzbkswaoqughxituyv.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZvbnpia3N3YW9xdWdoeGl0dXl2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzUzMTg1NjYsImV4cCI6MjA1MDg5NDU2Nn0.Csv0XpCKq1ADCGhar77YWN85_FsQwsNmDJqjGh2JkLU";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);