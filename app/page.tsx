import Header from "./components/home/Header";
import HeroSection from "./components/home/HeroSection";
import AboutSection from "./components/home/about/AboutSection";
import SkillsSection from "./components/home/SkillsSection";
import FAQSection from "./components/home/FAQSection";
import ProjectsSection from "./components/home/ProjectsSection";
import CTASection from "./components/home/CTASection";
import Footer from "./components/home/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      < ProjectsSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </>
  );
}
