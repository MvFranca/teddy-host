import { useUserStore } from "../store/userStore";

const ClientesPage = () => {
  const name = useUserStore((state) => state.name);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Bem-vindo, {name}!</h1>
    </div>
  );
};

export default ClientesPage;
