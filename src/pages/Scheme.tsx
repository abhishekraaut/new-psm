import { PublicHeader } from "@/components/Home/PublicHeader";
import { PublicFooter } from "@/components/Home/PublicFooter";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Scheme = () => {
  const schemes = [
    {
      title: "PM-eBus Sewa Scheme",
      description: "Support for deployment of electric buses in cities",
      features: [
        "Financial assistance for e-bus procurement",
        "Charging infrastructure support",
        "Operational cost subsidies",
        "Technology transfer support"
      ]
    },
    {
      title: "Payment Security Framework",
      description: "Ensuring secure and transparent financial transactions",
      features: [
        "Escrow account management",
        "Automated payment verification",
        "Real-time transaction monitoring",
        "Compliance tracking"
      ]
    },
    {
      title: "Fleet Management Support",
      description: "Comprehensive support for e-bus fleet operations",
      features: [
        "Route optimization assistance",
        "Maintenance support programs",
        "Driver training initiatives",
        "Performance monitoring tools"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <PublicHeader />
      
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto animate-fade-in">
          <div className="mb-12 text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                <span className="text-2xl">📋</span>
              </div>
              <h1 className="text-4xl font-bold text-foreground">Schemes & Programs</h1>
            </div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore various schemes and programs under PM-eBus Sewa initiative
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {schemes.map((scheme, index) => (
              <Card key={index} className="p-6 shadow-lg border-border hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-bold mb-3 text-foreground">{scheme.title}</h3>
                <p className="text-muted-foreground mb-4">{scheme.description}</p>
                <ul className="space-y-2 mb-4">
                  {scheme.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm">
                      <span className="text-primary mt-0.5">•</span>
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button variant="outline" className="w-full">Learn More</Button>
              </Card>
            ))}
          </div>

          <Card className="p-8 shadow-lg border-border bg-primary/5">
            <h2 className="text-2xl font-bold mb-4 text-foreground">Eligibility Criteria</h2>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <span className="text-primary">✓</span>
                <span className="text-muted-foreground">Cities with population above 3 lakhs as per 2011 census</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-primary">✓</span>
                <span className="text-muted-foreground">State Transport Undertakings (STUs) and City Bus Operators</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-primary">✓</span>
                <span className="text-muted-foreground">Must have operational public transport system</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-primary">✓</span>
                <span className="text-muted-foreground">Willingness to adopt electric mobility solutions</span>
              </div>
            </div>
          </Card>
        </div>
      </main>

      <PublicFooter />
    </div>
  );
};

export default Scheme;