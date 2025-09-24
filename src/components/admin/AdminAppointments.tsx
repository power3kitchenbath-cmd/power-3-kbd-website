import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { format } from "date-fns";

interface Appointment {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  service_type: string;
  preferred_date: string;
  preferred_time: string;
  address?: string;
  notes?: string;
  status: string;
  created_at: string;
}

const AdminAppointments = () => {
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    fetchAppointments();
    
    // Set up real-time subscription
    const channel = supabase
      .channel('appointments-changes')
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
          table: 'kiosk_appointments'
        },
        () => {
          fetchAppointments();
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  const fetchAppointments = async () => {
    try {
      const { data, error } = await supabase
        .from('kiosk_appointments')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setAppointments(data || []);
    } catch (error) {
      console.error('Error fetching appointments:', error);
      toast({
        variant: "destructive",
        title: "Error loading appointments",
        description: "Please try refreshing the page",
      });
    } finally {
      setLoading(false);
    }
  };

  const updateAppointmentStatus = async (id: string, status: string) => {
    try {
      const { error } = await supabase
        .from('kiosk_appointments')
        .update({ status })
        .eq('id', id);

      if (error) throw error;

      toast({
        title: "Status updated",
        description: `Appointment marked as ${status}`,
      });
    } catch (error) {
      console.error('Error updating status:', error);
      toast({
        variant: "destructive",
        title: "Error updating status",
        description: "Please try again",
      });
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'confirmed':
        return 'bg-green-100 text-green-800';
      case 'completed':
        return 'bg-blue-100 text-blue-800';
      case 'cancelled':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const serviceNames: { [key: string]: string } = {
    "kitchen-cabinets": "Kitchen Cabinets",
    "bathroom-vanities": "Bathroom Vanities",
    "countertops": "Countertops",
    "flooring": "Flooring",
    "design-consultation": "Design Consultation",
    "full-remodel": "Full Remodel"
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Appointments ({appointments.length})</h2>
      </div>

      {appointments.length === 0 ? (
        <Card>
          <CardContent className="py-12 text-center">
            <p className="text-muted-foreground">No appointments found</p>
          </CardContent>
        </Card>
      ) : (
        <div className="grid gap-4">
          {appointments.map((appointment) => (
            <Card key={appointment.id}>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-lg">
                      {appointment.first_name} {appointment.last_name}
                    </CardTitle>
                    <CardDescription>
                      {serviceNames[appointment.service_type] || appointment.service_type}
                    </CardDescription>
                  </div>
                  <Badge className={getStatusColor(appointment.status)}>
                    {appointment.status}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <p><strong>Email:</strong> {appointment.email}</p>
                    <p><strong>Phone:</strong> {appointment.phone}</p>
                    <p><strong>Preferred Date:</strong> {format(new Date(appointment.preferred_date), 'PPP')}</p>
                    <p><strong>Preferred Time:</strong> {appointment.preferred_time}</p>
                  </div>
                  <div>
                    {appointment.address && (
                      <p><strong>Address:</strong> {appointment.address}</p>
                    )}
                    <p><strong>Submitted:</strong> {format(new Date(appointment.created_at), 'PPp')}</p>
                  </div>
                </div>
                
                {appointment.notes && (
                  <div>
                    <p><strong>Notes:</strong></p>
                    <p className="text-muted-foreground bg-muted p-3 rounded">{appointment.notes}</p>
                  </div>
                )}

                <div className="flex space-x-2 pt-4">
                  {appointment.status === 'pending' && (
                    <>
                      <Button 
                        size="sm" 
                        onClick={() => updateAppointmentStatus(appointment.id, 'confirmed')}
                      >
                        Confirm
                      </Button>
                      <Button 
                        size="sm" 
                        variant="destructive"
                        onClick={() => updateAppointmentStatus(appointment.id, 'cancelled')}
                      >
                        Cancel
                      </Button>
                    </>
                  )}
                  {appointment.status === 'confirmed' && (
                    <Button 
                      size="sm" 
                      variant="outline"
                      onClick={() => updateAppointmentStatus(appointment.id, 'completed')}
                    >
                      Mark Completed
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default AdminAppointments;