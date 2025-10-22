import { PublicHeader } from "@/components/Home/PublicHeader";
import { PublicFooter } from "@/components/Home/PublicFooter";
import { Card } from "@/components/ui/card";
import { Globe, Target, Building, Factory, FileText } from "lucide-react";

const MinistryOfHeavyIndustries = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-background to-muted/20">
      <PublicHeader />
      
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8">
          {/* Breadcrumb */}
          <div className="text-sm text-muted-foreground mb-6">
            Home / About us / Ministry of Heavy Industries
          </div>

          {/* Page Title */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">About MHI</h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-6">
              Ministry of Heavy Industries, India
            </h2>
            <p className="text-muted-foreground max-w-4xl mx-auto text-lg">
              The Ministry of Heavy Industries (MHI) is concerned with the development of the Heavy 
              Engineering Equipment and Machine Tools Industry, Automotive, and Heavy Electrical 
              Engineering Industry.
            </p>
          </div>

          {/* Vision & Mission */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <Card className="p-8 bg-card/50 backdrop-blur-sm border-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Globe className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-primary">Vision</h3>
              </div>
              <p className="text-muted-foreground italic leading-relaxed">
                To have a globally competitive, green & technology-driven heavy industry manufacturing 
                sector, including automotive and capital goods sectors, which propels growth and job creation.
              </p>
            </Card>

            <Card className="p-8 bg-card/50 backdrop-blur-sm border-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Target className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-primary">Mission</h3>
              </div>
              <p className="text-muted-foreground italic leading-relaxed">
                To facilitate Auto, Heavy Electrical & Capital Goods Sectors to be globally competitive, 
                growth oriented and profitable and to provide all necessary support to CPSEs to improve 
                their overall performance.
              </p>
            </Card>
          </div>

          {/* Key Responsibilities */}
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-center text-primary mb-6">Key Responsibilities</h2>
            <p className="text-center text-muted-foreground max-w-5xl mx-auto mb-8 leading-relaxed">
              The Ministry maintains a constant dialogue with Industry Associations and encourages initiatives 
              for the growth of the industry. The Ministry also assists the industry in achieving their growth 
              plans through support for policy initiatives, suitable interventions for restructuring of tariffs 
              and trade, promotion of technological collaboration and up-gradation, and research & development 
              activities etc.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-6 bg-card/50 backdrop-blur-sm hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Factory className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-primary">Sectoral Development</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Promotes the development and growth of three sectors i.e. Capital Goods, Automobile 
                and Heavy Electrical Equipment in the country
              </p>
            </Card>

            <Card className="p-6 bg-card/50 backdrop-blur-sm hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Building className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-primary">Central Public Sector Enterprises (CPSEs)</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Administering 21 CPSEs and four autonomous bodies.
              </p>
            </Card>

            <Card className="p-6 bg-card/50 backdrop-blur-sm hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <FileText className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-primary">Policy Support</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Promotes industry growth through strategic policy interventions.
              </p>
            </Card>
          </div>
        </div>
      </main>

      <PublicFooter />
    </div>
  );
};

export default MinistryOfHeavyIndustries;
