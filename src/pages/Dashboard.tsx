import { useState } from "react";
import { Outlet } from "react-router-dom";
import DashboardSidebar from "@/components/DashboardSidebar";
import PageNavigation from "@/components/PageNavigation";
import { Menu } from "lucide-react";

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground flex w-full">
      {/* Hamburger for mobile */}
      <button
        className="md:hidden fixed top-4 left-4 z-30 bg-white/80 rounded-full p-2 shadow-lg border border-blue-200"
        onClick={() => setSidebarOpen(true)}
        aria-label="Open sidebar"
      >
        <Menu className="h-6 w-6 text-blue-900" />
      </button>
      <DashboardSidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <main className="flex-1 p-4 sm:p-6">
        <Outlet />
      </main>
      <PageNavigation />
    </div>
  );
};

export default Dashboard;