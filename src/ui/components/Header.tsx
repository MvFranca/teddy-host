import { useUserStore } from "../../store/userStore";
import { useUIStore } from "../../store/uiStore";

const Header = () => {
  const name = useUserStore((state) => state.name);
  const toggleSidebar = useUIStore((state) => state.toggleSidebar);

  return (
    <header
      className="bg-white border-b border-gray-200 sm:px-[50px] h-[100px] flex justify-between items-center px-4"
      style={{ boxShadow: "0px 2px 2px 0px rgba(0, 0, 0, 0.1)" }}
    >
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center gap-6">
          <button onClick={toggleSidebar} className="cursor-pointer">
            <img src="./menu-svg.svg" alt="icone menu" />
          </button>

          <div className="flex items-center gap-2">
            <img src="./logo.svg" width={100} height={48.98} alt="Teddy Logo" />
          </div>
        </div>

        <nav className="hidden sm:flex items-center gap-6">
          <a
            href="#"
            className="text-orange-500 font-medium border-b border-orange-500"
          >
            Clientes
          </a>
          <a href="#" className="text-black hover:text-gray-900">
            Clientes selecionados
          </a>

          <a href="#" className="text-black hover:text-gray-900">
            Sair
          </a>
        </nav>

        <div className="flex items-center gap-4">
          <a href="#" className="sm:hidden text-black hover:text-gray-900">
            Sair
          </a>
          <span className="hidden sm:inline text-black">
            Olá, <span className="font-bold">{name}!</span>
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;
