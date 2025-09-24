import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { z } from "zod";

interface KioskContactFormProps {
  selectedService: string;
  onSubmit: (data: any) => void;
  onBack: () => void;
}

const contactSchema = z.object({
  firstName: z.string().trim().min(1, "First name is required").max(100),
  lastName: z.string().trim().min(1, "Last name is required").max(100),
  email: z.string().trim().email("Valid email is required").max(255),
  phone: z.string().trim().min(10, "Phone number is required").max(20),
  message: z.string().trim().max(1000).optional(),
});

const KioskContactForm = ({ selectedService, onSubmit, onBack }: KioskContactFormProps) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: ""
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
      const validatedData = contactSchema.parse(formData);
      
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

      // Save inquiry to database
      const { error } = await supabase
        .from('kiosk_inquiries')
        .insert({
          user_id: user.id,
          first_name: validatedData.firstName,
          last_name: validatedData.lastName,
          email: validatedData.email,
          phone: validatedData.phone,
          service_type: selectedService,
          message: validatedData.message || null,
          status: 'pending'
        });

      if (error) throw error;

      onSubmit(validatedData);
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "Error saving contact information",
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

  return (
    <div className="w-full max-w-2xl space-y-6">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold">Contact Information</h1>
        <p className="text-xl text-muted-foreground">
          Service: <span className="font-semibold text-primary">{serviceNames[selectedService]}</span>
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Tell us about yourself</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName" className="text-lg">First Name *</Label>
                <Input
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className="text-lg py-6"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName" className="text-lg">Last Name *</Label>
                <Input
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className="text-lg py-6"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="text-lg">Email Address *</Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                className="text-lg py-6"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone" className="text-lg">Phone Number *</Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleInputChange}
                className="text-lg py-6"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="message" className="text-lg">Additional Details (Optional)</Label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Tell us more about your project..."
                className="text-lg min-h-[120px]"
                maxLength={1000}
              />
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
                {isLoading ? "Saving..." : "Continue"}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default KioskContactForm;