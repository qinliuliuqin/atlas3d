"use client"

import { useEffect, useRef, useState } from "react"
import { Maximize2, Mouse, Keyboard, Layers, ExternalLink } from "lucide-react"

// The viewer (public/splat/index.html) renders the scene on the visitor's own GPU; it downloads the scene
// files from our file server. Scenes are listed by that server (scenes.json), so adding a scene needs no
// change here. A single scene can be shared as /splat/?scene=<id>.
const VIEWER_URL = "/splat/index.html"
const SCENES_URL = process.env.NEXT_PUBLIC_SCENES_URL ?? "https://scenes.atlas3d.ai/scenes.json"

type Status = "checking" | "online" | "offline"

export default function ReconstructionPage() {
  const frameRef = useRef<HTMLDivElement>(null)
  const [status, setStatus] = useState<Status>("checking")

  useEffect(() => {
    // the viewer page itself is always there; check that the scene files can be reached
    const timer = setTimeout(() => setStatus((s) => (s === "checking" ? "offline" : s)), 10000)
    fetch(SCENES_URL, { cache: "no-store" })
      .then((r) => setStatus(r.ok ? "online" : "offline"))
      .catch(() => setStatus("offline"))
      .finally(() => clearTimeout(timer))
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-[1200px] px-5 py-10">
        <div className="mb-6">
          <h1 className="mb-3 text-balance text-3xl font-bold md:text-4xl">
            Walk through our{" "}
            <span className="bg-gradient-to-br from-[#5b8cff] via-[#8d76ff] to-[#ff7bd5] bg-clip-text text-transparent">
              3D reconstructions
            </span>
          </h1>
          <p className="max-w-[820px] text-lg text-muted-foreground">
            Real spaces, captured with a panoramic camera and a spatial scanner and rebuilt in 3D. The scene is
            rendered right in your browser, so looking around and walking respond instantly, on a laptop or a phone.
          </p>
        </div>

        <div
          ref={frameRef}
          className="relative overflow-hidden rounded-[14px] border border-white/[0.08] bg-[#0f1116] shadow-[0_10px_30px_rgba(0,0,0,0.25)]"
        >
          <div className="h-[72vh] min-h-[420px] w-full">
            {status === "online" && (
              <iframe
                src={VIEWER_URL}
                title="3D reconstruction viewer"
                className="h-full w-full border-0"
                allow="fullscreen"
              />
            )}
            {status === "checking" && (
              <div className="flex h-full items-center justify-center text-muted-foreground">Connecting…</div>
            )}
            {status === "offline" && (
              <div className="flex h-full flex-col items-center justify-center gap-3 px-6 text-center">
                <p className="text-lg font-semibold">The scenes are offline right now.</p>
                <p className="max-w-[520px] text-muted-foreground">
                  Please try again in a few minutes, or{" "}
                  <a href="/#contact" className="text-[#5b8cff] hover:underline">
                    book a demo
                  </a>{" "}
                  and we will walk you through the scenes.
                </p>
              </div>
            )}
          </div>
          {status === "online" && (
            <div className="absolute bottom-3 left-3 flex gap-2">
              <button
                type="button"
                onClick={() => frameRef.current?.requestFullscreen?.()}
                className="flex items-center gap-2 rounded-lg border border-white/15 bg-black/60 px-3 py-2 text-sm font-semibold backdrop-blur hover:bg-black/80"
              >
                <Maximize2 className="h-4 w-4" />
                Full screen
              </button>
              <a
                href={VIEWER_URL}
                target="_blank"
                rel="noopener"
                className="flex items-center gap-2 rounded-lg border border-white/15 bg-black/60 px-3 py-2 text-sm font-semibold backdrop-blur hover:bg-black/80"
              >
                <ExternalLink className="h-4 w-4" />
                Open on its own
              </a>
            </div>
          )}
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <div className="flex items-start gap-3 rounded-xl border border-white/[0.08] p-4">
            <Layers className="mt-0.5 h-5 w-5 shrink-0 text-[#5b8cff]" />
            <div>
              <div className="font-semibold">Pick a scene</div>
              <p className="text-sm text-muted-foreground">
                Use the Scene menu at the top right of the viewer. The first visit downloads the scene (10 to 65 MB).
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3 rounded-xl border border-white/[0.08] p-4">
            <Mouse className="mt-0.5 h-5 w-5 shrink-0 text-[#5b8cff]" />
            <div>
              <div className="font-semibold">Look around</div>
              <p className="text-sm text-muted-foreground">Drag with the mouse, or with one finger on a phone.</p>
            </div>
          </div>
          <div className="flex items-start gap-3 rounded-xl border border-white/[0.08] p-4">
            <Keyboard className="mt-0.5 h-5 w-5 shrink-0 text-[#5b8cff]" />
            <div>
              <div className="font-semibold">Walk</div>
              <p className="text-sm text-muted-foreground">
                W A S D to move, Q / E to go down or up, or the path slider to jump along the route. On a phone, hold
                the arrow buttons.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
