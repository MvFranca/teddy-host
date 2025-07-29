import { RiHome5Fill, RiUser3Fill, RiUserStarFill } from "react-icons/ri";
import type { IconType } from "react-icons";

export interface SidebarItem {
  label: string;
  icon: IconType;
  href: string;
}

export const sidebarItems: SidebarItem[] = [
  {
    label: "Home",
    icon: RiHome5Fill,
    href: "/",
  },
  {
    label: "Clientes",
    icon: RiUser3Fill,
    href: "/clientes",
  },
  {
    label: "Clientes Selecionados",
    icon: RiUserStarFill,
    href: "/clientes-selecionados",
  },
];
