import { DashboardLayout } from "@/components/Layout/DashboardLayout";

const Invoices = () => {
  return (
    <DashboardLayout>
      <div className="p-8">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-foreground mb-2">Invoices</h1>
          <p className="text-muted-foreground">View and manage invoices</p>
        </div>
        
        <div className="bg-card rounded-lg p-6 shadow-sm">
          <h2 className="text-xl font-semibold mb-4">Invoice List</h2>
          <p className="text-muted-foreground">This is a placeholder page for Invoices.</p>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Invoices;
