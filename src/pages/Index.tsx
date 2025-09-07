import Header from "@/components/Header";
import Hero from "@/components/CabinetHero";
import About from "@/components/CabinetAbout";
import Products from "@/components/Products";
import Services from "@/components/CabinetServices";
import Contact from "@/components/CabinetContact";
import Footer from "@/components/CabinetFooter";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Products />
        <Services />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
