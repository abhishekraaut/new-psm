import { DashboardLayout } from "@/components/Layout/DashboardLayout";

const UserManagement = () => {
  return (
    <DashboardLayout>
      <div className="p-8">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-foreground mb-2">User Management</h1>
          <p className="text-muted-foreground">Manage users and permissions</p>
        </div>
        
        <div className="bg-card rounded-lg p-6 shadow-sm">
          <h2 className="text-xl font-semibold mb-4">User List</h2>
          <p className="text-muted-foreground">This is a placeholder page for User Management.</p>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default UserManagement;
