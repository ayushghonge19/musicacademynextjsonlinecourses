import { FeaturedCourses } from "@/components/FeaturedCourses";
import { HeroSection } from "@/components/HeroSection";
import { TestimonialCards } from "@/components/TestimonialCards";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { h1 } from "framer-motion/client";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturedCourses />
      <WhyChooseUs />
      <TestimonialCards />
    </>
  );
}
