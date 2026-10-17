// supabase.js - penyambung ke gudang 1GB
import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm'

const supabaseUrl = 'https://qebsrbhebbymarzpdarf.supabase.co'
const supabaseKey = 'sb_publishable_4fKYHQYeYHgkiN6pTpbifA_x1Beb-71'

export const supabase = createClient(supabaseUrl, supabaseKey)
