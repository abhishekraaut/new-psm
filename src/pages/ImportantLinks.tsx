import { PublicHeader } from "@/components/Home/PublicHeader";
import { PublicFooter } from "@/components/Home/PublicFooter";
import { Card } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";

const ImportantLinks = () => {
  const linkCategories = [
    {
      title: "Government Portals",
      links: [
        { name: "Ministry of Heavy Industries", url: "https://heavyindustries.gov.in" },
        { name: "India.gov.in", url: "https://india.gov.in" },
        { name: "MyGov", url: "https://mygov.in" },
        { name: "Digital India", url: "https://digitalindia.gov.in" }
      ]
    },
    {
      title: "Related Initiatives",
      links: [
        { name: "FAME India", url: "#" },
        { name: "Smart Cities Mission", url: "#" },
        { name: "National Electric Mobility Mission", url: "#" },
        { name: "Atal Mission for Rejuvenation", url: "#" }
      ]
    },
    {
      title: "Resources & Documentation",
      links: [
        { name: "Guidelines & Circulars", url: "#" },
        { name: "Application Forms", url: "#" },
        { name: "FAQ Section", url: "#" },
        { name: "User Manuals", url: "#" }
      ]
    },
    {
      title: "Support & Help",
      links: [
        { name: "Helpdesk Portal", url: "#" },
        { name: "Technical Support", url: "#" },
        { name: "Feedback System", url: "#" },
        { name: "Grievance Redressal", url: "#" }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <PublicHeader />
      
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-5xl mx-auto animate-fade-in">
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                <span className="text-2xl">🔗</span>
              </div>
              <h1 className="text-4xl font-bold text-foreground">Important Links</h1>
            </div>
            <p className="text-lg text-muted-foreground">
              Quick access to essential resources and related portals
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {linkCategories.map((category, index) => (
              <Card key={index} className="p-6 shadow-lg border-border">
                <h2 className="text-xl font-bold mb-4 text-foreground flex items-center gap-2">
                  <span className="text-primary">•</span>
                  {category.title}
                </h2>
                <ul className="space-y-3">
                  {category.links.map((link, idx) => (
                    <li key={idx}>
                      <a
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
                      >
                        <ExternalLink className="w-4 h-4 group-hover:scale-110 transition-transform" />
                        <span className="group-hover:underline">{link.name}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </main>

      <PublicFooter />
    </div>
  );
};

export default ImportantLinks;