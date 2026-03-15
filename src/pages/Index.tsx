import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Activities from "@/components/Activities";
import Benefits from "@/components/Benefits";
import Sponsors from "@/components/Sponsors";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Activities />
      <Benefits />
      <Sponsors />
    </div>
  );
};

export default Index;
