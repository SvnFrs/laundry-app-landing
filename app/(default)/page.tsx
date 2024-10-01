export const metadata = {
  title: "Home - Easy Laundry",
  description: "Page description",
};

import Hero from "@/components/hero-home";
import BusinessCategories from "@/components/business-categories";
import FeaturesPlanet from "@/components/features-planet";
import LargeTestimonial from "@/components/large-testimonial";
import Cta from "@/components/cta";

export default function Home() {
  return (
    <div className="bg-sky-100">
      <Hero />
      {/* <BusinessCategories /> */}
      <FeaturesPlanet />
      <LargeTestimonial />
      <Cta />
    </div>
  );
}
