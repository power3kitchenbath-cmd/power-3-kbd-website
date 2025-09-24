import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import KioskServiceSelection from "@/components/kiosk/KioskServiceSelection";
import KioskContactForm from "@/components/kiosk/KioskContactForm";
import KioskAppointment from "@/components/kiosk/KioskAppointment";
import KioskThankYou from "@/components/kiosk/KioskThankYou";

type KioskStep = "welcome" | "service" | "contact" | "appointment" | "thankyou";

const Kiosk = () => {
  const [currentStep, setCurrentStep] = useState<KioskStep>("welcome");
  const [selectedService, setSelectedService] = useState<string>("");
  const [contactData, setContactData] = useState<any>(null);

  const handleServiceSelect = (service: string) => {
    setSelectedService(service);
    setCurrentStep("contact");
  };

  const handleContactSubmit = (data: any) => {
    setContactData(data);
    setCurrentStep("appointment");
  };

  const handleAppointmentSubmit = () => {
    setCurrentStep("thankyou");
  };

  const resetKiosk = () => {
    setCurrentStep("welcome");
    setSelectedService("");
    setContactData(null);
  };

  const renderStep = () => {
    switch (currentStep) {
      case "welcome":
        return (
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <h1 className="text-6xl font-bold text-primary">Welcome to</h1>
              <h2 className="text-4xl font-semibold">Power3 Kitchen Bath Depot</h2>
              <p className="text-2xl text-muted-foreground max-w-2xl mx-auto">
                Your premier destination for kitchens, bathrooms, and custom cabinetry
              </p>
            </div>
            <Button 
              size="lg" 
              className="text-2xl px-12 py-8 h-auto"
              onClick={() => setCurrentStep("service")}
            >
              Get Started
            </Button>
          </div>
        );
      
      case "service":
        return <KioskServiceSelection onServiceSelect={handleServiceSelect} />;
      
      case "contact":
        return (
          <KioskContactForm 
            selectedService={selectedService}
            onSubmit={handleContactSubmit}
            onBack={() => setCurrentStep("service")}
          />
        );
      
      case "appointment":
        return (
          <KioskAppointment 
            selectedService={selectedService}
            contactData={contactData}
            onSubmit={handleAppointmentSubmit}
            onBack={() => setCurrentStep("contact")}
          />
        );
      
      case "thankyou":
        return <KioskThankYou onRestart={resetKiosk} />;
      
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-secondary/20 p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center space-x-4">
            <img 
              src="/src/assets/power3-logo.png" 
              alt="Power3 Logo" 
              className="h-16 w-auto"
            />
          </div>
          {currentStep !== "welcome" && (
            <Button 
              variant="outline" 
              size="lg"
              onClick={resetKiosk}
              className="text-lg px-6 py-3"
            >
              Start Over
            </Button>
          )}
        </div>

        {/* Main Content */}
        <div className="flex items-center justify-center min-h-[calc(100vh-200px)]">
          {renderStep()}
        </div>
      </div>
    </div>
  );
};

export default Kiosk;