import { createContext } from "react";
import IAdmin from "../interfaces/IAdmin";

interface IAdminContex {
  admin: IAdmin | undefined;
  setAdmin: Function;
}
const AdminContext = createContext<IAdminContex|null>(null);
export default AdminContext;
