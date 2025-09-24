import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { format } from "date-fns";

interface Inquiry {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  phone?: string;
  service_type: string;
  message?: string;
  status: string;
  created_at: string;
}

const AdminInquiries = () => {
  const [inquiries, setInquiries] = useState<Inquiry[]>([]);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    fetchInquiries();
    
    // Set up real-time subscription
    const channel = supabase
      .channel('inquiries-changes')
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
          table: 'kiosk_inquiries'
        },
        () => {
          fetchInquiries();
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  const fetchInquiries = async () => {
    try {
      const { data, error } = await supabase
        .from('kiosk_inquiries')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setInquiries(data || []);
    } catch (error) {
      console.error('Error fetching inquiries:', error);
      toast({
        variant: "destructive",
        title: "Error loading inquiries",
        description: "Please try refreshing the page",
      });
    } finally {
      setLoading(false);
    }
  };

  const updateInquiryStatus = async (id: string, status: string) => {
    try {
      const { error } = await supabase
        .from('kiosk_inquiries')
        .update({ status })
        .eq('id', id);

      if (error) throw error;

      toast({
        title: "Status updated",
        description: `Inquiry marked as ${status}`,
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
      case 'contacted':
        return 'bg-blue-100 text-blue-800';
      case 'completed':
        return 'bg-green-100 text-green-800';
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
        <h2 className="text-2xl font-bold">Inquiries ({inquiries.length})</h2>
      </div>

      {inquiries.length === 0 ? (
        <Card>
          <CardContent className="py-12 text-center">
            <p className="text-muted-foreground">No inquiries found</p>
          </CardContent>
        </Card>
      ) : (
        <div className="grid gap-4">
          {inquiries.map((inquiry) => (
            <Card key={inquiry.id}>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-lg">
                      {inquiry.first_name} {inquiry.last_name}
                    </CardTitle>
                    <CardDescription>
                      {serviceNames[inquiry.service_type] || inquiry.service_type}
                    </CardDescription>
                  </div>
                  <Badge className={getStatusColor(inquiry.status)}>
                    {inquiry.status}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <p><strong>Email:</strong> {inquiry.email}</p>
                    {inquiry.phone && (
                      <p><strong>Phone:</strong> {inquiry.phone}</p>
                    )}
                  </div>
                  <div>
                    <p><strong>Submitted:</strong> {format(new Date(inquiry.created_at), 'PPp')}</p>
                  </div>
                </div>
                
                {inquiry.message && (
                  <div>
                    <p><strong>Message:</strong></p>
                    <p className="text-muted-foreground bg-muted p-3 rounded">{inquiry.message}</p>
                  </div>
                )}

                <div className="flex space-x-2 pt-4">
                  {inquiry.status === 'pending' && (
                    <Button 
                      size="sm" 
                      onClick={() => updateInquiryStatus(inquiry.id, 'contacted')}
                    >
                      Mark as Contacted
                    </Button>
                  )}
                  {inquiry.status === 'contacted' && (
                    <Button 
                      size="sm" 
                      variant="outline"
                      onClick={() => updateInquiryStatus(inquiry.id, 'completed')}
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

export default AdminInquiries;