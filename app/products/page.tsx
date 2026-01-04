"use client"

import { Canvas } from "@react-three/fiber"
import { OrbitControls, Environment, Sky, PerspectiveCamera } from "@react-three/drei"
import { Suspense } from "react"
import Header from "@/components/header"

function Box({ position }: { position: [number, number, number] }) {
  return (
    <mesh position={position} castShadow receiveShadow>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="#5b8cff" metalness={0.5} roughness={0.2} />
    </mesh>
  )
}

function Ground() {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.5, 0]} receiveShadow>
      <planeGeometry args={[10, 10]} />
      <meshStandardMaterial color="#1a1c22" metalness={0.1} roughness={0.8} />
    </mesh>
  )
}

function Scene() {
  return (
    <>
      <PerspectiveCamera makeDefault position={[5, 5, 5]} />
      <OrbitControls enableDamping dampingFactor={0.05} />

      <ambientLight intensity={0.5} />
      <directionalLight
        position={[10, 10, 5]}
        intensity={1}
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
      />
      <pointLight position={[-10, 10, -10]} intensity={0.5} color="#8d76ff" />

      <Box position={[0, 0, 0]} />
      <Box position={[2, 0, 0]} />
      <Box position={[-2, 0, 0]} />
      <Box position={[0, 0, 2]} />
      <Box position={[0, 0, -2]} />

      <Ground />

      <Sky sunPosition={[100, 20, 100]} />
      <Environment preset="night" />
    </>
  )
}

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* 3D Viewer Section */}
      <div className="mx-auto max-w-[1200px] px-5 py-12">
        <div className="mb-6">
          <h1 className="text-4xl font-bold mb-3">3D Product Viewer</h1>
          <p className="text-lg text-muted-foreground">
            Explore our spatial intelligence technology in 3D. Use your mouse to rotate, zoom, and pan around the scene.
          </p>
        </div>

        <div className="w-full h-[600px] rounded-xl border border-white/[0.08] bg-card shadow-[0_10px_30px_rgba(0,0,0,0.25)] overflow-hidden">
          <Suspense
            fallback={
              <div className="w-full h-full flex items-center justify-center">
                <div className="text-muted-foreground">Loading 3D Scene...</div>
              </div>
            }
          >
            <Canvas shadows>
              <Scene />
            </Canvas>
          </Suspense>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          <div className="rounded-xl border border-white/[0.08] bg-card p-4">
            <h3 className="font-semibold mb-2">Rotate</h3>
            <p className="text-sm text-muted-foreground">Click and drag to rotate the view</p>
          </div>
          <div className="rounded-xl border border-white/[0.08] bg-card p-4">
            <h3 className="font-semibold mb-2">Zoom</h3>
            <p className="text-sm text-muted-foreground">Scroll to zoom in and out</p>
          </div>
          <div className="rounded-xl border border-white/[0.08] bg-card p-4">
            <h3 className="font-semibold mb-2">Pan</h3>
            <p className="text-sm text-muted-foreground">Right-click and drag to pan</p>
          </div>
        </div>
      </div>
    </div>
  )
}
