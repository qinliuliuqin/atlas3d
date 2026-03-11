"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Upload, FileText, Download, Share2, Camera } from "lucide-react"

export default function ViewerPage() {
  const viewerContainerRef = useRef<HTMLDivElement>(null)
  const [isViewerLoaded, setIsViewerLoaded] = useState(false)
  const [selectedFile, setSelectedFile] = useState<string | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    // Load the Online3DViewer library
    const loadViewer = async () => {
      // Load CSS
      const link = document.createElement("link")
      link.rel = "stylesheet"
      link.href = "/o3dv/o3dv.website.min.css"
      document.head.appendChild(link)

      // Load JS
      const script = document.createElement("script")
      script.src = "/o3dv/o3dv.website.min.js"
      script.onload = () => {
        setIsViewerLoaded(true)
        console.log("[v0] Online3DViewer library loaded")

        // Initialize the embed viewer after script loads
        if ((window as any).OV) {
          ;(window as any).OV.StartEmbed()
        }
      }
      script.onerror = () => {
        console.error("[v0] Failed to load Online3DViewer library")
      }
      document.body.appendChild(script)
    }

    loadViewer()

    return () => {
      // Cleanup if needed
    }
  }, [])

  const handleFileUpload = () => {
    fileInputRef.current?.click()
  }

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files
    if (files && files.length > 0) {
      setSelectedFile(files[0].name)
      console.log("[v0] File selected:", files[0].name)
    }
  }

  const loadSampleModel = (modelPath: string, modelName: string) => {
    setSelectedFile(modelName)
    // This would integrate with the OV.LoadModelFromUrlList API
    console.log("[v0] Loading sample model:", modelPath)
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-[1150px] px-5 py-12">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-2xl font-bold mb-3 text-balance">
            Online 3D Viewer
          </h1>
          <p className="text-lg text-muted-foreground">
          </p>
        </div>

        {/* Toolbar */}
        <div className="mb-4 flex flex-wrap gap-3">
          <Button
            onClick={handleFileUpload}
            className="rounded-lg bg-[#5b8cff] font-semibold shadow-[0_10px_30px_rgba(0,0,0,0.25)] hover:bg-[#4a7bef]"
          >
            <Upload className="mr-2 h-4 w-4" />
            Upload Model
          </Button>
          <Button
            variant="outline"
            className="rounded-lg border-white/[0.14] bg-transparent font-semibold hover:bg-white/[0.06]"
          >
            <Download className="mr-2 h-4 w-4" />
            Download
          </Button>
          <Button
            variant="outline"
            className="rounded-lg border-white/[0.14] bg-transparent font-semibold hover:bg-white/[0.06]"
          >
            <Camera className="mr-2 h-4 w-4" />
            Snapshot
          </Button>
          <Button
            variant="outline"
            className="rounded-lg border-white/[0.14] bg-transparent font-semibold hover:bg-white/[0.06]"
          >
            <Share2 className="mr-2 h-4 w-4" />
            Share
          </Button>
        </div>

        {/* Hidden file input */}
        <input
          ref={fileInputRef}
          type="file"
          accept=".obj,.stl,.gltf,.glb,.fbx,.step,.stp,.iges,.igs,.3ds,.3dm,.dae,.ply,.off,.wrl,.ifc,.fcstd"
          onChange={handleFileChange}
          className="hidden"
          multiple
        />

        {/* Main Viewer Container */}
        <div className="grid gap-4">
          {/* Viewer */}
          <Card className="relative overflow-hidden border-white/[0.08] bg-card p-0 shadow-[0_10px_30px_rgba(0,0,0,0.25)]">
            <div ref={viewerContainerRef} className="w-full h-[700px] rounded-lg bg-[#0f1116]" id="viewer_3d_container">
              <div id="embed_viewer" className="w-full h-full"></div>
              <div id="website_link" className="hidden"></div>
              {!isViewerLoaded && (
                <div className="flex h-full items-center justify-center absolute inset-0">
                  <div className="text-center">
                    <div className="mb-4 text-muted-foreground">Drag and drop 3D models here.</div>
                  </div>
                </div>
              )}
            </div>
          </Card>

          </div>
        </div>
      </div>
  )
}
