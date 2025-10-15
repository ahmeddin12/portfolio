import { ThemeToggle } from "../components/ThemeToggle";
import { StarBackground } from "../components/StarBackground";
import { Navbar } from "../components/Navbar";
import { HeroSection } from "../components/HeroSection";
import { AboutSection } from "../components/AboutSection.jsx";
export const Home = () => {
  return (
    <div>
      <ThemeToggle />
      <StarBackground />
      <Navbar />

      <main>
        <HeroSection />
        <AboutSection />
      </main>
    </div>
  );
};
