import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary">
            Get Your Free Quote
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to transform your kitchen? Contact us today for a free consultation and quote. 
            Let's bring your dream kitchen to life!
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div>
            <Card className="shadow-soft border-0 bg-card/50 backdrop-blur-sm mb-8">
              <CardHeader>
                <CardTitle className="text-2xl font-semibold">Visit Our Showroom</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-warm-accent rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-warm-accent-foreground text-sm">📍</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Showroom Address</h4>
                    <p className="text-muted-foreground">
                      706C Industrial Blvd<br />
                      Dublin, GA 31021
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-warm-accent rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-warm-accent-foreground text-sm">📞</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Phone</h4>
                    <p className="text-muted-foreground">(678) 600-9528</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-warm-accent rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-warm-accent-foreground text-sm">✉️</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Email</h4>
                    <p className="text-muted-foreground">info@thecabinetstore.org</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-warm-accent rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-warm-accent-foreground text-sm">🕒</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Showroom Hours</h4>
                    <p className="text-muted-foreground">
                      Monday - Friday: 8:00 AM - 6:00 PM<br />
                      Saturday: 9:00 AM - 4:00 PM<br />
                      Sunday: By Appointment
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            {/* Special Offer */}
            <Card className="shadow-soft border-0 bg-gradient-accent text-warm-accent-foreground">
              <CardContent className="p-6 text-center">
                <h3 className="text-2xl font-bold mb-2">Limited Time Offer!</h3>
                <p className="text-lg mb-4">Get 10% off when you order $2500 or more</p>
                <p className="text-sm opacity-90">Applies to cabinets, countertops, and flooring. Valid this month only.</p>
              </CardContent>
            </Card>
          </div>
          
          <div>
            <Card className="shadow-soft border-0 bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl font-semibold">Request Your Free Quote</CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        First Name *
                      </label>
                      <input 
                        type="text" 
                        required
                        className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:ring-2 focus:ring-ring focus:border-transparent transition-colors"
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Last Name *
                      </label>
                      <input 
                        type="text" 
                        required
                        className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:ring-2 focus:ring-ring focus:border-transparent transition-colors"
                        placeholder="Smith"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Email *
                    </label>
                    <input 
                      type="email" 
                      required
                      className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:ring-2 focus:ring-ring focus:border-transparent transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Phone *
                    </label>
                    <input 
                      type="tel" 
                      required
                      className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:ring-2 focus:ring-ring focus:border-transparent transition-colors"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Project Type
                    </label>
                    <select className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:ring-2 focus:ring-ring focus:border-transparent transition-colors">
                      <option value="">Select project type</option>
                      <option value="kitchen-remodel">Complete Kitchen Remodel</option>
                      <option value="cabinets-only">Cabinets Only</option>
                      <option value="countertops-only">Countertops Only</option>
                      <option value="bathroom">Bathroom Renovation</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Project Details
                    </label>
                    <textarea 
                      rows={4}
                      className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:ring-2 focus:ring-ring focus:border-transparent transition-colors resize-none"
                      placeholder="Tell us about your project - size, style preferences, timeline, etc."
                    ></textarea>
                  </div>
                  
                  <Button variant="hero" className="w-full text-lg py-4">
                    Get My Free Quote
                  </Button>
                  
                  <p className="text-xs text-muted-foreground text-center">
                    By submitting this form, you agree to be contacted about your project. 
                    We respect your privacy and will never share your information.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;