import dynamic from "next/dynamic";
import Hero from "@/components/sections/Hero";

const Expertise = dynamic(() => import("@/components/sections/Expertise"));
const Clients   = dynamic(() => import("@/components/sections/Clients"));
const Projects  = dynamic(() => import("@/components/sections/Projects"));
const FAQ       = dynamic(() => import("@/components/sections/FAQ"));

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
