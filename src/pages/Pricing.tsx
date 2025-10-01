import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";

const Pricing = () => {
  const plans = [
    {
      name: "Free",
      price: "0",
      description: "Perfect for getting started",
      features: [
        "Unlimited products",
        "3.5% + $0.30 per sale",
        "Instant payouts",
        "Email support",
        "Basic analytics"
      ]
    },
    {
      name: "Creator",
      price: "10",
      description: "For serious creators",
      popular: true,
      features: [
        "Everything in Free",
        "2.9% + $0.30 per sale",
        "Custom domain",
        "Priority support",
        "Advanced analytics",
        "Email marketing tools"
      ]
    },
    {
      name: "Pro",
      price: "25",
      description: "For professional teams",
      features: [
        "Everything in Creator",
        "1.9% + $0.30 per sale",
        "White-label branding",
        "API access",
        "Dedicated support",
        "Custom integrations",
        "Team collaboration"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 py-24">
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">
            Simple, transparent pricing
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Start for free. Upgrade when you're ready. Cancel anytime.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan) => (
            <Card key={plan.name} className={plan.popular ? "border-primary shadow-lg" : ""}>
              {plan.popular && (
                <div className="bg-gradient-to-r from-primary to-accent text-white text-center py-2 text-sm font-medium">
                  Most Popular
                </div>
              )}
              <CardHeader>
                <CardTitle>{plan.name}</CardTitle>
                <CardDescription>{plan.description}</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold">${plan.price}</span>
                  <span className="text-muted-foreground">/month</span>
                </div>
              </CardHeader>
              <CardContent>
                <Button 
                  className={plan.popular ? "w-full bg-gradient-to-r from-primary to-accent" : "w-full"}
                  variant={plan.popular ? "default" : "outline"}
                >
                  {plan.price === "0" ? "Get Started" : "Upgrade Now"}
                </Button>
                <ul className="mt-6 space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center text-muted-foreground">
          <p>All plans include 14-day free trial. No credit card required.</p>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
