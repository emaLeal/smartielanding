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
      redirect: '#preguntasrespuestas',
      label: 'Preguntas y Respuestas'
    }
  ];
  return (
    <div className="fixed w-screen flex justify-center h-12 z-50">
      {routes.map((route, index) => {
        return (
          <div key={index} className="py-4 px-4">
            <LinkComponent route={route} />
          </div>
        );
      })}
    </div>
  );
}
