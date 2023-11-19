import IMedia from "./IMedia";
import ISubcategory from "./ISubcategory";

export default interface ICategory {
  id: string;
  name: string;
  icon?: IMedia;
  subcategories: ISubcategory[];
}
