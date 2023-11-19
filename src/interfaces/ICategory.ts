import IMedia from "./IMedia";
import IProduct from "./Product/IProduct";

export default interface ICategory {
  _id: string;
  name: string;
  icon?: IMedia;
  products?:IProduct[];
}
