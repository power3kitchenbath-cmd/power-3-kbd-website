import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/useAuth";
import { useNavigate } from "react-router-dom";
import power3Logo from "@/assets/power3-logo.png";

const Header = () => {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();

  const handleAuthClick = () => {
    if (user) {
      signOut();
    } else {
      navigate("/auth");
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">
          <div className="flex items-center">
            <img 
              src={power3Logo} 
              alt="Power3 Kitchen Bath Depot - Professional Kitchen and Bath Renovation Services" 
              className="h-8 w-auto"
            />
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
              About
            </a>
            <a href="#products" className="text-muted-foreground hover:text-foreground transition-colors">
              Products
            </a>
            <a href="#services" className="text-muted-foreground hover:text-foreground transition-colors">
              Services
            </a>
            <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">
              Contact
            </a>
          </div>
          
          <div className="flex items-center space-x-4">
            <Button 
              variant="ghost" 
              className="hidden sm:inline-flex"
              onClick={handleAuthClick}
            >
              {user ? "Sign Out" : "Sign In"}
            </Button>
            {user ? (
              <Button 
                variant="outline"
                onClick={() => navigate("/kiosk")}
              >
                Kiosk Mode
              </Button>
            ) : (
              <Button 
                variant="hero"
                onClick={() => navigate("/auth")}
              >
                Get Started
              </Button>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;