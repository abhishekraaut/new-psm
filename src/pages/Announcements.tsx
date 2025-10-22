import { PublicHeader } from "@/components/Home/PublicHeader";
import { PublicFooter } from "@/components/Home/PublicFooter";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Announcements = () => {
  const announcements = [
    {
      id: 1,
      title: "New Application Portal Launch",
      date: "January 15, 2025",
      category: "System Update",
      description: "Enhanced application portal with improved user interface and faster processing times is now live.",
      isNew: true
    },
    {
      id: 2,
      title: "Scheme Extension for Tier-2 Cities",
      date: "January 10, 2025",
      category: "Policy Update",
      description: "PM-eBus Sewa scheme has been extended to include Tier-2 cities with population above 2 lakhs.",
      isNew: true
    },
    {
      id: 3,
      title: "Q3 Payment Processing Schedule",
      date: "January 5, 2025",
      category: "Important Notice",
      description: "Payment processing for Q3 FY 2024-25 will commence from January 20, 2025.",
      isNew: false
    },
    {
      id: 4,
      title: "Training Workshop for SPV Representatives",
      date: "December 28, 2024",
      category: "Event",
      description: "Online training sessions for SPV representatives will be conducted from February 1-5, 2025.",
      isNew: false
    },
    {
      id: 5,
      title: "Updated Guidelines Released",
      date: "December 20, 2024",
      category: "Documentation",
      description: "Revised operational guidelines and compliance requirements have been published.",
      isNew: false
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <PublicHeader />
      
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                <span className="text-2xl">📢</span>
              </div>
              <h1 className="text-4xl font-bold text-foreground">Announcements</h1>
            </div>
            <p className="text-lg text-muted-foreground">
              Stay updated with latest news and announcements
            </p>
          </div>

          <div className="space-y-6">
            {announcements.map((announcement) => (
              <Card key={announcement.id} className="p-6 shadow-lg border-border hover:shadow-xl transition-shadow">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <Badge variant={announcement.isNew ? "default" : "secondary"}>
                      {announcement.category}
                    </Badge>
                    {announcement.isNew && (
                      <Badge variant="destructive">NEW</Badge>
                    )}
                  </div>
                  <span className="text-sm text-muted-foreground">{announcement.date}</span>
                </div>
                
                <h3 className="text-xl font-bold mb-2 text-foreground">{announcement.title}</h3>
                <p className="text-muted-foreground">{announcement.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </main>

      <PublicFooter />
    </div>
  );
};

export default Announcements;