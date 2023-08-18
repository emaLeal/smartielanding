import MainComponent from "@/components/Main";
import MenuComponent from "@/components/MenuComponent";
import MisionComponent from "@/components/Mision";
import PreguntasRespuestasComponent from "@/components/PreguntasRespuestas";
import VisionComponent from "@/components/Vision";

export default async function HomePage() {
  return (
    <main>
      <MenuComponent />
      <MainComponent />
      <MisionComponent />
      <VisionComponent />
      <PreguntasRespuestasComponent />
    </main>
  );
}
