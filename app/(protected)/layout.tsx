'use client'

import { Sidebar } from "@/components/sidebar"
import { createClient } from '@/utils/supabase/client'
import { redirect } from "next/navigation"
import { type ReactNode, useEffect, useState } from 'react'

export default function ProtectedLayout({
  children,
}: {
  children: ReactNode
}) {
  const [isLoading, setIsLoading] = useState(true)
  const supabase = createClient()

  useEffect(() => {
    const checkSession = async () => {
      const { data: { session } } = await supabase.auth.getSession()
      if (!session) {
        redirect('/auth')
      }
      setIsLoading(false)
    }
    checkSession()
  }, [supabase])

  if (isLoading) {
    return null
  }

  return (
    <div className="flex h-screen">
      <Sidebar />
      <main className="flex-1 overflow-y-auto p-8">
        {children}
      </main>
    </div>
  )
} 