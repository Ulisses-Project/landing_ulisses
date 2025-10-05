import NotFoundPage from "@/pages/404/page";
import CaracteristicasPage from "@/pages/caracteristicas/page";
import UnderConstructionPage from "@/pages/construcion/page";
import NosotrosPage from "@/pages/nosotros/page";
import HomePage from "@/page";
import ResultadosPage from "@/pages/resultados/page";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UnderConstructionPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/about" element={<NosotrosPage />} />
        <Route path="/features" element={<CaracteristicasPage />} />
        <Route path="/results" element={<ResultadosPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}
