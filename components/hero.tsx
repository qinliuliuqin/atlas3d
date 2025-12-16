import { Button } from "@/components/ui/button"
import Image from "next/image"
import { getImagePath } from "@/lib/getBasePath"

export function Hero() {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      <div className="container mx-auto px-5">
        <div className="grid md:grid-cols-[1.2fr,1fr] gap-8 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-[44px] leading-[1.15] font-bold mb-4 text-balance">
              High-precision{" "}
              <span className="bg-gradient-to-br from-[#5b8cff] via-[#8d76ff] to-[#ff7bd5] bg-clip-text text-transparent">
                3D maps
              </span>{" "}
              for{" "}
              <span className="bg-gradient-to-br from-[#5b8cff] via-[#8d76ff] to-[#ff7bd5] bg-clip-text text-transparent">
                spatial intelligence
              </span>
              .
            </h1>
            <p className="text-muted-foreground text-lg mb-6">
              We build the world&apos;s first centimeter‑level, semantically rich 3D maps to power spatial intelligence,
              from drone logistics to city-scale digital twins.
            </p>
            <div className="flex gap-3 flex-wrap">
              <Button size="lg" className="rounded-xl" asChild>
                <a href="#contact">Book a demo</a>
              </Button>
            </div>
          </div>
          <div>
            <div className="relative aspect-[16/10] rounded-2xl bg-gradient-to-br from-[rgba(91,140,255,0.35)] via-transparent to-[rgba(126,231,135,0.3)] border border-white/[0.08] overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.25)]">
              <Image
                src={getImagePath("/annotation_results.gif")}
                alt="3D map visualization"
                fill
                className="object-cover opacity-85"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
