import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Plus, 
  BookOpen, 
  Users, 
  DollarSign, 
  BarChart3, 
  Play,
  Edit,
  Trash2,
  Upload,
  Eye,
  Settings,
  FileText
} from "lucide-react";
import { Link } from "react-router-dom";

const VendorPortal = () => {
  // Redirect to dashboard instead of showing duplicate functionality
  window.location.href = '/dashboard';
  return null;
};

export default VendorPortal;
