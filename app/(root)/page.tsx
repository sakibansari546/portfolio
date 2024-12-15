import { Features } from "@/components/F";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import { Skills } from "@/components/Skills";

export default function Home() {
  return (
    <>
      <Hero />
      <Skills />
      <Projects />
      <Features />
    </>
  );
}
