import { createServerClient, type CookieOptions } from '@supabase/ssr'
import { cookies } from 'next/headers'
import { type User } from '@supabase/supabase-js'

export async function createClient() {
  const cookieStore = await cookies()

  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get(name: string) {
          return cookieStore.get(name)?.value
        },
        set(name: string, value: string, options: CookieOptions) {
          try {
            cookieStore.set(name, value, options)
          } catch {
            // Handle cookie errors silently
          }
        },
        remove(name: string, options: CookieOptions) {
          try {
            cookieStore.set(name, '', { ...options, maxAge: 0 })
          } catch {
            // Handle cookie errors silently
          }
        },
      },
    }
  )
}

export async function signInWithEmail(email: string, password: string): Promise<User | null> {
  const supabase = await createClient()
  const { data } = await supabase.auth.signInWithPassword({
    email,
    password
  })
  return data?.user || null
}

export async function signUpWithEmail(email: string, password: string): Promise<User | null> {
  const supabase = await createClient()
  const { data } = await supabase.auth.signUp({
    email,
    password
  })
  return data?.user || null
}