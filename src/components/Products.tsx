import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import cabinetsShowcase from "@/assets/cabinets-showcase.jpg";
import countertopsShowcase from "@/assets/countertops-showcase.jpg";
import kitchen3dDesign from "@/assets/kitchen-3d-design.jpg";

const Products = () => {
  const products = [
    {
      title: "Custom Cabinets",
      description: "Premium kitchen and bathroom cabinets crafted with precision. Featuring United Cabinets - made right here in the Midwest.",
      image: cabinetsShowcase,
      features: ["United Cabinets", "Custom Designs", "Soft-Close Hardware", "Multiple Wood Species"]
    },
    {
      title: "Countertops", 
      description: "Beautiful Cambria Natural Quartz Surfaces® and other premium countertop materials for lasting beauty and durability.",
      image: countertopsShowcase,
      features: ["Cambria Quartz", "Granite Options", "Marble Selections", "Professional Installation"]
    },
    {
      title: "Complete Kitchen Design",
      description: "Full-service kitchen design and installation with expert planning, 3D visualization, and professional project management.",
      image: kitchen3dDesign,
      features: ["3D Design", "Project Management", "Expert Installation", "Warranty Included"]
    }
  ];

  return (
    <section id="products" className="py-20 bg-gradient-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary">
            Our Products
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Leading brands and unmatched expertise. Design your dream space with confidence using the highest quality products available.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <Card key={index} className="shadow-soft hover:shadow-elegant transition-all duration-300 border-0 bg-card/50 backdrop-blur-sm overflow-hidden">
              <div className="aspect-video overflow-hidden">
                <img 
                  src={product.image} 
                  alt={`${product.title} - Premium quality ${product.title.toLowerCase()} for your kitchen renovation`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-2xl font-semibold text-foreground">
                  {product.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {product.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  {product.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-2 h-2 bg-warm-accent rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button variant="default" className="w-full">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="bg-card/50 backdrop-blur-sm rounded-xl p-8 shadow-soft max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-primary">Why Choose Our Products?</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              <div>
                <h4 className="font-semibold text-foreground mb-2">🇺🇸 Made in USA</h4>
                <p className="text-muted-foreground text-sm">Nearly every product sold is Made in the USA, supporting American craftsmanship and quality.</p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">🏆 Trusted Brands</h4>
                <p className="text-muted-foreground text-sm">We partner with extraordinary trade partners like United Cabinets and Cambria Natural Quartz.</p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">💰 Factory Direct Pricing</h4>
                <p className="text-muted-foreground text-sm">Eliminate middleman markup with our direct relationships with manufacturers.</p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">🔧 Expert Installation</h4>
                <p className="text-muted-foreground text-sm">Professional installation team ensures perfect results every time.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;