import AboutSection from "@/component/AboutSection";
import BlogSection from "@/component/BlogSection";
import ContactSection from "@/component/ContactSection";
import CorporateChallenges from "@/component/CorporateChallenges";
import FaqSection from "@/component/FaqSection";
import FollowCtaSection from "@/component/FollowCtaSection";
import Hero from "@/component/Hero";
import ProcessSection from "@/component/ProcessSection";
import ServicesCarousel from "@/component/ServicesCarousel";
import StatsSection from "@/component/StatsSection";
import StrugglesSection from "@/component/StrugglesSection";
import TestimonialCarousel from "@/component/TestimonialCarousel";
import VideoJourneySection from "@/component/VideoJourneySection";
import Image from "next/image";

export default function Home() {
  return (
    <div className=" font-sans dark:bg-black">
      <Hero />
      <StatsSection />
      <AboutSection />
      <StrugglesSection />
      <ServicesCarousel />
      <CorporateChallenges />
      <ProcessSection />
      <VideoJourneySection />
      <BlogSection />
      <TestimonialCarousel />
      <FaqSection />
      <FollowCtaSection />
      <ContactSection />
      
    </div>
  );
}
