'use client'

import { type ReactNode } from 'react'
import { createClient } from '@/lib/supabase/client'
import { redirect } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function AuthLayout({
  children,
}: {
  children: ReactNode
}) {
  const [isLoading, setIsLoading] = useState(true)
  const supabase = createClient()

  useEffect(() => {
    const checkSession = async () => {
      const { data: { session } } = await supabase.auth.getSession()
      if (session) {
        redirect('/dashboard')
      }
      setIsLoading(false)
    }
    checkSession()
  }, [supabase])

  if (isLoading) {
    return null
  }

  return children
} 