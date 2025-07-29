export interface SidebarItem {
  label: string;
  icon: string;
  href: string;
}

export const sidebarItems: SidebarItem[] = [
  {
    label: "Home",
    icon: "./sidebar/home.svg",
    href: "/",
  },
  {
    label: "Clientes",
    icon: "./sidebar/clients.svg",
    href: "/clientes",
  },
  {
    label: "Clientes Selecionados",
    icon: "./sidebar/clientsSelected.svg",
    href: "/clientes-selecionados",
  },
];
