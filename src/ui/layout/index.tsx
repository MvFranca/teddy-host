import { useEffect } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import { useUserStore } from "../../store/userStore";
import { useNavigate } from "react-router-dom";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const name = useUserStore((state) => state.name);
  const navigate = useNavigate();
  useEffect(() => {
    if (!name) {
      navigate("/");
    }
  }, [name, navigate]);
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="flex-1 overflow-y-auto bg-gray-50">{children}</main>
      </div>
    </div>
  );
};

export default Layout;
