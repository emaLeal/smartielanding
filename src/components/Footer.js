import React from "react";
import ButtonComponent from "./ButtonComponent";

const Footer = () => {
  return (
    <footer className="w-screen bg-emerald-400 p-4 flex justify-between">
      <div className="hidden sm:block w-1/2">
        Ex tempor minim sint quis nostrud adipisicing magna reprehenderit Lorem
        et aliquip enim. Veniam qui nisi mollit eu enim commodo et tempor amet
        ullamco et labore cillum cupidatat. Dolor cupidatat laborum ex est velit
        cupidatat. Duis incididunt do qui tempor exercitation dolore qui elit.
        Tempor in fugiat deserunt ut ut qui elit velit qui laboris ea eu labore.
        Aliquip cillum aliqua aliqua ea sint laboris aliquip proident ex sunt.
      </div>
      <div className="sm:w-52 w-full flex justify-center sm:justify-around items-center">
        <ButtonComponent
          icon="pi pi-facebook"
          rounded
          tooltip="Facebook"
          className="mx-2 sm:m-0"
          tooltipOptions={{ position: "left" }}
        />
        <ButtonComponent
          icon="pi pi-twitter"
          rounded
          raised
          severity="info"
          className="mx-2 sm:m-0"
          tooltipOptions={{ position: "left" }}
          tooltip="Twitter"
        />
        <ButtonComponent
          icon="pi pi-whatsapp"
          rounded
          raised
          tooltipOptions={{ position: "left" }}
          tooltip="Whatsapp"
          severity="success"
          className="mx-2 sm:m-0"
        />
        <ButtonComponent
          icon="pi pi-instagram"
          rounded
          raised
          tooltipOptions={{ position: "left" }}
          tooltip="Instagram"
          severity="help"
          className="mx-2 sm:m-0"
        />
      </div>
    </footer>
  );
};

export default Footer;
