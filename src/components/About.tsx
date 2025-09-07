const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
              About Our Company
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              With over a decade of experience in business transformation, we've helped hundreds of companies 
              achieve their goals through innovative solutions and strategic partnerships.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Our team of experts combines deep industry knowledge with cutting-edge technology to deliver 
              results that matter. We believe in building long-term relationships based on trust, 
              transparency, and measurable outcomes.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-4">
                <div className="text-3xl font-bold text-primary mb-2">10+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div className="text-center p-4">
                <div className="text-3xl font-bold text-primary mb-2">50+</div>
                <div className="text-sm text-muted-foreground">Team Members</div>
              </div>
              <div className="text-center p-4">
                <div className="text-3xl font-bold text-primary mb-2">15</div>
                <div className="text-sm text-muted-foreground">Countries Served</div>
              </div>
              <div className="text-center p-4">
                <div className="text-3xl font-bold text-primary mb-2">98%</div>
                <div className="text-sm text-muted-foreground">Client Satisfaction</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-gradient-hero rounded-2xl p-8 shadow-elegant">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <h3 className="text-2xl font-semibold text-white mb-4">Our Mission</h3>
                <p className="text-white/90 leading-relaxed">
                  To empower businesses with innovative solutions that drive sustainable growth, 
                  enhance operational efficiency, and create lasting value for all stakeholders.
                </p>
              </div>
              
              <div className="mt-6 bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <h3 className="text-2xl font-semibold text-white mb-4">Our Vision</h3>
                <p className="text-white/90 leading-relaxed">
                  To be the leading partner for businesses seeking transformation, recognized for 
                  our expertise, integrity, and commitment to client success.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;