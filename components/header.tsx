"use client"

import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-background/60 backdrop-blur-xl border-b border-white/[0.06]">
      <div className="container mx-auto px-5 text-xl">
        <nav className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2.5 font-extrabold">
            <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-[#5b8cff] via-[#8d76ff] to-[#ff7bd5] shadow-lg" />
            <span>Atlas Spatial Intelligence</span>
          </Link>

          <button
            className="md:hidden p-2.5 rounded-xl border border-white/15 bg-transparent"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            ☰
          </button>

          <ul
            className={`${
              isMenuOpen ? "flex" : "hidden"
            } md:flex flex-col md:flex-row gap-5 md:gap-5.5 items-center absolute md:relative top-16 md:top-0 left-0 right-0 md:left-auto md:right-auto bg-[rgba(12,14,18,0.9)] md:bg-transparent backdrop-blur-md md:backdrop-blur-none p-4.5 md:p-0 border-b md:border-b-0 border-white/[0.08]`}
          >
            <li>
              <Link href="#features" className="hover:text-muted-foreground transition-colors">
                Products
              </Link>
            </li>
            <li>
              <Link href="#services" className="hover:text-muted-foreground transition-colors">
                Services
              </Link>
            </li>
            <li>
              <Link href="#resources" className="hover:text-muted-foreground transition-colors">
                Resources
              </Link>
            </li>
            <li>
              <Link href="#pricing" className="hover:text-muted-foreground transition-colors">
                Pricing
              </Link>
            </li>
            <li>
              <Link href="#team" className="hover:text-muted-foreground transition-colors">
                Team
              </Link>
            </li>
            <li>
              <Button variant="outline" asChild className="rounded-xl bg-transparent text-xl">
                <Link href="#contact">Contact</Link>
              </Button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
