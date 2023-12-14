import INavProps from "../interfaces/INavProps";

const navLinks: Array<INavProps> = [
  { name: "Products", to: "/products", super: false },
  { name: "Orders", to: "/orders", super: false },
  { name: "Admins", to: "/admins", super: true },
  { name: "Categories", to: "/categories", super: true },
  { name: "Vendors", to: "/vendors", super: true },
  { name: "Properties", to: "/props", super: true },
];
export default navLinks;
