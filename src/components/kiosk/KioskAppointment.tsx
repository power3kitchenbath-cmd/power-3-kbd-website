import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { z } from "zod";

interface KioskAppointmentProps {
  selectedService: string;
  contactData: any;
  onSubmit: () => void;
  onBack: () => void;
}

const appointmentSchema = z.object({
  preferredDate: z.string().min(1, "Please select a preferred date"),
  preferredTime: z.string().min(1, "Please select a preferred time"),
  address: z.string().trim().max(500).optional(),
  notes: z.string().trim().max(1000).optional(),
});

const KioskAppointment = ({ selectedService, contactData, onSubmit, onBack }: KioskAppointmentProps) => {
  const [formData, setFormData] = useState({
    preferredDate: "",
    preferredTime: "",
    address: "",
    notes: ""
  });
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const validatedData = appointmentSchema.parse(formData);
      
      // Get current user
      const { data: { user } } = await supabase.auth.getUser();
      
      if (!user) {
        toast({
          variant: "destructive",
          title: "Authentication required",
          description: "Please sign in to continue",
        });
        return;
      }

      // Save appointment to database
      const { error } = await supabase
        .from('kiosk_appointments')
        .insert({
          user_id: user.id,
          first_name: contactData.firstName,
          last_name: contactData.lastName,
          email: contactData.email,
          phone: contactData.phone,
          service_type: selectedService,
          preferred_date: validatedData.preferredDate,
          preferred_time: validatedData.preferredTime,
          address: validatedData.address || null,
          notes: validatedData.notes || null,
          status: 'pending'
        });

      if (error) throw error;

      toast({
        title: "Appointment Requested!",
        description: "We'll contact you soon to confirm your appointment.",
      });

      onSubmit();
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "Error scheduling appointment",
        description: error.message || "Please try again",
      });
    } finally {
      setIsLoading(false);
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

  // Get tomorrow's date as minimum selectable date
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const minDate = tomorrow.toISOString().split('T')[0];

  return (
    <div className="w-full max-w-2xl space-y-6">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold">Schedule Your Appointment</h1>
        <p className="text-xl text-muted-foreground">
          Service: <span className="font-semibold text-primary">{serviceNames[selectedService]}</span>
        </p>
        <p className="text-lg">
          For: <span className="font-semibold">{contactData.firstName} {contactData.lastName}</span>
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Appointment Details</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="preferredDate" className="text-lg">Preferred Date *</Label>
                <Input
                  id="preferredDate"
                  name="preferredDate"
                  type="date"
                  value={formData.preferredDate}
                  onChange={handleInputChange}
                  min={minDate}
                  className="text-lg py-6"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="preferredTime" className="text-lg">Preferred Time *</Label>
                <Input
                  id="preferredTime"
                  name="preferredTime"
                  type="time"
                  value={formData.preferredTime}
                  onChange={handleInputChange}
                  className="text-lg py-6"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="address" className="text-lg">Project Address (Optional)</Label>
              <Input
                id="address"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                placeholder="Where is your project located?"
                className="text-lg py-6"
                maxLength={500}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="notes" className="text-lg">Additional Notes (Optional)</Label>
              <Textarea
                id="notes"
                name="notes"
                value={formData.notes}
                onChange={handleInputChange}
                placeholder="Any additional details about your project or preferences..."
                className="text-lg min-h-[120px]"
                maxLength={1000}
              />
            </div>

            <div className="bg-muted p-4 rounded-lg">
              <p className="text-sm text-muted-foreground">
                <strong>Note:</strong> This is a request for an appointment. Our team will contact you 
                within 24 hours to confirm the date and time that works best for both parties.
              </p>
            </div>

            <div className="flex space-x-4">
              <Button 
                type="button" 
                variant="outline" 
                size="lg"
                onClick={onBack}
                className="text-lg px-8 py-6 flex-1"
              >
                Back
              </Button>
              <Button 
                type="submit" 
                size="lg"
                disabled={isLoading}
                className="text-lg px-8 py-6 flex-1"
              >
                {isLoading ? "Scheduling..." : "Schedule Appointment"}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default KioskAppointment;