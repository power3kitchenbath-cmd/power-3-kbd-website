import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface KioskServiceSelectionProps {
  onServiceSelect: (service: string) => void;
}

const services = [
  {
    id: "kitchen-cabinets",
    title: "Kitchen Cabinets",
    description: "Custom kitchen cabinetry and design consultation",
    icon: "🏠",
  },
  {
    id: "bathroom-vanities",
    title: "Bathroom Vanities",
    description: "Beautiful bathroom vanities and storage solutions",
    icon: "🛁",
  },
  {
    id: "countertops",
    title: "Countertops",
    description: "Quartz, granite, and custom countertop installation",
    icon: "🪨",
  },
  {
    id: "flooring",
    title: "Flooring",
    description: "LVP, tile, and premium flooring options",
    icon: "🏗️",
  },
  {
    id: "design-consultation",
    title: "Design Consultation",
    description: "Professional design services and 3D visualization",
    icon: "📐",
  },
  {
    id: "full-remodel",
    title: "Full Remodel",
    description: "Complete kitchen and bathroom renovation",
    icon: "🔨",
  },
];

const KioskServiceSelection = ({ onServiceSelect }: KioskServiceSelectionProps) => {
  return (
    <div className="w-full max-w-6xl space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold">What service are you interested in?</h1>
        <p className="text-xl text-muted-foreground">
          Select the service you'd like to learn more about
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <Card 
            key={service.id}
            className="cursor-pointer hover:shadow-lg transition-all duration-200 hover:scale-105"
            onClick={() => onServiceSelect(service.id)}
          >
            <CardHeader className="text-center pb-4">
              <div className="text-6xl mb-4">{service.icon}</div>
              <CardTitle className="text-2xl">{service.title}</CardTitle>
              <CardDescription className="text-lg">
                {service.description}
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-0">
              <Button 
                className="w-full text-lg py-6"
                size="lg"
              >
                Select This Service
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default KioskServiceSelection;