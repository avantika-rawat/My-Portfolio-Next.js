// app/page.tsx
import Hero from "../components/Hero"
import VennDiagram from "../components/VennDiagram"
import Footer from "../components/Footer"
import  Certificates  from "../components/Certificates";
import Projects from "../components/Projects";
import Experience from "../components/Experience";

export default function Home() {
  return (
    <main>
    
      <Hero />
      <VennDiagram/>
      <Projects/>
      <Experience/>
      <Certificates/>
      <Footer/>
    </main>
  );
}