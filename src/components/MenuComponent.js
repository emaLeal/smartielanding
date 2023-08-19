import LinkComponent from "./LinkComponent";

export default async function MenuComponent() {
  const routes = [
    {
      redirect: "#mision",
      label: "Misión",
    },
    {
      redirect: "#vision",
      label: "Visión",
    },
    {
      redirect: "#preguntasrespuestas",
      label: "Preguntas y Respuestas",
    },
  ];
  return (
    <header className="fixed w-screen h-12 z-50">
      <nav>
        <ul className="flex justify-center">
          {routes.map((route, index) => {
            return (
              <li key={index} className="py-4 px-4">
                <LinkComponent route={route} />
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
