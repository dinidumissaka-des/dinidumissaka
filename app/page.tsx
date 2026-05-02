import Hero from "@/components/sections/Hero";
import Clients from "@/components/sections/Clients";
import About from "@/components/sections/About";
import Expertise from "@/components/sections/Expertise";
import Toolkit from "@/components/sections/Toolkit";
import Projects from "@/components/sections/Projects";
import Dribbble from "@/components/sections/Dribbble";
import Testimonials from "@/components/sections/Testimonials";
import FAQ from "@/components/sections/FAQ";

export default function Home() {
  return (
    <>
      <Hero />
      <Clients />
      <About />
      <Expertise />
      <Toolkit />
      <Projects />
      <Dribbble />
      <Testimonials />
      <FAQ />
    </>
  );
}
