import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Services = () => {
  const services = [
    {
      title: "Kitchen Design & Planning",
      description: "Complete kitchen design service with 3D visualization, space planning, and material selection guidance.",
      features: ["3D Design Renderings", "Space Optimization", "Material Selection", "Timeline Planning"]
    },
    {
      title: "Custom Cabinet Installation",
      description: "Professional cabinet installation with precision measurements, proper mounting, and hardware adjustment.",
      features: ["Precision Installation", "Hardware Setup", "Soft-Close Adjustment", "Quality Inspection"]
    },
    {
      title: "Countertop Fabrication & Install",
      description: "Expert countertop templating, fabrication, and installation for quartz, granite, and marble surfaces.",
      features: ["Digital Templating", "Custom Fabrication", "Seamless Installation", "Edge Finishing"]
    },
    {
      title: "Project Management",
      description: "Full project coordination from design to completion, ensuring timeline adherence and quality control.",
      features: ["Timeline Coordination", "Quality Control", "Progress Updates", "Final Walkthrough"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary">
            Our Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive kitchen renovation services from initial design to final installation. 
            We handle every detail of your project with professional expertise.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <Card key={index} className="shadow-soft hover:shadow-elegant transition-all duration-300 border-0 bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl font-semibold text-foreground">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-2 h-2 bg-warm-accent rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button variant="default" className="w-full">
                  Get Quote
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Process Timeline */}
        <div className="bg-gradient-hero rounded-2xl p-8 shadow-elegant text-white">
          <h3 className="text-3xl font-bold text-center mb-12">Our Process</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">1</div>
              <h4 className="text-xl font-semibold mb-2">Consultation</h4>
              <p className="text-white/80 text-sm">Initial meeting to discuss your vision, budget, and timeline</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">2</div>
              <h4 className="text-xl font-semibold mb-2">Design</h4>
              <p className="text-white/80 text-sm">3D design creation and material selection with your input</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">3</div>
              <h4 className="text-xl font-semibold mb-2">Fabrication</h4>
              <p className="text-white/80 text-sm">Custom fabrication of cabinets and countertops to your specs</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">4</div>
              <h4 className="text-xl font-semibold mb-2">Installation</h4>
              <p className="text-white/80 text-sm">Professional installation and final quality inspection</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;