import NotFoundPage from "@/pages/404/page";
import CaracteristicasPage from "@/pages/caracteristicas/page";
import UnderConstructionPage from "@/pages/construcion/page";
import NosotrosPage from "@/pages/nosotros/page";
import HomePage from "@/pages/home/page";
import ResultadosPage from "@/pages/resultados/page";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { useEffect } from "react";
import { useLocation } from "react-router-dom";
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    document.documentElement.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant", // Opcional: usa "smooth" para animación
    });
  }, [pathname]);

  return null;
};

export default function AppRouter() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/under-construction" element={<UnderConstructionPage />} />
        <Route path="/about" element={<NosotrosPage />} />
        <Route path="/features" element={<CaracteristicasPage />} />
        <Route path="/results" element={<ResultadosPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}
