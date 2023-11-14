import { Poppins } from "next/font/google";
import Footer from "@/Components/Footer";
import Navbar from "@/Components/Navbar";
import ScrollToTopButton from "@/Components/ScrollToTopButton";
import "./globals.css";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  style: ["normal"],
  subsets: ["latin"],
});

export const metadata = {
  title: "DevScarlet - Frontend Developer",
  description: "Explora el mundo del desarrollo web con DevScarlet, un apasionado Frontend Developer. Descubre proyectos innovadores y experiencias web cautivadoras creadas con React, Next.js, Tailwind CSS y una variedad de frameworks y librerías. ¡Bienvenido a un viaje donde la estética se encuentra con la funcionalidad!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Navbar />
        {children}
        <ScrollToTopButton />
        <Footer />
      </body>
    </html>
  );
}
