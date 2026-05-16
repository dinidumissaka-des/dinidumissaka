import Hero from "@/components/sections/Hero";
import Clients from "@/components/sections/Clients";
import Expertise from "@/components/sections/Expertise";
import Projects from "@/components/sections/Projects";
import FAQ from "@/components/sections/FAQ";

export default function Home() {
  return (
    <>
      <Hero />
      <Expertise />
      <Clients />
      <Projects />
      <FAQ />
    </>
  );
}
