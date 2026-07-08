import { Hero } from "@/components/sections/Hero";
import { AdvisoryMarquee } from "@/components/sections/AdvisoryMarquee";
import { Mission } from "@/components/sections/Mission";
import { ClosedDoor } from "@/components/sections/ClosedDoor";
import { TracksStat } from "@/components/sections/TracksStat";
import { IfYou } from "@/components/sections/IfYou";
import { WhyHoustonBand } from "@/components/sections/WhyHoustonBand";
import { PublishedWork } from "@/components/sections/PublishedWork";
import { Together } from "@/components/sections/Together";
import { Faces } from "@/components/sections/Faces";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Kissflow } from "@/components/sections/Kissflow";
import { EOIForm } from "@/components/sections/EOIForm";
import { PoweredByLine } from "@/components/sections/PoweredByLine";

/**
 * HOME — AiEC content mapped onto the Nixtio "Board" section flow.
 * See reference-analysis/nixtio-to-aiec-mapping.md.
 */
export default function HomePage() {
  return (
    <>
      <Hero />
      <AdvisoryMarquee />
      <Mission />
      <ClosedDoor />
      <TracksStat />
      <IfYou />
      <WhyHoustonBand />
      <PublishedWork />
      <Together />
      <Faces />
      <HowItWorks />
      <Kissflow />
      <EOIForm />
      <PoweredByLine />
    </>
  );
}
