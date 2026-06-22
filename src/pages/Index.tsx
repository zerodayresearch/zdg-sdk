import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import VideoIntro from "@/components/VideoIntro";
import AboutSection from "@/components/AboutSection";
import ClientsSection from "@/components/ClientsSection";
import ServicesSection from "@/components/ServicesSection";
import TeamSection from "@/components/TeamSection";
import BlogSection from "@/components/BlogSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative">
      {/* Surveillance GIF background — full screen */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <img
          src="/bg-surveillance.gif"
          alt=""
          className="w-full h-full object-cover opacity-[0.06]"
        />
      </div>
      <div className="relative z-10">
      <Navbar />
      <HeroSection />
      <VideoIntro />
      <AboutSection />
      <ClientsSection />
      <ServicesSection />
      <TeamSection />
      <BlogSection />
      <Footer />
      </div>
    </div>
  );
};

export default Index;
