import { Bell, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface HeaderProps {
  onMenuClick: () => void;
}

export const Header = ({ onMenuClick }: HeaderProps) => {
  return (
    <header className="bg-sidebar-background border-b border-sidebar-border shadow-sm py-3 md:py-4 px-4 md:px-6 flex items-center justify-between">
      <div className="flex items-center gap-2 md:gap-4">
        <Button
          variant="ghost"
          size="icon"
          className="lg:hidden hover:bg-sidebar-accent"
          onClick={onMenuClick}
        >
          <Menu className="h-5 w-5" />
        </Button>
        <div>
          <p className="text-xs md:text-sm text-muted-foreground font-medium">Welcome</p>
          <h1 className="text-lg md:text-2xl font-bold text-foreground">ABC</h1>
        </div>
      </div>
      
      <div className="flex items-center gap-2 md:gap-3">
        <Button 
          variant="default" 
          size="sm"
          className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-xs md:text-sm shadow-md hover:shadow-lg transition-all"
        >
          SPV
        </Button>
        
        <Button 
          variant="outline" 
          size="icon"
          className="relative border-border hover:bg-accent/20 hover:border-accent h-8 w-8 md:h-10 md:w-10 transition-all"
        >
          <Bell className="h-4 w-4 md:h-5 md:w-5" />
          <span className="absolute -top-1 -right-1 h-3 w-3 md:h-4 md:w-4 rounded-full bg-destructive text-[8px] md:text-[10px] text-white flex items-center justify-center font-bold shadow-md animate-pulse">
            8
          </span>
        </Button>
        
        <Select defaultValue="abc">
          <SelectTrigger className="w-[100px] md:w-[140px] border-border hover:border-accent text-xs md:text-sm transition-all">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="abc">ABC</SelectItem>
            <SelectItem value="xyz">XYZ</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </header>
  );
};
