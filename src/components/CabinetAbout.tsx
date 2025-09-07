const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-secondary">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
              The Cabinet Store + United Cabinet Design
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              We are very selective about what cabinet brands we offer our customers. A quality cabinet is 
              the foundation we build your entire kitchen around. Our team has partnered with extraordinary 
              trade partners to offer you the highest quality products available.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Nearly every product sold from The Cabinet Store + United Cabinet Design is Made in the USA. 
              You'll find well-known, American Made brands such as Showplace Cabinetry, our core cabinet line, 
              and Cambria Natural Quartz Surfaces®, our best selling countertop line.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-4">
                <div className="text-3xl font-bold text-primary mb-2">100%</div>
                <div className="text-sm text-muted-foreground">Made in USA Focus</div>
              </div>
              <div className="text-center p-4">
                <div className="text-3xl font-bold text-primary mb-2">25+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div className="text-center p-4">
                <div className="text-3xl font-bold text-primary mb-2">5★</div>
                <div className="text-sm text-muted-foreground">Customer Rating</div>
              </div>
              <div className="text-center p-4">
                <div className="text-3xl font-bold text-primary mb-2">1000+</div>
                <div className="text-sm text-muted-foreground">Kitchens Completed</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-gradient-hero rounded-2xl p-8 shadow-elegant">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 mb-6">
                <h3 className="text-2xl font-semibold text-white mb-4">Our Promise</h3>
                <p className="text-white/90 leading-relaxed">
                  Quality cabinets are the foundation we build your entire kitchen around. 
                  We take pride in offering only the finest American-made products with 
                  factory-direct pricing.
                </p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <h3 className="text-2xl font-semibold text-white mb-4">Our Partners</h3>
                <ul className="text-white/90 space-y-2">
                  <li>• Cornerstone Countertops</li>
                  <li>• Cabinet Wholesale Express</li>
                  <li>• Kitchen Bath Depot</li>
                  <li>• Power3 Kitchen Bath Installs</li>
                  <li>• Doormark Cabinet Doors</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        {/* Awards and Recognition */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-8 text-primary">Awards & Recognition</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-card/50 backdrop-blur-sm rounded-lg p-6 shadow-soft">
              <div className="text-4xl mb-4">🏆</div>
              <h4 className="font-semibold text-foreground mb-2">Houzz Partner</h4>
              <p className="text-muted-foreground text-sm">Recognized for exceptional service and quality</p>
            </div>
            <div className="bg-card/50 backdrop-blur-sm rounded-lg p-6 shadow-soft">
              <div className="text-4xl mb-4">⭐</div>
              <h4 className="font-semibold text-foreground mb-2">5-Star Google Reviews</h4>
              <p className="text-muted-foreground text-sm">Consistently rated by satisfied customers</p>
            </div>
            <div className="bg-card/50 backdrop-blur-sm rounded-lg p-6 shadow-soft">
              <div className="text-4xl mb-4">🥇</div>
              <h4 className="font-semibold text-foreground mb-2">Cambria Premier Partner</h4>
              <p className="text-muted-foreground text-sm">Elite status with leading countertop manufacturer</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;