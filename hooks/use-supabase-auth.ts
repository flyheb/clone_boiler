import { createClient } from '@/services/supabase/client'
import { type Provider } from '@supabase/supabase-js'

export function useSupabaseAuth() {
  const supabase = createClient()

  const signInWithOAuth = async (provider: Provider) => {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider,
      options: {
        redirectTo: `${window.location.origin}/auth/callback`,
      },
    })
    return { data, error }
  }

  const signInWithEmail = async (email: string, password: string) => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })
    return { data, error }
  }

  const signUpWithEmail = async (email: string, password: string) => {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${window.location.origin}/auth/callback`,
      },
    })
    return { data, error }
  }

  return {
    signInWithOAuth,
    signInWithEmail,
    signUpWithEmail,
  }
} 