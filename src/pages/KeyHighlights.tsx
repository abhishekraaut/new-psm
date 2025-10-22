import { PublicHeader } from "@/components/Home/PublicHeader";
import { PublicFooter } from "@/components/Home/PublicFooter";
import { Card } from "@/components/ui/card";

const KeyHighlights = () => {
  const highlights = [
    {
      title: "Financial Support for Electric Buses",
      content: `Under the PM-eBus Sewa scheme, the Ministry of Heavy Industries provides substantial financial support to State Transport Undertakings (STUs) and city bus operators for the deployment of electric buses. This initiative aims to reduce carbon emissions and promote sustainable public transportation across India. The scheme covers a significant portion of the bus procurement cost, making it economically viable for operators to transition to electric mobility.`
    },
    {
      title: "Payment Security Mechanism",
      content: `A robust Payment Security Mechanism has been established to ensure timely payments to bus operators. This mechanism protects the interests of both operators and financial institutions by maintaining an escrow account system that guarantees payment flow. The system builds confidence among stakeholders and facilitates easier financing options for electric bus deployment.`
    },
    {
      title: "Green Transportation Initiative",
      content: `The scheme is part of India's commitment to sustainable development and reduction of vehicular emissions. By promoting electric buses in public transportation, the initiative contributes significantly to improving air quality in urban areas. This aligns with India's climate goals and international commitments towards reducing carbon footprint in the transportation sector.`
    },
    {
      title: "Technology and Innovation",
      content: `The PM-eBus Sewa scheme encourages the adoption of cutting-edge technology in public transportation. It promotes indigenous manufacturing of electric buses and associated infrastructure, supporting the 'Make in India' initiative. The scheme also facilitates research and development in battery technology, charging infrastructure, and smart mobility solutions.`
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-background to-muted/20">
      <PublicHeader />
      
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8">
          {/* Breadcrumb */}
          <div className="text-sm text-muted-foreground mb-6">
            Home / Scheme / Key Highlights
          </div>

          {/* Page Title */}
          <h1 className="text-4xl md:text-5xl font-bold text-primary text-center mb-12">
            Key Highlights
          </h1>

          {/* Highlights Content */}
          <div className="space-y-8 max-w-5xl mx-auto">
            {highlights.map((highlight, index) => (
              <Card key={index} className="p-8 bg-card/50 backdrop-blur-sm border-2 hover:shadow-lg transition-shadow">
                <h2 className="text-2xl font-bold text-primary mb-4">{highlight.title}</h2>
                <p className="text-muted-foreground leading-relaxed text-justify">
                  {highlight.content}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </main>

      <PublicFooter />
    </div>
  );
};

export default KeyHighlights;
