import { Suspense } from "react";

const RemoteSelectClients = await import("clients/SelectClients");

const SelectClientsRoute = () => {
  const SelectClients = RemoteSelectClients.default;
  
  return (
    <Suspense fallback={<div>Carregando...</div>}>
      <SelectClients/>
    </Suspense>
  );
};

export default SelectClientsRoute;
