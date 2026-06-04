import Hero from "../components/Hero";
import ServicesSection from "../components/ServicesSection";
import TrainingSection from "../components/TrainingSection";
import WhyChooseUs from "../components/WhyChooseUs";
import CTA from "../components/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesSection />
      <TrainingSection />
      <WhyChooseUs />
      <CTA />
    </>
  );
}