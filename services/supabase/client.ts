import { createBrowserClient } from '@supabase/ssr'
import { type Session } from 'next-auth'

export function createClient(session?: Session | null) {
  const client = createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  )

  if (session?.accessToken) {
    client.auth.setSession({
      access_token: session.accessToken as string,
      refresh_token: '',
    })
  }

  return client
}