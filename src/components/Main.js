import Image from "next/image";
import AosComponent from "./AosComponent";
import logo from "/public/Smartie.png";

export default async function MainComponent() {
  return (
    <AosComponent data={"zoom-out"}>
      <div className="h-screen flex flex-col sm:flex-row">
        <div className="sm:w-1/2 sm:flex sm:items-center sm:justify-center mt-40 sm:m-0">
          <AosComponent data={"fade-right"} duration="700">
            <Image src={logo} alt="Logo" width={400} height={300} />
          </AosComponent>
        </div>
        <div className="sm:w-1/2 sm:flex sm:items-center">
          <AosComponent data={"fade-right"} duration="1500">
            <h1 className="font-bold text-7xl text-center underline underline-offset-4">SMARTie</h1>
          </AosComponent>
        </div>
      </div>
    </AosComponent>
  );
}
