import { Link, NavLink, useNavigate } from "react-router-dom";
import { useUserStore } from "../../store/userStore";
import { useUIStore } from "../../store/uiStore";

const Header = () => {
  const name = useUserStore((state) => state.name);
  const resetUser = useUserStore((state) => state.reset);
  const toggleSidebar = useUIStore((state) => state.toggleSidebar);
  const navigate = useNavigate();

  const handleLogout = () => {
    resetUser();
    localStorage.removeItem("user-storage"); // garante limpeza persistente
    navigate("/");
  };

  return (
    <header className="bg-white border-b border-gray-200 px-[16px] md:px-12 h-[100px] flex items-center">
      <button onClick={toggleSidebar} className="cursor-pointer pr-6">
        <img src="./menu-svg.svg" alt="icone menu" className="pr-6" />
      </button>

      <div
        className="max-w-[1200px] flex-1 mx-auto flex justify-between items-center"
        style={{ transform: "translateX(-40px)" }}
      >
        <Link to={'/clientes'}>
        <img
          src="./logo.svg"
          width={100}
          height={49}
          alt="Teddy Logo"
          className="mr-6"
        />
        </Link>
        <nav className="nav items-center">
          <NavLink
            to="/clientes"
            className={({ isActive }) =>
              isActive
                ? "text-orange-500 font-medium border-b border-orange-500"
                : "text-black hover:text-gray-900"
            }
          >
            Clientes
          </NavLink>

          <NavLink
            to="/clientes-selecionados"
            className={({ isActive }) =>
              isActive
                ? "text-orange-500 font-medium border-b border-orange-500"
                : "text-black hover:text-gray-900"
            }
          >
            Clientes selecionados
          </NavLink>

          <button
            onClick={handleLogout}
            className="text-black hover:text-gray-900"
          >
            Sair
          </button>
        </nav>

        <div className="flex items-center gap-4 nav">
          <span className="text-black">
            Olá, <span className="font-bold">{name}!</span>
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;
