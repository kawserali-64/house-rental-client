import FeaturedHouses from "@/components/home/FeaturedHouses";
import Hero from "@/components/home/Hero";
import Testimonials from "@/components/home/Testimonials";
import WhyChooseUs from "@/components/home/WhyChooseUs";

export default function Home() {
  return (
    <main>
      <Hero />
      <FeaturedHouses />
      <WhyChooseUs />
      <Testimonials />
    </main>
  );
}