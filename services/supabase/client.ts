import { createBrowserClient } from '@supabase/ssr'
import { type Session } from '@supabase/supabase-js'

export function createClient(session?: Session | null) {
  return createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      global: {
        headers: {
          Authorization: session?.access_token ? `Bearer ${session.access_token}` : '',
        },
      },
    }
  )
}