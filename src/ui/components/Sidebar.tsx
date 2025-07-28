import clsx from "clsx";
import { useUIStore } from "../../store/uiStore";

const Sidebar = () => {
  const isOpen = useUIStore((state) => state.isSidebarOpen);
  const closeSidebar = useUIStore((state) => state.closeSidebar);

  return (
    <>
      <div
        className={clsx(
          "fixed inset-0 bg-black bg-opacity-40 z-40 transition-opacity duration-300",
          {
            "opacity-100 visible": isOpen,
            "opacity-0 invisible": !isOpen,
          }
        )}
        onClick={closeSidebar}
      />

      <aside
        className={clsx(
          "fixed top-0 left-0 h-full w-64 bg-white z-50 shadow-lg transform transition-transform duration-300",
          {
            "translate-x-0": isOpen,
            "-translate-x-full": !isOpen,
          }
        )}
      >
        <div className="p-4">
          <h2 className="text-xl font-bold mb-4">Menu</h2>
          <ul className="space-y-2">
            <li className="hover:text-blue-600 cursor-pointer">Dashboard</li>
            <li className="hover:text-blue-600 cursor-pointer">Clientes</li>
            <li className="hover:text-blue-600 cursor-pointer">Configurações</li>
          </ul>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
