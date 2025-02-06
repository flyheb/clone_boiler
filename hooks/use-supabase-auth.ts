import { createClient } from '@/utils/supabase/client'
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
            full_name: name
          }
        }
      })

      if (error) {
        console.error('Erro no cadastro:', error)
        return { data: null, error }
      }

      console.log('Resposta do cadastro:', data)
      return { data, error: null }
    } catch (err) {
      console.error('Erro inesperado no cadastro:', err)
      return { data: null, error: err as Error }
    }
  }

  const signOut = async () => {
    try {
      const { error } = await supabase.auth.signOut()
      return { error }
    } catch (err) {
      console.error('Erro ao fazer logout:', err)
      return { error: err as Error }
    }
  }

  return {
    signInWithOAuth,
    signInWithEmail,
    signUpWithEmail,
    signOut,
  }
} 