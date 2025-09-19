import { ThemeToggle } from "../components/ThemeToggle";
import { StarBackground } from "../components/StarBackground";
import { Navbar } from "../components/Navbar";
export const Home = () => {
  return (
    <div>
      <ThemeToggle />
      <StarBackground />
      <Navbar />
    </div>
  );
};
