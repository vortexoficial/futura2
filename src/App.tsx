import { CreativeGallery } from "@/src/components/CreativeGallery";
import { Expectations } from "@/src/components/Expectations";
import { FAQ } from "@/src/components/FAQ";
import { FinalCTA } from "@/src/components/FinalCTA";
import { Footer } from "@/src/components/Footer";
import { Hero } from "@/src/components/Hero";
import { MethodIntro } from "@/src/components/MethodIntro";
import { Metrics } from "@/src/components/Metrics";
import { MouseGlow } from "@/src/components/premium";
import { Navbar } from "@/src/components/Navbar";
import { Portfolio } from "@/src/components/Portfolio";
import { PracticalSteps } from "@/src/components/PracticalSteps";
import { ProblemSolution } from "@/src/components/ProblemSolution";
import { ProcessTimeline } from "@/src/components/ProcessTimeline";
import { Services } from "@/src/components/Services";
import { TeamSection } from "@/src/components/TeamSection";

export function App() {
  return (
    <div className="dark min-h-screen overflow-x-hidden bg-[#05070D] text-foreground">
      <MouseGlow />
      <Navbar />
      <main>
        <Hero />
        <Metrics />
        <MethodIntro />
        <ProblemSolution />
        <TeamSection />
        <Services />
        <ProcessTimeline />
        <Portfolio />
        <CreativeGallery />
        <Expectations />
        <PracticalSteps />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
