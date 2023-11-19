import IPropValue from "./Props/IPropValue";

export default interface ISubcategory {
  id: string;
  name: string;
  props: IPropValue[];
}
