"use client"

import { cn } from "@/utils/utils"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { Button } from "@/components/ui/button"
import { MenuIcon, LayoutDashboard, FileText, ShoppingCart, LayoutGrid, Share2, Moon, User, LogOut } from "lucide-react"
import { useState } from "react"

export function Sidebar() {
  const [isOpen, setIsOpen] = useState(true)

  return (
    <nav className={cn("h-screen border-r bg-background transition-all duration-300", 
      isOpen ? "w-[200px]" : "w-[70px]")}>
      <Sheet>
        <SheetTrigger asChild className="lg:hidden">
          <Button variant="ghost" size="icon" className="md:hidden">
            <MenuIcon className="h-5 w-5" />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-[240px] p-0">
          <SidebarContent isCollapsed={!isOpen} />
        </SheetContent>
      </Sheet>

      <Collapsible
        open={isOpen}
        onOpenChange={setIsOpen}
        className="hidden lg:flex flex-col h-full"
      >
        <div className="space-y-4 py-4">
          <div className="flex justify-end px-3">
            <CollapsibleTrigger asChild>
              <Button variant="ghost" size="icon">
                <MenuIcon className="h-5 w-5" />
              </Button>
            </CollapsibleTrigger>
          </div>
          <CollapsibleContent className="space-y-1" forceMount>
            <SidebarContent isCollapsed={!isOpen} />
          </CollapsibleContent>
        </div>
      </Collapsible>
    </nav>
  )
}

function SidebarContent({ isCollapsed }: { isCollapsed?: boolean }) {
  return (
    <div className="space-y-4 py-4">
      <div className="px-3 space-y-1">
        <Button variant="ghost" className="w-full justify-start">
          <LayoutDashboard className="h-5 w-5" />
          {!isCollapsed && <span className="ml-2">Dashboard</span>}
        </Button>
        <Button variant="ghost" className="w-full justify-start">
          <FileText className="h-5 w-5" />
          {!isCollapsed && <span className="ml-2">Documentos</span>}
        </Button>
        <Button variant="ghost" className="w-full justify-start">
          <ShoppingCart className="h-5 w-5" />
          {!isCollapsed && <span className="ml-2">Pedidos</span>}
        </Button>
        <Button variant="ghost" className="w-full justify-start">
          <LayoutGrid className="h-5 w-5" />
          {!isCollapsed && <span className="ml-2">Aplicações</span>}
        </Button>
        <Button variant="ghost" className="w-full justify-start">
          <Share2 className="h-5 w-5" />
          {!isCollapsed && <span className="ml-2">Compartilhar</span>}
        </Button>
      </div>
      <div className={cn("fixed bottom-4 px-3", isCollapsed ? "w-[70px]" : "w-[240px]")}>
        <div className="flex flex-col gap-4">
          <div className="flex justify-between w-[150px]">
            <Button variant="ghost" size="icon">
              <Moon className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <LogOut className="h-5 w-5" />
            </Button>
          </div>
          <div className="flex items-center gap-2">
            <User className="h-8 w-8 rounded-full bg-muted p-2" />
            {!isCollapsed && <span className="text-sm">_username</span>}
          </div>
        </div>
      </div>
    </div>
  )
}
