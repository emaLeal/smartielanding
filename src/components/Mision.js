import Image from "next/image";
import AosComponent from "./AosComponent";
import logo from "/public/Smartie.png";

export default async function MisionComponent() {
  return (
    <AosComponent data={"fade-up"} duration="800">
      <article className="flex flex-col sm:flex-row h-screen" id="mision">
        <div className="sm:w-1/2 flex items-center justify-center mt-40 sm:m-0">
          <Image src={logo} width={100} height={100} alt="Logo" />
          <h2 className="font-bold text-3xl sm:text-5xl">Nuestra Misión</h2>
        </div>
        <div className="sm:w-1/2 sm:flex sm:items-center sm:mx-4 mt-8 sm:m-0">
          <AosComponent data={"zoom-in"} duration="1300">
            <span className="text-lg sm:text-base">
              Nuestra misión es brindar servicios completos y personalizados que
              abarquen eventos corporativos, fiestas de fin de año, registros
              eficientes, sorteos interactivos y soluciones de datos y conexión.
              Nos comprometemos a proporcionar experiencias excepcionales,
              impulsadas por la innovación y la excelencia en la entrega de
              servicios, con un enfoque en la eficiencia, la facilidad y la
              seguridad. A través de nuestra dedicación a la calidad, la
              atención al detalle y la tecnología avanzada, nos esforzamos por
              crear conexiones significativas entre las personas y garantizar
              una experiencia fluida, fácil y segura en cada paso del proceso.
            </span>
          </AosComponent>
        </div>
      </article>
    </AosComponent>
  );
}
