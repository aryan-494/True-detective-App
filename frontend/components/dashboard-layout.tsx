"use client"

import type { ReactNode } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Search, Info, Shield, Telescope } from "lucide-react"
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog"

interface DashboardLayoutProps {
  children: ReactNode
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  const pathname = usePathname()
  const [openDeveloperPage, setOpenDeveloperPage] = useState(false);

  const navigation = [
    { name: "Analyze Content", href: "/", icon: Search },
    { name: "How It Works", href: "/how-it-works", icon: Info },
    { name: "Responsible AI", href: "/responsible-ai", icon: Shield },
    { name: "Future Scope", href: "/future-scope", icon: Telescope },
    
  ]

  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <aside className="w-64 bg-sidebar border-r border-sidebar-border flex flex-col">
        <div className="p-6 border-b border-sidebar-border">
          <div className="space-y-1">
            <h1 className="text-2xl font-semibold text-sidebar-foreground">TrueDetective</h1>
            <p className="text-sm text-muted-foreground">Think before you share</p>
          </div>
        </div>

        <nav className="flex-1 p-4 space-y-1">
          {navigation.map((item) => {
            const isActive = pathname === item.href
            const Icon = item.icon
            return (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all",
                  isActive
                    ? "bg-sidebar-accent text-sidebar-accent-foreground"
                    : "text-sidebar-foreground hover:bg-sidebar-accent/50",
                )}
              >
                <Icon className="w-5 h-5" />
                {item.name}
              </Link>
            )
          })}
        </nav>

        <div className="p-4 border-t border-sidebar-border">
          <p className=" text-xs text-muted-foreground leading-relaxed text-center ">
            This tool promotes awareness and critical thinking. Users make their own decisions.
          </p>
          <button
  onClick={() => setOpenDeveloperPage(true)}
  className="mt-3 block mx-auto text-xs text-muted-foreground hover:text-foreground transition underline underline-offset-4"
>
  Meet the Developer
</button>
        </div>
      </aside>
     <Dialog open={openDeveloperPage} onOpenChange={setOpenDeveloperPage}>
  <DialogContent className="sm:max-w-md animate-in fade-in zoom-in-95">
    
    <DialogHeader>
      <div className="flex items-center gap-4">
        <img
          src=".\image.png"
          alt="Aryan Mishra"
          className="w-14 h-14 rounded-full object-cover border"
        />
        <div>
          <DialogTitle>Aryan Mishra</DialogTitle>
          <p className="text-sm text-muted-foreground">
            Full-Stack Developer | B.Tech Student
          </p>
        </div>
      </div>
    </DialogHeader>

    <div className="text-sm text-muted-foreground leading-relaxed">
      I designed and developed <strong>TrueDetective</strong> as a full-stack AI
      application focused on misinformation awareness and responsible digital
      behavior.
      <br /><br />
      The system follows a production-ready architecture using Next.js,
      Express.js, and Google Gemini AI for explainable content analysis.
      <br /><br />
      I enjoy building meaningful real-world applications that combine clean UX,
      scalable backend systems, and responsible AI practices.
    </div>

    <DialogFooter className="flex justify-between">
      <div className="flex gap-3">
        <a
          href="https://github.com/aryan-494"
          target="_blank"
          className="text-sm underline"
        >
          GitHub
        </a>
        <a
          href="https://linkedin.com/in/aryanmishra494"
          target="_blank"
          className="text-sm underline"
        >
          LinkedIn
        </a>
      </div>

      <span className="text-xs text-muted-foreground">
        Built by Aryan Mishra
      </span>
    </DialogFooter>

  </DialogContent>
</Dialog>


      {/* Main content */}
      <main className="flex-1 overflow-auto">
        <div className="max-w-6xl mx-auto p-8 lg:p-12">{children}</div>
      </main>
    </div>
  )
}
