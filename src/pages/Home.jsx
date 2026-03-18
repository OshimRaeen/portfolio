import { StarBackground } from "../components/StarBackground";

import { NavBar } from "../components/NavBar";
import { HeroSection } from "../components/HeroSection";
import { AboutSection } from "../components/AboutSection";
import { SkillsSection } from "../components/SkillsSection";
import { ProjectsSection } from "../components/ProjectsSection";
import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/Footer";

export const Home = () => {
  return (
    <div className="relative min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-purple-500/30 selection:text-purple-200 scroll-smooth">
      
      {/* Background Effects - Fixed at the very back */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <StarBackground >
      </div>

      

      {/* Navbar */}
      <NavBar />

      {/* Main Content - Elevated above the stars */}
      <main className="relative z-10 flex flex-col gap-16 md:gap-32 pt-24 pb-20 animate-[fadeIn_1s_ease-in-out]">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <div className="relative z-10">
        <Footer />
      </div>

    </div>
  );
};