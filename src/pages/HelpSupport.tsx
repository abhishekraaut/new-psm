import { DashboardLayout } from "@/components/Layout/DashboardLayout";

const HelpSupport = () => {
  return (
    <DashboardLayout>
      <div className="p-8">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-foreground mb-2">Help & Support</h1>
          <p className="text-muted-foreground">Get help and support for the application</p>
        </div>
        
        <div className="bg-card rounded-lg p-6 shadow-sm">
          <h2 className="text-xl font-semibold mb-4">Support Resources</h2>
          <p className="text-muted-foreground">This is a placeholder page for Help & Support.</p>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default HelpSupport;
