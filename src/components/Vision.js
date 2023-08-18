import Image from "next/image";
import AosComponent from "./AosComponent";
import logo from "/public/Smartie.png";

export default async function VisionComponent() {
  return (
    <AosComponent data={"zoom-in"} duration="800">
      <div className="flex flex-col sm:flex-row h-screen" id="vision">
        <div className="sm:w-1/2 flex items-center justify-center mt-44 sm:m-0">
          <Image src={logo} width={100} height={100} alt="Logo" />
          <h1 className="font-bold text-3xl sm:text-5xl">Nuestra Visión</h1>
        </div>
        <div className="sm:w-1/2 sm:flex sm:items-center sm:mx-4 mt-8 sm:m-0">
          <AosComponent data={"fade-right"} duration="1300">
            <span className="text-lg sm:text-base">
              Velit mollit minim sunt dolore ad esse est non esse mollit eu non
              non. Enim sit do pariatur irure id ea labore proident magna qui
              deserunt amet anim. Dolore eiusmod veniam ex aliquip veniam
              incididunt eu labore laborum adipisicing dolore fugiat elit.
              Consectetur non occaecat do nisi non elit labore reprehenderit qui
              officia cillum. Sunt nulla mollit ullamco enim qui do consectetur
              proident sint veniam. Velit cillum non elit non tempor deserunt
              officia nostrud aute labore ex Lorem occaecat.
            </span>
          </AosComponent>
        </div>
      </div>
    </AosComponent>
  );
}
