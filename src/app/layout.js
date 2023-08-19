import "./globals.css";
import { Albert_Sans } from "next/font/google";
import "aos/dist/aos.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";

const inter = Albert_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "Smartie",
  description:
    "Organización Gestora de Eventos de festividades, celebraciones y organizaciones de empresas para organizar incentivos a empleados",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%`}
      >
        {children}
      </body>
    </html>
  );
}
