'use client'

import { Button } from '@/src/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/src/components/ui/card'
import { Check } from 'lucide-react'

const plans = [
  {
    name: "Free",
    price: "$0",
    description: "For individuals and small projects",
    features: ["1 user", "5 projects", "2GB storage", "Basic support"],
    cta: "Get Started",
  },
  {
    name: "Pro",
    price: "$19",
    description: "For growing teams and businesses",
    features: ["Unlimited users", "Unlimited projects", "20GB storage", "Priority support", "Advanced analytics"],
    cta: "Upgrade to Pro",
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For large-scale organizations",
    features: [
      "Unlimited everything",
      "24/7 dedicated support",
      "Custom integrations",
      "Advanced security",
      "SLA guarantee",
    ],
    cta: "Contact Sales",
  },
]

export function PricingComponent() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-center mb-8">Choose Your Plan</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {plans.map((plan) => (
          <Card key={plan.name} className="flex flex-col">
            <CardHeader>
              <CardTitle className="text-2xl">{plan.name}</CardTitle>
              <CardDescription className="text-xl font-semibold">{plan.price}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-muted-foreground mb-4">{plan.description}</p>
              <ul className="space-y-2">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-primary" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full">{plan.cta}</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}