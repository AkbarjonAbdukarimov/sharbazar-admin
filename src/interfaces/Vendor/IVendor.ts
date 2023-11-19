import IProductMedia from "../Product/IProducMedia";
import IProduct from "../Product/IProduct";
import IVendorContacts from "./IVendorContacts";

export default interface IVendor {
  id: string;
  name: string;
  description: string;
  contacts: IVendorContacts;
  baner: IProductMedia;
  products?: IProduct[];
}
