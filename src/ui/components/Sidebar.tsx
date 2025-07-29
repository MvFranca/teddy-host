import clsx from "clsx";
import { useUIStore } from "../../store/uiStore";

const Sidebar = () => {
  const isOpen = useUIStore((state) => state.isSidebarOpen);
  const closeSidebar = useUIStore((state) => state.closeSidebar);

  return (
    <>
      <div
        className={clsx(
          "fixed inset-0 bg-black/10 bg-opacity-40 z-40 transition-opacity duration-300",
          {
            "opacity-100 visible": isOpen,
            "opacity-0 invisible": !isOpen,
          }
        )}
        onClick={closeSidebar}
      />

      <aside
        className={clsx(
          "fixed top-0  left-0 h-full w-64 z-50 shadow-lg transform transition-transform duration-300",
          {
            "translate-x-0": isOpen,
            "translate-x-[calc(-100%-30px)]": !isOpen,
          }
        )}
      >
        <div className="w-full h-full flex flex-col">
          <div className="flex items-center gap-2 h-32 max-h-32 w-full justify-center backdrop-blur bg-white/10">
            <img src="./logo.svg" width={100} height={48.98} alt="Teddy Logo" />
          </div>
          <button
            onClick={closeSidebar}
            className={clsx(
              "absolute -right-[21px] top-[110px] -translate-y-1/2 w-[42px] h-[42px] bg-black rounded-full flex items-center justify-center hover:bg-white transition-colors",
              {
                hidden: !isOpen,
              }
            )}
          >
            <img src="./sidebar/arrow.svg" width={13} height={13} />
          </button>
          <ul className="space-y-2 w-full h-full  bg-white pt-12 pb-4">
            <li className=" hover:text-orange-500 cursor-pointer h-11 flex justify-start items-center gap-4 px-6 font-medium">
              <img src="./sidebar/home.svg" />
              Home
            </li>
            <li className=" hover:text-orange-500 cursor-pointer h-11 flex justify-start items-center gap-4 px-6 font-medium">
              <img src="./sidebar/clients.svg" />
              Clientes
            </li>
            <li className=" hover:text-orange-500 cursor-pointer h-11 flex justify-start items-center gap-4 px-6 font-medium">
              <img src="./sidebar/clientsSelected.svg" />
              Clientes Selecionados
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
