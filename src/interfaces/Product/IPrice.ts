export default interface IPrice {
  price: number;
  qtyMin: number;
  qtyMax: number;
  oldPrice?:number
  id?:string|number
}
