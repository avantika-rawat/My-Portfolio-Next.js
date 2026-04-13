// app/page.tsx
import Hero from "../components/Hero"
import VennDiagram from "../components/VennDiagram"
import Footer from "../components/Footer"
import  Certificates  from "../components/Certificates";

export default function Home() {
  return (
    <main>
      <Hero />
      <VennDiagram/>
      <Certificates/>
      <Footer/>
    </main>
  );
}