import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  Outlet,
} from "react-router-dom";
import WelcomeRoute from "../ui/pages/welcome/RemoteWelcome";
import Layout from "../ui/layout";
import ClientsRoute from "../ui/components/clients/RemoteClients";
import SelectClientsRoute from "../ui/components/clients/RemoteSelectClients";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<WelcomeRoute />} /> // sem Layout, sem Header
        <Route
          element={
            <Layout>
              <Outlet />
            </Layout>
          }
        >
          <Route path="/clientes" element={<ClientsRoute />} />
        </Route>

        <Route
          element={
            <Layout>
              <Outlet />
            </Layout>
          }
        >
          <Route path="/clientes-selecionados" element={<SelectClientsRoute />} />
        </Route>

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
