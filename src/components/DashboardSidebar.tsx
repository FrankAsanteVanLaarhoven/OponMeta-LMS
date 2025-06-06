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
  UserCog
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const DashboardSidebar = () => {
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
    <div className="w-64 bg-blue-900/20 backdrop-blur-md border-r border-blue-400/30 p-6">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-white">Vendor Dashboard</h2>
      </div>
      
      <nav className="space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;
          
          return (
            <Link key={item.path} to={item.path}>
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
    </div>
  );
};

export default DashboardSidebar;