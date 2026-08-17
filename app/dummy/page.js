import AboutAjay from "@/component/Dummy/AboutAjay";
import AgitationSection from "@/component/Dummy/AgitationSection";
import HeroSection from "@/component/Dummy/DummyHero";
import FeaturedIn from "@/component/Dummy/FeaturedIn";
import SignatureFramework from "@/component/Dummy/SignatureFramework";
import SuccessStories from "@/component/Dummy/SuccessStories";
import SystemStats from "@/component/Dummy/SystemStats";
import ThreePillarSystem from "@/component/Dummy/ThreePillarSystem";
import TrustBar from "@/component/Dummy/TrustBar";
import WellnessCoachingOffer from "@/component/Dummy/WellnessCoachingOffer";
import WellnessCta from "@/component/Dummy/WellnessCta";
import WellnessOpportunitySection from "@/component/Dummy/WellnessOpportunitySection";
import FaqSection from "@/component/FaqSection";

export default function Page() {
    return(
        <>
        <HeroSection />
        <TrustBar />
        <SystemStats />
        <AboutAjay />
        <AgitationSection />
        <ThreePillarSystem />
        <WellnessOpportunitySection />
        <WellnessCoachingOffer />
        <SignatureFramework />
        <SuccessStories />
        <FaqSection />
        <WellnessCta />
        {/* <FeaturedIn /> */}
        </>
    )
}