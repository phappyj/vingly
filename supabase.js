// Supabase 설정
import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm'

const SUPABASE_URL = 'https://hzrhpdqrrzhnhnaelaie.supabase.co'
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh6cmhwZHFycnpobmhuYWVsYWllIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODI4NjE5NTgsImV4cCI6MjA5ODQzNzk1OH0.iEhPtyWD09rEp6OIJf7eN5gC0yqtj-0xlGHvS3bZZHI'

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)
