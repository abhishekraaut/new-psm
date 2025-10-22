import { ReactNode } from "react";
import { Card } from "@/components/ui/card";

interface StatCardProps {
  icon: ReactNode;
  title: string;
  details: { label: string; value: string }[];
  onClick?: () => void;
}

export const StatCard = ({ icon, title, details, onClick }: StatCardProps) => {
  return (
    <Card 
      className={`group relative overflow-hidden p-6 bg-card border-border shadow-md hover:shadow-xl transition-all duration-300 ${
        onClick ? "cursor-pointer hover:-translate-y-1" : ""
      }`}
      onClick={onClick}
    >
      {/* Subtle gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      <div className="relative flex flex-col items-center text-center space-y-4">
        <div className="p-4 rounded-full bg-secondary/50 text-primary group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>
        <h3 className="font-bold text-lg text-foreground">{title}</h3>
        <div className="w-full space-y-3 pt-2">
          {details.map((detail, index) => (
            <div key={index} className="flex justify-between items-center text-sm border-t border-border/50 pt-2 first:border-t-0 first:pt-0">
              <span className="text-muted-foreground font-medium">{detail.label}:</span>
              <span className="text-foreground font-semibold">{detail.value}</span>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
};
