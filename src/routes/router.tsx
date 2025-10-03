import NotFoundPage from "@/404/page";
import CaracteristicasPage from "@/caracteristicas/page";
import UnderConstructionPage from "@/construcion/page";
import NosotrosPage from "@/nosotros/page";
import HomePage from "@/page";
import ResultadosPage from "@/resultados/page";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UnderConstructionPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/nosotros" element={<NosotrosPage />} />
        <Route path="/caracteristicas" element={<CaracteristicasPage />} />
        <Route path="/resultados" element={<ResultadosPage />} />
        {/* Puedes agregar rutas 404 o redirecciones aquí */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}
