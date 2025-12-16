import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const pricingPlans = [
  {
    name: "Starter",
    price: "$0",
    period: "/mo",
    description: "For open source projects.",
    features: ["Basic online GUIs", "Basic quotas", "Limited tech support"],
    cta: "Get started",
    featured: false,
  },
  {
    name: "Pro",
    price: "$99",
    period: "/mo",
    description: "For startups and small teams.",
    features: ["Advanced online GUIs", "Higher quotas", "Tech support"],
    cta: "Buy now",
    featured: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "For large companies.",
    features: ["Customized online GUIs", "Dedicated support", "Optimized modules"],
    cta: "Contact sales",
    featured: false,
  },
]

export function Pricing() {
  return (
    <section id="pricing" className="py-16">
      <div className="container mx-auto px-5">
        <h2 className="text-3xl font-bold mb-2">Pricing</h2>
        <p className="text-muted-foreground mb-6">Simple, transparent plans.</p>
        <div className="grid md:grid-cols-3 gap-4.5">
          {pricingPlans.map((plan, index) => (
            <Card
              key={index}
              className={`p-4.5 bg-card shadow-[0_10px_30px_rgba(0,0,0,0.25)] ${
                plan.featured ? "border-[rgba(126,231,135,0.6)] border-[1.5px]" : "border-white/[0.08]"
              }`}
            >
              <div className="inline-flex items-center gap-2 px-2.5 py-1.5 rounded-full bg-white/[0.06] text-muted-foreground font-semibold text-sm mb-3">
                {plan.name}
              </div>
              <h3 className="text-[38px] font-extrabold mb-1">
                {plan.price}
                <span className="text-muted-foreground text-base font-normal">{plan.period}</span>
              </h3>
              <p className="text-muted-foreground mb-3">{plan.description}</p>
              <ul className="space-y-2 mb-4 mt-3">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex gap-2.5 items-start text-muted-foreground">
                    <span>✔︎</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button className="w-full rounded-xl" asChild>
                <a href="#contact">{plan.cta}</a>
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
