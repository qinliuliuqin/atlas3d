import { Card } from "@/components/ui/card"
import Image from "next/image"
import { getImagePath } from "@/lib/getBasePath"

const teamMembers = [
  {
    name: "Weixiao Gao",
    role: "CEO & Co-Founder.",
    bio: "Postdoc and PhD from TU Delft, specializing in computer vision and 3D geoinformation.",
    image: "/weixiao.jpg",
  },
  {
    name: "Qin Liu",
    role: "CTO & Co-Founder.",
    bio: "Postdoc at Stanford and PhD from UNC Chapel Hill, specializing in computer vision and interactive AI.",
    image: "/qinliu.jpg",
  },
  {
    name: "Yunzhou Han",
    role: "Founding Member.",
    bio: "Management graduate from Wageningen University, specializing in financial strategy, HR operations, and fundraising.",
    image: "/yunzhou.jpg",
  },
  {
    name: "Bei Sun",
    role: "Founding Member.",
    bio: "LL.M. graduate from Fudan University, specializing in capital markets, private equity, and post-investment legal advisory.",
    image: "/beisun.png",
  },
]

export function Team() {
  return (
    <section id="team" className="py-16">
      <div className="container mx-auto px-5">
        <h2 className="text-3xl font-bold mb-6">Core team</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4.5">
          {teamMembers.map((member, index) => (
            <Card key={index} className="p-4 bg-card border-white/[0.08] text-center">
              <div className="w-20 h-20 rounded-full mx-auto mb-2 overflow-hidden shadow-[0_2px_8px_rgba(0,0,0,0.25)] relative">
                <Image src={getImagePath(member.image || "/placeholder.svg")} alt={member.name} fill className="object-cover" />
              </div>
              <h3 className="text-lg font-bold mb-1">{member.name}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                <span className="block">{member.role}</span>
                <span className="block mt-1">{member.bio}</span>
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
