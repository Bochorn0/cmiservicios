import { About } from "@/components/About";
import { Commitment } from "@/components/Commitment";
import { Contact } from "@/components/Contact";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { WaterTreatment } from "@/components/WaterTreatment";

export default function Home() {
  return (
    <main className="flex-1">
      <Hero />
      <About />
      <Services />
      <WaterTreatment />
      <Commitment />
      <Contact />
    </main>
  );
}
