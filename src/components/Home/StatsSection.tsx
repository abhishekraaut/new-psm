import { Card } from "@/components/ui/card";

export const StatsSection = () => {
  const stats = [
    { icon: "📊", label: "Figure 01", value: "Label 01" },
    { icon: "📈", label: "Figure 02", value: "Label 02" },
  ];

  return (
    <section className="py-12 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between flex-wrap gap-6">
          <div className="flex items-center gap-4">
            <div className="w-20 h-20 bg-card rounded-lg flex items-center justify-center">
              <span className="text-3xl">🎯</span>
            </div>
            <div>
              <div className="text-2xl font-bold">PSM</div>
              <div className="text-sm opacity-90">Logo</div>
            </div>
          </div>

          {stats.map((stat, index) => (
            <Card
              key={index}
              className="bg-card/10 backdrop-blur-sm border-primary-foreground/20 p-6 hover:bg-card/20 transition-all"
            >
              <div className="flex items-center gap-4">
                <div className="text-4xl">{stat.icon}</div>
                <div>
                  <div className="text-lg font-bold">{stat.label}</div>
                  <div className="text-sm opacity-90">{stat.value}</div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
