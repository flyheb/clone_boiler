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
  LogOut,
  ChevronLeft,
  Sun,
  Moon
} from "lucide-react"
import Link from "next/link"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "./ui/collapsible"
import { useTheme } from "@/hooks/use-theme"

const menuItems = [
  { href: '/dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { href: '/documentos', label: 'Documentos', icon: FileText },
  { href: '/pedidos', label: 'Pedidos', icon: ShoppingCart },
  { href: '/aplicacoes', label: 'Aplicações', icon: LayoutGrid },
  { href: '/compartilhar', label: 'Compartilhar', icon: Share2 },
]

export function Sidebar() {
  const [user, setUser] = useState<any>(null)
  const [isCollapsed, setIsCollapsed] = useState(false)
  const { signOut } = useSupabaseAuth()
  const supabase = createClient()
  const pathname = usePathname()
  const router = useRouter()
  const { theme, toggleTheme } = useTheme()

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
    <Collapsible
      open={!isCollapsed}
      onOpenChange={(open) => setIsCollapsed(!open)}
      className={cn(
        "flex h-screen flex-col bg-gray-800 text-white transition-all duration-300 relative",
        isCollapsed ? "w-" : "w-64"
      )}
    >
      <div className="flex items-center justify-between p-4">
        {!isCollapsed && <h2 className="text-xl font-bold">Boilerplate</h2>}
        <CollapsibleTrigger asChild>
          <button 
            className={cn(
              "absolute -right-4 top-6 flex h-8 w-8 items-center justify-center rounded-full bg-gray-800 hover:bg-gray-700",
              "border border-gray-600",
              isCollapsed && "-right-4"
            )}
          >
            <ChevronLeft 
              className={cn(
                "h-7 w-7 transition-transform",
                isCollapsed && "rotate-180"
              )} 
            />
          </button>
        </CollapsibleTrigger>
      </div>

      <CollapsibleContent forceMount className="flex flex-col h-full">
        <nav className="flex-1">
          <ul className="space-y-3 px-2">
            {menuItems.map((item) => {
              const Icon = item.icon
              const isActive = pathname === item.href

              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={cn(
                      "flex items-center transition-colors rounded-lg",
                      isCollapsed ? "justify-center px-2 py-2" : "gap-3 px-3 py-2",
                      isActive
                        ? "bg-gray-900 text-white"
                        : "text-gray-400 hover:bg-gray-900 hover:text-white"
                    )}
                  >
                    <Icon className="h-5 w-5" />
                    {!isCollapsed && item.label}
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>

        <div className="mt-auto border-t border-gray-700">
          <div className="flex items-center justify-between px-2">
            <button
              onClick={handleSignOut}
              className={cn(
                "flex items-center transition-colors rounded-lg",
                isCollapsed ? "justify-center p-2" : "gap-3 p-3",
                "text-gray-400 hover:bg-gray-900 hover:text-white"
              )}
            >
              <LogOut className="h-5 w-5" />
              {!isCollapsed}
            </button>

            <button
              onClick={toggleTheme}
              className="p-2 text-gray-400 hover:bg-gray-900 hover:text-white rounded-lg"
            >
              {theme === 'dark' ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </button>
          </div>

          {user && (
            <div className={cn(
              "px-3 py-2 text-sm text-gray-400",
              isCollapsed && "text-center px-2"
            )}>
              {isCollapsed ? user.email?.[0] : user.email}
            </div>
          )}
        </div>
      </CollapsibleContent>
    </Collapsible>
  )
}