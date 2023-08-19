import Image from "next/image";
import AosComponent from "./AosComponent";
import logo from "/public/Smartie.png";

export default async function PreguntasRespuestasComponent() {
  const preguntas = [
    {
      pregunta:
        "Cuáles son los tipos de eventos corporativos que pueden organizar?",
      respuesta: "",
    },
    {
      pregunta:
        "Cómo se llevará a cabo el registro de personas para los eventos?",
      respuesta: "",
    },
    {
      pregunta: "Qué tipo de sorteos interactivos ofrecen y cómo funcionan?",
      respuesta: "",
    },
    {
      pregunta:
        "Pueden adaptarse a diferentes ubicaciones y espacios para eventos?",
      respuesta: "",
    },
    {
      pregunta:
        "Tienen experiencia en la gestión de grandes volúmenes de registros de personas?",
      respuesta: "",
    },
    {
      pregunta:
        "Qué medidas de seguridad tienen en su sistema de registro para proteger los datos personales de los asistentes?",
      respuesta: "",
    },
    {
      pregunta:
        "Pueden personalizar el sistema de registro y el sorteo interactivo con la imagen de mi empresa y mis requisitos de marca?",
      respuesta: "",
    },
    {
      pregunta:
        "Cuál es la capacidad máxima de registros y participantes que pueden manejar en un evento?",
      respuesta: "",
    },
  ];
  return (
    <AosComponent data={"zoom-in"} duration="800">
      <article
        className="flex flex-col sm:flex-row h-screen"
        id="preguntasrespuestas"
      >
        <div className="sm:w-1/2 flex items-center justify-center mt-44 sm:m-0">
          <Image src={logo} width={100} height={100} alt="Logo" />
          <h2 className="font-bold text-2xl sm:text-3xl">
            Preguntas y Respuestas
          </h2>
        </div>
        <div className="sm:w-1/2 sm:flex sm:items-center sm:mx-4 mt-8 sm:m-0">
          <AosComponent data={"fade-right"} duration="1300">
            {preguntas.map((pregunta, index) => {
              return <p key={index} className="font-bold py-2">{pregunta.pregunta}</p>;
            })}
          </AosComponent>
        </div>
      </article>
    </AosComponent>
  );
}
