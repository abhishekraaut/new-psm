import { useNavigate } from "react-router-dom";
import { DashboardLayout } from "@/components/Layout/DashboardLayout";
import { StatCard } from "@/components/Statistics/StatCard";
import { Building2, Landmark, FileText, ClipboardList, BarChart3 } from "lucide-react";

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <DashboardLayout>
      <div className="p-4 md:p-6 lg:p-8 animate-fade-in">
        <div className="mb-6 md:mb-8 flex items-center gap-3 md:gap-4 pb-4 border-b border-border">
          <div className="p-2 md:p-3 rounded-lg bg-primary/10">
            <BarChart3 className="h-5 w-5 md:h-7 md:w-7 text-primary" />
          </div>
          <div>
            <h2 className="text-xl md:text-3xl font-bold text-foreground">Dashboard</h2>
            <p className="text-xs md:text-sm text-muted-foreground font-medium">Home / Master Data / Dashboard</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          <StatCard
            icon={<Building2 className="h-12 w-12 md:h-14 md:w-14" />}
            title="Company Info"
            details={[
              { label: "Name", value: "Creative Solutions" },
              { label: "Incorporation Date", value: "12/10/2024" },
            ]}
            onClick={() => navigate("/company-profile")}
          />

          <StatCard
            icon={<Landmark className="h-12 w-12 md:h-14 md:w-14" />}
            title="Escrow Account"
            details={[
              { label: "Total Accounts", value: "xxxx" },
              { label: "Verified Accounts", value: "xxxx" },
            ]}
          />

          <StatCard
            icon={<FileText className="h-12 w-12 md:h-14 md:w-14" />}
            title="Concession Agreement"
            details={[
              { label: "Total CA", value: "xxxx" },
              { label: "Verified CA", value: "xxxx" },
            ]}
          />

          <StatCard
            icon={<ClipboardList className="h-12 w-12 md:h-14 md:w-14" />}
            title="Requests"
            details={[
              { label: "Pending", value: "xxxx" },
              { label: "Approved", value: "xxxx" },
            ]}
          />
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
