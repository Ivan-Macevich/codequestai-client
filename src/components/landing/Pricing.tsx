import { Button } from "@/components/ui/button";
import { CheckCircle2, Link } from "lucide-react";

const pricingPlans = [
  {
    name: "Basic",
    price: "0",
    billing: "Free forever",
    features: [
      "3 practice interviews/month",
      "Basic feedback analysis",
      "Text-based interviews",
      "Interview question library access",
      "Email support",
    ],
  },
  {
    name: "Pro",
    price: "29",
    billing: "per month",
    popular: true,
    features: [
      "Unlimited interviews",
      "Advanced AI feedback",
      "Voice interviews",
      "Priority support",
      "Interview recording",
    ],
  },
  {
    name: "Enterprise",
    price: "99",
    billing: "per month",
    features: [
      "All Pro features",
      "Custom question sets",
      "Team management",
      "API access",
      "Dedicated support",
    ],
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Simple, Transparent Pricing
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <div
              key={plan.name}
              className="bg-white/80 backdrop-blur-lg rounded-xl shadow-sm hover:shadow-md transition-shadow p-6"
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              <div className="text-center mb-6">
                <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
                <p className="text-4xl font-bold mb-2">${plan.price}</p>
                <p className="text-gray-600">{plan.billing}</p>
              </div>
              <ul className="space-y-4 mb-6">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mr-2 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Link href="/app">
                <Button
                  variant={plan.popular ? "default" : "outline"}
                  className="w-full"
              >
                  Get Started
                </Button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 