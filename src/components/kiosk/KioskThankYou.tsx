import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface KioskThankYouProps {
  onRestart: () => void;
}

const KioskThankYou = ({ onRestart }: KioskThankYouProps) => {
  // Auto-restart after 30 seconds of inactivity
  useEffect(() => {
    const timer = setTimeout(() => {
      onRestart();
    }, 30000);

    return () => clearTimeout(timer);
  }, [onRestart]);

  return (
    <div className="w-full max-w-2xl text-center space-y-8">
      <div className="text-8xl animate-bounce">🎉</div>
      
      <Card>
        <CardHeader>
          <CardTitle className="text-4xl text-primary">Thank You!</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <p className="text-2xl font-semibold">
              Your appointment request has been submitted successfully!
            </p>
            <p className="text-xl text-muted-foreground">
              Our team will contact you within 24 hours to confirm your appointment.
            </p>
          </div>
          
          <div className="bg-primary/10 p-6 rounded-lg space-y-3">
            <h3 className="text-lg font-semibold">What happens next?</h3>
            <ul className="text-left text-muted-foreground space-y-2">
              <li>✓ You'll receive a confirmation email shortly</li>
              <li>✓ Our design consultant will call you within 24 hours</li>
              <li>✓ We'll schedule a convenient time for your in-home consultation</li>
              <li>✓ We'll provide you with a detailed quote and timeline</li>
            </ul>
          </div>

          <div className="space-y-4">
            <p className="text-lg">
              <strong>Questions?</strong> Call us at{" "}
              <span className="text-primary font-semibold">(555) 123-4567</span>
            </p>
            
            <Button 
              size="lg"
              onClick={onRestart}
              className="text-xl px-12 py-8 h-auto"
            >
              Help Another Customer
            </Button>
            
            <p className="text-sm text-muted-foreground">
              This kiosk will automatically restart in 30 seconds
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default KioskThankYou;