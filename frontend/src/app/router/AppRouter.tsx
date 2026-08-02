import { Navigate, Route, Routes } from "react-router-dom";

import DashboardPage from "../../features/dashboard/DashboardPage";
import ObjetivosPage from "../../features/objetivos/ObjetivosPage";
import HistoricoPage from "../../features/historico/HistoricoPage";
import EstatisticasPage from "../../features/estatisticas/EstatisticasPage";
import ConfiguracoesPage from "../../features/configuracoes/ConfiguracoesPage";
import NotFoundPage from "../../features/notfound/NotFoundPage";

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/dashboard" replace />} />

      <Route path="/dashboard" element={<DashboardPage />} />
      <Route path="/objetivos" element={<ObjetivosPage />} />
      <Route path="/historico" element={<HistoricoPage />} />
      <Route path="/estatisticas" element={<EstatisticasPage />} />
      <Route path="/configuracoes" element={<ConfiguracoesPage />} />

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
