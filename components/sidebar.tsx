"use client"

import { useSupabaseAuth } from "@/hooks/use-supabase-auth"
import { createClient } from '@/utils/supabase/client'
import { useEffect, useState } from 'react'
import { usePathname, useRouter } from "next/navigation"
import { cn } from "@/lib/utils"
import { 
  LayoutDashboard, 
  FileText, 
  ShoppingCart, 
  LayoutGrid, 
  Share2, 
  LogOut 
} from "lucide-react"
import Link from "next/link"

const menuItems = [
  { href: '/dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { href: '/documentos', label: 'Documentos', icon: FileText },
  { href: '/pedidos', label: 'Pedidos', icon: ShoppingCart },
  { href: '/aplicacoes', label: 'Aplicações', icon: LayoutGrid },
  { href: '/compartilhar', label: 'Compartilhar', icon: Share2 },
]

export function Sidebar() {
  const [user, setUser] = useState<any>(null)
  const { signOut } = useSupabaseAuth()
  const supabase = createClient()
  const pathname = usePathname()
  const router = useRouter()

  useEffect(() => {
    const getUser = async () => {
      const { data: { user } } = await supabase.auth.getUser()
      setUser(user)
    }
    getUser()
  }, [supabase])

  const handleSignOut = async () => {
    await signOut()
    router.push('/auth')
  }

  return (
    <aside className="flex h-screen w-64 flex-col bg-gray-800 text-white">
      <div className="p-4">
        <h2 className="text-xl font-bold">Boilerplate</h2>
        <p className="mt-2 text-sm text-gray-400">{user?.email}</p>
      </div>

      <nav className="flex-1">
        <ul className="space-y-1 px-2">
          {menuItems.map((item) => {
            const Icon = item.icon
            const isActive = pathname === item.href

            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={cn(
                    "flex items-center gap-3 rounded-lg px-3 py-2 transition-colors",
                    isActive
                      ? "bg-gray-900 text-white"
                      : "text-gray-400 hover:bg-gray-900 hover:text-white"
                  )}
                >
                  <Icon className="h-5 w-5" />
                  {item.label}
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>

      <div className="p-4">
        <button
          onClick={handleSignOut}
          className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-gray-400 transition-colors hover:bg-gray-900 hover:text-white"
        >
          <LogOut className="h-5 w-5" />
          Sair
        </button>
      </div>
    </aside>
  )
}
