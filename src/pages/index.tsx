import { DidYouKnowSection } from "@/components/PagesComponents/Home/DidYouKnowSection";
import { GetReadyToM3Section } from "@/components/PagesComponents/Home/GetReadyToM3Section";
import { MainHero } from "@/components/PagesComponents/Home/MainHero";
import { ScienceBackedIngredientsSection } from "@/components/PagesComponents/Home/ScienceBackedIngredientsSection";

export default function Home() {
  return (
    <main>
      {/* Main Hero */}
      <MainHero />

      {/* Science backed ingredients */}
      <ScienceBackedIngredientsSection />

      {/* Did you know? */}
      <DidYouKnowSection />

      {/* Get ready to M3? */}
      <GetReadyToM3Section />
    </main>
  );
}
