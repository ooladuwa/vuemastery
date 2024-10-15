import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://apfzqncbzupyvnepmijp.supabase.co'
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFwZnpxbmNienVweXZuZXBtaWpwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjkwMTAyOTgsImV4cCI6MjA0NDU4NjI5OH0.YXeO8JlaySQEHBRpsudOZ7PBCRyrSPlNAjSEfA5ESiw'
export const supabase = createClient(supabaseUrl, supabaseKey)
