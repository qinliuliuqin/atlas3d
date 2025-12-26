"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function LandingPage() {
  const [showSignup, setShowSignup] = useState(false)
  const [showLogin, setShowLogin] = useState(false)

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="mx-auto flex h-16 max-w-[1200px] items-center justify-between px-5">
          <a href="#" className="flex items-center gap-2.5 text-xl font-extrabold">
            <span
              className="h-7 w-7 rounded-[8px] bg-gradient-to-br from-[#5b8cff] via-[#8d76ff] to-[#ff7bd5] shadow-[0_10px_30px_rgba(0,0,0,0.25)]"
              aria-hidden="true"
            ></span>
            <span>Atlas Spatial Intelligence</span>
          </a>
          <nav className="hidden md:block">
            <ul className="flex items-center gap-5">
              <li>
                <a href="#features" className="text-foreground/100 hover:text-foreground text-lg">
                  Products
                </a>
              </li>
              <li>
                <a href="#services" className="text-foreground/100 hover:text-foreground text-lg">
                  Services
                </a>
              </li>
              <li>
                <a href="#resrouces" className="text-foreground/100 hover:text-foreground text-lg">
                  Resources
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-foreground/100 hover:text-foreground text-lg">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#team" className="text-foreground/100 hover:text-foreground text-lg">
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

      {/* Hero Section */}
      <section className="relative overflow-hidden py-12 md:py-25">
        <div className="mx-auto max-w-[1200px] px-5">
          <div className="grid items-center gap-8 md:grid-cols-[1.2fr_1fr]">
            <div>
              <h1 className="mb-3 text-balance text-4xl font-bold leading-tight md:text-5xl">
                High-precision{" "}
                <span className="bg-gradient-to-br from-[#5b8cff] via-[#8d76ff] to-[#ff7bd5] bg-clip-text text-transparent">
                  3D maps
                </span>{" "}
                for{" "}
                <span className="bg-gradient-to-br from-[#5b8cff] via-[#8d76ff] to-[#ff7bd5] bg-clip-text text-transparent">
                  spatial intelligence
                </span>
              </h1>
              <p className="mb-6 text-lg text-muted-foreground">
                We build the world's first centimeter-level, semantically rich 3D maps to power spatial intelligence,
                from drone logistics to city-scale digital twins.
              </p>
              <div className="flex flex-wrap gap-3">
                <a href="#contact">
                  <Button
                    size="lg"
                    className="rounded-lg bg-[#5b8cff] text-lg font-bold shadow-[0_10px_30px_rgba(0,0,0,0.25)] hover:bg-[#4a7bef]"
                  >
                    Book demo
                  </Button>
                </a>
              </div>
            </div>
            <div>
              <Card className="overflow-hidden border-white/[0.08] bg-card p-0 shadow-[0_10px_30px_rgba(0,0,0,0.25)]">
                <div className="relative aspect-[16/10] overflow-hidden rounded-[14px] border border-white/[0.08] bg-gradient-to-br from-[#5b8cff]/35 via-transparent to-[#7ee787]/30">
                  <img
                    src="/annotation_results.gif"
                    alt="3D mapping visualization"
                    className="h-full w-full object-cover opacity-85"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/25" />
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="border-border/40 py-12 md:py-15">
        <div className="mx-auto max-w-[1200px] px-5">
          <h2 className="mb-3 text-balance text-3xl font-bold md:text-4xl">Why choose our maps</h2>
          <p className="mb-6 text-lg text-muted-foreground">
            Engineered for precision, scale, and real-world deployment.
          </p>
          <div className="grid gap-[18px] md:grid-cols-2 lg:grid-cols-3">
            <Card className="border-white/[0.08] bg-card p-[18px] shadow-[0_10px_30px_rgba(0,0,0,0.25)]">
              <div className="mb-1 inline-flex w-fit items-center gap-2 rounded-full bg-white/[0.06] px-2.5 py-1.5 font-semibold text-muted-foreground">
                🎯 Precision
              </div>
              <h3 className="-mt-1 text-xl font-bold leading-none">Centimeter-level accuracy</h3>
              <p className="text-lg text-muted-foreground">
                Robust geo-registration and QA pipelines minimize drift and noise.
              </p>
            </Card>
            <Card className="border-white/[0.08] bg-card p-[18px] shadow-[0_10px_30px_rgba(0,0,0,0.25)]">
              <div className="mb-1 inline-flex w-fit items-center gap-2 rounded-full bg-white/[0.06] px-2.5 py-1.5 font-semibold text-muted-foreground">
                🧠 Semantics
              </div>
              <h3 className="-mt-1 text-xl font-bold leading-none">Rich, layered semantics</h3>
              <p className="text-lg text-muted-foreground">
                Roads, facades, trees, powerlines, curb ramps — all vectorized.
              </p>
            </Card>
            <Card className="border-white/[0.08] bg-card p-[18px] shadow-[0_10px_30px_rgba(0,0,0,0.25)]">
              <div className="mb-1 inline-flex w-fit items-center gap-2 rounded-full bg-white/[0.06] px-2.5 py-1.5 font-semibold text-muted-foreground">
                ⚡ Performance
              </div>
              <h3 className="-mt-1 text-xl font-bold leading-none">10× faster queries</h3>
              <p className="text-lg text-muted-foreground">
                Spatial indices and streamable tiles cut latency for path planning.
              </p>
            </Card>
            <Card className="border-white/[0.08] bg-card p-[18px] shadow-[0_10px_30px_rgba(0,0,0,0.25)]">
              <div className="mb-1 inline-flex w-fit items-center gap-2 rounded-full bg-white/[0.06] px-2.5 py-1.5 font-semibold text-muted-foreground">
                🔌 Integrations
              </div>
              <h3 className="-mt-1 text-xl font-bold leading-none">Works with your stack</h3>
              <p className="text-lg text-muted-foreground">ROS2, WebGL, Cesium, Unreal, and common GIS formats.</p>
            </Card>
            <Card className="border-white/[0.08] bg-card p-[18px] shadow-[0_10px_30px_rgba(0,0,0,0.25)]">
              <div className="mb-1 inline-flex w-fit items-center gap-2 rounded-full bg-white/[0.06] px-2.5 py-1.5 font-semibold text-muted-foreground">
                🛡️ Reliability
              </div>
              <h3 className="-mt-1 text-xl font-bold leading-none">Enterprise-grade ops</h3>
              <p className="text-lg text-muted-foreground">SLAs, versioned updates, signed tiles, and audit trails.</p>
            </Card>
            <Card className="border-white/[0.08] bg-card p-[18px] shadow-[0_10px_30px_rgba(0,0,0,0.25)]">
              <div className="mb-1 inline-flex w-fit items-center gap-2 rounded-full bg-white/[0.06] px-2.5 py-1.5 font-semibold text-muted-foreground">
                🌐 Open
              </div>
              <h3 className="-mt-1 text-xl font-bold leading-none">APIs & SDKs</h3>
              <p className="text-lg text-muted-foreground">
                REST/GraphQL tile APIs and client SDKs for web, mobile, and C++.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Services/Solutions Section */}
      <section id="services" className="border-border/40 py-12 md:py-20">
        <div className="mx-auto max-w-[1200px] px-5">
          <h2 className="mb-3 text-balance text-3xl font-bold md:text-4xl">Annotation services</h2>
          <p className="mb-6 text-lg text-muted-foreground">
            We provide annotation services for mesh semantic segmentation.
          </p>
          <div className="grid gap-[18px] md:grid-cols-2">
            <div className="overflow-hidden rounded-[14px] border border-white/[0.08] bg-[#0f1116]">
              <img
                src="/demo1.gif"
                alt="3D annotation case 1"
                className="aspect-video w-full object-cover saturate-110"
              />
            </div>
            <div className="overflow-hidden rounded-[14px] border border-white/[0.08] bg-[#0f1116]">
              <img
                src="/demo2.gif"
                alt="3D annotation case 2"
                className="aspect-video w-full object-cover saturate-110"
              />
            </div>
            <div className="overflow-hidden rounded-[14px] border border-white/[0.08] bg-[#0f1116]">
              <img
                src="/demo3.gif"
                alt="3D annotation case 3"
                className="aspect-video w-full object-cover saturate-110"
              />
            </div>
            <div className="overflow-hidden rounded-[14px] border border-white/[0.08] bg-[#0f1116]">
              <img
                src="/demo4.gif"
                alt="3D annotation case 4"
                className="aspect-video w-full object-cover saturate-110"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="border-border/40 py-12 md:py-20">
        <div className="mx-auto max-w-[1200px] px-5">
          <h2 className="mb-3 text-balance text-3xl font-bold md:text-4xl">Pricing</h2>
          <p className="mb-6 text-lg text-muted-foreground">Simple, transparent plans.</p>
          <div className="grid gap-[18px] md:grid-cols-2 lg:grid-cols-3">
            <Card className="border-white/[0.08] bg-card p-[18px] shadow-[0_10px_30px_rgba(0,0,0,0.25)]">
              <div className="mb-3 w-fit text-xl inline-flex items-center gap-2 rounded-full bg-white/[0.06] px-2.5 py-1.5 font-semibold text-muted-foreground">
                Starter
              </div>
              <div className="mb-2 text-4xl font-extrabold">
                $0<span className="text-4xl font-normal text-muted-foreground">/mo</span>
              </div>
              <p className="mb-0 text-lg text-muted-foreground">For open source projects.</p>
              <ul className="mb-0 space-y-2 text-lg text-muted-foreground">
                <li className="flex items-start gap-2.5">
                  <span>✔︎</span>
                  <span>Basic online GUIs</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span>✔︎</span>
                  <span>Basic quotas</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span>✔︎</span>
                  <span>Limited tech support</span>
                </li>
              </ul>
              <a href="#contact">
                <Button className="py-5 w-fit text-lg rounded-[12px] bg-[#5b8cff] font-bold shadow-[0_10px_30px_rgba(0,0,0,0.25)] hover:bg-[#4a7bef]">
                  Get started
                </Button>
              </a>
            </Card>

            <Card className="border-[1.5px] border-[#7ee787]/60 bg-card p-[18px] py-5 shadow-[0_10px_30px_rgba(0,0,0,0.25)]">
              <div className="mb-3 w-fit text-xl inline-flex items-center gap-2 rounded-full bg-white/[0.06] px-2.5 py-1.5 font-semibold text-muted-foreground">
                Pro
              </div>
              <div className="mb-2 text-4xl font-extrabold">
                $99<span className="text-4xl font-normal text-muted-foreground">/mo</span>
              </div>
              <p className="mb-0 text-lg text-muted-foreground">For startups and small teams.</p>
              <ul className="mb-0 space-y-2 text-lg text-muted-foreground">
                <li className="flex items-start gap-2.5">
                  <span>✔︎</span>
                  <span>Advanced online GUIs</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span>✔︎</span>
                  <span>Higher quotas</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span>✔︎</span>
                  <span>Tech support</span>
                </li>
              </ul>
              <a href="#contact">
                <Button className="py-5 w-fit text-lg rounded-[12px] bg-[#5b8cff] font-bold shadow-[0_10px_30px_rgba(0,0,0,0.25)] hover:bg-[#4a7bef]">
                  Buy now
                </Button>
              </a>
            </Card>

            <Card className="border-white/[0.08] bg-card p-[18px] py-5 shadow-[0_10px_30px_rgba(0,0,0,0.25)]">
              <div className="mb-3 w-fit text-xl inline-flex items-center gap-2 rounded-full bg-white/[0.06] px-2.5 py-1.5 font-semibold text-muted-foreground">
                Enterprise
              </div>
              <div className="mb-2 text-4xl font-extrabold">Custom</div>
              <p className="mb-0 text-lg text-muted-foreground">For large companies.</p>
              <ul className="mb-0 space-y-2 text-lg text-muted-foreground">
                <li className="flex items-start gap-2.5">
                  <span>✔︎</span>
                  <span>Customized online GUIs</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span>✔︎</span>
                  <span>Dedicated support</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span>✔︎</span>
                  <span>Optimized modules</span>
                </li>
              </ul>
              <a href="#contact">
                <Button className="py-5 w-fit text-lg rounded-[12px] bg-[#5b8cff] font-bold shadow-[0_10px_30px_rgba(0,0,0,0.25)] hover:bg-[#4a7bef]">
                  Contact sales
                </Button>
              </a>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="border-border/40 py-12 md:py-20">
        <div className="mx-auto max-w-[1200px] px-5">
          <h2 className="mb-6 text-balance text-3xl font-bold md:text-4xl">Core team</h2>
          <div className="grid gap-[18px] md:grid-cols-2 lg:grid-cols-4">
            <Card className="border-white/[0.08] bg-card p-4 pb-8 text-center shadow-[0_10px_30px_rgba(0,0,0,0.25)]">
              <div className="mx-auto mb-2 h-20 w-20 rounded-full bg-gradient-to-br from-[#5b8cff] to-[#8d76ff] shadow-[0_2px_8px_rgba(0,0,0,0.25)]">
                <img
                  src="/weixiao.jpg"
                  alt="Weixiao Gao"
                  className="h-full w-full rounded-full object-cover"
                />
              </div>              
              <h3 className="mb-1 text-xl font-bold leading-tight">Weixiao Gao</h3>
              <p className="text-lg leading-tight text-muted-foreground">
                <span>CEO & Co-Founder.</span><br />
                <span>
                  Postdoc and PhD from TU Delft, specializing in computer vision and 3D geoinformation.
                </span>
              </p>
            </Card>
            <Card className="border-white/[0.08] bg-card p-4 pb-8 text-center shadow-[0_10px_30px_rgba(0,0,0,0.25)]">
              <div className="mx-auto mb-2 h-20 w-20 rounded-full bg-gradient-to-br from-[#8d76ff] to-[#ff7bd5] shadow-[0_2px_8px_rgba(0,0,0,0.25)]">
                <img
                  src="/qinliu.jpg"
                  alt="Qin Liu"
                  className="h-full w-full rounded-full object-cover"
                />
              </div>
              <h3 className="mb-1 text-xl font-bold leading-tight">Qin Liu</h3>
              <p className="text-lg leading-tight text-muted-foreground">
                <span>CTO & Co-Founder.</span><br />
                <span>
                  Postdoc at Stanford and PhD from UNC Chapel Hill, specializing in computer vision and
                  interactive AI.
                </span>
              </p>
            </Card>
            <Card className="border-white/[0.08] bg-card p-4 pb-8 text-center shadow-[0_10px_30px_rgba(0,0,0,0.25)]">
              <div className="mx-auto mb-2 h-20 w-20 rounded-full bg-gradient-to-br from-[#5b8cff] to-[#7ee787] shadow-[0_2px_8px_rgba(0,0,0,0.25)]">
                <img
                  src="/yunzhou.jpg"
                  alt="Yunzhou Han"
                  className="h-full w-full rounded-full object-cover"
                />
              </div>
              <h3 className="mb-1 text-xl font-bold leading-tight">Yunzhou Han</h3>
              <p className="text-lg leading-tight text-muted-foreground">
                <span>Founding Member.</span><br />
                <span>
                  Management graduate from Wageningen University, specializing in financial strategy, HR
                  operations, and fundraising.
                </span>
              </p>
            </Card>
            <Card className="border-white/[0.08] bg-card p-4 pb-8 text-center shadow-[0_10px_30px_rgba(0,0,0,0.25)]">
              <div className="mx-auto mb-2 h-20 w-20 rounded-full bg-gradient-to-br from-[#ff7bd5] to-[#5b8cff] shadow-[0_2px_8px_rgba(0,0,0,0.25)]">
                <img
                  src="/beisun.png"
                  alt="Bei Sun"
                  className="h-full w-full rounded-full object-cover"
                />
              </div>
              <h3 className="mb-1 text-xl font-bold leading-tight">Bei Sun</h3>
              <p className="text-lg leading-tight text-muted-foreground">
                <span>Founding Member.</span><br />
                <span>
                  LL.M. graduate from Fudan University, specializing in capital markets, private equity, 
                  and post-investment legal advisory.
                </span>
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="border-border/40 py-12 md:py-20">
        <div className="mx-auto max-w-[1200px] px-5">
          <div className="grid gap-6 md:grid-cols-[1.1fr_0.9fr]">
            <div>
              <h2 className="mb-3 text-balance text-3xl font-bold md:text-4xl">Contact us</h2>
              <p className="mb-6 text-lg text-muted-foreground">
                Tell us how we can support you at{" "}
                <span className="font-mono font-semibold text-[#00bfff]">contact@atlas3d.ai</span>.
              </p>
              <form className="space-y-3">
                <Input
                  type="text"
                  placeholder="Your name"
                  className="rounded-xl border-white/[0.14] bg-transparent text-lg"
                  required
                />
                <Input
                  type="email"
                  placeholder="Work Email"
                  className="rounded-xl border-white/[0.14] bg-transparent text-lg"
                  required
                />
                <Textarea
                  placeholder="Description (optional)"
                  className="min-h-[120px] rounded-xl border-white/[0.14] bg-transparent text-lg"
                  required
                />
                <Button
                  type="submit"
                  className="w-full rounded-xl bg-[#5b8cff] text-lg font-bold shadow-[0_10px_30px_rgba(0,0,0,0.25)] hover:bg-[#4a7bef]"
                >
                  Send
                </Button>
              </form>
            </div>
            <Card className="border-white/[0.08] bg-card p-[18px] shadow-[0_10px_30px_rgba(0,0,0,0.25)]">
              <h3 className="mb-3 text-xl font-bold">Quick links</h3>
              <ul className="space-y-2 text-lg text-muted-foreground">
                <li className="flex items-start gap-2.5">
                  <span>✔︎</span>
                  <a
                    href="https://github.com/tudelft3d/SUM-Parts-Benchmarks"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="hover:text-foreground"
                  >
                    Opensource project
                  </a>
                </li>
                <li className="flex items-start gap-2.5">
                  <span>✔︎</span>
                  <a href="#" className="hover:text-foreground">
                    Docs
                  </a>
                </li>
                <li className="flex items-start gap-2.5">
                  <span>✔︎</span>
                  <a href="#" className="hover:text-foreground">
                    API reference
                  </a>
                </li>
                <li className="flex items-start gap-2.5">
                  <span>✔︎</span>
                  <a href="#" className="hover:text-foreground">
                    Privacy & Terms
                  </a>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-border/40 py-8 text-muted-foreground">
        <div className="mx-auto max-w-[1200px] px-5 text-center">
          <div>© {new Date().getFullYear()} Atlas Spatial Intelligence Inc. All rights reserved.</div>
        </div>
      </footer>

      {/* Signup Dialog */}
      <Dialog open={showSignup} onOpenChange={setShowSignup}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Create Account</DialogTitle>
          </DialogHeader>
          <form className="space-y-4">
            <Input type="email" placeholder="Email" required />
            <Input type="password" placeholder="Password" required />
            <Button type="submit" className="w-full">
              Sign Up
            </Button>
          </form>
        </DialogContent>
      </Dialog>

      {/* Login Dialog */}
      <Dialog open={showLogin} onOpenChange={setShowLogin}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Welcome Back</DialogTitle>
          </DialogHeader>
          <form className="space-y-4">
            <Input type="email" placeholder="Email" required />
            <Input type="password" placeholder="Password" required />
            <Button type="submit" className="w-full">
              Log In
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  )
}
