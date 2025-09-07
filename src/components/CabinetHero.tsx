import { Button } from "@/components/ui/button";
import kitchenHero from "@/assets/kitchen-hero.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={kitchenHero} 
          alt="Beautiful modern kitchen with custom cabinets and marble countertops showcasing our premium cabinet and countertop installation services"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero opacity-85"></div>
      </div>
      
      {/* Promotional Banner */}
      <div className="absolute top-0 left-0 right-0 bg-warm-accent text-warm-accent-foreground py-3 z-20">
        <div className="container mx-auto px-6 text-center">
          <p className="text-sm font-medium">
            ✨ Get 10% off Cabinets, Countertops, & Flooring this month when you order $2500 or more ✨
          </p>
        </div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center text-white mt-12">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Buy Factory Direct
          <span className="block text-4xl md:text-5xl mt-4 text-white/90">
            Premium Kitchen Solutions
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-white/90 leading-relaxed">
          Transform your kitchen with custom cabinets, stunning countertops, and expert installation. 
          Made in USA quality at factory-direct prices.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <Button variant="hero" size="lg" className="text-lg px-8 py-4">
            Get Free Quote
          </Button>
          <Button variant="outline" size="lg" className="text-lg px-8 py-4 border-white/30 text-white hover:bg-white/10">
            View Gallery
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <h3 className="text-2xl font-semibold mb-2">Made in USA</h3>
            <p className="text-white/80">Premium American craftsmanship</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <h3 className="text-2xl font-semibold mb-2">Factory Direct</h3>
            <p className="text-white/80">No middleman markup</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <h3 className="text-2xl font-semibold mb-2">Expert Install</h3>
            <p className="text-white/80">Professional installation team</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;