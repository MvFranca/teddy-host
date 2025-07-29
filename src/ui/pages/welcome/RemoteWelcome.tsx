import { Suspense } from "react";
import { useNavigate } from "react-router-dom";
import { useUserStore } from "../../../store/userStore";

const RemoteWelcome = await import("welcome/Welcome");

const WelcomeRoute = () => {
  const Welcome = RemoteWelcome.default;
  const setName = useUserStore((state) => state.setName);
  const navigate = useNavigate();

  const handleEnter = (name: string) => {
    setName(name);
    navigate("/clientes");
  };

  return (
    <Suspense fallback={<div>Carregando...</div>}>
      <Welcome onEnter={handleEnter} />
    </Suspense>
  );
};

export default WelcomeRoute;
