import { BrowserRouter, Routes, Route, Navigate, Outlet } from "react-router-dom";
import ClientesPage from "../ui/pages/ClientesPage";
import WelcomeRoute from "../ui/pages/welcome/RemoteWelcome";
import Layout from "../ui/layout";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<WelcomeRoute />} />

        <Route
          element={
            <Layout>
              <Outlet />
            </Layout>
          }
        >
          <Route path="/clientes" element={<ClientesPage />} />
        </Route>

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
