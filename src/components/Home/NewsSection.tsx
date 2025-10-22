import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export const NewsSection = () => {
  const newsItems = [
    {
      date: "09/10/2025 to 09/11/2025",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
    },
    {
      date: "09/10/2025 to 09/11/2025",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
    },
  ];

  return (
    <section className="py-16 bg-accent/10">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">WHAT'S HAPPENING</h2>

        <Tabs defaultValue="news" className="w-full">
          <TabsList className="grid w-full max-w-md grid-cols-4 mb-8">
            <TabsTrigger value="news">WHAT'S NEW</TabsTrigger>
            <TabsTrigger value="events">EVENTS</TabsTrigger>
            <TabsTrigger value="latest">NEWS</TabsTrigger>
            <TabsTrigger value="notification">NOTIFICATION</TabsTrigger>
          </TabsList>

          <TabsContent value="news" className="space-y-6 animate-fade-in">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                {newsItems.map((item, index) => (
                  <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                    <div className="text-sm text-muted-foreground mb-2">{item.date}</div>
                    <p className="text-foreground mb-4">{item.content}</p>
                    <Button variant="link" className="p-0 h-auto">
                      Read More
                    </Button>
                  </Card>
                ))}
                <Button variant="outline" className="w-full">
                  View All
                </Button>
              </div>

              <div className="flex items-center justify-center">
                <div className="text-8xl">📢</div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="events">
            <div className="text-center py-12 text-muted-foreground">Events content coming soon...</div>
          </TabsContent>

          <TabsContent value="latest">
            <div className="text-center py-12 text-muted-foreground">Latest news coming soon...</div>
          </TabsContent>

          <TabsContent value="notification">
            <div className="text-center py-12 text-muted-foreground">Notifications coming soon...</div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};
