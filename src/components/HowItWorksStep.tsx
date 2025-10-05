import { LucideIcon } from "lucide-react";

interface HowItWorksStepProps {
  number: number;
  title: string;
  description: string;
  icon: LucideIcon;
}

export const HowItWorksStep = ({
  number,
  title,
  description,
  icon: Icon,
}: HowItWorksStepProps) => {
  return (
    <div className="relative flex flex-col items-center text-center group">
      {/* Connector line */}
      <div className="absolute top-12 left-1/2 h-full w-0.5 bg-gradient-to-b from-primary/50 to-transparent -z-10 hidden lg:block" />
      
      <div className="relative mb-6">
        {/* Glowing background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-300" />
        
        {/* Number badge */}
        <div className="relative w-24 h-24 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-4 animate-float">
          <span className="text-3xl font-bold text-white">{number}</span>
        </div>
        
        {/* Icon */}
        <div className="absolute -bottom-2 -right-2 w-12 h-12 rounded-full bg-card border-2 border-primary flex items-center justify-center">
          <Icon className="h-6 w-6 text-primary" />
        </div>
      </div>

      <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
        {title}
      </h3>
      <p className="text-muted-foreground max-w-xs">{description}</p>
    </div>
  );
};
