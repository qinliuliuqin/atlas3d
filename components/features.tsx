import { Card } from "@/components/ui/card"

const features = [
  {
    icon: "🎯",
    label: "Precision",
    title: "Centimeter‑level accuracy",
    description: "Robust geo‑registration and QA pipelines minimize drift and noise.",
  },
  {
    icon: "🧠",
    label: "Semantics",
    title: "Rich, layered semantics",
    description: "Roads, facades, trees, powerlines, curb ramps — all vectorized.",
  },
  {
    icon: "⚡",
    label: "Performance",
    title: "10× faster queries",
    description: "Spatial indices and streamable tiles cut latency for path planning.",
  },
  {
    icon: "🔌",
    label: "Integrations",
    title: "Works with your stack",
    description: "ROS2, WebGL, Cesium, Unreal, and common GIS formats.",
  },
  {
    icon: "🛡️",
    label: "Reliability",
    title: "Enterprise‑grade ops",
    description: "SLAs, versioned updates, signed tiles, and audit trails.",
  },
  {
    icon: "🌐",
    label: "Open",
    title: "APIs & SDKs",
    description: "REST/GraphQL tile APIs and client SDKs for web, mobile, and C++.",
  },
]

export function Features() {
  return (
    <section id="features" className="py-16">
      <div className="container mx-auto px-5">
        <h2 className="text-3xl font-bold mb-2">Why choose our maps</h2>
        <p className="text-muted-foreground mb-6">Engineered for precision, scale, and real‑world deployment.</p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4.5">
          {features.map((feature, index) => (
            <Card key={index} className="p-4.5 bg-card border-white/[0.08] shadow-[0_10px_30px_rgba(0,0,0,0.25)]">
              <div className="inline-flex items-center gap-2 px-2.5 py-1.5 rounded-full bg-white/[0.06] text-muted-foreground font-semibold text-sm mb-3">
                <span>{feature.icon}</span>
                <span>{feature.label}</span>
              </div>
              <h3 className="text-xl font-bold mb-2 mt-1.5">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
