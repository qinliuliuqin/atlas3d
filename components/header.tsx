"use client"

import React from 'react';
import { Box, ChevronRight, Pen, Map } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex h-16 max-w-[1200px] items-center justify-between px-5">
        <a href="/" className="flex items-center gap-2.5 text-xl font-extrabold">
          <img
            src="/asi-logo-black.png"
            alt="Logo"
            className="h-12 w-12 rounded-[8px] transition-transform duration-300 group-hover:scale-110"
          />
          <span>Atlas Spatial Intelligence</span>
        </a>
        <nav className="hidden md:block">
          <ul className="flex items-center gap-5">
            <li className="group relative">
              <a href="#" className="text-foreground/80 hover:text-foreground text-lg py-4">
                Products
              </a>
              <div className="absolute left-0 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-out">
                <div className="w-[320px] rounded-2xl border border-white/[0.08] bg-background/98 backdrop-blur-xl shadow-[0_20px_50px_rgba(0,0,0,0.4)] p-2">
                  <a
                    href="/products/viewer"
                    className="group/item flex items-start gap-4 rounded-xl px-4 py-4 text-lg hover:bg-white/[0.08] transition-all duration-200"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-[#5b8cff]/20 to-[#8d76ff]/20 border border-white/[0.08] group-hover/item:from-[#5b8cff]/30 group-hover/item:to-[#8d76ff]/30 transition-all duration-200">
                      <Box className="h-5 w-5 text-[#5b8cff]" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-semibold text-foreground">Online 3D Viewer</span>
                        <ChevronRight className="h-4 w-4 text-muted-foreground opacity-0 -translate-x-1 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all duration-200" />
                      </div>
                      <p className="text-sm text-muted-foreground leading-snug">
                        Interactive 3D visualization with advanced controls
                      </p>
                    </div>
                  </a>

                  <a
                    href="#"
                    className="group/item flex items-start gap-4 rounded-xl px-4 py-4 text-lg hover:bg-white/[0.08] transition-all duration-200"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-[#8d76ff]/20 to-[#ff7bd5]/20 border border-white/[0.08] group-hover/item:from-[#8d76ff]/30 group-hover/item:to-[#ff7bd5]/30 transition-all duration-200">
                      <Pen className="h-5 w-5 text-[#8d76ff]" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-semibold text-foreground">Annotation Tools</span>
                        <ChevronRight className="h-4 w-4 text-muted-foreground opacity-0 -translate-x-1 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all duration-200" />
                      </div>
                      <p className="text-sm text-muted-foreground leading-snug">
                        Segment anything for any modalities
                      </p>
                    </div>
                  </a>

                  <a
                    href="#"
                    className="group/item flex items-start gap-4 rounded-xl px-4 py-4 text-lg hover:bg-white/[0.08] transition-all duration-200"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-[#5b8cff]/20 to-[#7ee787]/20 border border-white/[0.08] group-hover/item:from-[#5b8cff]/30 group-hover/item:to-[#7ee787]/30 transition-all duration-200">
                      <Map className="h-5 w-5 text-[#7ee787]" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-semibold text-foreground">3D Maps API</span>
                        <ChevronRight className="h-4 w-4 text-muted-foreground opacity-0 -translate-x-1 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all duration-200" />
                      </div>
                      <p className="text-sm text-muted-foreground leading-snug">
                        Centimeter-level precision mapping data
                      </p>
                    </div>
                  </a>
                </div>
              </div>
            </li>
            <li>
              <a href="#services" className="text-foreground/80 hover:text-foreground text-lg">
                Services
              </a>
            </li>
            <li>
              <a href="#blogs" className="text-foreground/80 hover:text-foreground text-lg">
                Blogs
              </a>
            </li>
            <li>
              <a href="#pricing" className="text-foreground/80 hover:text-foreground text-lg">
                Pricing
              </a>
            </li>
            <li>
              <a href="#team" className="text-foreground/80 hover:text-foreground text-lg">
                Team
              </a>
            </li>
            <li>
              <a href="#contact" className="rounded-xl border border-white/15 px-4 py-2.5 hover:bg-white/5 text-lg">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;