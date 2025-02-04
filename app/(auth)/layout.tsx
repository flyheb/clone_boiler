'use client'

import { type ReactNode } from 'react'
import { useAuth } from '@/contexts/auth-context'
import { redirect } from 'next/navigation'

export default function AuthLayout({
  children,
}: {
  children: ReactNode
}) {
  const { session, isLoading } = useAuth()

  if (isLoading) {
    return null // ou um componente de loading
  }

  if (session) {
    redirect('/dashboard')
  }

  return children
} 