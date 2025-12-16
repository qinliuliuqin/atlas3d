"use client"

import type React from "react"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useState } from "react"

export function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formState)
    // Add form submission logic here
  }

  return (
    <section id="contact" className="py-16">
      <div className="container mx-auto px-5">
        <div className="grid md:grid-cols-[1.1fr,0.9fr] gap-6">
          <div>
            <h2 className="text-3xl font-bold mb-2">Contact us</h2>
            <p className="text-muted-foreground mb-6">
              Tell us how we can support you at{" "}
              <span className="text-[#00bfff] font-semibold font-mono">contact@atlas3d.ai</span>.
            </p>
            <form onSubmit={handleSubmit} className="space-y-3">
              <Input
                type="text"
                placeholder="Your name"
                value={formState.name}
                onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                className="rounded-xl border-white/[0.14] bg-transparent"
                required
              />
              <Input
                type="email"
                placeholder="Work Email"
                value={formState.email}
                onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                className="rounded-xl border-white/[0.14] bg-transparent"
                required
              />
              <Textarea
                placeholder="Description (optional)"
                value={formState.message}
                onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                className="min-h-[120px] rounded-xl border-white/[0.14] bg-transparent resize-y"
              />
              <Button type="submit" className="w-full rounded-xl">
                Send
              </Button>
            </form>
          </div>
          <Card className="p-4.5 bg-card border-white/[0.08]">
            <h3 className="text-lg font-bold mb-3">Quick links</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex gap-2.5 items-start">
                <span>✔︎</span>
                <a
                  href="https://github.com/tudelft3d/SUM-Parts-Benchmarks"
                  className="hover:text-foreground transition-colors"
                >
                  Opensource project
                </a>
              </li>
              <li className="flex gap-2.5 items-start">
                <span>✔︎</span>
                <a href="#" className="hover:text-foreground transition-colors">
                  Docs
                </a>
              </li>
              <li className="flex gap-2.5 items-start">
                <span>✔︎</span>
                <a href="#" className="hover:text-foreground transition-colors">
                  API reference
                </a>
              </li>
              <li className="flex gap-2.5 items-start">
                <span>✔︎</span>
                <a href="#" className="hover:text-foreground transition-colors">
                  Privacy & Terms
                </a>
              </li>
            </ul>
          </Card>
        </div>
      </div>
    </section>
  )
}
