import { Outlet } from "react-router-dom";
import DashboardSidebar from "@/components/DashboardSidebar";
import PageNavigation from "@/components/PageNavigation";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-400 via-blue-500 to-cyan-500 flex w-full">
      <DashboardSidebar />
      <main className="flex-1 p-6">
        <Outlet />
      </main>
      <PageNavigation />
    </div>
  );
};

export default Dashboard;