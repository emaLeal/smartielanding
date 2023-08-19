import React from "react";
import ButtonComponent from "./ButtonComponent";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-screen bg-gradient-to-r from-indigo-500 p-4 flex justify-between">
      <div className="hidden sm:block sm:w-1/2">
        <h3>
          Pagina de Administrador
          <Link
            href="https://admin.smartie.com.co"
            target="_blank"
            className="ml-4 font-bold underline text-blue-300 hover:scale-110 transition-transform"
          >
            Click Aqui
          </Link>
        </h3>
        <h3>
          Pagina de Eventos{" "}
          <Link
            href="https://eventos.smartie.com.co"
            target="_blank"
            className="ml-16 font-bold underline text-blue-300 hover:scale-110 transition-transform"
          >
            Click Aqui
          </Link>
        </h3>
      </div>
      <div className="w-full sm:w-2 flex justify-center sm:justify-around items-center">
        <Link href="https://facebook.com/" target="_blank">
          <ButtonComponent
            icon="pi pi-facebook"
            rounded
            raised
            tooltip="Facebook"
            className="mx-2 sm:m-0 hover:scale-110 transition-transform"
            tooltipOptions={{ position: "left" }}
          />
        </Link>
        <Link href="https://twitter.com/" target="_blank">
          <ButtonComponent
            icon="pi pi-twitter"
            rounded
            raised
            severity="info"
            className="mx-2 sm:m-0 hover:scale-110 transition-transform"
            tooltipOptions={{ position: "left" }}
            tooltip="Twitter"
          />
        </Link>
        <Link href="https://web.whatsapp.com" target="_blank">
          <ButtonComponent
            icon="pi pi-whatsapp"
            rounded
            raised
            tooltipOptions={{ position: "left" }}
            tooltip="Whatsapp"
            severity="success"
            className="mx-2 sm:m-0 hover:scale-110 transition-transform"
          />
        </Link>
        <Link href="https://www.instagram.com/" target="_blank">
          <ButtonComponent
            icon="pi pi-instagram"
            rounded
            raised
            tooltipOptions={{ position: "left" }}
            tooltip="Instagram"
            severity="help"
            className="mx-2 sm:m-0 hover:scale-110 transition-transform"
          />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
