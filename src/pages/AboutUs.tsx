import { PublicHeader } from "@/components/Home/PublicHeader";
import { PublicFooter } from "@/components/Home/PublicFooter";
import { Card } from "@/components/ui/card";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-background">
      <PublicHeader />
      
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                <span className="text-2xl">ℹ️</span>
              </div>
              <h1 className="text-4xl font-bold text-foreground">About Us</h1>
            </div>
            <p className="text-lg text-muted-foreground">
              Learn more about PM-eBus Sewa Payment Security Mechanism
            </p>
          </div>

          <div className="space-y-6">
            <Card className="p-8 shadow-lg border-border">
              <h2 className="text-2xl font-bold mb-4 text-foreground">Our Mission</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                The PM-eBus Sewa Payment Security Mechanism is an initiative by the Ministry of Heavy Industries, 
                Government of India, aimed at revolutionizing public transportation through electric mobility.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our mission is to create a sustainable, efficient, and secure payment ecosystem that supports 
                the deployment and operation of electric buses across India.
              </p>
            </Card>

            <Card className="p-8 shadow-lg border-border">
              <h2 className="text-2xl font-bold mb-4 text-foreground">Key Objectives</h2>
              <ul className="space-y-3">
                {[
                  "Ensure secure and transparent payment mechanisms for e-bus operations",
                  "Support the transition to electric public transportation",
                  "Facilitate efficient escrow account management",
                  "Enable seamless verification and compliance processes",
                  "Promote sustainable urban mobility solutions"
                ].map((objective, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-primary mt-1">✓</span>
                    <span className="text-muted-foreground">{objective}</span>
                  </li>
                ))}
              </ul>
            </Card>

            <Card className="p-8 shadow-lg border-border">
              <h2 className="text-2xl font-bold mb-4 text-foreground">Contact Information</h2>
              <div className="space-y-2 text-muted-foreground">
                <p><strong>Ministry:</strong> Ministry of Heavy Industries</p>
                <p><strong>Government:</strong> Government of India</p>
                <p><strong>Email:</strong> support@pmebus.gov.in</p>
                <p><strong>Helpline:</strong> 1800-XXX-XXXX</p>
              </div>
            </Card>
          </div>
        </div>
      </main>

      <PublicFooter />
    </div>
  );
};

export default AboutUs;