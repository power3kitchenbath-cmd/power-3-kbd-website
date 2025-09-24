import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AdminAppointments from "@/components/admin/AdminAppointments";
import AdminInquiries from "@/components/admin/AdminInquiries";

const Admin = () => {
  const { user, loading } = useAuth();
  const [isStaff, setIsStaff] = useState(false);
  const [checkingAccess, setCheckingAccess] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const checkStaffAccess = async () => {
      if (!user) {
        navigate("/auth");
        return;
      }

      try {
        const { data, error } = await supabase
          .rpc('is_staff', { _user_id: user.id });

        if (error) throw error;
        
        if (!data) {
          navigate("/");
          return;
        }
        
        setIsStaff(true);
      } catch (error) {
        console.error('Error checking staff access:', error);
        navigate("/");
      } finally {
        setCheckingAccess(false);
      }
    };

    if (!loading) {
      checkStaffAccess();
    }
  }, [user, loading, navigate]);

  if (loading || checkingAccess) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p>Loading...</p>
        </div>
      </div>
    );
  }

  if (!isStaff) {
    return null;
  }

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold">Admin Dashboard</h1>
            <p className="text-muted-foreground">Manage appointments and inquiries</p>
          </div>
          <Button variant="outline" onClick={() => navigate("/")}>
            Back to Website
          </Button>
        </div>

        {/* Main Content */}
        <Tabs defaultValue="appointments" className="space-y-6">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="appointments">Appointments</TabsTrigger>
            <TabsTrigger value="inquiries">Inquiries</TabsTrigger>
          </TabsList>
          
          <TabsContent value="appointments">
            <AdminAppointments />
          </TabsContent>
          
          <TabsContent value="inquiries">
            <AdminInquiries />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Admin;