import { Button } from "@/components/ui/button";
import { 
  LayoutDashboard, 
  BookOpen, 
  Users, 
  DollarSign, 
  BarChart3, 
  MessageSquare, 
  Settings,
  Sparkles,
  Monitor,
  UserCog,
  X
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import React from "react";

const DashboardSidebar = ({ open = false, onClose = () => {} }) => {
  const location = useLocation();
  
  const menuItems = [
    { icon: LayoutDashboard, label: "Overview", path: "/dashboard" },
    { icon: BookOpen, label: "Courses", path: "/dashboard/courses" },
    { icon: Users, label: "Enrollments", path: "/dashboard/enrollments" },
    { icon: UserCog, label: "User Management", path: "/dashboard/users" },
    { icon: DollarSign, label: "Revenue", path: "/dashboard/revenue" },
    { icon: BarChart3, label: "Analytics", path: "/dashboard/analytics" },
    { icon: MessageSquare, label: "Collaboration Hub", path: "/dashboard/collaboration" },
    { icon: Monitor, label: "Whiteboard", path: "/dashboard/whiteboard" },
    { icon: Sparkles, label: "AI Recommendations", path: "/dashboard/recommendations" },
    { icon: Settings, label: "Settings", path: "/dashboard/settings" },
  ];

  return (
    <>
      {/* Overlay for mobile */}
      <div
        className={`fixed inset-0 bg-black/30 z-20 transition-opacity duration-300 md:hidden ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
        aria-hidden={!open}
        onClick={onClose}
      />
      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-blue-900/20 backdrop-blur-md border-r border-blue-400/30 p-6 z-30 transform transition-transform duration-300 md:static md:translate-x-0 md:block ${open ? "translate-x-0" : "-translate-x-full"}`}
        aria-label="Sidebar"
        aria-hidden={!open && window.innerWidth < 768}
      >
        {/* Close button for mobile */}
        <div className="flex items-center justify-between mb-8 md:hidden">
          <h2 className="text-2xl font-bold text-white">Instructor Dashboard</h2>
          <button onClick={onClose} aria-label="Close sidebar">
            <X className="h-6 w-6 text-white" />
          </button>
        </div>
        {/* Title for desktop */}
        <div className="mb-8 hidden md:block">
          <h2 className="text-2xl font-bold text-white">Instructor Dashboard</h2>
        </div>
        <nav className="space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            return (
              <Link key={item.path} to={item.path} onClick={onClose}>
                <Button
                  variant={isActive ? "default" : "ghost"}
                  className={`w-full justify-start ${
                    isActive ? "bg-white/20 text-white backdrop-blur-sm" : "text-slate-800 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  <Icon className="mr-3 h-5 w-5" />
                  {item.label}
                </Button>
              </Link>
            );
          })}
        </nav>
      </aside>
    </>
  );
};

export default DashboardSidebar;