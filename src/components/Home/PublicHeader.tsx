import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menu, X, ChevronDown } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const PublicHeader = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const navItems = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about-us" },
    { label: "Scheme", href: "/scheme" },
    { label: "Announcements", href: "/announcements" },
    { label: "Important Links", href: "/important-links" },
    { label: "Contact Us", href: "/contact-us" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-card/95 backdrop-blur-sm border-b border-border shadow-sm">
      <div className="bg-muted/50 border-b border-border">
        <div className="container mx-auto px-4 py-2 flex justify-between items-center text-xs md:text-sm">
          <div className="flex gap-4">
            <span className="text-muted-foreground">Screen Reader Access</span>
            <span className="text-muted-foreground">|</span>
            <span className="text-muted-foreground">Skip to Main Content</span>
          </div>
          <div className="flex gap-2 items-center">
            <span className="text-muted-foreground">A-</span>
            <span className="text-muted-foreground">A</span>
            <span className="text-muted-foreground">A+</span>
            <span className="mx-2">|</span>
            <select className="bg-transparent text-muted-foreground text-xs">
              <option>English</option>
              <option>हिंदी</option>
            </select>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-primary/10 rounded-full flex items-center justify-center">
                <span className="text-2xl">🏛️</span>
              </div>
              <div>
                <div className="text-xs md:text-sm text-muted-foreground">Ministry of</div>
                <div className="text-sm md:text-lg font-bold text-foreground">Heavy Industries</div>
              </div>
            </div>
          </div>

          <nav className="hidden lg:flex items-center gap-6">
            {navItems.map((item) => {
              if (item.label === "About Us") {
                return (
                  <DropdownMenu key={item.label}>
                    <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-medium text-foreground hover:text-primary transition-colors outline-none">
                      {item.label}
                      <ChevronDown className="h-4 w-4" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="bg-card">
                      <DropdownMenuItem onClick={() => navigate("/ministry-of-heavy-industries")}>
                        Ministry of Heavy Industries
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={() => navigate("/whos-who")}>
                        Who's Who
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                );
              }
              if (item.label === "Scheme") {
                return (
                  <DropdownMenu key={item.label}>
                    <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-medium text-foreground hover:text-primary transition-colors outline-none">
                      {item.label}
                      <ChevronDown className="h-4 w-4" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="bg-card">
                      <DropdownMenuItem onClick={() => navigate("/key-highlights")}>
                        Key Highlights
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={() => navigate("/documents")}>
                        Documents
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                );
              }
              return (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-sm font-medium text-foreground hover:text-primary transition-colors"
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          <div className="flex items-center gap-3">
            <Button
              onClick={() => navigate("/login")}
              className="shadow-md hover:shadow-lg"
            >
              Login
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {mobileMenuOpen && (
          <nav className="lg:hidden mt-4 pb-4 border-t border-border pt-4 animate-fade-in">
            <div className="flex flex-col gap-3">
              {navItems.map((item) => {
                if (item.label === "About Us") {
                  return (
                    <div key={item.label} className="flex flex-col gap-2">
                      <span className="text-sm font-medium text-foreground py-2">
                        {item.label}
                      </span>
                      <a
                        href="/ministry-of-heavy-industries"
                        className="text-sm text-muted-foreground hover:text-primary transition-colors py-2 pl-4"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        Ministry of Heavy Industries
                      </a>
                      <a
                        href="/whos-who"
                        className="text-sm text-muted-foreground hover:text-primary transition-colors py-2 pl-4"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        Who's Who
                      </a>
                    </div>
                  );
                }
                if (item.label === "Scheme") {
                  return (
                    <div key={item.label} className="flex flex-col gap-2">
                      <span className="text-sm font-medium text-foreground py-2">
                        {item.label}
                      </span>
                      <a
                        href="/key-highlights"
                        className="text-sm text-muted-foreground hover:text-primary transition-colors py-2 pl-4"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        Key Highlights
                      </a>
                      <a
                        href="/documents"
                        className="text-sm text-muted-foreground hover:text-primary transition-colors py-2 pl-4"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        Documents
                      </a>
                    </div>
                  );
                }
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    className="text-sm font-medium text-foreground hover:text-primary transition-colors py-2"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                );
              })}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};
