import Image from "next/image";
import AosComponent from "./AosComponent";
import logo from "/public/Smartie.png";

export default async function MainComponent() {
  return (
    <AosComponent data={"zoom-out"}>
      <div className="h-screen flex">
        <div className="w-1/2 flex sm:items-center sm:justify-center">
          <AosComponent data={"fade-right"} duration="700">
            <Image src={logo} alt="Logo" width={400} height={300} />
          </AosComponent>
        </div>
        <div className="w-1/2 flex items-center">
          <AosComponent data={"fade-right"} duration="1500">
            <h1 className="font-bold text-7xl underline underline-offset-4">SMARTie</h1>
          </AosComponent>
        </div>
      </div>
    </AosComponent>
  );
}