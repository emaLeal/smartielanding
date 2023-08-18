import Image from "next/image";
import AosComponent from "./AosComponent";
import logo from "/public/Smartie.png";

export default async function VisionComponent() {
  return (
    <AosComponent data={"zoom-in"}>
      <div className="flex h-screen" id="vision">
        <div className="w-1/2 flex items-center justify-center">
          <Image src={logo} width={100} height={100} alt="Logo" />
          <h1 className="font-bold text-5xl">Nuestra Visión</h1>
        </div>
        <div className="w-1/2 flex items-center mx-4">
          <AosComponent data={"fade-right"} duration="1000">
            <span>
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
