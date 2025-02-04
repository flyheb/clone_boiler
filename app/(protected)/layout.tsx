'use client'

import { Sidebar } from "@/components/sidebar"
import { useAuth } from "@/contexts/auth-context"
import { redirect } from "next/navigation"
import { type ReactNode } from 'react'

export default function ProtectedLayout({
  children,
}: {
  children: ReactNode
}) {
  const { isLoading, session } = useAuth()

  if (isLoading) {
    return null // ou um componente de loading
  }

  if (!session) {
    redirect('/auth')
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