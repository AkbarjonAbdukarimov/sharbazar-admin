import ILang from "./ILang";
import IMedia from "./IMedia";
import IProduct from "./Product/IProduct";

export default interface ICategory {
  _id: string;
  name: ILang;
  icon?: IMedia;
  products?: IProduct[];
}
