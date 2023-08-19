import Image from "next/image";
import AosComponent from "./AosComponent";
import logo from "/public/Smartie.png";

export default async function VisionComponent() {
  return (
    <AosComponent data={"zoom-in"} duration="800">
      <article className="flex flex-col sm:flex-row h-screen" id="vision">
        <div className="sm:w-1/2 flex items-center justify-center mt-44 sm:m-0">
          <Image src={logo} width={100} height={100} alt="Logo" />
          <h2 className="font-bold text-3xl sm:text-5xl">Nuestra Visión</h2>
        </div>
        <div className="sm:w-1/2 sm:flex sm:items-center sm:mx-4 mt-8 sm:m-0">
          <AosComponent data={"fade-right"} duration="1300">
            <span className="text-lg sm:text-base">
              Nuestra visión es ser líderes en la provisión de servicios
              integrales de eventos corporativos, fiestas de fin de año y
              soluciones de registro, sorteos interactivos, datos y conexión.
              Buscamos crear experiencias únicas, conectadas, eficientes,
              fáciles y seguras. Utilizamos la tecnología de vanguardia para
              ofrecer eventos inolvidables y una conectividad confiable que
              enriquezca la participación de los asistentes, garantizando una
              experiencia eficiente, fácil y segura en cada interacción.
            </span>
          </AosComponent>
        </div>
      </article>
    </AosComponent>
  );
}
