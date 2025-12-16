import Image from "next/image"
import { getImagePath } from "@/lib/getBasePath"

const services = [
  {
    image: "demo1.gif",
    alt: "Interactive 3D selection",
  },
  {
    image: "demo2.gif",
    alt: "3D semantic segmentation",
  },
  {
    image: "demo3.gif",
    alt: "3D building mesh",
  },
  {
    image: "demo4.gif",
    alt: "3D park visualization",
  },
]

export function Services() {
  return (
    <section id="services" className="py-16">
      <div className="container mx-auto px-5">
        <h2 className="text-3xl font-bold mb-2">Annotation Services</h2>
        <p className="text-muted-foreground mb-6">We provide annotation services for mesh semantic segmentation.</p>
        <div className="grid md:grid-cols-2 gap-4.5">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative aspect-[16/9] rounded-2xl bg-[#0f1116] border border-white/[0.08] overflow-hidden"
            >
              <Image
                src={getImagePath(service.image || "/placeholder.svg")}
                alt={service.alt}
                fill
                className="object-cover saturate-110"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
