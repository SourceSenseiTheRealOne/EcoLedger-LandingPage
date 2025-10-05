import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check } from "lucide-react";

interface PricingCardProps {
  title: string;
  price: string;
  period?: string;
  features: string[];
  highlighted?: boolean;
  ctaText?: string;
}

export const PricingCard = ({
  title,
  price,
  period = "/month",
  features,
  highlighted = false,
  ctaText = "Get Started",
}: PricingCardProps) => {
  return (
    <Card
      className={`relative p-8 transition-all duration-300 hover:scale-105 ${
        highlighted
          ? "border-primary bg-gradient-to-br from-card to-muted animate-glow"
          : "bg-card hover:border-primary/50"
      }`}
    >
      {highlighted && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary to-secondary px-4 py-1 rounded-full text-sm font-semibold text-white">
          Recommended
        </div>
      )}
      <div className="space-y-6">
        <div>
          <h3 className="text-2xl font-bold">{title}</h3>
          <div className="mt-4 flex items-baseline gap-2">
            <span className="text-5xl font-extrabold glow-primary">{price}</span>
            {price !== "Free" && <span className="text-muted-foreground">{period}</span>}
          </div>
        </div>

        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-3">
              <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
              <span className="text-foreground/90">{feature}</span>
            </li>
          ))}
        </ul>

        <Button
          variant={highlighted ? "cta" : "default"}
          size="lg"
          className="w-full"
        >
          {ctaText}
        </Button>
      </div>
    </Card>
  );
};
