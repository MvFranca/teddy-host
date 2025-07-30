import { Suspense } from "react";

const RemoteClients = await import("clients/Clients");

const ClientsRoute = () => {
  const Clients = RemoteClients.default;

  return (
    <Suspense fallback={<div>Carregando...</div>}>
      <Clients/>
    </Suspense>
  );
};

export default ClientsRoute;
