import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ClientesPage from "../pages/ClientesPage";
import WelcomeRoute from "../pages/welcome/RemoteWelcome";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<WelcomeRoute />} />
        <Route path="/clientes" element={<ClientesPage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
