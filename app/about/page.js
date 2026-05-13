import AboutFeatureSection from "@/component/AboutFeatureSection";
import AboutFounderSection from "@/component/AboutFounderSection";
import AboutHero from "@/component/AboutHero";
import ApproachSection from "@/component/ApproachSection";
import FaqSection from "@/component/FaqSection";
import FollowCtaSection from "@/component/FollowCtaSection";
import JourneyTimeline from "@/component/JourneyTimeline";
import CreativeStorySection from "@/component/StorySection";

export default function Page(){
    return(
        <>
        <AboutHero />
        <AboutFeatureSection />
        <JourneyTimeline />
        <ApproachSection />
        <AboutFounderSection />
        <CreativeStorySection />
        <FollowCtaSection />
        <FaqSection/>
        </>
    )
}