import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Search, ChevronDown, ChevronRight, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export const Sidebar = ({ isOpen, onClose }: SidebarProps) => {
  const [masterDataOpen, setMasterDataOpen] = useState(true);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        onClose();
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [onClose]);

  return (
    <>
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}
      
      <aside className={`
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        lg:translate-x-0
        fixed lg:static
        w-64 bg-sidebar-background border-r border-sidebar-border 
        flex flex-col h-screen z-50
        transition-transform duration-300 ease-in-out
      `}>
      <div className="p-4 md:p-6 flex items-center justify-between">
        <img 
          src="/placeholder.svg" 
          alt="Convergence Energy Services Limited" 
          className="h-16 md:h-20 w-auto"
        />
        <Button
          variant="ghost"
          size="icon"
          className="lg:hidden"
          onClick={onClose}
        >
          <X className="h-5 w-5" />
        </Button>
      </div>

      <div className="px-4 mb-6">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input 
            placeholder="Search" 
            className="pl-10 bg-white border-border"
          />
        </div>
      </div>

      <nav className="flex-1 px-4 space-y-1">
        <Link 
          to="/" 
          className={`block px-4 py-2 rounded text-sm ${
            isActive("/") && !isActive("/company-profile")
              ? "text-primary font-medium" 
              : "text-sidebar-foreground hover:text-primary"
          }`}
        >
          Dashboard
        </Link>

        <div>
          <button
            onClick={() => setMasterDataOpen(!masterDataOpen)}
            className={`w-full flex items-center justify-between px-4 py-2 rounded text-sm ${
              location.pathname.includes("/company-profile") || location.pathname === "/"
                ? "text-primary font-medium"
                : "text-sidebar-foreground hover:text-primary"
            }`}
          >
            <span>Master Data</span>
            {masterDataOpen ? (
              <ChevronDown className="h-4 w-4" />
            ) : (
              <ChevronRight className="h-4 w-4" />
            )}
          </button>

          {masterDataOpen && (
            <div className="ml-4 mt-1 space-y-1 border-l border-border pl-4">
              <Link
                to="/"
                className={`block px-4 py-2 text-sm ${
                  isActive("/") && !isActive("/company-profile")
                    ? "text-primary font-medium"
                    : "text-muted-foreground hover:text-primary"
                }`}
              >
                View Statistics
              </Link>
              <Link
                to="/company-profile"
                className={`flex items-center gap-2 px-4 py-2 text-sm ${
                  isActive("/company-profile")
                    ? "text-primary font-medium"
                    : "text-muted-foreground hover:text-primary"
                }`}
              >
                Company Profile
                {isActive("/company-profile") && (
                  <span className="h-2 w-2 rounded-full bg-destructive"></span>
                )}
              </Link>
              <Link
                to="/escrow-account"
                className={`flex items-center gap-2 px-4 py-2 text-sm ${
                  isActive("/escrow-account")
                    ? "text-primary font-medium"
                    : "text-muted-foreground hover:text-primary"
                }`}
              >
                Escrow Account
                {isActive("/escrow-account") && (
                  <span className="h-2 w-2 rounded-full bg-destructive"></span>
                )}
              </Link>
              <Link
                to="/concession-agreement"
                className={`block px-4 py-2 text-sm ${
                  isActive("/concession-agreement")
                    ? "text-primary font-medium"
                    : "text-muted-foreground hover:text-primary"
                }`}
              >
                Concession Agreement
              </Link>
              <Link
                to="/request-verification"
                className={`block px-4 py-2 text-sm ${
                  isActive("/request-verification")
                    ? "text-primary font-medium"
                    : "text-muted-foreground hover:text-primary"
                }`}
              >
                Request for Verification
              </Link>
            </div>
          )}
        </div>

        <Link
          to="/user-management"
          className={`w-full flex items-center justify-between px-4 py-2 rounded text-sm ${
            isActive("/user-management")
              ? "text-primary font-medium"
              : "text-sidebar-foreground hover:text-primary"
          }`}
        >
          <span>User Management</span>
          <ChevronRight className="h-4 w-4" />
        </Link>

        <Link 
          to="/invoices" 
          className={`block px-4 py-2 rounded text-sm ${
            isActive("/invoices")
              ? "text-primary font-medium"
              : "text-sidebar-foreground hover:text-primary"
          }`}
        >
          Invoices
        </Link>

        <Link 
          to="/help-support" 
          className={`block px-4 py-2 rounded text-sm ${
            isActive("/help-support")
              ? "text-primary font-medium"
              : "text-sidebar-foreground hover:text-primary"
          }`}
        >
          Help/ Support
        </Link>
      </nav>
      </aside>
    </>
  );
};
