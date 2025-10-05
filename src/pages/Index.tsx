import { Button } from "@/components/ui/button";
import { PricingCard } from "@/components/PricingCard";
import { HowItWorksStep } from "@/components/HowItWorksStep";
import { FeatureCard } from "@/components/FeatureCard";
import {
  Wallet,
  Calculator,
  Database,
  QrCode,
  Shield,
  TrendingUp,
  Leaf,
  Code,
  Server,
  Blocks,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import heroImage from "@/assets/hero-blockchain.jpg";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src={heroImage}
            alt="Blockchain Sustainability"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
        </div>

        {/* Hero Content */}
        <div className="container relative z-10 mx-auto px-4 py-20 text-center animate-fade-in-up">
          {/* Logo */}
          <div className="mb-8 flex items-center justify-center gap-3">
            <Leaf className="h-12 w-12 text-primary animate-float" />
            <h1 className="text-5xl md:text-6xl font-bold">
              Eco<span className="text-primary">Ledger</span>
            </h1>
          </div>

          {/* Headline */}
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 max-w-5xl mx-auto leading-tight">
            The Trust Layer for{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent animate-glow">
              Sustainable Commerce
            </span>
          </h2>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto">
            Verify products' sustainability and CO₂ footprint instantly using blockchain.
          </p>

          {/* CTA Button */}
          <Button variant="hero" size="xl" className="group">
            Get Started
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-primary rounded-full animate-pulse" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              What is <span className="text-primary">EcoLedger</span>?
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              EcoLedger is a blockchain-powered platform that calculates EcoScores for products,
              stores them on VeChain Thor, and allows consumers to verify sustainability instantly
              via QR codes.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <FeatureCard
              icon={Shield}
              title="Transparent & Verifiable"
              description="Every CO₂ footprint calculation is stored immutably on the blockchain"
            />
            <FeatureCard
              icon={Blocks}
              title="Blockchain Verified"
              description="Powered by VeChain Thor for enterprise-grade security and scalability"
            />
            <FeatureCard
              icon={QrCode}
              title="Instant QR Verification"
              description="Consumers can scan and verify product sustainability in seconds"
            />
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              How It <span className="text-primary">Works</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Four simple steps to bring transparency to your supply chain
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 max-w-6xl mx-auto">
            <HowItWorksStep
              number={1}
              title="Connect & Register"
              description="Company connects their wallet and registers products on the platform"
              icon={Wallet}
            />
            <HowItWorksStep
              number={2}
              title="Calculate EcoScore"
              description="Backend automatically calculates CO₂ footprint and generates EcoScore"
              icon={Calculator}
            />
            <HowItWorksStep
              number={3}
              title="Store on Blockchain"
              description="Data is permanently stored on VeChain Thor blockchain"
              icon={Database}
            />
            <HowItWorksStep
              number={4}
              title="Verify via QR"
              description="Consumers scan QR code to instantly verify product sustainability"
              icon={QrCode}
            />
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Simple, <span className="text-primary">Transparent</span> Pricing
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose the plan that fits your business needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <PricingCard
              title="Free Plan"
              price="Free"
              features={[
                "Basic product registration",
                "QR code generation",
                "Community support",
                "Up to 10 products",
                "Basic analytics",
              ]}
              ctaText="Start Free"
            />
            <PricingCard
              title="Pro Plan"
              price="$49"
              highlighted
              features={[
                "Bulk product registration",
                "Advanced dashboard",
                "Priority support",
                "Unlimited products",
                "Advanced analytics",
                "Custom branding",
                "API access",
              ]}
              ctaText="Start Pro Trial"
            />
            <PricingCard
              title="Enterprise"
              price="$199"
              features={[
                "Everything in Pro",
                "Full API access",
                "AI-powered insights",
                "Dedicated account manager",
                "Custom integrations",
                "White-label options",
                "SLA guarantee",
              ]}
              ctaText="Contact Sales"
            />
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section id="impact" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Why It <span className="text-primary">Matters</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center p-8 rounded-lg bg-card border border-border hover:border-primary/50 transition-all duration-300 group">
                <div className="text-5xl font-bold text-primary mb-4 glow-primary group-hover:scale-110 transition-transform">
                  78%
                </div>
                <p className="text-muted-foreground">
                  of consumers don't trust eco claims without verification
                </p>
              </div>
              <div className="text-center p-8 rounded-lg bg-card border border-border hover:border-primary/50 transition-all duration-300 group">
                <div className="text-5xl font-bold text-secondary mb-4 glow-secondary group-hover:scale-110 transition-transform">
                  $5B
                </div>
                <p className="text-muted-foreground">
                  lost annually by companies due to greenwashing scandals
                </p>
              </div>
              <div className="text-center p-8 rounded-lg bg-card border border-border hover:border-primary/50 transition-all duration-300 group">
                <div className="text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-4 group-hover:scale-110 transition-transform">
                  100%
                </div>
                <p className="text-muted-foreground">
                  transparency with blockchain-verified sustainability data
                </p>
              </div>
            </div>

            <div className="text-center p-8 rounded-lg bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/30">
              <TrendingUp className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4">
                Bridge the Trust Gap
              </h3>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                EcoLedger creates a verifiable trust layer between companies and consumers,
                eliminating greenwashing and building confidence in sustainability claims.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section id="tech" className="py-20 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Built with <span className="text-primary">Cutting-Edge</span> Technology
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Enterprise-grade infrastructure for mission-critical sustainability tracking
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="p-6 rounded-lg bg-card border border-border hover:border-primary/50 transition-all duration-300 group">
              <Code className="h-10 w-10 text-primary mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold mb-2">Frontend</h3>
              <p className="text-muted-foreground">React + TypeScript</p>
            </div>
            <div className="p-6 rounded-lg bg-card border border-border hover:border-primary/50 transition-all duration-300 group">
              <Server className="h-10 w-10 text-secondary mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold mb-2">Backend</h3>
              <p className="text-muted-foreground">NestJS + TypeScript REST API</p>
            </div>
            <div className="p-6 rounded-lg bg-card border border-border hover:border-primary/50 transition-all duration-300 group">
              <Blocks className="h-10 w-10 text-primary mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold mb-2">Blockchain</h3>
              <p className="text-muted-foreground">VeChain Thor + Solidity</p>
            </div>
            <div className="p-6 rounded-lg bg-card border border-border hover:border-primary/50 transition-all duration-300 group md:col-span-2 lg:col-span-1">
              <Sparkles className="h-10 w-10 text-secondary mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold mb-2">AI Integration</h3>
              <p className="text-muted-foreground">Adaptive EcoScore & Predictive Analytics</p>
            </div>
            <div className="p-6 rounded-lg bg-card border border-border hover:border-primary/50 transition-all duration-300 group md:col-span-2">
              <Database className="h-10 w-10 text-primary mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold mb-2">Data Layer</h3>
              <p className="text-muted-foreground">
                Immutable blockchain storage with real-time API access
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="cta" className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-secondary/20" />
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/30 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/30 rounded-full blur-3xl animate-float" style={{ animationDelay: "3s" }} />
        </div>
        
        <div className="container relative mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-6xl font-extrabold mb-6">
            Start Verifying Your Products <span className="text-primary">Today</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Join the revolution in sustainable commerce. Build trust with your customers
            through blockchain-verified transparency.
          </p>
          <Button variant="cta" size="xl" className="group">
            Register Your Company
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <Leaf className="h-8 w-8 text-primary" />
              <span className="text-2xl font-bold">
                Eco<span className="text-primary">Ledger</span>
              </span>
            </div>
            <p className="text-muted-foreground text-center md:text-left">
              © 2025 EcoLedger. Building trust in sustainable commerce.
            </p>
            <div className="flex gap-6">
              <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
                About
              </a>
              <a href="#pricing" className="text-muted-foreground hover:text-primary transition-colors">
                Pricing
              </a>
              <a href="#tech" className="text-muted-foreground hover:text-primary transition-colors">
                Technology
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
