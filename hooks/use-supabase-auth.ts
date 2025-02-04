import { createClient } from '@/services/supabase/client'
import { type Provider } from '@supabase/supabase-js'

export function useSupabaseAuth() {
  const supabase = createClient()

  const signInWithOAuth = async (provider: Provider) => {
    try {
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider,
        options: {
          redirectTo: `${window.location.origin}/auth/callback`,
        },
      })
      if (error) {
        console.error('Erro OAuth:', error.message)
      }
      return { data, error }
    } catch (err) {
      console.error('Erro inesperado OAuth:', err)
      return { data: null, error: err as Error }
    }
  }

  const signInWithEmail = async (email: string, password: string) => {
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      })
      if (error) {
        console.error('Erro login:', error.message)
      }
      return { data, error }
    } catch (err) {
      console.error('Erro inesperado login:', err)
      return { data: null, error: err as Error }
    }
  }

  const signUpWithEmail = async (email: string, password: string, name: string) => {
    try {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            name,
          },
          emailRedirectTo: `${window.location.origin}/auth/callback`,
        },
      })
      if (error) {
        console.error('Erro cadastro:', error.message)
      }
      return { data, error }
    } catch (err) {
      console.error('Erro inesperado cadastro:', err)
      return { data: null, error: err as Error }
    }
  }

  return {
    signInWithOAuth,
    signInWithEmail,
    signUpWithEmail,
  }
} 